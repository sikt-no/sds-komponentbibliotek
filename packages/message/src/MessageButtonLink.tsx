import type { ButtonLinkProps } from "@sikt/sds-button";
import { ButtonLink } from "@sikt/sds-button";
import { clsx } from "clsx/lite";
import { forwardRef } from "react";

export type MessageButtonLinkProps = Omit<ButtonLinkProps, "variant" | "size">;

export const MessageButtonLink = forwardRef<
  HTMLAnchorElement,
  MessageButtonLinkProps
>(({ children, className, ...rest }: MessageButtonLinkProps, ref) => {
  return (
    <ButtonLink
      ref={ref}
      className={clsx("sds-message-button", className)}
      variant="neutral-transparent"
      size="small"
      {...rest}
    >
      {children}
    </ButtonLink>
  );
});

MessageButtonLink.displayName = "MessageButtonLink";
