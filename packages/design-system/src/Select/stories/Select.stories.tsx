import type { Meta, StoryObj } from "@storybook/react-vite";
import { Field } from "../../Field";
import { Select, type SelectProps } from "../index";

const meta: Meta<SelectProps> = {
  title: "SD3/Select",
  component: Select,
  parameters: {
    docs: {
      description: {
        component:
          "Styled wrapper around the native `<select>` for single-choice pickers from a short, fixed list of options. Use inside a `<Field>` to get a label, helper text, and validation wiring; use standalone with an `aria-label` when a visible label is not needed.",
      },
    },
  },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["large", "medium", "small"],
    },
  },
  args: {
    "aria-label": "Country",
    children: [
      <option key="" value="">
        Select an option
      </option>,
      <option key="no" value="no">
        Norway
      </option>,
      <option key="se" value="se">
        Sweden
      </option>,
      <option key="dk" value="dk">
        Denmark
      </option>,
    ],
  },
};

export default meta;

type Story = StoryObj<SelectProps>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Readonly: Story = {
  args: {
    "aria-readonly": true,
    value: "no",
    onChange: () => {
      /* empty */
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "`aria-readonly` does not stop the user from opening the list. Lock the value by making the Select controlled with a fixed `value` and an empty `onChange`.",
      },
    },
  },
};

export const Error: Story = {
  args: {
    "aria-invalid": true,
    defaultValue: "no",
  },
};

export const WithField: Story = {
  render: (args) => (
    <Field>
      <Field.Label>Country</Field.Label>
      <Field.Description>Select the country you live in</Field.Description>
      <Select {...args} aria-label={undefined} />
    </Field>
  ),
};
