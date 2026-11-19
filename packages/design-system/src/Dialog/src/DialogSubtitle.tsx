import type { HTMLAttributes } from "react";

export type DialogSubtitleProps = HTMLAttributes<HTMLParagraphElement>;

export const DialogSubtitle = ({
  className,
  children,
  ...rest
}: DialogSubtitleProps) => (
  <p data-part="subtitle" className={className} {...rest}>
    {children}
  </p>
);

DialogSubtitle.displayName = "Dialog.Subtitle";
