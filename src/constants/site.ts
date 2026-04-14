/** Optional public review-page URL (e.g. a clinic or maps listing). Set `VITE_GOOGLE_REVIEW_URL` at build time. */
export function getExternalReviewUrl(): string | undefined {
  const raw = import.meta.env.VITE_GOOGLE_REVIEW_URL;
  if (typeof raw === "string" && raw.trim().length > 0) {
    return raw.trim();
  }
  return undefined;
}

/** Production canonical URLs: set `VITE_SITE_URL` (e.g. https://www.example.com) at build time. Falls back to `window.location.origin` in the browser. */
export function getSiteOrigin(): string {
  const env = import.meta.env.VITE_SITE_URL;
  if (typeof env === "string" && env.trim().length > 0) {
    return env.replace(/\/$/, "");
  }
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }
  return "";
}
