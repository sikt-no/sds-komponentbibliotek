import { Meta, StoryObj } from "@storybook/react-vite";
import { NavigateToNextIcon, NavigateToPreviousIcon } from "../../icons/index";
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
        <Button
          icon={<NavigateToPreviousIcon />}
          iconVariant="left"
          variant="critical"
        >
          Critical
        </Button>
        <Button>Subtle</Button>
        <Button icon={<NavigateToNextIcon />} variant="strong">
          Strong
        </Button>
      </>
    ),
  },
};
