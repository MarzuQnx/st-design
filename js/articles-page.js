/**
 * VECTRO INDUSTRIAL - Articles & News Page Controller
 * Clean Code Architecture: Reactive State, Dynamic Category Filtering, Keyword Search & WhatsApp Routing
 */

import { articlesData } from "./data/articles.js";
import { i18nData } from "./data/i18n.js";
import { companyData } from "./data/company.js";
import { updateWhatsAppWidgetLang } from "./components/whatsapp-widget.js";

// Page State
const PageState = {
  currentLang: localStorage.getItem("vectro_lang") || "id",
  selectedCategory: "all",
  searchQuery: ""
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
  const artT = t.articlesPage;

  // Language button active state
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Top Announcement
  const annEl = document.getElementById("top-announcement-text");
  if (annEl) {
    annEl.textContent = lang === "id"
      ? "Gudang Sparepart Sentral & Teknisi Siaga Se-Indonesia | Showroom Jakarta & Surabaya"
      : "Central Domestic Spare Parts Hub & Active Support Across Indonesia | Jakarta & Surabaya Showrooms";
  }

  // Brand Subtitle
  const brandTagEl = document.getElementById("nav-brand-tag");
  if (brandTagEl) brandTagEl.textContent = t.nav.brandTag;

  // Nav links
  const navMap = {
    "nav-link-home": t.nav.home,
    "nav-link-showcase": t.nav.showcase,
    "nav-link-about": t.nav.about || (lang === "id" ? "Tentang Kami" : "About Us"),
    "nav-link-solutions": t.nav.solutions,
    "nav-link-articles": t.nav.articles || (lang === "id" ? "Artikel" : "Articles / News"),
    "nav-link-contact": t.nav.contact || (lang === "id" ? "Kontak & FAQ" : "Contact & FAQ")
  };
  for (const [id, label] of Object.entries(navMap)) {
    const el = document.getElementById(id);
    if (el) el.textContent = label;
  }

  // Nav WA Button
  const navWaBtn = document.getElementById("nav-wa-btn");
  const navWaText = document.getElementById("nav-wa-text");
  if (navWaBtn) navWaBtn.href = createWhatsAppUrl(companyData.whatsapp.defaultMessage[lang]);
  if (navWaText) navWaText.textContent = t.nav.waButton;

  // Update WhatsApp widget language
  updateWhatsAppWidgetLang(lang);

  // Breadcrumbs
  const bcHome = document.getElementById("bc-home");
  const bcCurrent = document.getElementById("bc-current");
  if (bcHome) bcHome.textContent = artT.breadcrumbHome;
  if (bcCurrent) bcCurrent.textContent = artT.breadcrumbArticles;
}

/**
 * -------------------------------------------------------------
 * 2. RENDER HERO SECTION
 * -------------------------------------------------------------
 */
function renderHero() {
  const lang = PageState.currentLang;
  const artT = i18nData[lang].articlesPage;

  const badgeEl = document.getElementById("articles-badge");
  const titleEl = document.getElementById("articles-title");
  const leadEl = document.getElementById("articles-lead");

  if (badgeEl) badgeEl.textContent = artT.heroBadge;
  if (titleEl) titleEl.textContent = artT.heroTitle;
  if (leadEl) leadEl.textContent = artT.heroLead;
}

/**
 * -------------------------------------------------------------
 * 3. RENDER CATEGORY PILLS
 * -------------------------------------------------------------
 */
function renderCategoryPills() {
  const lang = PageState.currentLang;
  const categories = articlesData.categories;
  const pillsRow = document.getElementById("articles-pills-row");

  if (pillsRow) {
    pillsRow.innerHTML = categories.map(cat => `
      <button type="button" class="articles-pill-btn ${PageState.selectedCategory === cat.id ? 'active' : ''}" data-cat="${cat.id}">
        ${cat.label[lang]}
      </button>
    `).join("");
  }
}

