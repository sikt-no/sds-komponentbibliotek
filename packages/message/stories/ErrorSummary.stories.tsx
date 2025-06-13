import { Link } from "@sikt/sds-core";
import { UnorderedList, ListItem } from "@sikt/sds-list";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import { ErrorSummary as Component, ErrorSummaryProps } from "../index";

const meta: Meta = {
  title: "Components/Message/Error Summary",
  component: Component,
  subcomponents: { Link, ListItem, UnorderedList },
};

export default meta;

type Story = StoryObj<ErrorSummaryProps>;

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
