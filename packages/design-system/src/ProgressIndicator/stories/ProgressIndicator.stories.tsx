/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */

import { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressIndicator, ProgressIndicatorProps } from "../index";

const meta: Meta<ProgressIndicatorProps> = {
  title: "SD3/ProgressIndicator",
  component: ProgressIndicator,
  subcomponents: { "ProgressIndicator.Step": ProgressIndicator.Step },
  parameters: {
    docs: {
      description: {
        component: "Viser hvor brukeren står i en flyt med 3–5 steg.",
      },
    },
  },
  argTypes: {
    children: { control: false, table: { disable: true } },
  },
  render: (args) => (
    <ProgressIndicator {...args}>
      <ProgressIndicator.Step
        asChild
        status="completed"
        label="Done step"
        description="Helper text here"
      >
        <a href="/#" />
      </ProgressIndicator.Step>
      <ProgressIndicator.Step
        asChild
        status="current"
        label="Second step"
        description="Helper text here"
      >
        <a href="/#" />
      </ProgressIndicator.Step>
      <ProgressIndicator.Step
        asChild
        status="upcoming"
        label="Third step"
        description="Helper text here"
      >
        <a href="/#" />
      </ProgressIndicator.Step>
      <ProgressIndicator.Step
        asChild
        status="upcoming"
        label="Fourth step"
        description="Helper text here"
      >
        <a href="/#" />
      </ProgressIndicator.Step>
    </ProgressIndicator>
  ),
};

export default meta;

type Story = StoryObj<ProgressIndicatorProps>;

export const Default: Story = {
  args: {
    "aria-label": "Søknadsprosess",
    statusLabels: {
      completed: "fullført",
      critical: "feilet",
      disabled: "deaktivert",
    },
  },
};

export const Vertical: Story = {
  args: {
    "aria-label": "Søknadsprosess",
    direction: "vertical",
  },
};

export const Compact: Story = {
  args: {
    "aria-label": "Søknadsprosess",
    size: "compact",
  },
};

export const Expanded: Story = {
  args: {
    "aria-label": "Søknadsprosess",
    size: "expanded",
  },
};

export const AsLinks: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Hvert steg blir en navigerbar lenke via `asChild`. Konsumenten sender inn sitt eget `<a>` eller rammeverk-spesifikke `Link` (Next.js, Remix, TanStack).",
      },
    },
  },
  args: {
    "aria-label": "Søknadsprosess",
  },
  render: (args) => (
    <ProgressIndicator {...args}>
      <ProgressIndicator.Step asChild status="completed" label="Konto">
        <a href="/#" />
      </ProgressIndicator.Step>
      <ProgressIndicator.Step asChild status="current" label="Profil">
        <a href="/#" />
      </ProgressIndicator.Step>
      <ProgressIndicator.Step asChild status="upcoming" label="Betaling">
        <a href="/#" />
      </ProgressIndicator.Step>
      <ProgressIndicator.Step asChild status="disabled" label="Bekreft">
        <a href="/#" />
      </ProgressIndicator.Step>
    </ProgressIndicator>
  ),
};

export const AllStatuses: Story = {
  parameters: {
    docs: {
      description: {
        story: "Alle fem statusene i vertikal retning.",
      },
    },
  },
  args: {
    "aria-label": "Statuser",
    direction: "vertical",
  },
  render: (args) => (
    <ProgressIndicator {...args}>
      <ProgressIndicator.Step status="completed" label="Fullført" />
      <ProgressIndicator.Step status="current" label="Aktivt" />
      <ProgressIndicator.Step status="upcoming" label="Kommende" />
      <ProgressIndicator.Step status="critical" label="Feilet" />
      <ProgressIndicator.Step status="disabled" label="Deaktivert" />
    </ProgressIndicator>
  ),
};
