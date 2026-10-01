import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from "../../Tag";
import { Field, type FieldProps } from "../index";
import { useFieldContext } from "../src/FieldContext";

const InputControl = () => <input {...useFieldContext()} />;

const meta: Meta<FieldProps> = {
  title: "SD3/Field",
  component: Field,
  parameters: {
    docs: {
      description: {
        component:
          "Ties an input together with its label, helper text, and validation message.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<FieldProps>;

export const Default: Story = {
  render: (args) => (
    <Field {...args}>
      <Field.Label>Email</Field.Label>
      <Field.Description>
        We only use your address to send you a receipt.
      </Field.Description>
      <InputControl />
    </Field>
  ),
};

export const WithValidation: Story = {
  render: (args) => (
    <Field {...args}>
      <Field.Label>Email</Field.Label>
      <Field.Description>
        We only use your address to send you a receipt.
      </Field.Description>
      <InputControl />
      <Field.ValidationMessage>
        Enter a valid email address.
      </Field.ValidationMessage>
    </Field>
  ),
};

export const ReadOnly: Story = {
  args: { readOnly: true },
  render: (args) => (
    <Field {...args}>
      <Field.Label>Email</Field.Label>
      <Field.Description>
        We only use your address to send you a receipt.
      </Field.Description>
      <InputControl />
    </Field>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <Field {...args}>
      <Field.Label>Email</Field.Label>
      <Field.Description>
        We only use your address to send you a receipt.
      </Field.Description>
      <InputControl />
    </Field>
  ),
};

export const RequiredLabelTag: Story = {
  render: (args) => (
    <Field {...args}>
      <Field.Label>
        Email
        <Tag color="category-3" visibility="subtle" size="compact">
          Required
        </Tag>
      </Field.Label>
      <Field.Description>
        We only use your address to send you a receipt.
      </Field.Description>
      <InputControl />
    </Field>
  ),
};

export const OptionalLabelTag: Story = {
  render: (args) => (
    <Field {...args}>
      <Field.Label>
        Email
        <Tag color="category-5" visibility="subtle" size="compact">
          Optional
        </Tag>
      </Field.Label>
      <Field.Description>
        We only use your address to send you a receipt.
      </Field.Description>
      <InputControl />
    </Field>
  ),
};
