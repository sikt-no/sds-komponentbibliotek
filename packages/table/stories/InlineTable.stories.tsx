import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
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

export default {
  title: "Components/Table/Inline",
  component: InlineTable,
  subcomponents: { TableHead, TableHeader, TableFoot, TableCell, TableRow },
  args: {
    caption: "Table title",
    footerText: "Viser 2 av 248 linjer",
    "aria-rowcount": "248",
  },
} as Meta;

export const Default: Story<TableProps> = (args) => (
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
);

export const WithFooter: Story<TableProps> = (args) => (
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
);

export const WithVerticalHeader: Story<TableProps> = (args) => (
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
);
