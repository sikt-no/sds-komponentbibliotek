import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "@sikt/sds-table";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { RadioFieldset, RadioInput } from "../index";

const meta = {
  title: "Components/Radio/RadioFieldset",
  component: RadioFieldset,
} satisfies Meta<typeof RadioFieldset>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: [
      <RadioInput key={1} label="Radio 1" value="1" />,
      <RadioInput key={2} label="Radio 2" value="2" />,
      <RadioInput key={3} label="Radio 3" value="3" />,
    ],
    legend: "Legend",
  },
  render: (args) => {
    const [selected, setSelected] = useState("1");
    return (
      <RadioFieldset
        {...args}
        onChange={(event) => {
          console.log(event.target.value);
          setSelected(event.target.value);
        }}
        value={selected}
      >
        {args.children}
      </RadioFieldset>
    );
  },
} satisfies Story;

export const WithHelpText = {
  args: {
    ...Default.args,
    helpText: "Helpful text",
  },
  render: (args) => {
    const [selected, setSelected] = useState("2");
    return (
      <RadioFieldset
        {...args}
        onChange={(event) => {
          console.log(event.target.value);
          setSelected(event.target.value);
        }}
        value={selected}
      >
        {args.children}
      </RadioFieldset>
    );
  },
} satisfies Story;

export const WithError = {
  args: {
    ...Default.args,
    errorText: "Error: Message",
    helpText: "Helpful text",
  },
  render: (args) => {
    const [selected, setSelected] = useState("3");
    return (
      <RadioFieldset
        {...args}
        onChange={(event) => {
          console.log(event.target.value);
          setSelected(event.target.value);
        }}
        value={selected}
      >
        {args.children}
      </RadioFieldset>
    );
  },
} satisfies Story;

export const WithAriaLabelledby = {
  args: {
    children: Default.args.children,
    "aria-labelledby": "rowTitle columnTitle",
  },
  render: (args) => {
    const [selected, setSelected] = useState("");
    return (
      <Table caption="Radio inside Table" showCaption>
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader id="columnTitle">Fieldset</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell data-th="Name" id="rowTitle">
              Sikt
            </TableCell>
            <TableCell data-th="Fieldset">
              <RadioFieldset
                {...args}
                onChange={(event) => {
                  console.log(event.target.value);
                  setSelected(event.target.value);
                }}
                value={selected}
              >
                <RadioInput label="Radio 1" value="1" />
                <RadioInput label="Radio 2" value="2" />
                <RadioInput label="Radio 3" value="3" />
              </RadioFieldset>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  },
} satisfies Story;
