import type { Meta, StoryObj } from "@storybook/react-vite";
import { Field } from "../../Field";
import { Input } from "../../Input";
import { Select } from "../../Select";
import { Tag } from "../../Tag";
import { Textarea } from "../../Textarea";
import { Heading2 } from "../../Typography";
import { Fieldset, type FieldsetProps } from "../index";

type DefaultArgs = FieldsetProps & {
  description?: boolean;
  validationMessage?: boolean;
};

const meta: Meta<DefaultArgs> = {
  title: "SD3/Fieldset",
  component: Fieldset,
  parameters: {
    docs: {
      description: {
        component: "Groups related form controls under a shared legend.",
      },
    },
  },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["medium", "large"],
    },
    disabled: { control: "boolean" },
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
    <Fieldset {...args}>
      <Fieldset.Legend>Notifications</Fieldset.Legend>
      {description ? (
        <Fieldset.Description>
          Choose which notifications you&apos;d like to receive by email.
        </Fieldset.Description>
      ) : null}
      <Fieldset.Content>
        <label>
          <input type="checkbox" name="preferences" value="newsletter" />
          Newsletter
        </label>
        <label>
          <input type="checkbox" name="preferences" value="updates" />
          Product updates
        </label>
        <label>
          <input type="checkbox" name="preferences" value="offers" />
          Offers and promotions
        </label>
      </Fieldset.Content>
      {validationMessage ? (
        <Fieldset.ValidationMessage>
          Select at least one category.
        </Fieldset.ValidationMessage>
      ) : null}
    </Fieldset>
  ),
};

export const WithCheckboxes: Story = {
  render: (args) => (
    <Fieldset {...args}>
      <Fieldset.Legend>Notifications</Fieldset.Legend>
      <Fieldset.Description>
        Choose which notifications you&apos;d like to receive by email.
      </Fieldset.Description>
      <Fieldset.Content>
        <label>
          <input type="checkbox" name="preferences" value="newsletter" />
          Newsletter
        </label>
        <label>
          <input type="checkbox" name="preferences" value="updates" />
          Product updates
        </label>
        <label>
          <input type="checkbox" name="preferences" value="offers" />
          Offers and promotions
        </label>
      </Fieldset.Content>
    </Fieldset>
  ),
};

export const WithRadioButtons: Story = {
  render: (args) => (
    <Fieldset {...args}>
      <Fieldset.Legend>Choose a plan</Fieldset.Legend>
      <Fieldset.Description>
        You can change your plan at any time.
      </Fieldset.Description>
      <Fieldset.Content>
        <label>
          <input type="radio" name="plan" value="standard" />
          Standard
        </label>
        <label>
          <input type="radio" name="plan" value="premium" />
          Premium
        </label>
        <label>
          <input type="radio" name="plan" value="business" />
          Business
        </label>
      </Fieldset.Content>
    </Fieldset>
  ),
};

export const HorizontalRadios: Story = {
  render: (args) => (
    <Fieldset {...args}>
      <Fieldset.Legend>Choose a size</Fieldset.Legend>
      <Fieldset.Content direction="horizontal">
        <label>
          <input type="radio" name="size" value="s" />S
        </label>
        <label>
          <input type="radio" name="size" value="m" />M
        </label>
        <label>
          <input type="radio" name="size" value="l" />L
        </label>
        <label>
          <input type="radio" name="size" value="xl" />
          XL
        </label>
      </Fieldset.Content>
    </Fieldset>
  ),
};

export const WithFields: Story = {
  render: (args) => (
    <Fieldset {...args}>
      <Fieldset.Legend>Contact information</Fieldset.Legend>
      <Fieldset.Description>
        We only use this information to contact you about your order.
      </Fieldset.Description>
      <Fieldset.Content>
        <Field>
          <Field.Label>Full name</Field.Label>
          <Input type="text" autoComplete="name" />
        </Field>
        <Field>
          <Field.Label>Email</Field.Label>
          <Input type="email" autoComplete="email" />
        </Field>
        <Field>
          <Field.Label>Country</Field.Label>
          <Select>
            <option value="no">Norway</option>
            <option value="se">Sweden</option>
            <option value="dk">Denmark</option>
          </Select>
        </Field>
        <Field>
          <Field.Label>Message</Field.Label>
          <Textarea rows={3} />
        </Field>
      </Fieldset.Content>
    </Fieldset>
  ),
};

export const WithDateFields: Story = {
  render: (args) => (
    <Fieldset {...args}>
      <Fieldset.Legend>Date of birth</Fieldset.Legend>
      <Fieldset.Content direction="horizontal">
        <Field>
          <Field.Label>Time</Field.Label>
          <Input type="time" />
        </Field>
        <Field>
          <Field.Label>Date</Field.Label>
          <Input type="date" />
        </Field>
      </Fieldset.Content>
    </Fieldset>
  ),
};

export const WithValidation: Story = {
  render: (args) => (
    <Fieldset {...args}>
      <Fieldset.Legend>Choose a plan</Fieldset.Legend>
      <Fieldset.Description>
        You must choose one option to continue.
      </Fieldset.Description>
      <Fieldset.Content>
        <label>
          <input type="radio" name="plan" value="standard" />
          Standard
        </label>
        <label>
          <input type="radio" name="plan" value="premium" />
          Premium
        </label>
      </Fieldset.Content>
      <Fieldset.ValidationMessage>
        Choose a plan to continue.
      </Fieldset.ValidationMessage>
    </Fieldset>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <Fieldset {...args}>
      <Fieldset.Legend>Notifications</Fieldset.Legend>
      <Fieldset.Description>
        Notifications cannot be changed while your account is suspended.
      </Fieldset.Description>
      <Fieldset.Content>
        <label>
          <input type="checkbox" name="preferences" value="newsletter" />
          Newsletter
        </label>
        <label>
          <input type="checkbox" name="preferences" value="updates" />
          Product updates
        </label>
      </Fieldset.Content>
    </Fieldset>
  ),
};

export const LegendWithHeading: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Nest a Typography heading inside `Fieldset.Legend` when the group should also appear in the page's document outline.",
      },
    },
  },
  render: (args) => (
    <Fieldset {...args}>
      <Fieldset.Legend>
        <Heading2 size="md">Contact information</Heading2>
      </Fieldset.Legend>
      <Fieldset.Description>
        We only use this information to contact you about your order.
      </Fieldset.Description>
      <Fieldset.Content>
        <Field>
          <Field.Label>Full name</Field.Label>
          <Input type="text" autoComplete="name" />
        </Field>
        <Field>
          <Field.Label>Email</Field.Label>
          <Input type="email" autoComplete="email" />
        </Field>
      </Fieldset.Content>
    </Fieldset>
  ),
};

export const LegendWithTag: Story = {
  render: (args) => (
    <Fieldset {...args}>
      <Fieldset.Legend>
        Notifications
        <Tag color="category-3" visibility="subtle" size="compact">
          Required
        </Tag>
      </Fieldset.Legend>
      <Fieldset.Description>Select at least one category.</Fieldset.Description>
      <Fieldset.Content>
        <label>
          <input type="checkbox" name="preferences" value="newsletter" />
          Newsletter
        </label>
        <label>
          <input type="checkbox" name="preferences" value="updates" />
          Product updates
        </label>
      </Fieldset.Content>
    </Fieldset>
  ),
};
