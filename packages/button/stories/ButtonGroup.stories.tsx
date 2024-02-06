import { Meta, StoryObj } from "@storybook/react";
import { ButtonGroupProps, Button, ButtonGroup } from "../index";
import { ArrowRightIcon, ArrowLeftIcon } from "../../icons/index";

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
