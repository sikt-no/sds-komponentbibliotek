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
            <a className="sds-typography-link" href="#link">
              Link
            </a>
          </li>
          <li>
            <a className="sds-typography-link" href="#link">
              Link
            </a>
          </li>
          <li>
            <a className="sds-typography-link" href="#link">
              Link
            </a>
          </li>
        </ul>
      </div>,
      <div key={1}>
        <button className="sds-button sds-button--subtle">Button</button>
      </div>,
    ],
  },
};
