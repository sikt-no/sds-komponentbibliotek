import { Slot, Slottable } from "@radix-ui/react-slot";
import { clsx } from "clsx/lite";
import { AnchorHTMLAttributes, forwardRef } from "react";

export interface ProgressStepLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  current?: boolean;
  index?: number;
  asChild?: boolean;
}

export const ProgressStepLink = forwardRef<
  HTMLAnchorElement,
  ProgressStepLinkProps
>(
  (
    { children, className, current, index = 0, href, asChild = false, ...rest },
    ref,
  ) => {
    const Comp = asChild ? Slot : "a";

    return (
      <Comp
        ref={ref}
        className={clsx(
          "sds-progress-indicator__step-details-content",
          "sds-progress-indicator__step-details-action",
          className,
        )}
        href={href}
        aria-current={current ? "step" : undefined}
        {...rest}
      >
        {index + 1}.&nbsp;<Slottable>{children}</Slottable>
      </Comp>
    );
  },
);

ProgressStepLink.displayName = "ProgressStepLink";
