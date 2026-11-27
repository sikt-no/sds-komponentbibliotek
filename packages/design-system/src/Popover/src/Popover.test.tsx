import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { Popover } from "./Popover";

describe("Popover", () => {
  describe("api", () => {
    it("should render with the root class, id and popover='auto'", () => {
      render(<Popover id="p3" data-testid="test" />);

      const root = screen.getByTestId("test");
      expect(root).toHaveClass("sd3-popover");
      expect(root).toHaveAttribute("id", "p3");
      expect(root).toHaveAttribute("popover", "auto");
    });

    it("should merge a custom className with the root class", () => {
      render(
        <Popover id="p4" data-testid="test" className="test-class-name" />,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sd3-popover test-class-name",
      );
    });

    it("should forward an object ref to the div element", () => {
      const ref = createRef<HTMLDivElement>();
      render(<Popover id="p5" ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it("should call a function ref with the div element", () => {
      const ref = jest.fn();
      render(<Popover id="p6" ref={ref} />);
      expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
    });
  });
});
