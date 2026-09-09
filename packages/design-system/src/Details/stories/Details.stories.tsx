import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Details, DetailsProps } from "../index";

const meta: Meta<DetailsProps> = {
  title: "SD3/Details",
  component: Details,
  parameters: {
    docs: {
      description: {
        component:
          "En innsyns-komponent bygget på native `<details>` og `<summary>` som viser eller skjuler sekundært innhold ved aktivering. Bruk til FAQ-svar, «les mer»-utvidelser og valgfrie skjemadetaljer. Grupper flere med samme `name` for eksklusiv trekkspilloppførsel.",
      },
    },
  },
  argTypes: {
    children: { control: false, table: { disable: true } },
    size: {
      control: { type: "inline-radio" },
      options: ["standard", "compact"],
    },
  },
  render: (args) => (
    <Details {...args}>
      <Details.Summary>Label</Details.Summary>
      <Details.Content>
        Alle saker kvalitetssikres av saksbehandler for å forsikre at vedtaket
        som fattes, er i tråd med gjeldende bestemmelser. Ved behov for
        ytterligere kvalitetssjekk kan saken overføres til en fagavdeling.
      </Details.Content>
    </Details>
  ),
};

export default meta;

type Story = StoryObj<DetailsProps>;

export const Standard: Story = {
  args: { size: "standard" },
};

export const Compact: Story = {
  args: { size: "compact" },
  parameters: {
    docs: {
      description: {
        story:
          "Kompakt variant med lavere triggerrad (40px) og mindre vertikal padding. Passer i tettere lister eller sidebar-menyer.",
      },
    },
  },
};

export const InitiallyOpen: Story = {
  args: { open: true },
  parameters: {
    docs: {
      description: {
        story: "Uncontrolled åpen-tilstand via native `open`-attributt.",
      },
    },
  },
};

export const LongSummary: Story = {
  args: { open: true },
  parameters: {
    docs: {
      description: {
        story:
          "Lang summary-tekst brytes over flere linjer — caret-ikonet holdes vertikalt sentrert mot etikettens innhold.",
      },
    },
  },
  render: (args) => (
    <Details {...args}>
      <Details.Summary>
        Hva slags dokumentasjon må vi legge ved når vi søker om registrering i
        Frivillighetsregisteret, og hvor lang tid tar behandlingen i praksis når
        alle vedleggene er på plass?
      </Details.Summary>
      <Details.Content>
        Send inn stiftelsesdokument, vedtekter og siste årsmøteprotokoll.
        Behandlingen tar normalt noen få virkedager når dokumentasjonen er
        komplett.
      </Details.Content>
    </Details>
  ),
};

export const RichContent: Story = {
  args: { open: true },
  parameters: {
    docs: {
      description: {
        story:
          "Content-slotten tar imot vilkårlig markup — avsnitt, lister, lenker og inline-formatering.",
      },
    },
  },
  render: (args) => (
    <Details {...args}>
      <Details.Summary>
        Hva slags organisasjoner kan registreres?
      </Details.Summary>
      <Details.Content>
        <p>
          Frivillighetsregisteret er åpent for organisasjoner som driver{" "}
          <strong>frivillig virksomhet</strong>. Følgende organisasjonsformer
          kan registreres:
        </p>
        <ul>
          <li>Foreninger og lag</li>
          <li>Stiftelser</li>
          <li>Aksjeselskap som ikke deler ut midler til fysiske personer</li>
        </ul>
        <p>
          Les mer på{" "}
          <a href="https://www.brreg.no/">Brønnøysundregistrenes nettsider</a>.
        </p>
      </Details.Content>
    </Details>
  ),
};

export const Accordion: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Flere `Details` med samme `name` blir en eksklusiv trekkspilliste — bare én kan være åpen samtidig. Native HTML-oppførsel, ingen ARIA-oppsett kreves.",
      },
    },
  },
  render: () => (
    <>
      <Details name="faq">
        <Details.Summary>Hvem kan registrere seg?</Details.Summary>
        <Details.Content>
          Foreninger, stiftelser og aksjeselskap som driver frivillig
          virksomhet.
        </Details.Content>
      </Details>
      <Details name="faq">
        <Details.Summary>Hva koster registrering?</Details.Summary>
        <Details.Content>Registrering er gratis.</Details.Content>
      </Details>
      <Details name="faq">
        <Details.Summary>Hvor lang tid tar det?</Details.Summary>
        <Details.Content>
          Behandlingstiden er vanligvis noen få virkedager.
        </Details.Content>
      </Details>
    </>
  ),
};
