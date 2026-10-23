import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../Button";
import { List } from "../../List";
import { Link } from "../../Typography";
import { StatusMessage, type StatusMessageProps } from "../index";

const meta: Meta<StatusMessageProps> = {
  title: "SD3/StatusMessage",
  component: StatusMessage,
  parameters: {
    docs: {
      description: {
        component:
          "Fremhever viktig informasjon i en tydelig boks — tilbakemelding på en handling, oppsummering av feil, eller vedvarende veiledning.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<StatusMessageProps>;

export const Default: Story = {
  render: (args) => (
    <StatusMessage {...args}>
      <StatusMessage.Title>Kontaktinformasjon</StatusMessage.Title>
      <StatusMessage.Description>
        Ved endringer i kontaktinformasjon, oppdater dette så snart som mulig.
      </StatusMessage.Description>
    </StatusMessage>
  ),
};

export const DescriptionOnly: Story = {
  render: (args) => (
    <StatusMessage {...args}>
      <StatusMessage.Description>
        Tabellen nedenfor henter hver rad fra dokumentet til venstre. Sjekk nøye
        at hver celle er korrekt fylt ut. Klikk på en celle for å se kilden i
        dokumentet og gjør eventuelle korrigeringer.
      </StatusMessage.Description>
    </StatusMessage>
  ),
};

export const WithLinks: Story = {
  render: (args) => (
    <StatusMessage {...args}>
      <StatusMessage.Title>Trenger du hjelp?</StatusMessage.Title>
      <StatusMessage.Description>
        Her er noen ressurser som kan hjelpe deg videre med utfyllingen.
      </StatusMessage.Description>
      <StatusMessage.Body>
        <List.Unordered>
          <List.Item>
            <Link href="https://sikt.no">Les brukerveiledningen</Link>
          </List.Item>
          <List.Item>
            <Link href="https://sikt.no">Kontakt brukerstøtte</Link>
          </List.Item>
        </List.Unordered>
      </StatusMessage.Body>
    </StatusMessage>
  ),
};

export const ErrorSummary: Story = {
  args: {
    variant: "critical",
    role: "alert",
    "aria-live": "assertive",
  },
  render: (args) => (
    <StatusMessage {...args}>
      <StatusMessage.Title>
        Rett opp feilene før du sender inn
      </StatusMessage.Title>
      <StatusMessage.Body>
        <List.Unordered>
          <List.Item>
            <Link href="#navn">Navn må fylles ut</Link>
          </List.Item>
          <List.Item>
            <Link href="#epost">E-postadressen er ikke gyldig</Link>
          </List.Item>
          <List.Item>
            <Link href="#dato">Velg en dato som er senere enn i dag</Link>
          </List.Item>
        </List.Unordered>
      </StatusMessage.Body>
    </StatusMessage>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Brukes for å oppsummere formelle feil i et skjema. Konsumenten setter `role="alert"` og `aria-live="assertive"` selv slik at skjermleseren annonserer feilene umiddelbart.',
      },
    },
  },
};

export const Alert: Story = {
  args: {
    variant: "success",
    role: "status",
  },
  render: (args) => (
    <StatusMessage {...args}>
      <StatusMessage.Title>Søknaden er sendt inn</StatusMessage.Title>
      <StatusMessage.Description>
        Du får en bekreftelse på e-post innen kort tid. Du kan følge status i
        innboksen din.
      </StatusMessage.Description>
    </StatusMessage>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Umiddelbar tilbakemelding på en handling. Konsumenten setter `role="status"` slik at skjermleseren annonserer meldingen når brukeren er i ro; bruk `role="alert"` når meldingen må avbryte brukeren.',
      },
    },
  },
};

export const GuidePanel: Story = {
  render: (args) => (
    <StatusMessage {...args}>
      <StatusMessage.Title>Automatisk henting av data</StatusMessage.Title>
      <StatusMessage.Description>
        Vi henter opplysningene fra Folkeregisteret. Kontroller at feltene
        stemmer før du går videre — du kan endre dem manuelt om nødvendig.
      </StatusMessage.Description>
      <StatusMessage.Body>
        <Button variant="secondary" size="small">
          Rediger opplysninger
        </Button>
      </StatusMessage.Body>
    </StatusMessage>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Vedvarende veiledning eller tilleggsinformasjon som er en fast del av siden. Konsumenten lar `role` og `aria-live` være urørt slik at meldingen ikke annonseres på nytt ved sideoppdatering eller navigering.",
      },
    },
  },
};
