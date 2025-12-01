import { Meta, StoryObj } from "@storybook/react-webpack5";
import { useState } from "react";
import { Badge } from "../../badge/index";
import { InfoIcon } from "../../icons/index";
import { Tab, TabList, TabPanel, Tabs, TabsProps } from "../index";
import "@sikt/sds-popover/dist/index.css";

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
        <Tab>Fourth Tab</Tab>
      </TabList>,
      <TabPanel key={1}>First Content</TabPanel>,
      <TabPanel key={2}>Second Content</TabPanel>,
      <TabPanel key={3}>Third Content</TabPanel>,
      <TabPanel key={4}>Fourth Content</TabPanel>,
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

export const Controlled: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    const [controlledIndex, setControlledIndex] = useState(0);

    return (
      <>
        <button
          onClick={() => {
            setControlledIndex(controlledIndex + 1);
          }}
        >
          Change index+1
        </button>
        <Tabs
          {...args}
          controlledIndex={controlledIndex}
          onChange={(selectedIndex) => {
            setControlledIndex(selectedIndex);
          }}
        />
      </>
    );
  },
};

export const TooManyTabsOnTheDancefloor: Story = {
  args: {
    children: [
      <TabList key={0} aria-label="Sample Tabs">
        <Tab>First Tab</Tab>
        <Tab>Second Tab</Tab>
        <Tab>Third Tab</Tab>
        <Tab>Fourth Tab</Tab>
        <Tab>5 Tab</Tab>
        <Tab>6 Tab</Tab>
        <Tab>7 Tab</Tab>
        <Tab>8 Tab</Tab>
      </TabList>,
      <TabPanel key={1}>First Content</TabPanel>,
      <TabPanel key={2}>Second Content</TabPanel>,
      <TabPanel key={3}>Third Content</TabPanel>,
      <TabPanel key={4}>Fourth Content</TabPanel>,
      <TabPanel key={5}>5 Content</TabPanel>,
      <TabPanel key={6}>6 Content</TabPanel>,
      <TabPanel key={7}>7 Content</TabPanel>,
      <TabPanel key={8}>8 Content</TabPanel>,
    ],
  },
};
