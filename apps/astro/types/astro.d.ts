/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_STORYBOOK_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
