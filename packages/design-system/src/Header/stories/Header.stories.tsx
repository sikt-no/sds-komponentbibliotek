import {
  CloseIcon,
  MenuIcon,
  NotificationIcon,
  SignInIcon,
  SearchIcon,
  LanguageIcon,
} from "@sikt/sds-icons";
import { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useRef, useState } from "react";
import { Button, Field, Input } from "../../../index";
import { Avatar } from "../../../index";
import { Header, HeaderProps } from "../index";

import "./story.css";

const meta: Meta = {
  title: "SD3/Header",
  component: Header,
};

export default meta;

type Story = StoryObj<HeaderProps>;

export const Default: Story = {
  args: {},
  render: ({ ...args }) => (
    <Header {...args}>
      <Header.SkipLink href="#main">Gå til innhold</Header.SkipLink>
      <Header.Content>
        <Header.LogoLink href="//sikt.no">
          <Header.Logo />
        </Header.LogoLink>
      </Header.Content>
    </Header>
  ),
};

export const ProductName: Story = {
  args: {},
  render: ({ ...args }) => (
    <Header {...args}>
      <Header.SkipLink href="#main">Gå til innhold</Header.SkipLink>
      <Header.Content>
        <Header.LogoLink href="//sikt.no">
          <Header.Logo productName="Internsystem" />
        </Header.LogoLink>
      </Header.Content>
    </Header>
  ),
};

