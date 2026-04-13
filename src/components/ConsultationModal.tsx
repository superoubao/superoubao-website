import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { INTAKE_QUESTIONNAIRE_PDF } from "../constants/downloads";
import { useLanguage } from "../i18n/LanguageContext";
import "./consultation-modal.css";

type ConsultModalContextValue = {
  open: () => void;
  close: () => void;
};

const ConsultationModalContext = createContext<ConsultModalContextValue | null>(null);

export function useConsultationModal() {
  const ctx = useContext(ConsultationModalContext);
  if (!ctx) {
    throw new Error("useConsultationModal must be used within ConsultationModalProvider");
  }
  return ctx;
}

export function ConsultationModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <ConsultationModalContext.Provider value={value}>
      {children}
      <ConsultationModal isOpen={isOpen} onClose={close} />
    </ConsultationModalContext.Provider>
  );
}

type ConsultationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const { t } = useLanguage();
  const m = t.consultModal;
  const titleId = useId();
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const [view, setView] = useState<"form" | "success">("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [situation, setSituation] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    setView("form");
    setName("");
    setEmail("");
    setPhone("");
    setSituation("");
    setSubmitting(false);
    setSubmitError(null);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || view !== "success") return;
    const timer = window.setTimeout(() => onClose(), 2600);
    return () => window.clearTimeout(timer);
  }, [isOpen, view, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && view === "form") {
      window.requestAnimationFrame(() => firstFieldRef.current?.focus());
    }
  }, [isOpen, view]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      situation: situation.trim(),
    };
    const destination = t.consult.contactEmail;

    setSubmitting(true);
    try {
      /** Delivers to `destination` inbox via FormSubmit (first use may require email activation from FormSubmit). */
      const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(destination)}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: "Consultation request — SuperouBao website",
          _replyto: payload.email,
          name: payload.name,
          email: payload.email,
          phone: payload.phone || "—",
          message: payload.situation || "—",
        }),
      });
      let data: { success?: boolean } | null = null;
      try {
        const text = await res.text();
        if (text) data = JSON.parse(text) as { success?: boolean };
      } catch {
        /* non-JSON response */
      }
      if (!res.ok || data?.success === false) {
        setSubmitError(m.submitError);
        return;
      }
      setView("success");
    } catch {
      if (import.meta.env.DEV) {
        console.error("Consultation submit failed");
      }
      setSubmitError(m.submitError);
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="consult-modal" role="presentation">
      <div className="consult-modal__backdrop" onClick={onClose} aria-hidden />
      <div
        className="consult-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="consult-modal__close" onClick={onClose} aria-label={m.closeAria}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>

        {view === "success" ? (
          <div className="consult-modal__success">
            <p>{m.successMessage}</p>
          </div>
        ) : (
          <>
            <h2 id={titleId} className="consult-modal__title">
              {m.title}
            </h2>
            <p className="consult-modal__subtitle">{m.subtitle}</p>
            <form onSubmit={handleSubmit}>
              <div className="consult-modal__field">
                <label className="consult-modal__label" htmlFor={`${titleId}-name`}>
                  {m.nameLabel}
                </label>
                <input
                  ref={firstFieldRef}
                  id={`${titleId}-name`}
                  className="consult-modal__input"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="consult-modal__field">
                <label className="consult-modal__label" htmlFor={`${titleId}-email`}>
                  {m.emailLabel}
                </label>
                <input
                  id={`${titleId}-email`}
                  className="consult-modal__input"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="consult-modal__field">
                <div className="consult-modal__label-row">
                  <label className="consult-modal__label" htmlFor={`${titleId}-phone`}>
                    {m.phoneLabel}
                  </label>
                  <span className="consult-modal__optional">{m.phoneOptionalBadge}</span>
                </div>
                <input
                  id={`${titleId}-phone`}
                  className="consult-modal__input"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="consult-modal__field">
                <label className="consult-modal__label" htmlFor={`${titleId}-situation`}>
                  {m.situationLabel}
                </label>
                <textarea
                  id={`${titleId}-situation`}
                  className="consult-modal__textarea"
                  name="situation"
                  rows={4}
                  placeholder={m.situationPlaceholder}
                  value={situation}
                  onChange={(e) => setSituation(e.target.value)}
                />
              </div>
              {submitError ? (
                <p className="consult-modal__error" role="alert">
                  {submitError}{" "}
                  <a href={`mailto:${t.consult.contactEmail}`} className="consult-modal__error-link">
                    {t.consult.contactEmail}
                  </a>
                </p>
              ) : null}
              <button type="submit" className="consult-modal__submit" disabled={submitting}>
                {submitting ? m.submitSending : m.submit}
              </button>
              <p className="consult-modal__footer-note">{m.footerNote}</p>
              <p className="consult-modal__intake">
                <span className="consult-modal__intake-note">{m.intakePdfNote}</span>{" "}
                <a
                  href={INTAKE_QUESTIONNAIRE_PDF}
                  className="consult-modal__intake-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {m.intakePdfLink}
                </a>
              </p>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}
