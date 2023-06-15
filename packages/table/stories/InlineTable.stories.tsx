import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  InlineTable,
  TableCell,
  TableRow,
  TableProps,
  TableBody,
  TableHead,
  TableHeader,
  TableFoot,
} from "../index";

const meta: Meta = {
  title: "Components/Table/Inline",
  component: InlineTable,
};

export default meta;

type Story = StoryObj<TableProps>;

export const Default: Story = {
  args: {
    caption: "Table title",
    footerText: "Viser 2 av 248 linjer",
    "aria-rowcount": 248,
  },
  render: (args) => (
    <InlineTable {...args}>
      <TableHead>
        <TableRow>
          <TableHeader>1abc</TableHeader>
          <TableHeader>2def</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>A</TableCell>
          <TableCell>B</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>C</TableCell>
          <TableCell>D</TableCell>
        </TableRow>
      </TableBody>
    </InlineTable>
  ),
};

export const WithFooter: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <InlineTable {...args}>
      <TableHead>
        <TableRow>
          <TableHeader>1abc</TableHeader>
          <TableHeader>2def</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>A</TableCell>
          <TableCell>B</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>C</TableCell>
          <TableCell>D</TableCell>
        </TableRow>
      </TableBody>
      <TableFoot>
        <TableRow>
          <TableCell>E456</TableCell>
          <TableCell>F789</TableCell>
        </TableRow>
      </TableFoot>
    </InlineTable>
  ),
};

export const WithVerticalHeader: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <InlineTable {...args}>
      <TableBody>
        <TableRow>
          <TableHeader scope="row">A0023-35</TableHeader>
          <TableCell>0035</TableCell>
          <TableCell>Ola Nordmann</TableCell>
        </TableRow>
        <TableRow>
          <TableHeader scope="row">A0023-39</TableHeader>
          <TableCell>0039</TableCell>
          <TableCell>Fornavn Mellomnavn Etternavn</TableCell>
        </TableRow>
      </TableBody>
    </InlineTable>
  ),
};
