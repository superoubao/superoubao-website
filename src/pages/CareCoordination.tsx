import { useEffect } from "react";
import { useConsultationModal } from "../components/ConsultationModal";
import TrustGraphic from "../components/TrustGraphic";
import { useLanguage } from "../i18n/LanguageContext";
import "./care-coordination.css";

export default function CareCoordination() {
  const { t } = useLanguage();
  const c = t.careCoordinationPage;
  const { open: openConsultationModal } = useConsultationModal();

  useEffect(() => {
    const previous = document.title;
    document.title = `${c.metaTitle} · SuperouBao`;
    return () => {
      document.title = previous;
    };
  }, [c.metaTitle]);

  return (
    <main className="care-coordination-page">
      <section className="cc-hero" aria-labelledby="cc-hero-heading">
        <div className="shell shell--consult">
          <div className="cc-hero__inner">
            <p className="cc-hero__kicker">{c.hero.kicker}</p>
            <h1 id="cc-hero-heading" className="cc-hero__title">
              {c.hero.title}
            </h1>
            <p className="cc-hero__lead">{c.hero.lead}</p>
          </div>
        </div>
      </section>

      <section className="cc-included" aria-labelledby="cc-included-heading">
        <div className="shell shell--consult">
          <h2 id="cc-included-heading" className="cc-included__title">
            {c.included.title}
          </h2>
          <div className="cc-included__grid">
            {c.included.items.map((item, index) => (
              <article key={item.title} className="cc-card">
                <span className="cc-card__index">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="cc-card__title">{item.title}</h3>
                <p className="cc-card__subtitle">{item.subtitle}</p>
                <p className="cc-card__body">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cc-expertise" aria-labelledby="cc-expertise-heading">
        <div className="shell shell--consult">
          <div className="cc-expertise__panel">
            <div className="cc-expertise__visual" aria-hidden>
              <TrustGraphic variant="clinical" alt={c.expertise.graphicAlt} />
            </div>
            <div className="cc-expertise__copy">
              <h2 id="cc-expertise-heading" className="cc-expertise__title">
                {c.expertise.title}
              </h2>
              <p className="cc-expertise__body">{c.expertise.body}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cc-cta" aria-labelledby="cc-cta-heading">
        <div className="shell shell--consult">
          <div className="cc-cta__inner">
            <h2 id="cc-cta-heading" className="cc-cta__title">
              {c.cta.title}
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
