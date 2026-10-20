import { ConfirmIcon, NavigateToNextIcon } from "@sikt/sds-icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps, ComponentType } from "react";
import {
  iconArgType,
  type IconComponent,
} from "../../../../icons/stories/iconArgType";
import { Avatar } from "../../../index";
import {
  Button,
  type ButtonSize,
  type ButtonTheme,
  type ButtonVariant,
} from "../index";

type IconPosition = "left" | "right";

/** Button props plus story-only icon pickers. */
type StoryArgs = ComponentProps<"button"> & {
  variant?: ButtonVariant;
  theme?: ButtonTheme;
  size?: ButtonSize;
  asChild?: boolean;
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
    <Button {...args}>
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
    <Button {...args}>
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
    <Button {...args}>
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
    "aria-label": "Lukk",
    icon: "close" as unknown as IconComponent,
  },
  argTypes: {
    children: { table: { disable: true } },
    iconPosition: { table: { disable: true } },
  },
  render: ({ icon: Icon, ...args }) => (
    <Button {...args}>
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
          "Icon-only button — pass a `Button.Icon` as the only child and set `aria-label` or `aria-labelledby`. The circle shape is applied automatically via CSS.",
      },
    },
  },
};

export const AsChildLink: Story = {
  args: {
    asChild: true,
  },
  render: (args) => (
    <Button {...args}>
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

export const AvatarLeft: Story = {
  render: (args) => (
    <Button {...args}>
      <Button.Avatar>
        <Avatar size={args.size} initials="AL" aria-label="Ada Lovelace" />
      </Button.Avatar>
      Label
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avatar before the label — DOM order controls position.",
      },
    },
  },
};

export const AvatarRight: Story = {
  render: (args) => (
    <Button {...args}>
      Label
      <Button.Avatar>
        <Avatar size={args.size}>
          <img
            src={`${import.meta.env.STORYBOOK_STATIC_URL}/avatar-photo.jpeg`}
            alt="Sven-Åke"
          />
        </Avatar>
      </Button.Avatar>
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avatar after the label — DOM order controls position.",
      },
    },
  },
};
