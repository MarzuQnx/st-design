/**
 * VECTRO INDUSTRIAL - Main Application Script
 * Clean Code Architecture: Reactive State, Event Delegations, i18n Management & WhatsApp Deeplinks
 */

import { i18nData } from "./data/i18n.js";
import { productsData } from "./data/products.js";
import { companyData } from "./data/company.js";
import { updateWhatsAppWidgetLang } from "./components/whatsapp-widget.js";

// Application State
const AppState = {
  currentLang: localStorage.getItem("vectro_lang") || "id",
  selectedCategory: "all",
  selectedScale: "all",
  searchKeyword: "",
  activeModalProduct: null
};

// SVG Machine Icons for Product Blueprint Cards
const machineIcons = {
  mixer: `
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="8" y="10" width="48" height="12" rx="2" fill="rgba(247,192,45,0.15)"/>
      <path d="M16 22v26a16 16 0 0 0 32 0V22"/>
      <line x1="32" y1="22" x2="32" y2="40"/>
      <path d="M26 34c0 3 6 4 6 8s-6 5-6 5"/>
      <circle cx="32" cy="16" r="3" fill="currentColor"/>
    </svg>
  `,
  oven: `
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="8" y="8" width="48" height="48" rx="4" fill="rgba(32,152,209,0.15)"/>
      <rect x="14" y="14" width="36" height="10" rx="1"/>
      <rect x="14" y="28" width="36" height="10" rx="1"/>
      <rect x="14" y="42" width="36" height="10" rx="1"/>
      <circle cx="46" cy="19" r="1.5" fill="currentColor"/>
      <circle cx="46" cy="33" r="1.5" fill="currentColor"/>
      <circle cx="46" cy="47" r="1.5" fill="currentColor"/>
    </svg>
  `,
  wrapper: `
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="6" y="24" width="52" height="16" rx="3" fill="rgba(247,192,45,0.15)"/>
      <path d="M18 16l8 8M38 16l8 8"/>
      <circle cx="16" cy="48" r="4"/>
      <circle cx="48" cy="48" r="4"/>
      <path d="M20 48h24"/>
      <line x1="26" y1="24" x2="26" y2="40"/>
      <line x1="38" y1="24" x2="38" y2="40"/>
    </svg>
  `,
  pouch: `
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="18,12 46,12 52,52 12,52" fill="rgba(60,118,61,0.15)"/>
      <line x1="22" y1="18" x2="42" y2="18"/>
      <path d="M26 28h12M24 36h16M28 44h8"/>
      <path d="M24 12v-4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v4"/>
    </svg>
  `,
  encrusting: `
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="12" y="10" width="40" height="20" rx="2" fill="rgba(247,192,45,0.15)"/>
      <path d="M24 30v14l8 6 8-6V30"/>
      <circle cx="32" cy="56" r="4" fill="rgba(247,192,45,0.4)"/>
      <line x1="20" y1="20" x2="44" y2="20"/>
    </svg>
  `,
  pot: `
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 24a20 20 0 0 0 40 0H12z" fill="rgba(60,118,61,0.15)"/>
      <line x1="8" y1="24" x2="56" y2="24"/>
      <path d="M32 10v14M24 14l8 4 8-4"/>
      <line x1="16" y1="44" x2="16" y2="54"/>
      <line x1="48" y1="44" x2="48" y2="54"/>
      <line x1="12" y1="54" x2="52" y2="54"/>
    </svg>
  `,
  conveyor: `
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="6" y="24" width="52" height="12" rx="6" fill="rgba(247,192,45,0.15)"/>
      <circle cx="16" cy="30" r="4"/>
      <circle cx="48" cy="30" r="4"/>
      <rect x="22" y="14" width="8" height="10" rx="1"/>
      <rect x="34" y="14" width="8" height="10" rx="1"/>
      <line x1="14" y1="36" x2="10" y2="52"/>
      <line x1="50" y1="36" x2="54" y2="52"/>
      <line x1="32" y1="36" x2="32" y2="52"/>
    </svg>
  `,
  sheeter: `
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="6" y="28" width="52" height="8" rx="2" fill="rgba(32,152,209,0.15)"/>
      <circle cx="32" cy="22" r="8"/>
      <circle cx="32" cy="42" r="8"/>
      <line x1="10" y1="28" x2="10" y2="50"/>
      <line x1="54" y1="28" x2="54" y2="50"/>
    </svg>
  `
};

/**
 * Creates dynamic, pre-filled WhatsApp URLs
 */
