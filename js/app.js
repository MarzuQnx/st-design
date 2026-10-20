/**
 * RELASI SUKSES (relasisukses.co.id) - Main Application Script
 * Clean Code Architecture: Reactive State, Event Delegations, i18n Management & Canonical WhatsApp Deeplinks
 */

import { i18nData } from "./data/i18n.js?v=4";
import { productsData } from "./data/products.js?v=4";
import { companyData } from "./data/company.js?v=4";
import { machineIcons } from "./data/icons.js?v=4";
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

// Application State
const AppState = {
  currentLang: getCurrentLanguage(),
  selectedCategory: "all",
  selectedScale: "all",
  searchKeyword: "",
  activeModalProduct: null
};

/**
 * Creates dynamic, pre-filled WhatsApp URLs using canonical builder
 * @param {Object|null} product
 * @param {string} intent - 'general' | 'quote' | 'demo'
 */
function createWALink(product = null, intent = "general") {
  return buildWhatsAppLink({
    product,
    intent,
    lang: AppState.currentLang
  });
}

/**
 * Render all static text according to current language
 */
function renderI18n() {
  const lang = AppState.currentLang;
  const t = i18nData[lang];

  // Update WhatsApp widget language
  updateWhatsAppWidgetLang(lang);

  // Render standardized shared header & footer
  renderSharedHeader(lang, i18nData);
  renderSharedFooter(lang, i18nData);

  // Hero Section
  setSafeText("hero-badge-text", t.hero.badge);
  setSafeText("hero-lead-text", t.hero.headlineLead);
  setSafeText("hero-highlight-text", t.hero.headlineHighlight);
  setSafeText("hero-subheadline", t.hero.subheadline);
  setSafeText("hero-cta-primary", t.hero.ctaPrimary);
  setSafeText("hero-cta-secondary", t.hero.ctaSecondary);
  setSafeHref("hero-cta-secondary", createWALink(null, "general"));

  // Hero Blueprint Card
  setSafeText("blueprint-stock-badge", t.blueprint?.badge);
  setSafeText("blueprint-spec-output-lbl", t.blueprint?.outputLabel);
  setSafeText("blueprint-spec-output-val", t.blueprint?.outputVal);
  setSafeText("blueprint-spec-mat-lbl", t.blueprint?.materialLabel);
  setSafeText("blueprint-spec-mat-val", t.blueprint?.materialVal);
  setSafeText("blueprint-free-consult", t.blueprint?.freeConsult);

  // Hero Stats Ribbon
  const statsContainer = document.getElementById("hero-stats-ribbon");
  if (statsContainer) {
    statsContainer.innerHTML = t.hero.stats.map(s => `
      <div class="stat-item">
        <span class="stat-val">${s.value}</span>
        <span class="stat-label">${s.label}</span>
      </div>
    `).join("");
  }

  // Filter Section Titles & Placeholders
  setSafeText("filter-title", t.filter.title);
  setSafeText("filter-subtitle", t.filter.subtitle);
  setSafePlaceholder("search-input", t.filter.searchPlaceholder);

  // Filter Category Buttons
  const catMapping = {
    "all": t.filter.allCategories,
    "catBakery": t.filter.catBakery,
    "catProcessing": t.filter.catProcessing,
    "catPackaging": t.filter.catPackaging,
    "catLines": t.filter.catLines
  };
  for (const [cat, label] of Object.entries(catMapping)) {
    const btn = document.querySelector(`.cat-btn[data-category="${cat}"]`);
    if (btn) btn.textContent = label;
  }

  // Filter Scale Buttons
  const scaleMapping = {
    "all": t.filter.scaleAll,
    "scaleUMKM": t.filter.scaleUMKM,
    "scaleMedium": t.filter.scaleMedium,
    "scaleFactory": t.filter.scaleFactory
  };
  setSafeText("scale-group-label", t.filter.scaleLabel);
  for (const [sc, label] of Object.entries(scaleMapping)) {
    const btn = document.querySelector(`.scale-btn[data-scale="${sc}"]`);
    if (btn) btn.textContent = label;
  }

  // Solutions Section
  setSafeText("solutions-badge", t.solutions.badge);
  setSafeText("solutions-title", t.solutions.title);
  setSafeText("solutions-desc", t.solutions.description);
  renderSolutions();

  // Testimonials Section
  setSafeText("testimonials-badge", t.testimonials.badge);
  setSafeText("testimonials-title", t.testimonials.title);
  setSafeText("testimonials-subtitle", t.testimonials.subtitle);
  renderTestimonials();

  // FAQ Section Header & Accordion List
  setSafeText("faq-section-badge", t.faqSection?.badge);
  setSafeText("faq-section-title", t.faqSection?.title);
  setSafeText("faq-section-subtitle", t.faqSection?.subtitle);
  renderFAQs();

  // CTA Banner
  setSafeText("cta-badge", t.ctaBanner.badge);
  setSafeText("cta-title", t.ctaBanner.title);
  setSafeText("cta-desc", t.ctaBanner.desc);
  const ctaWABtn = document.getElementById("cta-wa-btn");
  if (ctaWABtn) {
    ctaWABtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.034-1.85-.444-1.294-.537-2.13-1.849-2.196-1.936-.064-.087-.521-.692-.521-1.319 0-.626.326-.935.443-1.062.116-.127.255-.159.34-.159.085 0 .17.001.244.005.078.004.183-.029.287.218.106.254.361.88.393.945.032.064.053.14.01.223-.042.085-.064.138-.127.212-.064.074-.134.165-.192.222-.063.064-.13.133-.056.26.074.127.329.544.706.88.486.433.896.568 1.023.632.127.063.201.053.276-.032.074-.085.318-.371.403-.498.085-.127.17-.106.286-.064.116.043.742.35.869.414.127.064.212.095.244.148.031.053.031.307-.113.712z"/>
      </svg>
      <span>${t.ctaBanner.btnWA}</span>
    `;
    ctaWABtn.href = createWALink(null, "general");
  }
  const ctaCatBtn = document.getElementById("cta-catalog-btn");
  if (ctaCatBtn) {
    ctaCatBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
      <span>${t.ctaBanner.btnCatalog}</span>
    `;
  }
  setSafeText("cta-office-hours", t.ctaBanner.officeHours);

  // Floating WhatsApp
  setSafeHref("floating-wa-btn", createWALink(null, "general"));

  // Refresh Product Cards in New Language
  renderProducts();

  // If modal is open, re-render modal content
  if (AppState.activeModalProduct) {
    populateModal(AppState.activeModalProduct);
  }

  // Update Hero Slideshow Caption language
  if (typeof window.__updateHeroSlideCaption === "function") {
    window.__updateHeroSlideCaption();
  }
}

