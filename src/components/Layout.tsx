import { Link, NavLink, useLocation } from "react-router-dom";
import type { ReactNode } from "react";
import { INTAKE_QUESTIONNAIRE_PDF } from "../constants/downloads";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { ConsultationModalProvider } from "./ConsultationModal";

export default function Layout({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const servicesActive =
    pathname === "/services" ||
    pathname === "/consultation" ||
    pathname === "/provider-matching" ||
    pathname === "/care-coordination" ||
    pathname === "/prp-ovarian-rejuvenation";

  return (
    <ConsultationModalProvider>
      <a href="#main-content" className="skip-link">
        {t.a11y.skipToMain}
      </a>
      <header className="site-header">
        <div className="site-header__inner">
          <nav className="site-header__nav site-header__nav--left" aria-label="Primary">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `site-header__link${isActive ? " site-header__link--active" : ""}`
              }
            >
              {t.nav.home}
            </NavLink>
            <div className="site-header__nav-item site-header__nav-item--dropdown">
              <NavLink
                to="/services"
                className={`site-header__link site-header__link--dropdown${servicesActive ? " site-header__link--active" : ""}`}
                aria-haspopup="menu"
              >
                {t.nav.services}
              </NavLink>
              <div className="site-header__dropdown" role="menu" aria-label={t.nav.servicesMenuAria}>
                {t.servicesPage.items.map((item) => (
                  <Link
                    key={item.id}
                    to={
                      item.id === "consultation"
                        ? "/consultation"
                        : item.id === "provider-matching"
                          ? "/provider-matching"
                          : item.id === "care-coordination"
                            ? "/care-coordination"
                            : item.id === "prp-ovarian-rejuvenation"
                              ? "/prp-ovarian-rejuvenation"
                              : `/services#${item.id}`
                    }
                    className="site-header__dropdown-link"
                    role="menuitem"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                `site-header__link${isActive ? " site-header__link--active" : ""}`
              }
            >
              {t.nav.reviews}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `site-header__link${isActive ? " site-header__link--active" : ""}`
              }
            >
              {t.nav.about}
            </NavLink>
          </nav>

          <NavLink to="/" className="site-header__brand" aria-label="SuperouBao home">
            <img
              className="site-header__logo-img"
              src="/header-logo.png"
              alt=""
              width={180}
              height={72}
            />
          </NavLink>

          <div className="site-header__actions">
            <LanguageSwitcher />
          </div>
        </div>
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="shell site-footer__inner">
          <p className="site-footer__tagline">{t.footer.tagline}</p>
          <p className="site-footer__contact">
            <a href={`mailto:${t.footer.contactEmail}`} className="site-footer__email">
              {t.footer.contactEmail}
            </a>
          </p>
          <p className="site-footer__intake">
            <a href={INTAKE_QUESTIONNAIRE_PDF} className="site-footer__intake-link" target="_blank" rel="noopener noreferrer">
              {t.footer.intakePdfLabel}
            </a>
          </p>
          <p className="site-footer__privacy">
            <Link to="/privacy" className="site-footer__privacy-link">
              {t.footer.privacyLabel}
            </Link>
          </p>
        </div>
      </footer>
    </ConsultationModalProvider>
  );
}
