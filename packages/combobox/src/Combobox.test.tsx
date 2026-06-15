import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import type { UHTMLComboboxElement } from "@u-elements/u-combobox";
import { axe } from "jest-axe";
import type { OptionHTMLAttributes } from "react";
import { Combobox } from "./Combobox";

const options = [
  { label: "Bar", value: "1" },
  { label: "Baz", value: "2" },
  { label: "Baz" },
];

const optionsWithSelected = [
  { label: "Bar", value: "1" },
  { label: "Baz", value: "2", selected: true },
  { label: "Baz" },
];

const groupedOptions = [
  {
    label: "Group",
    options: [
      { label: "Bar", value: "1" },
      { label: "Baz", value: "2" },
      { label: "Baz" },
    ],
  },
];

describe("Combobox", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<Combobox label="Foo" options={options} />);

      expect(await axe(container)).toHaveNoViolations();
    });

    it("should be accessible with grouped options", async () => {
      const { container } = render(
        <Combobox label="Foo" options={groupedOptions} />,
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(<Combobox label="Foo" options={options} data-testid="test" />);

      expect(screen.getByTestId("test")).toBeInTheDocument();
      expect(screen.getByText("Foo")).toBeInTheDocument();
      expect(screen.getByRole("combobox")).toBeInTheDocument();
    });

    it("should have class name", async () => {
      const { container } = render(
        <Combobox
          label="Foo"
          options={options}
          data-testid="test"
          className="test-class-name"
        />,
      );

      expect(
        container.getElementsByClassName("sds-combobox test-class-name")[0],
      ).toBeInTheDocument();
    });

    it("calls change handler", async () => {
      const user = userEvent.setup();
      const changeHandler = jest.fn();
      render(
        <Combobox
          label="Foo"
          options={options}
          onSelectedChange={changeHandler}
          multiple
          name="name"
        />,
      );

      await user.click(screen.getByRole("combobox"));
      await user.click(screen.getByText("Bar", { selector: "u-option" }));

      expect(changeHandler).toHaveBeenCalled();

      await user.click(screen.getByText("Bar", { selector: "u-option" }));

      expect(changeHandler).toHaveBeenCalledTimes(2);
    });

    it("should render help text", async () => {
      render(<Combobox label="Foo" options={options} helpText="Qux" />);

      expect(screen.getByText("Qux")).toBeInTheDocument();
    });

    it("should render error text", async () => {
      render(
        <Combobox
          label="Foo"
          options={options}
          helpText="Qux"
          errorText="Quux"
        />,
      );

      expect(screen.getByText("Qux")).toBeInTheDocument();
      expect(screen.getByText("Quux")).toBeInTheDocument();
    });

    it("should render initial selected options as data elements", async () => {
      const { container } = render(
        <Combobox label="Foo" options={optionsWithSelected} multiple />,
      );

      const dataElements = container.querySelectorAll("data");
      expect(dataElements).toHaveLength(1);
      expect(dataElements[0]).toHaveTextContent("Baz");
      expect(dataElements[0]).toHaveAttribute("value", "2");
    });

    it("should not render duplicate badges in controlled mode", async () => {
      function ControlledCombobox() {
        const opts: OptionHTMLAttributes<HTMLOptionElement>[] = [
          { label: "Bar", value: "1" },
          { label: "Baz", value: "2" },
        ];
        return (
          <Combobox
            label="Foo"
            options={opts}
            multiple
            onSelectedChange={() => {
              // Test onChange behavior
            }}
          />
        );
      }

      const { container } = render(<ControlledCombobox />);

      const user = userEvent.setup();
      await user.click(screen.getByRole("combobox"));
      await user.click(screen.getByText("Bar", { selector: "u-option" }));

      const dataElements = container.querySelectorAll("data");
      expect(dataElements).toHaveLength(1);
    });

    it("should render with grouped options", async () => {
      render(<Combobox label="Foo" options={groupedOptions} />);

      expect(screen.getByText("Group")).toBeInTheDocument();
    });

    it("should handle aria-labelledby instead of label", async () => {
      render(<Combobox aria-labelledby="external-label" options={options} />);
      expect(screen.getByRole("combobox")).toHaveAttribute(
        "aria-labelledby",
        "external-label",
      );
    });

    it("should render with error text", async () => {
      render(
        <Combobox label="Test" options={options} errorText="Error message" />,
      );
      expect(screen.getByText("Error message")).toBeInTheDocument();
    });

    it("should render with help text", async () => {
      render(
        <Combobox label="Test" options={options} helpText="Help message" />,
      );
      expect(screen.getByText("Help message")).toBeInTheDocument();
    });

    it("should render hidden select when name is provided", async () => {
      const { container } = render(
        <Combobox label="Test" options={options} name="test-name" />,
      );
      const hiddenSelect = container.querySelector('select[name="test-name"]');
      expect(hiddenSelect).toBeInTheDocument();
      expect(hiddenSelect).toHaveAttribute("hidden");
    });

    it("should handle different language settings", async () => {
      render(<Combobox label="Test" options={options} lang="en" />);
      // Component should render without errors with different lang
      expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should work in single selection mode", async () => {
      const onChange = jest.fn();
      render(
        <Combobox
          label="Test"
          options={options}
          onSelectedChange={onChange}
          multiple={false}
        />,
      );
      expect(screen.getByRole("combobox")).not.toHaveAttribute("data-multiple");
    });

    it("should handle controlled mode with selected prop", async () => {
      const selected = { label: "Bar", value: "1" };
      const { container } = render(
        <Combobox label="Test" options={options} selected={selected} />,
      );

      const dataElements = container.querySelectorAll("data");
      expect(dataElements).toHaveLength(1);
      expect(dataElements[0]).toHaveTextContent("Bar");
    });

    it("should handle defaultSelected with priority over selected options", async () => {
      const defaultSelected = { label: "Bar", value: "1" };
      const { container } = render(
        <Combobox
          label="Test"
          options={optionsWithSelected}
          defaultSelected={defaultSelected}
        />,
      );

      const dataElements = container.querySelectorAll("data");
      expect(dataElements).toHaveLength(1);
      expect(dataElements[0]).toHaveTextContent("Bar"); // Should use defaultSelected, not "Baz" from options
    });

    it("should handle multiple selection mode", async () => {
      const { container } = render(
        <Combobox label="Test" options={options} multiple />,
      );
      expect(container.querySelector("[data-multiple]")).toBeInTheDocument();
    });

    it("should handle function ref", async () => {
      let refValue: UHTMLComboboxElement | null = null;
      const ref = (element: UHTMLComboboxElement | null) => {
        refValue = element;
      };

      render(<Combobox label="Test" options={options} ref={ref} />);
      expect(refValue).toBeTruthy();
    });

    it("should handle no name prop (no hidden select)", async () => {
      const { container } = render(<Combobox label="Test" options={options} />);
      const hiddenSelect = container.querySelector("select");
      expect(hiddenSelect).toBeNull();
    });

    it("should handle empty options array with no defaultSelected", async () => {
      const { container } = render(<Combobox label="Test" options={[]} />);
      const dataElements = container.querySelectorAll("data");
      expect(dataElements).toHaveLength(0);
    });

    it("should handle onSelectedChange in single mode", async () => {
      const handleChange = jest.fn();
      render(
        <Combobox
          label="Test"
          options={options}
          onSelectedChange={handleChange}
        />,
      );

      const user = userEvent.setup();
      await user.click(screen.getByRole("combobox"));
      await user.click(screen.getByText("Bar", { selector: "u-option" }));

      expect(handleChange).toHaveBeenCalled();
    });

    it("should handle onSelectedChange in multiple mode", async () => {
      const handleChange = jest.fn();
      render(
        <Combobox
          label="Test"
          options={options}
          onSelectedChange={handleChange}
          multiple
        />,
      );

      const user = userEvent.setup();
      await user.click(screen.getByRole("combobox"));
      await user.click(screen.getByText("Bar", { selector: "u-option" }));

      expect(handleChange).toHaveBeenCalled();
    });
  });
});
