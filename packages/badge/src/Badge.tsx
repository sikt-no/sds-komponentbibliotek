import { clsx } from "clsx/lite";
import { HTMLAttributes } from "react";
import "./badge.pcss";

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  /* props goes here */
  className?: string;
}

export const Badge = ({ className, ...rest }: BadgeProps) => {
  /* logic goes here */
  return <div className={clsx("sds-badge", className)} {...rest} />;
};

Badge.displayName = "Badge";
