/**
 * RELASI SUKSES (relasisukses.co.id) - Products Showcase Page Controller
 * 3-Layer Architecture:
 * - Layer 1: Categories Overview & Exploration
 * - Layer 2: Filterable Product List within Category
 * - Layer 3: Comprehensive Product Detail View & Companion Machinery
 */

import { i18nData } from "./data/i18n.js?v=5";
import { categoriesData } from "./data/categories.js?v=5";
import { productsData } from "./data/products.js?v=5";
import { companyData } from "./data/company.js?v=5";
import { machineIcons } from "./data/icons.js?v=5";
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
  currentLang: getCurrentLanguage(),
  activeLayer: 1, // 1, 2, or 3
  selectedCategory: "all",
  selectedProductId: null,
  searchKeyword: "",
  selectedScale: "all",
  sortBy: "popular"
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
    lang: PageState.currentLang
  });
}

/**
 * Navigation & Layer Router
 */
function navigateTo(hash, pushState = true) {
  if (pushState) {
    window.location.hash = hash;
  }
  parseHashAndRender();
}

function parseHashAndRender() {
  const hash = window.location.hash.replace(/^#/, "");
  const params = new URLSearchParams(hash);

  if (params.has("product")) {
    const prodId = params.get("product");
    const product = productsData.find(p => p.id === prodId);
    if (product) {
      PageState.activeLayer = 3;
      PageState.selectedProductId = prodId;
      PageState.selectedCategory = product.category;
      renderLayer3(product);
      updateBreadcrumbs();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
  }

  if (params.has("category")) {
    const catId = params.get("category");
    PageState.activeLayer = 2;
    PageState.selectedCategory = catId;
    renderLayer2();
    updateBreadcrumbs();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  // Default to Layer 1 (Categories)
  PageState.activeLayer = 1;
  renderLayer1();
  updateBreadcrumbs();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * Update Breadcrumbs based on current active layer
 */
function updateBreadcrumbs() {
  const lang = PageState.currentLang;
  const t = i18nData[lang].productsPage;
  const breadcrumbList = document.getElementById("showcase-breadcrumbs");
  if (!breadcrumbList) return;

  let html = `
    <li class="breadcrumb-item"><a href="index.html">${t.breadcrumbHome}</a></li>
    <li class="breadcrumb-separator">/</li>
  `;

  if (PageState.activeLayer === 1) {
    html += `<li class="breadcrumb-item active">${t.breadcrumbShowcase}</li>`;
  } else if (PageState.activeLayer === 2) {
    const cat = categoriesData.find(c => c.id === PageState.selectedCategory);
    const catName = cat ? cat.title[lang] : t.breadcrumbAll;
    html += `
      <li class="breadcrumb-item"><a href="#layer=categories" class="nav-to-layer1">${t.breadcrumbShowcase}</a></li>
      <li class="breadcrumb-separator">/</li>
      <li class="breadcrumb-item active">${catName}</li>
    `;
  } else if (PageState.activeLayer === 3) {
    const prod = productsData.find(p => p.id === PageState.selectedProductId);
    const cat = categoriesData.find(c => c.id === (prod ? prod.category : PageState.selectedCategory));
    const catName = cat ? cat.title[lang] : t.breadcrumbAll;
    const catHash = cat ? `category=${cat.id}` : `category=all`;

    html += `
      <li class="breadcrumb-item"><a href="#layer=categories" class="nav-to-layer1">${t.breadcrumbShowcase}</a></li>
      <li class="breadcrumb-separator">/</li>
      <li class="breadcrumb-item"><a href="#${catHash}" class="nav-to-layer2">${catName}</a></li>
      <li class="breadcrumb-separator">/</li>
      <li class="breadcrumb-item active">${prod ? prod.modelCode + ' · ' + prod.title[lang] : 'Detail'}</li>
    `;
  }

  breadcrumbList.innerHTML = html;

  breadcrumbList.querySelectorAll(".nav-to-layer1").forEach(a => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo("");
    });
  });

  breadcrumbList.querySelectorAll(".nav-to-layer2").forEach(a => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const cat = categoriesData.find(c => c.id === PageState.selectedCategory);
      navigateTo(cat ? `category=${cat.id}` : `category=all`);
    });
  });
}

/**
 * -------------------------------------------------------------
 * LAYER 1: RENDER CATEGORIES
 * -------------------------------------------------------------
 */
