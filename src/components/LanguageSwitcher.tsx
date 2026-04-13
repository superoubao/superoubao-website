import type { Locale } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageContext";

const options: { value: Locale; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "zh", label: "中文" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className="lang-switch"
      role="group"
      aria-label="Language"
    >
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          className="lang-switch__btn"
          aria-pressed={locale === opt.value}
          onClick={() => setLocale(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
