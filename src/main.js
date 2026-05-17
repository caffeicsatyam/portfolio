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

      // Extract form values
      const name = document.getElementById('userName').value;
      const email = document.getElementById('userEmail').value;
      const subject = document.getElementById('userSubject').value || 'Message from Portfolio';
      const message = document.getElementById('userMessage').value;

      // Construct mailto URL
      const bodyText = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
      const mailtoLink = `mailto:satyamchaturvedibbk@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;

      // Trigger the email client
      window.location.href = mailtoLink;

      // Visual feedback
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

  // --- Dynamic Spotlight Effect ---
  const glow = document.createElement('div');
  glow.style.position = 'fixed';
  glow.style.top = '0';
  glow.style.left = '0';
  glow.style.width = '100vw';
  glow.style.height = '100vh';
  glow.style.pointerEvents = 'none';
  glow.style.zIndex = '9999';
  glow.style.background = 'radial-gradient(600px circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh), rgba(255, 255, 255, 0.15), transparent 40%)';
  document.body.appendChild(glow);

  document.addEventListener('mousemove', (e) => {
    window.requestAnimationFrame(() => {
      glow.style.setProperty('--mouse-x', `${e.clientX}px`);
      glow.style.setProperty('--mouse-y', `${e.clientY}px`);
    });
  });

  // --- Artistic SVG Streetlamp ---
  const lampStyle = document.createElement('style');
  lampStyle.innerHTML = `
    @keyframes lampPulse {
      0% { filter: drop-shadow(0 0 15px var(--primary)) drop-shadow(0 0 30px var(--primary)); opacity: 0.85; }
      100% { filter: drop-shadow(0 0 30px var(--primary)) drop-shadow(0 0 60px var(--primary)) drop-shadow(0 0 90px var(--primary)); opacity: 1; }
    }
    @keyframes greenLampPulse {
      0% { filter: drop-shadow(0 0 8px #4ade80) drop-shadow(0 0 15px #22c55e); opacity: 0.8; }
      100% { filter: drop-shadow(0 0 18px #4ade80) drop-shadow(0 0 30px #22c55e) drop-shadow(0 0 45px #15803d); opacity: 1; }
    }
  `;
  document.head.appendChild(lampStyle);

  const lamp = document.createElement('div');
  lamp.innerHTML = `
    <svg width="160" height="260" viewBox="0 0 160 260" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
      <!-- Curved Pole -->
      <path d="M 30 260 L 30 80 C 30 30 60 20 100 20" stroke="var(--outline-variant)" stroke-width="8" fill="none" stroke-linecap="round"/>
      
      <!-- Hanging Housing -->
      <rect x="97" y="16" width="6" height="24" fill="var(--outline-variant)" rx="2"/>
      <path d="M 85 40 L 115 40 L 108 60 L 92 60 Z" fill="var(--outline-variant)"/>
      <path d="M 92 60 L 108 60 L 103 75 L 97 75 Z" fill="var(--outline-variant)"/>
      
      <!-- Large Glowing Bulb -->
      <circle cx="100" cy="72" r="14" fill="#fff" style="animation: lampPulse 4s infinite alternate ease-in-out;"/>
    </svg>
  `;
  lamp.style.position = 'fixed';
  lamp.style.bottom = '0';
  lamp.style.left = '32px';
  lamp.style.pointerEvents = 'none';
  lamp.style.zIndex = '-1';

  // --- Sprouting Flowers at Left Lamp Base ---
  const flower1 = document.createElement('div');
  flower1.style.position = 'absolute';
  flower1.style.bottom = '0';
  flower1.style.left = '8px';
  flower1.innerHTML = `
    <svg width="24" height="40" viewBox="0 0 24 40" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
      <path d="M 12 40 Q 8 28 12 16 Q 16 12 12 6" stroke="var(--outline-variant)" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M 11 30 Q 4 28 8 23 Q 12 25 11 30 Z" fill="var(--outline-variant)"/>
      <circle cx="12" cy="6" r="3.5" fill="#bbf7d0" style="animation: greenLampPulse 3s infinite alternate ease-in-out;"/>
    </svg>
  `;
  lamp.appendChild(flower1);

  const flower2 = document.createElement('div');
  flower2.style.position = 'absolute';
  flower2.style.bottom = '0';
  flower2.style.left = '42px';
  flower2.style.transform = 'scaleX(-1)';
  flower2.innerHTML = `
    <svg width="20" height="30" viewBox="0 0 20 30" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
      <path d="M 10 30 Q 6 20 10 12 Q 14 9 10 4" stroke="var(--outline-variant)" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <circle cx="10" cy="4" r="3" fill="#bbf7d0" style="animation: greenLampPulse 2.5s infinite alternate ease-in-out;"/>
    </svg>
  `;
  lamp.appendChild(flower2);

  document.body.appendChild(lamp);

  // --- Artistic SVG Streetlamp (Right) ---
  const rightLamp = lamp.cloneNode(true);
  rightLamp.style.left = 'auto';
  rightLamp.style.right = '32px';
  rightLamp.style.transform = 'scaleX(-1)';
  document.body.appendChild(rightLamp);

  // --- Glowing Climbing Vines for Containers (Projects, Links, Contact) ---
  const containerSelectors = ['.project-card', '.links-nav', '.contact-form'];
  containerSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, index) => {
      el.style.position = 'relative';
      
      const createVine = (side) => {
        const vine = document.createElement('div');
        vine.className = 'card-vine';
        vine.innerHTML = `
          <svg width="40" height="100" viewBox="0 0 40 100" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
            <!-- Organic Vine stem mounting on container edge (x=40) -->
            <path d="M 40 90 Q 25 75 32 55 Q 12 35 24 15" stroke="var(--outline-variant)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            
            <!-- Top drooping glowing bud -->
            <path d="M 24 15 Q 26 10 24 6" stroke="var(--outline-variant)" stroke-width="1.8" fill="none"/>
            <circle cx="24" cy="6" r="3.5" fill="#bbf7d0" style="animation: greenLampPulse 3s infinite alternate ease-in-out;"/>
            
            <!-- Middle offset glowing bud -->
            <path d="M 32 55 Q 18 50 15 42" stroke="var(--outline-variant)" stroke-width="1.8" fill="none" stroke-linecap="round"/>
            <circle cx="15" cy="42" r="3" fill="#bbf7d0" style="animation: greenLampPulse 2.4s infinite alternate ease-in-out;"/>
            
            <!-- Detailed leafy structures -->
            <path d="M 36 78 Q 24 82 28 72 Q 34 72 36 78 Z" fill="var(--outline-variant)"/>
            <path d="M 22 30 Q 12 24 18 18 Q 24 22 22 30 Z" fill="var(--outline-variant)"/>
          </svg>
        `;
        
        vine.style.position = 'absolute';
        vine.style.top = '16px';
        vine.style.pointerEvents = 'none';
        vine.style.zIndex = '5';
        
        if (side === 'left') {
          vine.style.left = '-40px';
        } else {
          vine.style.right = '-40px';
          vine.style.transform = 'scaleX(-1)';
        }
        return vine;
      };

      if (selector === '.project-card') {
        // Alternating for grid cards
        if (index % 2 === 0) {
          el.appendChild(createVine('left'));
        } else {
          el.appendChild(createVine('right'));
        }
      } else {
        // Frame central columns (Links directory, Contact form) with vines on both sides!
        el.appendChild(createVine('left'));
        el.appendChild(createVine('right'));
      }
    });
  });
});
