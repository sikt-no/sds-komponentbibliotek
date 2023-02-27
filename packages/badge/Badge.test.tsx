import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { Badge } from "./Badge";

describe("Badge", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<Badge>Foo</Badge>);
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});

describe("api", () => {
  it("Badge should render", async () => {
    render(<Badge data-testid="test">Foo</Badge>);

    expect(screen.getByTestId("test")).toHaveClass("sds-badge");
    expect(screen.getByText("Foo")).toBeInTheDocument();
  });

  it("should have class name", async () => {
    render(
      <Badge data-testid="test" className="test-class-name">
        Foo
      </Badge>
    );

    expect(screen.getByTestId("test")).toHaveClass("sds-badge test-class-name");
  });

  it("should have icon element", async () => {
    render(<Badge icon="icon">Foo</Badge>);

    expect(screen.getByText("icon")).toHaveClass("sds-badge__icon");
    expect(screen.getByText("Foo")).toBeInTheDocument();
  });
});
