// MK Services — site interactions

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.textContent = isOpen ? "✕" : "☰";
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.textContent = "☰";
      });
    });
  }

  // Back-to-top button
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.classList.toggle("visible", window.scrollY > 500);
    });
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Quote request form (front-end only, no backend wired up yet)
  const quoteForm = document.querySelector(".contact-form");
  if (quoteForm) {
    quoteForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const statusEl = quoteForm.querySelector(".form-status");
      const nameInput = quoteForm.querySelector("#name");
      const name = nameInput ? nameInput.value.trim() : "";
      if (statusEl) {
        statusEl.textContent = name
          ? `Thanks, ${name}! We'll be in touch soon with your free quote.`
          : "Thanks! We'll be in touch soon with your free quote.";
      }
      quoteForm.reset();
    });
  }

  // Footer year
  const yearEl = document.querySelector("#footer-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
