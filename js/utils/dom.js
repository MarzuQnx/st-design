/**
 * RELASI SUKSES (relasisukses.co.id)
 * Shared DOM & Localization Utilities
 * Clean Code Architecture: Defensive Null-Safety, Reusable Helpers, DRY Footers & Headers
 */

import { buildWhatsAppLink } from "./whatsapp.js";

/**
 * Get current application language from localStorage with legacy fallback
 * @returns {"id"|"en"}
 */
export function getCurrentLanguage() {
  return localStorage.getItem("rs_lang") || localStorage.getItem("vectro_lang") || "id";
}

/**
 * Set application language in localStorage with backwards compatibility
 * @param {"id"|"en"} lang
 */
export function setCurrentLanguage(lang) {
  localStorage.setItem("rs_lang", lang);
  localStorage.setItem("vectro_lang", lang);
}

/**
 * Safely set element textContent if element exists
 * @param {string|HTMLElement} target - ID string or DOM element
 * @param {string} text
 */
export function setSafeText(target, text) {
  const el = typeof target === "string" ? document.getElementById(target) : target;
  if (el && text !== undefined && text !== null) {
    el.textContent = text;
  }
}

/**
 * Safely set element innerHTML if element exists
 * @param {string|HTMLElement} target - ID string or DOM element
 * @param {string} html
 */
export function setSafeHtml(target, html) {
  const el = typeof target === "string" ? document.getElementById(target) : target;
  if (el && html !== undefined && html !== null) {
    el.innerHTML = html;
  }
}

/**
 * Safely set input/textarea placeholder if element exists
 * @param {string|HTMLElement} target - ID string or DOM element
 * @param {string} placeholder
 */
export function setSafePlaceholder(target, placeholder) {
  const el = typeof target === "string" ? document.getElementById(target) : target;
  if (el && placeholder !== undefined && placeholder !== null) {
    el.placeholder = placeholder;
  }
}

/**
 * Safely set link href if element exists
 * @param {string|HTMLElement} target - ID string or DOM element
 * @param {string} href
 */
export function setSafeHref(target, href) {
  const el = typeof target === "string" ? document.getElementById(target) : target;
  if (el && href !== undefined && href !== null) {
    el.href = href;
  }
}

/**
 * Renders shared header, announcement, and navigation across all pages
 * @param {"id"|"en"} lang
 * @param {Object} i18nData
 */
export function renderSharedHeader(lang, i18nData) {
  const t = i18nData[lang];
  if (!t) return;

  // Active state for language switcher buttons
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Top announcement text & hotline label
  setSafeText("top-announcement-text", lang === "id"
    ? "Gudang Sparepart Sentral & Teknisi Siaga Se-Indonesia | Showroom Jakarta & Workshop Bekasi"
    : "Central Spare Parts Hub & Active Support Across Indonesia | Jakarta Showroom & Bekasi Workshop"
  );
  setSafeText("top-hotline-label", lang === "id" ? "Hotline Engineering:" : "Engineering Hotline:");

  // Brand tag subtitle
  setSafeText("nav-brand-tag", t.nav.brandTag);

  // Navigation menu links
  const navLinks = {
    "nav-link-home": t.nav.home,
    "nav-link-showcase": t.nav.showcase,
    "nav-link-about": t.nav.about,
    "nav-link-solutions": t.nav.solutions,
    "nav-link-articles": t.nav.articles,
    "nav-link-contact": t.nav.contact
  };
  for (const [id, label] of Object.entries(navLinks)) {
    setSafeText(id, label);
  }

  // Header quick WhatsApp action
  setSafeText("nav-wa-text", t.nav.waButton);
  setSafeHref("nav-wa-btn", buildWhatsAppLink({ lang, intent: "general" }));
}

/**
 * Renders standardized footer across all pages
 * @param {"id"|"en"} lang
 * @param {Object} i18nData
 */
export function renderSharedFooter(lang, i18nData) {
  const f = i18nData[lang]?.footer;
  if (!f) return;

  setSafeText("footer-about-text", f.about);
  setSafeText("footer-badge-iso", lang === "id" ? "Supplier Bersertifikat ISO 9001" : "ISO 9001 Certified Supplier");
  setSafeText("footer-quick-title", f.quickLinks);
  setSafeText("footer-quicklinks-title", f.quickLinks);
  setSafeText("footer-hq-title", f.headOffice);
  setSafeText("footer-head-title", f.headOffice);
  setSafeText("footer-hq-addr", f.headOfficeAddr);
  setSafeText("footer-head-addr", f.headOfficeAddr);
  setSafeText("footer-branch-title", f.branchOffice);
  setSafeText("footer-branch-addr", f.branchOfficeAddr);
  setSafeText("footer-contact-title", f.contactTitle);
  setSafeText("footer-contact-fast", lang === "id" ? "Layanan Cepat" : "Fast Support");
  setSafeText("footer-legal-text", f.legalNotice);
  setSafeText("footer-legal-notice", f.legalNotice);
  setSafeText("footer-terms-link", f.terms);
  setSafeText("footer-privacy-link", f.privacy);
  setSafeText("footer-getintouch-link", lang === "id" ? "Hubungi Kami" : "Get in Touch");

  // Footer nav links
  const footerNavLinks = {
    "footer-link-home": tHome => setSafeText("footer-link-home", i18nData[lang].nav.home),
    "footer-link-showcase": () => setSafeText("footer-link-showcase", i18nData[lang].nav.showcase),
    "footer-link-about": () => setSafeText("footer-link-about", i18nData[lang].nav.about),
    "footer-link-solutions": () => setSafeText("footer-link-solutions", i18nData[lang].nav.solutions),
    "footer-link-articles": () => setSafeText("footer-link-articles", i18nData[lang].nav.articles),
    "footer-link-contact": () => setSafeText("footer-link-contact", i18nData[lang].nav.contact)
  };
  for (const handler of Object.values(footerNavLinks)) {
    handler();
  }
}
