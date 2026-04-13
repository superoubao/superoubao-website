import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./review-screenshot-lightbox.css";

type Props = {
  open: boolean;
  src: string | null;
  alt: string;
  closeLabel: string;
  onClose: () => void;
};

export default function ReviewScreenshotLightbox({ open, src, alt, closeLabel, onClose }: Props) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    window.requestAnimationFrame(() => closeBtnRef.current?.focus());
  }, [open]);

  if (!open || !src) return null;

  return createPortal(
    <div className="review-lightbox" role="presentation">
      <div className="review-lightbox__backdrop" onClick={onClose} aria-hidden />
      <div
        className="review-lightbox__panel"
        role="dialog"
        aria-modal="true"
        aria-label={alt}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeBtnRef}
          type="button"
          className="review-lightbox__close"
          onClick={onClose}
          aria-label={closeLabel}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>
        <div className="review-lightbox__img-wrap">
          <img className="review-lightbox__img" src={src} alt={alt} width={720} height={1280} decoding="async" />
        </div>
      </div>
    </div>,
    document.body,
  );
}
