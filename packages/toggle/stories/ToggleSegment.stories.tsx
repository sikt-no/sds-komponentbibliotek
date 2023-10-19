import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ToggleSegment, ToggleSegmentProps } from "../index";
import { ToggleSegmentOption } from "../index";

const meta: Meta = {
  title: "Components/Toggle/ToggleSegment",
  component: ToggleSegment,
};

export default meta;

type Story = StoryObj<ToggleSegmentProps>;

export const Default: Story = {
  render: () => {
    const [checkedOption, setCheckedOption] = useState("1");

    return (
      <ToggleSegment legend="Toggle segment">
        <ToggleSegmentOption
          key={0}
          value="1"
          label="Label"
          onChange={(e) => setCheckedOption(e.target.value)}
          checked={checkedOption === "1"}
        />
        <ToggleSegmentOption
          key={1}
          value="2"
          label="Label"
          onChange={(e) => setCheckedOption(e.target.value)}
          checked={checkedOption === "2"}
        />
        <ToggleSegmentOption
          key={2}
          value="3"
          label="Label"
          onChange={(e) => setCheckedOption(e.target.value)}
          checked={checkedOption === "3"}
        />
      </ToggleSegment>
    );
  },
};
