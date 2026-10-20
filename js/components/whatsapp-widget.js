/**
 * ============================================================
 * CHATURA-STANDARD WHATSAPP WIDGET JAVASCRIPT COMPONENT
 * Extracted & Standardized from Backend Chatura
 * Default Production Component for Antigravity Web Applications
 * ============================================================
 */

import { companyData } from "../data/company.js";

// Widget Department Configuration
const widgetConfig = {
  phoneNumber: companyData.whatsapp.number || "628118899234",
  departments: [
    {
      id: "sales",
      title: {
        id: "Konsultasi & Penawaran Mesin",
        en: "Machine Sizing & Sales Quote"
      },
      subtitle: {
        id: "Kapasitas produksi, spesifikasi & penawaran",
        en: "Production capacity, specs & formal quote"
      },
      message: {
        id: "Halo Sales Consultant Relasi Sukses, saya tertarik berkonsultasi mengenai mesin industri makanan & kemasan. Mohon informasi rekomendasi & penawaran harga.",
        en: "Hello Relasi Sukses Sales Consultant, I am interested in consulting about food machinery and packaging systems. Please provide recommendations & pricing."
      },
      iconSvg: `
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 12a8 8 0 0 1 16 0"/>
          <rect x="3.5" y="12" width="4" height="7" rx="2"/>
          <rect x="16.5" y="12" width="4" height="7" rx="2"/>
          <path d="M8 20c0 1.1.9 2 2 2h2"/>
        </svg>
      `
    },
    {
      id: "service",
      title: {
        id: "Servis Teknis & Suku Cadang",
        en: "Technical Support & Spare Parts"
      },
      subtitle: {
        id: "Teknisi siaga, kalibrasi & pengiriman sparepart",
        en: "On-site engineers, calibration & parts delivery"
      },
      message: {
        id: "Halo Tim Teknis Relasi Sukses, saya membutuhkan bantuan servis teknis / ketersediaan sparepart untuk mesin pabrik saya.",
        en: "Hello Relasi Sukses Technical Support, I need on-site assistance / spare parts availability for my food processing machinery."
      },
      iconSvg: `
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      `
    },
    {
      id: "demo",
      title: {
        id: "Trial Resep di Test Kitchen",
        en: "Recipe Trial at Test Kitchen"
      },
      subtitle: {
        id: "Uji coba adonan langsung di Showroom PIK JKT & SBY",
        en: "Live ingredient testing in PIK Jakarta or Surabaya"
      },
      message: {
        id: "Halo Relasi Sukses, saya ingin menjadwalkan kunjungan & uji coba resep di Test Kitchen Showroom PIK.",
        en: "Hello Relasi Sukses, I would like to schedule a visit and live recipe trial at your PIK Test Kitchen Showroom."
      },
      iconSvg: `
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3 5 6v5c0 4.5 2.7 7.6 7 10 4.3-2.4 7-5.5 7-10V6l-7-3Z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      `
    }
  ],
  i18n: {
    id: {
      eyebrow: "RELASI SUKSES SUPPORT",
      title: "Ada yang bisa kami bantu?",
      intro: "Pilih divisi yang sesuai dengan kebutuhan Anda untuk terhubung langsung dengan tim kami via WhatsApp.",
      hoursTitle: "JAM OPERASIONAL KONSULTASI",
      hoursDesc: "Senin – Sabtu, 08.00 – 17.30 WIB",
      closeLabel: "Tutup opsi WhatsApp",
      launcherLabel: "Chat via WhatsApp"
    },
    en: {
      eyebrow: "RELASI SUKSES SUPPORT",
      title: "How can we help you?",
      intro: "Choose the department that best matches your inquiry and we'll connect you directly on WhatsApp.",
      hoursTitle: "CLIENT CONSULTATION HOURS",
      hoursDesc: "Monday – Saturday, 8:00 AM – 5:30 PM WIB",
      closeLabel: "Close WhatsApp options",
      launcherLabel: "Chat via WhatsApp"
    }
  }
};

let currentLang = localStorage.getItem("vectro_lang") || "id";
let isOpen = false;

