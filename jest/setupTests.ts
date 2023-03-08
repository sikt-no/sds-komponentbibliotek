import "@testing-library/jest-dom/extend-expect";
import { toHaveNoViolations } from "jest-axe";

jest.mock("nanoid", () => {
  return {
    nanoid: jest.fn(),
  };
});

expect.extend(toHaveNoViolations);
