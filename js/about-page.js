/**
 * RELASI SUKSES (relasisukses.co.id) - About Us & Partnership Philosophy Page Controller
 * Clean Code Architecture: Reactive State, i18n Re-rendering, Specialist WhatsApp Routing
 * Standards: Utilitarian Industrial High-Craft, Marketing 5.0 (Human-Centered Automation)
 */

import { aboutData } from "./data/about.js?v=4";
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
  currentLang: getCurrentLanguage()
};

// SVG Icons for 4 Pillars
const pillarIcons = {
  audit: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2"></rect>
      <line x1="8" y1="6" x2="16" y2="6"></line>
      <line x1="16" y1="14" x2="16" y2="18"></line>
      <path d="M16 10h.01"></path>
      <path d="M12 10h.01"></path>
      <path d="M8 10h.01"></path>
      <path d="M12 14h.01"></path>
      <path d="M8 14h.01"></path>
      <path d="M12 18h.01"></path>
      <path d="M8 18h.01"></path>
    </svg>
  `,
  testKitchen: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4.5 3h15M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"></path>
      <path d="M6 14h12"></path>
      <path d="M10 9a2 2 0 1 0 4 0"></path>
    </svg>
  `,
  zeroDowntime: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      <path d="m9 12 2 2 4-4"></path>
    </svg>
  `,
  training: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `
};

/**
 * Helper to build tailored WhatsApp Links
 */
