import React from "react";

import { Modal, ModalProps } from "../Modal";
import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/client-api";

import { PrimaryButton, SecondaryButton } from "@sikt/sds-button";
import { Paragraph } from "@sikt/sds-core";

const meta: Meta = {
  title: "Components/Modal",
  component: Modal,
};

export default meta;

type Story = StoryObj<ModalProps>;

export const Default: Story = {
  args: {
    heading: "Welcome to Our Newsletter",
    subheading: "Stay Informed and Inspired",
    closeButtonLabel: "Close",
    appElement: "#storybook-root",
    "aria-label": "Newsletter Subscription Modal",
    children: (
      <Paragraph>
        Sign up for our newsletter to receive the latest updates, articles, and
        insights from our experts. Stay connected with the trends shaping your
        industry and gain valuable knowledge to enhance your skills and career.
      </Paragraph>
    ),
  },
  render: (args) => {
    const [, setArgs] = useArgs();
    return (
      <>
        <PrimaryButton onClick={() => setArgs({ ...args, open: true })}>
          Open modal
        </PrimaryButton>
        <Modal
          {...args}
          footer={[
            <SecondaryButton
              onClick={() => setArgs({ ...args, children: shortContent })}
              key="1"
            >
              Show short content
            </SecondaryButton>,
            <SecondaryButton
              onClick={() => setArgs({ ...args, children: longContent })}
              key="1"
            >
              Change content length
            </SecondaryButton>,
            <PrimaryButton
              key="2"
              onClick={() => setArgs({ ...args, open: false })}
            >
              Close
            </PrimaryButton>,
          ]}
          onClose={() => {
            setArgs({ ...args, open: false });
          }}
        />
      </>
    );
  },
};

const shortContent = (
  <Paragraph>
    Sign up for our newsletter to receive the latest updates, articles, and
    insights from our experts. Stay connected with the trends shaping your
    industry and gain valuable knowledge to enhance your skills and career.
  </Paragraph>
);

const longContent = (
  <>
    <Paragraph style={{ marginBottom: "1em" }}>
      Here at the Adventure Seeker&apos;s Club, we&apos;re all about embracing
      the thrill of the unknown and exploring the world around us. Whether
      you&apos;re a seasoned explorer or new to the world of adventure, our
      community is here to connect you with like-minded individuals who share
      your passion for discovering new horizons.
    </Paragraph>
    <Paragraph style={{ marginBottom: "1em" }}>
      Join us on epic journeys to remote mountain ranges, dive into the depths
      of uncharted oceans, and trek through dense jungles teeming with exotic
      wildlife. Our experienced guides and experts will lead you on
      unforgettable expeditions, ensuring your safety while you soak in the
      breathtaking landscapes and cultural wonders.
    </Paragraph>
    <Paragraph style={{ marginBottom: "1em" }}>
      Imagine summiting towering peaks at sunrise, the crisp mountain air
      filling your lungs as you gaze out over a sea of clouds. Picture yourself
      swimming alongside vibrant coral reefs, surrounded by a kaleidoscope of
      marine life, each moment a snapshot of nature&apos;s artistry. Envision
      forging friendships with fellow adventurers, bonding over shared triumphs
      and tales of challenges conquered.
    </Paragraph>
    <Paragraph style={{ marginBottom: "1em" }}>
      But the Adventure Seeker&apos;s Club is more than just physical
      exploration. We delve into the realms of history, science, and culture,
      deepening our understanding of the world we inhabit. Engage in
      enlightening discussions, attend insightful workshops, and gain access to
      exclusive resources that will enrich your knowledge and perspective.
    </Paragraph>
    <Paragraph style={{ marginBottom: "1em" }}>
      As you embark on this journey with us, you&apos;ll discover that adventure
      knows no bounds. Its not just about the places you go, but the experiences
      that transform you. So, whether you&apos;re strapping on a backpack or
      diving into a new book, come be a part of our community that thrives on
      curiosity and embraces the extraordinary.
    </Paragraph>
    <Paragraph>Join us today and let the adventure begin!</Paragraph>
  </>
);
