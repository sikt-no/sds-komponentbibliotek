import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { Link } from "@sikt/sds-core/components/Link";
import { Heading1 } from "@sikt/sds-core/components/Heading";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <section>
      <Heading1 headingType="large">Siden finnes ikke</Heading1>
      <p>
        <Link href="/">Tilbake til forsiden</Link>
      </p>
    </section>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
