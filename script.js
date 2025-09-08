// Mobile navigation toggle
const navToggleButton = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggleButton && navMenu) {
  navToggleButton.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', event => {
    const targetId = anchor.getAttribute('href');
    if (targetId && targetId.length > 1) {
      const el = document.querySelector(targetId);
      if (el) {
        event.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// FAQ keyboard enhancement: ensure <summary> is focusable
document.querySelectorAll('details > summary').forEach(summary => {
  summary.setAttribute('tabindex', '0');
});

// Simple form validation
const quoteForm = document.querySelector('.quote-form');
if (quoteForm) {
  quoteForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(quoteForm);

    const name = String(formData.get('name') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const type = String(formData.get('type') || '').trim();

    const errors = [];
    if (!name) errors.push('Name is required');
    if (!phone) errors.push('Phone is required');
    if (!type) errors.push('Project type is required');
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Email is invalid');

    if (errors.length) {
      alert('Please fix the following:\n\n' + errors.map((e, i) => `${i + 1}. ${e}`).join('\n'));
      return;
    }

    // Simulate submission success
    alert('Thanks! Your request was sent. We\'ll be in touch shortly.');
    quoteForm.reset();
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

