import type { Meta, StoryObj } from "@storybook/react-vite";
import { useId } from "react";
import { Button } from "../../Button";
import { Heading2, Heading3, Paragraph } from "../../Typography";
import { Dialog, type DialogProps } from "../index";

const meta: Meta<DialogProps> = {
  title: "SD3/Dialog",
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component:
          "Centred modal dialog built on the native `<dialog>` element, opened and closed with Invoker Commands on a `<Button>`.",
      },
    },
  },
  argTypes: {
    open: { control: "boolean" },
    closedby: {
      control: { type: "inline-radio" },
      options: ["any", "closerequest", "none"],
    },
  },
};

export default meta;

type Story = StoryObj<DialogProps>;

export const Default: Story = {
  render: (args) => {
    const id = useId();
    const titleId = `${id}-title`;
    return (
      <>
        <Button command="show-modal" commandfor={id}>
          Åpne modal Dialog
        </Button>
        <Dialog {...args} id={id} aria-labelledby={titleId}>
          <Dialog.Header>
            <Heading2 id={titleId} size="lg">
              Tittel
            </Heading2>
            <Dialog.Subtitle>Undertittel</Dialog.Subtitle>
            <Dialog.Close aria-label="Lukk" />
          </Dialog.Header>
          <Dialog.Content>
            <Paragraph>Hello</Paragraph>
          </Dialog.Content>
          <Dialog.Footer>
            <Button
              size="large"
              variant="secondary"
              command="close"
              commandfor={id}
            >
              Secondary action
            </Button>
            <Button
              size="large"
              variant="primary"
              command="close"
              commandfor={id}
            >
              Main action
            </Button>
          </Dialog.Footer>
        </Dialog>
      </>
    );
  },
};

export const Scrolling: Story = {
  render: (args) => {
    const id = useId();
    const titleId = `${id}-title`;
    return (
      <>
        <Button command="show-modal" commandfor={id}>
          Åpne lang dialog
        </Button>
        <Dialog {...args} id={id} aria-labelledby={titleId}>
          <Dialog.Header>
            <Heading2 id={titleId} size="lg">
              Avtalevilkår
            </Heading2>
            <Dialog.Subtitle>Les gjennom før du godtar.</Dialog.Subtitle>
            <Dialog.Close aria-label="Lukk" />
          </Dialog.Header>
          <Dialog.Content>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--sd3-space-component-600)",
              }}
            >
              <section
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--sd3-space-component-200)",
                }}
              >
                <Heading3 size="sm">Verticals</Heading3>
                <Paragraph>
                  Let&apos;s think about how to iron out the verticals in a more
                  granular way. Just to piggyback on what was said, my ask is
                  that we double down on our bespoke buy-in so we can stay ahead
                  of the curve. To be perfectly transparent, once we piggyback
                  on the value-added mindshare, the rest is just quick win.
                </Paragraph>
              </section>
              <section
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--sd3-space-component-200)",
                }}
              >
                <Heading3 size="sm">Learnings</Heading3>
                <Paragraph>
                  Our goal-oriented approach to the learnings has really helped
                  us ideate low-hanging fruit. It&apos;s time to run up the
                  flagpole the pain points so we can flesh out the north star.
                  It&apos;s imperative that we think about how to zero in on the
                  swim lanes in a more frictionless way. Here&apos;s the thing:
                  our top-of-funnel approach to the deep dive has really helped
                  us greenlight paradigm shift. Quis voluptate sit in tempor et
                  eiusmod reprehenderit deserunt culpa excepteur cillum aliquip
                  fugiat.
                </Paragraph>
              </section>
              <section
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--sd3-space-component-200)",
                }}
              >
                <Heading3 size="sm">Pain points</Heading3>
                <Paragraph>
                  My ask is that we think about how to operationalize the pain
                  points in a more transformative way. Can someone from the
                  ecosystem team democratize this and report back? Putting on my
                  stakeholder hat, we&apos;re not here to operationalize
                  synergy. We&apos;re here to hammer out blue-sky deep dive
                  which would be a huge win for the team.
                </Paragraph>
              </section>
              <section
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--sd3-space-component-200)",
                }}
              >
                <Heading3 size="sm">Game changer</Heading3>
                <Paragraph>
                  Can we synergize the game changer? Can we evangelize the
                  30,000 foot view? Can we synergize the end-to-end game
                  changer? Yes. Yes. And yes. What keeps me up at night is the
                  data-driven hard stop is what separates us from the
                  competition. We should really think about how to dogfood the
                  win-win in a more bottom-line way. Excepteur reprehenderit
                  enim do sed eiusmod elit consectetur mollit veniam deserunt et
                  irure. The question we should be asking is what if, and hear
                  me out, we ideate the OKRs using only process-centric 30,000
                  foot view?
                </Paragraph>
              </section>
              <section
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--sd3-space-component-200)",
                }}
              >
                <Heading3 size="sm">Touch points</Heading3>
                <Paragraph>
                  We&apos;ve got actionable touch points but we need more
                  cadence to really streamline this. Net-net, i want us to
                  socialize our process-centric elephant in the room before we
                  run out of runway. This isn&apos;t about the roadmap. This is
                  about the proactive innovation framework behind the key
                  takeaways. Putting on my stakeholder hat, if we get the ball
                  rolling on the special sauce, we can finally bring to the
                  table the robust deep dive. At the end of the day, i&apos;ve
                  been thinking about this in the shower and what if we circle
                  back on the pain points but in a future-proof, high-impact
                  way?
                </Paragraph>
              </section>
            </div>
          </Dialog.Content>
          <Dialog.Footer>
            <Button
              size="large"
              variant="secondary"
              command="close"
              commandfor={id}
            >
              Avbryt
            </Button>
            <Button
              size="large"
              variant="primary"
              command="close"
              commandfor={id}
            >
              Jeg godtar
            </Button>
          </Dialog.Footer>
        </Dialog>
      </>
    );
  },
};

export const WithCloseButton: Story = {
  render: (args) => {
    const id = useId();
    const titleId = `${id}-title`;
    return (
      <>
        <Button command="show-modal" commandfor={id}>
          Åpne dialog
        </Button>
        <Dialog {...args} id={id} aria-labelledby={titleId}>
          <Dialog.Header>
            <Heading2 id={titleId} size="lg">
              Oppdater profilbilde
            </Heading2>
            <Dialog.Subtitle>Velg et nytt bilde fra din enhet.</Dialog.Subtitle>
            <Dialog.Close aria-label="Lukk" />
          </Dialog.Header>
          <Dialog.Footer>
            <Button
              size="large"
              variant="primary"
              command="close"
              commandfor={id}
            >
              Last opp
            </Button>
          </Dialog.Footer>
        </Dialog>
      </>
    );
  },
};
