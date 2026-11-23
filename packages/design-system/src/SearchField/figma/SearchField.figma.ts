// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=25981-5313
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/SearchField/index.ts
// component=SearchField
import figma from "figma";

const instance = figma.selectedInstance;

const size = instance.getEnum("size", {
  Large: "large",
  Medium: "medium",
  Small: "small",
});

const state = instance.getEnum("state", {
  Default: "default",
  Hover: "default",
  Active: "active",
  Critical: "critical",
  Disabled: "disabled",
});
const isDisabled = state === "disabled";
const isCritical = state === "critical";
const hasValue = state === "active" || state === "critical";

const showLabel = instance.getBoolean("showLabelContainer");
const label = instance.getString("label");

const showHelper = instance.getBoolean("showHelper");
const helper = instance.getString("helper");

const showPlaceholder = instance.getBoolean("showPlaceholder");
const placeholder = instance.getString("placeholder");

const searchField = figma.code`
    <SearchField size="${size}" aria-label="Søk" onSubmit={handleSubmit}>
      <input
        type="search"
        name="q"${showPlaceholder ? figma.code` placeholder="${placeholder}"` : ""}${isDisabled ? " disabled" : ""}${isCritical ? ` aria-invalid="true"` : ""}
      />${
        hasValue && !isDisabled
          ? figma.code`
      <Button type="reset" size="small" variant="tertiary" theme="neutral" aria-label="Tøm">
        <Button.Icon>
          <CloseIcon />
        </Button.Icon>
      </Button>
      <SearchField.Divider />`
          : ""
      }
      <Button type="submit" size="small" variant="tertiary" aria-label="Søk"${isDisabled ? " disabled" : ""}>
        <Button.Icon>
          <SearchIcon />
        </Button.Icon>
      </Button>
    </SearchField>`;

const example = showLabel
  ? figma.code`
    <Field size="${size}"${isDisabled ? " disabled" : ""}>
      <Field.Label>${label}</Field.Label>${
        showHelper
          ? figma.code`
      <Field.Description>${helper}</Field.Description>`
          : ""
      }${searchField}${
        isCritical
          ? figma.code`
      <Field.ValidationMessage>
        {/* validation message */}
      </Field.ValidationMessage>`
          : ""
      }
    </Field>`
  : searchField;

const imports = showLabel
  ? [
      `import { Field, SearchField, Button } from "@sikt/sd3-design-system";`,
      `import { CloseIcon, SearchIcon } from "@sikt/sds-icons";`,
    ]
  : [
      `import { SearchField, Button } from "@sikt/sd3-design-system";`,
      `import { CloseIcon, SearchIcon } from "@sikt/sds-icons";`,
    ];

export default {
  example,
  imports,
  id: "search-field",
  metadata: {
    nestable: true,
  },
};
