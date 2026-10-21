/**
 * RELASI SUKSES (relasisukses.co.id) - About Us & Partnership Philosophy Page Controller
 * Clean Code Architecture: Reactive State, i18n Re-rendering, Specialist WhatsApp Routing
 * Standards: Utilitarian Industrial High-Craft, Marketing 5.0 (Human-Centered Automation)
 */

import { aboutData } from "./data/about.js?v=5";
import { i18nData } from "./data/i18n.js?v=5";
import { companyData } from "./data/company.js?v=5";
import { buildWhatsAppLink } from "./utils/whatsapp.js?v=5";
import { 
  getCurrentLanguage, 
  setCurrentLanguage, 
  setSafeText, 
  setSafeHtml, 
  setSafePlaceholder, 
  setSafeHref, 
  renderSharedHeader, 
  renderSharedFooter 
} from "./utils/dom.js?v=5";
import { updateWhatsAppWidgetLang } from "./components/whatsapp-widget.js?v=5";

// Page State
const PageState = {
  currentLang: getCurrentLanguage()
};

// Icons for 4 Pillars using Remix Icon glyphs
const pillarIcons = {
  audit: `<i class="ri-survey-line"></i>`,
  testKitchen: `<i class="ri-flask-line"></i>`,
  zeroDowntime: `<i class="ri-shield-check-line"></i>`,
  training: `<i class="ri-group-line"></i>`
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
              <i class="ri-whatsapp-fill"></i>
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
              <i class="ri-star-fill" style="color: var(--accent-gold); font-size: 1.1rem; margin-right: 2px;"></i>
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
                <i class="ri-check-line" style="color: var(--accent-gold); font-size: 1rem; margin-right: 4px;"></i>
                <span>${hl[lang]}</span>
              </li>
            `).join("")}
          </ul>

          <div class="facility-hours-box">
            <strong>${lang === "id" ? "Jam Buka:" : "Operating Hours:"}</strong> ${fac.openHours[lang]}
          </div>

          <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-primary" style="width: 100%; justify-content: center; font-size: 0.875rem;">
            <i class="ri-whatsapp-fill"></i>
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
