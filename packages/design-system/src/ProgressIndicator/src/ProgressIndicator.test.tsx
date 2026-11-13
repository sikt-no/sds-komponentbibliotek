import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import type { ReactNode } from "react";
import { ProgressIndicator } from "./ProgressIndicator";

const sampleSteps = (
  <>
    <ProgressIndicator.Step status="completed" label="Konto" />
    <ProgressIndicator.Step status="current" label="Profil" />
    <ProgressIndicator.Step status="upcoming" label="Oppsummering" />
  </>
);

describe("ProgressIndicator", () => {
  it("should be accessible", async () => {
    const { container } = render(
      <ProgressIndicator aria-label="Søknadsprosess">
        {sampleSteps}
      </ProgressIndicator>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("should merge consumer className after the root class", () => {
    render(
      <ProgressIndicator data-testid="pi" className="x" aria-label="Flyt">
        {sampleSteps}
      </ProgressIndicator>,
    );
    expect(screen.getByTestId("pi")).toHaveClass("sd3-progress-indicator x");
  });

  describe("description", () => {
    it("renders description inside the step", () => {
      render(
        <ProgressIndicator size="expanded" aria-label="Flyt">
          <ProgressIndicator.Step
            status="current"
            label="Profil"
            description="Fyll inn navn og e-post"
          />
        </ProgressIndicator>,
      );
      expect(screen.getByText("Fyll inn navn og e-post")).toBeInTheDocument();
    });

    it("omits description when not provided", () => {
      render(
        <ProgressIndicator size="expanded" aria-label="Flyt">
          <ProgressIndicator.Step status="current" label="Profil" />
        </ProgressIndicator>,
      );
      expect(
        screen.queryByText("Fyll inn navn og e-post"),
      ).not.toBeInTheDocument();
    });
  });

  describe("asChild", () => {
    /* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/control-has-associated-label --
       Slot injects the label content into the custom child at render time. */

    it("renders a native anchor with merged props and label", () => {
      render(
        <ProgressIndicator aria-label="Flyt">
          <ProgressIndicator.Step asChild status="upcoming" label="Profil">
            <a href="/profile" />
          </ProgressIndicator.Step>
        </ProgressIndicator>,
      );
      const link = screen.getByRole("link", { name: "Profil" });
      expect(link).toHaveAttribute("href", "/profile");
    });

    it("renders a framework-like custom link component", () => {
      const MockNextLink = ({
        href,
        children,
        ...rest
      }: {
        href: string;
        children?: ReactNode;
      } & Record<string, unknown>) => (
        <a href={href} data-framework="mock-next" {...rest}>
          {children}
        </a>
      );
      render(
        <ProgressIndicator aria-label="Flyt">
          <ProgressIndicator.Step asChild status="upcoming" label="Profil">
            <MockNextLink href="/profile" />
          </ProgressIndicator.Step>
        </ProgressIndicator>,
      );
      expect(screen.getByRole("link", { name: "Profil" })).toHaveAttribute(
        "data-framework",
        "mock-next",
      );
    });

    it("fires onClick on a button child", async () => {
      const user = userEvent.setup();
      const onClick = jest.fn();
      render(
        <ProgressIndicator aria-label="Flyt">
          <ProgressIndicator.Step asChild status="upcoming" label="Profil">
            <button type="button" onClick={onClick} />
          </ProgressIndicator.Step>
        </ProgressIndicator>,
      );
      await user.click(screen.getByRole("button", { name: "Profil" }));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("marks disabled asChild links aria-disabled + tabindex=-1 and preventsDefault on click", async () => {
      const user = userEvent.setup();
      const onClick = jest.fn();
      render(
        <ProgressIndicator aria-label="Flyt">
          <ProgressIndicator.Step asChild status="disabled" label="Profil">
            <a href="/profile" onClick={onClick} />
          </ProgressIndicator.Step>
        </ProgressIndicator>,
      );
      const link = screen.getByText("Profil").closest("a");
      expect(link).toHaveAttribute("aria-disabled", "true");
      expect(link).toHaveAttribute("tabindex", "-1");
      if (link) await user.click(link);
      const calls = onClick.mock.calls as [{ defaultPrevented: boolean }][];
      expect(calls[0]?.[0]?.defaultPrevented).toBe(true);
    });

    /* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/control-has-associated-label */
  });

  describe("statusLabels", () => {
    it("appends a visually-hidden status label when provided", () => {
      render(
        <ProgressIndicator
          aria-label="Flyt"
          statusLabels={{
            completed: "fullført",
            disabled: "deaktivert",
          }}
        >
          <ProgressIndicator.Step status="completed" label="Konto" />
          <ProgressIndicator.Step status="current" label="Profil" />
          <ProgressIndicator.Step status="disabled" label="Bekreft" />
        </ProgressIndicator>,
      );
      const items = screen.getAllByRole("listitem");
      expect(items[0]).toHaveTextContent(/Konto,\s*fullført/);
      expect(items[1]).toHaveTextContent(/^Profil$/); // current → no suffix supplied
      expect(items[2]).toHaveTextContent(/Bekreft,\s*deaktivert/);
    });

    it("stays silent when statusLabels is not provided", () => {
      render(
        <ProgressIndicator aria-label="Flyt">
          <ProgressIndicator.Step status="completed" label="Konto" />
        </ProgressIndicator>,
      );
      expect(screen.getByRole("listitem")).toHaveTextContent(/^Konto$/);
    });
  });

  describe("interactive prop", () => {
    it("forces interactive when override is true, even without href/onClick", () => {
      render(
        <ProgressIndicator aria-label="Flyt">
          <ProgressIndicator.Step
            asChild
            interactive
            status="upcoming"
            label="Profil"
          >
            <div />
          </ProgressIndicator.Step>
        </ProgressIndicator>,
      );
      expect(screen.getByRole("listitem")).toHaveAttribute(
        "data-interactive",
        "true",
      );
    });

    it("disables interactive styling when override is false, even on a link", () => {
      render(
        <ProgressIndicator aria-label="Flyt">
          <ProgressIndicator.Step
            asChild
            interactive={false}
            status="upcoming"
            label="Profil"
          >
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/control-has-associated-label */}
            <a href="/profile" />
          </ProgressIndicator.Step>
        </ProgressIndicator>,
      );
      expect(screen.getByRole("listitem")).not.toHaveAttribute(
        "data-interactive",
      );
    });

    it("disabled always wins over interactive override", () => {
      render(
        <ProgressIndicator aria-label="Flyt">
          <ProgressIndicator.Step
            asChild
            interactive
            status="disabled"
            label="Profil"
          >
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/control-has-associated-label */}
            <a href="/profile" />
          </ProgressIndicator.Step>
        </ProgressIndicator>,
      );
      expect(screen.getByRole("listitem")).not.toHaveAttribute(
        "data-interactive",
      );
    });
  });
});