export const WithMenu: Story = {
  args: {},
  render: ({ ...args }) => {
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const toggleLanguageOpen = () => {
      setIsLanguageOpen(!isLanguageOpen);
    };

    const inputRef = useRef<HTMLDivElement>(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const toggleSearchOpen = () => {
      setIsSearchOpen(!isSearchOpen);
    };

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const toggleLoggedIn = () => {
      setIsLoggedIn(!isLoggedIn);
    };

    const [language, setLanguage] = useState("Bokmål");

    useEffect(() => {
      if (isSearchOpen) {
        inputRef.current?.focus();
      }
    });

    return (
      <>
        <Header {...args}>
          <Header.SkipLink href="#main">Gå til innhold</Header.SkipLink>
          <Header.Content>
            <Header.LogoLink href="//sikt.no">
              <Header.Logo />
            </Header.LogoLink>
            <div
              className="desktop"
              style={{ gap: "var(--sd3-space-component-300)" }}
            >
              <Button
                variant="tertiary"
                popoverTarget="language-selector"
                onClick={toggleLanguageOpen}
              >
                <Button.Icon>
                  <LanguageIcon />
                </Button.Icon>
                {language}
              </Button>
              <Button
                variant={isSearchOpen ? "primary-subtle" : "tertiary"}
                onClick={toggleSearchOpen}
              >
                <Button.Icon>
                  {isSearchOpen ? <CloseIcon /> : <SearchIcon />}
                </Button.Icon>
                Søk
              </Button>
              {isLoggedIn ? (
                <Button variant="tertiary" popoverTarget="user-menu">
                  <Button.Avatar>
                    <Avatar>
                      <img
                        src={`${import.meta.env.STORYBOOK_STATIC_URL}/avatar-photo.jpeg`}
                        alt="Sven-Åke"
                      />
                    </Avatar>
                  </Button.Avatar>
                  Sven-Åke
                </Button>
              ) : (
                <Button
                  variant="tertiary"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleLoggedIn();
                  }}
                >
                  <Button.Icon>
                    <SignInIcon />
                  </Button.Icon>
                  Logg inn
                </Button>
              )}
              <Button
                variant="tertiary"
                aria-label="Nye notifikasjoner"
                onClick={() => {
                  console.log("TODO");
                }}
              >
                <Button.Icon>
                  <NotificationIcon />
                </Button.Icon>
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  console.log("TODO");
                }}
              >
                <Button.Icon>
                  <MenuIcon />
                </Button.Icon>
                Meny
              </Button>
            </div>
          </Header.Content>
          <div
            className="tablet"
            style={{
              justifyContent: "end",
              gap: "var(--sd3-space-component-300)",
            }}
          >
            <Button
              variant={isSearchOpen ? "primary-subtle" : "tertiary"}
              size="small"
              onClick={toggleSearchOpen}
            >
              <Button.Icon>
                {isSearchOpen ? <CloseIcon /> : <SearchIcon />}
              </Button.Icon>
              Søk
            </Button>
            {isLoggedIn ? (
              <Button variant="tertiary" size="small" popoverTarget="user-menu">
                <Button.Avatar>
                  <Avatar size="small">
                    <img
                      src={`${import.meta.env.STORYBOOK_STATIC_URL}/avatar-photo.jpeg`}
                      alt="Sven-Åke"
                    />
                  </Avatar>
                </Button.Avatar>
                Sven-Åke
              </Button>
            ) : (
              <Button
                variant="tertiary"
                size="small"
                onClick={(e) => {
                  e.preventDefault();
                  toggleLoggedIn();
                }}
              >
                <Button.Icon>
                  <SignInIcon />
                </Button.Icon>
                Logg inn
              </Button>
            )}
            <Button
              variant="tertiary"
              size="small"
              aria-label="Nye notifikasjoner"
              onClick={() => {
                console.log("TODO");
              }}
            >
              <Button.Icon>
                <NotificationIcon />
              </Button.Icon>
            </Button>
            <Button
              variant="secondary"
              size="small"
              onClick={() => {
                console.log("TODO");
              }}
            >
              <Button.Icon>
                <MenuIcon />
              </Button.Icon>
              Meny
            </Button>
          </div>
          <div
            className="mobile"
            style={{
              justifyContent: "end",
              gap: "var(--sd3-space-component-300)",
            }}
          >
            <Button
              variant={isSearchOpen ? "primary-subtle" : "tertiary"}
              size="small"
              aria-label="Søk"
              onClick={toggleSearchOpen}
            >
              <Button.Icon>
                {isSearchOpen ? <CloseIcon /> : <SearchIcon />}
              </Button.Icon>
            </Button>
            {isLoggedIn ? (
              <Button
                variant="tertiary"
                size="small"
                aria-label="Sven-Åke"
                popoverTarget="user-menu"
              >
                <Button.Avatar>
                  <Avatar size="small">
                    <img
                      src={`${import.meta.env.STORYBOOK_STATIC_URL}/avatar-photo.jpeg`}
                      alt="Sven-Åke"
                    />
                  </Avatar>
                </Button.Avatar>
              </Button>
            ) : (
              <Button
                variant="tertiary"
                size="small"
                aria-label="Logg inn"
                onClick={(e) => {
                  e.preventDefault();
                  toggleLoggedIn();
                }}
              >
                <Button.Icon>
                  <SignInIcon />
                </Button.Icon>
              </Button>
            )}
            <Button
              variant="tertiary"
              size="small"
              aria-label="Nye notifikasjoner"
              onClick={() => {
                console.log("TODO");
              }}
            >
              <Button.Icon>
                <NotificationIcon />
              </Button.Icon>
            </Button>
            <Button
              variant="secondary"
              size="small"
              onClick={() => {
                console.log("TODO");
              }}
            >
              <Button.Icon>
                <MenuIcon />
              </Button.Icon>
              Meny
            </Button>
          </div>
          {isSearchOpen && (
            <div style={{ flexDirection: "column" }}>
              <Field>
                <Field.Label>Søk</Field.Label>
                <Input ref={inputRef} type="search" />
              </Field>
            </div>
          )}
        </Header>
        {isLanguageOpen && (
          <div
            popover="auto"
            id="language-selector"
            style={{
              position: "absolute",
              positionArea: "bottom",
              margin: "var(--sd3-space-component-200)",
            }}
          >
            <ul>
              <li>
                <button
                  onClick={() => {
                    setLanguage("Bokmål");
                    toggleLanguageOpen();
                  }}
                >
                  Bokmål
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setLanguage("Nynorsk");
                    toggleLanguageOpen();
                  }}
                >
                  Nynorsk
                </button>
              </li>
            </ul>
          </div>
        )}
        {isLoggedIn && (
          <div
            popover="auto"
            id="user-menu"
            style={{
              position: "absolute",
              positionArea: "bottom",
              margin: "var(--sd3-space-component-200)",
            }}
          >
            <ul>
              <li>
                <button>Bytt bruker</button>
              </li>
              <li>
                <button onClick={toggleLoggedIn}>Logg ut</button>
              </li>
            </ul>
          </div>
        )}
      </>
    );
  },
};

export const WithLefthandMenu: Story = {
  args: {},
  render: ({ ...args }) => {
    return (
      <Header {...args}>
        <Header.SkipLink href="#main">Gå til innhold</Header.SkipLink>
        <Header.Content>
          <Button
            variant="secondary"
            aria-label="Nye notifikasjoner"
            onClick={() => {
              console.log("Hello, FS Admin!");
            }}
          >
            <Button.Icon>
              <MenuIcon />
            </Button.Icon>
          </Button>
          <Header.LogoLink href="//sikt.no">
            <Header.Logo />
          </Header.LogoLink>
          <div
            style={{ display: "flex", gap: "var(--sd3-space-component-300)" }}
          >
            <Button
              variant="tertiary"
              onClick={() => {
                console.log("TODO");
              }}
            >
              <Button.Icon>
                <SearchIcon />
              </Button.Icon>
              Søk
            </Button>
          </div>
        </Header.Content>
      </Header>
    );
  },
};
