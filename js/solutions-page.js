/**
 * RELASI SUKSES (relasisukses.co.id) - Solutions & Production Simulator Controller
 * Clean Code Architecture: Reactive Calculator Engine, i18n Re-rendering & Consultative WhatsApp Routing
 */

import { solutionsData } from "./data/solutions.js?v=5";
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

// Page & Calculator Reactive State
const PageState = {
  currentLang: getCurrentLanguage(),
  calcSector: "bakery",
  calcScale: "umkm",
  calcPhase: "220V"
};

// Icons Map for Lifecycle & Calculator using Remix Icon glyphs
const iconsMap = {
  audit: `<i class="ri-file-search-line"></i>`,
  testRun: `<i class="ri-flask-line"></i>`,
  installation: `<i class="ri-tools-line"></i>`,
  support: `<i class="ri-shield-check-line"></i>`
};

/**
 * Builds WhatsApp URLs with custom pre-filled texts
 */
function createWhatsAppUrl(message) {
  const phone = companyData.whatsapp.number;
  const encodedText = encodeURIComponent(message || companyData.whatsapp.defaultMessage[PageState.currentLang]);
  return `https://wa.me/${phone}?text=${encodedText}`;
}

/**
 * -------------------------------------------------------------
 * 1. RENDER HEADER, BREADCRUMBS & NAVIGATION
 * -------------------------------------------------------------
 */
function renderHeaderAndNav() {
  const lang = PageState.currentLang;
  const t = i18nData[lang];
  const solT = t.solutionsPage;

  renderSharedHeader(lang, i18nData);
  updateWhatsAppWidgetLang(lang);

  // Breadcrumbs
  setSafeText("bc-home", solT.breadcrumbHome);
  setSafeText("bc-current", solT.breadcrumbSolutions);
}

/**
 * -------------------------------------------------------------
 * 2. RENDER HERO SECTION
 * -------------------------------------------------------------
 */
function renderHero() {
  const lang = PageState.currentLang;
  const solT = i18nData[lang].solutionsPage;

  const badgeEl = document.getElementById("hero-badge");
  const titleEl = document.getElementById("hero-title");
  const leadEl = document.getElementById("hero-lead");
  const auditBtnText = document.getElementById("hero-cta-audit-text");
  const waBtn = document.getElementById("hero-cta-wa");
  const waBtnText = document.getElementById("hero-cta-wa-text");

  if (badgeEl) badgeEl.textContent = solT.heroBadge;
  if (titleEl) titleEl.textContent = solT.heroTitle;
  if (leadEl) leadEl.textContent = solT.heroLead;
  if (auditBtnText) auditBtnText.textContent = solT.heroCtaAudit;
  if (waBtnText) waBtnText.textContent = solT.heroCtaWa;

  const heroWaMsg = lang === "id"
    ? "Halo Tim Sales Engineer Relasi Sukses, saya ingin berdiskusi mengenai audit alur produksi dan kesiapan daya listrik tempat usaha saya. Mohon infonya."
    : "Hello Relasi Sukses Sales Engineering Team, I would like to consult about workflow audits and electrical readiness for my food production facility.";
  if (waBtn) waBtn.href = createWhatsAppUrl(heroWaMsg);
}

/**
 * -------------------------------------------------------------
 * 3. RENDER 4-STAGE PARTNERSHIP LIFECYCLE
 * -------------------------------------------------------------
 */
function renderLifecycle() {
  const lang = PageState.currentLang;
  const solT = i18nData[lang].solutionsPage;
  const stages = solutionsData.lifecycleStages;

  const badgeEl = document.getElementById("lifecycle-badge");
  const titleEl = document.getElementById("lifecycle-title");
  const subtitleEl = document.getElementById("lifecycle-subtitle");
  const gridEl = document.getElementById("lifecycle-grid");

  if (badgeEl) badgeEl.textContent = solT.lifecycleBadge;
  if (titleEl) titleEl.textContent = solT.lifecycleTitle;
  if (subtitleEl) subtitleEl.textContent = solT.lifecycleSubtitle;

  if (gridEl) {
    gridEl.innerHTML = stages.map(st => {
      const iconSvg = iconsMap[st.icon] || iconsMap.audit;
      return `
        <article class="lifecycle-card">
          <div>
            <div class="lifecycle-card-header">
              <span class="lifecycle-step-num">${st.stepNumber}</span>
              <span class="lifecycle-phase-badge">${typeof st.badge === 'object' ? st.badge[lang] : st.badge}</span>
            </div>
            <div class="lifecycle-icon-wrap" aria-hidden="true">${iconSvg}</div>
            <h3 class="lifecycle-title">${st.title[lang]}</h3>
            <div class="lifecycle-tagline">${st.tagline[lang]}</div>
            <p class="lifecycle-desc">${st.desc[lang]}</p>
          </div>
          <div class="lifecycle-deliverable-box">
            <span class="lifecycle-deliverable-label">${solT.deliverableLabel}</span>
            <div class="lifecycle-deliverable-text">${st.keyDeliverable[lang]}</div>
          </div>
        </article>
      `;
    }).join("");
  }
}

