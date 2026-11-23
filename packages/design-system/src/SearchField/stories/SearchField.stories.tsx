import { CloseIcon, SearchIcon } from "@sikt/sds-icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "../../Button";
import { Field } from "../../Field";
import { List } from "../../List";
import { SearchField, type SearchFieldProps } from "../index";

const meta: Meta<SearchFieldProps> = {
  title: "SD3/Search Field",
  component: SearchField,
  parameters: {
    docs: {
      description: {
        component:
          'Styled `<search>` landmark around a `<form>`. Compose an `<input type="search">`, a `<Button type="reset">`, and a `<Button type="submit">` inside.',
      },
    },
  },
  args: {
    "aria-label": "Søk",
    onSubmit: (event) => {
      event.preventDefault();
      // search form logic here
    },
  },
};

export default meta;

type Story = StoryObj<SearchFieldProps>;

export const Default: Story = {
  render: (args) => (
    <SearchField {...args}>
      <input type="search" name="q" aria-label="Søketekst" />
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
      <SearchField.Divider />
      <Button type="submit" size="small" variant="tertiary" aria-label="Søk">
        <Button.Icon>
          <SearchIcon />
        </Button.Icon>
      </Button>
    </SearchField>
  ),
};

export const InField: Story = {
  args: { "aria-label": undefined },
  parameters: {
    docs: {
      description: {
        story:
          "Inside a `Field` to add a visible label linked to the input by `id` and to inherit the field's size.",
      },
    },
  },
  render: (args) => (
    <Field id="search-field-demo">
      <Field.Label>Søk i katalogen</Field.Label>
      <SearchField {...args}>
        <input type="search" id="search-field-demo" name="q" />
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
        <SearchField.Divider />
        <Button type="submit" size="small" variant="tertiary" aria-label="Søk">
          <Button.Icon>
            <SearchIcon />
          </Button.Icon>
        </Button>
      </SearchField>
    </Field>
  ),
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: "Disabled input with a disabled submit button and no clear.",
      },
    },
  },
  render: (args) => (
    <SearchField {...args}>
      <input
        type="search"
        name="q"
        defaultValue="Sikt"
        disabled
        aria-label="Søketekst"
      />
      <Button
        type="submit"
        size="small"
        variant="tertiary"
        aria-label="Søk"
        disabled
      >
        <Button.Icon>
          <SearchIcon />
        </Button.Icon>
      </Button>
    </SearchField>
  ),
};

const EUROPEAN_COUNTRIES = [
  "Albania",
  "Andorra",
  "Belgia",
  "Bosnia-Hercegovina",
  "Bulgaria",
  "Danmark",
  "Estland",
  "Finland",
  "Frankrike",
  "Hellas",
  "Hviterussland",
  "Irland",
  "Island",
  "Italia",
  "Kroatia",
  "Kypros",
  "Latvia",
  "Liechtenstein",
  "Litauen",
  "Luxembourg",
  "Malta",
  "Moldova",
  "Monaco",
  "Montenegro",
  "Nederland",
  "Nord-Makedonia",
  "Norge",
  "Polen",
  "Portugal",
  "Romania",
  "Russland",
  "San Marino",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spania",
  "Storbritannia",
  "Sveits",
  "Sverige",
  "Tsjekkia",
  "Tyrkia",
  "Tyskland",
  "Ukraina",
  "Ungarn",
  "Vatikanstaten",
  "Østerrike",
];

export const SearchCountries: Story = {
  args: { "aria-label": undefined },
  parameters: {
    docs: {
      description: {
        story:
          "Working example. Submit to filter the hardcoded country list; reset to clear the input and the results.",
      },
    },
  },
  render: function SearchCountriesStory(args) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<string[] | null>(null);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Field id="country-search">
          <Field.Label>Europeiske land</Field.Label>
          <Field.Description>Søker i en liste på 46 land</Field.Description>
          <SearchField
            {...args}
            onSubmit={(event) => {
              event.preventDefault();
              const needle = query.trim().toLowerCase();
              setResults(
                EUROPEAN_COUNTRIES.filter((country) =>
                  country.toLowerCase().includes(needle),
                ),
              );
            }}
            onReset={() => {
              setQuery("");
              setResults(null);
            }}
          >
            <input
              type="search"
              id="country-search"
              name="q"
              value={query}
              onChange={(event) => { setQuery(event.target.value); }}
            />
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
            <SearchField.Divider />
            <Button
              type="submit"
              size="small"
              variant="tertiary"
              aria-label="Søk"
            >
              <Button.Icon>
                <SearchIcon />
              </Button.Icon>
            </Button>
          </SearchField>
        </Field>
        {results !== null && (
          <List.Unordered>
            {results.length === 0 ? (
              <List.Item>Ingen treff</List.Item>
            ) : (
              results.map((country) => (
                <List.Item key={country}>{country}</List.Item>
              ))
            )}
          </List.Unordered>
        )}
      </div>
    );
  },
};
