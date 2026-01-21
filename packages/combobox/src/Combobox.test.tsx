import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Combobox } from "./Combobox";

const options = [
  { label: "Bar", value: "1" },
  { label: "Baz", value: "2" },
  // TODO: 96.77 |      100 |    87.5 |   96.55 | :131 data/selected:true which makes render fail
  // { label: "Baz", value: "2", selected: true },
];

describe("Combobox", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(<Combobox label="Foo" options={options} />);

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
  });
});
