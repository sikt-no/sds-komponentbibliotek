import { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar, AvatarProps } from "../index";

const meta: Meta<AvatarProps> = {
  title: "SD3/Avatar",
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component:
          "Visual representation of a user — as a photo (via an `<img>` child), coloured initials disc, or generic placeholder icon. Use to identify the person tied to a resource (comment author, profile menu, list row); not intended for decorative imagery.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<AvatarProps>;

export const Default: Story = {
  args: {
    initials: "AL",
    "aria-label": "Ada Lovelace",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Initials. Colour is derived from a stable hash of the initials string; pass an explicit `color` prop to override.",
      },
    },
  },
};

export const Photo: Story = {
  args: {
    size: "large",
  },
  render: (args: AvatarProps) => (
    <Avatar size={args.size}>
      <img src="/storybook/avatar-photo.jpeg" alt="Sven-Åke" />
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Pass any image element (`<img>`, `next/image`, `<picture>`) as children — the frame crops to a circle via `object-fit: cover`.",
      },
    },
  },
};

export const Placeholder: Story = {
  args: {
    "aria-label": "Ada Lovelace",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Placeholder icon. Rendered when neither `children` nor `initials` is provided.",
      },
    },
  },
};
