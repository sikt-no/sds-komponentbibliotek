import { SlackLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink, type ButtonLinkProps } from "@sikt/sds-button";

export const SlackButton = ({
  variant = "subtle",
  iconVariant = "left",
}: Pick<ButtonLinkProps, "variant" | "iconVariant">) => {
  return (
    <ButtonLink
      variant={variant}
      iconVariant={iconVariant}
      icon={<SlackLogoIcon className="sds-icon" aria-hidden />}
      href="https://sikt-no.slack.com/archives/C04K82KES0J"
    >
      Bli med i Slack-kanalen
    </ButtonLink>
  );
};
