import { Meta, StoryObj } from "@storybook/react";
import { ArrowLeftIcon, ArrowRightIcon } from "../../icons/index";
import { Button, ButtonGroup, ButtonGroupProps } from "../index";

const meta: Meta = {
  title: "Components/Button/ButtonGroup",
  component: ButtonGroup,
};

export default meta;

type Story = StoryObj<ButtonGroupProps>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Button icon={<ArrowLeftIcon />} iconVariant="left" variant="critical">
          Critical
        </Button>
        <Button>Subtle</Button>
        <Button icon={<ArrowRightIcon />} variant="strong">
          Strong
        </Button>
      </>
    ),
  },
};
