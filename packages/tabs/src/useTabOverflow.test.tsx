import { act, render, screen } from "@testing-library/react";
import { useTabOverflow } from "./useTabOverflow";

// --- ResizeObserver mock ---
// jest.setup.ts har en no-op mock; vi trenger en som lar oss trigge callbacks.

let triggerResize: (() => void) | null = null;

beforeEach(() => {
  triggerResize = null;
  global.ResizeObserver = jest
    .fn()
    .mockImplementation((cb: ResizeObserverCallback) => ({
      observe: jest.fn(() => {
        triggerResize = () => {
          cb([], {} as ResizeObserver);
        };
      }),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
});

afterEach(() => {
  jest.restoreAllMocks();
});

const widthMap = new WeakMap<Element, number>();

beforeEach(() => {
  jest
    .spyOn(HTMLElement.prototype, "offsetWidth", "get")
    .mockImplementation(function (this: HTMLElement) {
      return widthMap.get(this) ?? 0;
    });
});

function TestTabs({
  tabCount,
  selectedIndex = 0,
}: {
  tabCount: number;
  selectedIndex?: number;
}) {
  const { containerRef, cutIndex } = useTabOverflow(selectedIndex, tabCount);
  return (
    <div ref={containerRef} data-testid="container" data-cut-index={cutIndex}>
      {Array.from({ length: tabCount }, (_, i) => (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button key={i} role="tab" data-testid={`tab-${i}`} />
      ))}
    </div>
  );
}

function setWidths(containerWidth: number, tabWidths: number[]) {
  widthMap.set(screen.getByTestId("container"), containerWidth);
  screen.getAllByRole("tab").forEach((tab, i) => {
    widthMap.set(tab, tabWidths[i] ?? 0);
  });
}

function getCutIndex() {
  return Number(screen.getByTestId("container").getAttribute("data-cut-index"));
}

describe("useTabOverflow", () => {
  describe("initial state", () => {
    it("cutIndex er lik tabCount når container ikke har bredde (JSDOM)", () => {
      render(<TestTabs tabCount={4} />);
      expect(getCutIndex()).toBe(4);
    });
  });

  describe("overflow-kalkyle", () => {
    it("cutIndex er tabCount når alle tabs får plass", () => {
      render(<TestTabs tabCount={3} />);
      // 100+100+100 = 300 ≤ 400, alt passer
      setWidths(400, [100, 100, 100]);
      act(() => triggerResize?.());
      expect(getCutIndex()).toBe(3);
    });

    it("kutter tabs når container er for smal", () => {
      render(<TestTabs tabCount={4} />);
      // available=250, space for ikke-siste = 250-48=202
      // acc: 100 OK → 200 OK → 300 > 202 → cut=2
      setWidths(250, [100, 100, 100, 100]);
      act(() => triggerResize?.());
      expect(getCutIndex()).toBe(2);
    });

    it("reserverer ikke menyknapp-plass (48px) for siste tab", () => {
      render(<TestTabs tabCount={3} />);
      // Nøyaktig plass til alle 3 uten menyknapp-reservasjon på siste
      // space for tab 0 og 1 = 300-48=252; acc=100+100=200 OK
      // space for tab 2 (siste) = 300; acc=300 ≤ 300 → alt passer
      setWidths(300, [100, 100, 100]);
      act(() => triggerResize?.());
      expect(getCutIndex()).toBe(3);
    });

    it("kutter fra første tab som ikke får plass", () => {
      render(<TestTabs tabCount={5} />);
      // space=300-48=252; acc: 80 → 160 → 240 OK → 320 > 252 → cut=3
      setWidths(300, [80, 80, 80, 80, 80]);
      act(() => triggerResize?.());
      expect(getCutIndex()).toBe(3);
    });
  });

  describe("selectedIndex", () => {
    it("forskyver cut bakover slik at valgt tab forblir synlig", () => {
      render(<TestTabs tabCount={4} selectedIndex={2} />);
      // Uten justering: cut=2, selectedIndex=2 ≥ cutIndex=2
      // → newCut = max(0, 2-1) = 1
      setWidths(250, [100, 100, 100, 100]);
      act(() => triggerResize?.());
      expect(getCutIndex()).toBe(1);
    });

    it("forskyver ikke cut når valgt tab er synlig", () => {
      render(<TestTabs tabCount={4} selectedIndex={0} />);
      setWidths(250, [100, 100, 100, 100]);
      act(() => triggerResize?.());
      // selectedIndex=0 < cutIndex=2, ingen forskyvning
      expect(getCutIndex()).toBe(2);
    });
  });

  describe("bredde-cache", () => {
    it("bruker cachet bredde når tab har sds-screen-reader-only-klassen", () => {
      render(<TestTabs tabCount={3} />);

      // Steg 1: mål riktige bredder (cache populeres)
      setWidths(400, [100, 100, 200]);
      act(() => triggerResize?.());
      expect(getCutIndex()).toBe(3); // alle passer

      // Steg 2: trekk container inn – tab[2] (200px) overflyter
      // space=300-48=252; 100+100=200 OK, 200+200=400 > 300 → cut=2
      setWidths(300, [100, 100, 200]);
      act(() => triggerResize?.());
      expect(getCutIndex()).toBe(2);

      // Steg 3: simuler at tab[2] er sr-only – CSS-override gir feil offsetWidth
      const tab2 = screen.getByTestId("tab-2");
      tab2.classList.add("sds-screen-reader-only");
      widthMap.set(tab2, 17); // feil: kun padding, ikke reell bredde

      // Steg 4: container forblir 300px, men trigger en ny kalkyle
      // Uten cache: 100+100+17=217 ≤ 300 → cut=3 (feil – tab[2] er 200px og passer ikke)
      // Med cache:  100+100+200=400 > 300 → cut=2 (riktig)
      act(() => triggerResize?.());
      expect(getCutIndex()).toBe(2);
    });

    it("oppdaterer cache når sr-only tab blir synlig igjen", () => {
      render(<TestTabs tabCount={3} />);

      // Start: alt passer, cache = [100, 100, 200]
      setWidths(400, [100, 100, 200]);
      act(() => triggerResize?.());

      // Trekk inn – cut=2
      setWidths(300, [100, 100, 200]);
      act(() => triggerResize?.());
      expect(getCutIndex()).toBe(2);

      // Utvid tilbake – tab[2] er ikke lenger sr-only, riktig bredde
      setWidths(450, [100, 100, 200]);
      act(() => triggerResize?.());
      // 100+100+200=400 ≤ 450 → cut=3
      expect(getCutIndex()).toBe(3);
    });
  });

  describe("resize", () => {
    it("oppdaterer cutIndex når container smalner", () => {
      render(<TestTabs tabCount={3} />);

      setWidths(400, [100, 100, 100]);
      act(() => triggerResize?.());
      expect(getCutIndex()).toBe(3);

      setWidths(200, [100, 100, 100]);
      act(() => triggerResize?.());
      // space=200-48=152; acc=100 OK, 200 > 152 → cut=1
      expect(getCutIndex()).toBe(1);
    });

    it("oppdaterer cutIndex når container utvides (bruker cache)", () => {
      render(<TestTabs tabCount={3} />);

      // Start smal – cut=1
      setWidths(200, [100, 100, 100]);
      act(() => triggerResize?.());
      expect(getCutIndex()).toBe(1);

      // Merk tab[1] og tab[2] som sr-only med feil bredde
      [screen.getByTestId("tab-1"), screen.getByTestId("tab-2")].forEach(
        (tab) => {
          tab.classList.add("sds-screen-reader-only");
          widthMap.set(tab, 17);
        },
      );

      // Utvid til 350px – med cache 100px per tab, 100+100+100=300 ≤ 350 → cut=3
      widthMap.set(screen.getByTestId("container"), 350);
      act(() => triggerResize?.());
      expect(getCutIndex()).toBe(3);
    });
  });

  describe("ResizeObserver", () => {
    it("observerer container-elementet", () => {
      render(<TestTabs tabCount={3} />);
      const instance = (global.ResizeObserver as jest.Mock).mock.results[0]
        .value as { observe: jest.Mock; disconnect: jest.Mock };
      expect(instance.observe).toHaveBeenCalledWith(
        screen.getByTestId("container"),
      );
    });

    it("kobler fra ResizeObserver ved unmount", () => {
      const { unmount } = render(<TestTabs tabCount={3} />);
      const { disconnect } = (global.ResizeObserver as jest.Mock).mock
        .results[0].value as { observe: jest.Mock; disconnect: jest.Mock };
      unmount();
      expect(disconnect).toHaveBeenCalled();
    });
  });
});
