// url=https://www.figma.com/design/0aelUwbn2Ivir3T2JfhdOo/SDS-Komponenter?node-id=27304-2417
// source=https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/packages/design-system/src/Avatar/index.ts
// component=Avatar

import figma from "figma";

const instance = figma.selectedInstance;

const size = instance.getEnum("size", {
  Large: "large",
  Medium: "medium",
  Small: "small",
});

const variant = instance.getEnum("variant", {
  Placeholder: "placeholder",
  Photo: "photo",
  Initials: "initials",
});

const isPlaceholder = variant === "placeholder";
const isPhoto = variant === "photo";
const isInitials = variant === "initials";

// TODO: figure out how to connect to child instance AvatarInitials

export default {
  example: isPlaceholder
    ? figma.code`<Avatar size="${size}" />`
    : isPhoto
      ? figma.code`<Avatar size="${size}">{/* image element */}</Avatar>`
      : isInitials
        ? figma.code`<Avatar size="${size}" initials="" color="" />`
        : null,
  imports: ['import { Avatar } from "@sikt/sd3-design-system";'],
  id: "avatar",
  metadata: {
    nestable: true,
  },
};
