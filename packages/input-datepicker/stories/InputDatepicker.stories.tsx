import { parseDate } from "@internationalized/date";
import {
  TableHead,
  TableRow,
  TableCell,
  Table,
  TableHeader,
  TableBody,
} from "@sikt/sds-table";
import { Meta, StoryObj } from "@storybook/react";
import { InputDatepicker } from "../index";

const meta = {
  title: "Components/InputDatepicker",
  component: InputDatepicker,
} satisfies Meta<typeof InputDatepicker>;

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

export const WithDate = {
  args: {
    ...Default.args,
    value: parseDate(new Date().toISOString().substring(0, 10)),
  },
} satisfies Story;

export const WithMinAndMaxValue = {
  args: {
    ...Default.args,
    minValue: parseDate(new Date().toISOString().substring(0, 10)),
    maxValue: parseDate(new Date().toISOString().substring(0, 10)),
  },
} satisfies Story;

export const WithHelpText = {
  args: {
    ...Default.args,
    helpText: "Helpful text",
  },
} satisfies Story;

export const WithError: Story = {
  args: {
    ...Default.args,
    helpText: "Helpful text",
    errorText: "Error: Message",
  },
} satisfies Story;

export const WithCustomLocale: Story = {
  args: {
    ...Default.args,
    lang: "en-GB",
  },
} satisfies Story;

export const WithClearOption: Story = {
  args: {
    ...Default.args,
    value: parseDate(new Date().toISOString().substring(0, 10)),
    clearActionProps: {
      "aria-label": "Clear date",
      onClick: () => {
        console.log("clear");
      },
    },
  },
} satisfies Story;

export const WithAriaLabelledby = {
  args: {
    "aria-labelledby": "rowTitle columnTitle",
  },
  render: (args) => {
    return (
      <Table caption="InputDatepicker inside Table" showCaption>
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader id="columnTitle">Date</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell data-th="Name" id="rowTitle">
              Sikt
            </TableCell>
            <TableCell data-th="Date">
              <InputDatepicker {...args} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  },
} satisfies Story;
