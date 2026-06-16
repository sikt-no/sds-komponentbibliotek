import { LocationIcon } from "@sikt/sds-icons";
import { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import { InputProps, SearchInput } from "../index";

const meta: Meta = {
  title: "Components/Input/Search",
  component: SearchInput,
};

export default meta;

type Story = StoryObj<InputProps>;

const SearchInputWrapper = (props: InputProps) => {
  const [value, setValue] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  const onClick = () => {
    setValue("");
  };

  return (
    <SearchInput
      {...props}
      value={value}
      onChange={handleChange}
      clearActionProps={{
        onClick: onClick,
        "aria-label": "Fjern søketekst",
      }}
    />
  );
};

export const Default: Story = {
  args: {
    label: "Label",
    actionProps: {
      onClick: () => {
        console.log("search");
      },
      "aria-label": "Search",
      type: "submit",
    },
  },
  render: (args) => <SearchInputWrapper {...args} />,
};

export const WithClearButton: Story = {
  render: () => (
    <SearchInput
      label="Label"
      value="Value"
      onChange={() => null}
      clearActionProps={{
        onClick: () => {
          console.log("clear");
        },
      }}
    />
  ),
  args: {
    ...Default.args,
    icon: <LocationIcon />,
  },
};

export const WithCustomIcon: Story = {
  args: {
    ...Default.args,
    icon: <LocationIcon />,
  },
  render: (args) => <SearchInputWrapper {...args} />,
};

export const WithHelpText: Story = {
  args: { ...Default.args, helpText: "Helpful text" },
  render: (args) => <SearchInputWrapper {...args} />,
};

export const WithError: Story = {
  args: {
    ...Default.args,
    helpText: "Helpful text",
    errorText: "Error: Message",
  },
  render: (args) => <SearchInputWrapper {...args} />,
};
