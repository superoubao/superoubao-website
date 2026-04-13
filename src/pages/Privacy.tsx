import { useLanguage } from "../i18n/LanguageContext";
import "./privacy.css";

export default function Privacy() {
  const { t } = useLanguage();
  const p = t.privacyPage;

  return (
    <article className="section privacy-page">
      <div className="shell shell--readable privacy-page__inner">
        <header className="privacy-page__head">
          <h1 className="h2 privacy-page__title">{p.title}</h1>
          <p className="privacy-page__intro">{p.intro}</p>
        </header>
        <div className="privacy-page__sections">
          {p.sections.map((section) => (
            <section key={section.heading} className="privacy-page__block">
              <h2 className="privacy-page__h">{section.heading}</h2>
              <p className="privacy-page__body">{section.body}</p>
            </section>
          ))}
        </div>
        <p className="privacy-page__footnote">{p.footnote}</p>
      </div>
    </article>
  );
}
