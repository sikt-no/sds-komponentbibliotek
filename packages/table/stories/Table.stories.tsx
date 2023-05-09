import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  Table,
  TableCell,
  TableRow,
  TableProps,
  TableBody,
  TableHead,
  TableHeader,
  TableFoot,
} from "../index";

export default {
  title: "Components/Table",
  component: Table,
  subcomponents: { TableHead, TableHeader, TableFoot, TableCell, TableRow },
  args: {
    caption: "Table title",
    footerText: "Viser 2 av 248 linjer",
    "aria-rowcount": "248",
  },
  tags: ["autodocs"],
} as Meta;

export const Default: Story<TableProps> = (args) => (
  <Table {...args}>
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
  </Table>
);

export const WithFooter: Story<TableProps> = (args) => (
  <Table {...args}>
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
  </Table>
);

export const WithVerticalHeader: Story<TableProps> = (args) => (
  <Table {...args}>
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
  </Table>
);
