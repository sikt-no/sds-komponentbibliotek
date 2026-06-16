import { Link } from "@sikt/sds-core";
import { UnorderedList, ListItem } from "@sikt/sds-list";
import { Meta, StoryObj } from "@storybook/react-vite";
import { ErrorSummary as Component } from "../index";

const meta = {
  title: "Components/Message/Error Summary",
  component: Component,
  subcomponents: { Link, ListItem, UnorderedList },
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ErrorSummary: Story = {
  args: {
    children: (
      <>
        Message
        <UnorderedList>
          {[1, 2, 3].map((item) => {
            return (
              <ListItem key={item}>
                <Link href={`#${item}`}>Error {item}</Link>
              </ListItem>
            );
          })}
        </UnorderedList>
      </>
    ),
  },
};

export const ErrorSummaryWithSubmit: Story = {
  args: {
    ...ErrorSummary.args,
  },
  render: (args) => {
    return (
      <>
        <Component {...args} id="id" />
        <button
          onClick={() => {
            document.getElementById("id")?.focus();
          }}
        >
          Submit with error
        </button>
      </>
    );
  },
};
