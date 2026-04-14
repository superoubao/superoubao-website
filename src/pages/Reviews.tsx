import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { useRevealInit } from "../components/RevealInit";
import { HOME_REVIEW_SCREENSHOTS } from "../constants/homeReviewScreenshots";
import ReviewScreenshotLightbox from "../components/ReviewScreenshotLightbox";
import { getExternalReviewUrl } from "../constants/site";
import "./reviews.css";

export default function Reviews() {
  useRevealInit();
  const { t } = useLanguage();
  const r = t.reviewsPage;
  const proof = t.homePatientProof;
  const items = r.items;
  const n = items.length;
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const externalReviewUrl = getExternalReviewUrl();

  const go = useCallback((delta: number) => {
    setIndex((i) => (i + delta + n) % n);
  }, [n]);

  const prev = useCallback(() => go(-1), [go]);
  const next = useCallback(() => go(1), [go]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <div className="reviews-page">
      <section className="reviews-hero" aria-labelledby="reviews-page-title">
        <div className="shell shell--reviews" data-reveal>
          <div className="reviews-hero__inner">
            <h1 id="reviews-page-title" className="reviews-hero__title">
              {r.summaryTitle}
            </h1>
            <div className="reviews-hero__rating" aria-label={`${r.ratingValue} out of 5`}>
              <span className="reviews-hero__score">{r.ratingValue}</span>
              <span className="reviews-hero__stars" role="img" aria-hidden>
                ★★★★★
              </span>
            </div>
            <p className="reviews-hero__based">{r.basedOn}</p>
            {externalReviewUrl ? (
              <a
                href={externalReviewUrl}
                className="reviews-hero__cta"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={r.ctaAria}
              >
                {r.cta}
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="reviews-carousel-section" aria-labelledby="reviews-carousel-label">
        <div className="shell shell--reviews" data-reveal>
          <h2 id="reviews-carousel-label" className="visually-hidden">
            {proof.title}
          </h2>
          <div className="reviews-carousel-wrap">
            <button
              type="button"
              className="reviews-carousel__arrow reviews-carousel__arrow--prev"
              onClick={prev}
              aria-label={r.carouselPrev}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="reviews-carousel" role="region" aria-roledescription="carousel" aria-label={proof.title}>
              <div
                className="reviews-carousel__track"
                style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
              >
                {items.map((item, i) => (
                  <article key={`${item.name}-${i}`} className="reviews-card" aria-hidden={i !== index}>
                    <header className="reviews-card__head">
                      <span className="reviews-card__avatar" aria-hidden />
                      <div className="reviews-card__meta">
                        <p className="reviews-card__name">{item.name}</p>
                        {item.time ? <p className="reviews-card__time">{item.time}</p> : null}
                      </div>
                    </header>
                    <p className="reviews-card__stars" aria-hidden>
                      ★★★★★
                    </p>
                    <blockquote className="reviews-card__quote">
                      <p>{item.quote}</p>
                    </blockquote>
                  </article>
                ))}
              </div>
            </div>
            <button
              type="button"
              className="reviews-carousel__arrow reviews-carousel__arrow--next"
              onClick={next}
              aria-label={r.carouselNext}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="reviews-carousel__dots" role="tablist" aria-label={proof.title}>
            {items.map((_, i) => (
              <button
                key={String(i)}
                type="button"
                role="tab"
                aria-selected={i === index}
                className={`reviews-carousel__dot${i === index ? " reviews-carousel__dot--active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={r.goToSlide.replace("{n}", String(i + 1))}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="reviews-shots" aria-labelledby="reviews-shots-heading">
        <div className="shell shell--reviews" data-reveal>
          <header className="reviews-shots__head">
            <h2 id="reviews-shots-heading" className="reviews-shots__title">
              {r.screenshotsTitle}
            </h2>
            <p className="reviews-shots__sub">{r.screenshotsSubtitle}</p>
          </header>
          <ul className="reviews-shots__grid" role="list">
            {HOME_REVIEW_SCREENSHOTS.map((src, i) => (
              <li key={src} className="reviews-shots__cell">
                <button
                  type="button"
                  className="reviews-shots__open"
                  onClick={() => setLightbox({ src, alt: proof.slides[i]?.alt ?? "" })}
                  aria-label={`${proof.viewLargerAria}: ${proof.slides[i]?.alt ?? ""}`}
                >
                  <img
                    className="reviews-shots__img"
                    src={src}
                    alt=""
                    width={360}
                    height={640}
                    loading="lazy"
                    decoding="async"
                    aria-hidden
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ReviewScreenshotLightbox
        open={lightbox !== null}
        src={lightbox?.src ?? null}
        alt={lightbox?.alt ?? ""}
        closeLabel={proof.closeLightboxAria}
        onClose={() => setLightbox(null)}
      />
    </div>
  );
}
