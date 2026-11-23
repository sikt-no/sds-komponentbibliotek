import { CloseIcon, SearchIcon } from "@sikt/sds-icons";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import type { ReactNode } from "react";
import type { Size } from "../../../types";
import { Button } from "../../Button";
import { Field } from "../../Field";
import { SearchField } from "./SearchField";

const sizes: Size[] = ["large", "medium", "small"];

const ClearButton = () => (
  <Button
    type="reset"
    size="small"
    variant="tertiary"
    theme="neutral"
    aria-label="Tøm"
  >
    <Button.Icon>
      <CloseIcon />
    </Button.Icon>
  </Button>
);

const SubmitButton = ({ disabled }: { disabled?: boolean }) => (
  <Button
    type="submit"
    size="small"
    variant="tertiary"
    aria-label="Søk"
    disabled={disabled}
  >
    <Button.Icon>
      <SearchIcon />
    </Button.Icon>
  </Button>
);

const Fixture = ({
  defaultValue,
  disabled,
  children,
}: {
  defaultValue?: string;
  disabled?: boolean;
  children?: ReactNode;
}) => (
  <>
    <input
      type="search"
      name="q"
      aria-label="Søketekst"
      defaultValue={defaultValue}
      disabled={disabled}
    />
    {children}
  </>
);

describe("SearchField", () => {
  describe("a11y", () => {
    sizes.forEach((size) => {
      it(`should be accessible at size="${size}"`, async () => {
        const { container } = render(
          <SearchField aria-label="Søk" size={size}>
            <Fixture>
              <ClearButton />
              <SubmitButton />
            </Fixture>
          </SearchField>,
        );
        expect(await axe(container)).toHaveNoViolations();
      });
    });

    it("should be accessible when disabled", async () => {
      const { container } = render(
        <SearchField aria-label="Søk">
          <Fixture disabled defaultValue="hi">
            <SubmitButton disabled />
          </Fixture>
        </SearchField>,
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("structure", () => {
    it("renders a <search> landmark around a <form> with the root class", () => {
      const { container } = render(
        <SearchField aria-label="Søk">
          <Fixture />
        </SearchField>,
      );
      const landmark = container.querySelector("search");
      expect(landmark).toHaveAttribute("aria-label", "Søk");
      expect(landmark?.firstElementChild?.tagName).toBe("FORM");
      expect(landmark?.firstElementChild).toHaveClass("sd3-search-field");
    });

    it("merges className with the root class on the form", () => {
      render(
        <SearchField aria-label="Søk" className="custom">
          <Fixture />
        </SearchField>,
      );
      const form = document.querySelector(".sd3-search-field");
      expect(form).toHaveClass("sd3-search-field");
      expect(form).toHaveClass("custom");
    });

    it("defaults data-size to 'medium'", () => {
      render(
        <SearchField aria-label="Søk">
          <Fixture />
        </SearchField>,
      );
      expect(document.querySelector(".sd3-search-field")).toHaveAttribute(
        "data-size",
        "medium",
      );
    });

    sizes.forEach((size) => {
      it(`should set data-size="${size}"`, () => {
        render(
          <SearchField aria-label="Søk" size={size}>
            <Fixture />
          </SearchField>,
        );
        expect(document.querySelector(".sd3-search-field")).toHaveAttribute(
          "data-size",
          size,
        );
      });
    });

    it("forwards form attributes like onSubmit, name, autoComplete", () => {
      const onSubmit = jest.fn();
      render(
        <SearchField
          aria-label="Søk"
          onSubmit={onSubmit}
          autoComplete="off"
          name="search-form"
        >
          <Fixture />
        </SearchField>,
      );
      const form = document.querySelector(".sd3-search-field");
      expect(form).toHaveAttribute("autocomplete", "off");
      expect(form).toHaveAttribute("name", "search-form");
    });
  });

  describe("submit", () => {
    it("submits the form on Enter inside the input", async () => {
      const user = userEvent.setup();
      const onSubmit = jest.fn((event: React.SyntheticEvent) => {
        event.preventDefault();
      });
      render(
        <SearchField aria-label="Søk" onSubmit={onSubmit}>
          <Fixture defaultValue="hi">
            <SubmitButton />
          </Fixture>
        </SearchField>,
      );
      await user.click(screen.getByRole("searchbox"));
      await user.keyboard("{Enter}");
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });

    it("submits the form when clicking a type='submit' button", async () => {
      const user = userEvent.setup();
      const onSubmit = jest.fn((event: React.SyntheticEvent) => {
        event.preventDefault();
      });
      render(
        <SearchField aria-label="Søk" onSubmit={onSubmit}>
          <Fixture defaultValue="hi">
            <SubmitButton />
          </Fixture>
        </SearchField>,
      );
      await user.click(screen.getByRole("button", { name: "Søk" }));
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });

  describe("reset", () => {
    it("resets the input to its initial value when a type='reset' button is clicked", async () => {
      const user = userEvent.setup();
      render(
        <SearchField aria-label="Søk">
          <Fixture>
            <ClearButton />
          </Fixture>
        </SearchField>,
      );
      const input = screen.getByRole<HTMLInputElement>("searchbox");
      await user.type(input, "oslo");
      expect(input.value).toBe("oslo");
      await user.click(screen.getByRole("button", { name: "Tøm" }));
      expect(input.value).toBe("");
    });

    it("fires onReset when a type='reset' button is clicked", async () => {
      const user = userEvent.setup();
      const onReset = jest.fn();
      render(
        <SearchField aria-label="Søk" onReset={onReset}>
          <Fixture defaultValue="hi">
            <ClearButton />
          </Fixture>
        </SearchField>,
      );
      await user.click(screen.getByRole("button", { name: "Tøm" }));
      expect(onReset).toHaveBeenCalledTimes(1);
    });
  });

  describe("inside Field", () => {
    it("inherits size from Field via context", () => {
      render(
        <Field size="large">
          <Field.Label>Søk</Field.Label>
          <SearchField>
            <Fixture />
          </SearchField>
        </Field>,
      );
      expect(document.querySelector(".sd3-search-field")).toHaveAttribute(
        "data-size",
        "large",
      );
    });

    it("lets explicit size prop override Field context", () => {
      render(
        <Field size="large">
          <Field.Label>Søk</Field.Label>
          <SearchField size="small">
            <Fixture />
          </SearchField>
        </Field>,
      );
      expect(document.querySelector(".sd3-search-field")).toHaveAttribute(
        "data-size",
        "small",
      );
    });
  });
});
