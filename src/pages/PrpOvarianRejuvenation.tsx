import { useEffect } from "react";
import { useConsultationModal } from "../components/ConsultationModal";
import { useLanguage } from "../i18n/LanguageContext";
import overviewFigure from "../assets/prp/prp-overview.png";
import detailFigure from "../assets/prp/prp-detail.png";
import "./prp-ovarian.css";

export default function PrpOvarianRejuvenation() {
  const { t } = useLanguage();
  const p = t.prpOvarianPage;
  const { open: openConsultationModal } = useConsultationModal();

  useEffect(() => {
    const previous = document.title;
    document.title = `${p.metaTitle} · SuperouBao`;
    return () => {
      document.title = previous;
    };
  }, [p.metaTitle]);

  return (
    <main className="prp-page">
      <section className="prp-hero" aria-labelledby="prp-hero-heading">
        <div className="shell shell--prp">
          <div className="prp-hero__inner">
            <p className="prp-hero__kicker">{p.hero.kicker}</p>
            <h1 id="prp-hero-heading" className="prp-hero__title">
              {p.hero.title}
            </h1>
            <div className="prp-hero__body">
              {p.hero.paragraphs.map((para, i) => (
                <p key={i} className="prp-hero__p">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="prp-picture-band">
        <div className="shell shell--prp shell--prp-wide">
          <figure className="prp-picture">
            <img className="prp-picture__img" src={overviewFigure} alt="" loading="eager" decoding="async" />
          </figure>
        </div>
      </section>

      <section className="prp-picture-band prp-picture-band--alt">
        <div className="shell shell--prp shell--prp-wide">
          <figure className="prp-picture">
            <img className="prp-picture__img" src={detailFigure} alt="" loading="lazy" decoding="async" />
          </figure>
        </div>
      </section>

      <section className="prp-travel" aria-labelledby="prp-travel-heading">
        <div className="shell shell--prp">
          <p id="prp-travel-heading" className="prp-travel__text">
            {p.travelBanner}
          </p>
        </div>
      </section>

      <p className="prp-disclaimer shell shell--prp">{p.disclaimer}</p>

      <section className="prp-qa" aria-labelledby="prp-qa-heading">
        <div className="shell shell--prp">
          <h2 id="prp-qa-heading" className="prp-qa__title">
            {p.qa.title}
          </h2>
          <div className="prp-qa__list">
            {p.qa.items.map((item) => (
              <article key={item.question} className="prp-qa-card">
                <h3 className="prp-qa-card__q">{item.question}</h3>
                <p className="prp-qa-card__a">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="prp-cta" aria-labelledby="prp-cta-heading">
        <div className="shell shell--prp">
          <div className="prp-cta__inner">
            <h2 id="prp-cta-heading" className="prp-cta__title">
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
