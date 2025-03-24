import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "./Heading";

const levels = [
  { name: "h1", component: Heading1 },
  { name: "h2", component: Heading2 },
  { name: "h3", component: Heading3 },
  { name: "h4", component: Heading4 },
  { name: "h5", component: Heading5 },
  { name: "h6", component: Heading6 },
];

describe("Heading", () => {
  describe("a11y", () => {
    levels.map((level) => {
      it(`${level.name} should be accessible`, async () => {
        const { component: Heading } = level;
        const { container } = render(<Heading>Foo</Heading>);

        expect(await axe(container)).toHaveNoViolations();
      });
    });
  });

  describe("api", () => {
    levels.map((level) => {
      it(`${level.name} should render`, async () => {
        const { name, component: Heading } = level;
        render(<Heading>{name}</Heading>);

        expect(screen.getByText(name)).toHaveClass(
          "sds-typography-editorial-headline sds-typography-editorial-headline--m",
        );
        expect(screen.getByText(name)).toBeInTheDocument();
      });
    });

    it("should have class name", async () => {
      render(<Heading1 className="test-class-name">Foo</Heading1>);

      expect(screen.getByText("Foo")).toHaveClass(
        "sds-typography-editorial-headline sds-typography-editorial-headline--m test-class-name",
      );
    });

    it("should have deprecation warning", async () => {
      const spy = jest
        .spyOn(global.console, "warn")
        .mockImplementationOnce(() => jest.fn);

      render(<Heading1 variant="medium">Foo</Heading1>);

      expect(screen.getByText("Foo")).toHaveClass(
        "sds-typography-heading sds-typography-heading--medium",
      );
      expect(spy).toHaveBeenCalled();
    });
  });
});
