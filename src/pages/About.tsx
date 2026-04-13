import { useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import "./about.css";

export default function About() {
  const { t } = useLanguage();
  const a = t.aboutPage;

  useEffect(() => {
    const previous = document.title;
    document.title = `${a.metaTitle} · SuperouBao`;
    return () => {
      document.title = previous;
    };
  }, [a.metaTitle]);

  return (
    <main className="about-page">
      <section className="about-hero" aria-labelledby="about-hero-heading">
        <div className="shell shell--about">
          <div className="about-hero__inner">
            <p className="about-hero__kicker">{a.hero.kicker}</p>
            <h1 id="about-hero-heading" className="about-hero__headline">
              {a.hero.headline}
            </h1>
            <p className="about-hero__lead">{a.hero.lead}</p>
            <hr className="about-hero__rule" />
          </div>
        </div>
      </section>

      <section className="about-expertise" aria-labelledby="about-expertise-heading">
        <div className="shell shell--about">
          <div className="about-expertise__panel">
            <h2 id="about-expertise-heading" className="about-expertise__title">
              {a.expertise.title}
            </h2>
            <p>{a.expertise.p1}</p>
            <p>{a.expertise.p2}</p>
          </div>
        </div>
      </section>

      <section className="about-why" aria-labelledby="about-why-heading">
        <div className="shell shell--about">
          <h2 id="about-why-heading" className="about-why__title">
            {a.whyChoose.title}
          </h2>
          <div className="about-why__grid">
            {a.whyChoose.reasons.map((reason, index) => (
              <article key={reason.title} className="about-card">
                <span className="about-card__num">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="about-card__title">{reason.title}</h3>
                <p className="about-card__tagline">{reason.tagline}</p>
                <p className="about-card__body">{reason.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
