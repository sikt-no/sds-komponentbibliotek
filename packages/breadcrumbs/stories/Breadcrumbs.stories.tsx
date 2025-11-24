import { Link } from "@sikt/sds-core";
import { HomeLandingIcon } from "@sikt/sds-icons";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import type { BreadcrumbsProps } from "../index";
import { Breadcrumbs, BreadcrumbItem } from "../index";

const meta: Meta = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
};

export default meta;

type Story = StoryObj<BreadcrumbsProps>;

const Template: Story = {
  args: {
    "aria-label": "Navigation path",
  },
  render: (args) => (
    <Breadcrumbs {...args}>
      <BreadcrumbItem>
        <Link href="/">Level 1</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link href="/">Level 2</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link href="/">Level 3</Link>
      </BreadcrumbItem>
    </Breadcrumbs>
  ),
};

export const WithIcon: Story = {
  args: {
    ...Template.args,
  },
  render: (args) => (
    <Breadcrumbs {...args}>
      <BreadcrumbItem>
        <Link icon={<HomeLandingIcon />} iconVariant="left" href="/">
          Home
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link href="/">Level 2</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link href="/">Level 3</Link>
      </BreadcrumbItem>
    </Breadcrumbs>
  ),
};

export const Default: Story = { ...Template };
