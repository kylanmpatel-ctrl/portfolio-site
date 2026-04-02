// =========================================
//  PORTFOLIO — script.js
// =========================================

// --- NAV: scroll effect ---
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// --- HAMBURGER / MOBILE MENU ---
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileClose = document.getElementById('mobile-close');

function openMenu() {
  mobileMenu.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', openMenu);
mobileClose.addEventListener('click', closeMenu);

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// --- ACTIVE NAV LINKS ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        if (link.getAttribute('href') === '#' + id) {
          link.style.color = 'var(--white)';
        } else {
          link.style.color = '';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// --- CONTACT FORM ---
// HOW TO MAKE THIS SEND TO YOUR EMAIL:
// 1. Go to https://formspree.io and sign up for free
// 2. Click "New Form", set the email to Kylanmpatel@gmail.com
// 3. Copy your Form ID and paste it below
const FORMSPREE_ID = 'xpqojzvq';

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);

  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  try {
    const res = await fetch('https://formspree.io/f/' + FORMSPREE_ID, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' }
    });

    if (res.ok) {
      status.textContent = 'Message sent! I will get back to you soon.';
      status.className = 'form-note success';
      form.reset();
    } else {
      throw new Error('Server error');
    }
  } catch (err) {
    status.textContent = 'Something went wrong. Email me directly at Kylanmpatel@gmail.com';
    status.className = 'form-note error';
  } finally {
    btn.textContent = 'Send message';
    btn.disabled = false;
  }
});
