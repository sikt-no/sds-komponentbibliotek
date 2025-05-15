import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../../badge/index";
import { InfoIcon } from "../../icons/index";
import { Tab, TabList, TabPanel, Tabs, TabsProps } from "../index";

const meta: Meta = {
  title: "Components/Tabs",
  component: Tabs,
};

export default meta;

type Story = StoryObj<TabsProps>;

export const Default: Story = {
  args: {
    children: [
      <TabList key={0} aria-label="Sample Tabs">
        <Tab>First Tab</Tab>
        <Tab>Second Tab</Tab>
        <Tab>Third Tab</Tab>
      </TabList>,
      <TabPanel key={1}>First Content</TabPanel>,
      <TabPanel key={2}>Second Content</TabPanel>,
      <TabPanel key={3}>Third Content</TabPanel>,
    ],
  },
};

export const WithIcon: Story = {
  args: {
    children: [
      <TabList key={0} aria-label="Sample Tabs">
        <Tab icon={<InfoIcon />}>First Tab</Tab>
        <Tab>Second Tab</Tab>
      </TabList>,
      <TabPanel key={1}>First Content</TabPanel>,
      <TabPanel key={2}>Second Content</TabPanel>,
    ],
  },
};

export const WithBadge: Story = {
  args: {
    children: [
      <TabList key={0} aria-label="Sample Tabs">
        <Tab badge={<Badge>Badge</Badge>}>First Tab</Tab>
        <Tab>Second Tab</Tab>
      </TabList>,
      <TabPanel key={1}>First Content</TabPanel>,
      <TabPanel key={2}>Second Content</TabPanel>,
    ],
  },
};
