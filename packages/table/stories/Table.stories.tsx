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
    caption: "Table caption",
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
          <TableHeader>Behandlingsstatus</TableHeader>
          <TableHeader>CTA</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell data-th="Id">1</TableCell>
          <TableCell data-th="Navn">Ola Nordmann</TableCell>
          <TableCell data-th="Telefon">
            <a href="tel:" style={{ whiteSpace: "nowrap" }}>
              90 90 90 90
            </a>
          </TableCell>
          <TableCell data-th="Adresse">
            <address>
              <span style={{ whiteSpace: "nowrap" }}>
                Fridtjof Nansens vei 19
              </span>
              <br />
              <span>0369 Oslo</span>
            </address>
          </TableCell>
          <TableCell data-th="Behandlingsstatus">Behandlet</TableCell>
          <TableCell data-th="CTA">
            <button style={{ whiteSpace: "nowrap" }}>Klikk meg</button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell data-th="Id">2</TableCell>
          <TableCell data-th="Navn">Kari Nordmann</TableCell>
          <TableCell data-th="Telefon">
            <a href="tel:" style={{ whiteSpace: "nowrap" }}>
              90 90 90 90
            </a>
          </TableCell>
          <TableCell data-th="Adresse">
            <address>
              <span style={{ whiteSpace: "nowrap" }}>
                Fridtjof Nansens vei 19
              </span>
              <br />
              <span>0369 Oslo</span>
            </address>
          </TableCell>
          <TableCell data-th="Behandlingsstatus">Ubehandlet</TableCell>
          <TableCell data-th="CTA">
            <button style={{ whiteSpace: "nowrap" }}>Klikk meg</button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell data-th="Id">3</TableCell>
          <TableCell data-th="Navn">Odd Even Nordmann</TableCell>
          <TableCell data-th="Telefon">
            <a href="tel:" style={{ whiteSpace: "nowrap" }}>
              90 90 90 90
            </a>
          </TableCell>
          <TableCell data-th="Adresse">
            <address>
              <span style={{ whiteSpace: "nowrap" }}>
                Fridtjof Nansens vei 19
              </span>
              <br />
              <span>0369 Oslo</span>
            </address>
          </TableCell>
          <TableCell data-th="Behandlingsstatus">Ubehandlet</TableCell>
          <TableCell data-th="CTA">
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
          <TableHeader>Header</TableHeader>
          <TableHeader>Header</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell data-th="Header">A</TableCell>
          <TableCell data-th="Header">B</TableCell>
        </TableRow>
        <TableRow>
          <TableCell data-th="Header">C</TableCell>
          <TableCell data-th="Header">D</TableCell>
        </TableRow>
      </TableBody>
      <TableFoot>
        <TableRow>
          <TableCell data-th="Header">E456</TableCell>
          <TableCell data-th="Header">F789</TableCell>
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
          <TableCell data-th="A0023-35">0035</TableCell>
          <TableCell data-th="A0023-35">Ola Nordmann</TableCell>
        </TableRow>
        <TableRow>
          <TableHeader scope="row">A0023-39</TableHeader>
          <TableCell data-th="A0023-39">0039</TableCell>
          <TableCell data-th="A0023-39">Fornavn Mellomnavn Etternavn</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
