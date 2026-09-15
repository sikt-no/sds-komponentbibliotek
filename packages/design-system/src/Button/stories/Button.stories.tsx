import { ConfirmIcon, NavigateToNextIcon } from "@sikt/sds-icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps, ComponentType } from "react";
import {
  iconArgType,
  type IconComponent,
} from "../../../../icons/stories/iconArgType";
import {
  Button,
  type ButtonProps,
  type ButtonSize,
  type ButtonTheme,
  type ButtonVariant,
} from "../index";

type IconPosition = "left" | "right";

/**
 * Flattened story args. `ButtonProps` is a discriminated union (`iconOnly` gates
 * the aria-label requirement) which confuses Storybook's ArgsStoryFn inference —
 * so stories use a plain intersection here. The type-forcing still applies at
 * consumer call sites through `ButtonProps`.
 */
type StoryArgs = ComponentProps<"button"> & {
  variant?: ButtonVariant;
  theme?: ButtonTheme;
  size?: ButtonSize;
  asChild?: boolean;
  iconOnly?: boolean;
  icon?: IconComponent | null;
  iconPosition?: IconPosition;
};

const meta: Meta<StoryArgs> = {
  title: "SD3/Button",
  component: Button as ComponentType<StoryArgs>,
  parameters: {
    docs: {
      description: {
        component:
          "A pill-shaped button used to trigger an action. Pass the label as text and wrap icons in `Button.Icon` — icon position (before or after the label) follows DOM order. Use a link (not a button) when the action navigates to a different URL.",
      },
    },
  },
  argTypes: {
    children: {
      control: { type: "text" },
      table: { type: { summary: "ReactNode" } },
    },
    icon: iconArgType,
    iconPosition: {
      name: "Icon position",
      control: { type: "inline-radio" },
      options: ["left", "right"] satisfies IconPosition[],
      description:
        "Story-only picker: places the selected icon before or after the label.",
      table: { category: "Composition" },
      if: { arg: "icon", truthy: true },
    },
  },
};

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {
    children: "Label",
    icon: null,
    iconPosition: "left",
  },
  render: ({ icon: Icon, iconPosition, children, ...args }) => (
    <Button {...(args as ButtonProps)}>
      {Icon && iconPosition === "left" && (
        <Button.Icon>
          <Icon />
        </Button.Icon>
      )}
      {children}
      {Icon && iconPosition === "right" && (
        <Button.Icon>
          <Icon />
        </Button.Icon>
      )}
    </Button>
  ),
};

export const IconLeft: Story = {
  render: (args) => (
    <Button {...(args as ButtonProps)}>
      <Button.Icon>
        <ConfirmIcon />
      </Button.Icon>
      Label
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story: "Icon before the label — DOM order controls position.",
      },
    },
  },
};

export const IconRight: Story = {
  render: (args) => (
    <Button {...(args as ButtonProps)}>
      Label
      <Button.Icon>
        <NavigateToNextIcon />
      </Button.Icon>
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story: "Icon after the label.",
      },
    },
  },
};

export const IconOnly: Story = {
  args: {
    iconOnly: true,
    "aria-label": "Lukk",
    icon: "close" as unknown as IconComponent,
  },
  argTypes: {
    children: { table: { disable: true } },
    iconPosition: { table: { disable: true } },
  },
  render: ({ icon: Icon, ...args }) => (
    <Button {...(args as ButtonProps)}>
      {Icon && (
        <Button.Icon>
          <Icon />
        </Button.Icon>
      )}
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Icon-only button — set `iconOnly` (the type-system then requires `aria-label` or `aria-labelledby`) and pass a `Button.Icon` as the only child.",
      },
    },
  },
};

export const AsChildLink: Story = {
  args: {
    asChild: true,
  },
  render: (args) => (
    <Button {...(args as ButtonProps)}>
      <a href="https://sikt.no">Gå til sikt.no</a>
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "`asChild` renders the Button through Radix Slot — the child element replaces the `<button>` while keeping all styling and `data-*` attributes. Use to compose with router `<Link>` components or a native `<a>`.",
      },
    },
  },
};
