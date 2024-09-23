import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "@sikt/sds-table";
import { useArgs } from "@storybook/preview-api";
import { Meta, StoryObj } from "@storybook/react";
import { Select } from "../index";

const meta = {
  title: "Components/Select",
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    label: "Label",
    options: [
      { label: "First item", value: "1" },
      { label: "Second item", value: "2" },
      { label: "Third item", value: "3" },
    ],
    value: "2",
  },
  render: (args) => {
    const [, setArgs] = useArgs();
    return (
      <Select
        {...args}
        onChange={(event) => {
          setArgs({ value: event.target.value });
        }}
      />
    );
  },
} satisfies Story;

export const WithHelpText = {
  args: {
    ...Default.args,
    helpText: "Text",
  },
} satisfies Story;

export const WithError = {
  args: {
    ...Default.args,
    errorText: "Error",
  },
} satisfies Story;

export const WithAriaLabelledby = {
  args: {
    options: Default.args.options,
    "aria-labelledby": "rowTitle columnTitle",
  },
  render: (args) => {
    return (
      <Table caption="Select inside Table" showCaption>
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader id="columnTitle">Select</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell data-th="Name" id="rowTitle">
              Sikt
            </TableCell>
            <TableCell data-th="Select">
              <Select {...args} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  },
} satisfies Story;
