import { Button } from "@sikt/sds-button";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import { useArgs } from "storybook/preview-api";

import type { DialogProps } from "../index";
import { Dialog } from "../index";

const meta: Meta = {
  title: "Components/Dialog",
  component: Dialog,
};

export default meta;

type Story = StoryObj<DialogProps>;

export const Default: Story = {
  args: {
    heading: "Welcome to Our Newsletter",
    subheading: "Stay Informed and Inspired",
    closeButtonLabel: "Close dialog",
    "aria-label": "Newsletter Subscription Modal",
    children: (
      <p>
        Sign up for our newsletter to receive the latest updates, articles, and
        insights from our experts. Stay connected with the trends shaping your
        industry and gain valuable knowledge to enhance your skills and career.
      </p>
    ),
  },
  render: (args: DialogProps) => {
    const [, setArgs] = useArgs();
    const id = "id";

    return (
      <>
        <Button
          variant="strong"
          className="sds-dialog__trigger"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setArgs({ ...args, open: true });
          }}
          aria-controls={id}
          aria-expanded={args.open}
        >
          Open dialog
        </Button>
        <Dialog
          id={id}
          {...args}
          footer={[
            <Button
              variant="transparent"
              onClick={() => {
                setArgs({ ...args, children: shortContent });
              }}
              key="0"
            >
              Show short content
            </Button>,
            <Button
              variant="subtle"
              onClick={() => {
                setArgs({ ...args, children: longContent });
              }}
              key="1"
            >
              Change content length
            </Button>,
            <Button
              variant="strong"
              key="2"
              onClick={() => {
                setArgs({ ...args, open: false });
              }}
            >
              Close
            </Button>,
          ]}
          onClose={() => {
            setArgs({ ...args, open: false });
          }}
        />
      </>
    );
  },
};

export const NonModal: Story = {
  args: {
    modal: false,
    heading: "Welcome to Our Newsletter",
    subheading: "Stay Informed and Inspired",
    closeButtonLabel: "Close dialog",
    "aria-label": "Newsletter Subscription Modal",
    children: (
      <p>
        Sign up for our newsletter to receive the latest updates, articles, and
        insights from our experts. Stay connected with the trends shaping your
        industry and gain valuable knowledge to enhance your skills and career.
      </p>
    ),
  },
  render: (args: DialogProps) => {
    const [, setArgs] = useArgs();
    const id = "id";

    return (
      <>
        <Button
          variant="strong"
          className="sds-dialog__trigger"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setArgs({ ...args, open: true });
          }}
          aria-controls={id}
          aria-expanded={args.open}
        >
          Open dialog
        </Button>
        <Dialog
          id={id}
          {...args}
          footer={[
            <Button
              variant="transparent"
              onClick={() => {
                setArgs({ ...args, children: shortContent });
              }}
              key="0"
            >
              Show short content
            </Button>,
            <Button
              variant="subtle"
              onClick={() => {
                setArgs({ ...args, children: longContent });
              }}
              key="1"
            >
              Change content length
            </Button>,
            <Button
              variant="strong"
              key="2"
              onClick={() => {
                setArgs({ ...args, open: false });
              }}
            >
              Close
            </Button>,
          ]}
          onClose={() => {
            setArgs({ ...args, open: false });
          }}
        />
      </>
    );
  },
};

export const Drawer: Story = {
  args: {
    drawer: "left",
    heading: "Filter",
    closeButtonAriaLabel: "Close drawer",
    "aria-label": "Filter page list content",
    style: { width: "400px" },
    children: (
      <ul>
        <li>Yes</li>
        <li>No</li>
        <li>Maybe</li>
      </ul>
    ),
  },
  render: (args: DialogProps) => {
    const [, setArgs] = useArgs();
    const id = "id";

    return (
      <>
        <Button
          variant="strong"
          className="sds-dialog__trigger"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setArgs({ ...args, open: true });
          }}
          aria-controls={id}
          aria-expanded={args.open}
        >
          Open drawer
        </Button>
        <Dialog
          id={id}
          {...args}
          footer={[
            <Button variant="transparent" key="0">
              Reset filters
            </Button>,
            <Button variant="strong" key="1">
              Apply filters
            </Button>,
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
  <p>
    Sign up for our newsletter to receive the latest updates, articles, and
    insights from our experts. Stay connected with the trends shaping your
    industry and gain valuable knowledge to enhance your skills and career.
  </p>
);

const longContent = (
  <>
    <p style={{ marginBottom: "1em" }}>
      Here at the Adventure Seeker&apos;s Club, we&apos;re all about embracing
      the thrill of the unknown and exploring the world around us. Whether
      you&apos;re a seasoned explorer or new to the world of adventure, our
      community is here to connect you with like-minded individuals who share
      your passion for discovering new horizons.
    </p>
    <p style={{ marginBottom: "1em" }}>
      Join us on epic journeys to remote mountain ranges, dive into the depths
      of uncharted oceans, and trek through dense jungles teeming with exotic
      wildlife. Our experienced guides and experts will lead you on
      unforgettable expeditions, ensuring your safety while you soak in the
      breathtaking landscapes and cultural wonders.
    </p>
    <p style={{ marginBottom: "1em" }}>
      Imagine summiting towering peaks at sunrise, the crisp mountain air
      filling your lungs as you gaze out over a sea of clouds. Picture yourself
      swimming alongside vibrant coral reefs, surrounded by a kaleidoscope of
      marine life, each moment a snapshot of nature&apos;s artistry. Envision
      forging friendships with fellow adventurers, bonding over shared triumphs
      and tales of challenges conquered.
    </p>
    <p style={{ marginBottom: "1em" }}>
      But the Adventure Seeker&apos;s Club is more than just physical
      exploration. We delve into the realms of history, science, and culture,
      deepening our understanding of the world we inhabit. Engage in
      enlightening discussions, attend insightful workshops, and gain access to
      exclusive resources that will enrich your knowledge and perspective.
    </p>
    <p style={{ marginBottom: "1em" }}>
      As you embark on this journey with us, you&apos;ll discover that adventure
      knows no bounds. Its not just about the places you go, but the experiences
      that transform you. So, whether you&apos;re strapping on a backpack or
      diving into a new book, come be a part of our community that thrives on
      curiosity and embraces the extraordinary.
    </p>
    <p>Join us today and let the adventure begin!</p>
  </>
);
