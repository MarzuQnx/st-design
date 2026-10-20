/**
 * RELASI SUKSES (relasisukses.co.id) - Contact Hub & Dynamic Accordion FAQ Controller
 * Clean Code Architecture: Reactive State, Dynamic Accordion Filtering, Live Search & Booking Form
 */

import { contactData } from "./data/contact.js?v=4";
import { i18nData } from "./data/i18n.js?v=4";
import { companyData } from "./data/company.js?v=4";
import { buildWhatsAppLink } from "./utils/whatsapp.js?v=4";
import { 
  getCurrentLanguage, 
  setCurrentLanguage, 
  setSafeText, 
  setSafeHtml, 
  setSafePlaceholder, 
  setSafeHref, 
  renderSharedHeader, 
  renderSharedFooter 
} from "./utils/dom.js?v=4";
import { updateWhatsAppWidgetLang } from "./components/whatsapp-widget.js?v=4";

// Page State
const PageState = {
  currentLang: getCurrentLanguage(),
  faqCategory: "all",
  faqSearch: "",
  openFaqId: "faq-1" // First item open by default
};

/**
 * Builds custom WhatsApp URL
 */
function createWhatsAppUrl(phone, message) {
  const cleanPhone = phone || companyData.whatsapp.number;
  const encodedText = encodeURIComponent(message || companyData.whatsapp.defaultMessage[PageState.currentLang]);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

/**
 * -------------------------------------------------------------
 * 1. RENDER HEADER, BREADCRUMBS & NAVIGATION
 * -------------------------------------------------------------
 */
function renderHeaderAndNav() {
  const lang = PageState.currentLang;
  const t = i18nData[lang];
  const cT = t.contactPage;

  renderSharedHeader(lang, i18nData);
  updateWhatsAppWidgetLang(lang);

  // Breadcrumbs
  setSafeText("bc-home", cT.breadcrumbHome);
  setSafeText("bc-current", cT.breadcrumbContact);
}

/**
 * -------------------------------------------------------------
 * 2. RENDER HERO SECTION
 * -------------------------------------------------------------
 */
function renderHero() {
  const lang = PageState.currentLang;
  const cT = i18nData[lang].contactPage;

  setSafeText("hero-badge", cT.heroBadge);
  setSafeText("hero-title", cT.heroTitle);
  setSafeText("hero-lead", cT.heroLead);
  if (cT.hotlineRibbon) {
    setSafeHtml("contact-hotline-text", cT.hotlineRibbon);
  }
}

/**
 * -------------------------------------------------------------
 * 3. RENDER DIRECT COMMUNICATION CHANNELS
 * -------------------------------------------------------------
 */
function renderChannels() {
  const lang = PageState.currentLang;
  const cT = i18nData[lang].contactPage;
  const channels = contactData.channels;

  const badgeEl = document.getElementById("channels-badge");
  const titleEl = document.getElementById("channels-title");
  const subtitleEl = document.getElementById("channels-subtitle");
  const gridEl = document.getElementById("channels-grid");

  if (badgeEl) badgeEl.textContent = cT.channelsBadge;
  if (titleEl) titleEl.textContent = cT.channelsTitle;
  if (subtitleEl) subtitleEl.textContent = cT.channelsSubtitle;

  if (gridEl) {
    gridEl.innerHTML = channels.map(ch => {
      const waUrl = createWhatsAppUrl(ch.waPhone, ch.prefill[lang]);
      return `
        <article class="channel-card">
          <div>
            <span class="channel-badge">${ch.badge}</span>
            <h3 class="channel-title">${ch.title[lang]}</h3>
            <p class="channel-desc">${ch.desc[lang]}</p>
          </div>
          <div>
            <div style="font-family: var(--font-family-mono); font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 8px;">
              Hotline: <strong style="color: var(--accent-gold);">${ch.phone}</strong>
            </div>
            <a href="${waUrl}" target="_blank" rel="noopener" class="channel-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.034-1.85-.444-1.294-.537-2.13-1.849-2.196-1.936-.064-.087-.521-.692-.521-1.319 0-.626.326-.935.443-1.062.116-.127.255-.159.34-.159.085 0 .17.001.244.005.078.004.183-.029.287.218.106.254.361.88.393.945.032.064.053.14.01.223-.042.085-.064.138-.127.212-.064.074-.134.165-.192.222-.063.064-.13.133-.056.26.074.127.329.544.706.88.486.433.896.568 1.023.632.127.063.201.053.276-.032.074-.085.318-.371.403-.498.085-.127.17-.106.286-.064.116.043.742.35.869.414.127.064.212.095.244.148.031.053.031.307-.113.712z"/>
              </svg>
              <span>${cT.channelsDirectBtn}</span>
            </a>
          </div>
        </article>
      `;
    }).join("");
  }
}

/**
 * -------------------------------------------------------------
 * 4. RENDER SHOWROOMS & BOOKING FORM LABELS
 * -------------------------------------------------------------
 */
function renderShowroomsAndBooking() {
  const lang = PageState.currentLang;
  const cT = i18nData[lang].contactPage;
  const showrooms = contactData.showrooms;

  // Section Headers
  const sBadge = document.getElementById("showroom-badge");
  const sTitle = document.getElementById("showroom-title");
  const sSub = document.getElementById("showroom-subtitle");

  if (sBadge) sBadge.textContent = cT.showroomBadge;
  if (sTitle) sTitle.textContent = cT.showroomTitle;
  if (sSub) sSub.textContent = cT.showroomSubtitle;

  // Showrooms List
  const colEl = document.getElementById("showrooms-column");
  if (colEl) {
    colEl.innerHTML = showrooms.map(sh => `
      <article class="showroom-card">
        <div class="showroom-city-header">
          <h3 class="showroom-city-title">${sh.city[lang]}</h3>
          <div class="showroom-complex">${sh.complex}</div>
        </div>
        <p class="showroom-address">${sh.address}</p>

        <ul class="showroom-features-list">
          ${sh.features.map(f => `
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>${f[lang]}</span>
            </li>
          `).join("")}
        </ul>

        <div class="showroom-hours-box">
          <strong>${cT.hoursLabel}</strong> ${sh.hours[lang]}
        </div>
      </article>
    `).join("");
  }

  // Booking Form Labels & Placeholders
  const fBadge = document.getElementById("form-badge");
  const fTitle = document.getElementById("form-title");
  const fSub = document.getElementById("form-subtitle");
  const lName = document.getElementById("label-name");
  const iName = document.getElementById("input-name");
  const lBiz = document.getElementById("label-business");
  const iBiz = document.getElementById("input-business");
  const lShow = document.getElementById("label-showroom");
  const optJkt = document.getElementById("opt-jkt");
  const optSby = document.getElementById("opt-sby");
  const lMach = document.getElementById("label-machine");
  const iMach = document.getElementById("input-machine");
  const lDate = document.getElementById("label-date");
  const lNotes = document.getElementById("label-notes");
  const iNotes = document.getElementById("input-notes");
  const btnSub = document.getElementById("btn-submit-text");

  if (fBadge) fBadge.textContent = cT.bookingCardBadge;
  if (fTitle) fTitle.textContent = cT.bookingCardTitle;
  if (fSub) fSub.textContent = cT.bookingCardSubtitle;
  if (lName) lName.textContent = cT.formNameLabel;
  if (iName) iName.placeholder = cT.formNamePlaceholder;
  if (lBiz) lBiz.textContent = cT.formBusinessLabel;
  if (iBiz) iBiz.placeholder = cT.formBusinessPlaceholder;
  if (lShow) lShow.textContent = cT.formShowroomLabel;
  if (optJkt) optJkt.textContent = cT.formShowroomJkt;
  if (optSby) optSby.textContent = cT.formShowroomSby;
  if (lMach) lMach.textContent = cT.formMachineLabel;
  if (iMach) iMach.placeholder = cT.formMachinePlaceholder;
  if (lDate) lDate.textContent = cT.formDateLabel;
  if (lNotes) lNotes.textContent = cT.formNotesLabel;
  if (iNotes) iNotes.placeholder = cT.formNotesPlaceholder;
  if (btnSub) btnSub.textContent = cT.formSubmitBtn;
}

/**
 * -------------------------------------------------------------
 * 5. RENDER DYNAMIC ACCORDION FAQ
 * -------------------------------------------------------------
 */
function renderFaqFilters() {
  const lang = PageState.currentLang;
  const categories = contactData.faqCategories;
  const pillsRow = document.getElementById("faq-pills-row");

  if (pillsRow) {
    pillsRow.innerHTML = categories.map(cat => `
      <button type="button" class="faq-pill-btn ${PageState.faqCategory === cat.id ? 'active' : ''}" data-cat="${cat.id}">
        ${cat.label[lang]}
      </button>
    `).join("");
  }
}

function renderFaqAccordion() {
  const lang = PageState.currentLang;
  const cT = i18nData[lang].contactPage;
  const container = document.getElementById("faq-accordion-container");
  const searchInput = document.getElementById("faq-search-input");
  const badgeEl = document.getElementById("faq-badge");
  const titleEl = document.getElementById("faq-title");
  const subtitleEl = document.getElementById("faq-subtitle");

  if (badgeEl) badgeEl.textContent = cT.faqBadge;
  if (titleEl) titleEl.textContent = cT.faqTitle;
  if (subtitleEl) subtitleEl.textContent = cT.faqSubtitle;
  if (searchInput) searchInput.placeholder = cT.faqSearchPlaceholder;

  if (!container) return;

  // Filter items by category & search term
  const query = PageState.faqSearch.trim().toLowerCase();
  const filteredFaqs = contactData.faqs.filter(faq => {
    const matchCategory = PageState.faqCategory === "all" || faq.category === PageState.faqCategory;
    if (!matchCategory) return false;

    if (!query) return true;
    const qText = faq.q[lang].toLowerCase();
    const aText = faq.a[lang].toLowerCase();
    return qText.includes(query) || aText.includes(query);
  });

  if (filteredFaqs.length === 0) {
    container.innerHTML = `
      <div class="faq-empty-state">
        <p style="margin-bottom: 15px;">${cT.faqEmptyText}</p>
        <button type="button" class="btn btn-ghost btn-sm" id="btn-reset-faq">
          ${cT.faqResetBtn}
        </button>
      </div>
    `;
    const resetBtn = document.getElementById("btn-reset-faq");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        PageState.faqCategory = "all";
        PageState.faqSearch = "";
        if (searchInput) searchInput.value = "";
        renderFaqFilters();
        renderFaqAccordion();
      });
    }
    return;
  }

  container.innerHTML = filteredFaqs.map(faq => {
    const isOpen = PageState.openFaqId === faq.id;
    return `
      <div class="faq-accordion-item ${isOpen ? 'open' : ''}" data-faq-id="${faq.id}">
        <button type="button" class="faq-accordion-header" aria-expanded="${isOpen}">
          <span class="faq-question-text">${faq.q[lang]}</span>
          <svg class="faq-chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div class="faq-accordion-body">
          <p class="faq-answer-text">${faq.a[lang]}</p>
        </div>
      </div>
    `;
  }).join("");
}

