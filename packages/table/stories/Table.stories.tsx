import React from "react";
import { Meta, StoryObj } from "@storybook/react";
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

const meta: Meta = {
  title: "Components/Table",
  component: Table,
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
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableHeader>Id</TableHeader>
          <TableHeader>Navn</TableHeader>
          <TableHeader>Telefon</TableHeader>
          <TableHeader>Adresse</TableHeader>
          <TableHeader>Benhandlingsstatus</TableHeader>
          <TableHeader>CTA</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>Ola Nordmann</TableCell>
          <TableCell>
            <a href="tel:" style={{ whiteSpace: "nowrap" }}>
              90 90 90 90
            </a>
          </TableCell>
          <TableCell>
            <address>
              <span style={{ whiteSpace: "nowrap" }}>
                Fridtjof Nansens vei 19
              </span>
              <br />
              <span>0369 Oslo</span>
            </address>
          </TableCell>
          <TableCell>Behandlet</TableCell>
          <TableCell>
            <button style={{ whiteSpace: "nowrap" }}>Klikk meg</button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>Kari Nordmann</TableCell>
          <TableCell>
            <a href="tel:" style={{ whiteSpace: "nowrap" }}>
              90 90 90 90
            </a>
          </TableCell>
          <TableCell>
            <address>
              <span style={{ whiteSpace: "nowrap" }}>
                Fridtjof Nansens vei 19
              </span>
              <br />
              <span>0369 Oslo</span>
            </address>
          </TableCell>
          <TableCell>Ubehandlet</TableCell>
          <TableCell>
            <button style={{ whiteSpace: "nowrap" }}>Klikk meg</button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3</TableCell>
          <TableCell>Odd Even Nordmann</TableCell>
          <TableCell>
            <a href="tel:" style={{ whiteSpace: "nowrap" }}>
              90 90 90 90
            </a>
          </TableCell>
          <TableCell>
            <address>
              <span style={{ whiteSpace: "nowrap" }}>
                Fridtjof Nansens vei 19
              </span>
              <br />
              <span>0369 Oslo</span>
            </address>
          </TableCell>
          <TableCell>Ubehandlet</TableCell>
          <TableCell>
            <button style={{ whiteSpace: "nowrap" }}>Klikk meg</button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WithFooter: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
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
  ),
};

export const WithVerticalHeader: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
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
  ),
};
