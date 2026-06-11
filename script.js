// ===========================
// ACTIVE NAV LINK ON SCROLL
// ===========================

var sections = document.querySelectorAll("section");
var navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {
  var scrollPos = window.scrollY + 80;

  sections.forEach(function (section) {
    var top = section.offsetTop;
    var height = section.offsetHeight;
    var id = section.getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(function (link) {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + id) {
          link.classList.add("active");
        }
      });
    }
  });
});


// ===========================
// FADE IN ON SCROLL
// ===========================

var fadeElements = document.querySelectorAll(
  ".about-box, .exp-card, .skill-card, .contact-item"
);

function checkFade() {
  fadeElements.forEach(function (el) {
    var top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 60) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
}

fadeElements.forEach(function (el) {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
});

window.addEventListener("scroll", checkFade);
checkFade();


// ===========================
// SMOOTH CLOSE MOBILE NAV
// ===========================

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.forEach(function (l) { l.classList.remove("active"); });
    this.classList.add("active");
  });
});