/**
 * -------------------------------------------------------------
 * 6. RENDER CTA BANNER & FOOTER
 * -------------------------------------------------------------
 */
function renderCTAAndFooter() {
  const lang = PageState.currentLang;
  const cT = i18nData[lang].contactPage;

  setSafeText("cta-badge", cT.ctaBadge);
  setSafeText("cta-title", cT.ctaTitle);
  setSafeText("cta-desc", cT.ctaDesc);
  setSafeText("cta-wa-text", cT.ctaWaBtn);
  setSafeText("cta-catalog-text", cT.ctaCatalogBtn);

  const ctaMsg = lang === "id"
    ? "Halo Tim Sales Engineer Relasi Sukses, saya memiliki beberapa pertanyaan seputar mesin industri dan ingin berkonsultasi lebih lanjut."
    : "Hello Relasi Sukses Sales Engineers, I have questions regarding industrial machinery and would like to consult further.";
  setSafeHref("cta-wa-btn", createWhatsAppUrl(companyData.whatsapp.number, ctaMsg));

  // Shared standardized footer
  renderSharedFooter(lang, i18nData);
}

/**
 * Master Render
 */
function renderAll() {
  renderHeaderAndNav();
  renderHero();
  renderChannels();
  renderShowroomsAndBooking();
  renderFaqFilters();
  renderFaqAccordion();
  renderCTAAndFooter();
}

