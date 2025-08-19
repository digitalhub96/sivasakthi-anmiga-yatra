AOS.init({
  duration: 1200,
  once: true,
  offset: 120,
  easing: "ease-out-cubic",
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", function () {
    const overlay = document.createElement("div");
    overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

    const clonedSvg = this.querySelector("svg").cloneNode(true);
    clonedSvg.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            border-radius: 20px;
            transform: scale(0.8);
            transition: transform 0.3s ease;
        `;

    overlay.appendChild(clonedSvg);
    document.body.appendChild(overlay);

    setTimeout(() => {
      overlay.style.opacity = "1";
      clonedSvg.style.transform = "scale(1)";
    }, 10);

    overlay.addEventListener("click", function () {
      overlay.style.opacity = "0";
      clonedSvg.style.transform = "scale(0.8)";
      setTimeout(() => {
        document.body.removeChild(overlay);
      }, 300);
    });
  });
});

window.addEventListener("load", function () {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.7s ease";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

// Parallax effect for hero section
window.addEventListener("scroll", function () {
  const hero = document.querySelector(".hero");
  const scrollPosition = window.pageYOffset;
  hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});


// Whatsapp Script

document
  .getElementById("enquiryForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const whatsappNumber = "+919442511961"; // Replace with your WhatsApp number
    const whatsappMessage = `Enquiry from ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  });