const menuToggle = document.getElementById('menuToggle');
    const primaryNav = document.getElementById('primaryNav');
    menuToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // mobile dropdown toggle for Products
    const productsToggle = document.getElementById('productsToggle');
    const productsDropdown = document.getElementById('productsDropdown');
    productsToggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 760) {
        e.preventDefault();
        productsDropdown.classList.toggle('open');
      }
    });

    // close mobile menu after clicking a link
    document.querySelectorAll('.primary-nav a:not(#productsToggle)').forEach(a => {
      a.addEventListener('click', () => {
        if (window.innerWidth <= 760) {
          primaryNav.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

// Subtle section entrance animation
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    sections.forEach(section => section.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  sections.forEach(section => observer.observe(section));
});


/* =================================
   JBM ENGINEERING - WHATSAPP REQUEST
================================= */

document.addEventListener("DOMContentLoaded", () => {

    const quoteForm = document.querySelector(".quote-form");

    if (!quoteForm) return;

    quoteForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let equipment = document.getElementById("equipment").value.trim();
        let message = document.getElementById("message").value.trim();

        // Check required fields
        if (name === "" || phone === "" || equipment === "") {
            alert("Please fill all the required details first.");
            return;
        }

        // Create WhatsApp message
        let whatsappMessage = `🛠️ JBM ENGINEERING - Service Request

👤 Customer Name: ${name}
📱 Phone: ${phone}
🔧 Equipment / Service: ${equipment}
📝 Details: ${message || "No additional details provided."}`;

        // JBM Engineering WhatsApp number
        let whatsappURL =
            `https://wa.me/917016153892?text=${encodeURIComponent(whatsappMessage)}`;

        // Open WhatsApp
        window.open(whatsappURL, "_blank");

        // Open success page
        setTimeout(() => {
            window.location.href = "success.html";
        }, 1000);

    });

});