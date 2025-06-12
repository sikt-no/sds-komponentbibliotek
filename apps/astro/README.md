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
│   │   └── data/
│   │   └── images/
│   │   └── /* Other files */
│   └── components/
│   │   └── /* TSX & Astro components  */
│   │   └── footer/ /* Footer component  */
│   │   └── header/ /* Header component  */
│   │   └── menu/ /* Menu component  */
│   │   └── index.ts /* Components export */
│   ├── layouts/
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
