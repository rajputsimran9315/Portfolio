// Close nav when any link is clicked
// ======================
// HAMBURGER TOGGLE
// ======================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const allLinks = document.querySelectorAll(".nav-links a");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");
    // set accessible state
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  // Close nav when any link is clicked
  allLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}


// ======================
// ACTIVE LINK ON SCROLL (IntersectionObserver)
// ======================
const sections = document.querySelectorAll("section[id]");
if (sections.length > 0 && allLinks.length > 0) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        allLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${id}`));
      });
    },
    { root: null, rootMargin: "-40% 0px -55% 0px", threshold: 0 }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}


// ======================
// NAVBAR SHADOW ON SCROLL (toggle class)
// ======================
const navbar = document.querySelector(".navbar");
if (navbar) {
  const handleNavShadow = () => {
    if (window.scrollY > 10) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleNavShadow, { passive: true });
  handleNavShadow();
}


// ======================
// FADE IN ON SCROLL (IntersectionObserver)
// ======================
const fadeItems = document.querySelectorAll(
  ".project-card, .skill-card, .contact-card, .exp-box, .about-card"
);

if (fadeItems.length > 0) {
  fadeItems.forEach((el) => el.classList.add("reveal"));

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      });
    },
    { root: null, rootMargin: "0px 0px -60px 0px", threshold: 0.01 }
  );

  fadeItems.forEach((el) => revealObserver.observe(el));
}