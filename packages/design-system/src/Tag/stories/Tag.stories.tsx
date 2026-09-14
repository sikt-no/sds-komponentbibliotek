import { ArtificialIntelligenceIcon } from "@sikt/sds-icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag, TagProps } from "../index";

const meta: Meta<TagProps> = {
  title: "SD3/Tag",
  component: Tag,
  parameters: {
    docs: {
      description: {
        component:
          "Small inline label for brand, neutral, or categorical tagging. Purely presentational — no hover, focus, or dismiss behaviour. Reach for `TagStatus` when the tag needs to communicate semantic state (success, info, warning, critical).",
      },
    },
  },
  argTypes: {
    children: {
      control: { type: "text" },
      table: { type: { summary: "ReactNode" } },
    },
  },
};

export default meta;

type Story = StoryObj<TagProps>;

export const Default: Story = {
  args: { children: "Label" },
};

export const WithIcon: Story = {
  args: {
    color: "brand",
    visibility: "strong",
  },
  render: (args) => (
    <Tag {...args}>
      <Tag.Icon>
        <ArtificialIntelligenceIcon />
      </Tag.Icon>
      Label
    </Tag>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Compose an icon by placing `<Tag.Icon>` inside the tag. Icon scales with the tag's `size`.",
      },
    },
  },
};
