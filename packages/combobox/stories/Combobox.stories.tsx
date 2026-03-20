import { Meta, StoryObj } from "@storybook/react-webpack5";
import { useState } from "react";
import { Combobox, type ComboboxProps, type ComboboxItem } from "../index";

const meta = {
  title: "Components/Combobox",
  component: Combobox,
} satisfies Meta<typeof Combobox>;

export default meta;

type Story = StoryObj<ComboboxProps>;

export const Default: Story = {
  args: {
    label: "Choose flavor of ice cream",
    lang: "en",
    name: "icecream",
    options: [
      { label: "Coconut", value: "1" },
      { label: "Strawberries", value: "2" },
      { label: "Chocolate", value: "3" },
      { label: "Vanilla", value: "4" },
      { label: "Licorice", value: "5" },
      { label: "Pistachios", value: "6" },
      { label: "Mango", value: "7" },
      { label: "Hazelnut", value: "8" },
    ],
    defaultSelected: { label: "Vanilla", value: "4" },
    onSelectedChange: (value) => {
      console.log("Selected:", value);
    },
  },
};

export const Multiple: Story = {
  args: {
    label: "Choose flavors of ice cream",
    lang: "en",
    name: "icecream",
    multiple: true,
    options: [
      { label: "Coconut", value: "1" },
      { label: "Strawberries", value: "2" },
      { label: "Chocolate", value: "3" },
      { label: "Vanilla", value: "4" },
      { label: "Licorice", value: "5" },
      { label: "Pistachios", value: "6" },
      { label: "Mango", value: "7" },
      { label: "Hazelnut", value: "8" },
    ],
    defaultSelected: [
      { label: "Vanilla", value: "4" },
      { label: "Chocolate", value: "3" },
    ],
    onSelectedChange: (value) => {
      console.log("Selected:", value);
    },
  },
};

export const WithHelpText: Story = {
  args: {
    ...Default.args,
    helpText: "Helpful text",
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    helpText: "Helpful text",
    errorText: "Error: Message",
  },
};

export const WithGroupedOptions: Story = {
  args: {
    label: "Choose a food item",
    lang: "en",
    name: "food",
    options: [
      {
        label: "Fruits",
        options: [
          { label: "Apple", value: "apple" },
          { label: "Banana", value: "banana" },
          { label: "Mango", value: "mango" },
          { label: "Strawberry", value: "strawberry" },
        ],
      },
      {
        label: "Vegetables",
        options: [
          { label: "Broccoli", value: "broccoli" },
          { label: "Carrot", value: "carrot" },
          { label: "Spinach", value: "spinach" },
        ],
      },
      {
        label: "Other",
        options: [{ label: "Pizza", value: "pizza" }],
      },
    ],
    onSelectedChange: (value) => {
      console.log("Selected:", value);
    },
  },
};

export const WithGroupedOptionsMultiple: Story = {
  args: {
    ...WithGroupedOptions.args,
    multiple: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [selected, setSelected] = useState<ComboboxItem | null>({
      label: "Vanilla",
      value: "4",
    });

    return (
      <>
        <button
          onClick={() => {
            setSelected({ label: "Chocolate", value: "3" });
          }}
        >
          Select Chocolate
        </button>
        <button
          onClick={() => {
            setSelected(null);
          }}
          style={{ marginLeft: 8 }}
        >
          Clear selection
        </button>
        <div style={{ marginTop: 16 }}>
          <Combobox
            label="Choose flavor of ice cream"
            lang="en"
            name="icecream"
            options={[
              { label: "Coconut", value: "1" },
              { label: "Strawberries", value: "2" },
              { label: "Chocolate", value: "3" },
              { label: "Vanilla", value: "4" },
              { label: "Licorice", value: "5" },
              { label: "Pistachios", value: "6" },
              { label: "Mango", value: "7" },
              { label: "Hazelnut", value: "8" },
            ]}
            selected={selected}
            onSelectedChange={(value) => {
              console.log("Selected:", value);
              setSelected(value);
            }}
          />
        </div>
      </>
    );
  },
};

