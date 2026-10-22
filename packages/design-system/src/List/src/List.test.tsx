import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { List } from "./List";

const variants = [
  {
    name: "ordered",
    Component: List.Ordered,
    tag: "OL",
    children: <List.Item>Item</List.Item>,
  },
  {
    name: "unordered",
    Component: List.Unordered,
    tag: "UL",
    children: <List.Item>Item</List.Item>,
  },
  {
    name: "description",
    Component: List.Description,
    tag: "DL",
    children: (
      <>
        <List.Term>Term</List.Term>
        <List.Details>Details</List.Details>
      </>
    ),
  },
];

describe("List", () => {
  describe.each(variants)("$name", ({ name, Component, tag, children }) => {
    describe("a11y", () => {
      it("should be accessible", async () => {
        const { container } = render(<Component>{children}</Component>);

        expect(await axe(container)).toHaveNoViolations();
      });
    });

    describe("api", () => {
      it("should render", async () => {
        render(<Component data-testid="test">{children}</Component>);

        const list = screen.getByTestId("test");
        expect(list.tagName).toBe(tag);
        expect(list).toHaveClass("sd3-list");
        expect(list).toHaveAttribute("data-variant", name);
      });

      it("should have class name", async () => {
        render(
          <Component data-testid="test" className="test-class-name">
            {children}
          </Component>,
        );

        expect(screen.getByTestId("test")).toHaveClass(
          "sd3-list test-class-name",
        );
      });
    });
  });

  it("should pass ordered list attributes", async () => {
    render(
      <List.Ordered data-testid="test" start={3} reversed>
        <List.Item>Item</List.Item>
      </List.Ordered>,
    );

    const list = screen.getByTestId("test");
    expect(list).toHaveAttribute("start", "3");
    expect(list).toHaveAttribute("reversed");
  });
});
