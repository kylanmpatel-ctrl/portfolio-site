// =========================================
//  PORTFOLIO — script.js
// =========================================

// --- NAV: scroll effect ---
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// --- HAMBURGER / MOBILE MENU ---
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
let menuOpen = false;

hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('open', menuOpen);
  // Animate hamburger to X
  const spans = hamburger.querySelectorAll('span');
  if (menuOpen) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false;
    mobileMenu.classList.remove('open');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  });
});

// --- SCROLL REVEAL ---
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger children a bit
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 0);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

// Observe data-reveal elements
document.querySelectorAll('[data-reveal]').forEach(el => {
  revealObserver.observe(el);
});

// Observe timeline items with stagger
document.querySelectorAll('.timeline-item').forEach((el, i) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 120);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  observer.observe(el);
});

// Observe project cards with stagger
document.querySelectorAll('.project-card').forEach((el, i) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 100);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  observer.observe(el);
});

// --- SMOOTH ACTIVE NAV LINKS ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--ink)' : '';
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(s => sectionObserver.observe(s));

// --- CONTACT FORM ---
// HOW TO MAKE THIS SEND TO YOUR EMAIL:
// 1. Go to https://formspree.io and sign up for free
// 2. Click "New Form", name it anything, and set the email to Kylanmpatel@gmail.com
// 3. Copy your Form ID (looks like "xpwzgkab") and paste it below
const FORMSPREE_ID = 'YOUR_FORM_ID'; // <-- replace this

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);

  if (FORMSPREE_ID === 'YOUR_FORM_ID') {
    status.textContent = 'Set up Formspree first — see instructions in script.js';
    status.className = 'form-note error';
    return;
  }

  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  try {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' }
    });

    if (res.ok) {
      status.textContent = '✓ Message sent! I will get back to you soon.';
      status.className = 'form-note success';
      form.reset();
      btn.textContent = 'Send message →';
      btn.disabled = false;
    } else {
      throw new Error('Server error');
    }
  } catch {
    status.textContent = '✗ Something went wrong. Email me directly at Kylanmpatel@gmail.com';
    status.className = 'form-note error';
    btn.textContent = 'Send message →';
    btn.disabled = false;
  }
});
