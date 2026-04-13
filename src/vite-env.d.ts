/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Optional production origin for canonical URLs and OG tags, e.g. https://www.example.com */
  readonly VITE_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
