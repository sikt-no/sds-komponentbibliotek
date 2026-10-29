import type { Meta, StoryObj } from "@storybook/react-vite";
import { Fieldset } from "../../Fieldset";
import { Checkbox, type CheckboxProps } from "../index";

const meta: Meta<CheckboxProps> = {
  title: "SD3/Checkbox/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          "Single checkbox with an inline label. Use `indeterminate` for a mixed selection; wrap related checkboxes in `Fieldset`.",
      },
    },
  },
  argTypes: {
    children: { control: { type: "text" } },
  },
  args: {
    children: "Godta vilkår",
  },
};

export default meta;

type Story = StoryObj<CheckboxProps>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The native `<input>` only cycles unchecked↔checked. If you need the tri-state keyboard cycle, drive it from `onChange`.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

export const DisabledIndeterminate: Story = {
  args: {
    disabled: true,
    indeterminate: true,
  },
};

export const Critical: Story = {
  args: {
    "aria-invalid": true,
  },
};

export const CriticalChecked: Story = {
  args: {
    "aria-invalid": true,
    defaultChecked: true,
  },
};

export const WithFieldset: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Wrap related checkboxes in `<Fieldset>` for a shared legend, description, and validation message. `<fieldset disabled>` cascades to every nested checkbox.",
      },
    },
  },
  render: () => (
    <Fieldset>
      <Fieldset.Legend>Varsler</Fieldset.Legend>
      <Fieldset.Description>
        Velg hvilke varsler du vil motta på e-post.
      </Fieldset.Description>
      <Fieldset.Content>
        <Checkbox name="varsler" value="nyhetsbrev">
          Nyhetsbrev
        </Checkbox>
        <Checkbox name="varsler" value="oppdateringer">
          Produktoppdateringer
        </Checkbox>
        <Checkbox name="varsler" value="tilbud">
          Tilbud og kampanjer
        </Checkbox>
      </Fieldset.Content>
    </Fieldset>
  ),
};
