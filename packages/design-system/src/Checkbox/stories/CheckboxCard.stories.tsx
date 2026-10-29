import type { Meta, StoryObj } from "@storybook/react-vite";
import { Fieldset } from "../../Fieldset";
import { CheckboxCard, type CheckboxCardProps } from "../index";

const meta: Meta<CheckboxCardProps> = {
  title: "SD3/Checkbox/CheckboxCard",
  component: CheckboxCard,
  parameters: {
    docs: {
      description: {
        component:
          "Bordered card variant of Checkbox. The whole card is the click target. Nest `<CheckboxCard.HelpText>` for secondary text.",
      },
    },
  },
  argTypes: {
    children: { control: false },
  },
  args: {
    children: "Godta vilkår",
  },
};

export default meta;

type Story = StoryObj<CheckboxCardProps>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
    children: (
      <>
        Godta vilkår
        <CheckboxCard.HelpText>
          Du kan trekke samtykket når som helst
        </CheckboxCard.HelpText>
      </>
    ),
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    children: (
      <>
        Velg alle
        <CheckboxCard.HelpText>
          Noen valg er allerede gjort
        </CheckboxCard.HelpText>
      </>
    ),
  },
};

export const WithHelpText: Story = {
  args: {
    children: (
      <>
        Godta vilkår
        <CheckboxCard.HelpText>
          Du kan trekke samtykket når som helst
        </CheckboxCard.HelpText>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <>
        Godta vilkår
        <CheckboxCard.HelpText>
          Du kan trekke samtykket når som helst
        </CheckboxCard.HelpText>
      </>
    ),
  },
};

export const Critical: Story = {
  args: {
    "aria-invalid": true,
    children: (
      <>
        Godta vilkår
        <CheckboxCard.HelpText>
          Du kan trekke samtykket når som helst
        </CheckboxCard.HelpText>
      </>
    ),
  },
};

export const WithFieldset: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Wrap related cards in `<Fieldset>` for a shared legend, description, and validation message. `<fieldset disabled>` cascades to every nested card.",
      },
    },
  },
  render: () => (
    <Fieldset>
      <Fieldset.Legend>Velg by</Fieldset.Legend>
      <Fieldset.Description>Du kan velge flere.</Fieldset.Description>
      <Fieldset.Content>
        <CheckboxCard name="byer" value="oslo">
          Oslo
          <CheckboxCard.HelpText>Norges hovedstad</CheckboxCard.HelpText>
        </CheckboxCard>
        <CheckboxCard name="byer" value="bergen">
          Bergen
          <CheckboxCard.HelpText>Porten til fjordene</CheckboxCard.HelpText>
        </CheckboxCard>
        <CheckboxCard name="byer" value="trondheim">
          Trondheim
          <CheckboxCard.HelpText>
            Historisk senter for middelalderens Norge
          </CheckboxCard.HelpText>
        </CheckboxCard>
      </Fieldset.Content>
    </Fieldset>
  ),
};
