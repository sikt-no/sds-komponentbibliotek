import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "@sikt/sds-table";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import { CheckboxInput } from "../index";

const meta: Meta<typeof CheckboxInput> = {
  title: "Components/Checkbox/Checkbox",
  component: CheckboxInput,
};

export default meta;

type Story = StoryObj<typeof CheckboxInput>;

export const Checked: Story = {
  args: {
    checked: true,
    label: "Checked checkbox",
    onChange: console.log,
  },
};

export const Unchecked: Story = {
  args: {
    checked: false,
    label: "Unchecked checkbox",
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    label: "Indeterminate checkbox",
  },
};

export const WithAriaLabel: Story = {
  args: {
    checked: true,
    "aria-label": "Label",
  },
};

export const WithAriaLabelledby: Story = {
  args: {
    checked: true,
    "aria-labelledby": "rowTitle columnTitle",
  },
  render: (args) => {
    return (
      <Table caption="CheckboxInput inside Table" showCaption>
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader id="columnTitle">Active</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell data-th="Name" id="rowTitle">
              Sikt
            </TableCell>
            <TableCell data-th="Active">
              <CheckboxInput {...args} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  },
};
