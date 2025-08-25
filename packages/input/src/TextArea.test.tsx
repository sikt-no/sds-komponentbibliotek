import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import { TextArea } from "./TextArea";

describe("TextArea", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<TextArea label="Foo" />);
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(<TextArea label="Bar" data-testid="test" />);

      expect(screen.getByTestId("test")).toBeInTheDocument();
      expect(screen.getByText("Bar")).toBeInTheDocument();
    });

    it("calls change handler", async () => {
      const user = userEvent.setup();
      const changeHandler = jest.fn();
      render(
        <TextArea
          label="Foo"
          rows={2}
          onChange={(e, val) => {
            changeHandler(val);
          }}
        />,
      );

      await user.type(screen.getByText("Foo"), "text");

      expect(changeHandler).toHaveBeenCalledWith("t");
      expect(changeHandler).toHaveBeenCalledWith("text");
    });

    it("should have class name", async () => {
      const { container } = render(
        <TextArea label="Foo" className="test-class-name" />,
      );

      expect(
        container.getElementsByClassName("sds-input test-class-name")[0],
      ).toBeInTheDocument();
    });

    it("should show error text", async () => {
      const { container } = render(
        <TextArea label="Foo" data-testid="test" errorText="Bar" />,
      );

      expect(screen.getByTestId("test")).toHaveAttribute("aria-invalid");
      expect(screen.getByTestId("test")).toHaveAttribute("aria-errormessage");
      expect(screen.getByTestId("test")).toHaveAttribute("aria-describedby");

      expect(
        container.getElementsByClassName("sds-input--error")[0],
      ).toBeInTheDocument();

      expect(screen.getByRole("textbox")).toBeInvalid();

      const errorEl = screen.getByText("Bar");
      expect(errorEl).toBeInTheDocument();
      expect(errorEl).toHaveClass("sds-form__help-text", { exact: false });
    });

    it("should show help text", async () => {
      render(<TextArea label="Foo" data-testid="test" helpText="Bar" />);

      expect(screen.getByTestId("test")).toHaveAttribute("aria-describedby");

      expect(screen.getByRole("textbox")).not.toBeInvalid();

      const helpEl = screen.getByText("Bar");
      expect(helpEl).toBeInTheDocument();
      expect(helpEl).toHaveClass("sds-form__help-text", { exact: false });
    });

    it("should have aria attributes set correctly when help and error text is not set", async () => {
      render(<TextArea label="Foo" data-testid="test" />);

      const textAreaEl = screen.getByTestId("test");
      expect(textAreaEl).toHaveAttribute("aria-invalid", "false");
      expect(textAreaEl).not.toHaveAttribute("aria-errormessage");
      expect(textAreaEl).not.toHaveAttribute("aria-describedby");

      expect(screen.getByRole("textbox")).not.toBeInvalid();
    });

    it("should have icon element", async () => {
      render(<TextArea label="Foo" icon="icon" />);

      expect(screen.getByText("icon")).toBeInTheDocument();
    });

    it("should support aria-labelledby", () => {
      render(
        <>
          <div id="label">Foo</div>
          <TextArea aria-labelledby="label" />
        </>,
      );

      expect(screen.getByRole("textbox", { name: "Foo" })).toBeInTheDocument();
    });
  });
});
