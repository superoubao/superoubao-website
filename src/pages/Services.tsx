import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { useConsultationModal } from "../components/ConsultationModal";
import TrustGraphic from "../components/TrustGraphic";
import "./services.css";

export default function Services() {
  const { t } = useLanguage();
  const s = t.servicesPage;
  const { hash } = useLocation();
  const { open: openConsultationModal } = useConsultationModal();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <div className="services-page">
      <section className="services-hero" aria-labelledby="services-hero-heading">
        <div className="shell">
          <div className="services-hero__inner">
            <p className="section-kicker services-hero__kicker">{s.kicker}</p>
            <h1 id="services-hero-heading" className="h1 services-hero__title">
              {s.title}
            </h1>
            <p className="body-lg services-hero__lead">{s.lead}</p>
            <div className="services-hero__actions">
              <Link to="/#process" className="btn-primary services-hero__cta-process">
                {s.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--subtle">
        <div className="shell">
          <div className="services-tiers">
            <div className="services-tiers__grid">
              {s.items.map((item) => {
                const href =
                  item.id === "consultation"
                    ? "/consultation"
                    : item.id === "provider-matching"
                      ? "/provider-matching"
                      : item.id === "care-coordination"
                        ? "/care-coordination"
                        : "mailto:superoubao@gmail.com";
                const tier =
                  item.id === "consultation" ? "entry" : item.id === "provider-matching" ? "mid" : "full";

                return (
                  <article key={item.id} id={item.id} className={`service-card service-card--${tier}`}>
                    <header className="service-card__header">
                      <p className="service-card__tag">{item.tag}</p>
                      <h2 className="service-card__title">{item.title}</h2>
                    </header>
                    <p className="service-card__desc">{item.desc}</p>
                    <ul className="service-card__bullets">
                      {item.bullets.map((line) => (
                        <li key={line} className="service-card__bullet">
                          {line}
                        </li>
                      ))}
                    </ul>
                    <div className="service-card__footer">
                      {href.startsWith("mailto") ? (
                        <a href={href} className="btn-primary service-card__cta">
                          {item.cta}
                        </a>
                      ) : (
                        <Link to={href} className="btn-primary service-card__cta">
                          {item.cta}
                        </Link>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="services-trust section" aria-labelledby="services-trust-heading">
        <div className="shell services-trust__shell">
          <div className="services-trust__split">
            <div className="services-trust__copy">
              <h2 id="services-trust-heading" className="services-trust__title">
                {s.trust.title}
              </h2>
              <ul className="services-trust__list">
                {s.trust.bullets.map((line) => (
                  <li key={line} className="services-trust__item">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="services-trust__visual">
              <div className="services-trust__frame">
                <TrustGraphic variant="clinical" alt={s.trust.imageAlt} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-who-for section" aria-labelledby="services-who-for-heading">
        <div className="shell">
          <h2 id="services-who-for-heading" className="services-who-for__title h2">
            {s.whoFor.title}
          </h2>
          <div className="services-who-for__grid">
            {s.whoFor.columns.map((col) => (
              <div key={col.headline} className="services-who-for__col">
                <p className="services-who-for__headline">{col.headline}</p>
                <p className="services-who-for__line">{col.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-closing section" aria-labelledby="services-closing-heading">
        <div className="shell services-closing__shell">
          <h2 id="services-closing-heading" className="services-closing__title">
            {s.closing.title}
          </h2>
          <p className="services-closing__lead body-lg">{s.closing.lead}</p>
          <button type="button" className="btn-primary btn-primary--lg services-closing__cta" onClick={() => openConsultationModal()}>
            {s.closing.cta}
          </button>
          <p className="services-closing__footnote">{s.closing.footnote}</p>
        </div>
      </section>
    </div>
  );
}
