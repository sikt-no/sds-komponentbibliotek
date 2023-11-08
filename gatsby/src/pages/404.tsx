import * as React from "react";
import { HeadFC, PageProps, Link as GatsbyLink } from "gatsby";
import { Heading1 } from "@sikt/sds-core";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <section>
      <Heading1 variant="large">Siden finnes ikke</Heading1>
      <p>
        <GatsbyLink className="sds-typography-link" to="/">
          Tilbake til forsiden
        </GatsbyLink>
      </p>
    </section>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
