import { LocationIcon } from "@sikt/sds-icons";
import { Meta, StoryObj } from "@storybook/react";
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
  render: SearchInputWrapper,
  args: {
    label: "Label",
    placeholder: "",
    actionProps: {
      onClick: () => {
        console.log("search");
      },
      "aria-label": "Search",
      type: "submit",
    },
  },
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
  render: SearchInputWrapper,
  args: {
    ...Default.args,
    icon: <LocationIcon />,
  },
};

export const WithHelpText: Story = {
  render: SearchInputWrapper,
  args: { ...Default.args, helpText: "Helpful text" },
};

export const WithError: Story = {
  render: SearchInputWrapper,
  args: {
    ...Default.args,
    helpText: "Helpful text",
    errorText: "Error: Message",
  },
};
