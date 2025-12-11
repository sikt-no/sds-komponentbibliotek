import { parseDate } from "@internationalized/date";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import { InputDaterangepicker } from "../index";

const meta = {
  title: "Components/InputDatepicker/InputDaterangepicker",
  component: InputDaterangepicker,
} satisfies Meta<typeof InputDaterangepicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    label: "Label",
    onChange: (e) => {
      console.log(e);
    },
  },
} satisfies Story;

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

export const WithDate = {
  args: {
    ...Default.args,
    value: {
      start: parseDate(yesterday.toISOString().substring(0, 10)),
      end: parseDate(new Date().toISOString().substring(0, 10)),
    },
  },
} satisfies Story;

export const WithClearOption: Story = {
  args: {
    ...Default.args,
    clearActionProps: {
      "aria-label": "Clear date",
      onClick: () => {
        console.log("clear");
      },
    },
  },
} satisfies Story;