export const ControlledMultiple: Story = {
  render: () => {
    const [selected, setSelected] = useState<ComboboxItem[]>([
      { label: "Vanilla", value: "4" },
      { label: "Chocolate", value: "3" },
    ]);

    return (
      <>
        <button
          onClick={() => {
            setSelected([
              { label: "Strawberries", value: "2" },
              { label: "Mango", value: "7" },
            ]);
          }}
        >
          Select Strawberries & Mango
        </button>
        <button
          onClick={() => {
            setSelected([]);
          }}
          style={{ marginLeft: 8 }}
        >
          Clear all
        </button>
        <div style={{ marginTop: 16 }}>
          <Combobox
            label="Choose flavors of ice cream"
            lang="en"
            name="icecream"
            multiple
            options={[
              { label: "Coconut", value: "1" },
              { label: "Strawberries", value: "2" },
              { label: "Chocolate", value: "3" },
              { label: "Vanilla", value: "4" },
              { label: "Licorice", value: "5" },
              { label: "Pistachios", value: "6" },
              { label: "Mango", value: "7" },
              { label: "Hazelnut", value: "8" },
            ]}
            selected={selected}
            onSelectedChange={(value) => {
              console.log("Selected:", value);
              setSelected(value);
            }}
          />
        </div>
      </>
    );
  },
};
export const InForm: Story = {
  render: () => {
    const [submittedData, setSubmittedData] = useState<string>("");

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      setSubmittedData(JSON.stringify(data, null, 2));
    };

    return (
      <div>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          <Combobox
            label="Choose your favorite flavor"
            lang="en"
            name="flavor"
            options={[
              { label: "Coconut", value: "1" },
              { label: "Strawberries", value: "2" },
              { label: "Chocolate", value: "3" },
              { label: "Vanilla", value: "4" },
              { label: "Licorice", value: "5" },
              { label: "Pistachios", value: "6" },
              { label: "Mango", value: "7" },
              { label: "Hazelnut", value: "8" },
            ]}
            defaultSelected={{ label: "Vanilla", value: "4" }}
          />

          <button
            type="submit"
            style={{ padding: "8px 16px", alignSelf: "flex-start" }}
          >
            Submit Form
          </button>
        </form>

        {submittedData && (
          <div
            style={{
              marginTop: 16,
              padding: 16,
              backgroundColor: "#f5f5f5",
              borderRadius: 4,
            }}
          >
            <strong>Form Data Submitted:</strong>
            <pre style={{ marginTop: 8 }}>{submittedData}</pre>
          </div>
        )}
      </div>
    );
  },
};

export const InFormMultiple: Story = {
  render: () => {
    const [submittedData, setSubmittedData] = useState<string>("");

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data: Record<string, string | string[]> = {};

      // Handle multiple values for the same name
      formData.forEach((value, key) => {
        // FormData values can be string or File, but we only expect strings from select elements
        const stringValue = typeof value === "string" ? value : "";
        const existingValue = data[key];
        if (existingValue) {
          if (Array.isArray(existingValue)) {
            existingValue.push(stringValue);
          } else {
            data[key] = [existingValue, stringValue];
          }
        } else {
          data[key] = stringValue;
        }
      });

      setSubmittedData(JSON.stringify(data, null, 2));
    };

    return (
      <div>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          <Combobox
            label="Choose your favorite flavors (multiple)"
            lang="en"
            name="flavors"
            multiple
            options={[
              { label: "Coconut", value: "1" },
              { label: "Strawberries", value: "2" },
              { label: "Chocolate", value: "3" },
              { label: "Vanilla", value: "4" },
              { label: "Licorice", value: "5" },
              { label: "Pistachios", value: "6" },
              { label: "Mango", value: "7" },
              { label: "Hazelnut", value: "8" },
            ]}
            defaultSelected={[
              { label: "Vanilla", value: "4" },
              { label: "Chocolate", value: "3" },
            ]}
          />

          <button
            type="submit"
            style={{ padding: "8px 16px", alignSelf: "flex-start" }}
          >
            Submit Form
          </button>
        </form>

        {submittedData && (
          <div
            style={{
              marginTop: 16,
              padding: 16,
              backgroundColor: "#f5f5f5",
              borderRadius: 4,
            }}
          >
            <strong>Form Data Submitted:</strong>
            <pre style={{ marginTop: 8 }}>{submittedData}</pre>
          </div>
        )}
      </div>
    );
  },
};
