/**
 * RELASI SUKSES (relasisukses.co.id)
 * Canonical WhatsApp Deep-Link Builder
 * Clean Code Architecture: Single Responsibility, strongly typed options, null-safe
 */

import { companyData } from "../data/company.js";

/**
 * Creates a pre-filled, URL-encoded WhatsApp click-to-chat URL
 * @param {Object} options
 * @param {string} [options.phone] - Target phone number (defaults to company hotline)
 * @param {string} [options.message] - Explicit message string
 * @param {Object} [options.product] - Product entity for quotation/demo prefill
 * @param {"general"|"quote"|"demo"|"service"|"custom"} [options.intent="general"] - User intent
 * @param {"id"|"en"} [options.lang="id"] - Target language
 * @returns {string} Fully encoded https://wa.me/... link
 */
export function buildWhatsAppLink({
  phone = null,
  message = null,
  product = null,
  intent = "general",
  lang = "id"
} = {}) {
  const targetPhone = phone || companyData.whatsapp.number;

  // 1. If explicit message is provided, use directly
  if (message) {
    return `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
  }

  // 2. Product-specific intent messages
  if (product) {
    const title = product.title ? (product.title[lang] || product.title.id) : (product.name || "Mesin");
    const code = product.modelCode || product.id || "";

    if (intent === "demo") {
      const demoMsg = lang === "id"
        ? `Halo Sales Engineer Relasi Sukses, saya ingin menjadwalkan UJI COBA / DEMO LANGSUNG untuk mesin *${title}* (Tipe: ${code}). Mohon info jadwal ketersediaan unit demo di showroom.`
        : `Hello Relasi Sukses Sales Engineer, I would like to schedule a LIVE DEMO & TEST RUN for *${title}* (Model: ${code}). Please let me know the available showroom schedule.`;
      return `https://wa.me/${targetPhone}?text=${encodeURIComponent(demoMsg)}`;
    }

    const quoteMsg = lang === "id"
      ? `Halo Sales Engineer Relasi Sukses, saya tertarik dengan mesin *${title}* (Tipe: ${code}). Tolong kirimkan penawaran spesifikasi & konsultasi daya listrik untuk tempat usaha saya.`
      : `Hello Relasi Sukses Sales Engineer, I am inquiring about the *${title}* (Model: ${code}). Please provide detailed quotation and electrical consultation for our facility.`;
    return `https://wa.me/${targetPhone}?text=${encodeURIComponent(quoteMsg)}`;
  }

  // 3. Fallback to default company message
  const defaultMsg = companyData.whatsapp.defaultMessage[lang] || companyData.whatsapp.defaultMessage.id;
  return `https://wa.me/${targetPhone}?text=${encodeURIComponent(defaultMsg)}`;
}
