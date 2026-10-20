# Standard Default Component: Floating WhatsApp Widget (Chatura Architecture)

## 1. Overview
Whenever creating websites or web applications that require customer contact, lead capture, or instant support, **always use the Chatura-Standard Floating WhatsApp Widget as the default floating component** instead of a simple static button or plain link.

This component originated in the `backend.chatura` / `chatura` ecosystem and provides a high-converting, professional, multi-department conversational interface.

---

## 2. Core UX & Architectural Standards

### 2.1 Component Structure
1. **Floating Launcher Button (`.wa-launcher`)**:
   - Fixed at bottom-right (`1.5rem` / `24px` offset, z-index `99999`).
   - Circular button (56px–58px diameter) with official WhatsApp green (`#25D366`), white icon, and active hover elevation.
   - **Continuous Radiating Pulse Ring (`.wa-pulse`)**: Animated ring expanding outward to draw user attention subtly without annoying vibration.
   - ARIA controls: `aria-expanded`, `aria-controls="waPopup"`, `aria-label`.

2. **Animated Popup Dialog (`.wa-popup`)**:
   - Positioned above the launcher (`bottom: 74px; right: 0; width: 340px–360px`).
   - Smooth entrance using `cubic-bezier(0.16, 1, 0.3, 1)` opacity and scale transform (`translateY(14px) scale(0.95)` to `translateY(0) scale(1)`).
   - Dismissible via `.is-open` toggle class.

3. **Dialog Header (`.wa-header`)**:
   - Dark WhatsApp green background (`#075E54`) with subtle accent line.
   - **Eyebrow Tag (`.wa-eyebrow`)**: Glowing dot indicator + Brand Support title (e.g., `[BRAND] SUPPORT`).
   - **Title (`.wa-title`)**: Conversational heading (e.g., "Ada yang bisa kami bantu?" / "How can we help?").
   - **Close Button (`.wa-close`)**: Clean 'X' button with hover backdrop.

4. **Intro Guidance (`.wa-intro`)**:
   - Concise sentence directing user to choose the right department for faster routing.

5. **Department Routing Options (`.wa-options`)**:
   - Multiple targeted routing options (e.g., *Sales / Konsultasi*, *Technical Support / Servis*, *Showroom / Demo*, *General Inquiry*).
   - Each option item (`.wa-option`) contains:
     - Department-specific SVG icon inside light badge (`.wa-option-icon`).
     - Strong title + descriptive secondary subtitle.
     - Direct pre-filled WhatsApp link with encoded message.
     - Arrow indicator (`.wa-arrow` &rarr;).

6. **Consultation / Support Hours Notice (`.wa-notice`)**:
   - Transparent operating schedule (e.g., "JAM OPERASIONAL KONSULTASI: Senin – Sabtu, 08.00 – 17.00 WIB").

---

## 3. Required Interactions & Accessibility
All implementations must adhere to these behavioral rules:
- **Outside Click Dismissal**: Clicking anywhere outside the popup automatically closes it.
- **Keyboard Escape**: Pressing `Escape` closes the popup and restores focus to the launcher.
- **Accessibility Attributes**:
  - `role="dialog"`
  - `aria-modal="false"`
  - `aria-hidden="true/false"`
  - `aria-expanded="true/false"`
- **Bilingual & Reactive**:
  - If the website supports multi-language (e.g., ID and EN), the widget must update its eyebrow, title, intro, options, and pre-filled messages on the fly without page reload.
- **Mobile Responsive**:
  - On screens &le; 420px, set `width: calc(100vw - 2rem)` and `right: 0` to prevent horizontal viewport overflow.

---

## 4. Reusable Implementation Blueprint

### CSS (`whatsapp-widget.css`)
```css
.wa-widget {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 99999;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

body.overflow-hidden .wa-widget,
.mobile-menu-open .wa-widget {
  display: none !important;
}

.wa-launcher {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: #25D366;
  color: #ffffff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 28px rgba(37, 211, 102, 0.45);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s;
  position: relative;
}

.wa-launcher:hover {
  transform: scale(1.08);
  box-shadow: 0 8px 36px rgba(37, 211, 102, 0.6);
}

.wa-pulse {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid #25D366;
  animation: wa-pulse-ring 2.2s cubic-bezier(0.24, 0, 0.38, 1) infinite;
  pointer-events: none;
}

@keyframes wa-pulse-ring {
  0% { transform: scale(1); opacity: 0.75; }
  100% { transform: scale(1.55); opacity: 0; }
}

.wa-popup {
  position: absolute;
  bottom: 74px;
  right: 0;
  width: 350px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.22);
  overflow: hidden;
  opacity: 0;
  transform: translateY(14px) scale(0.95);
  pointer-events: none;
  transition: opacity 0.28s cubic-bezier(0.16, 1, 0.3, 1), transform 0.28s;
  border: 1px solid rgba(0, 0, 0, 0.06);
}

.wa-popup.is-open {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.wa-header {
  background: #075E54;
  color: #ffffff;
  padding: 18px 20px 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.wa-eyebrow {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #80e2a7;
  margin: 0 0 4px 0;
}

.wa-title {
  font-size: 17px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
}

.wa-close {
  background: rgba(255, 255, 255, 0.12);
  border: none;
  color: #ffffff;
  cursor: pointer;
  padding: 6px;
  border-radius: 8px;
}

.wa-intro {
  padding: 14px 18px 12px;
  font-size: 12.5px;
  color: #555566;
  line-height: 1.5;
  background: #fbfbfb;
  border-bottom: 1px solid #ebebeb;
}

.wa-options {
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: #ffffff;
}

.wa-option {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: background 0.2s;
}

.wa-option:hover {
  background: #f0faf4;
}

.wa-option-icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: #e8f5ee;
  color: #075E54;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wa-option-content strong {
  display: block;
  font-size: 13.5px;
  color: #1a1a2e;
}

.wa-option-content span {
  display: block;
  font-size: 11.5px;
  color: #6c757d;
}

.wa-arrow {
  color: #25D366;
  font-weight: 700;
  margin-left: auto;
}

.wa-notice {
  padding: 11px 18px;
  background: #f8f9fa;
  border-top: 1px solid #ebebeb;
  font-size: 11px;
  color: #777788;
  text-align: center;
}

@media (max-width: 420px) {
  .wa-popup {
    width: calc(100vw - 2rem);
  }
}
```

### JS Controller (`whatsapp-widget.js`)
See full implementation in `st-design/js/components/whatsapp-widget.js`.
Exports:
- `initWhatsAppWidget(options)`
- `updateWhatsAppWidgetLang(newLang)`
Auto-initializes on DOM ready.
