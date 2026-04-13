import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import "./not-found.css";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="section not-found-page" aria-labelledby="not-found-heading">
      <div className="shell shell--readable not-found-page__inner">
        <h1 id="not-found-heading" className="h2 not-found-page__title">
          {t.notFoundPage.title}
        </h1>
        <p className="not-found-page__lead">{t.notFoundPage.lead}</p>
        <Link to="/" className="btn-primary not-found-page__cta">
          {t.notFoundPage.homeCta}
        </Link>
      </div>
    </section>
  );
}
