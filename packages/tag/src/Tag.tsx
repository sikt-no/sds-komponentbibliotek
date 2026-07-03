import { AlertIcon, FailedIcon, InfoIcon, SuccessIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import { HTMLAttributes, ReactNode } from "react";
import "./tag.css";

type TagVariant =
  "brand" | "neutral" | "success" | "info" | "warning" | "critical";

interface TagBaseProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: TagVariant;
  visibility?: "strong" | "subtle";
  category?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
  className?: string;
  children: ReactNode;
  /**
   * Icon element to display on the component.
   * Should be a `@sikt/sds-icons` element,
   * or optionally `@phosphor-icons/react`
   * (with `className="sds-icon" aria-hidden="true"`).
   */
  icon?: ReactNode;
}

export type TagStatusProps = Omit<TagBaseProps, "category">;

export type TagCategoryProps = Omit<TagBaseProps, "variant" | "visibility">;

const getTagIcon = (variant: TagVariant, customIcon: ReactNode): ReactNode => {
  if (customIcon) {
    return customIcon;
  }

  switch (variant) {
    case "info":
      return <InfoIcon />;
    case "success":
      return <SuccessIcon />;
    case "warning":
      return <AlertIcon />;
    case "critical":
      return <FailedIcon />;
    case "brand":
    case "neutral":
      return undefined;
  }
};

const TagBase = ({
  variant = "brand",
  visibility = "subtle",
  category,
  className,
  children,
  icon,
  ...rest
}: TagBaseProps) => {
  const tagIcon = getTagIcon(variant, icon);

  return (
    <span
      className={clsx(
        "sds-tag",
        !category && `sds-tag--status sds-tag--status-${variant}`,
        !category && `sds-tag--visibility-${visibility}`,
        category && `sds-tag--category sds-tag--category-${category}`,
        className,
      )}
      {...rest}
    >
      {tagIcon && <span className="sds-tag__icon">{tagIcon}</span>}
      <span className="sds-tag__label">{children}</span>
    </span>
  );
};

export const TagStatus = (props: TagStatusProps) => <TagBase {...props} />;
TagStatus.displayName = "TagStatus";

export const TagCategory = (props: TagCategoryProps) => <TagBase {...props} />;
TagCategory.displayName = "TagCategory";
