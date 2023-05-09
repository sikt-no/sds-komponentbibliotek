import React from "react";
import { Meta, Story } from "@storybook/react";
import { Tabs, TabsProps, TabList, Tab, TabPanel } from "../index";
import { InfoIcon } from "../../icons/index";
import { Badge } from "../../badge/index";

export default {
  title: "Components/Tabs",
  component: Tabs,
  subcomponents: { TabList, Tab, TabPanel, InfoIcon, Badge },
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
  tags: ["autodocs"],
} as Meta;

const Template: Story<TabsProps> = (args) => <Tabs {...args} />;

export const Default: Story<TabsProps> = Template.bind({});

export const WithIcon: Story<TabsProps> = Template.bind({});
WithIcon.args = {
  children: [
    <TabList key={0} aria-label="Sample Tabs">
      <Tab icon={<InfoIcon />}>First Tab</Tab>
      <Tab icon={<InfoIcon />}>Second Tab</Tab>
    </TabList>,
    <TabPanel key={1}>First Content</TabPanel>,
    <TabPanel key={2}>Second Content</TabPanel>,
  ],
};

export const WidthBadge: Story<TabsProps> = Template.bind({});
WidthBadge.args = {
  children: [
    <TabList key={0} aria-label="Sample Tabs">
      <Tab badge={<Badge>Badge</Badge>}>First Tab</Tab>
      <Tab badge={<Badge>Badge</Badge>}>Second Tab</Tab>
    </TabList>,
    <TabPanel key={1}>First Content</TabPanel>,
    <TabPanel key={2}>Second Content</TabPanel>,
  ],
};
