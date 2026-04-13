import { useEffect } from "react";
import { useConsultationModal } from "../components/ConsultationModal";
import TrustGraphic from "../components/TrustGraphic";
import { useLanguage } from "../i18n/LanguageContext";
import "./consultation.css";

export default function Consultation() {
  const { t } = useLanguage();
  const c = t.consultationPage;
  const { open: openConsultationModal } = useConsultationModal();

  useEffect(() => {
    const previous = document.title;
    document.title = `${c.metaTitle} · SuperouBao`;
    return () => {
      document.title = previous;
    };
  }, [c.metaTitle]);

  return (
    <main className="consultation-page">
      <section className="consult-hero" aria-labelledby="consult-hero-heading">
        <div className="shell shell--consult">
          <div className="consult-hero__inner">
            <p className="consult-hero__kicker">{c.hero.kicker}</p>
            <h1 id="consult-hero-heading" className="consult-hero__title">
              {c.hero.title}
            </h1>
            <p className="consult-hero__lead">{c.hero.lead}</p>
          </div>
        </div>
      </section>

      <section className="consult-included" aria-labelledby="consult-included-heading">
        <div className="shell shell--consult">
          <h2 id="consult-included-heading" className="consult-included__title">
            {c.included.title}
          </h2>
          <div className="consult-included__grid">
            {c.included.items.map((item, index) => (
              <article key={item.title} className="consult-card">
                <span className="consult-card__index">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="consult-card__title">{item.title}</h3>
                <p className="consult-card__subtitle">{item.subtitle}</p>
                <p className="consult-card__body">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="consult-expertise" aria-labelledby="consult-expertise-heading">
        <div className="shell shell--consult">
          <div className="consult-expertise__panel">
            <div className="consult-expertise__visual" aria-hidden>
              <TrustGraphic variant="clinical" alt={c.expertise.graphicAlt} />
            </div>
            <div className="consult-expertise__copy">
              <h2 id="consult-expertise-heading" className="consult-expertise__title">
                {c.expertise.title}
              </h2>
              <p className="consult-expertise__body">{c.expertise.body}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="consult-cta" aria-labelledby="consult-cta-heading">
        <div className="shell shell--consult">
          <div className="consult-cta__inner">
            <h2 id="consult-cta-heading" className="consult-cta__title">
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
