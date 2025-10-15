# Astro (designsystem.sikt.no)

<details>
  <summary>Table of Contents</summary>

- [Project Structure](#project-structure)
- [Authentication & protected routes](#authentication--protected-routes)
- [Analytics](#analytics)
- [CMS](#cms)
- [Workflow](#workflow)
  - [Stylesheets](#stylesheets)
  - [MDX](#mdx)
  - [Test](#test)
- [Commands](#commands)
- [Want to learn more?](#want-to-learn-more)

</details>

Documentation application for [Sikt designsystem](https://designsystem.sikt.no/).  
[Astro](https://astro.build/) is a multi-page app framework & statically generated at build time that supports HTML, Astro, React & Markdown/MDX.

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── /* Static files, served from root / */
├── src/
│   ├── assets/
│   │   └── images/
│   │   └── /* Other files */
│   └── components/
│   │   └── /* TSX & Astro components */
│   │   └── index.ts /* Components export */
│   ├── layouts/
│   │   └── _components/
│   │   │   └── footer/ /* Footer component */
│   │   │   └── header/ /* Header component */
│   │   │   └── menu/ /* Menu component */
│   │   └── BaseLayout.astro /* Layout containing head, meta, header, footer & used by other layouts */
│   │   └── MdxLayout.astro /* Layout for MDX pages */
│   │   └── PageLayout.astro /* Layout for Astro & TSX pages */
│   └── content/
│   │   └── /* CMS content */
│   └── pages/
│   │   └── /* Pages & directories for routes */
│   │   └── 404.astro
│   │   └── 500.astro
│   │   └── index.astro /* Start page */
│   └── utils/
│       └── /* Utils */
└── .env /* Environment variables */
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [Astro guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## Authentication & protected routes

This is out of current scope and protected content should be stored in Sikt Sharepoint.

## Analytics

Site analytics is collected to [Matomo](https://matomo.sikt.no/).

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

And component mapping:

```jsx
import { Picture } from "astro:assets";
import ImageCard from "../../components/card/ImageCard.astro";
import { MdxComponents } from "../../layouts/_components/mdx/MdxComponents";
export const components = {
  ...MdxComponents,
  img: (props) => (
    <ImageCard>
      <Picture formats={["avif", "webp"]} widths={[240, 540]} {...props} />
    </ImageCard>
  ),
};
```

### Test

_Pfft_ we do manual testing only 🫠  
Test all packages over this MVP / WIP site.

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

Feel free to check [Astro documentation](https://docs.astro.build) or jump into [Astro Discord server](https://astro.build/chat).