function createWhatsAppUrl(phone, message) {
  const cleanPhone = phone || companyData.whatsapp.number;
  const encodedText = encodeURIComponent(message || companyData.whatsapp.defaultMessage[PageState.currentLang]);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

/**
 * -------------------------------------------------------------
 * 1. RENDER HEADER, BREADCRUMBS & GLOBAL NAVIGATION
 * -------------------------------------------------------------
 */
function renderHeaderAndNav() {
  const lang = PageState.currentLang;
  const t = i18nData[lang];
  const aboutT = t.aboutPage;

  renderSharedHeader(lang, i18nData);
  updateWhatsAppWidgetLang(lang);

  // Breadcrumbs
  setSafeText("bc-home", aboutT.breadcrumbHome);
  setSafeText("bc-current", aboutT.breadcrumbAbout);
}

/**
 * -------------------------------------------------------------
 * 2. RENDER HERO MANIFESTO (MARKETING 5.0)
 * -------------------------------------------------------------
 */
function renderHeroManifesto() {
  const lang = PageState.currentLang;
  const manifesto = aboutData.manifesto;
  const t = i18nData[lang].aboutPage;

  const badgeEl = document.getElementById("manifesto-badge");
  const titleEl = document.getElementById("manifesto-title");
  const leadEl = document.getElementById("manifesto-lead");
  const statsContainer = document.getElementById("manifesto-stats-grid");

  if (badgeEl) badgeEl.textContent = t.heroBadge;
  if (titleEl) titleEl.textContent = manifesto.title[lang];
  if (leadEl) leadEl.textContent = manifesto.lead[lang];

  if (statsContainer) {
    statsContainer.innerHTML = manifesto.stats.map(st => {
      const labelText = typeof st.label === "object" ? st.label[lang] : st.label;
      return `
        <div class="about-stat-item">
          <span class="about-stat-num">${st.value}</span>
          <span class="about-stat-label">${labelText}</span>
        </div>
      `;
    }).join("");
  }
}

/**
 * -------------------------------------------------------------
 * 3. RENDER 4 PILLARS OF PARTNERSHIP
 * -------------------------------------------------------------
 */
function renderPillars() {
  const lang = PageState.currentLang;
  const t = i18nData[lang].aboutPage;
  const pillars = aboutData.partnershipPillars;

  const badgeEl = document.getElementById("pillars-badge");
  const titleEl = document.getElementById("pillars-title");
  const gridEl = document.getElementById("pillars-grid");

  if (badgeEl) badgeEl.textContent = t.pillarsBadge;
  if (titleEl) titleEl.textContent = t.pillarsTitle;

  if (gridEl) {
    gridEl.innerHTML = pillars.map(pillar => {
      const iconSvg = pillarIcons[pillar.icon] || pillarIcons.audit;
      return `
        <article class="pillar-card">
          <div class="pillar-icon-wrap" aria-hidden="true">
            ${iconSvg}
          </div>
          <h3 class="pillar-title">${pillar.title[lang]}</h3>
          <p class="pillar-desc">${pillar.desc[lang]}</p>
        </article>
      `;
    }).join("");
  }
}

/**
 * -------------------------------------------------------------
 * 4. RENDER INTERACTIVE SPECIALIST DIRECTORY (DIREKTORI AHLI)
 * -------------------------------------------------------------
 */
function renderSpecialists() {
  const lang = PageState.currentLang;
  const t = i18nData[lang].aboutPage;
  const specialists = aboutData.specialists;

  const badgeEl = document.getElementById("specialists-badge");
  const titleEl = document.getElementById("specialists-title");
  const subtitleEl = document.getElementById("specialists-subtitle");
  const gridEl = document.getElementById("specialists-grid");

  if (badgeEl) badgeEl.textContent = t.specialistsBadge;
  if (titleEl) titleEl.textContent = t.specialistsTitle;
  if (subtitleEl) subtitleEl.textContent = t.specialistsSubtitle;

  if (gridEl) {
    gridEl.innerHTML = specialists.map(spec => {
      const expText = lang === "id" ? spec.experience : spec.experienceEn;
      const waUrl = createWhatsAppUrl(spec.waPhone, spec.waPreFill[lang]);
      const specLabel = lang === "id" ? "Spesialisasi Alat:" : "Specialized In:";

      return `
        <article class="specialist-card" data-spec-id="${spec.id}">
          <div>
            <div class="spec-header-row">
              <div class="spec-avatar-badge">
                <div class="spec-avatar-circle">
                  ${spec.avatarInitials}
                  <span class="spec-online-dot" title="${t.specialistStatusText}"></span>
                </div>
                <div>
                  <h3 class="spec-name">${spec.name}</h3>
                  <div class="spec-role">${spec.role[lang]}</div>
                </div>
              </div>
              <span class="spec-experience-pill">${expText}</span>
            </div>

            <div class="spec-box-specialization">
              <div class="spec-spec-label">${specLabel}</div>
              <div class="spec-spec-value">${spec.specialization[lang]}</div>
            </div>

            <div class="spec-track-record">
              "${spec.trackRecord[lang]}"
            </div>
          </div>

          <div>
            <a href="${waUrl}" target="_blank" rel="noopener" class="spec-action-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.034-1.85-.444-1.294-.537-2.13-1.849-2.196-1.936-.064-.087-.521-.692-.521-1.319 0-.626.326-.935.443-1.062.116-.127.255-.159.34-.159.085 0 .17.001.244.005.078.004.183-.029.287.218.106.254.361.88.393.945.032.064.053.14.01.223-.042.085-.064.138-.127.212-.064.074-.134.165-.192.222-.063.064-.13.133-.056.26.074.127.329.544.706.88.486.433.896.568 1.023.632.127.063.201.053.276-.032.074-.085.318-.371.403-.498.085-.127.17-.106.286-.064.116.043.742.35.869.414.127.064.212.095.244.148.031.053.031.307-.113.712z"/>
              </svg>
              <span>${t.specialistBtnText}</span>
            </a>
          </div>
        </article>
      `;
    }).join("");
  }
}

/**
 * -------------------------------------------------------------
 * 4.5 RENDER WHY US / PARTNER SUCCESS STORIES & TESTIMONIALS
 * -------------------------------------------------------------
 */
function renderWhyUs() {
  const lang = PageState.currentLang;
  const t = i18nData[lang].aboutPage;
  const testimonials = companyData.testimonials;

  const badgeEl = document.getElementById("whyus-badge");
  const titleEl = document.getElementById("whyus-title");
  const subtitleEl = document.getElementById("whyus-subtitle");
  const gridEl = document.getElementById("whyus-testimonials-grid");

  if (badgeEl) badgeEl.textContent = t.whyusBadge;
  if (titleEl) titleEl.textContent = t.whyusTitle;
  if (subtitleEl) subtitleEl.textContent = t.whyusSubtitle;

  if (gridEl) {
    gridEl.innerHTML = testimonials.map(item => `
      <article class="whyus-testimonial-card">
        <div>
          <div class="whyus-card-stars" aria-label="Rating: 5 Stars">
            ${Array.from({ length: item.rating }).map(() => `
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            `).join("")}
          </div>
          <p class="whyus-card-quote">"${item.quote[lang]}"</p>
        </div>

        <div>
          <div class="whyus-author-row">
            <div class="whyus-author-avatar">${item.avatarInitials}</div>
            <div>
              <div class="whyus-author-name">${item.author}</div>
              <div class="whyus-author-role">${item.role}</div>
              <div class="whyus-author-company">${item.company}</div>
            </div>
          </div>
          <div class="whyus-machine-badge">
            ${lang === "id" ? "Mesin Digunakan:" : "Machine:"} ${item.machineUsed}
          </div>
        </div>
      </article>
    `).join("");
  }
}

/**
 * -------------------------------------------------------------
 * 5. RENDER SHOWROOM & TEST KITCHEN FACILITIES
 * -------------------------------------------------------------
 */
function renderFacilities() {
  const lang = PageState.currentLang;
  const t = i18nData[lang].aboutPage;
  const facilities = aboutData.facilities;

  const badgeEl = document.getElementById("facilities-badge");
  const titleEl = document.getElementById("facilities-title");
  const subtitleEl = document.getElementById("facilities-subtitle");
  const gridEl = document.getElementById("facilities-grid");

  if (badgeEl) badgeEl.textContent = t.facilitiesBadge;
  if (titleEl) titleEl.textContent = t.facilitiesTitle;
  if (subtitleEl) subtitleEl.textContent = t.facilitiesSubtitle;

  if (gridEl) {
    gridEl.innerHTML = facilities.map(fac => {
      const scheduleMsg = lang === "id"
        ? `Halo Tim Relasi Sukses, saya ingin menjadwalkan kunjungan & uji coba resep di fasilitas ${fac.city} (${fac.title[lang]}). Mohon info jadwal yang tersedia.`
        : `Hello Relasi Sukses Team, I would like to schedule a visit & recipe test trial at your ${fac.city} showroom (${fac.title[lang]}). Please advise available slots.`;
      const waUrl = createWhatsAppUrl(companyData.whatsapp.number, scheduleMsg);

      return `
        <article class="facility-card">
          <div class="facility-header">
            <span class="facility-city-badge">${fac.city}</span>
            <h3 class="facility-title">${fac.title[lang]}</h3>
            <p class="facility-addr">${fac.address}</p>
          </div>

          <ul class="facility-features-list">
            ${fac.highlights.map(hl => `
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>${hl[lang]}</span>
              </li>
            `).join("")}
          </ul>

          <div class="facility-hours-box">
            <strong>${lang === "id" ? "Jam Buka:" : "Operating Hours:"}</strong> ${fac.openHours[lang]}
          </div>

          <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-primary" style="width: 100%; justify-content: center; font-size: 0.875rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.034-1.85-.444-1.294-.537-2.13-1.849-2.196-1.936-.064-.087-.521-.692-.521-1.319 0-.626.326-.935.443-1.062.116-.127.255-.159.34-.159.085 0 .17.001.244.005.078.004.183-.029.287.218.106.254.361.88.393.945.032.064.053.14.01.223-.042.085-.064.138-.127.212-.064.074-.134.165-.192.222-.063.064-.13.133-.056.26.074.127.329.544.706.88.486.433.896.568 1.023.632.127.063.201.053.276-.032.074-.085.318-.371.403-.498.085-.127.17-.106.286-.064.116.043.742.35.869.414.127.064.212.095.244.148.031.053.031.307-.113.712z"/>
            </svg>
            <span>${t.facilitiesBookBtn}</span>
          </a>
        </article>
      `;
    }).join("");
  }
}

/**
 * -------------------------------------------------------------
 * 6. RENDER 40-YEAR MILESTONE TIMELINE (1986 - 2026)
 * -------------------------------------------------------------
 */
function renderTimeline() {
  const lang = PageState.currentLang;
  const t = i18nData[lang].aboutPage;
  const milestones = aboutData.milestones;

  const badgeEl = document.getElementById("milestones-badge");
  const titleEl = document.getElementById("milestones-title");
  const trackEl = document.getElementById("timeline-track");

  if (badgeEl) badgeEl.textContent = t.milestonesBadge;
  if (titleEl) titleEl.textContent = t.milestonesTitle;

  if (trackEl) {
    trackEl.innerHTML = milestones.map(m => `
      <div class="timeline-item">
        <div class="timeline-node" aria-hidden="true">
          <div class="timeline-node-inner"></div>
        </div>
        <div class="timeline-content-card">
          <span class="timeline-year">${m.year}</span>
          <h3 class="timeline-milestone-title">${m.title[lang]}</h3>
          <p class="timeline-milestone-desc">${m.desc[lang]}</p>
        </div>
      </div>
    `).join("");
  }
}

/**
 * -------------------------------------------------------------
 * 7. RENDER CTA BANNER (MARKETING 5.0)
 * -------------------------------------------------------------
 */
function renderCTA() {
  const lang = PageState.currentLang;
  const t = i18nData[lang].aboutPage;

  const badgeEl = document.getElementById("cta-badge");
  const titleEl = document.getElementById("cta-title");
  const descEl = document.getElementById("cta-desc");
  const waBtn = document.getElementById("cta-wa-btn");
  const waText = document.getElementById("cta-wa-text");
  const catalogBtn = document.getElementById("cta-catalog-btn");
  const catalogText = document.getElementById("cta-catalog-text");

  if (badgeEl) badgeEl.textContent = t.ctaBadge;
  if (titleEl) titleEl.textContent = t.ctaTitle;
  if (descEl) descEl.textContent = t.ctaDesc;

  const ctaMsg = lang === "id"
    ? "Halo Tim Sales Engineer Relasi Sukses, saya tertarik menjadwalkan uji coba resep adonan di showroom Relasi Sukses. Mohon arahan waktu dan persiapan bahannya."
    : "Hello Relasi Sukses Sales Engineers, I am interested in booking a recipe test run at your showroom. Please guide me on preparation and schedule.";

  if (waBtn) waBtn.href = createWhatsAppUrl(companyData.whatsapp.number, ctaMsg);
  if (waText) waText.textContent = t.ctaWaBtn;
  if (catalogText) catalogText.textContent = t.ctaCatalogBtn;
}

/**
 * -------------------------------------------------------------
 * 8. RENDER FOOTER I18N
 * -------------------------------------------------------------
 */
function renderFooter() {
  const lang = PageState.currentLang;
  renderSharedFooter(lang, i18nData);
}

/**
 * Master Render for all page sections
 */
function renderAll() {
  renderHeaderAndNav();
  renderHeroManifesto();
  renderPillars();
  renderSpecialists();
  renderWhyUs();
  renderFacilities();
  renderTimeline();
  renderCTA();
  renderFooter();
}

/**
 * Initialization & Event Listeners
 */
document.addEventListener("DOMContentLoaded", () => {
  // Language Switcher handler
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

  // Run initial render
  renderAll();
});
