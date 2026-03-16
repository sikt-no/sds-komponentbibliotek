import { ButtonLink } from "@sikt/sds-button";
import { NavigateToPreviousAltIcon } from "@sikt/sds-icons";

export const BackToFrontpageButton = () => {
  return (
    <ButtonLink
      variant="strong"
      icon={<NavigateToPreviousAltIcon />}
      iconVariant="left"
      href="/"
    >
      Tilbake til forsiden
    </ButtonLink>
  );
};
BackToFrontpageButton.displayName = "BackToFrontpageButton";
