import { Meta, StoryObj } from "@storybook/react";
import { Popover } from "../../popover/index";
import { InputFile, InputFileProps, FileList, FileListItem } from "../index";

const meta: Meta = {
  title: "Components/InputFile",
  component: InputFile,
  subcomponents: { FileList, FileListItem },
};

export default meta;

type Story = StoryObj<InputFileProps>;

export const Default: Story = {
  args: {
    label: "Label",
    "aria-label": "Label",
    helpText: "Help text",
    placeholder: "Drop file here,",
    placeholderBridge: "or",
    triggerText: "Open file explorer",
    onChange: (value) => {
      console.log(value);
    },
    accept: ".doc,.docx,image/png,image/jpg",
    capture: undefined,
    multiple: true,
  },
  render: (args) => (
    <div data-testid="sds-input-file">
      <InputFile {...args} />
      <FileList figCaption="Attachments (2)">
        <FileListItem
          fileSize={1466607}
          removeActionProps={{
            label: "Remove FileName.jpg",
            onClick: () => {
              console.log("action");
            },
          }}
        >
          <Popover target="Image preview">FileName.jpg</Popover>
        </FileListItem>
        <FileListItem
          progressProps={{
            label: "Loading FileNameVeeeeeeeeeeeeeeeeeeeeeeeeeeeeeryLong.pdf",
            value: 54,
          }}
          loading
        >
          FileNameVeeeeeeeeeeeeeeeeeeeeeeeeeeeeeryLong.pdf
        </FileListItem>
      </FileList>
    </div>
  ),
};

export const WithError: Story = {
  args: {
    ...Default.args,
    errorText: "Error",
  },
  render: (args) => (
    <div data-testid="sds-input-file">
      <InputFile triggerText="Open file explorer" {...args} />
      <FileList figCaption="Attachments (1)">
        <FileListItem
          fileSize={1466607}
          removeActionProps={{
            label: "Remove FileName.jpg",
            onClick: () => {
              console.log("action");
            },
          }}
        >
          <Popover target="Image preview">FileName.jpg</Popover>
        </FileListItem>
        <FileListItem
          fileSize={1000}
          removeActionProps={{
            label: "Remove FileName.jpg",
            onClick: () => {
              console.log("action");
            },
          }}
          errorText={args.errorText}
        >
          FileName.pdf
        </FileListItem>
      </FileList>
    </div>
  ),
};
