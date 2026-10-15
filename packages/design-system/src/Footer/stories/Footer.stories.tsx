import { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "../../../index";
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
      <ul key={0}>
        <li>
          <Link href="#personvern-og-informasjonskapsler">
            Personvern og informasjons&shy;kapsler
          </Link>
        </li>
        <li>
          <Link href="#tilgjengelighetserklæring">
            Tilgjengelighets&shy;erklæring
          </Link>
        </li>
      </ul>,
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
