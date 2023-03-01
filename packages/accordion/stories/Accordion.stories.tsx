import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { AccordionProps, Accordion } from "../index";

export default {
  title: "Components/Accordion",
  component: Accordion,
  args: {
    title: "Accordion header",
    children:
      "In at massa id enim euismod condimentum. Maecenas placerat, lacus quis rutrum hendrerit, metus lectus finibus velit, quis faucibus nisl leo id libero. In rutrum commodo lectus id iaculis. Quisque a leo vitae turpis rhoncus aliquet. Proin massa eros, lacinia nec euismod in, rutrum vel lacus. Suspendisse blandit nunc non leo varius tincidunt. Integer porta sollicitudin dictum. Fusce eu sapien ut urna ullamcorper varius eu malesuada tortor. In feugiat tempor justo ac iaculis. Maecenas elementum eu ante vel congue. Cras ut aliquam febus nisl leo id libero. In rutrum commodo lectus id iaculis. Quisque a leo vitae turpis rhoncus.    ",
    size: "large",
  },
} as Meta;

const Template: Story<AccordionProps> = (args) => <Accordion {...args} />;

export const Default: Story<AccordionProps> = Template.bind({});
