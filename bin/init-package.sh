#!/bin/bash

capitalName="$(tr '[:lower:]' '[:upper:]' <<< ${1:0:1})${1:1}"

cd packages
mkdir $1
cd $1

touch package.json
echo "{
  \"name\": \"@sikt/sds-$1\",
  \"version\": \"0.1.0\",
  \"license\": \"UNLICENSED\",
  \"type\": \"commonjs\",
  \"main\": \"dist/index.js\",
  \"module\": \"dist/index.mjs\",
  \"exports\": {
    \"import\": {
      \"types\": \"./dist/index.d.mts\",
      \"default\": \"./dist/index.mjs\"
    },
    \"require\": {
      \"types\": \"./dist/index.d.ts\",
      \"default\": \"./dist/index.js\"
    }
  },
  \"types\": \"dist/index.d.ts\",
  \"style\": \"dist/index.css\",
  \"files\": [
    \"CHANGELOG.md\",
    \"dist\",
    \"README.md\"
  ],
  \"scripts\": {
    \"build\": \"tsup\"
  },
  \"dependencies\": {
    \"@sikt/sds-core\": \"^3.0.0\"
  },
  \"peerDependencies\": {
    \"@types/react\": \"^18.0.0\",
    \"@types/react-dom\": \"^18.0.0\",
    \"clsx\": \"^1.0.0 || ^2.0.0\",
    \"react\": \"^18.0.0\",
    \"react-dom\": \"^18.0.0\"
  }
}" >> package.json

touch README.md
echo "# \`@sikt/sds-$1\`" >> README.md

touch index.ts
echo "export type { ${capitalName}Props } from \"./$capitalName\";
export { $capitalName } from \"./$capitalName\";" >> index.ts

touch $capitalName.tsx
echo "import { HTMLAttributes } from \"react\";
import clsx from \"clsx\";
import \"./$1.pcss\";

export interface ${capitalName}Props extends HTMLAttributes<HTMLDivElement> {
  /* props goes here */
  className?: string;
}

export const $capitalName = ({ className, ...rest }: ${capitalName}Props) => {
  /* logic goes here */
  return <div className={clsx(\"sds-$1\", className)} {...rest}></div>;
};" >> $capitalName.tsx

touch $capitalName.test.tsx
echo "import { render } from \"@testing-library/react\";
import { axe } from \"jest-axe\";
import { $capitalName } from \"./$capitalName\";

describe(\"$capitalName\", () => {
  describe(\"a11y\", () => {
    it(\"should be accessible\", async () => {
      const { container } = render(<$capitalName />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe(\"api\", () => {
    /* tests goes here */
  });
});" >> $capitalName.test.tsx

touch $1.pcss
echo ".sds-$1 {
  /* styles goes here */
}" >> $1.pcss

mkdir stories
touch stories/Readme.mdx
echo "import { Markdown, Meta } from \"@storybook/blocks\";
import Readme from \"../README.md?raw\";

<Meta title=\"Components/$capitalName/Readme\" />

<Markdown>{Readme}</Markdown>" >> stories/Readme.mdx

mkdir playwright
touch playwright/$capitalName.spec.ts
echo "import { test, expect } from \"@playwright/test\";
import AxeBuilder from \"@axe-core/playwright\";

test.describe(\"$capitalName\", () => {
  const componentSelector = \".sds-$1\";

  test.describe(\"a11y\", () => {
    /* tests goes here */
  });

  test.describe(\"visual\", () => {
    /* tests goes here */
  });
});" >> playwright/$capitalName.spec.ts