/**
 * -------------------------------------------------------------
 * 4. RENDER ARTICLES GRID
 * -------------------------------------------------------------
 */
function renderArticles() {
  const lang = PageState.currentLang;
  const artT = i18nData[lang].articlesPage;
  const grid = document.getElementById("articles-grid");
  const searchInput = document.getElementById("articles-search-input");

  if (searchInput) searchInput.placeholder = artT.searchPlaceholder;
  if (!grid) return;

  // Filtering
  const query = PageState.searchQuery.trim().toLowerCase();
  const filtered = articlesData.articles.filter(item => {
    const matchCat = PageState.selectedCategory === "all" || item.category === PageState.selectedCategory;
    if (!matchCat) return false;

    if (!query) return true;
    const titleMatch = item.title[lang].toLowerCase().includes(query);
    const excerptMatch = item.excerpt[lang].toLowerCase().includes(query);
    const authorMatch = item.author.toLowerCase().includes(query);
    return titleMatch || excerptMatch || authorMatch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="articles-empty-state">
        <p style="margin-bottom: 15px;">${artT.emptyText}</p>
        <button type="button" class="btn btn-ghost btn-sm" id="btn-reset-articles">
          ${artT.filterAll}
        </button>
      </div>
    `;
    const resetBtn = document.getElementById("btn-reset-articles");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        PageState.selectedCategory = "all";
        PageState.searchQuery = "";
        if (searchInput) searchInput.value = "";
        renderCategoryPills();
        renderArticles();
      });
    }
    return;
  }

  // Render cards
  grid.innerHTML = filtered.map(item => {
    const dateText = lang === "id" ? item.date : item.dateEn;
    const readTimeText = lang === "id" ? item.readTime : item.readTimeEn;
    const categoryObj = articlesData.categories.find(c => c.id === item.category);
    const categoryName = categoryObj ? categoryObj.label[lang] : item.category;
    const waUrl = createWhatsAppUrl(item.waConsultMsg[lang]);

    return `
      <article class="article-card" data-id="${item.id}">
        <div>
          <div class="article-meta-row">
            <span class="article-category-badge">${categoryName}</span>
            <span class="article-date-readtime">${dateText} • ${readTimeText}</span>
          </div>

          <h3 class="article-title">${item.title[lang]}</h3>
          <p class="article-excerpt">${item.excerpt[lang]}</p>

          <div class="article-takeaways-box">
            <div class="article-takeaways-title">
              ${lang === "id" ? "Poin Kunci Engineering:" : "Engineering Takeaways:"}
            </div>
            <ul class="article-takeaways-list">
              ${item.keyTakeaways.map(pt => `
                <li>${pt[lang]}</li>
              `).join("")}
            </ul>
          </div>
        </div>

        <div class="article-footer-row">
          <div class="article-author-info">
            <span>${artT.authorLabel}</span>
            <strong>${item.author}</strong>
          </div>
          <a href="${waUrl}" target="_blank" rel="noopener" class="article-wa-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.034-1.85-.444-1.294-.537-2.13-1.849-2.196-1.936-.064-.087-.521-.692-.521-1.319 0-.626.326-.935.443-1.062.116-.127.255-.159.34-.159.085 0 .17.001.244.005.078.004.183-.029.287.218.106.254.361.88.393.945.032.064.053.14.01.223-.042.085-.064.138-.127.212-.064.074-.134.165-.192.222-.063.064-.13.133-.056.26.074.127.329.544.706.88.486.433.896.568 1.023.632.127.063.201.053.276-.032.074-.085.318-.371.403-.498.085-.127.17-.106.286-.064.116.043.742.35.869.414.127.064.212.095.244.148.031.053.031.307-.113.712z"/>
            </svg>
            <span>${lang === "id" ? "Diskusi Topik Ini (WA)" : "Discuss with Engineer"}</span>
          </a>
        </div>
      </article>
    `;
  }).join("");
}

/**
 * -------------------------------------------------------------
 * 5. RENDER CTA BANNER & FOOTER
 * -------------------------------------------------------------
 */
function renderCTAAndFooter() {
  const lang = PageState.currentLang;
  const artT = i18nData[lang].articlesPage;
  const f = i18nData[lang].footer;

  const ctaBadge = document.getElementById("cta-badge");
  const ctaTitle = document.getElementById("cta-title");
  const ctaDesc = document.getElementById("cta-desc");
  const ctaWaBtn = document.getElementById("cta-wa-btn");
  const ctaWaText = document.getElementById("cta-wa-text");
  const ctaCatalogBtn = document.getElementById("cta-catalog-btn");
  const ctaCatalogText = document.getElementById("cta-catalog-text");

  if (ctaBadge) ctaBadge.textContent = artT.ctaBadge;
  if (ctaTitle) ctaTitle.textContent = artT.ctaTitle;
  if (ctaDesc) ctaDesc.textContent = artT.ctaDesc;
  if (ctaWaText) ctaWaText.textContent = artT.ctaWaBtn;
  if (ctaCatalogText) ctaCatalogText.textContent = artT.ctaCatalogBtn;

  const ctaMsg = lang === "id"
    ? "Halo Tim Sales Engineer Relasi Sukses, saya tertarik berkonsultasi mengenai rekomendasi mesin berdasarkan panduan artikel di website Relasi Sukses."
    : "Hello Relasi Sukses Sales Engineers, I would like to consult on machinery options based on the educational guides on your website.";
  if (ctaWaBtn) ctaWaBtn.href = createWhatsAppUrl(ctaMsg);

  // Footer
  const aboutText = document.getElementById("footer-about-text");
  const quickTitle = document.getElementById("footer-quicklinks-title");
  const headTitle = document.getElementById("footer-head-title");
  const headAddr = document.getElementById("footer-head-addr");
  const branchTitle = document.getElementById("footer-branch-title");
  const branchAddr = document.getElementById("footer-branch-addr");
  const legalNotice = document.getElementById("footer-legal-notice");
  const privacyLink = document.getElementById("footer-privacy-link");
  const termsLink = document.getElementById("footer-terms-link");

  if (aboutText) aboutText.textContent = f.about;
  if (quickTitle) quickTitle.textContent = f.quickLinks;
  if (headTitle) headTitle.textContent = f.headOffice;
  if (headAddr) headAddr.textContent = f.headOfficeAddr;
  if (branchTitle) branchTitle.textContent = f.branchOffice;
  if (branchAddr) branchAddr.textContent = f.branchOfficeAddr;
  if (legalNotice) legalNotice.textContent = f.legalNotice;
  if (privacyLink) privacyLink.textContent = f.privacy;
  if (termsLink) termsLink.textContent = f.terms;
}

/**
 * Master Render
 */
function renderAll() {
  renderHeaderAndNav();
  renderHero();
  renderCategoryPills();
  renderArticles();
  renderCTAAndFooter();
}

/**
 * Initialization & Event Listeners
 */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Language Switcher
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.dataset.lang;
      if (selected !== PageState.currentLang) {
        PageState.currentLang = selected;
        localStorage.setItem("vectro_lang", selected);
        renderAll();
      }
    });
  });

  // 2. Category Pills Delegation
  const pillsContainer = document.getElementById("articles-pills-row");
  if (pillsContainer) {
    pillsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".articles-pill-btn");
      if (btn && btn.dataset.cat) {
        PageState.selectedCategory = btn.dataset.cat;
        renderCategoryPills();
        renderArticles();
      }
    });
  }

  // 3. Search Input Handler
  const searchInput = document.getElementById("articles-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      PageState.searchQuery = e.target.value;
      renderArticles();
    });
  }

  // Run initial render
  renderAll();
});
