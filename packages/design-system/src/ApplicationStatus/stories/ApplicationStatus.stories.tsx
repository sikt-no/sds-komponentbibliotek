import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link, Paragraph } from "../../Typography";
import { ApplicationStatus, type ApplicationStatusProps } from "../index";

const meta: Meta<ApplicationStatusProps> = {
  title: "SD3/Application Status",
  component: ApplicationStatus,
  parameters: {
    docs: {
      description: {
        component:
          "Statuslinje på applikasjonsnivå. Plasseres typisk øverst i en region og dekker hele bredden når hele systemet er påvirket.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<ApplicationStatusProps>;

export const Info: Story = {
  args: { variant: "info" },
  render: (args) => (
    <ApplicationStatus {...args}>
      <ApplicationStatus.Message>
        Vedlikehold er planlagt søndag kl. 02:00.
      </ApplicationStatus.Message>
    </ApplicationStatus>
  ),
};

export const Warning: Story = {
  args: { variant: "warning" },
  render: (args) => (
    <ApplicationStatus {...args}>
      <ApplicationStatus.Message>
        Noen tjenester kan være tregere enn vanlig.
      </ApplicationStatus.Message>
    </ApplicationStatus>
  ),
};

export const Success: Story = {
  args: { variant: "success" },
  render: (args) => (
    <ApplicationStatus {...args}>
      <ApplicationStatus.Message>
        Alle systemer fungerer som normalt.
      </ApplicationStatus.Message>
    </ApplicationStatus>
  ),
};

export const Critical: Story = {
  args: { variant: "critical", role: "alert" },
  render: (args) => (
    <ApplicationStatus {...args}>
      <ApplicationStatus.Message>
        Innlogging er midlertidig ute av drift.
      </ApplicationStatus.Message>
    </ApplicationStatus>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Bruk `role="alert"` når meldingen må annonseres umiddelbart av skjermlesere.',
      },
    },
  },
};

export const Neutral: Story = {
  args: { variant: "neutral" },
  render: (args) => (
    <ApplicationStatus {...args}>
      <ApplicationStatus.Message>
        Du leser en forhåndsvisning av innholdet.
      </ApplicationStatus.Message>
    </ApplicationStatus>
  ),
};

export const WithDescription: Story = {
  args: { variant: "info" },
  render: (args) => (
    <ApplicationStatus {...args}>
      <ApplicationStatus.Message>
        Planlagt vedlikehold søndag 10. november.
      </ApplicationStatus.Message>
      <ApplicationStatus.Description>
        <Paragraph>
          Portalen vil være utilgjengelig mellom kl. 02:00 og 04:00. Se{" "}
          <Link href="https://sikt.no">driftsmeldinger</Link> for oppdateringer.
        </Paragraph>
      </ApplicationStatus.Description>
    </ApplicationStatus>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Legg til `ApplicationStatus.Description` for å vise et panel under statuslinjen med utvidet informasjon.",
      },
    },
  },
};

export const WithDismiss: Story = {
  args: { variant: "info" },
  render: (args) => (
    <ApplicationStatus {...args}>
      <ApplicationStatus.Message>
        Vi oppdaterer systemet akkurat nå.
      </ApplicationStatus.Message>
      <ApplicationStatus.Dismiss label="Lukk melding" />
    </ApplicationStatus>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Legg til `ApplicationStatus.Dismiss` for å vise en lukkeknapp. Bruk `label` for tilgjengelig navn.",
      },
    },
  },
};
