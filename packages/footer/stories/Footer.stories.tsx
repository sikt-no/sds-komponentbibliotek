import { Button } from "@sikt/sds-button";
import { Link } from "@sikt/sds-core";
import { Meta, StoryObj } from "@storybook/react";
import { Footer, FooterProps } from "../index";

const meta: Meta = {
  title: "Components/Footer",
  component: Footer,
};

export default meta;

type Story = StoryObj<FooterProps>;

export const Default: Story = {
  args: {
    lang: "nb",
  },
};

export const WithContent: Story = {
  args: {
    ...Default.args,
    children: [
      <div key={0}>
        <h3>Header</h3>
        <ul>
          <li>
            <Link href="#link">Link</Link>
          </li>
          <li>
            <Link href="#link">Link</Link>
          </li>
          <li>
            <Link href="#link">Link</Link>
          </li>
        </ul>
      </div>,
      <div key={1}>
        <Button>Button</Button>
      </div>,
    ],
  },
};
