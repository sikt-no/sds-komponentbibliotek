import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { ButtonLink } from "./ButtonLink";

describe("ButtonLink", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<ButtonLink href="#">Foo</ButtonLink>);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(
        <ButtonLink href="#" data-testid="test">
          Foo
        </ButtonLink>,
      );

      expect(screen.getByTestId("test")).toHaveClass("sds-button-link");
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have class name", async () => {
      render(
        <ButtonLink href="#" className="test-class-name" data-testid="test">
          Foo
        </ButtonLink>,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-button-link test-class-name",
      );
    });

    it("should have size modifier class name", async () => {
      render(
        <ButtonLink href="#" size="small" data-testid="test">
          Foo
        </ButtonLink>,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-button-link sds-button--small",
      );
    });

    it("should have left icon element", async () => {
      render(
        <ButtonLink data-testid="test" icon="icon" iconVariant="left">
          Foo
        </ButtonLink>,
      );

      expect(screen.getByText("icon")).toHaveClass("sds-button__icon");
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have right icon element", async () => {
      render(
        <ButtonLink data-testid="test" icon="icon" iconVariant="right">
          Foo
        </ButtonLink>,
      );

      expect(screen.getByText("icon")).toHaveClass("sds-button__icon");
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have icon element", async () => {
      render(
        <ButtonLink data-testid="test" icon="icon" iconVariant="only">
          Foo
        </ButtonLink>,
      );

      expect(screen.getByText("icon")).toHaveClass("sds-button__icon");
      expect(screen.getByTestId("test")).toHaveAccessibleName("Foo");
      expect(screen.queryByText("Foo")).not.toBeInTheDocument();
    });

    it("should have aria-label", async () => {
      render(
        <ButtonLink
          data-testid="test"
          icon="icon"
          iconVariant="only"
          aria-label="Foo"
        />,
      );

      expect(screen.getByText("icon")).toHaveClass("sds-button__icon");
      expect(screen.getByTestId("test")).toHaveAccessibleName("Foo");
      expect(screen.queryByText("Foo")).not.toBeInTheDocument();
    });

    it("should change component with asChild", async () => {
      render(
        <ButtonLink href="#" data-testid="test" asChild>
          <button>Foo</button>
        </ButtonLink>,
      );

      expect(screen.getByTestId("test")).toHaveRole("button");
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have icon with asChild", async () => {
      render(
        <ButtonLink href="#" data-testid="test" icon="icon" asChild>
          <button>Foo</button>
        </ButtonLink>,
      );

      expect(screen.getByTestId("test")).toHaveRole("button");
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have iconOnly with asChild", async () => {
      render(
        <ButtonLink
          href="#"
          data-testid="test"
          icon="icon"
          iconVariant="only"
          asChild
        >
          <button>Foo</button>
        </ButtonLink>,
      );

      expect(screen.getByTestId("test")).toHaveRole("button");
      expect(screen.getByLabelText("Foo")).toBeInTheDocument();
    });

    it("should render notification element", async () => {
      render(
        <ButtonLink
          href="#"
          data-testid="test"
          notification={<span data-testid="notification">5</span>}
        >
          Foo
        </ButtonLink>,
      );

      expect(screen.getByTestId("notification")).toBeInTheDocument();
      expect(screen.getByTestId("notification").parentElement).toHaveClass(
        "sds-button__notification",
      );
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should render without notification when not provided", async () => {
      const { container } = render(
        <ButtonLink href="#" data-testid="test">
          Foo
        </ButtonLink>,
      );

      expect(
        container.querySelector(".sds-button__notification"),
      ).not.toBeInTheDocument();
    });

    it("should render notification with icon only variant", async () => {
      render(
        <ButtonLink
          href="#"
          data-testid="test"
          icon="icon"
          iconVariant="only"
          notification={<span data-testid="notification">3</span>}
        >
          Foo
        </ButtonLink>,
      );

      expect(screen.getByTestId("notification")).toBeInTheDocument();
      expect(screen.getByText("icon")).toBeInTheDocument();
      expect(screen.queryByText("Foo")).not.toBeInTheDocument();
    });

    it("notification should be accessible", async () => {
      const { container } = render(
        <ButtonLink
          href="#"
          notification={
            <span role="status" aria-label="3 notifications">
              3
            </span>
          }
        >
          Foo
        </ButtonLink>,
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
