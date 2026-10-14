// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=25981-3370
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Select/index.ts
// component=Select
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
  Active: "default",
  Disabled: "disabled",
  Critical: "critical",
});

const showLabel = instance.getBoolean("showLabelContainer");
const labelText = instance.getString("labelText");
const showHelper = instance.getBoolean("showHelperText");
const helperText = instance.getString("helperText");
const placeholderText = instance.getString("placeholderText");

const isDisabled = state === "disabled";
const isCritical = state === "critical";

const labelSnippet = showLabel
  ? figma.code`
      <Field.Label>${labelText}</Field.Label>`
  : "";

const helperSnippet = showHelper
  ? figma.code`
      <Field.Description>${helperText}</Field.Description>`
  : "";

const errorSnippet = isCritical
  ? figma.code`
      <Field.ValidationMessage>Error message</Field.ValidationMessage>`
  : "";

const ariaLabelProp = showLabel ? "" : ` aria-label="<label>"`;

export default {
  id: "Select",
  imports: [`import { Field, Select } from "@sikt/sd3-design-system"`],
  example: figma.code`
    <Field${figma.helpers.react.renderProp("size", size)}${isDisabled ? " disabled" : ""}>${labelSnippet}${helperSnippet}
      <Select${ariaLabelProp}>
        <option value="">${placeholderText}</option>
      </Select>${errorSnippet}
    </Field>`,
  metadata: {
    nestable: true,
  },
};