function buildWhatsAppUrl(message) {
  const phone = widgetConfig.phoneNumber;
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedText}`;
}

/**
 * Generates the full HTML markup for the widget
 */
function renderWidgetHtml() {
  const t = widgetConfig.i18n[currentLang] || widgetConfig.i18n.id;

  const optionsHtml = widgetConfig.departments.map(dept => {
    const title = dept.title[currentLang] || dept.title.id;
    const subtitle = dept.subtitle[currentLang] || dept.subtitle.id;
    const msg = dept.message[currentLang] || dept.message.id;
    const waUrl = buildWhatsAppUrl(msg);

    return `
      <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="wa-option" data-dept="${dept.id}">
        <span class="wa-option-icon" aria-hidden="true">
          ${dept.iconSvg}
        </span>
        <span class="wa-option-content">
          <strong>${title}</strong>
          <span>${subtitle}</span>
        </span>
        <span class="wa-arrow" aria-hidden="true">&rarr;</span>
      </a>
    `;
  }).join("");

  return `
    <button
      type="button"
      class="wa-launcher"
      id="waLauncher"
      aria-label="${t.launcherLabel}"
      aria-expanded="${isOpen}"
      aria-controls="waPopup"
    >
      <svg viewBox="0 0 24 24" class="wa-icon" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M19.11 4.93A9.9 9.9 0 0 0 3.6 16.88L2 22l5.24-1.54a9.89 9.89 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.79-6.84Zm-7.12 15.1h-.01c-1.53 0-3.03-.41-4.34-1.18l-.31-.18-3.11.91.84-3.03-.2-.32a8.26 8.26 0 1 1 7.13 3.8Zm4.53-6.18c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.12-.57.13-.17.25-.66.82-.8.99-.15.17-.29.19-.54.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.69-.14-.25-.02-.38.11-.5.12-.12.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.87-.21-.51-.42-.44-.57-.45h-.49c-.17 0-.45.06-.68.32-.23.25-.89.87-.89 2.11s.92 2.44 1.05 2.6c.13.17 1.82 2.77 4.42 3.89.62.27 1.11.43 1.49.55.63.2 1.2.17 1.65.1.5-.08 1.49-.61 1.7-1.2.21-.59.21-1.09.15-1.2-.06-.1-.23-.17-.48-.3Z"
        />
      </svg>
      <span class="wa-pulse" aria-hidden="true"></span>
    </button>
    <div
      id="waPopup"
      class="wa-popup ${isOpen ? 'is-open' : ''}"
      role="dialog"
      aria-modal="false"
      aria-labelledby="wa-title"
      aria-hidden="${!isOpen}"
    >
      <div class="wa-header">
        <div>
          <p class="wa-eyebrow" id="waEyebrow">${t.eyebrow}</p>
          <h2 id="wa-title" class="wa-title">${t.title}</h2>
        </div>
        <button
          type="button"
          class="wa-close"
          id="waClose"
          aria-label="${t.closeLabel}"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
      <p class="wa-intro" id="waIntro">${t.intro}</p>
      <div class="wa-options" id="waOptions">
        ${optionsHtml}
      </div>
      <div class="wa-notice" id="waNotice">
        <strong id="waNoticeHours">${t.hoursTitle}</strong>
        <span id="waNoticeDays">${t.hoursDesc}</span>
      </div>
    </div>
  `;
}

/**
 * Toggles the popup open or closed
 */
function setPopupOpen(open) {
  isOpen = open;
  const launcher = document.getElementById("waLauncher");
  const popup = document.getElementById("waPopup");
  if (launcher) launcher.setAttribute("aria-expanded", String(isOpen));
  if (popup) {
    popup.classList.toggle("is-open", isOpen);
    popup.setAttribute("aria-hidden", String(!isOpen));
  }
}

/**
 * Attaches event listeners for clicks, keyboard navigation, and outside clicks
 */
function attachWidgetEvents(widgetContainer) {
  const launcher = widgetContainer.querySelector("#waLauncher");
  const closeBtn = widgetContainer.querySelector("#waClose");

  if (launcher) {
    launcher.onclick = (e) => {
      e.stopPropagation();
      setPopupOpen(!isOpen);
    };
  }

  if (closeBtn) {
    closeBtn.onclick = (e) => {
      e.stopPropagation();
      setPopupOpen(false);
    };
  }

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (isOpen && !widgetContainer.contains(e.target)) {
      setPopupOpen(false);
    }
  });

  // Close on Escape key press
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen) {
      setPopupOpen(false);
      if (launcher) launcher.focus();
    }
  });
}

/**
 * Mounts or hydrates the WhatsApp Widget in the DOM
 */
export function initWhatsAppWidget(options = {}) {
  if (options.lang) {
    currentLang = options.lang;
  }

  let widgetContainer = document.querySelector(".wa-widget");

  if (!widgetContainer) {
    widgetContainer = document.createElement("div");
    widgetContainer.className = "wa-widget";
    widgetContainer.id = "waWidget";
    document.body.appendChild(widgetContainer);
  }

  widgetContainer.innerHTML = renderWidgetHtml();
  attachWidgetEvents(widgetContainer);
}

/**
 * Reactively updates the widget's language (ID/EN)
 */
export function updateWhatsAppWidgetLang(newLang) {
  currentLang = newLang;
  const widgetContainer = document.querySelector(".wa-widget");
  if (widgetContainer) {
    const wasOpen = isOpen;
    widgetContainer.innerHTML = renderWidgetHtml();
    attachWidgetEvents(widgetContainer);
    if (wasOpen) setPopupOpen(true);
  }
}

// Auto-initialize when DOM is ready if script is directly included
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initWhatsAppWidget());
  } else {
    initWhatsAppWidget();
  }
}
