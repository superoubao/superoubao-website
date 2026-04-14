import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import type { Messages } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageContext";
import { getSiteOrigin } from "../constants/site";

type SeoRouteKey = keyof Messages["seo"]["routes"];

const PATH_TO_SEO: Record<string, SeoRouteKey> = {
  "/": "home",
  "/services": "services",
  "/consultation": "consultation",
  "/provider-matching": "providerMatching",
  "/care-coordination": "careCoordination",
  "/prp-ovarian-rejuvenation": "prp",
  "/about": "about",
  "/reviews": "reviews",
  "/privacy": "privacy",
};

function seoKeyFromPath(pathname: string): SeoRouteKey {
  return PATH_TO_SEO[pathname] ?? "notFound";
}

export default function DocumentMeta() {
  const { pathname } = useLocation();
  const { t } = useLanguage();
  const key = seoKeyFromPath(pathname);
  const r = t.seo.routes[key];
  const brand = t.seo.brand;
  const fullTitle = `${r.title} — ${brand}`;
  const desc = r.description;
  const origin = getSiteOrigin();
  const canonical = origin ? `${origin}${pathname}` : undefined;
  const absoluteBase = origin || "";
  const ogImage = absoluteBase ? `${absoluteBase}/header-logo.png` : "/header-logo.png";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
