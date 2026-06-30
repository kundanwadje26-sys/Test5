// AKap Group — Main JS

// Apply centrally-managed image paths (see images.js) to every
// element tagged with data-img="key". This is what lets a logo or
// photo file be renamed/replaced in ONE place (images.js) instead
// of in every HTML file that references it.
function applySiteImages() {
  if (typeof SITE_IMAGES === 'undefined') return;
  document.querySelectorAll('[data-img]').forEach((el) => {
    const key = el.getAttribute('data-img');
    const path = SITE_IMAGES[key];
    if (path && el.getAttribute('src') !== path) {
      el.setAttribute('src', path);
    }
  });
}
document.addEventListener('DOMContentLoaded', applySiteImages);

// Navbar scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) { navbar.classList.add('scrolled'); }
    else { navbar.classList.remove('scrolled'); }
  });
}

// Mobile hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Scroll reveal animations
function initScrollReveal() {
  const els = document.querySelectorAll('.business-card, .value-item, .leader-preview-card, .director-card, .mission-card, .business-detail-card, .contact-item');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', initScrollReveal);