/**
 * Render filtered product cards
 */
function renderProducts() {
  const lang = AppState.currentLang;
  const t = i18nData[lang];
  const grid = document.getElementById("products-showcase-grid");
  const countEl = document.getElementById("filter-count-status");
  if (!grid) return;

  const filtered = productsData.filter(item => {
    // Category match
    const matchCat = AppState.selectedCategory === "all" || item.category === AppState.selectedCategory;
    // Scale match
    const matchScale = AppState.selectedScale === "all" || item.scale === AppState.selectedScale;
    // Search keyword match
    const q = AppState.searchKeyword.toLowerCase().trim();
    const matchSearch = !q || 
      item.title[lang].toLowerCase().includes(q) ||
      item.modelCode.toLowerCase().includes(q) ||
      item.tagline[lang].toLowerCase().includes(q) ||
      item.suitableFor[lang].toLowerCase().includes(q);

    return matchCat && matchScale && matchSearch;
  });

  // Update status count
  if (countEl) {
    countEl.textContent = t.filter.resultCount.replace("{count}", filtered.length);
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: var(--radius-md); box-shadow: var(--shadow-card);">
        <svg style="width: 48px; height: 48px; color: var(--accent-gold); margin: 0 auto 15px auto;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h3 style="color: var(--text-primary); margin-bottom: 8px;">${lang === "id" ? "Mesin Tidak Ditemukan" : "No Machines Found"}</h3>
        <p style="color: var(--text-muted); margin-bottom: 20px;">${lang === "id" ? "Coba ganti kata kunci pencarian atau reset filter skala kapasitas." : "Try adjusting your search query or reset business capacity filters."}</p>
        <button id="reset-filter-btn" class="btn btn-ghost btn-sm" style="display: inline-flex;">${lang === "id" ? "Reset Filter" : "Reset Filters"}</button>
      </div>
    `;
    const resetBtn = document.getElementById("reset-filter-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        AppState.selectedCategory = "all";
        AppState.selectedScale = "all";
        AppState.searchKeyword = "";
        const searchInput = document.getElementById("search-input");
        if (searchInput) searchInput.value = "";
        document.querySelectorAll(".pill-btn").forEach(b => {
          b.classList.toggle("active", b.dataset.category === "all" || b.dataset.scale === "all");
        });
        renderProducts();
      });
    }
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const iconSvg = machineIcons[item.typeIcon] || machineIcons.mixer;
    const waQuoteUrl = createWALink(item, "quote");

    return `
      <article class="product-card" data-id="${item.id}">
        <div>
          <div class="card-top">
            <span class="model-badge">${item.modelCode}</span>
            <span class="badge-tag badge-gold">${item.badge[lang]}</span>
          </div>

          <div class="product-thumbnail-area" style="cursor: pointer;" title="${t.productCard.viewDetail}">
            <div class="art-grid"></div>
            <div class="product-thumb-svg">${iconSvg}</div>
          </div>

          <h3 class="product-title">${item.title[lang]}</h3>
          <p class="product-tagline">${item.tagline[lang]}</p>

          <div class="card-specs-list">
            ${item.specs.slice(0, 3).map(sp => `
              <div class="spec-row">
                <span class="spec-key">${sp.label[lang]}:</span>
                <span class="spec-val">${sp.value}</span>
              </div>
            `).join("")}
          </div>

          <div class="suitable-box">
            <strong>${t.productCard.suitableFor}</strong> 
            <span>${item.suitableFor[lang]}</span>
          </div>
        </div>

        <div>
          <div class="card-actions-row">
            <button class="btn btn-ghost btn-sm btn-open-detail" data-id="${item.id}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              ${t.productCard.viewDetail}
            </button>
            <a href="${waQuoteUrl}" target="_blank" rel="noopener" class="btn btn-wa btn-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.034-1.85-.444-1.294-.537-2.13-1.849-2.196-1.936-.064-.087-.521-.692-.521-1.319 0-.626.326-.935.443-1.062.116-.127.255-.159.34-.159.085 0 .17.001.244.005.078.004.183-.029.287.218.106.254.361.88.393.945.032.064.053.14.01.223-.042.085-.064.138-.127.212-.064.074-.134.165-.192.222-.063.064-.13.133-.056.26.074.127.329.544.706.88.486.433.896.568 1.023.632.127.063.201.053.276-.032.074-.085.318-.371.403-.498.085-.127.17-.106.286-.064.116.043.742.35.869.414.127.064.212.095.244.148.031.053.031.307-.113.712z"/>
              </svg>
              ${t.productCard.ctaQuote}
            </a>
          </div>

          <div class="card-guarantee-note">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            ${t.productCard.guarantee}
          </div>
        </div>
      </article>
    `;
  }).join("");

  // Attach Detail Modal Triggers
  grid.querySelectorAll(".btn-open-detail, .product-thumbnail-area").forEach(el => {
    el.addEventListener("click", (e) => {
      const card = e.currentTarget.closest(".product-card");
      const id = card.dataset.id;
      const product = productsData.find(p => p.id === id);
      if (product) openModal(product);
    });
  });
}

/**
 * Render Solutions Section Cards
 */
function renderSolutions() {
  const lang = AppState.currentLang;
  const cards = i18nData[lang].solutions.cards;
  const container = document.getElementById("solutions-grid");
  if (!container) return;

  const icons = {
    calculator: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="4" y="2" width="16" height="20" rx="2"></rect>
        <line x1="8" y1="6" x2="16" y2="6"></line>
        <line x1="16" y1="14" x2="16" y2="18"></line>
        <path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M8 18h.01M12 18h.01"></path>
      </svg>
    `,
    play: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="10 8 16 12 10 16 10 8" fill="currentColor"></polygon>
      </svg>
    `,
    tools: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    `,
    shield: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
      </svg>
    `
  };

  container.innerHTML = cards.map(c => `
    <div class="solution-card">
      <div class="solution-icon-box">${icons[c.icon]}</div>
      <h3 class="solution-title">${c.title}</h3>
      <p class="solution-desc">${c.desc}</p>
    </div>
  `).join("");
}

/**
 * Render Testimonials
 */
function renderTestimonials() {
  const lang = AppState.currentLang;
  const container = document.getElementById("testimonials-grid");
  if (!container) return;

  container.innerHTML = companyData.testimonials.map(item => `
    <div class="testimonial-card">
      <div>
        <div class="testimonial-stars">
          ${Array(item.rating).fill(`
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          `).join("")}
        </div>
        <p class="testimonial-quote">"${item.quote[lang]}"</p>
      </div>

      <div class="testimonial-author-block">
        <div class="author-avatar">${item.avatarInitials}</div>
        <div class="author-info">
          <h4>${item.author}</h4>
          <p>${item.role} · ${item.company}</p>
          <span style="font-size: 0.72rem; color: var(--accent-gold); display: block; margin-top: 2px;">
            Unit: ${item.machineUsed}
          </span>
        </div>
      </div>
    </div>
  `).join("");
}

/**
 * Render FAQs
 */
function renderFAQs() {
  const lang = AppState.currentLang;
  const container = document.getElementById("faq-list");
  if (!container) return;

  container.innerHTML = companyData.faqs.map((f, i) => `
    <div class="faq-item ${i === 0 ? 'open' : ''}">
      <button class="faq-question-btn" type="button">
        <span>${f.q[lang]}</span>
        <svg class="faq-icon-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq-answer">
        <p>${f.a[lang]}</p>
      </div>
    </div>
  `).join("");

  container.querySelectorAll(".faq-question-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      item.classList.toggle("open");
    });
  });
}

/**
 * Populate and Open Specs Modal
 */
function openModal(product) {
  AppState.activeModalProduct = product;
  populateModal(product);
  const modal = document.getElementById("specs-modal");
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function populateModal(product) {
  const lang = AppState.currentLang;
  const t = i18nData[lang];

  document.getElementById("modal-code-badge").textContent = product.modelCode;
  document.getElementById("modal-popular-badge").textContent = product.badge[lang];
  document.getElementById("modal-product-title").textContent = product.title[lang];
  document.getElementById("modal-product-tagline").textContent = product.tagline[lang];
  document.getElementById("modal-product-desc").textContent = product.description[lang];

  // Specs Table
  setSafeText("modal-specs-header", t.modal.specsTableTitle + ":");
  const tableBody = document.getElementById("modal-specs-table-body");
  if (tableBody) {
    tableBody.innerHTML = product.specs.map(s => `
      <tr>
        <th>${s.label[lang]}</th>
        <td>${s.value}</td>
      </tr>
    `).join("");
  }

  // Key Features
  document.getElementById("modal-features-title").textContent = t.modal.keyFeaturesTitle;
  const featuresList = document.getElementById("modal-features-list");
  if (featuresList) {
    featuresList.innerHTML = product.features.map(f => `
      <li>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${f[lang]}</span>
      </li>
    `).join("");
  }

  // Suitable for application
  document.getElementById("modal-suitable-title").textContent = t.modal.suitableForTitle;
  document.getElementById("modal-suitable-content").textContent = product.suitableFor[lang];

  // WhatsApp Action Buttons
  const waQuoteBtn = document.getElementById("modal-wa-quote-btn");
  if (waQuoteBtn) {
    waQuoteBtn.textContent = t.modal.waAskBtn;
    waQuoteBtn.href = createWALink(product, "quote");
  }

  const waDemoBtn = document.getElementById("modal-wa-demo-btn");
  if (waDemoBtn) {
    waDemoBtn.textContent = t.modal.waDemoBtn;
    waDemoBtn.href = createWALink(product, "demo");
  }

  const closeBtnText = document.getElementById("modal-close-footer-btn");
  if (closeBtnText) closeBtnText.textContent = t.modal.closeBtn;
}

function closeModal() {
  AppState.activeModalProduct = null;
  const modal = document.getElementById("specs-modal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

/**
 * Hero Background Slideshow with Auto-Rotation & Indicator Dots
 */
function initHeroSlideshow() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".slide-dot");
  const captionEl = document.getElementById("hero-slide-caption");
  if (!slides.length) return;

  let currentIndex = 0;
  let timer = null;

  function setSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentIndex);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
    updateHeroCaption();
  }

  function updateHeroCaption() {
    if (!captionEl) return;
    const activeSlide = slides[currentIndex];
    if (activeSlide) {
      const lang = AppState.currentLang;
      const text = lang === "en" ? activeSlide.dataset.labelEn : activeSlide.dataset.labelId;
      if (text) captionEl.textContent = text;
    }
  }

  function startAutoPlay() {
    stopAutoPlay();
    timer = setInterval(() => {
      setSlide(currentIndex + 1);
    }, 5000);
  }

  function stopAutoPlay() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.dataset.index, 10);
      setSlide(idx);
      startAutoPlay();
    });
  });

  const heroSection = document.getElementById("home");
  if (heroSection) {
    heroSection.addEventListener("mouseenter", stopAutoPlay);
    heroSection.addEventListener("mouseleave", startAutoPlay);
  }

  // Expose updater globally for renderI18n language toggle
  window.__updateHeroSlideCaption = updateHeroCaption;

  startAutoPlay();
}

/**
 * Event Listeners & Bootstrapping
 */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Language Toggle Listeners
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.dataset.lang;
      if (selected !== AppState.currentLang) {
        AppState.currentLang = selected;
        setCurrentLanguage(selected);
        renderI18n();
      }
    });
  });

  // 2. Category Filter Pills
  document.querySelectorAll(".cat-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      AppState.selectedCategory = btn.dataset.category;
      renderProducts();
    });
  });

  // 3. Business Scale Filter Pills
  document.querySelectorAll(".scale-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".scale-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      AppState.selectedScale = btn.dataset.scale;
      renderProducts();
    });
  });

  // 4. Live Search Input
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      AppState.searchKeyword = e.target.value;
      renderProducts();
    });
  }

  // 5. Modal Close Handlers
  const modalCloseBtn = document.getElementById("modal-close-icon-btn");
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);

  const modalFooterClose = document.getElementById("modal-close-footer-btn");
  if (modalFooterClose) modalFooterClose.addEventListener("click", closeModal);

  const modalOverlay = document.getElementById("specs-modal");
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && AppState.activeModalProduct) {
      closeModal();
    }
  });

  // 6. Hero Slideshow Auto-Rotation
  initHeroSlideshow();

  // 7. Initial Render
  renderI18n();
});
