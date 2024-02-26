import { render, screen } from "@testing-library/react";
import { Tab } from "./Tab";

describe("Tab", () => {
  describe("api", () => {
    it("should not render if outside context provider", async () => {
      const spy = jest
        .spyOn(global.console, "warn")
        .mockImplementationOnce(() => jest.fn);
      render(<Tab>Tab 1</Tab>);

      expect(screen.queryByText("Tab 1")).toBeNull();
      expect(spy).toHaveBeenCalled();
    });
  });
});
