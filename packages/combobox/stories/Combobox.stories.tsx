import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@sikt/sds-table";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
  Combobox,
  ComboboxHeader,
  ComboboxItem,
  ComboboxSection,
} from "../index";

const meta = {
  title: "Components/Combobox",
  component: Combobox,
} satisfies Meta<typeof Combobox>;

export default meta;
const options = [
  { id: "a123e456-12d3-a456-426614174001", name: "Adobe Photoshop" },
  { id: "b123e456-12d3-a456-426614174002", name: "Adobe XD" },
  { id: "c123e456-12d3-a456-426614174003", name: "Adobe InDesign" },
  { id: "d123e456-12d3-a456-426614174004", name: "Adobe AfterEffects" },
  { id: "e123e456-12d3-a456-426614174005", name: "Adobe Illustrator" },
  { id: "f123e456-12d3-a456-426614174006", name: "Adobe Lightroom" },
  { id: "g123e456-12d3-a456-426614174007", name: "Adobe Premiere Pro" },
  { id: "h123e456-12d3-a456-426614174008", name: "Adobe Fresco" },
  { id: "i123e456-12d3-a456-426614174009", name: "Adobe Dreamweaver" },
];
type Option = (typeof options)[number];

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    label: "Adobe product",
    onSelectionChange: console.log,
    children: undefined,
  },
  render: (args) => {
    return (
      <Combobox
        defaultItems={options}
        defaultInputValue="Adobe Photoshop"
        {...args}
      >
        {(item) => <ComboboxItem>{(item as Option).name}</ComboboxItem>}
      </Combobox>
    );
  },
} satisfies Story;

export const StaticItems = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    return (
      <Combobox {...args}>
        {options.map((option) => (
          <ComboboxItem key={option.id} id={option.id}>
            {option.name}
          </ComboboxItem>
        ))}
      </Combobox>
    );
  },
} satisfies Story;

export const Controlledtory = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    const [value, setValue] = React.useState("Adobe Photoshop");
    return (
      <Combobox
        defaultItems={options}
        inputValue={value}
        onInputChange={setValue}
        {...args}
      >
        {(item) => <ComboboxItem>{(item as Option).name}</ComboboxItem>}
      </Combobox>
    );
  },
} satisfies Story;

export const StaticItemsWithSections = {
  args: {
    ...Default.args,
    label: "Preferred fruit or vegetable",
  },
  render: (args) => {
    return (
      <Combobox {...args}>
        <ComboboxSection>
          <ComboboxHeader>Fruit</ComboboxHeader>
          <ComboboxItem id="Apple">Apple</ComboboxItem>
          <ComboboxItem id="Banana">Banana</ComboboxItem>
          <ComboboxItem id="Orange">Orange</ComboboxItem>
          <ComboboxItem id="Honeydew">Honeydew</ComboboxItem>
          <ComboboxItem id="Grapes">Grapes</ComboboxItem>
          <ComboboxItem id="Watermelon">Watermelon</ComboboxItem>
          <ComboboxItem id="Cantaloupe">Cantaloupe</ComboboxItem>
          <ComboboxItem id="Pear">Pear</ComboboxItem>
        </ComboboxSection>
        <ComboboxSection>
          <ComboboxHeader>Vegetable</ComboboxHeader>
          <ComboboxItem id="Cabbage">Cabbage</ComboboxItem>
          <ComboboxItem id="Broccoli">Broccoli</ComboboxItem>
          <ComboboxItem id="Carrots">Carrots</ComboboxItem>
          <ComboboxItem id="Lettuce">Lettuce</ComboboxItem>
          <ComboboxItem id="Spinach">Spinach</ComboboxItem>
          <ComboboxItem id="Bok Choy">Bok Choy</ComboboxItem>
          <ComboboxItem id="Cauliflower">Cauliflower</ComboboxItem>
          <ComboboxItem id="Potatoes">Potatoes</ComboboxItem>
        </ComboboxSection>
      </Combobox>
    );
  },
} satisfies Story;

export const WithAriaLabelledby = {
  args: {
    children: (
      <>
        <ComboboxItem id="Apple">Apple</ComboboxItem>
        <ComboboxItem id="Banana">Banana</ComboboxItem>
        <ComboboxItem id="Orange">Orange</ComboboxItem>
      </>
    ),
    "aria-labelledby": "rowTitle columnTitle",
  },
  render: (args) => {
    return (
      <Table caption="Combobox inside Table" showCaption>
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader id="columnTitle">Combobox</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell data-th="Name" id="rowTitle">
              Sikt
            </TableCell>
            <TableCell data-th="Select">
              <Combobox {...args} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  },
} satisfies Story;
