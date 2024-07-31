import { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionProps } from "../index";

const meta: Meta = {
  title: "Components/Accordion",
  component: Accordion,
};

export default meta;

type Story = StoryObj<AccordionProps>;

export const Default: Story = {
  args: {
    title: "Accordion header",
    children:
      "In at massa id enim euismod condimentum. Maecenas placerat, lacus quis rutrum hendrerit, metus lectus finibus velit, quis faucibus nisl leo id libero. In rutrum commodo lectus id iaculis. Quisque a leo vitae turpis rhoncus aliquet. Proin massa eros, lacinia nec euismod in, rutrum vel lacus. Suspendisse blandit nunc non leo varius tincidunt. Integer porta sollicitudin dictum. Fusce eu sapien ut urna ullamcorper varius eu malesuada tortor. In feugiat tempor justo ac iaculis. Maecenas elementum eu ante vel congue. Cras ut aliquam febus nisl leo id libero. In rutrum commodo lectus id iaculis. Quisque a leo vitae turpis rhoncus.    ",
    size: "large",
  },
};
