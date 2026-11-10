import { Meta, StoryObj } from "@storybook/react-vite";
import { Link, List } from "../../../index";
import { Footer, FooterProps } from "../index";

const meta: Meta = {
  title: "SD3/Footer",
  component: Footer,
};

export default meta;

type Story = StoryObj<FooterProps>;

export const Default: Story = {
  args: {
    children: [
      <List.Unordered hideListStyle key={0}>
        <List.Item>
          <Link href="#personvern-og-informasjonskapsler">
            Personvern og informasjons&shy;kapsler
          </Link>
        </List.Item>
        <List.Item>
          <Link href="#tilgjengelighetserklæring">
            Tilgjengelighets&shy;erklæring
          </Link>
        </List.Item>
      </List.Unordered>,
    ],
  },
  render: ({ ...args }) => (
    <Footer {...args}>
      <Footer.Link href="//sikt.no">
        <Footer.Logo />
      </Footer.Link>
      {args.children}
    </Footer>
  ),
};
