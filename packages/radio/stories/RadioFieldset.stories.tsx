import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useArgs } from "@storybook/client-api";
import { RadioInput, RadioFieldset, RadioFieldsetProps } from "../index";

export default {
  title: "Components/Radio/RadioFieldset",
  component: RadioFieldset,
  args: {
    label: "Label",
    children: [
      <RadioInput key={1} label="Radio 1" value="1" />,
      <RadioInput key={2} label="Radio 2" value="2" />,
      <RadioInput key={3} label="Radio 3" value="3" />,
    ],
    value: "1",
  },
} as Meta;

const Template: Story<RadioFieldsetProps> = (args) => {
  const [{ value }, setArgs] = useArgs();
  return (
    <RadioFieldset
      {...args}
      value={value}
      onChange={(val) => setArgs({ value: val })}
    />
  );
};

export const WithLegend: Story<RadioFieldsetProps> = Template.bind({});
WithLegend.args = {
  legend: "Legend",
  value: "2",
};

export const WithHelpText: Story<RadioFieldsetProps> = Template.bind({});
WithHelpText.args = {
  legend: "Legend",
  helpText: "Text",
  value: "2",
};

export const WithError: Story<RadioFieldsetProps> = Template.bind({});
WithError.args = {
  legend: "Legend",
  errorText: "Error!",
  value: "3",
};
