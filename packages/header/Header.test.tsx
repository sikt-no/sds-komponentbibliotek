import { act, render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
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
        </Header>
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
        </Header>
      );

      expect(screen.getByTestId("test")).toBeInTheDocument();
    });

    it("should have class name", async () => {
      render(
        <Header className="test-class-name" data-testid="test">
          <div>Foo</div>
        </Header>
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-header test-class-name"
      );
    });

    it("should have link", async () => {
      render(
        <Header logoHref="#">
          <div>Foo</div>
        </Header>
      );

      expect(screen.getByRole("link", { name: "Sikt" })).toHaveClass(
        "sds-header__logo-link"
      );
      expect(screen.getByRole("link", { name: "Sikt" })).toBeInTheDocument();
    });

    it("should have text", async () => {
      render(
        <Header logoText="Bar">
          <div>Foo</div>
        </Header>
      );

      expect(screen.getByText("Bar")).toHaveClass("sds-header__logo-text");
      expect(screen.getByText("Bar")).toBeInTheDocument();
    });

    it("render a button when using a hamburger menu", async () => {
      render(
        <Header data-testid="test">
          <HeaderCollapsibleMenu>
            <div>Foo</div>
          </HeaderCollapsibleMenu>
        </Header>
      );

      expect(screen.getByRole("button", {})).toBeInTheDocument();
    });

    it("should be visible when hamburger menu is open", async () => {
      render(
        <Header>
          <HeaderCollapsibleMenu hamburgerOpen={true}>
            <HeaderNav>
              <a href="/" data-testid="test-link">
                Foo
              </a>
            </HeaderNav>
          </HeaderCollapsibleMenu>
        </Header>
      );

      /* Looks for the nav-link that belongs to the hamburger menu
      (which is nav element number 4, therefore index 3) */
      const navMobileLink = screen.getAllByTestId(
        "test-link"
      )[3] as HTMLElement;
      expect(navMobileLink.hidden).toBe(false);
    });

    it("should open the menu when button is pressed", async () => {
      const user = userEvent.setup();

      render(
        <Header>
          <HeaderCollapsibleMenu
            hamburgerOpen={false}
            data-testid="test-dropdown"
          >
            <HeaderNav>
              <a href="/" data-testid="test-link">
                Foo
              </a>
            </HeaderNav>
          </HeaderCollapsibleMenu>
        </Header>
      );

      const navElement = screen.getByTestId("test-dropdown") as HTMLElement;
      expect(navElement).toHaveAttribute("aria-hidden", "true");

      const hamburgerMenu = screen.getByRole("button");
      await act(async () => {
        await user.click(hamburgerMenu);
      });

      expect(navElement).toHaveAttribute("aria-hidden", "false");
    });

    it("should close the menu when button is pressed", async () => {
      const user = userEvent.setup();

      render(
        <Header>
          <HeaderCollapsibleMenu
            hamburgerOpen={true}
            data-testid="test-dropdown"
          >
            <HeaderNav>
              <a href="/" data-testid="test-link">
                Foo
              </a>
            </HeaderNav>
          </HeaderCollapsibleMenu>
        </Header>
      );

      const navElement = screen.getByTestId("test-dropdown") as HTMLElement;
      expect(navElement).toHaveAttribute("aria-hidden", "false");

      await act(async () => {
        await user.keyboard("{Escape}");
      });

      expect(navElement).toHaveAttribute("aria-hidden", "true");
    });
  });
});
