import { clsx } from "clsx/lite";
import {
  cloneElement,
  HTMLAttributes,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from "react";
import { ProgressStepButtonProps } from "./ProgressStepButton";
import { ProgressStepLinkProps } from "./ProgressStepLink";

export interface ProgressStepProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  className?: string;
  current?: boolean;
  index?: number;
}

export const ProgressStep = ({
  children,
  className,
  current,
  index = 0,
  ...rest
}: ProgressStepProps) => {
  return (
    <li
      className={clsx("sds-progress-indicator__step-details-item", className)}
      {...rest}
    >
      {isValidElement(children) ? (
        cloneElement(
          children as ReactElement<
            PropsWithChildren<ProgressStepButtonProps | ProgressStepLinkProps>
          >,
          {
            current,
            index,
          },
        )
      ) : (
        <span
          className="sds-progress-indicator__step-details-content"
          aria-current={current ? "step" : undefined}
        >
          {index + 1}.&nbsp;{children}
        </span>
      )}
    </li>
  );
};
ProgressStep.displayName = "ProgressStep";
