import { act, render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { FormEvent } from "react";
import { Header } from "./Header";
import { HeaderNav } from "./HeaderNav";
import userEvent from "@testing-library/user-event";
import { HeaderCollapsibleMenu } from "./HeaderCollapsibleMenu";

describe("Header", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <Header>
          <HeaderCollapsibleMenu>
            <HeaderNav>
              <a href="/">Foo</a>
            </HeaderNav>
            <div>Foo</div>
          </HeaderCollapsibleMenu>
        </Header>,
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(
        <Header data-testid="test">
          <div>
            <div>Foo</div>
          </div>
        </Header>,
      );

      expect(screen.getByTestId("test")).toBeInTheDocument();
    });

    it("should have class name", async () => {
      render(
        <Header className="test-class-name" data-testid="test">
          <div>Foo</div>
        </Header>,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-header test-class-name",
      );
    });

    it("should have link", async () => {
      render(
        <Header logoHref="#">
          <div>Foo</div>
        </Header>,
      );

      expect(screen.getByRole("link", { name: "Sikt" })).toHaveClass(
        "sds-header__logo-link",
      );
      expect(screen.getByRole("link", { name: "Sikt" })).toBeInTheDocument();
    });

    it("should have text", async () => {
      render(
        <Header logoText="Bar">
          <div>Foo</div>
        </Header>,
      );

      expect(screen.getByText("Bar")).toHaveClass("sds-header__logo-text");
      expect(screen.getByText("Bar")).toBeInTheDocument();
    });

    it("render a button when using a collapsible menu", async () => {
      render(
        <Header data-testid="test">
          <HeaderCollapsibleMenu>
            <div>Foo</div>
          </HeaderCollapsibleMenu>
        </Header>,
      );

      expect(screen.getByRole("button", {})).toBeInTheDocument();
    });

    it("should open the menu when button is pressed", async () => {
      const user = userEvent.setup();

      render(
        <Header>
          <HeaderCollapsibleMenu
            dropdownOpen={false}
            data-testid="test-dropdown"
          >
            <HeaderNav>
              <a href="/" data-testid="test-link">
                Foo
              </a>
            </HeaderNav>
          </HeaderCollapsibleMenu>
        </Header>,
      );

      const navElement = screen.getByTestId("test-dropdown");
      expect(navElement).toHaveAttribute("aria-hidden", "true");

      const dropdownMenu = screen.getByRole("button");
      await act(async () => {
        await user.click(dropdownMenu);
      });

      expect(navElement).toHaveAttribute("aria-hidden", "false");
    });

    it("should close the menu when escape is pressed", async () => {
      const user = userEvent.setup();

      render(
        <Header>
          <HeaderCollapsibleMenu dropdownOpen data-testid="test-dropdown">
            <HeaderNav>
              <a href="/" data-testid="test-link">
                Foo
              </a>
            </HeaderNav>
          </HeaderCollapsibleMenu>
        </Header>,
      );

      const navElement = screen.getByTestId("test-dropdown");
      expect(navElement).toHaveAttribute("aria-hidden", "false");

      await act(async () => {
        await user.keyboard("{Escape}");
      });

      expect(navElement).toHaveAttribute("aria-hidden", "true");
    });

    it("should close the menu when link is clicked", async () => {
      const user = userEvent.setup();

      render(
        <Header>
          <HeaderCollapsibleMenu dropdownOpen data-testid="test-dropdown">
            <HeaderNav>
              <a href="/" data-testid="test-link">
                Foo
              </a>
            </HeaderNav>
          </HeaderCollapsibleMenu>
        </Header>,
      );

      const navLink = screen.getAllByTestId("test-link")[1];
      const navElement = screen.getByTestId("test-dropdown");

      expect(navElement).toHaveAttribute("aria-hidden", "false");

      await act(async () => {
        await user.click(navLink);
      });

      expect(navElement).toHaveAttribute("aria-hidden", "true");
    });

    it("should close the menu when button is clicked", async () => {
      const user = userEvent.setup();

      render(
        <Header>
          <HeaderCollapsibleMenu dropdownOpen data-testid="test-dropdown">
            <HeaderNav>
              <button data-testid="test-button">Foo</button>
            </HeaderNav>
          </HeaderCollapsibleMenu>
        </Header>,
      );

      const navButton = screen.getAllByTestId("test-button")[1];
      const navElement = screen.getByTestId("test-dropdown");

      expect(navElement).toHaveAttribute("aria-hidden", "false");

      await act(async () => {
        await user.click(navButton);
      });

      expect(navElement).toHaveAttribute("aria-hidden", "true");
    });

    it("should close the menu when form is submitted", async () => {
      const user = userEvent.setup();

      render(
        <Header>
          <HeaderCollapsibleMenu dropdownOpen data-testid="test-dropdown">
            <HeaderNav>
              <form
                onSubmit={(e: FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                }}
              >
                <input type="text" data-testid="test-input" />
              </form>
            </HeaderNav>
          </HeaderCollapsibleMenu>
        </Header>,
      );

      const submitInput = screen.getAllByTestId("test-input")[1];
      const navElement = screen.getByTestId("test-dropdown");

      expect(navElement).toHaveAttribute("aria-hidden", "false");

      await act(async () => {
        submitInput.focus();
        await user.keyboard("{Enter}");
      });

      expect(navElement).toHaveAttribute("aria-hidden", "true");
    });
  });
});
