import { FigmaLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink, type ButtonLinkProps } from "@sikt/sds-button";

export const FigmaButton = ({
  variant = "subtle",
  iconVariant = "left",
}: Pick<ButtonLinkProps, "variant" | "iconVariant">) => {
  return (
    <ButtonLink
      variant={variant}
      iconVariant={iconVariant}
      icon={<FigmaLogoIcon className="sds-icon" aria-hidden />}
      href="https://www.figma.com/files/1167338716494500240/project/73250738/Designsystem"
    >
      Se skisser i Figma
    </ButtonLink>
  );
};
