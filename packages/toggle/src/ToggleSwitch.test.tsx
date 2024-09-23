import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import { ToggleSwitch } from "./ToggleSwitch";

describe("Toggle Switch", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<ToggleSwitch label="Foo" />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it(`toggle should render`, async () => {
      render(<ToggleSwitch label="Foo" />);

      expect(screen.getByTestId("sds-toggle-switch")).toHaveClass(
        "sds-toggle-switch",
      );
      expect(screen.getByTestId("sds-toggle-switch")).toBeInTheDocument();
    });

    it("calls change handler", async () => {
      const user = userEvent.setup();
      const changeHandler = jest.fn();
      render(
        <ToggleSwitch
          onChange={(val) => {
            changeHandler(val);
          }}
          label="Foo"
        />,
      );

      const label = screen.getByLabelText("Foo");
      await user.click(label);

      expect(changeHandler).toHaveBeenCalled();
    });

    it("should not be checked", async () => {
      render(<ToggleSwitch label="Foo" />);

      expect(screen.getByLabelText("Foo")).not.toBeChecked();
    });

    it("should be checked", async () => {
      render(<ToggleSwitch checked label="Foo" />);

      expect(screen.getByLabelText("Foo")).toBeChecked();
    });

    it("should render the label after the control", async () => {
      render(<ToggleSwitch label="Foo" />);

      const container = screen.getByTestId("sds-toggle-switch");
      const label = screen.getByText("Foo");
      const control = container.getElementsByClassName(
        "sds-toggle-switch__inner",
      )[0];
      expect(label.compareDocumentPosition(control)).toBe(
        Node.DOCUMENT_POSITION_PRECEDING,
      );
    });

    it("should render the label in front of the control", async () => {
      render(<ToggleSwitch labelFirst label="Foo" />);

      const container = screen.getByTestId("sds-toggle-switch");
      const label = screen.getByText("Foo");
      const control = container.getElementsByClassName(
        "sds-toggle-switch__inner",
      )[0];
      expect(label.compareDocumentPosition(control)).toBe(
        Node.DOCUMENT_POSITION_FOLLOWING,
      );
    });

    it("should have error class modifier", async () => {
      render(<ToggleSwitch checked error label="Foo" />);

      expect(screen.getByTestId("sds-toggle-switch")).toHaveClass(
        "sds-toggle-switch--error",
      );
    });

    it("should support aria-labelledby", () => {
      render(
        <>
          <div id="label">Foo</div>
          <ToggleSwitch aria-labelledby="label" />
        </>,
      );

      expect(screen.getByRole("switch", { name: "Foo" })).toBeInTheDocument();
    });
  });
});
