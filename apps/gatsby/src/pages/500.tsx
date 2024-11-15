import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { Hero } from "../components/Hero";
import { ButtonLink } from "@sikt/sds-button";
import { NavigateToPreviousAltIcon } from "@sikt/sds-icons";

const ErrorPage: React.FC<PageProps> = () => {
  return (
    <Hero
      breadcrumbs={[{ title: "Designsystemet", to: "/" }]}
      heading={<>En feil har skjedd</>}
      leadParagraph={
        <ButtonLink
          variant="strong"
          icon={<NavigateToPreviousAltIcon />}
          iconVariant="left"
          href="/"
        >
          Tilbake til forsiden
        </ButtonLink>
      }
    />
  );
};

export default ErrorPage;

export const Head: HeadFC = () => <title>Feil</title>;
