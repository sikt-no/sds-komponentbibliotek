import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { ButtonGroup } from "./ButtonGroup";

describe("ButtonGroup", () => {
  describe("Accessibility", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <ButtonGroup>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </ButtonGroup>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe("Custom Class Name", () => {
    it("should have a custom class name", async () => {
      render(
        <ButtonGroup data-testid="test" className="test-class-name">
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </ButtonGroup>
      );
      expect(screen.getByTestId("test")).toHaveClass("test-class-name");
    });
  });

  describe("Orientation Modifier Class", () => {
    it("should have a modifier class name for horizontal orientation", async () => {
      render(
        <ButtonGroup data-testid="test" orientation="horizontal">
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </ButtonGroup>
      );
      expect(screen.getByTestId("test")).toHaveClass(
        "sds-button-group--horizontal"
      );
    });

    it("should have a modifier class name for vertical orientation", async () => {
      render(
        <ButtonGroup data-testid="test" orientation="vertical">
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </ButtonGroup>
      );
      expect(screen.getByTestId("test")).toHaveClass(
        "sds-button-group--vertical"
      );
    });

    it("should have a modifier class name for responsive orientation", async () => {
      render(
        <ButtonGroup data-testid="test" orientation="auto">
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </ButtonGroup>
      );
      expect(screen.getByTestId("test")).toHaveClass("sds-button-group--auto");
    });
  });

  describe("Alignment Modifier Class", () => {
    it("should have a modifier class name for left alignment", async () => {
      render(
        <ButtonGroup data-testid="test" variant="left">
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </ButtonGroup>
      );
      expect(screen.getByTestId("test")).toHaveClass("sds-button-group--left");
    });

    it("should have a modifier class name for right alignment", async () => {
      render(
        <ButtonGroup data-testid="test" variant="right">
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </ButtonGroup>
      );
      expect(screen.getByTestId("test")).toHaveClass("sds-button-group--right");
    });

    it("should have a modifier class name for split alignment", async () => {
      render(
        <ButtonGroup data-testid="test" variant="split">
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </ButtonGroup>
      );
      expect(screen.getByTestId("test")).toHaveClass("sds-button-group--split");
    });
  });
});
