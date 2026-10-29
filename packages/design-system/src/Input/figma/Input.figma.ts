// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=26132-522
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Input/index.ts
// component=Input
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
  ReadOnly: "readonly",
  Disabled: "disabled",
  Critical: "critical",
});
const isDisabled = state === "disabled";
const isCritical = state === "critical";
const isReadonly = state === "readonly";

const showLabel = instance.getBoolean("showLabelContainer");
const label = instance.getString("label");

const showHelper = instance.getBoolean("showHelper");
const helper = instance.getString("helper");

const showPlaceholder = instance.getBoolean("showPlaceholder");
const placeholder = instance.getString("placeholder");

const showTag = instance.getBoolean("showTag");
const tag = instance.getSlot("Tag slot");

// TODO: if isCritical get InlineMessage component / labelText

const example = showLabel
  ? figma.code`
    <Field size="${size}"${isDisabled ? " disabled" : null}${isReadonly ? " readOnly" : null}>
      <Field.Label>
        ${label}${showTag ? tag : null}
      </Field.Label>${
        showHelper
          ? figma.code`
            <Field.Description>
                ${helper}
            </Field.Description>`
          : null
      }
      <Input size="${size}"${showPlaceholder ? figma.code` placeholder="${placeholder}"` : null}${isDisabled ? " disabled" : ""}${isCritical ? " aria-invalid='true'" : ""}${isReadonly ? " readOnly" : ""} />
      ${
        isCritical
          ? figma.code`<Field.ValidationMessage>
        {/* validation message */}
      </Field.ValidationMessage>`
          : null
      }
    </Field>
  `
  : figma.code`
    <Input size="${size}"${isDisabled ? " disabled" : ""}${isCritical ? " aria-invalid='true'" : ""}${isReadonly ? " readOnly" : ""} />
  `;

const imports = showLabel
  ? ['import { Field, Input } from "@sikt/sd3-design-system";']
  : ['import { Input } from "@sikt/sd3-design-system";'];

export default {
  example,
  imports,
  id: "input",
  metadata: {
    nestable: true,
  },
};
