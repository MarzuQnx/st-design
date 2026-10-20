/**
 * Shared Mobile Navigation & Header UX Component
 * Compliant with /ui-ux-pro-max:
 * - Minimum 44x44px touch targets
 * - Keyboard accessible (Esc to close, aria-expanded)
 * - Click outside to dismiss
 * - Auto-dismiss on link navigation
 * - Synchronizes body class .mobile-menu-open to prevent floating widget overlaps
 */
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const navMenu = document.getElementById("nav-menu");

  if (!mobileMenuBtn || !navMenu) return;

  function closeMenu() {
    navMenu.classList.remove("mobile-open");
    document.body.classList.remove("mobile-menu-open");
    mobileMenuBtn.setAttribute("aria-expanded", "false");
    mobileMenuBtn.classList.remove("is-active");
  }

  function openMenu() {
    navMenu.classList.add("mobile-open");
    document.body.classList.add("mobile-menu-open");
    mobileMenuBtn.setAttribute("aria-expanded", "true");
    mobileMenuBtn.classList.add("is-active");
  }

  function toggleMenu() {
    if (navMenu.classList.contains("mobile-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  mobileMenuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close when clicking on any link inside the mobile menu
  navMenu.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // Close when tapping outside the menu and button
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      if (navMenu.classList.contains("mobile-open")) {
        closeMenu();
      }
    }
  });

  // Close on Escape key press
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("mobile-open")) {
      closeMenu();
    }
  });
});
