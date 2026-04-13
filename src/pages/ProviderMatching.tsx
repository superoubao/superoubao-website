import { useEffect } from "react";
import { useConsultationModal } from "../components/ConsultationModal";
import TrustGraphic from "../components/TrustGraphic";
import { useLanguage } from "../i18n/LanguageContext";
import "./provider-matching.css";

export default function ProviderMatching() {
  const { t } = useLanguage();
  const p = t.providerMatchingPage;
  const { open: openConsultationModal } = useConsultationModal();

  useEffect(() => {
    const previous = document.title;
    document.title = `${p.metaTitle} · SuperouBao`;
    return () => {
      document.title = previous;
    };
  }, [p.metaTitle]);

  return (
    <main className="provider-matching-page">
      <section className="pm-hero" aria-labelledby="pm-hero-heading">
        <div className="shell shell--consult">
          <div className="pm-hero__inner">
            <p className="pm-hero__kicker">{p.hero.kicker}</p>
            <h1 id="pm-hero-heading" className="pm-hero__title">
              {p.hero.title}
            </h1>
            <p className="pm-hero__lead">{p.hero.lead}</p>
          </div>
        </div>
      </section>

      <section className="pm-included" aria-labelledby="pm-included-heading">
        <div className="shell shell--consult">
          <h2 id="pm-included-heading" className="pm-included__title">
            {p.included.title}
          </h2>
          <div className="pm-included__grid">
            {p.included.items.map((item, index) => (
              <article key={item.title} className="pm-card">
                <span className="pm-card__index">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="pm-card__title">{item.title}</h3>
                <p className="pm-card__subtitle">{item.subtitle}</p>
                <p className="pm-card__body">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pm-expertise" aria-labelledby="pm-expertise-heading">
        <div className="shell shell--consult">
          <div className="pm-expertise__panel">
            <div className="pm-expertise__visual" aria-hidden>
              <TrustGraphic variant="authority" alt={p.expertise.graphicAlt} />
            </div>
            <div className="pm-expertise__copy">
              <h2 id="pm-expertise-heading" className="pm-expertise__title">
                {p.expertise.title}
              </h2>
              <p className="pm-expertise__body">{p.expertise.body}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pm-cta" aria-labelledby="pm-cta-heading">
        <div className="shell shell--consult">
          <div className="pm-cta__inner">
            <h2 id="pm-cta-heading" className="pm-cta__title">
              {p.cta.title}
            </h2>
            <button type="button" className="btn-primary" onClick={() => openConsultationModal()}>
              {t.nav.requestCta}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
