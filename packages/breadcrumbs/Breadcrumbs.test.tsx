import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Breadcrumbs } from "./Breadcrumbs";
import { BreadcrumbItem } from "./BreadcrumbItem";

describe("Breadcrumbs", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <Breadcrumbs aria-label="foo">
          <BreadcrumbItem>
            <a href="/">Level 1</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/">Level 2</a>
          </BreadcrumbItem>
        </Breadcrumbs>,
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(
        <Breadcrumbs aria-label="foo" data-testid="test-group">
          <BreadcrumbItem data-testid="test-item">
            <a href="/">Level 1</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/">Level 2</a>
          </BreadcrumbItem>
        </Breadcrumbs>,
      );
      expect(screen.getByTestId("test-group")).toHaveClass("sds-breadcrumbs");
      expect(screen.getByTestId("test-group")).toBeInTheDocument();

      expect(screen.getByTestId("test-item")).toHaveClass(
        "sds-breadcrumbs-item",
      );
      expect(screen.getByTestId("test-item")).toBeInTheDocument();
    });
  });

  it("should have a class name", async () => {
    render(
      <Breadcrumbs
        aria-label="foo"
        className="test-class-name"
        data-testid="test-group"
      >
        <BreadcrumbItem
          className="test-class-name-on-item"
          data-testid="test-item"
        >
          <a href="/">Level 1</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/">Level 2</a>
        </BreadcrumbItem>
      </Breadcrumbs>,
    );
    expect(screen.getByTestId("test-group")).toHaveClass(
      "sds-breadcrumbs test-class-name",
    );
    expect(screen.getByTestId("test-item")).toHaveClass(
      "sds-breadcrumbs-item test-class-name-on-item",
    );
  });
});
