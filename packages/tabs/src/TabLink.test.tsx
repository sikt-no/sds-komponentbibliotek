import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { TabLink } from "./TabLink";

describe("TabLink", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<TabLink>Foo</TabLink>);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(
        <TabLink href="#" data-testid="test">
          Foo
        </TabLink>,
      );

      expect(screen.getByTestId("test")).toHaveClass("sds-tab-link");
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have class name", async () => {
      render(
        <TabLink href="#" className="test-class-name" data-testid="test">
          Foo
        </TabLink>,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-tab-link test-class-name",
      );
    });

    it("should have selected modifier & badge", async () => {
      render(
        <TabLink
          href="#"
          isSelected
          badge={<span>badge</span>}
          data-testid="test"
        >
          Foo
        </TabLink>,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-tab-link sds-tab-link--selected",
      );
      expect(screen.getByText("badge")).toHaveAttribute("visibility", "strong");
    });

    it("should have icon element", async () => {
      render(
        <TabLink data-testid="test" icon="icon">
          Foo
        </TabLink>,
      );

      expect(screen.getByText("icon")).toHaveClass("sds-tabs__tab-icon");
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have badge element", async () => {
      render(
        <TabLink data-testid="test" badge="badge">
          Foo
        </TabLink>,
      );

      expect(screen.getByText("badge")).toHaveClass("sds-tabs__tab-badge");
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should change component with asChild", async () => {
      render(
        <TabLink href="#" data-testid="test" asChild>
          <button>Foo</button>
        </TabLink>,
      );

      expect(screen.getByTestId("test")).toHaveRole("button");
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });
  });
});
