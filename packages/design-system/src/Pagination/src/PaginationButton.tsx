import type { ButtonHTMLAttributes, ReactNode, Ref } from "react";

export interface PaginationButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "aria-current"
> {
  ref?: Ref<HTMLButtonElement>;
  children: ReactNode;
  /** Marks the button as the current page. Suppresses `onClick`. */
  "aria-current"?: "page";
}

export const PaginationButton = ({
  ref,
  children,
  "aria-current": ariaCurrent,
  onClick,
  type,
  ...rest
}: PaginationButtonProps) => {
  const isCurrent = ariaCurrent === "page";
  return (
    <button
      ref={ref}
      type={type ?? "button"}
      data-part="button"
      aria-current={ariaCurrent}
      onClick={isCurrent ? undefined : onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

PaginationButton.displayName = "Pagination.Button";
