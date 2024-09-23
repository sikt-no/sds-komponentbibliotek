import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "@sikt/sds-table";
import { Meta, StoryObj } from "@storybook/react";
import { ChangeEvent, useEffect, useState } from "react";
import { ToggleSwitch } from "../index";

const meta = {
  title: "Components/Toggle/ToggleSwitch",
  component: ToggleSwitch,
} satisfies Meta<typeof ToggleSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template = {
  render: (args) => {
    const [isChecked, setIsChecked] = useState(args.checked);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const checked = event.target.checked;
      setIsChecked(checked);
      args.onChange?.(event);
    };

    useEffect(() => {
      setIsChecked(args.checked);
    }, [args.checked]);

    return (
      <ToggleSwitch {...args} onChange={handleChange} checked={isChecked} />
    );
  },
} satisfies Partial<Story>;

export const Default = {
  ...Template,
  args: {
    label: "Label",
    checked: true,
  },
} satisfies Story;

export const WithoutIcon = {
  ...Template,
  args: {
    ...Default.args,
    showIcons: false,
  },
} satisfies Story;

export const WithLabelFirst = {
  ...Template,
  args: {
    label: "Label",
    checked: true,
    labelFirst: true,
  },
} satisfies Story;

export const WithError = {
  ...Template,
  args: { ...Default.args, error: true },
} satisfies Story;

export const WithAriaLabelledby = {
  args: {
    "aria-labelledby": "rowTitle columnTitle",
    checked: true,
  },
  render: (args) => {
    return (
      <Table caption="ToggleSwitch inside Table" showCaption>
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
              <ToggleSwitch {...args} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  },
} satisfies Story;
