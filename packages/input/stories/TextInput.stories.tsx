import { InfoIcon } from "@sikt/sds-icons";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "@sikt/sds-table";
import { Meta, StoryObj } from "@storybook/react-vite";
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
    onChange: console.log,
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
    helpText: "Helpful text",
  },
} satisfies Story;

export const WithError = {
  args: {
    ...Default.args,
    helpText: "Helpful text",
    errorText: "Error: Message",
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

export const Readonly = {
  args: {
    ...Default.args,
    value: "Value",
    readOnly: true,
    helpText: "Readonly",
  },
} satisfies Story;
