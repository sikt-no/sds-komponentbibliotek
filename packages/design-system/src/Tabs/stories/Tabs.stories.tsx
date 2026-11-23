import { UserProfileIcon, SettingsIcon } from "@sikt/sds-icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "../../Badge";
import { Tag } from "../../Tag";
import { Tabs, type TabsProps } from "../index";

const meta: Meta<TabsProps> = {
  title: "SD3/Tabs",
  component: Tabs,
  subcomponents: {
    "Tabs.List": Tabs.List,
    "Tabs.Tab": Tabs.Tab,
    "Tabs.Panel": Tabs.Panel,
  },
  parameters: {
    docs: {
      description: {
        component:
          "Horizontal tabs that switch between related panels inside the same context.",
      },
    },
  },
  argTypes: {
    activationMode: {
      control: { type: "radio" },
      options: ["manual", "automatic"],
    },
    children: {
      control: false,
      table: { type: { summary: "ReactNode" } },
    },
  },
};
export default meta;

type Story = StoryObj<TabsProps>;

export const Default: Story = {
  args: {
    defaultValue: "account",
  },
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List aria-label="Settings">
        <Tabs.Tab value="account">Account</Tabs.Tab>
        <Tabs.Tab value="notifications">Notifications</Tabs.Tab>
        <Tabs.Tab value="language">Language</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="account">Settings for your account.</Tabs.Panel>
      <Tabs.Panel value="notifications">How we notify you.</Tabs.Panel>
      <Tabs.Panel value="language">Language preferences.</Tabs.Panel>
    </Tabs>
  ),
};

export const WithIconAndSlot: Story = {
  args: {
    defaultValue: "profile",
  },
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List aria-label="Account">
        <Tabs.Tab value="profile">
          <Tabs.Tab.Icon>
            <UserProfileIcon />
          </Tabs.Tab.Icon>
          Profile
        </Tabs.Tab>
        <Tabs.Tab value="messages">
          Messages
          <Tabs.Tab.Slot>
            <Badge>3</Badge>
          </Tabs.Tab.Slot>
        </Tabs.Tab>
        <Tabs.Tab value="settings">
          <Tabs.Tab.Icon>
            <SettingsIcon />
          </Tabs.Tab.Icon>
          Settings
          <Tabs.Tab.Slot>
            <Tag size="compact">New</Tag>
          </Tabs.Tab.Slot>
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="profile">Profile information.</Tabs.Panel>
      <Tabs.Panel value="messages">
        Inbox with three unread messages.
      </Tabs.Panel>
      <Tabs.Panel value="settings">Preferences.</Tabs.Panel>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Each `Tabs.Tab` accepts a leading `Tabs.Tab.Icon` and a trailing `Tabs.Tab.Slot` for Badge, Tag, or other inline content.",
      },
    },
  },
};
