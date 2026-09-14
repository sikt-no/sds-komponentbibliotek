import { clsx } from "clsx/lite";
import type { HTMLAttributes, ReactNode } from "react";
import type { Category, SizeDensity, Variant } from "../../../types";
import "./tag.css";

interface TagIconProps {
  children: ReactNode;
}

/**
 * Icon slot for `Tag`. Place inside `<Tag>` to render an icon before the label.
 * The wrapper is `aria-hidden` — provide accessible label text as the tag's children.
 */
const TagIcon = ({ children }: TagIconProps) => (
  <span aria-hidden="true" data-part="icon">
    {children}
  </span>
);

TagIcon.displayName = "Tag.Icon";

export type TagColor =
  Extract<Variant, "brand" | "neutral"> | `category-${Exclude<Category, "8">}`;

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /** Colour. Purely decorative — carries no semantic meaning. */
  color?: TagColor;
  /** Visual emphasis: `subtle` (tinted) or `strong` (filled). */
  visibility?: "strong" | "subtle";
  /** Size: `standard` or `compact` */
  size?: SizeDensity;
  /** Tag content — text and/or Tag.Icon. */
  children: ReactNode;
}

const TagRoot = ({
  color = "neutral",
  visibility = "subtle",
  size = "standard",
  className,
  children,
  ...rest
}: TagProps) => (
  <span
    className={clsx("sd3-tag", className)}
    data-color={color}
    data-visibility={visibility}
    data-size={size}
    {...rest}
  >
    {children}
  </span>
);
TagRoot.displayName = "Tag";

export const Tag = Object.assign(TagRoot, { Icon: TagIcon });