/**
 * -------------------------------------------------------------
 * 4. RENDER & UPDATE INTERACTIVE CALCULATOR
 * -------------------------------------------------------------
 */
function renderCalculatorControls() {
  const lang = PageState.currentLang;
  const solT = i18nData[lang].solutionsPage;
  const rules = solutionsData.calculatorRules;

  // Labels
  const badgeEl = document.getElementById("calc-badge");
  const titleEl = document.getElementById("calc-title");
  const subtitleEl = document.getElementById("calc-subtitle");
  const indLabel = document.getElementById("calc-industry-label");
  const scaleLabel = document.getElementById("calc-scale-label");
  const powerLabel = document.getElementById("calc-power-label");
  const btn220 = document.getElementById("btn-power-220");
  const btn380 = document.getElementById("btn-power-380");

  if (badgeEl) badgeEl.textContent = solT.calcBadge;
  if (titleEl) titleEl.textContent = solT.calcTitle;
  if (subtitleEl) subtitleEl.textContent = solT.calcSubtitle;
  if (indLabel) indLabel.textContent = solT.calcIndustryLabel;
  if (scaleLabel) scaleLabel.textContent = solT.calcScaleLabel;
  if (powerLabel) powerLabel.textContent = solT.calcPowerLabel;
  if (btn220) btn220.textContent = solT.calcPower220;
  if (btn380) btn380.textContent = solT.calcPower380;

  // Update Power Buttons visual state
  if (btn220) btn220.classList.toggle("active", PageState.calcPhase === "220V");
  if (btn380) btn380.classList.toggle("active", PageState.calcPhase === "380V");

  // Render Sector Pills
  const pillsWrap = document.getElementById("calc-sector-pills");
  if (pillsWrap) {
    pillsWrap.innerHTML = rules.sectors.map(sec => `
      <button type="button" class="calc-sector-btn ${PageState.calcSector === sec.id ? 'active' : ''}" data-sector="${sec.id}">
        ${sec.title[lang]}
      </button>
    `).join("");
  }

  // Render Scale Radio Options
  const scaleWrap = document.getElementById("calc-scale-options");
  if (scaleWrap) {
    const currentSectorData = rules.sectors.find(s => s.id === PageState.calcSector) || rules.sectors[0];
    const scales = currentSectorData.scales;

    scaleWrap.innerHTML = `
      <div class="calc-scale-radio-card ${PageState.calcScale === 'umkm' ? 'active' : ''}" data-scale="umkm">
        <div>
          <div class="calc-scale-title">${solT.calcScaleUmkm}</div>
          <div class="calc-scale-sub">${scales.umkm.outputLabel[lang]}</div>
        </div>
        <span class="badge-tag badge-gold">${lang === 'id' ? '1-2 Operator' : '1-2 Operators'}</span>
      </div>
      <div class="calc-scale-radio-card ${PageState.calcScale === 'medium' ? 'active' : ''}" data-scale="medium">
        <div>
          <div class="calc-scale-title">${solT.calcScaleMedium}</div>
          <div class="calc-scale-sub">${scales.medium.outputLabel[lang]}</div>
        </div>
        <span class="badge-tag badge-blue">${lang === 'id' ? '3-5 Operator' : '3-5 Operators'}</span>
      </div>
      <div class="calc-scale-radio-card ${PageState.calcScale === 'factory' ? 'active' : ''}" data-scale="factory">
        <div>
          <div class="calc-scale-title">${solT.calcScaleFactory}</div>
          <div class="calc-scale-sub">${scales.factory.outputLabel[lang]}</div>
        </div>
        <span class="badge-tag badge-green">${lang === 'id' ? 'Lini Otomatis' : 'Automated Line'}</span>
      </div>
    `;
  }
}

/**
 * Calculates and updates the Live Blueprint Result Card
 */
