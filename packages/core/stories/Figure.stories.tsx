import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { FigureProps, Figure } from "../index";

export default {
  title: "Components/Core/Figure",
  component: Figure,
  args: {
    children: [
      <img src="https://picsum.photos/400" alt="Lorem Picsum" key={0} />,
    ],
    figCaption: "Lorem Picsum",
  },
} as Meta;

const Template: Story<FigureProps> = (args) => <Figure {...args} />;

export const Default: Story<FigureProps> = Template.bind({});

export const AspectRatio16x9: Story<FigureProps> = Template.bind({});
AspectRatio16x9.args = {
  aspectRatio: "16x9",
};
