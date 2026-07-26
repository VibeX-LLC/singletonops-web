(function () {
  const cfg = window.SINGLETONOPS || {};
  const stripe = cfg.stripePaymentLink || "#";
  const email = cfg.supportEmail || "hello@singletonops.ai";
  const booking = cfg.bookingUrl || "";

  // Wire buy links
  document.querySelectorAll("[data-buy]").forEach((el) => {
    el.setAttribute("href", stripe);
    if (stripe.includes("REPLACE_ME")) {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        alert(
          "Stripe Payment Link is not connected yet.\n\nUpdate assets/config.js → stripePaymentLink when VibeX LLC payments are live."
        );
      });
    }
  });

  // Wire mailto CTAs
  document.querySelectorAll("[data-mailto]").forEach((el) => {
    const subject = el.getAttribute("data-mailto") || "SingletonOps inquiry";
    el.setAttribute(
      "href",
      "mailto:" + email + "?subject=" + encodeURIComponent(subject)
    );
  });

  // Optional booking
  document.querySelectorAll("[data-booking]").forEach((el) => {
    if (!booking) {
      el.style.display = "none";
    } else {
      el.setAttribute("href", booking);
    }
  });

  // Year
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  // Checkout note
  if (stripe.includes("REPLACE_ME")) {
    document.querySelectorAll("[data-checkout-note]").forEach((el) => {
      el.hidden = false;
    });
  }
})();
