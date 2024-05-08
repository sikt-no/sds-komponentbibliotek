import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { Hero } from "../components/Hero";
import { ButtonLink } from "@sikt/sds-button";
import { ArrowCircleLeftIcon } from "@sikt/sds-icons";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Hero
      breadcrumbs={[{ title: "Komponentbiblioteket", to: "/" }]}
      heading={<>Siden finnes ikke</>}
      leadParagraph={
        <ButtonLink
          variant="strong"
          icon={<ArrowCircleLeftIcon />}
          iconVariant="left"
          href="/"
        >
          Tilbake til forsiden
        </ButtonLink>
      }
    />
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Siden finnes ikke</title>;
