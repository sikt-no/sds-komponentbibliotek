import { render, screen } from "@testing-library/react";
import { TabPanel } from "./TabPanel";

describe("TabPanel", () => {
  describe("api", () => {
    it("should not render if outside context provider", async () => {
      const spy = jest
        .spyOn(global.console, "warn")
        .mockImplementationOnce(() => jest.fn);
      render(<TabPanel>Content 1</TabPanel>);

      expect(screen.queryByText("Content 1")).toBeNull();
      expect(spy).toHaveBeenCalled();
    });
  });
});
