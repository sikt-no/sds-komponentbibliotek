import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { ButtonProps, TertiaryButton } from "../";
import { Icon } from "@sikt/sds-icons";

export default {
  title: "Components/Button/Tertiary",
  component: TertiaryButton,
  args: {
    children: "Tertiary Button",
    disabled: false,
    onClick: () => {
      alert("click handler");
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <TertiaryButton {...args} />;

export const Button: Story<ButtonProps> = Template.bind({});

export const IconRight: Story<ButtonProps> = Template.bind({});
IconRight.args = {
  icon: <Icon icon="arrow-right" />,
};

export const IconLeft: Story<ButtonProps> = Template.bind({});
IconLeft.args = {
  icon: <Icon icon="arrow-left" />,
  iconType: "left",
};

export const IconOnly: Story<ButtonProps> = Template.bind({});
IconOnly.args = {
  icon: <Icon icon="arrow-right" />,
  iconType: "only",
};
