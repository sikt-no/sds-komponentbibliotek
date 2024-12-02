import type { ButtonProps } from "@sikt/sds-button";
import { Button } from "@sikt/sds-button";
import { clsx } from "clsx/lite";
import { forwardRef } from "react";

export type MessageButtonProps = Omit<ButtonProps, "variant" | "size">;

export const MessageButton = forwardRef<HTMLButtonElement, MessageButtonProps>(
  ({ children, className, ...rest }: MessageButtonProps, ref) => {
    return (
      <Button
        ref={ref}
        className={clsx("sds-message-button", className)}
        variant="transparent"
        size="small"
        {...rest}
      >
        {children}
      </Button>
    );
  },
);

MessageButton.displayName = "MessageButton";
