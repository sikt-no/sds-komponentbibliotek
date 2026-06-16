import { Button } from "@sikt/sds-button";
import { Link, Heading3 } from "@sikt/sds-core";
import { UnorderedList, ListItem } from "@sikt/sds-list";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Footer } from "../index";

const meta = {
  title: "Components/Footer",
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    lang: "nb",
  },
};

export const WithContent: Story = {
  args: {
    ...Default.args,
    children: [
      <div key={0}>
        <Heading3 size="xxs">Header</Heading3>
        <UnorderedList>
          <ListItem>
            <Link href="#link">Link</Link>
          </ListItem>
          <ListItem>
            <Link href="#link">Link</Link>
          </ListItem>
          <ListItem>
            <Link href="#link">Link</Link>
          </ListItem>
        </UnorderedList>
      </div>,
      <div key={1}>
        <Button>Button</Button>
      </div>,
    ],
  },
};
