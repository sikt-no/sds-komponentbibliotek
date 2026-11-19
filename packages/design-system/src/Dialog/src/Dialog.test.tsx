import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { createRef } from "react";
import { Dialog } from "./Dialog";

describe("Dialog", () => {
  describe("a11y", () => {
    it("should be accessible when open", async () => {
      const { container } = render(
        <Dialog id="d1" open>
          <Dialog.Header divider>
            <h2 id="d1-title">Bekreft</h2>
            <p>Er du sikker?</p>
            <Dialog.Close aria-label="Lukk" />
          </Dialog.Header>
          <Dialog.Content>
            <p>Er du sikker?</p>
          </Dialog.Content>
          <Dialog.Footer divider>
            <button type="button">Avbryt</button>
            <button type="button">Bekreft</button>
          </Dialog.Footer>
        </Dialog>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render with the root class", () => {
      render(<Dialog id="d2" data-testid="test" />);
      expect(screen.getByTestId("test")).toHaveClass("sd3-dialog");
    });

    it("should default closedby to 'any'", () => {
      render(<Dialog id="d5" data-testid="test" />);
      expect(screen.getByTestId("test")).toHaveAttribute("closedby", "any");
    });

    it("should forward an object ref to the dialog element", () => {
      const ref = createRef<HTMLDialogElement>();
      render(<Dialog id="d6" ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLDialogElement);
    });

    it("should call a function ref with the dialog element", () => {
      const ref = jest.fn();
      render(<Dialog id="d7" ref={ref} />);
      expect(ref).toHaveBeenCalledWith(expect.any(HTMLDialogElement));
    });
  });

  describe("Header", () => {
    it("should omit data-divider by default", () => {
      render(
        <Dialog id="h1" open>
          <Dialog.Header data-testid="header" />
        </Dialog>,
      );
      expect(screen.getByTestId("header")).not.toHaveAttribute("data-divider");
    });
  });

  describe("Footer", () => {
    it("should omit data-divider by default", () => {
      render(
        <Dialog id="f1" open>
          <Dialog.Footer data-testid="footer" />
        </Dialog>,
      );
      expect(screen.getByTestId("footer")).not.toHaveAttribute("data-divider");
    });
  });

  describe("Close", () => {
    it("should wire command='close' and commandfor to the parent Dialog id", () => {
      render(
        <Dialog id="c1" open>
          <Dialog.Header>
            <Dialog.Close aria-label="Lukk" />
          </Dialog.Header>
        </Dialog>,
      );
      const button = screen.getByRole("button", { name: "Lukk" });
      expect(button).toHaveAttribute("command", "close");
      expect(button).toHaveAttribute("commandfor", "c1");
    });

    it("should throw when used outside a Dialog", () => {
      const spy = jest.spyOn(console, "error").mockImplementation(jest.fn());
      expect(() => render(<Dialog.Close aria-label="Lukk" />)).toThrow(
        /must be used inside a <Dialog>/,
      );
      spy.mockRestore();
    });
  });
});