function renderLayer1() {
  const lang = PageState.currentLang;
  const t = i18nData[lang].productsPage;

  // Toggle active layer container
  document.getElementById("layer-1-container").classList.add("active-layer");
  document.getElementById("layer-2-container").classList.remove("active-layer");
  document.getElementById("layer-3-container").classList.remove("active-layer");

  // Titles & Headings
  setSafeText("layer1-badge", t.layer1Badge);
  setSafeText("layer1-title", t.layer1Title);
  setSafeText("layer1-subtitle", t.layer1Subtitle);
  setSafeText("layer1-all-text", t.layer1AllBtn.replace("{count}", productsData.length));

  const allBtn = document.getElementById("layer1-all-btn");
  if (allBtn) {
    allBtn.onclick = () => navigateTo("category=all");
  }

  // Categories Grid
  const grid = document.getElementById("categories-grid");
  if (!grid) return;

  grid.innerHTML = categoriesData.map(cat => {
    const categoryRemixIcons = {
      catBakery: "ri-bread-line",
      catPackaging: "ri-box-3-line",
      catProcessing: "ri-blender-line",
      catLines: "ri-node-tree"
    };
    const catIconClass = categoryRemixIcons[cat.id] || "ri-settings-3-line";
    const machineCount = productsData.filter(p => p.category === cat.id).length;

    return `
      <article class="category-card" data-category="${cat.id}">
        <div>
          <div class="cat-card-header">
            <div class="cat-icon-symbol">
              <i class="${catIconClass}"></i>
            </div>
            <span class="badge-tag badge-gold">${cat.badge[lang]}</span>
          </div>

          <h3 class="cat-title">${cat.title[lang]}</h3>
          <p class="cat-tagline">${cat.tagline[lang]}</p>
          <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 16px;">
            ${cat.description[lang]}
          </p>

          <div class="cat-metrics-row">
            <div class="cat-metric-item">
              <span class="cat-metric-label">${lang === 'id' ? 'Unit Tersedia' : 'Available Units'}</span>
              <span class="cat-metric-value text-gold">${machineCount} ${t.layer1StatsLabel}</span>
            </div>
            <div class="cat-metric-item">
              <span class="cat-metric-label">${lang === 'id' ? 'Standar Higienis' : 'Hygiene Standard'}</span>
              <span class="cat-metric-value text-blue">${cat.stats.hygieneGrade}</span>
            </div>
          </div>

          <div class="cat-apps-box">
            <div class="cat-apps-label">${lang === 'id' ? 'Aplikasi Produk Umum:' : 'Common Applications:'}</div>
            <div class="cat-chips-wrap">
              ${cat.applications.map(app => `
                <span class="cat-chip">${app[lang]}</span>
              `).join("")}
            </div>
          </div>
        </div>

        <button type="button" class="cat-card-action-btn">
          <span>${t.layer1CardAction}</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </article>
    `;
  }).join("");

  grid.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
      const catId = card.dataset.category;
      navigateTo(`category=${catId}`);
    });
  });
}

/**
 * -------------------------------------------------------------
 * LAYER 2: RENDER PRODUCT LIST WITHIN CATEGORY
 * -------------------------------------------------------------
 */
