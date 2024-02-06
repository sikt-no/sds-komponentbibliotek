import { Meta, StoryObj } from "@storybook/react";
import { DescriptionList, ListProps } from "../index";
import { DescriptionTerm, DescriptionDetails } from "../index";

const meta: Meta = {
  title: "Components/List/Description",
  component: DescriptionList,
};

export default meta;

type Story = StoryObj<ListProps>;

export const List: Story = {
  args: {
    children: [
      <DescriptionTerm key={1}>First Term</DescriptionTerm>,
      <DescriptionDetails key={10}>
        Description of the first term
      </DescriptionDetails>,
      <DescriptionTerm key={2}>Second term</DescriptionTerm>,
      <DescriptionDetails key={20}>
        Description of the second term
      </DescriptionDetails>,
    ],
  },
};
