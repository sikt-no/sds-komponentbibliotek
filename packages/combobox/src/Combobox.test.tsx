import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import type { OptionHTMLAttributes } from "react";
import { useState } from "react";
import { Combobox } from "./Combobox";

const options = [
  { label: "Bar", value: "1" },
  { label: "Baz", value: "2" },
];

const optionsWithSelected = [
  { label: "Bar", value: "1" },
  { label: "Baz", value: "2", selected: true },
];

const groupedOptions = [
  {
    label: "Group",
    options: [
      { label: "Bar", value: "1" },
      { label: "Baz", value: "2" },
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
          onChange={changeHandler}
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
        const [opts, setOpts] = useState<
          OptionHTMLAttributes<HTMLOptionElement>[]
        >([
          { label: "Bar", value: "1" },
          { label: "Baz", value: "2" },
        ]);
        return (
          <Combobox
            label="Foo"
            options={opts}
            multiple
            onChange={(_e, o) => {
              setOpts([...o]);
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
  });
});
