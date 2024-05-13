import { Meta, StoryObj } from "@storybook/react";
import {
  Combobox,
  ComboboxProps,
  ComboboxItem,
  ComboboxHeader,
  ComboboxSection,
} from "../index";
import React from "react";

const meta: Meta = {
  title: "Components/Combobox",
  component: Combobox,
};

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

type Story = StoryObj<ComboboxProps<(typeof options)[number]>>;

export const Default: Story = {
  args: {
    label: "Adobe product",
    onSelectionChange: console.log,
  },
  render: (args) => {
    return (
      <Combobox
        defaultItems={options}
        defaultInputValue="Adobe Photoshop"
        {...args}
      >
        {(item) => <ComboboxItem>{item.name}</ComboboxItem>}
      </Combobox>
    );
  },
};

export const StaticItems: Story = {
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
};

export const Controlled: Story = {
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
        {(item) => <ComboboxItem>{item.name}</ComboboxItem>}
      </Combobox>
    );
  },
};

export const StaticItemsWithSections: Story = {
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
};
