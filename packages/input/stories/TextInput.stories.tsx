import { InfoIcon } from "@sikt/sds-icons";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "@sikt/sds-table";
import { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "../index";

const meta = {
  title: "Components/Input/Text",
  component: TextInput,
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    label: "Label",
    placeholder: "",
  },
} satisfies Story;

export const WithCustomIcon = {
  args: {
    ...Default.args,
    icon: <InfoIcon />,
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
    errorText: "Error!",
  },
} satisfies Story;

export const WithAriaLabelledby = {
  args: {
    "aria-labelledby": "rowTitle columnTitle",
    placeholder: "",
  },
  render: (args) => {
    return (
      <Table caption="TextInput inside Table" showCaption>
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader id="columnTitle">Input</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell data-th="Name" id="rowTitle">
              Sikt
            </TableCell>
            <TableCell data-th="Input">
              <TextInput {...args} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  },
} satisfies Story;
