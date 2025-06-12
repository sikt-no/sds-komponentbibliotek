# Astro

Documentation application for Sikt designsystem.  
[Astro](https://astro.build/) is a multi-page app & static site generator (all content is static at build time) framework that supports Astro, React & Markdown/MDX.

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── /* Static files */
├── src/
│   ├── assets/
│   │   └── images/
│   │   └── /* Other files */
│   └── components/
│   │   └── /* TSX & Astro components  */
│   │   └── index.ts /* Components export */
│   ├── layouts/
│   │   └── _components/
│   │   │   └── footer/ /* Footer component  */
│   │   │   └── header/ /* Header component  */
│   │   │   └── menu/ /* Menu component  */
│   │   └── PageLayout.astro /* Layout for Astro & TSX */
│   │   └── MdxLayout.astro /* Layout for MDX */
│   └── content/
│   │   └── /* CMS content  */
│   └── pages/
│   │   └── /* Pages & directories for routes */
│   │   └── 404.astro
│   │   └── 500.astro
│   │   └── index.astro /* Start page */
│   └── utils/
│       └── /* Utils  */
└── .env /* Environment variables */
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## Authentication & protected routes

This is out of current scope and protected content should be stored in Sikt Sharepoint.

## CMS

_TODO_

## Workflow

Follow the [contributing](../../CONTRIBUTING.md) guidelines.

1. Add a new page to `src/pages/` in a directory corresponding to it's route.
1. Add a [Frontmatter](https://jekyllrb.com/docs/front-matter/) `layout` & `pageTitle`, and a `Hero` component.
1. Add a link to the page in the [Menu](src/components/menu/Menu.tsx).
1. Write content

### Stylesheets

- Astro uses [scoped styles](https://docs.astro.build/en/guides/styling/#scoped-styles).
- React uses [CSS Modules](https://github.com/css-modules/css-modules) `*.module.css`.
- Markdown/MDX uses components or global styles.

### MDX

MDX files should include a [Frontmatter](https://jekyllrb.com/docs/front-matter/) `layout` & `pageTitle`:

```yaml
---
layout: "path/to/layouts/MdxLayout.astro"
pageTitle: "The title of the page"
---
```

And a component mapping:

```jsx
import {
  Link,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Paragraph,
} from "@sikt/sds-core";
import { ListItem, OrderedList, UnorderedList } from "@sikt/sds-list";
export const components = {
  a: Link,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  li: ListItem,
  ol: OrderedList,
  p: Paragraph,
  ul: UnorderedList,
};
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Want to learn more?

Feel free to check [Astro documentation](https://docs.astro.build) or jump into Astro [Discord server](https://astro.build/chat).
