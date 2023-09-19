import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { ToggleSegment } from "./ToggleSegment";
import { ToggleSegmentOption } from "./ToggleSegmentOption";
import userEvent from "@testing-library/user-event";

const Template = () => {
  return (
    <ToggleSegment legend="Legend" data-testid="test">
      {[1, 2, 3].map((value, index) => (
        <ToggleSegmentOption
          label={`Label ${value}`}
          key={index}
          value={value}
          checked={value === 2}
          onChange={() => {
            return;
          }}
        />
      ))}
    </ToggleSegment>
  );
};

describe("Toggle Segment", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<Template />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it(`toggle should render`, async () => {
      render(<Template />);

      expect(screen.getByText("Legend")).toBeVisible();
      expect(screen.getByText("Legend")).toBeInTheDocument();

      expect(screen.getByTestId("test")).toBeInTheDocument();
      expect(screen.getByTestId("test")).toBeVisible();
    });

    it("calls change handler", async () => {
      const user = userEvent.setup();
      const changeHandler = jest.fn();
      render(
        <ToggleSegment legend="Test">
          {[1, 2, 3].map((value, index) => (
            <ToggleSegmentOption
              key={index}
              value={value}
              checked={value === 2}
              onChange={() => changeHandler(value)}
              label={`Label ${value}`}
            >
              {value}
            </ToggleSegmentOption>
          ))}
        </ToggleSegment>
      );

      const label = screen.getByLabelText("Label 1");
      await user.click(label);

      expect(changeHandler).toHaveBeenCalled();
      expect(changeHandler).toHaveBeenCalledWith(1);
    });

    it("should not be checked", async () => {
      render(<Template />);

      expect(screen.getByLabelText("Label 1")).not.toBeChecked();
    });

    it("should be checked", async () => {
      render(<Template />);

      expect(screen.getByLabelText("Label 2")).toBeChecked();
    });
  });
});
