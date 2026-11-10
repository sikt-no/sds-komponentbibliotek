import { MoveToPreviousIcon, NavigateToPreviousIcon } from "@sikt/sds-icons";
import type { MouseEvent, ReactNode } from "react";
import { Button } from "../../Button";
import { usePaginationContext } from "./PaginationContext";

export interface PaginationPreviousProps {
  /** @default "Forrige" */
  children?: ReactNode;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Overrides the accessible name. Defaults to `children` when it is a string. */
  "aria-label"?: string;
}

export const PaginationPrevious = ({
  children = "Forrige",
  disabled,
  onClick,
  "aria-label": ariaLabel,
}: PaginationPreviousProps) => {
  const { size } = usePaginationContext();
  const buttonSize = size === "standard" ? "large" : "medium";
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    onClick?.(event);
  };

  if (size === "compact") {
    return (
      <Button
        variant="tertiary"
        theme="neutral"
        size={buttonSize}
        aria-label={
          ariaLabel ?? (typeof children === "string" ? children : undefined)
        }
        aria-disabled={disabled ? true : undefined}
        onClick={handleClick}
      >
        <Button.Icon>
          <MoveToPreviousIcon />
        </Button.Icon>
      </Button>
    );
  }

  return (
    <Button
      variant="tertiary"
      theme="neutral"
      size={buttonSize}
      aria-label={ariaLabel}
      aria-disabled={disabled ? true : undefined}
      onClick={handleClick}
    >
      <Button.Icon>
        <NavigateToPreviousIcon />
      </Button.Icon>
      {children}
    </Button>
  );
};

PaginationPrevious.displayName = "Pagination.Previous";
