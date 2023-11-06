import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { Heading1, Link } from "@sikt/sds-core";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <section>
      <Heading1 variant="large">Siden finnes ikke</Heading1>
      <p>
        <Link href="/">Tilbake til forsiden</Link>
      </p>
    </section>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
