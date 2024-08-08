import { Meta, StoryObj } from "@storybook/react";
import { {{pascalCase name}}, {{pascalCase name}}Props } from "../index";

const meta: Meta = {
  title: "Components/{{pascalCase name}}",
  component: {{pascalCase name}},
};

export default meta;

type Story = StoryObj<{{pascalCase name}}Props>;

export const Default: Story = {
  args: {
  },
};
