import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Select } from "./Select";

describe("Select", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <Select label="Foo" options={[{ label: "Bar", value: "bar" }]} />,
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(
        <Select
          label="Foo"
          options={[{ label: "Bar", value: "bar" }]}
          data-testid="test"
        />,
      );

      expect(screen.getByTestId("test")).toBeInTheDocument();
    });

    it("should have set value", async () => {
      const { container } = render(
        <Select
          label="Foo"
          options={[
            { label: "Test", value: "test" },
            { label: "Bar", value: "bar" },
          ]}
          value="bar"
          data-testid="test"
        />,
      );

      const select = container.getElementsByClassName("sds-select")[0];

      expect(screen.getByTestId("test")).toBeInTheDocument();
      expect(select.querySelector("select")?.value).toBe("bar");
    });

    it("calls change handler", async () => {
      const user = userEvent.setup();
      const changeHandler = jest.fn();
      render(
        <Select
          label="Foo"
          options={[{ label: "Bar", value: "bar" }]}
          onChange={changeHandler}
        />,
      );

      await user.selectOptions(screen.getByRole("combobox"), "Bar");

      expect(changeHandler).toHaveBeenCalled();
    });

    it("should have class name", async () => {
      const { container } = render(
        <Select
          label="Foo"
          options={[{ label: "Bar", value: "bar" }]}
          className="test-class-name"
          data-testid="test"
        />,
      );

      expect(
        container.getElementsByClassName("sds-select test-class-name")[0],
      ).toBeInTheDocument();
    });

    it("should render help text", async () => {
      render(
        <Select
          label="Foo"
          options={[{ label: "Bar", value: "bar" }]}
          helpText="Baz"
        />,
      );

      expect(screen.getByText("Baz")).toBeInTheDocument();
    });

    it("should render error text", async () => {
      render(
        <Select
          label="Foo"
          options={[{ label: "Bar", value: "bar" }]}
          helpText="Baz"
          errorText="Qux"
        />,
      );

      expect(screen.queryByText("Baz")).not.toBeInTheDocument();
      expect(screen.getByText("Qux")).toBeInTheDocument();
    });
  });
});
