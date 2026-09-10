import { UserProfileIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import type { HTMLAttributes, ReactNode } from "react";
import type { AriaLabelOrAriaLabelledby, Category, Size } from "../../../types";
import "./avatar.css";

interface AvatarBaseProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
  "children" | "color" | "aria-label" | "aria-labelledby"
> {
  /** Container size. Controls dimensions, initials font size, and placeholder icon size. */
  size?: Size;
}

interface AvatarPhotoProps extends AvatarBaseProps {
  /**
   * An image element (`<img>`, `next/image`, etc.) to render inside the circular frame.
   * The consumer is responsible for setting `alt` on the child — it provides the
   * accessible name.
   */
  children: ReactNode;
  initials?: never;
  color?: never;
}

interface AvatarInitialsProps extends AvatarBaseProps {
  /**
   * 1–2 grapheme initials. Longer strings are silently sliced to the first 2 graphemes
   * (via `Intl.Segmenter`), so emoji and combining marks render intact.
   * Visually uppercased via CSS — DOM text preserves consumer casing.
   * An empty string falls back to the placeholder icon.
   */
  initials: string;
  /**
   * Background color for the initials disc (`"1"` through `"8"`). Only used with `initials`.
   * When omitted, a deterministic color is derived by hashing `initials`.
   */

  color?: Category;
  children?: never;
}

interface AvatarPlaceholderProps extends AvatarBaseProps {
  initials?: never;
  color?: never;
  children?: never;
}

// The `role="img"` variants (initials, placeholder) need a label; the photo
// variant gets its accessible name from the child <img alt>.
export type AvatarProps =
  | AvatarPhotoProps
  | (AvatarInitialsProps & AriaLabelOrAriaLabelledby)
  | (AvatarPlaceholderProps & AriaLabelOrAriaLabelledby);

const graphemeSegmenter = new Intl.Segmenter(undefined, {
  granularity: "grapheme",
});

const sliceGraphemes = (s: string, n: number): string =>
  Array.from(graphemeSegmenter.segment(s), (seg) => seg.segment)
    .slice(0, n)
    .join("");

const deriveColor = (s: string): Category => {
  let sum = 0;
  for (let i = 0; i < s.length; i++) sum += s.charCodeAt(i);
  return String((sum % 8) + 1) as Category;
};

type VariantProps = HTMLAttributes<HTMLSpanElement> & { size: Size };

const AvatarPhoto = ({ size, children, ...rest }: VariantProps) => (
  <span data-variant="photo" data-size={size} {...rest}>
    {children}
  </span>
);

const AvatarInitials = ({
  size,
  initials,
  color,
  ...rest
}: VariantProps & { initials: string; color?: Category }) => {
  const sliced = sliceGraphemes(initials, 2);
  return (
    <span
      data-variant="initials"
      data-size={size}
      data-color={color ?? deriveColor(sliced)}
      role="img"
      {...rest}
    >
      <span aria-hidden="true">{sliced}</span>
    </span>
  );
};

const AvatarPlaceholder = ({ size, ...rest }: VariantProps) => (
  <span data-variant="placeholder" data-size={size} role="img" {...rest}>
    <UserProfileIcon />
  </span>
);

export const Avatar = ({
  size = "medium",
  initials,
  color,
  className,
  children,
  ...rest
}: AvatarProps) => {
  const props = { className: clsx("sd3-avatar", className), size, ...rest };

  if (children) {
    return <AvatarPhoto {...props}>{children}</AvatarPhoto>;
  }

  if (initials) {
    return <AvatarInitials {...props} initials={initials} color={color} />;
  }

  return <AvatarPlaceholder {...props} />;
};
Avatar.displayName = "Avatar";
