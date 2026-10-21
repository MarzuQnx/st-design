/**
 * RELASI SUKSES (relasisukses.co.id) - Articles & News Page Controller
 * Clean Code Architecture: Reactive State, Dynamic Category Filtering, Keyword Search & WhatsApp Routing
 */

import { articlesData } from "./data/articles.js?v=5";
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
  currentLang: getCurrentLanguage(),
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

  renderSharedHeader(lang, i18nData);
  updateWhatsAppWidgetLang(lang);

  // Breadcrumbs
  setSafeText("bc-home", artT.breadcrumbHome);
  setSafeText("bc-current", artT.breadcrumbArticles);
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
            <i class="ri-whatsapp-fill"></i>
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

  setSafeText("cta-badge", artT.ctaBadge);
  setSafeText("cta-title", artT.ctaTitle);
  setSafeText("cta-desc", artT.ctaDesc);
  setSafeText("cta-wa-text", artT.ctaWaBtn);
  setSafeText("cta-catalog-text", artT.ctaCatalogBtn);

  const ctaMsg = lang === "id"
    ? "Halo Tim Sales Engineer Relasi Sukses, saya tertarik berkonsultasi mengenai rekomendasi mesin berdasarkan panduan artikel di website Relasi Sukses."
    : "Hello Relasi Sukses Sales Engineers, I would like to consult on machinery options based on the educational guides on your website.";
  setSafeHref("cta-wa-btn", buildWhatsAppLink({ lang, customMessage: ctaMsg }));

  // Centralized shared footer rendering
  renderSharedFooter(lang, i18nData);
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
        setCurrentLanguage(selected);
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
