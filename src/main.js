// ============================================
// Portfolio — Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Nav Toggle ---
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const icon = navToggle.querySelector('.material-symbols-outlined');
      icon.textContent = navLinks.classList.contains('open') ? 'close' : 'menu';
    });

    // Close menu on link click (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const icon = navToggle.querySelector('.material-symbols-outlined');
        icon.textContent = 'menu';
      });
    });
  }

  // --- Contact Form Handler ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('.form-submit');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<span class="material-symbols-outlined" style="font-size:18px;">check_circle</span> TRANSMISSION_COMPLETE';
      btn.style.background = 'var(--surface-container-highest)';
      btn.style.color = 'var(--primary)';
      btn.disabled = true;

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        btn.style.color = '';
        btn.disabled = false;
        contactForm.reset();
      }, 3000);
    });
  }

  // --- Project Card Hover Sound Effect (Visual Feedback) ---
  document.querySelectorAll('.project-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      // Flash effect
      card.style.transition = 'box-shadow 0.1s ease';
      card.style.boxShadow = '0 0 20px rgba(255,255,255,0.08)';
      setTimeout(() => {
        card.style.boxShadow = 'none';
      }, 300);
    });
  });

  // --- Typing Effect for Hero Subtitle ---
  const heroSubtitle = document.querySelector('.hero-subtitle');
  if (heroSubtitle) {
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    heroSubtitle.style.visibility = 'visible';
    let i = 0;
    const typeInterval = setInterval(() => {
      heroSubtitle.textContent += text[i];
      i++;
      if (i >= text.length) clearInterval(typeInterval);
    }, 50);
  }

  // --- Intersection Observer for Fade-In ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.project-card, .link-item, .form-group').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
});
