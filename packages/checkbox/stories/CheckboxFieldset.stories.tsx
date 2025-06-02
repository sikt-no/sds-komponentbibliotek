import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "@sikt/sds-table";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Fieldset } from "../../form";
import { CheckboxInput } from "../index";

const meta = {
  title: "Components/Checkbox/CheckboxFieldset",
  component: Fieldset,
} satisfies Meta<typeof Fieldset>;

export default meta;

type Story = StoryObj<typeof meta>;

const templateArgs = {
  children: [
    <CheckboxInput key={1} isChecked label="Checkbox label 1" />,
    <CheckboxInput key={2} label="Checkbox label 2" />,
    <CheckboxInput key={3} isChecked label="Checkbox label 3" />,
  ],
} satisfies Partial<Story["args"]>;

export const WithLegend = {
  args: {
    ...templateArgs,
    legend: "Legend",
    errorText: undefined,
    helpText: undefined,
  },
} satisfies Story;

export const WithHelpText = {
  args: {
    ...templateArgs,
    legend: "Legend",
    errorText: undefined,
    helpText: "Helpful text",
  },
} satisfies Story;

export const WithError = {
  ...templateArgs,
  args: {
    children: [
      <CheckboxInput
        key={1}
        isChecked
        label="Checkbox label"
        error
        onChange={() => null}
      />,
    ],
    legend: "Legend",
    errorText: "Error: Message",
    helpText: "Helpful text",
  },
} satisfies Story;

export const WithAriaLabelledby = {
  args: {
    ...templateArgs,
    "aria-labelledby": "rowTitle columnTitle",
  },
  render: (args) => {
    return (
      <Table caption="Fieldset inside Table" showCaption>
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
              <Fieldset {...args}>
                <CheckboxInput label="Checkbox label" />
              </Fieldset>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  },
} satisfies Story;