function renderLayer2() {
  const lang = PageState.currentLang;
  const t = i18nData[lang].productsPage;
  const prodT = i18nData[lang].productCard;

  // Toggle active layer container
  document.getElementById("layer-1-container").classList.remove("active-layer");
  document.getElementById("layer-2-container").classList.add("active-layer");
  document.getElementById("layer-3-container").classList.remove("active-layer");

  // Category Info Header
  const activeCat = categoriesData.find(c => c.id === PageState.selectedCategory);
  const catTitleEl = document.getElementById("layer2-cat-title");
  const catDescEl = document.getElementById("layer2-cat-desc");
  const backBtn = document.getElementById("layer2-back-btn");

  if (backBtn) {
    backBtn.textContent = t.layer2BackBtn;
    backBtn.onclick = () => navigateTo("");
  }

  if (activeCat) {
    catTitleEl.textContent = activeCat.title[lang];
    catDescEl.textContent = activeCat.description[lang];
  } else {
    catTitleEl.textContent = lang === "id" ? "Seluruh Mesin Industri Relasi Sukses" : "All Relasi Sukses Industrial Machinery";
    catDescEl.textContent = lang === "id"
      ? "Jelajahi seluruh varian mesin pengolahan pangan, bakery, dan kemasan kami yang telah teruji di ratusan pabrik & UMKM."
      : "Explore our complete range of food processing, bakery, and packaging machines proven in hundreds of commercial plants.";
  }

  // Filter & Search Toolbar Labels
  const searchInput = document.getElementById("layer2-search-input");
  if (searchInput) searchInput.placeholder = t.layer2SearchPlaceholder;

  document.getElementById("layer2-sort-label").textContent = t.layer2SortLabel;
  document.getElementById("layer2-sort-popular").textContent = t.layer2SortPopular;
  document.getElementById("layer2-sort-code").textContent = t.layer2SortCode;

  // Render Category Switcher Buttons inside Layer 2
  const filterCatPills = document.getElementById("layer2-cat-pills");
  if (filterCatPills) {
    filterCatPills.innerHTML = `
      <button type="button" class="pill-btn ${PageState.selectedCategory === 'all' ? 'active' : ''}" data-cat="all">
        ${lang === 'id' ? 'Semua Kategori' : 'All Categories'}
      </button>
      ${categoriesData.map(c => `
        <button type="button" class="pill-btn ${PageState.selectedCategory === c.id ? 'active' : ''}" data-cat="${c.id}">
          ${c.title[lang]}
        </button>
      `).join("")}
    `;

    filterCatPills.querySelectorAll(".pill-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        PageState.selectedCategory = btn.dataset.cat;
        navigateTo(`category=${PageState.selectedCategory}`);
      });
    });
  }

  // Filter Products Data
  let filtered = productsData.filter(item => {
    const matchCat = PageState.selectedCategory === "all" || item.category === PageState.selectedCategory;
    const matchScale = PageState.selectedScale === "all" || item.scale === PageState.selectedScale;
    const q = PageState.searchKeyword.toLowerCase().trim();
    const matchSearch = !q || 
      item.title[lang].toLowerCase().includes(q) ||
      item.modelCode.toLowerCase().includes(q) ||
      item.tagline[lang].toLowerCase().includes(q) ||
      item.suitableFor[lang].toLowerCase().includes(q);

    return matchCat && matchScale && matchSearch;
  });

  // Sorting
  if (PageState.sortBy === "code") {
    filtered.sort((a, b) => a.modelCode.localeCompare(b.modelCode));
  } else {
    filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
  }

  const countEl = document.getElementById("layer2-count-badge");
  if (countEl) {
    countEl.textContent = `${filtered.length} ${lang === 'id' ? 'Mesin' : 'Machines'}`;
  }

  const grid = document.getElementById("layer2-products-grid");
  if (!grid) return;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: var(--bg-surface); border: 1px dashed var(--border-light); border-radius: var(--radius-md); box-shadow: var(--shadow-raised);">
        <svg style="width: 48px; height: 48px; color: var(--accent-gold); margin: 0 auto 15px auto;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h3 style="color: var(--text-primary); margin-bottom: 8px; font-family: var(--font-family-display);">${t.layer2FilterEmpty}</h3>
        <button id="layer2-reset-btn" class="btn btn-ghost btn-sm" style="margin-top: 15px;">${t.layer2ResetBtn}</button>
      </div>
    `;
    const resetBtn = document.getElementById("layer2-reset-btn");
    if (resetBtn) {
      resetBtn.onclick = () => {
        PageState.searchKeyword = "";
        PageState.selectedScale = "all";
        if (searchInput) searchInput.value = "";
        renderLayer2();
      };
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

          <div class="product-thumbnail-area trigger-detail" style="cursor: pointer;" title="${prodT.viewDetail}">
            ${item.image ? `
              <img src="${item.image}" alt="${item.title[lang]}" class="product-thumb-img" loading="lazy" />
            ` : `
              <div class="art-grid"></div>
              <div class="product-thumb-svg">${iconSvg}</div>
            `}
          </div>

          <h3 class="product-title trigger-detail" style="cursor: pointer;">${item.title[lang]}</h3>
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
            <strong>${prodT.suitableFor}</strong> 
            <span>${item.suitableFor[lang]}</span>
          </div>
        </div>

        <div>
          <div class="card-actions-row">
            <button type="button" class="btn btn-ghost btn-sm trigger-detail" data-id="${item.id}">
              <i class="ri-eye-line"></i>
              <span>${prodT.viewDetail}</span>
            </button>
            <a href="${waQuoteUrl}" target="_blank" rel="noopener" class="btn btn-wa btn-sm">
              <i class="ri-whatsapp-fill"></i>
              <span>${prodT.ctaQuote}</span>
            </a>
          </div>
          <div class="card-guarantee-note">
            <i class="ri-shield-check-line"></i>
            <span>${prodT.guarantee}</span>
          </div>
        </div>
      </article>
    `;
  }).join("");

  // Attach Drill-Down trigger to Layer 3
  grid.querySelectorAll(".trigger-detail").forEach(el => {
    el.addEventListener("click", (e) => {
      const card = e.currentTarget.closest(".product-card");
      const prodId = card.dataset.id;
      navigateTo(`product=${prodId}`);
    });
  });
}