function updateCalculatorResult() {
  const lang = PageState.currentLang;
  const solT = i18nData[lang].solutionsPage;
  const rules = solutionsData.calculatorRules;

  const currentSector = rules.sectors.find(s => s.id === PageState.calcSector) || rules.sectors[0];
  const scaleData = currentSector.scales[PageState.calcScale] || currentSector.scales.umkm;

  // Metric Elements
  const headerEl = document.getElementById("calc-result-header");
  const statusBadge = document.getElementById("calc-status-badge");
  const powerVal = document.getElementById("metric-power-val");
  const powerLbl = document.getElementById("metric-power-lbl");
  const laborVal = document.getElementById("metric-labor-val");
  const laborLbl = document.getElementById("metric-labor-lbl");
  const boostVal = document.getElementById("metric-boost-val");
  const boostLbl = document.getElementById("metric-boost-lbl");
  const packTitle = document.getElementById("calc-package-title");
  const machineList = document.getElementById("calc-machine-list");
  const alertBox = document.getElementById("calc-advisory-alert");
  const waDiscussBtn = document.getElementById("calc-wa-discuss-btn");
  const waDiscussText = document.getElementById("calc-wa-discuss-text");

  if (headerEl) headerEl.textContent = solT.calcResultHeader;
  if (powerLbl) powerLbl.textContent = solT.calcResultPowerEst;
  if (laborLbl) laborLbl.textContent = solT.calcResultLaborSaving;
  if (boostLbl) boostLbl.textContent = solT.calcResultCapacityBoost;
  if (packTitle) packTitle.textContent = solT.calcResultPackTitle;
  if (waDiscussText) waDiscussText.textContent = solT.calcWaDiscussBtn;

  if (powerVal) powerVal.textContent = `${scaleData.totalPowerKw} kW`;
  if (laborVal) laborVal.textContent = scaleData.laborReductionPct;
  if (boostVal) boostVal.textContent = scaleData.batchOutputBoost;

  // Render Machine Combination
  if (machineList) {
    machineList.innerHTML = scaleData.recommendedMachines.map(m => `
      <li class="calc-machine-item">
        <span class="calc-machine-name">${m.name}</span>
        <span class="calc-machine-power">${m.power}</span>
      </li>
    `).join("");
  }

  // Compatibility & Electrical Advisory Logic
  const is220VSelected = PageState.calcPhase === "220V";
  const isScaleFactory = PageState.calcScale === "factory";

  if (isScaleFactory && is220VSelected) {
    // Advisory Warning: Industrial capacity on 220V
    if (statusBadge) {
      statusBadge.className = "calc-status-badge calc-status-advisory";
      statusBadge.textContent = lang === "id" ? "Perlu Konsultasi Inverter / 380V" : "Inverter / 380V Advisory";
    }
    if (alertBox) {
      alertBox.style.display = "block";
      alertBox.innerHTML = `
        <div style="font-weight: 700; color: var(--accent-gold); margin-bottom: 4px;">
          ⚠ ${solT.calcResultEngineeringTitle}
        </div>
        <p>${solT.calcResultAlert220}</p>
        <div style="margin-top: 6px; font-style: italic; color: var(--text-muted); font-size: 0.75rem;">
          ${scaleData.engineeringNote[lang]}
        </div>
      `;
    }
  } else {
    // Compatible
    if (statusBadge) {
      statusBadge.className = "calc-status-badge calc-status-compatible";
      statusBadge.textContent = lang === "id" ? "Kelistrikan Kompatibel" : "Power Compatible";
    }
    if (alertBox) {
      alertBox.style.display = "block";
      const statusNote = is220VSelected ? solT.calcResultOk220 : solT.calcResultOk380;
      alertBox.innerHTML = `
        <div style="font-weight: 700; color: var(--accent-green-bright); margin-bottom: 4px;">
          ✓ ${solT.calcResultEngineeringTitle}
        </div>
        <p>${statusNote}</p>
        <div style="margin-top: 6px; font-style: italic; color: var(--text-muted); font-size: 0.75rem;">
          ${scaleData.engineeringNote[lang]}
        </div>
      `;
    }
  }

  // Pre-filled WhatsApp link with the current calculator parameters
  const sectorName = currentSector.title[lang];
  const scaleName = PageState.calcScale.toUpperCase();
  const waMsg = lang === "id"
    ? `Halo Tim Sales Engineer Relasi Sukses, saya telah menggunakan simulator kapasitas untuk sektor *${sectorName}* (Skala: ${scaleName}, Sumber Listrik: ${PageState.calcPhase}, Total Daya: ${scaleData.totalPowerKw} kW). Saya ingin mendiskusikan rekomendasi mesin dan audit layout dapur ini.`
    : `Hello Relasi Sukses Sales Engineers, I tested your capacity simulator for *${sectorName}* (Scale: ${scaleName}, Power: ${PageState.calcPhase}, Est. Load: ${scaleData.totalPowerKw} kW). I would like to discuss this machinery configuration and arrange an on-site audit.`;

  if (waDiscussBtn) waDiscussBtn.href = createWhatsAppUrl(waMsg);
}

