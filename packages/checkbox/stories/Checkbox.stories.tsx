import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "@sikt/sds-table";
import { Meta, StoryObj } from "@storybook/react";
import { CheckboxInput } from "../index";

const meta: Meta<typeof CheckboxInput> = {
  title: "Components/Checkbox/Checkbox",
  component: CheckboxInput,
};

export default meta;

type Story = StoryObj<typeof CheckboxInput>;

export const Checked: Story = {
  args: {
    isChecked: true,
    label: "Checked checkbox",
  },
};

export const Unchecked: Story = {
  args: {
    isChecked: false,
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
    isChecked: true,
    "aria-label": "Label",
  },
};

export const WithAriaLabelledby: Story = {
  args: {
    isChecked: true,
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
