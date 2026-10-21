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
      iconSvg: `<i class="ri-customer-service-2-line" style="font-size: 1.35rem;"></i>`
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
      iconSvg: `<i class="ri-tools-line" style="font-size: 1.35rem;"></i>`
    },
    {
      id: "demo",
      title: {
        id: "Trial Resep di Test Kitchen",
        en: "Recipe Trial at Test Kitchen"
      },
      subtitle: {
        id: "Uji coba adonan langsung di Showroom PIK JKT & Workshop Bekasi",
        en: "Live ingredient testing in PIK Jakarta or Bekasi workshop"
      },
      message: {
        id: "Halo Relasi Sukses, saya ingin menjadwalkan kunjungan & uji coba resep di Test Kitchen Showroom PIK.",
        en: "Hello Relasi Sukses, I would like to schedule a visit and live recipe trial at your PIK Test Kitchen Showroom."
      },
      iconSvg: `<i class="ri-flask-line" style="font-size: 1.35rem;"></i>`
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
        <span class="wa-arrow" aria-hidden="true"><i class="ri-arrow-right-line"></i></span>
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
      <i class="ri-whatsapp-fill wa-icon" style="font-size: 1.85rem; line-height: 1;" aria-hidden="true"></i>
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
          <i class="ri-close-line" style="font-size: 1.35rem;" aria-hidden="true"></i>
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
