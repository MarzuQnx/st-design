/**
 * RELASI SUKSES (relasisukses.co.id) - Legal Pages Controller (Terms & Privacy)
 * Clean Code Architecture: Shared Header & Footer, Dynamic Language Toggle, Reactive WhatsApp Widget
 */

import { i18nData } from "./data/i18n.js?v=5";
import { 
  getCurrentLanguage, 
  setCurrentLanguage, 
  renderSharedHeader, 
  renderSharedFooter 
} from "./utils/dom.js?v=5";
import { updateWhatsAppWidgetLang } from "./components/whatsapp-widget.js?v=5";

// State
let currentLang = getCurrentLanguage();

/**
 * Initialize shared page components (Header, Footer, WhatsApp Widget, Language Listeners)
 */
function initLegalPage() {
  renderSharedHeader(currentLang, i18nData);
  renderSharedFooter(currentLang, i18nData);
  updateWhatsAppWidgetLang(currentLang);

  // Setup language switcher buttons
  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.dataset.lang;
      if (selectedLang !== currentLang) {
        currentLang = selectedLang;
        setCurrentLanguage(currentLang);
        renderSharedHeader(currentLang, i18nData);
        renderSharedFooter(currentLang, i18nData);
        updateWhatsAppWidgetLang(currentLang);
      }
    });
  });

  // Smooth scroll for TOC anchor links
  document.querySelectorAll(".legal-toc-link").forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
          history.pushState(null, "", targetId);
        }
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", initLegalPage);
