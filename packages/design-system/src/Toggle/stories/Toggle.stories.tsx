import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Fieldset } from "../../Fieldset";
import { Toggle, type ToggleProps } from "../index";

const meta: Meta<ToggleProps> = {
  title: "SD3/Toggle",
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component:
          "Binary on/off switch for an immediate, visible setting change. For values confirmed on form submission, use a checkbox instead.",
      },
    },
  },
  argTypes: {
    children: { control: { type: "text" } },
    labelPosition: {
      control: { type: "inline-radio" },
      options: ["left", "right"],
    },
  },
  args: {
    children: "Varslinger",
  },
};

export default meta;

type Story = StoryObj<ToggleProps>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const LabelOnRight: Story = {
  args: {
    labelPosition: "right",
  },
};

export const Standalone: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The switch without a label. Set `aria-label` or wrap it in your own label element.",
      },
    },
  },
  args: {
    children: undefined,
    "aria-label": "Varslinger",
  },
};

export const WithFieldset: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Several independent switches grouped under a `Fieldset`. `Fieldset.Content` owns the stacking and gap.",
      },
    },
  },
  render: () => {
    const [prefs, setPrefs] = useState({
      email: true,
      sms: false,
      push: true,
    });
    return (
      <Fieldset>
        <Fieldset.Legend>Varslinger</Fieldset.Legend>
        <Fieldset.Description>
          Velg hvilke kanaler du vil motta varsler på.
        </Fieldset.Description>
        <Fieldset.Content>
          <Toggle
            checked={prefs.email}
            onChange={(e) => {
              setPrefs((p) => ({ ...p, email: e.target.checked }));
            }}
          >
            E-post
          </Toggle>
          <Toggle
            checked={prefs.sms}
            onChange={(e) => {
              setPrefs((p) => ({ ...p, sms: e.target.checked }));
            }}
          >
            SMS
          </Toggle>
          <Toggle
            checked={prefs.push}
            onChange={(e) => {
              setPrefs((p) => ({ ...p, push: e.target.checked }));
            }}
          >
            Push-varsler
          </Toggle>
        </Fieldset.Content>
      </Fieldset>
    );
  },
};
