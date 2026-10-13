import {
  CloseIcon,
  MenuIcon,
  NotificationIcon,
  SignInIcon,
  SearchIcon,
} from "@sikt/sds-icons";
import { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useRef, useState } from "react";
import { Button, Field, Input } from "../../../index";
import { Header, HeaderProps } from "../index";

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
      <Header.LogoLink href="//sikt.no">
        <Header.Logo />
      </Header.LogoLink>
      {args.children}
    </Header>
  ),
};

export const ProductName: Story = {
  args: {},
  render: ({ ...args }) => (
    <Header {...args}>
      <Header.SkipLink href="#main">Gå til innhold</Header.SkipLink>
      <Header.LogoLink href="//sikt.no">
        <Header.Logo productName="Internsystem" />
      </Header.LogoLink>
      {args.children}
    </Header>
  ),
};

export const Menu: Story = {
  args: {},
  render: ({ ...args }) => {
    const inputRef = useRef<HTMLDivElement>(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const toggleSearchOpen = () => {
      setIsSearchOpen(!isSearchOpen);
    };

    useEffect(() => {
      if (isSearchOpen) {
        inputRef.current?.focus();
      }
    });

    return (
      <Header {...args}>
        <Header.SkipLink href="#main">Gå til innhold</Header.SkipLink>
        <Header.LogoLink href="//sikt.no">
          <Header.Logo />
        </Header.LogoLink>
        <>
          <Button variant="tertiary" popoverTarget="language-selector">
            Bokmål
          </Button>
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
                <button>Bokmål</button>
              </li>
              <li>
                <button>Nynorsk</button>
              </li>
            </ul>
          </div>
          <Button
            variant={isSearchOpen ? "primary-subtle" : "tertiary"}
            onClick={toggleSearchOpen}
          >
            <Button.Icon>
              {isSearchOpen ? <CloseIcon /> : <SearchIcon />}
            </Button.Icon>
            Søk
          </Button>
          <Button
            variant="tertiary"
            onClick={() => {
              console.log("TODO");
            }}
          >
            <Button.Icon>
              <SignInIcon />
            </Button.Icon>
            Logg inn
          </Button>
          <Button
            variant="tertiary"
            iconOnly
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
        </>
        {isSearchOpen && (
          <Header.SubHeader>
            <Field>
              <Field.Label>Søk</Field.Label>
              <Input ref={inputRef} type="search" />
            </Field>
          </Header.SubHeader>
        )}
      </Header>
    );
  },
};
