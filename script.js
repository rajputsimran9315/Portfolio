/* ── TYPEWRITER ── */
const roles = [
  'Full-Stack Developer',
  'API Architect',
  'Open Source Contributor',
  'Performance Enthusiast',
  'UI/UX-minded Engineer',
];
let ri = 0, ci = 0, deleting = false;
const tw = document.getElementById('typewriter');

function typewrite() {
  const current = roles[ri];
  if (!deleting) {
    tw.innerHTML = current.slice(0, ci + 1) + '<span class="cursor"></span>';
    ci++;
    if (ci === current.length) {
      deleting = true;
      setTimeout(typewrite, 1800);
      return;
    }
  } else {
    tw.innerHTML = current.slice(0, ci - 1) + '<span class="cursor"></span>';
    ci--;
    if (ci === 0) {
      deleting = false;
      ri = (ri + 1) % roles.length;
    }
  }
  setTimeout(typewrite, deleting ? 55 : 90);
}

typewrite();

/* ── SCROLL REVEAL ── */
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => io.observe(el));

/* ── HAMBURGER MENU ── */
const ham = document.getElementById('hamburger');
const mob = document.getElementById('mobile-menu');

ham.addEventListener('click', () => {
  ham.classList.toggle('open');
  mob.classList.toggle('open');
});

function closeMobile() {
  ham.classList.remove('open');
  mob.classList.remove('open');
}

/* ── NAV ACTIVE HIGHLIGHT ON SCROLL ── */
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) cur = s.id;
  });
  links.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--cyan)' : '';
  });
}, { passive: true });