import type { Meta, StoryObj } from "@storybook/react-vite";
import { Field } from "../../Field";
import { Textarea, type TextareaProps } from "../index";

const meta: Meta<TextareaProps> = {
  title: "SD3/Textarea",
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component: "Et styled textarea-element",
      },
    },
  },
  args: {
    "aria-label": "Om Sikt",
    rows: 5,
    defaultValue:
      "Sikt er en statlig IT-leverandør som leverer nasjonale tjenester til utdanning og forskning. Formålet er å sikre at både små og store institusjoner har tilgang til et godt tjenestetilbud, og å legge til rette for deling og bruk av data som styrker kunnskap og samarbeid.",
  },
};

export default meta;

type Story = StoryObj<TextareaProps>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
  },
};

export const Error: Story = {
  args: {
    "aria-invalid": true,
  },
};

export const WithField: Story = {
  render: () => (
    <Field>
      <Field.Label>Om Sikt</Field.Label>
      <Field.Description>
        Fortell kort hva Sikt er og hvem vi leverer tjenester til.
      </Field.Description>
      <Textarea rows={5} />
    </Field>
  ),
};
