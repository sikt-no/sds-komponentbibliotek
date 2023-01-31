import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Pagination } from "./Pagination";

describe("Pagination", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <Pagination
          ariaLabel="foo"
          count={10}
          currentIndex={0}
          handleClick={jest.fn()}
        />
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(
        <Pagination
          ariaLabel="foo"
          count={10}
          currentIndex={0}
          handleClick={jest.fn()}
          data-testid="test"
        />
      );

      expect(screen.getByTestId("test")).toHaveClass("sds-pagination");
      expect(screen.getByTestId("test")).toBeInTheDocument();
    });

    it("calls click handler", async () => {
      const user = userEvent.setup();
      const clickHandler = jest.fn();
      render(
        <Pagination
          ariaLabel="foo"
          count={10}
          currentIndex={0}
          handleClick={clickHandler}
        />
      );

      await user.click(screen.getByText("2"));

      expect(clickHandler).toHaveBeenCalled();
      expect(clickHandler).toHaveBeenCalledWith(1);
    });

    it("calls click handler for previous button", async () => {
      const user = userEvent.setup();
      const clickHandler = jest.fn();
      render(
        <Pagination
          ariaLabel="foo"
          count={10}
          currentIndex={1}
          handleClick={clickHandler}
        />
      );

      await user.click(screen.getByLabelText("Vis forrige side 1"));

      expect(clickHandler).toHaveBeenCalled();
      expect(clickHandler).toHaveBeenCalledWith(0);
    });

    it("calls click handler for next button", async () => {
      const user = userEvent.setup();
      const clickHandler = jest.fn();
      render(
        <Pagination
          ariaLabel="foo"
          count={10}
          currentIndex={0}
          handleClick={clickHandler}
        />
      );

      await user.click(screen.getByLabelText("Vis neste side 2"));

      expect(clickHandler).toHaveBeenCalled();
      expect(clickHandler).toHaveBeenCalledWith(1);
    });

    it("should have class name", async () => {
      render(
        <Pagination
          ariaLabel="foo"
          count={10}
          currentIndex={0}
          handleClick={jest.fn()}
          className="test-class-name"
          data-testid="test"
        />
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-pagination test-class-name"
      );
    });
  });
});
