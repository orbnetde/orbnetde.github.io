/// <reference path="../.astro/db-types.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly STORYBLOK_TOKEN: string,
  readonly BLOG_ITEMS_PER_PAGE: number,
  readonly SITE: string,
  readonly MODE: string,
  readonly DEV: boolean,
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
