import { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  ToggleSegment,
  ToggleSegmentProps,
  ToggleSegmentOption,
} from "../index";

const meta: Meta = {
  title: "Components/Toggle/ToggleSegment",
  component: ToggleSegment,
};

export default meta;

type Story = StoryObj<ToggleSegmentProps>;

export const Default: Story = {
  render: (args) => {
    const [checkedOption, setCheckedOption] = useState("1");

    return (
      <ToggleSegment {...args} legend="Toggle segment">
        <ToggleSegmentOption
          key={0}
          value="1"
          label="L"
          onChange={(e) => {
            setCheckedOption(e.target.value);
          }}
          checked={checkedOption === "1"}
        />
        <ToggleSegmentOption
          key={1}
          value="2"
          label="Label"
          onChange={(e) => {
            setCheckedOption(e.target.value);
          }}
          checked={checkedOption === "2"}
        />
        <ToggleSegmentOption
          key={2}
          value="3"
          label="Very long long label"
          onChange={(e) => {
            setCheckedOption(e.target.value);
          }}
          checked={checkedOption === "3"}
        />
      </ToggleSegment>
    );
  },
};

export const WithFixedWidth: Story = {
  ...Default,
  args: {
    ...Default.args,
    variant: "fixed",
  },
};

export const WithVerticalOrientation: Story = {
  ...Default,
  args: {
    ...Default.args,
    orientation: "vertical",
  },
};