function createWALink(product = null, intent = "general") {
  const phone = companyData.whatsapp.number;
  const lang = AppState.currentLang;
  let msg = "";

  if (intent === "demo" && product) {
    msg = lang === "id"
      ? `Halo Sales Engineer Relasi Sukses, saya ingin menjadwalkan UJI COBA / DEMO LANGSUNG untuk mesin *${product.title.id}* (Tipe: ${product.modelCode}). Mohon info jadwal ketersediaan unit demo di showroom.`
      : `Hello Relasi Sukses Sales Engineer, I would like to schedule a LIVE DEMO & TEST RUN for *${product.title.en}* (Model: ${product.modelCode}). Please let me know the available showroom schedule.`;
  } else if (product) {
    msg = lang === "id"
      ? `Halo Sales Engineer Relasi Sukses, saya tertarik dengan mesin *${product.title.id}* (Tipe: ${product.modelCode}). Tolong kirimkan penawaran spesifikasi & konsultasi daya listrik untuk tempat usaha saya.`
      : `Hello Relasi Sukses Sales Engineer, I am inquiring about the *${product.title.en}* (Model: ${product.modelCode}). Please provide detailed quotation and electrical consultation for our facility.`;
  } else {
    msg = companyData.whatsapp.defaultMessage[lang];
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}

/**
 * Render all static text according to current language
 */
function renderI18n() {
  const lang = AppState.currentLang;
  const t = i18nData[lang];

  // Update WhatsApp widget language
  updateWhatsAppWidgetLang(lang);

  // Language buttons visual active state
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Top Announcement
  const annEl = document.getElementById("top-announcement-text");
  if (annEl) annEl.textContent = lang === "id" 
    ? "Gudang Sparepart Sentral & Teknisi Siaga Se-Indonesia | Showroom Jakarta & Surabaya" 
    : "Central Spare Parts Hub & Active Support Across Indonesia | Jakarta & Surabaya Showroom";

  // Navigation Links
  const navBrandTag = document.getElementById("nav-brand-tag");
  if (navBrandTag) navBrandTag.textContent = t.nav.brandTag;
  
  const navLinks = {
    "nav-link-home": t.nav.home,
    "nav-link-showcase": t.nav.showcase,
    "nav-link-about": t.nav.about || (lang === "id" ? "Tentang Kami" : "About Us"),
    "nav-link-solutions": t.nav.solutions,
    "nav-link-articles": t.nav.articles || (lang === "id" ? "Artikel" : "Articles / News"),
    "nav-link-contact": t.nav.contact
  };
  for (const [id, text] of Object.entries(navLinks)) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }
  const navWaBtn = document.getElementById("nav-wa-btn");
  const navWaText = document.getElementById("nav-wa-text");
  if (navWaText) navWaText.textContent = t.nav.waButton;
  if (navWaBtn) navWaBtn.href = createWALink(null, "general");

  // Hero Section
  document.getElementById("hero-badge-text").textContent = t.hero.badge;
  document.getElementById("hero-lead-text").textContent = t.hero.headlineLead;
  document.getElementById("hero-highlight-text").textContent = t.hero.headlineHighlight;
  document.getElementById("hero-subheadline").textContent = t.hero.subheadline;
  document.getElementById("hero-cta-primary").textContent = t.hero.ctaPrimary;
  document.getElementById("hero-cta-secondary").textContent = t.hero.ctaSecondary;
  document.getElementById("hero-cta-secondary").href = createWALink(null, "general");

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
  document.getElementById("filter-title").textContent = t.filter.title;
  document.getElementById("filter-subtitle").textContent = t.filter.subtitle;
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.placeholder = t.filter.searchPlaceholder;

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
  document.getElementById("scale-group-label").textContent = t.filter.scaleLabel;
  for (const [sc, label] of Object.entries(scaleMapping)) {
    const btn = document.querySelector(`.scale-btn[data-scale="${sc}"]`);
    if (btn) btn.textContent = label;
  }

  // Solutions Section
  document.getElementById("solutions-badge").textContent = t.solutions.badge;
  document.getElementById("solutions-title").textContent = t.solutions.title;
  document.getElementById("solutions-desc").textContent = t.solutions.description;
  renderSolutions();

  // Testimonials Section
  document.getElementById("testimonials-badge").textContent = t.testimonials.badge;
  document.getElementById("testimonials-title").textContent = t.testimonials.title;
  document.getElementById("testimonials-subtitle").textContent = t.testimonials.subtitle;
  renderTestimonials();

  // FAQs
  renderFAQs();

  // CTA Banner
  document.getElementById("cta-badge").textContent = t.ctaBanner.badge;
  document.getElementById("cta-title").textContent = t.ctaBanner.title;
  document.getElementById("cta-desc").textContent = t.ctaBanner.desc;
  const ctaWABtn = document.getElementById("cta-wa-btn");
  if (ctaWABtn) {
    ctaWABtn.textContent = t.ctaBanner.btnWA;
    ctaWABtn.href = createWALink(null, "general");
  }
  document.getElementById("cta-catalog-btn").textContent = t.ctaBanner.btnCatalog;
  document.getElementById("cta-office-hours").textContent = t.ctaBanner.officeHours;

  // Footer
  document.getElementById("footer-about-text").textContent = t.footer.about;
  document.getElementById("footer-quick-title").textContent = t.footer.quickLinks;
  document.getElementById("footer-hq-title").textContent = t.footer.headOffice;
  document.getElementById("footer-hq-addr").textContent = companyData.locations[0].address;
  document.getElementById("footer-branch-title").textContent = t.footer.branchOffice;
  document.getElementById("footer-branch-addr").textContent = companyData.locations[1].address;
  document.getElementById("footer-contact-title").textContent = t.footer.contactTitle;
  document.getElementById("footer-legal-text").textContent = t.footer.legalNotice;

  // Floating WhatsApp
  const floatWABtn = document.getElementById("floating-wa-btn");
  if (floatWABtn) {
    floatWABtn.href = createWALink(null, "general");
  }

  // Refresh Product Cards in New Language
  renderProducts();

  // If modal is open, re-render modal content
  if (AppState.activeModalProduct) {
    populateModal(AppState.activeModalProduct);
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
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: #262626; border: 1px dashed #444; border-radius: 6px;">
        <svg style="width: 48px; height: 48px; color: #777; margin: 0 auto 15px auto;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h3 style="color: #fff; margin-bottom: 8px;">${lang === "id" ? "Mesin Tidak Ditemukan" : "No Machines Found"}</h3>
        <p style="color: #999; margin-bottom: 20px;">${lang === "id" ? "Coba ganti kata kunci pencarian atau reset filter skala kapasitas." : "Try adjusting your search query or reset business capacity filters."}</p>
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
 * Event Listeners & Bootstrapping
 */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Language Toggle Listeners
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.dataset.lang;
      if (selected !== AppState.currentLang) {
        AppState.currentLang = selected;
        localStorage.setItem("vectro_lang", selected);
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

  // 6. Initial Render
  renderI18n();
});
