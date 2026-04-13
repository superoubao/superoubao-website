import { useLanguage } from "../i18n/LanguageContext";
import TrustGraphic from "./TrustGraphic";

export default function AuthorityPanel() {
  const { t } = useLanguage();

  return (
    <figure className="authority-panel">
      <div className="authority-panel__frame authority-panel__frame--graphic">
        <TrustGraphic variant="authority" alt={t.trust.imageAlt} />
      </div>
      <figcaption className="authority-panel__caption">{t.trust.imageCaption}</figcaption>
    </figure>
  );
}
