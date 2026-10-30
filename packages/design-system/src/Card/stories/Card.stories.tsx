import { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Heading2, Paragraph } from "../../../index";
import { Card, CardProps } from "../index";
import image from "./sikt-table.jpg";

const meta: Meta = {
  title: "SD3/Card",
  component: Card,
};

export default meta;

type Story = StoryObj<CardProps>;

export const Default: Story = {
  args: {
    children: [
      <Card.Content key={0}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--sd3-space-component-200)",
          }}
        >
          <Heading2 size="xs">Til info</Heading2>
          <Paragraph>
            For å opprettholde en god fremdrift i saken din, anmoder vi om at du
            gir beskjed dersom du får ny kontaktadresse. På den måten unngår vi
            at viktig post kommer i retur. Du kan endre adresseinformasjon ved å
            sende en skriftlig melding til oss.
          </Paragraph>
        </div>
        <div
          style={{
            alignSelf: "flex-end",
            display: "flex",
            gap: "var(--sd3-space-component-200)",
          }}
        >
          <Button variant="secondary">Secondary</Button>
          <Button>Primary</Button>
        </div>
      </Card.Content>,
    ],
  },
};

export const WithImage: Story = {
  args: {
    children: [
      <Card.Image key={0}>
        <picture>
          <img src={image} alt="A table from Sikt's office" />
        </picture>
      </Card.Image>,
      <Card.Content key={1}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--sd3-space-component-200)",
          }}
        >
          <Heading2 size="xs">Til info</Heading2>
          <Paragraph>
            For å opprettholde en god fremdrift i saken din, anmoder vi om at du
            gir beskjed dersom du får ny kontaktadresse. På den måten unngår vi
            at viktig post kommer i retur. Du kan endre adresseinformasjon ved å
            sende en skriftlig melding til oss.
          </Paragraph>
        </div>
        <div
          style={{
            alignSelf: "flex-end",
            display: "flex",
            gap: "var(--sd3-space-component-200)",
          }}
        >
          <Button variant="secondary">Secondary</Button>
          <Button>Primary</Button>
        </div>
      </Card.Content>,
    ],
  },
};

export const WithImageLast: Story = {
  args: {
    children: [
      <Card.Content key={1}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--sd3-space-component-200)",
          }}
        >
          <Heading2 size="xs">Til info</Heading2>
          <Paragraph>
            For å opprettholde en god fremdrift i saken din, anmoder vi om at du
            gir beskjed dersom du får ny kontaktadresse. På den måten unngår vi
            at viktig post kommer i retur. Du kan endre adresseinformasjon ved å
            sende en skriftlig melding til oss.
          </Paragraph>
        </div>
        <div
          style={{
            alignSelf: "flex-end",
            display: "flex",
            gap: "var(--sd3-space-component-200)",
          }}
        >
          <Button variant="secondary">Secondary</Button>
          <Button>Primary</Button>
        </div>
      </Card.Content>,
      <Card.Image key={0}>
        <picture>
          <img src={image} alt="A table from Sikt's office" />
        </picture>
      </Card.Image>,
    ],
  },
};
