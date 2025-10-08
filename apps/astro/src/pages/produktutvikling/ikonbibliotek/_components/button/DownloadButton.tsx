import { ButtonLink, type ButtonLinkProps } from "@sikt/sds-button";
import { DownloadIcon } from "@sikt/sds-icons";

export const DownloadButton = ({
  variant = "neutral",
  size = "small",
  iconVariant = "left",
  href,
  ...rest
}: ButtonLinkProps) => {
  return (
    <ButtonLink
      variant={variant}
      size={size}
      iconVariant={iconVariant}
      icon={<DownloadIcon />}
      href={href}
      download
      {...rest}
    />
  );
};
