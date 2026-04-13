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
