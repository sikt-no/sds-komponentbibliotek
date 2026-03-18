import { AlertIcon, FailedIcon, InfoIcon, SuccessIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import { HTMLAttributes, ReactNode } from "react";
import "./tag.pcss";

interface TagBaseProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "brand" | "neutral" | "success" | "info" | "warning" | "critical";
  visibility?: "strong" | "subtle";
  category?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
}

interface TagVariantWithIcon {
  variant?: "brand" | "neutral";
  icon?: ReactNode;
}

interface TagVariantWithoutIcon {
  variant: "success" | "info" | "warning" | "critical";
  /**
   * Will be overridden by the default icon for this variant.
   */
  icon?: never;
}

export type TagStatusProps = Omit<TagBaseProps, "category" | "icon"> &
  (TagVariantWithIcon | TagVariantWithoutIcon);

export type TagCategoryProps = Omit<TagBaseProps, "variant" | "visibility">;

const TagBase = ({
  variant = "brand",
  visibility = "subtle",
  category,
  className,
  children,
  icon,
  ...rest
}: TagBaseProps) => {
  const hasDefaultIcon = ["info", "warning", "success", "critical"].includes(
    variant,
  );

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
      {(hasDefaultIcon || icon) && (
        <span className="sds-tag__icon">
          {variant === "info" && <InfoIcon />}
          {variant === "warning" && <AlertIcon />}
          {variant === "success" && <SuccessIcon />}
          {variant === "critical" && <FailedIcon />}
          {!hasDefaultIcon && icon}
        </span>
      )}
      <span className="sds-tag__label">{children}</span>
    </span>
  );
};

export const TagStatus = (props: TagStatusProps) => <TagBase {...props} />;
TagStatus.displayName = "TagStatus";

export const TagCategory = (props: TagCategoryProps) => <TagBase {...props} />;
TagCategory.displayName = "TagCategory";