/**
 * -------------------------------------------------------------
 * LAYER 3: RENDER DEDICATED PRODUCT DETAIL VIEW
 * -------------------------------------------------------------
 */
function renderLayer3(product) {
  const lang = PageState.currentLang;
  const t = i18nData[lang].productsPage;
  const iconSvg = machineIcons[product.typeIcon] || machineIcons.mixer;

  // Toggle active layer container
  document.getElementById("layer-1-container").classList.remove("active-layer");
  document.getElementById("layer-2-container").classList.remove("active-layer");
  document.getElementById("layer-3-container").classList.add("active-layer");

  // Back Button
  const backBtn = document.getElementById("layer3-back-btn");
  if (backBtn) {
    backBtn.textContent = t.layer3BackBtn;
    backBtn.onclick = () => {
      navigateTo(`category=${product.category}`);
    };
  }

  // Header badges & titles
  setSafeText("layer3-code-badge", product.modelCode);
  setSafeText("layer3-popular-badge", product.badge[lang]);
  setSafeText("layer3-stock-badge", lang === "id" ? "Ready Stock Demo Unit" : "Demo Unit Ready in Stock");
  setSafeText("layer3-spec-warranty-lbl", lang === "id" ? "Garansi Resmi" : "Official Warranty");
  setSafeText("layer3-spec-warranty-val", lang === "id" ? "2 Tahun Servis + Suku Cadang" : "2 Years Service + Parts");
  setSafeText("layer3-spec-mat-lbl", lang === "id" ? "Standar Bahan" : "Material Standard");
  setSafeText("layer3-spec-mat-val", "SUS 304 Food Grade");
  setSafeText("layer3-title", product.title[lang]);
  setSafeText("layer3-tagline", product.tagline[lang]);
  setSafeText("layer3-desc", product.description[lang]);

  // Visual Icon or Photograph
  const visualArt = document.getElementById("layer3-visual-art");
  if (visualArt) {
    if (product.image) {
      visualArt.innerHTML = `
        <div style="position: relative; width: 100%; height: 100%; min-height: 280px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: var(--radius-sm);">
          <img src="${product.image}" alt="${product.title[lang]}" class="layer3-visual-img" />
        </div>
      `;
    } else {
      visualArt.innerHTML = iconSvg;
    }
  }

  // Primary Action Buttons
  const waQuoteBtn = document.getElementById("layer3-wa-quote-btn");
  if (waQuoteBtn) {
    waQuoteBtn.innerHTML = `<i class="ri-whatsapp-fill"></i> <span>${t.layer3WaQuoteBtn}</span>`;
    waQuoteBtn.href = createWALink(product, "quote");
  }

  const waDemoBtn = document.getElementById("layer3-wa-demo-btn");
  if (waDemoBtn) {
    waDemoBtn.innerHTML = `<i class="ri-calendar-check-line"></i> <span>${t.layer3WaDemoBtn}</span>`;
    waDemoBtn.href = createWALink(product, "demo");
  }

  // ROI Value Highlight Box
  setSafeText("layer3-roi-title", t.layer3WhyInvestTitle);
  setSafeText("layer3-roi-text", product.roiHighlight[lang]);

  // Operational Features Grid
  setSafeText("layer3-features-title", t.layer3OperationalTitle);
  const featuresGrid = document.getElementById("layer3-features-grid");
  if (featuresGrid) {
    featuresGrid.innerHTML = product.features.map(f => `
      <div class="feature-pill-card">
        <i class="ri-checkbox-circle-fill text-gold" style="font-size: 1.15rem;"></i>
        <span class="feature-pill-text">${f[lang]}</span>
      </div>
    `).join("");
  }

  // Deep Specs Table
  setSafeText("layer3-specs-table-title", t.layer3SpecsTableTitle);
  const tableBody = document.getElementById("layer3-specs-tbody");
  if (tableBody) {
    tableBody.innerHTML = product.specs.map(s => `
      <tr>
        <th>${s.label[lang]}</th>
        <td>${s.value}</td>
      </tr>
    `).join("");
  }

  // Applications
  setSafeText("layer3-apps-title", lang === "id" ? "Rekomendasi Aplikasi Produk:" : "Recommended Product Applications:");
  setSafeText("layer3-apps-content", product.suitableFor[lang]);

  // Related Machinery in the Same Line
  setSafeText("layer3-related-title", t.layer3RelatedTitle);
  const relatedGrid = document.getElementById("layer3-related-grid");
  if (relatedGrid) {
    const relatedProducts = productsData.filter(p => product.relatedProductIds.includes(p.id));
    relatedGrid.innerHTML = relatedProducts.map(rel => `
      <div class="product-card" data-id="${rel.id}">
        <div class="card-top">
          <span class="model-badge">${rel.modelCode}</span>
          <span class="badge-tag badge-gold">${rel.badge[lang]}</span>
        </div>
        <div class="product-thumbnail-area" style="height: 120px; cursor: pointer;">
          ${rel.image ? `
            <img src="${rel.image}" alt="${rel.title[lang]}" class="product-thumb-img" loading="lazy" />
          ` : `
            <div class="product-thumb-svg" style="width: 60px; height: 60px;">
              ${machineIcons[rel.typeIcon] || machineIcons.mixer}
            </div>
          `}
        </div>
        <h4 style="font-size: 1.1rem; color: var(--text-primary); margin-bottom: 6px;">${rel.title[lang]}</h4>
        <p style="font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 12px;">${rel.tagline[lang]}</p>
        <button type="button" class="btn btn-ghost btn-sm rel-drill-btn" style="width: 100%;" data-id="${rel.id}">
          <i class="ri-arrow-right-line"></i>
          <span>${lang === 'id' ? 'Buka Detail Mesin Ini' : 'View This Machine'}</span>
        </button>
      </div>
    `).join("");

    relatedGrid.querySelectorAll(".rel-drill-btn, .product-thumbnail-area").forEach(el => {
      el.addEventListener("click", (e) => {
        const card = e.currentTarget.closest(".product-card");
        const relId = card.dataset.id;
        navigateTo(`product=${relId}`);
      });
    });
  }

  // Direct Sales Engineer Contact Card
  setSafeText("layer3-direct-wa-title", t.layer3DirectWaTitle);
  setSafeText("layer3-direct-wa-desc", t.layer3DirectWaDesc);
  const salesRepBtn = document.getElementById("layer3-sales-rep-btn");
  if (salesRepBtn) {
    salesRepBtn.textContent = lang === "id" ? "Hubungi Ir. Hendra (WA Langsung)" : "Chat Ir. Hendra on WhatsApp";
    salesRepBtn.href = createWALink(product, "quote");
  }
}

/**
 * Global i18n & Header Synchronization
 */
function renderHeaderI18n() {
  const lang = PageState.currentLang;
  renderSharedHeader(lang, i18nData);
  renderSharedFooter(lang, i18nData);
  updateWhatsAppWidgetLang(lang);
}

/**
 * App Initialization
 */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Language Toggle
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.dataset.lang;
      if (selected !== PageState.currentLang) {
        PageState.currentLang = selected;
        setCurrentLanguage(selected);
        renderHeaderI18n();
        parseHashAndRender();
      }
    });
  });

  // 2. Hashchange Listener for back/forward browser history
  window.addEventListener("hashchange", parseHashAndRender);

  // 3. Search and Sort handlers in Layer 2
  const searchInput = document.getElementById("layer2-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      PageState.searchKeyword = e.target.value;
      renderLayer2();
    });
  }

  const sortSelect = document.getElementById("layer2-sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      PageState.sortBy = e.target.value;
      renderLayer2();
    });
  }

  // 4. Initial Header & Router Render
  renderHeaderI18n();
  parseHashAndRender();
});
