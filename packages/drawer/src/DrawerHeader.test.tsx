import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import { MouseEvent } from "react";
import { DrawerHeader } from "./DrawerHeader";

describe("DrawerHeader,", () => {
  let mockHandler: (event: MouseEvent<HTMLButtonElement>) => void;

  beforeEach(() => {
    mockHandler = jest.fn();
  });

  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <DrawerHeader
          title="title"
          handleToggleDrawer={mockHandler}
          expanded
        />,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(
        <DrawerHeader
          data-testid="test"
          icon={<span data-testid="iconElement">🛠️</span>}
          title="title"
          expanded
          handleToggleDrawer={mockHandler}
        />,
      );
      expect(
        screen.getByRole("button", { name: "Lukk skuff" }),
      ).toBeInTheDocument();
      expect(screen.getByTestId("iconElement")).toBeInTheDocument();
      expect(screen.getByText("title")).toBeInTheDocument();
      expect(screen.getByTestId("test")).toBeInTheDocument();
    });

    it("should render in collapsed state", () => {
      render(
        <DrawerHeader
          data-testid="test"
          icon={<span data-testid="iconElement">🛠️</span>}
          title="title"
          expanded={false}
          handleToggleDrawer={mockHandler}
        />,
      );

      expect(
        screen.getByRole("button", { name: "Åpne skuff" }),
      ).toBeInTheDocument();
      expect(screen.getByTestId("test")).not.toHaveClass(
        "sds-drawer-header__label",
      );
      expect(screen.getByTestId("test")).toBeInTheDocument();
    });

    it("should call handleToggleDrawer on button click", async () => {
      const user = userEvent.setup();

      render(
        <DrawerHeader
          title="title"
          expanded={false}
          handleToggleDrawer={mockHandler}
        />,
      );

      const button = screen.getByRole("button", { name: "Åpne skuff" });
      await user.click(button);

      expect(mockHandler).toHaveBeenCalledTimes(1);
    });
  });
});
