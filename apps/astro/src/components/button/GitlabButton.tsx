import { GitlabLogo } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink, type ButtonLinkProps } from "@sikt/sds-button";

export const GitlabButton = ({
  variant = "subtle",
  iconVariant = "left",
}: Pick<ButtonLinkProps, "variant" | "iconVariant">) => {
  return (
    <ButtonLink
      variant={variant}
      iconVariant={iconVariant}
      icon={<GitlabLogo className="sds-icon" aria-hidden />}
      href="https://gitlab.sikt.no/designsystem/sds-komponentbibliotek"
    >
      Se prosjektet i GitLab
    </ButtonLink>
  );
};
