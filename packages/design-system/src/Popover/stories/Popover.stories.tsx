import { DeleteIcon } from "@sikt/sds-icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useId } from "react";
import { Button } from "../../Button";
import { Paragraph } from "../../Typography";
import { Popover, type PopoverProps } from "../index";

const meta: Meta<PopoverProps> = {
  title: "SD3/Popover",
  component: Popover,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "grid",
          placeItems: "center",
          padding: "100px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          "A non-modal floating panel with an arrow that points at its trigger. For brief supplementary content or a small inline action next to the element that opened it.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<PopoverProps>;

export const Default: Story = {
  render: (args) => {
    const id = useId();
    return (
      <>
        <Button popoverTarget={id}>Open popover</Button>
        <Popover {...args} id={id}>
          Hello
        </Popover>
      </>
    );
  },
};

export const InlineTextTrigger: Story = {
  render: (args) => {
    const id = useId();
    return (
      <Paragraph>
        The deadline is{" "}
        <Popover.InlineTextButton popoverTarget={id}>
          strict
        </Popover.InlineTextButton>{" "}
        and cannot be extended.
        <Popover {...args} id={id}>
          Late submissions are not graded.
        </Popover>
      </Paragraph>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "`Popover.InlineTextButton` is a dotted-underline trigger that inherits the surrounding text's font and color.",
      },
    },
  },
};

export const DeleteConfirmation: Story = {
  args: {
    placement: "right-center",
  },
  render: (args) => {
    const id = useId();
    return (
      <div>
        <Button
          theme="critical"
          size="large"
          aria-label="Delete draft"
          popoverTarget={id}
        >
          <Button.Icon>
            <DeleteIcon />
          </Button.Icon>
        </Button>
        <Popover {...args} id={id}>
          <div style={{ display: "grid", gap: "1em" }}>
            <Paragraph>
              Are you sure you want to delete the draft? This action cannot be
              undone.
            </Paragraph>
            <Button.Group>
              <Button
                size="small"
                theme="critical"
                popoverTarget={id}
                popoverTargetAction="hide"
              >
                Yes, delete it
              </Button>
              <Button
                size="small"
                variant="tertiary"
                popoverTarget={id}
                popoverTargetAction="hide"
              >
                No, cancel
              </Button>
            </Button.Group>
          </div>
        </Popover>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'A critical icon-only trigger opens a confirmation popover anchored to its right. Both actions dismiss it via `popoverTarget` + `popoverTargetAction="hide"`.',
      },
    },
  },
};
