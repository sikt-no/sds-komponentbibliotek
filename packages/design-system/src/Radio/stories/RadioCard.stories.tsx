import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Fieldset } from "../../Fieldset";
import { RadioCard, type RadioCardProps } from "../index";

const meta: Meta<RadioCardProps> = {
  title: "SD3/Radio/RadioCard",
  component: RadioCard,
  parameters: {
    docs: {
      description: {
        component:
          "Bordered card variant of Radio. The whole card is the click target. Nest `<RadioCard.HelpText>` for secondary text.",
      },
    },
  },
  argTypes: {
    children: { control: false },
  },
  args: {
    name: "cities",
    children: "Oslo",
  },
};

export default meta;

type Story = StoryObj<RadioCardProps>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
    children: (
      <>
        Oslo
        <RadioCard.HelpText>The capital of Norway</RadioCard.HelpText>
      </>
    ),
  },
};

export const WithHelpText: Story = {
  args: {
    children: (
      <>
        Oslo
        <RadioCard.HelpText>The capital of Norway</RadioCard.HelpText>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <>
        Oslo
        <RadioCard.HelpText>The capital of Norway</RadioCard.HelpText>
      </>
    ),
  },
};

export const Critical: Story = {
  args: {
    "aria-invalid": true,
    children: (
      <>
        Oslo
        <RadioCard.HelpText>The capital of Norway</RadioCard.HelpText>
      </>
    ),
  },
};

export const WithFieldset: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Grouped under a `Fieldset` with a legend. `Fieldset.Content` owns the stacking and gap.",
      },
    },
  },
  render: () => {
    const [value, setValue] = useState("oslo");
    const options = [
      {
        value: "oslo",
        label: "Oslo",
        help: "The capital of Norway",
      },
      {
        value: "bergen",
        label: "Bergen",
        help: "Gateway to the Norwegian fjords",
      },
      {
        value: "trondheim",
        label: "Trondheim",
        help: "Historic center of medieval Norway",
      },
    ];
    return (
      <Fieldset>
        <Fieldset.Legend>City</Fieldset.Legend>
        <Fieldset.Content>
          {options.map((o) => (
            <RadioCard
              key={o.value}
              name="city"
              value={o.value}
              checked={value === o.value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            >
              {o.label}
              <RadioCard.HelpText>{o.help}</RadioCard.HelpText>
            </RadioCard>
          ))}
        </Fieldset.Content>
      </Fieldset>
    );
  },
};
