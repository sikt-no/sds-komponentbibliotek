import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../../Input";
import { Tag } from "../../Tag";
import { Field, type FieldProps } from "../index";

type DefaultArgs = FieldProps & {
  description?: boolean;
  validationMessage?: boolean;
};

const meta: Meta<DefaultArgs> = {
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
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
    description: {
      name: "Show description",
      control: "boolean",
      table: { category: "Composition" },
    },
    validationMessage: {
      name: "Show Validation Error",
      control: "boolean",
      table: { category: "Composition" },
    },
  },
};

export default meta;

type Story = StoryObj<DefaultArgs>;

export const Default: Story = {
  args: { description: true },
  render: ({ description, validationMessage, ...args }) => (
    <Field {...args}>
      <Field.Label>Email</Field.Label>
      {description ? (
        <Field.Description>
          We only use your address to send you a receipt.
        </Field.Description>
      ) : null}
      <Input />
      {validationMessage ? (
        <Field.ValidationMessage>
          Enter a valid email address.
        </Field.ValidationMessage>
      ) : null}
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
      <Input />
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
      <Input />
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
      <Input />
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
      <Input required />
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
      <Input />
    </Field>
  ),
};