/**
 * -------------------------------------------------------------
 * 5. RENDER WARRANTY & SLA SECTION
 * -------------------------------------------------------------
 */
function renderWarranty() {
  const lang = PageState.currentLang;
  const solT = i18nData[lang].solutionsPage;
  const plans = solutionsData.protectionPlans;

  const badgeEl = document.getElementById("warranty-badge");
  const titleEl = document.getElementById("warranty-title");
  const subtitleEl = document.getElementById("warranty-subtitle");
  const gridEl = document.getElementById("warranty-grid");

  if (badgeEl) badgeEl.textContent = solT.warrantyBadge;
  if (titleEl) titleEl.textContent = solT.warrantyTitle;
  if (subtitleEl) subtitleEl.textContent = solT.warrantySubtitle;

  if (gridEl) {
    gridEl.innerHTML = plans.map(p => `
      <article class="warranty-card">
        <div>
          <span class="warranty-badge-pill">${typeof p.badge === 'object' ? p.badge[lang] : p.badge}</span>
          <h3 class="warranty-title">${p.title[lang]}</h3>
          <p class="warranty-coverage">${p.coverage[lang]}</p>
        </div>
        <div class="warranty-highlight-box">
          <i class="ri-check-line" style="color: var(--accent-gold); font-size: 1rem; margin-right: 4px;"></i>
          <span>${p.highlight[lang]}</span>
        </div>
      </article>
    `).join("");
  }
}

/**
 * -------------------------------------------------------------
 * 6. RENDER CTA BANNER & FOOTER
 * -------------------------------------------------------------
 */
function renderCTAAndFooter() {
  const lang = PageState.currentLang;
  const solT = i18nData[lang].solutionsPage;

  // CTA
  setSafeText("cta-badge", solT.ctaBadge);
  setSafeText("cta-title", solT.ctaTitle);
  setSafeText("cta-desc", solT.ctaDesc);
  setSafeText("cta-wa-text", solT.ctaWaBtn);
  setSafeText("cta-catalog-text", solT.ctaCatalogBtn);

  const ctaMsg = lang === "id"
    ? "Halo Tim Relasi Sukses, saya tertarik berkonsultasi mengenai kesiapan daya listrik dan audit layout dapur usaha saya. Mohon arahannya."
    : "Hello Relasi Sukses Team, I am interested in consulting about our facility's electrical readiness and kitchen workflow layout.";
  setSafeHref("cta-wa-btn", createWhatsAppUrl(ctaMsg));

  // Shared standardized footer
  renderSharedFooter(lang, i18nData);
}

/**
 * Master Render
 */
function renderAll() {
  renderHeaderAndNav();
  renderHero();
  renderLifecycle();
  renderCalculatorControls();
  updateCalculatorResult();
  renderWarranty();
  renderCTAAndFooter();
}

/**
 * Initialization & Event Listeners
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

  // 2. Calculator Sector Delegation
  const sectorContainer = document.getElementById("calc-sector-pills");
  if (sectorContainer) {
    sectorContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".calc-sector-btn");
      if (btn && btn.dataset.sector) {
        PageState.calcSector = btn.dataset.sector;
        renderCalculatorControls();
        updateCalculatorResult();
      }
    });
  }

  // 3. Calculator Scale Delegation
  const scaleContainer = document.getElementById("calc-scale-options");
  if (scaleContainer) {
    scaleContainer.addEventListener("click", (e) => {
      const card = e.target.closest(".calc-scale-radio-card");
      if (card && card.dataset.scale) {
        PageState.calcScale = card.dataset.scale;
        renderCalculatorControls();
        updateCalculatorResult();
      }
    });
  }

  // 4. Calculator Power Switches
  const btn220 = document.getElementById("btn-power-220");
  const btn380 = document.getElementById("btn-power-380");

  if (btn220) {
    btn220.addEventListener("click", () => {
      PageState.calcPhase = "220V";
      renderCalculatorControls();
      updateCalculatorResult();
    });
  }

  if (btn380) {
    btn380.addEventListener("click", () => {
      PageState.calcPhase = "380V";
      renderCalculatorControls();
      updateCalculatorResult();
    });
  }

  // Run Initial Render
  renderAll();
});
