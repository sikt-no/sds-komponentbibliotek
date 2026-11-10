import { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../../index";
import { Badge, BadgeProps, BadgePositionProps } from "../index";

const meta: Meta = {
  title: "SD3/Badge",
  component: Badge,
};

export default meta;

type Story = StoryObj<BadgeProps>;

export const Default: Story = {
  args: {
    children: 10,
    maxNumber: 9,
    "aria-label": "10 nye meldinger",
  },
};

export const IsDot: Story = {
  args: {
    "aria-label": "Nye meldinger",
  },
};

export const WithPosition: StoryObj<
  BadgeProps & Pick<BadgePositionProps, "position" | "anchor">
> = {
  args: {
    children: 10,
    maxNumber: 9,
    "aria-label": "10 nye meldinger",
    position: "top-right",
  },
  argTypes: {
    position: {
      control: "select",
      options: ["top-right", "top-left", "bottom-right", "bottom-left"],
    },
    anchor: {
      control: "radio",
      options: ["edge", "inside"],
    },
  },
  render: ({ position, anchor, ...args }) => {
    return (
      <div id="e2e-test" style={{ display: "inline-block", padding: "20px" }}>
        <Badge.Position position={position} anchor={anchor}>
          <Badge {...args} />
          <Button variant="primary-subtle">Meldinger</Button>
        </Badge.Position>
      </div>
    );
  },
};
