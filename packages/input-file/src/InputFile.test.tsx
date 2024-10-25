import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import { InputFile } from "./InputFile";

describe("InputFile", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <InputFile label="Foo" aria-label="Foo" accept=".bar" />,
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(
        <InputFile
          label="Foo"
          aria-label="Foo"
          accept=".bar"
          data-testid="test"
        />,
      );

      expect(screen.getByTestId("test")).toHaveClass(
        "sds-input-file__drop-zone",
      );
      expect(screen.getByText("Foo")).toBeInTheDocument();
    });

    it("should have help text", async () => {
      render(
        <InputFile
          label="Foo"
          aria-label="Foo"
          accept=".bar"
          data-testid="test"
          helpText="help"
        />,
      );

      expect(screen.getByText("help")).toBeInTheDocument();
    });

    it("should have error text", async () => {
      render(
        <InputFile
          label="Foo"
          aria-label="Foo"
          accept=".bar"
          data-testid="test"
          helpText="help"
          errorText="error"
        />,
      );

      expect(screen.queryByText("help")).not.toBeInTheDocument();
      expect(screen.getByText("error")).toBeInTheDocument();
    });

    it("calls change handler for input", async () => {
      const user = userEvent.setup();
      const changeHandler = jest.fn();
      const { container } = render(
        <InputFile
          label="Foo"
          aria-label="Foo"
          accept=".bar"
          onChange={changeHandler}
        />,
      );

      const file = new File(["hello"], "hello.bar", { type: ".bar" });
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const input = container.querySelector("input")!;

      await user.upload(input, file);

      expect(input.files?.[0]).toBe(file);
      expect(input.files?.item(0)).toBe(file);
      expect(input.files).toHaveLength(1);
      expect(changeHandler).toHaveBeenCalledTimes(1);
      expect(changeHandler).toHaveBeenLastCalledWith([file]);
    });

    it("calls change handler for drop zone", async () => {
      const changeHandler = jest.fn();
      render(
        <InputFile
          label="Foo"
          aria-label="Foo"
          accept=".bar"
          data-testid="test"
          onChange={changeHandler}
        />,
      );

      const file = new File(["hello"], "hello.bar", { type: ".bar" });
      const dataTransfer = {
        files: [file],
        items: [file].map((file) => ({
          kind: "file",
          type: file.type,
          getAsFile: () => file,
        })),
        types: ["Files"],
      };

      fireEvent.drop(screen.getByTestId("test"), {
        dataTransfer,
      });

      await waitFor(() => {
        expect(changeHandler).toHaveBeenCalledTimes(1);
      });
      await waitFor(() => {
        expect(changeHandler).toHaveBeenLastCalledWith([file]);
      });
    });

    it("return validation error for file size", async () => {
      const user = userEvent.setup();
      const changeHandler = jest.fn();
      const { container } = render(
        <InputFile
          label="Foo"
          aria-label="Foo"
          accept=".bar"
          maxFileSize={100}
          onChange={changeHandler}
        />,
      );

      const file = new File(["hello"], "hello.bar", {
        type: ".bar",
      });
      Object.defineProperty(file, "size", { value: 101 });
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const input = container.querySelector("input")!;

      await user.upload(input, file);

      expect(input.files?.[0]).toBe(file);
      expect(input.files?.item(0)).toBe(file);
      expect(input.files).toHaveLength(1);
      expect(changeHandler).toHaveBeenCalledTimes(1);
      expect(changeHandler).toHaveBeenLastCalledWith([file]);
      expect(file).toHaveProperty("error", ["size"]);
    });

    it("return validation error for file type", async () => {
      const changeHandler = jest.fn();
      render(
        <InputFile
          label="Foo"
          aria-label="Foo"
          accept=".bar"
          data-testid="test"
          onChange={changeHandler}
        />,
      );

      const file = new File(["hello"], "hello.baz", { type: ".baz" });
      const file2 = new File(["hello"], "hello.bar", { type: ".bar" });
      const dataTransfer = {
        files: [file, file2],
        items: [file, file2].map((file) => ({
          kind: "file",
          type: file.type,
          getAsFile: () => file,
        })),
        types: ["Files"],
      };

      fireEvent.drop(screen.getByTestId("test"), {
        dataTransfer,
      });

      await waitFor(() => {
        expect(changeHandler).toHaveBeenCalledTimes(1);
      });
      await waitFor(() => {
        expect(changeHandler).toHaveBeenLastCalledWith([file, file2]);
      });
      expect(file).toHaveProperty("error", ["type"]);
      expect(file2).toHaveProperty("error", ["multiple"]);
    });

    it("accept wildcard type", async () => {
      const user = userEvent.setup();
      const changeHandler = jest.fn();
      const { container } = render(
        <InputFile
          label="Foo"
          aria-label="Foo"
          accept=".bar,image/*"
          onChange={changeHandler}
        />,
      );

      const file = new File(["hello"], "hello.png", { type: "image/png" });
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const input = container.querySelector("input")!;

      await user.upload(input, file);

      expect(input.files?.[0]).toBe(file);
      expect(input.files?.item(0)).toBe(file);
      expect(input.files).toHaveLength(1);
      expect(changeHandler).toHaveBeenCalledTimes(1);
      expect(changeHandler).toHaveBeenLastCalledWith([file]);
    });
  });
});
