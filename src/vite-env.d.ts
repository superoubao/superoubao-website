/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Optional production origin for canonical URLs and OG tags, e.g. https://www.example.com */
  readonly VITE_SITE_URL?: string;
  /** Optional URL for the reviews page “Leave a review” button (e.g. public review page) */
  readonly VITE_GOOGLE_REVIEW_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
