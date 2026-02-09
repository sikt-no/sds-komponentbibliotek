import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "@sikt/sds-table";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import { CheckboxInput } from "../../checkbox";
import { Fieldset } from "../index";

const meta = {
  title: "Components/Form/Fieldset",
  component: Fieldset,
} satisfies Meta<typeof Fieldset>;

export default meta;

type Story = StoryObj<typeof meta>;

const templateArgs = {
  children: [
    <CheckboxInput
      key={1}
      checked
      label="Checkbox label"
      onChange={() => null}
    />,
  ],
} satisfies Partial<Story["args"]>;

export const Default = {
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
  args: {
    ...templateArgs,
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
