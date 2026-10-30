import { ArchiveIcon, ConfirmIcon, EditIcon, EmailIcon } from "@sikt/sds-icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Paragraph } from "../../Typography";
import { ToggleGroup, type ToggleGroupProps } from "../index";

const meta: Meta<ToggleGroupProps> = {
  title: "SD3/Toggle Group",
  component: ToggleGroup,
  subcomponents: { "ToggleGroup.Item": ToggleGroup.Item },
  parameters: {
    docs: {
      description: {
        component:
          "A pill-shaped bar of mutually exclusive options. Pass each choice as a `ToggleGroup.Item`; one is selected at a time. Use it to switch between related views on the same surface.",
      },
    },
  },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    children: {
      control: false,
      table: { type: { summary: "ReactNode" } },
    },
  },
};
export default meta;

type Story = StoryObj<ToggleGroupProps>;

export const Default: Story = {
  args: {
    "aria-label": "Mail folder",
    defaultValue: "inbox",
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroup.Item value="inbox">Inbox</ToggleGroup.Item>
      <ToggleGroup.Item value="draft">Drafts</ToggleGroup.Item>
      <ToggleGroup.Item value="archive">Archive</ToggleGroup.Item>
      <ToggleGroup.Item value="sent">Sent</ToggleGroup.Item>
    </ToggleGroup>
  ),
};

export const WithIcons: Story = {
  args: {
    "aria-label": "Mail folder",
    defaultValue: "inbox",
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroup.Item value="inbox">
        <ToggleGroup.Item.Icon>
          <EmailIcon />
        </ToggleGroup.Item.Icon>
        Inbox
      </ToggleGroup.Item>
      <ToggleGroup.Item value="draft">
        <ToggleGroup.Item.Icon>
          <EditIcon />
        </ToggleGroup.Item.Icon>
        Drafts
      </ToggleGroup.Item>
      <ToggleGroup.Item value="archive">
        <ToggleGroup.Item.Icon>
          <ArchiveIcon />
        </ToggleGroup.Item.Icon>
        Archive
      </ToggleGroup.Item>
      <ToggleGroup.Item value="sent">
        <ToggleGroup.Item.Icon>
          <ConfirmIcon />
        </ToggleGroup.Item.Icon>
        Sent
      </ToggleGroup.Item>
    </ToggleGroup>
  ),
};

const descriptions: Record<string, string> = {
  inbox:
    "Your inbox lists every new message sent directly to you that hasn't been archived or deleted.",
  draft:
    "Drafts holds messages you've started but not yet sent. Keep editing or discard them.",
  archive:
    "Archive keeps messages you've chosen to hold on to outside the inbox.",
  sent: "Sent shows messages you've sent to others. Open one to see the history or forward it.",
};

export const SwitchingContent: Story = {
  render: () => {
    const [value, setValue] = useState("inbox");
    return (
      <div
        style={{
          display: "grid",
          gap: "1rem",
        }}
      >
        <div>
          <ToggleGroup
            aria-label="Mail folder"
            value={value}
            onChange={setValue}
          >
            <ToggleGroup.Item value="inbox">Inbox</ToggleGroup.Item>
            <ToggleGroup.Item value="draft">Drafts</ToggleGroup.Item>
            <ToggleGroup.Item value="archive">Archive</ToggleGroup.Item>
            <ToggleGroup.Item value="sent">Sent</ToggleGroup.Item>
          </ToggleGroup>
        </div>
        <Paragraph>{descriptions[value]}</Paragraph>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Controlled selection drives a text region below the group.",
      },
    },
  },
};

export const IconOnly: Story = {
  args: {
    "aria-label": "Mail folder",
    defaultValue: "inbox",
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroup.Item value="inbox" aria-label="Inbox">
        <ToggleGroup.Item.Icon>
          <EmailIcon />
        </ToggleGroup.Item.Icon>
      </ToggleGroup.Item>
      <ToggleGroup.Item value="draft" aria-label="Drafts">
        <ToggleGroup.Item.Icon>
          <EditIcon />
        </ToggleGroup.Item.Icon>
      </ToggleGroup.Item>
      <ToggleGroup.Item value="archive" aria-label="Archive">
        <ToggleGroup.Item.Icon>
          <ArchiveIcon />
        </ToggleGroup.Item.Icon>
      </ToggleGroup.Item>
      <ToggleGroup.Item value="sent" aria-label="Sent">
        <ToggleGroup.Item.Icon>
          <ConfirmIcon />
        </ToggleGroup.Item.Icon>
      </ToggleGroup.Item>
    </ToggleGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Icon-only items — each item still needs a text label via `aria-label` so screen readers can announce the choice.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    "aria-label": "Mail folder",
    defaultValue: "inbox",
    disabled: true,
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroup.Item value="inbox">Inbox</ToggleGroup.Item>
      <ToggleGroup.Item value="draft">Drafts</ToggleGroup.Item>
      <ToggleGroup.Item value="archive">Archive</ToggleGroup.Item>
      <ToggleGroup.Item value="sent">Sent</ToggleGroup.Item>
    </ToggleGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The whole group is disabled — every item dims and ignores pointer and keyboard input.",
      },
    },
  },
};

const themes = ["main", "neutral", "critical"] as const;

export const Themes: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem" }}>
      {themes.map((theme) => (
        <ToggleGroup
          key={theme}
          aria-label={`Mail folder (${theme})`}
          defaultValue="inbox"
        >
          <ToggleGroup.Item value="inbox" theme={theme}>
            Inbox
          </ToggleGroup.Item>
          <ToggleGroup.Item value="draft" theme={theme}>
            Drafts
          </ToggleGroup.Item>
          <ToggleGroup.Item value="archive" theme={theme}>
            Archive
          </ToggleGroup.Item>
          <ToggleGroup.Item value="sent" theme={theme}>
            Sent
          </ToggleGroup.Item>
        </ToggleGroup>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Each `ToggleGroup.Item` accepts a `theme` (`main`, `neutral`, `critical`) that passes through to the underlying button.",
      },
    },
  },
};

export const ItemDisabled: Story = {
  args: {
    "aria-label": "Mail folder",
    defaultValue: "inbox",
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroup.Item value="inbox">Inbox</ToggleGroup.Item>
      <ToggleGroup.Item value="draft" disabled>
        Drafts
      </ToggleGroup.Item>
      <ToggleGroup.Item value="archive">Archive</ToggleGroup.Item>
      <ToggleGroup.Item value="sent">Sent</ToggleGroup.Item>
    </ToggleGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A single item is disabled — arrow-key navigation skips it, the rest stay interactive.",
      },
    },
  },
};
