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

const TagBase = ({
  variant = "brand",
  visibility = "subtle",
  category,
  className,
  children,
  icon,
  ...rest
}: TagBaseProps) => {
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
      {icon && <span className="sds-tag__icon">{icon}</span>}
      <span className="sds-tag__label">{children}</span>
    </span>
  );
};

export type TagStatusProps = Omit<TagBaseProps, "category">;
export const TagStatus = (props: TagStatusProps) => <TagBase {...props} />;
TagStatus.displayName = "TagStatus";

export type TagCategoryProps = Omit<TagBaseProps, "variant" | "visibility">;
export const TagCategory = (props: TagCategoryProps) => <TagBase {...props} />;
TagCategory.displayName = "TagCategory";
