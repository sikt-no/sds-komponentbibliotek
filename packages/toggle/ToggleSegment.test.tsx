import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { ToggleSegment, ToggleSegmentProps } from "./ToggleSegment";
import { ToggleSegmentOption } from "./ToggleSegmentOption";
import userEvent from "@testing-library/user-event";

const Template = (props: Partial<ToggleSegmentProps>) => {
  return (
    <ToggleSegment legend="Legend" data-testid="test" {...props}>
      {[1, 2, 3].map((value) => (
        <ToggleSegmentOption
          label={`Label ${value}`}
          key={value}
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
          {[1, 2, 3].map((value) => (
            <ToggleSegmentOption
              key={value}
              value={value}
              checked={value === 2}
              onChange={() => {
                changeHandler(value);
              }}
              label={`Label ${value}`}
            />
          ))}
        </ToggleSegment>,
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

    it("should have variant modifier class name", async () => {
      const { container } = render(<Template variant="fixed" />);

      expect(
        container.getElementsByClassName(
          "sds-toggle-segment sds-toggle-segment--fixed",
        )[0],
      ).toBeInTheDocument();
    });
  });

  describe("ToggleSegmentOption", () => {
    it("should have automatically set input id", () => {
      const label = "Label";

      render(
        <ToggleSegment legend="Legend" data-testid="test">
          <ToggleSegmentOption
            value={0}
            checked
            onChange={jest.fn()}
            label={label}
          />
        </ToggleSegment>,
      );

      const htmlFor = screen.getByText(label).getAttribute("for");
      expect(screen.getAllByRole("radio")[0]).toHaveAttribute("id", htmlFor);
    });

    it("should use specified input id", () => {
      const label = "Label";
      const inputId = "input-id";

      render(
        <ToggleSegment legend="Legend" data-testid="test">
          <ToggleSegmentOption
            value={0}
            checked
            onChange={jest.fn()}
            label={label}
            id={inputId}
          />
        </ToggleSegment>,
      );

      const htmlFor = screen.getByText(label).getAttribute("for");
      expect(htmlFor).toBe(inputId);
      expect(screen.getAllByRole("radio")[0]).toHaveAttribute("id", htmlFor);
    });
  });
});