/**
 * Initialization & Event Delegations
 */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Language Toggle
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.dataset.lang;
      if (selected !== PageState.currentLang) {
        PageState.currentLang = selected;
        setCurrentLanguage(selected);
        renderAll();
      }
    });
  });

  // 2. FAQ Accordion Click Delegation
  const accordionContainer = document.getElementById("faq-accordion-container");
  if (accordionContainer) {
    accordionContainer.addEventListener("click", (e) => {
      const headerBtn = e.target.closest(".faq-accordion-header");
      if (!headerBtn) return;

      const item = headerBtn.closest(".faq-accordion-item");
      const faqId = item.dataset.faqId;

      if (PageState.openFaqId === faqId) {
        // Close if already open
        PageState.openFaqId = null;
        item.classList.remove("open");
        headerBtn.setAttribute("aria-expanded", "false");
      } else {
        // Close previously open item
        const previousOpen = accordionContainer.querySelector(".faq-accordion-item.open");
        if (previousOpen) {
          previousOpen.classList.remove("open");
          const prevBtn = previousOpen.querySelector(".faq-accordion-header");
          if (prevBtn) prevBtn.setAttribute("aria-expanded", "false");
        }
        // Open target item
        PageState.openFaqId = faqId;
        item.classList.add("open");
        headerBtn.setAttribute("aria-expanded", "true");
      }
    });
  }

  // 3. FAQ Category Filter Pills Delegation
  const pillsContainer = document.getElementById("faq-pills-row");
  if (pillsContainer) {
    pillsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".faq-pill-btn");
      if (btn && btn.dataset.cat) {
        PageState.faqCategory = btn.dataset.cat;
        renderFaqFilters();
        renderFaqAccordion();
      }
    });
  }

  // 4. FAQ Live Search Input
  const searchInput = document.getElementById("faq-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      PageState.faqSearch = e.target.value;
      renderFaqAccordion();
    });
  }

  // 5. Showroom Booking Form Submission to WhatsApp
  const bookingForm = document.getElementById("showroom-booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const lang = PageState.currentLang;
      const name = document.getElementById("input-name").value.trim();
      const business = document.getElementById("input-business").value.trim();
      const showroom = document.getElementById("select-showroom").value;
      const machine = document.getElementById("input-machine").value.trim();
      const date = document.getElementById("input-date").value;
      const notes = document.getElementById("input-notes").value.trim() || "-";

      const formattedDate = date ? new Date(date).toLocaleDateString(lang === "id" ? "id-ID" : "en-US", {
        weekday: "long", year: "numeric", month: "long", day: "numeric"
      }) : "-";

      const bookingMsg = lang === "id"
        ? `*FORMULIR RESERVASI SHOWROOM & UJI RESEP RELASI SUKSES*\n\n` +
          `• Nama: ${name}\n` +
          `• Usaha: ${business}\n` +
          `• Lokasi Showroom: ${showroom}\n` +
          `• Mesin yang Ingin Dicoba: ${machine}\n` +
          `• Rencana Tanggal: ${formattedDate}\n` +
          `• Catatan Bahan/Resep: ${notes}\n\n` +
          `Mohon konfirmasi ketersediaan unit demo dan jadwal kunjungan kami. Terima kasih!`
        : `*RELASI SUKSES SHOWROOM & RECIPE TRIAL BOOKING FORM*\n\n` +
          `• Name: ${name}\n` +
          `• Business: ${business}\n` +
          `• Showroom Hub: ${showroom}\n` +
          `• Target Machine: ${machine}\n` +
          `• Date: ${formattedDate}\n` +
          `• Recipe Notes: ${notes}\n\n` +
          `Please confirm demo machine availability and visit slot. Thank you!`;

      const targetWaUrl = createWhatsAppUrl(companyData.whatsapp.number, bookingMsg);
      window.open(targetWaUrl, "_blank");
    });
  }

  // Run Initial Render
  renderAll();
});
