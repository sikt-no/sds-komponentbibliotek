import { ButtonLink } from "@sikt/sds-button";
import { NavigateToPreviousCircleIcon } from "@sikt/sds-icons";

export const BackToFrontpageButton = () => {
  return (
    <ButtonLink
      variant="strong"
      icon={<NavigateToPreviousCircleIcon />}
      iconVariant="left"
      href="/"
    >
      Tilbake til forsiden
    </ButtonLink>
  );
};
BackToFrontpageButton.displayName = "BackToFrontpageButton";
