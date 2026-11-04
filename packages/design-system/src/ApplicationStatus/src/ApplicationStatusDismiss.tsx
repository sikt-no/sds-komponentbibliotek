import { CloseIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import type { ButtonHTMLAttributes } from "react";
import { Button } from "../../Button/src/Button";

export interface ApplicationStatusDismissProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "aria-label" | "children"
> {
  label: string;
}

export const ApplicationStatusDismiss = ({
  label,
  className,
  ...rest
}: ApplicationStatusDismissProps) => (
  <span data-part="dismiss">
    <Button
      {...rest}
      aria-label={label}
      variant="tertiary"
      size="small"
      className={clsx("sd3-application-status__dismiss", className)}
    >
      <Button.Icon>
        <CloseIcon />
      </Button.Icon>
    </Button>
  </span>
);

ApplicationStatusDismiss.displayName = "ApplicationStatus.Dismiss";
