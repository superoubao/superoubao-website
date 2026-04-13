import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { useRevealInit } from "../components/RevealInit";
import AuthorityPanel from "../components/AuthorityPanel";
import TrustGraphic from "../components/TrustGraphic";
import { useConsultationModal } from "../components/ConsultationModal";
import "./home.css";

export default function Home() {
  useRevealInit();
  const { t } = useLanguage();
  const { open: openConsultationModal } = useConsultationModal();
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <>
      <section className="home-hero home-hero--image" aria-labelledby="hero-heading">
        <div className="home-hero__media" aria-hidden>
          <img
            className="home-hero__img"
            src="/hero-pregnancy.png"
            alt={t.hero.imageAlt}
            width={1920}
            height={1080}
            fetchPriority="high"
          />
          <div className="home-hero__overlay" />
          <div className="home-hero__overlay home-hero__overlay--vignette" aria-hidden />
        </div>
        <div className="home-hero__content shell">
          <div className="home-hero__animate">
            <h1 id="hero-heading" className="home-hero__title">
              {t.hero.title}
            </h1>
            <p className="home-hero__sub">{t.hero.sub}</p>
            <div className="home-hero__cta">
              <button
                type="button"
                className="btn-primary btn-primary--hero-cta"
                onClick={() => {
                  console.log("consultation CTA clicked");
                  openConsultationModal();
                }}
              >
                {t.nav.requestCta}
              </button>
              <Link to="/services" className="btn-ghost btn-ghost--hero btn-hero-secondary">
                {t.hero.ctaSecondary}
              </Link>
            </div>
            <ul className="home-hero__trust-bar">
              {t.hero.trustPoints.map((point) => (
                <li key={point} className="home-hero__trust-item">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section trust-band trust-band--clinical" aria-labelledby="clinical-trust-heading">
        <div className="shell shell--trust-wide">
          <div className="trust-band__panel" data-reveal>
            <div className="clinical-trust clinical-trust--dense">
              <div className="clinical-trust__content">
                <h2 id="clinical-trust-heading" className="clinical-trust__title">
                  {t.clinicalTrust.title}
                </h2>
                <ul className="clinical-trust__list">
                  {t.clinicalTrust.bullets.map((line) => (
                    <li key={line} className="clinical-trust__item">
                      <span className="clinical-trust__bullet" aria-hidden>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <div className="clinical-trust__tags" aria-hidden="true">
                  {t.clinicalTrust.tags.map((tag) => (
                    <span key={tag} className="clinical-trust__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="clinical-trust__visual">
                <div className="clinical-trust__frame clinical-trust__frame--graphic">
                  <TrustGraphic variant="clinical" alt={t.clinicalTrust.imageAlt} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section home-surface-b section--home-loose section--layout-left"
        aria-labelledby="support-heading"
      >
        <div className="shell" data-reveal>
          <header className="section-head section-head--left">
            <p className="section-kicker">{t.support.kicker}</p>
            <h2 id="support-heading" className="h2 h2--section">
              {t.support.title}
            </h2>
            <p className="section-subtitle">{t.support.subtitle}</p>
          </header>
          <div className="support-flow">
            {t.support.steps.map((step, index) => (
              <article key={step.title} className="support-flow__step">
                <span className="support-flow__index">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="support-flow__step-title">{step.title}</h3>
                <p className="support-flow__lead">{step.lead}</p>
                <p className="support-flow__detail">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section home-surface-a section--home-loose section--layout-split"
        aria-labelledby="who-heading"
      >
        <div className="shell" data-reveal>
          <div className="who-help-split">
            <div className="who-help-split__intro">
              <h2 id="who-heading" className="h2 h2--section">
                {t.whoWeHelp.title}
              </h2>
              <p className="section-subtitle">{t.whoWeHelp.subtitle}</p>
            </div>
            <div className="who-help-split__grid">
              {t.whoWeHelp.items.map((item) => (
                <article key={item.title} className="who-help__item">
                  <h3 className="who-help__title">{item.title}</h3>
                  <p className="who-help__text">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="section home-surface-b section--home-loose section--layout-right-img"
        aria-labelledby="socialproof-heading"
      >
        <div className="shell" data-reveal>
          <div className="social-proof-split">
            <div className="social-proof-split__copy">
              <h2 id="socialproof-heading" className="social-proof__title">
                {t.socialProof.title}
              </h2>
              <div className="testimonial-cluster">
                <figure className="testimonial testimonial--main">
                  <span className="testimonial__mark" aria-hidden="true">
                    “
                  </span>
                  <blockquote className="testimonial__blockquote">
                    <p>{t.socialProof.main.quote}</p>
                  </blockquote>
                  <hr className="testimonial__rule" />
                  <figcaption className="testimonial__byline">
                    <span className="testimonial__avatar" aria-hidden="true" />
                    <div className="testimonial__meta">
                      <cite className="testimonial__name">{t.socialProof.main.nameLine}</cite>
                      <span className="testimonial__context">{t.socialProof.main.contextLine}</span>
                    </div>
                  </figcaption>
                </figure>
                <div className="testimonial-row">
                  {t.socialProof.secondary.map((item) => (
                    <figure key={item.quote} className="testimonial testimonial--secondary">
                      <span className="testimonial__mark testimonial__mark--small" aria-hidden="true">
                        “
                      </span>
                      <blockquote className="testimonial__blockquote">
                        <p>{item.quote}</p>
                      </blockquote>
                      <hr className="testimonial__rule testimonial__rule--subtle" />
                      <figcaption className="testimonial__byline testimonial__byline--compact">
                        <span className="testimonial__avatar testimonial__avatar--small" aria-hidden="true" />
                        <div className="testimonial__meta">
                          <cite className="testimonial__name">{item.nameLine}</cite>
                          <span className="testimonial__context">{item.contextLine}</span>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
            <div className="social-proof-split__visual">
              <div className="social-proof-split__frame">
                <img
                  className="social-proof-split__img"
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=82"
                  alt={t.socialProof.sideImageAlt}
                  width={900}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                />
                <div className="social-proof-split__img-shade" aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section trust-band trust-band--why section--trust" aria-labelledby="trust-heading">
        <div className="shell shell--trust-wide">
          <div className="trust-band__panel" data-reveal>
            <div className="trust-split trust-split--dense">
              <div className="trust-split__copy">
                <p className="section-kicker">{t.trust.kicker}</p>
                <h2 id="trust-heading" className="h2 h2--section">
                  {t.trust.title}
                </h2>
                <p className="trust-split__subline">{t.trust.subline}</p>
                <ul className="trust-list">
                  {t.trust.bullets.map((line) => (
                    <li key={line} className="trust-list__item">
                      <span className="trust-list__check" aria-hidden>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <AuthorityPanel />
            </div>
          </div>
        </div>
      </section>

      <section
        id="process"
        className="section home-surface-b section--home-loose section--layout-left home-process"
        aria-labelledby="path-heading"
      >
        <div className="shell" data-reveal>
          <header className="section-head section-head--left">
            <p className="section-kicker">{t.process.kicker}</p>
            <h2 id="path-heading" className="h2 h2--section">
              {t.process.title}
            </h2>
          </header>
          <div className="path-steps path-steps--flow">
            {t.process.steps.map((step, index) => (
              <article key={step.title} className="path-step">
                <span className="path-step__index" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="path-step__title">{step.title}</h3>
                <p className="path-step__line">{step.line}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="consult"
        className="section section--closing section--closing-premium section--layout-centered"
      >
        <div className="shell shell--readable" data-reveal>
          <div className="closing-block">
            <h2 className="closing-block__headline">
              <span className="closing-block__headline-line">{t.consult.headlineLine1}</span>
              <span className="closing-block__headline-line">{t.consult.headlineLine2}</span>
            </h2>
            <p className="closing-block__pillars">{t.consult.pillars}</p>
            <p className="closing-block__lead body-lg body-lg--readable">{t.consult.lead}</p>
            <button
              type="button"
              className="btn-primary closing-block__btn"
              onClick={() => {
                console.log("consultation CTA clicked (closing)");
                openConsultationModal();
              }}
            >
              {t.nav.requestCta}
            </button>
            <p className="closing-block__trust-micro">{t.consult.trustMicro}</p>
          </div>
        </div>
      </section>
    </>
  );
}
