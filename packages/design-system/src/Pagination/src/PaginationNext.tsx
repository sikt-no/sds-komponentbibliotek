import { MoveToNextIcon, NavigateToNextIcon } from "@sikt/sds-icons";
import type { MouseEvent, ReactNode } from "react";
import { Button } from "../../Button";
import { usePaginationContext } from "./PaginationContext";

export interface PaginationNextProps {
  /** @default "Neste" */
  children?: ReactNode;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Overrides the accessible name. Defaults to `children` when it is a string. */
  "aria-label"?: string;
}

export const PaginationNext = ({
  children = "Neste",
  disabled,
  onClick,
  "aria-label": ariaLabel,
}: PaginationNextProps) => {
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
          <MoveToNextIcon />
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
      {children}
      <Button.Icon>
        <NavigateToNextIcon />
      </Button.Icon>
    </Button>
  );
};

PaginationNext.displayName = "Pagination.Next";
