import "@testing-library/jest-dom";
import { toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

global.ResizeObserver = class ResizeObserver {
  observe() {
    /* empty */
  }
  unobserve() {
    /* empty */
  }
  disconnect() {
    /* empty */
  }
};
