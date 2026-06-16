import { InfoIcon, BookIcon, UserProfileIcon } from "@sikt/sds-icons";
import { Meta, StoryObj } from "@storybook/react-vite";
import { TagStatus, TagStatusProps } from "../index";

const meta: Meta = {
  title: "Components/Tag/Status",
  component: TagStatus,
  parameters: {
    docs: {
      description: {
        component:
          "**Note:** The `info`, `warning`, `success`, and `critical` variants include predefined icons to ensure consistent visual communication. Custom icons should only be used with the `brand` and `neutral` variants, which don't have default icons.",
      },
    },
  },
  argTypes: {
    children: {
      control: { type: "text" },
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<TagStatusProps>;

export const Default: Story = {
  args: {
    children: "Status",
    variant: "brand",
    visibility: "subtle",
  },
};

export const IconLeft: Story = {
  args: {
    ...Default.args,
    icon: <InfoIcon />,
  },
};

export const AllVariantsDefault: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <TagStatus variant="brand">brand</TagStatus>
      <TagStatus variant="neutral">neutral</TagStatus>
      <TagStatus variant="info">info</TagStatus>
      <TagStatus variant="warning">warning</TagStatus>
      <TagStatus variant="success">success</TagStatus>
      <TagStatus variant="critical">critical</TagStatus>
    </div>
  ),
};

export const AllVariantsStrongVisibility: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <TagStatus variant="brand" visibility="strong">
        brand
      </TagStatus>
      <TagStatus variant="neutral" visibility="strong">
        neutral
      </TagStatus>
      <TagStatus variant="info" visibility="strong">
        info
      </TagStatus>
      <TagStatus variant="warning" visibility="strong">
        warning
      </TagStatus>
      <TagStatus variant="success" visibility="strong">
        success
      </TagStatus>
      <TagStatus variant="critical" visibility="strong">
        critical
      </TagStatus>
    </div>
  ),
};

export const CustomIconsForBrandAndNeutral: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <TagStatus variant="brand" icon={<BookIcon />}>
        brand with icon
      </TagStatus>
      <TagStatus variant="neutral" icon={<UserProfileIcon />}>
        neutral with icon
      </TagStatus>
    </div>
  ),
};
