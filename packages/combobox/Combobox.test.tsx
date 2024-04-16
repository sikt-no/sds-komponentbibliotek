import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import {
  Combobox,
  ComboboxHeader,
  ComboboxItem,
  ComboboxSection,
} from "./Combobox";

const options = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
];

describe("Combobox", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <Combobox label="Foo" defaultItems={options}>
          {(item) => <ComboboxItem key={item.id}>{item.name}</ComboboxItem>}
        </Combobox>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  it("renders Combobox with default values", () => {
    render(
      <Combobox
        label="Test Combobox"
        defaultInputValue="Default input value"
        defaultItems={options}
      >
        {(item) => <ComboboxItem key={item.id}>{item.name}</ComboboxItem>}
      </Combobox>,
    );

    expect(screen.getByLabelText("Test Combobox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Default input value")).toBeInTheDocument();
    expect(screen.queryByRole("listbox")).toBeNull();
  });

  it("renders a Combobox with sections", async () => {
    const user = userEvent.setup();
    render(
      <Combobox label="Test Combobox">
        <ComboboxSection>
          <ComboboxHeader>Section heading</ComboboxHeader>
          <ComboboxItem id="Apple">Apple</ComboboxItem>
          <ComboboxItem id="Banana">Banana</ComboboxItem>
        </ComboboxSection>
      </Combobox>,
    );

    await user.click(screen.getByRole("button"));
    expect(screen.getByText("Section heading")).toBeInTheDocument();
  });

  it("open the popover on button click", async () => {
    const user = userEvent.setup();
    render(
      <Combobox
        label="Test Combobox"
        defaultInputValue="Default input value"
        defaultItems={options}
      >
        {(item) => <ComboboxItem key={item.id}>{item.name}</ComboboxItem>}
      </Combobox>,
    );

    await user.click(screen.getByRole("button"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("selects an item on click", async () => {
    const onSelectionChangeHandler = jest.fn();
    const user = userEvent.setup();
    render(
      <Combobox
        label="Test Combobox"
        defaultInputValue="Default input value"
        defaultItems={options}
        onSelectionChange={onSelectionChangeHandler}
      >
        {(item) => <ComboboxItem key={item.id}>{item.name}</ComboboxItem>}
      </Combobox>,
    );
    await user.click(screen.getByRole("button"));
    await user.click(screen.getByText("Option 1"));
    expect(onSelectionChangeHandler).toHaveBeenCalledWith(1);
  });

  it("should render help text", () => {
    render(
      <Combobox
        label="Test Combobox"
        defaultInputValue="Default input value"
        defaultItems={options}
        helpText="Combobox help text"
      >
        {(item) => <ComboboxItem key={item.id}>{item.name}</ComboboxItem>}
      </Combobox>,
    );
    expect(screen.getByText("Combobox help text")).toBeInTheDocument();
  });

  it("should render error text", () => {
    render(
      <Combobox
        label="Test Combobox"
        defaultInputValue="Default input value"
        defaultItems={options}
        helpText="Baz"
        errorText="Qux"
      >
        {(item) => <ComboboxItem key={item.id}>{item.name}</ComboboxItem>}
      </Combobox>,
    );

    expect(screen.queryByText("Baz")).not.toBeInTheDocument();
    expect(screen.getByText("Qux")).toBeInTheDocument();
  });
});
