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
    .glow-bulb {
      filter: drop-shadow(0 0 15px var(--primary)) drop-shadow(0 0 30px var(--primary));
      will-change: opacity;
      animation: lampPulse 4s infinite alternate ease-in-out;
    }
    .glow-spore {
      filter: drop-shadow(0 0 6px #4ade80) drop-shadow(0 0 12px #22c55e);
      will-change: opacity;
      animation: greenLampPulse 3s infinite alternate ease-in-out;
    }
    .glow-spore-white {
      filter: drop-shadow(0 0 6px #ffffff);
      will-change: opacity;
      animation: greenLampPulse 2.4s infinite alternate ease-in-out;
    }
    @keyframes lampPulse {
      0% { opacity: 0.7; }
      100% { opacity: 1; }
    }
    @keyframes greenLampPulse {
      0% { opacity: 0.5; }
      100% { opacity: 1; }
    }
  `;
  document.head.appendChild(lampStyle);

  const isLinksPage = window.location.pathname.includes('links.html');
  const isIndexPage = !isLinksPage && (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/') || !window.location.pathname.includes('.html'));

  if (!isLinksPage) {
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
        <circle class="glow-bulb" cx="100" cy="72" r="14" fill="#fff" style="animation: lampPulse 4s infinite alternate ease-in-out;"/>
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
        <circle class="glow-spore" cx="12" cy="6" r="3.5" fill="#bbf7d0" style="animation: greenLampPulse 3s infinite alternate ease-in-out;"/>
      </svg>
    `;
    lamp.appendChild(flower1);

    // --- New Sprout 3: Glowing Spiral Fiddlehead/Fern Spine ---
    const flower3 = document.createElement('div');
    flower3.style.position = 'absolute';
    flower3.style.bottom = '0';
    flower3.style.left = '24px';
    flower3.innerHTML = `
      <svg width="24" height="35" viewBox="0 0 24 35" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
        <!-- Organic Fiddlehead Spiral -->
        <path d="M 12 35 Q 8 22 14 14 Q 20 8 18 5 Q 15 4 13 7 Q 13 10 16 9" stroke="var(--outline-variant)" stroke-width="1.8" fill="none" stroke-linecap="round"/>
        <!-- Micro Bioluminescent Spores along spine -->
        <circle class="glow-spore" cx="18" cy="5" r="2" fill="#bbf7d0" style="animation: greenLampPulse 2s infinite alternate ease-in-out;"/>
        <circle class="glow-spore" cx="14" cy="14" r="1.5" fill="#bbf7d0" style="animation: greenLampPulse 2.8s infinite alternate ease-in-out;"/>
        <circle class="glow-spore" cx="10" cy="22" r="1.5" fill="#bbf7d0" style="animation: greenLampPulse 1.9s infinite alternate ease-in-out;"/>
      </svg>
    `;
    lamp.appendChild(flower3);

    const flower2 = document.createElement('div');
    flower2.style.position = 'absolute';
    flower2.style.bottom = '0';
    flower2.style.left = '42px';
    flower2.style.transform = 'scaleX(-1)';
    flower2.innerHTML = `
      <svg width="20" height="30" viewBox="0 0 20 30" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
        <path d="M 10 30 Q 6 20 10 12 Q 14 9 10 4" stroke="var(--outline-variant)" stroke-width="1.8" fill="none" stroke-linecap="round"/>
        <circle class="glow-spore" cx="10" cy="4" r="3" fill="#bbf7d0" style="animation: greenLampPulse 2.5s infinite alternate ease-in-out;"/>
      </svg>
    `;
    lamp.appendChild(flower2);

    // Scale the tiny base sprouts (referred to as small lamps) bigger on the Index page only!
    if (isIndexPage) {
      flower1.style.transform = 'scale(1.4)';
      flower1.style.transformOrigin = 'bottom left';
      flower2.style.transform = 'scaleX(-1) scale(1.4)';
      flower2.style.transformOrigin = 'bottom right';
      flower3.style.transform = 'scale(1.4)';
      flower3.style.transformOrigin = 'bottom left';
    }

    document.body.appendChild(lamp);

    // --- Artistic SVG Streetlamp (Right) ---
    const rightLamp = lamp.cloneNode(true);
    rightLamp.style.left = 'auto';
    rightLamp.style.right = '32px';
    rightLamp.style.transform = 'scaleX(-1)';
    document.body.appendChild(rightLamp);

    // --- Stylized Repeating Bioluminescent Grass along the entire Bottom ---
    const grass = document.createElement('div');
    grass.style.position = 'fixed';
    grass.style.bottom = '0';
    grass.style.left = '0';
    grass.style.right = '0';
    grass.style.pointerEvents = 'none';
    grass.style.zIndex = '-2';
    
    if (isIndexPage) {
      // Grass is bigger on the index page (32px) but smaller than the scaled streetlamps
      grass.style.height = '32px';
      grass.style.backgroundImage = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='32' viewBox='0 0 120 32'><path d='M 10 32 Q 15 14 8 6 Q 18 16 18 32 M 40 32 Q 35 16 30 8 M 38 27 Q 30 25 32 27 M 36 21 Q 28 19 30 21 M 34 16 Q 26 14 28 16 M 39 27 Q 47 25 45 27 M 37 21 Q 45 19 43 21 M 35 16 Q 43 14 41 16 M 70 32 Q 65 19 70 14 Q 75 19 70 32 M 95 32 Q 92 14 95 8 M 92 16 Q 86 14 88 16 M 97 16 Q 103 14 101 16' stroke='%23444748' stroke-width='1.3' fill='none' stroke-linecap='round'/><circle cx='8' cy='6' r='1.5' fill='%23bbf7d0'/><circle cx='70' cy='14' r='1.8' fill='%23bbf7d0'/><circle cx='95' cy='8' r='1.8' fill='%23bbf7d0'/><circle cx='92' cy='11' r='1.2' fill='%23bbf7d0'/><circle cx='98' cy='11' r='1.2' fill='%23bbf7d0'/></svg>")`;
    } else {
      // Grass is beautifully thin and delicate on other pages (16px)
      grass.style.height = '16px';
      grass.style.backgroundImage = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='16' viewBox='0 0 120 16'><path d='M 10 16 Q 15 7 8 3 Q 18 8 18 16 M 40 16 Q 35 8 30 4 M 38 13 Q 30 12 32 13 M 36 10 Q 28 9 30 10 M 34 8 Q 26 7 28 8 M 39 13 Q 47 12 45 13 M 37 10 Q 45 9 43 10 M 35 8 Q 43 7 41 8 M 70 16 Q 65 9 70 7 Q 75 9 70 16 M 95 16 Q 92 7 95 4 M 92 8 Q 86 7 88 8 M 97 8 Q 103 7 101 8' stroke='%23444748' stroke-width='1.3' fill='none' stroke-linecap='round'/><circle cx='8' cy='3' r='1' fill='%23bbf7d0'/><circle cx='70' cy='7' r='1.2' fill='%23bbf7d0'/><circle cx='95' cy='4' r='1.2' fill='%23bbf7d0'/><circle cx='92' cy='5' r='1' fill='%23bbf7d0'/><circle cx='98' cy='5' r='1' fill='%23bbf7d0'/></svg>")`;
    }
    
    grass.style.backgroundRepeat = 'repeat-x';
    grass.style.opacity = '0.7';
    document.body.appendChild(grass);
  } else {
    // --- Distinct Bioluminescent Elements specifically for Links Directory Page ---
    
    // 1. Bottom grass for Links Page (thin, elegant)
    const grass = document.createElement('div');
    grass.style.position = 'fixed';
    grass.style.bottom = '0';
    grass.style.left = '0';
    grass.style.right = '0';
    grass.style.pointerEvents = 'none';
    grass.style.zIndex = '-2';
    grass.style.height = '16px';
    grass.style.backgroundImage = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='16' viewBox='0 0 120 16'><path d='M 10 16 Q 15 7 8 3 Q 18 8 18 16 M 40 16 Q 35 8 30 4 M 38 13 Q 30 12 32 13 M 36 10 Q 28 9 30 10 M 34 8 Q 26 7 28 8 M 39 13 Q 47 12 45 13 M 37 10 Q 45 9 43 10 M 35 8 Q 43 7 41 8 M 70 16 Q 65 9 70 7 Q 75 9 70 16 M 95 16 Q 92 7 95 4 M 92 8 Q 86 7 88 8 M 97 8 Q 103 7 101 8' stroke='%23444748' stroke-width='1.3' fill='none' stroke-linecap='round'/><circle cx='8' cy='3' r='1' fill='%23bbf7d0'/><circle cx='70' cy='7' r='1.2' fill='%23bbf7d0'/><circle cx='95' cy='4' r='1.2' fill='%23bbf7d0'/><circle cx='92' cy='5' r='1' fill='%23bbf7d0'/><circle cx='98' cy='5' r='1' fill='%23bbf7d0'/></svg>")`;
    grass.style.backgroundRepeat = 'repeat-x';
    grass.style.opacity = '0.7';
    document.body.appendChild(grass);

    // 2. Top-Left Hanging Vine
    const topLeftVine = document.createElement('div');
    topLeftVine.style.position = 'fixed';
    topLeftVine.style.top = '0';
    topLeftVine.style.left = '0';
    topLeftVine.style.pointerEvents = 'none';
    topLeftVine.style.zIndex = '-1';
    topLeftVine.innerHTML = `
      <svg width="180" height="320" viewBox="0 0 180 320" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
        <path d="M 0 0 C 30 40, 10 120, 50 180 C 70 220, 30 280, 40 320" stroke="var(--outline-variant)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M 25 75 Q -5 130, 15 190" stroke="var(--outline-variant)" stroke-width="1.8" fill="none" stroke-linecap="round"/>
        <circle class="glow-spore" cx="40" cy="320" r="3" fill="#bbf7d0" style="animation: greenLampPulse 2s infinite alternate ease-in-out;"/>
        <circle class="glow-spore" cx="15" cy="190" r="2.5" fill="#bbf7d0" style="animation: greenLampPulse 2.8s infinite alternate ease-in-out;"/>
        <circle class="glow-spore" cx="43" cy="130" r="2.5" fill="#bbf7d0" style="animation: greenLampPulse 2.2s infinite alternate ease-in-out;"/>
        <circle class="glow-spore" cx="12" cy="85" r="2" fill="#bbf7d0" style="animation: greenLampPulse 3.2s infinite alternate ease-in-out;"/>
        <path d="M 27 55 Q 45 62, 37 70 Z" fill="rgba(74, 222, 128, 0.15)" stroke="var(--outline-variant)" stroke-width="1"/>
        <path d="M 38 140 Q 62 148, 50 160 Z" fill="rgba(74, 222, 128, 0.15)" stroke="var(--outline-variant)" stroke-width="1"/>
      </svg>
    `;
    document.body.appendChild(topLeftVine);

    // 3. Top-Right Hanging Vine (Mirrored)
    const topRightVine = topLeftVine.cloneNode(true);
    topRightVine.style.left = 'auto';
    topRightVine.style.right = '0';
    topRightVine.style.transform = 'scaleX(-1)';
    document.body.appendChild(topRightVine);

    // 4. Bottom-Left Floor Fern Sprout
    const bottomLeftFern = document.createElement('div');
    bottomLeftFern.style.position = 'fixed';
    bottomLeftFern.style.bottom = '0';
    bottomLeftFern.style.left = '0';
    bottomLeftFern.style.pointerEvents = 'none';
    bottomLeftFern.style.zIndex = '-1';
    bottomLeftFern.innerHTML = `
      <svg width="200" height="300" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
        <path d="M 0 300 Q 60 250, 90 160 Q 100 110, 75 30" stroke="var(--outline-variant)" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M 0 300 Q 40 210, 30 120" stroke="var(--outline-variant)" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M 42 255 Q 67 245, 60 260 Z" fill="var(--outline-variant)"/>
        <path d="M 66 210 Q 91 195, 84 210 Z" fill="var(--outline-variant)"/>
        <path d="M 80 165 Q 105 150, 98 165 Z" fill="var(--outline-variant)"/>
        <path d="M 88 115 Q 110 95, 102 110 Z" fill="var(--outline-variant)"/>
        <circle class="glow-spore" cx="60" cy="260" r="1.8" fill="#bbf7d0" style="animation: greenLampPulse 2.1s infinite alternate ease-in-out;"/>
        <circle class="glow-spore" cx="84" cy="210" r="1.8" fill="#bbf7d0" style="animation: greenLampPulse 2.7s infinite alternate ease-in-out;"/>
        <circle class="glow-spore" cx="98" cy="165" r="2.2" fill="#bbf7d0" style="animation: greenLampPulse 1.8s infinite alternate ease-in-out;"/>
        <circle class="glow-spore" cx="102" cy="110" r="2.2" fill="#bbf7d0" style="animation: greenLampPulse 2.5s infinite alternate ease-in-out;"/>
        <circle class="glow-spore-white" cx="75" cy="30" r="4" fill="#fff" style="animation: greenLampPulse 3.5s infinite alternate ease-in-out;"/>
      </svg>
    `;
    document.body.appendChild(bottomLeftFern);

    // 5. Bottom-Right Floor Fern Sprout (Mirrored)
    const bottomRightFern = bottomLeftFern.cloneNode(true);
    bottomRightFern.style.left = 'auto';
    bottomRightFern.style.right = '0';
    bottomRightFern.style.transform = 'scaleX(-1)';
    document.body.appendChild(bottomRightFern);

    // 6. Dynamic Card Sprouts wrapping around individual Link items
    document.querySelectorAll('.links-nav .link-item').forEach((item, index) => {
      const miniSprout = document.createElement('div');
      miniSprout.style.position = 'absolute';
      miniSprout.style.top = '14px';
      miniSprout.style.pointerEvents = 'none';
      miniSprout.style.zIndex = '5';
      
      const isLeft = index % 2 === 0;
      if (isLeft) {
        miniSprout.style.left = '-18px';
        miniSprout.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
            <path d="M 20 10 Q 10 8, 8 2" stroke="var(--outline-variant)" stroke-width="1.3" fill="none" stroke-linecap="round"/>
            <circle class="glow-spore" cx="8" cy="2" r="1.5" fill="#bbf7d0" style="animation: greenLampPulse ${2 + index * 0.2}s infinite alternate ease-in-out;"/>
          </svg>
        `;
      } else {
        miniSprout.style.right = '-18px';
        miniSprout.style.transform = 'scaleX(-1)';
        miniSprout.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
            <path d="M 20 10 Q 10 8, 8 2" stroke="var(--outline-variant)" stroke-width="1.3" fill="none" stroke-linecap="round"/>
            <circle class="glow-spore" cx="8" cy="2" r="1.5" fill="#bbf7d0" style="animation: greenLampPulse ${2.3 + index * 0.25}s infinite alternate ease-in-out;"/>
          </svg>
        `;
      }
      item.appendChild(miniSprout);
    });
  }

  // --- Distinct Bioluminescent Flora Species for Different Pages ---
  const containerSelectors = ['.project-card', '.links-nav', '.contact-form'];
  containerSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, index) => {
      el.style.position = 'relative';
      
      const createVine = (side) => {
        const vine = document.createElement('div');
        vine.className = 'card-vine';
        
        let svgContent = '';
        
        if (selector === '.project-card') {
          // --- Species A: Lantern Bell-Vine ---
          svgContent = `
            <svg width="40" height="110" viewBox="0 0 40 110" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
              <!-- Organic Vine stem -->
              <path d="M 40 95 Q 25 80 32 60 Q 12 40 24 20" stroke="var(--outline-variant)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
              
              <!-- Top Drooping Bell-Flower -->
              <path d="M 24 20 Q 25 14 24 10" stroke="var(--outline-variant)" stroke-width="1.8" fill="none"/>
              <path d="M 20 10 Q 24 2 28 10 Q 24 14 20 10 Z" fill="rgba(74, 222, 128, 0.15)" stroke="var(--outline-variant)" stroke-width="1.2"/>
              <path d="M 24 10 L 24 15" stroke="var(--outline-variant)" stroke-width="1"/>
              <circle class="glow-spore" cx="24" cy="15" r="2.5" fill="#bbf7d0" style="animation: greenLampPulse 3s infinite alternate ease-in-out;"/>
              
              <!-- Middle Leaf-Bracket holding a micro-lantern -->
              <path d="M 32 60 Q 18 55 15 48 M 15 48 L 15 54" stroke="var(--outline-variant)" stroke-width="1.8" fill="none" stroke-linecap="round"/>
              <path d="M 11 54 L 19 54 L 15 50 Z" fill="var(--outline-variant)"/>
              <path d="M 12 54 L 18 54 L 16.5 64 L 13.5 64 Z" stroke="var(--outline-variant)" stroke-width="1" fill="rgba(74, 222, 128, 0.1)"/>
              <circle class="glow-spore-white" cx="15" cy="59" r="2" fill="#fff" style="animation: greenLampPulse 2.4s infinite alternate ease-in-out;"/>
              
              <!-- Detailed leafy structures -->
              <path d="M 36 82 Q 24 86 28 76 Q 34 76 36 82 Z" fill="var(--outline-variant)"/>
              <path d="M 22 35 Q 12 29 18 23 Q 24 27 22 35 Z" fill="var(--outline-variant)"/>
            </svg>
          `;
        } else if (selector === '.links-nav') {
          // --- Species B: Vintage Wall-Lamp Bracket (Attaches flush, scrollwork bracket with glowing lantern) ---
          svgContent = `
            <svg width="50" height="80" viewBox="0 0 50 80" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
              <!-- Decorative Iron Scroll Bracket (attaches flush to container border on the right at x=50) -->
              <path d="M 50 20 Q 30 20 30 40 C 30 55 42 55 45 45" stroke="var(--outline-variant)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
              <!-- Diagonal support strut -->
              <path d="M 50 45 L 35 25" stroke="var(--outline-variant)" stroke-width="1.8" fill="none"/>
              <!-- Hanging Chain -->
              <path d="M 30 40 L 30 48" stroke="var(--outline-variant)" stroke-width="1.5"/>
              <!-- Mini Lantern Cap -->
              <path d="M 25 48 L 35 48 L 30 44 Z" fill="var(--outline-variant)"/>
              <!-- Glass Frame -->
              <path d="M 26 48 L 34 48 L 32.5 58 L 27.5 58 Z" stroke="var(--outline-variant)" stroke-width="1" fill="rgba(74, 222, 128, 0.1)"/>
              <!-- Core Glowing Filament -->
              <circle class="glow-spore" cx="30" cy="53" r="2.5" fill="#bbf7d0" style="animation: greenLampPulse 2s infinite alternate ease-in-out;"/>
            </svg>
          `;
        } else if (selector === '.contact-form') {
          // --- Species C: Neon Uplink Sprouts (Geometric, minimal, sleek cyber branches) ---
          svgContent = `
            <svg width="40" height="100" viewBox="0 0 40 100" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
              <!-- Sleek Tech Branch -->
              <path d="M 40 90 L 30 70 L 32 45 L 20 20" stroke="var(--outline-variant)" stroke-width="2" fill="none" stroke-linecap="round"/>
              
              <!-- Shoot 1 (Bottom, straight bracket shape) -->
              <path d="M 30 70 L 15 60" stroke="var(--outline-variant)" stroke-width="1.8" fill="none" stroke-linecap="round"/>
              <circle class="glow-spore" cx="15" cy="60" r="3" fill="#bbf7d0" style="animation: greenLampPulse 2s infinite alternate ease-in-out;"/>
              
              <!-- Shoot 2 (Middle) -->
              <path d="M 32 45 L 18 35" stroke="var(--outline-variant)" stroke-width="1.8" fill="none" stroke-linecap="round"/>
              <circle class="glow-spore" cx="18" cy="35" r="3" fill="#bbf7d0" style="animation: greenLampPulse 2.5s infinite alternate ease-in-out;"/>
              
              <!-- Main Uplink Tip -->
              <path d="M 20 20 L 12 10" stroke="var(--outline-variant)" stroke-width="2" fill="none" stroke-linecap="round"/>
              <circle class="glow-spore" cx="12" cy="10" r="3.5" fill="#bbf7d0" style="animation: greenLampPulse 1.6s infinite alternate ease-in-out;"/>
            </svg>
          `;
        }
        
        vine.innerHTML = svgContent;
        vine.style.position = 'absolute';
        vine.style.top = '16px';
        vine.style.pointerEvents = 'none';
        vine.style.zIndex = '5';
        
        if (selector === '.links-nav') {
          if (side === 'left') {
            vine.style.left = '-50px';
          } else {
            vine.style.right = '-50px';
            vine.style.transform = 'scaleX(-1)';
          }
        } else {
          if (side === 'left') {
            vine.style.left = '-40px';
          } else {
            vine.style.right = '-40px';
            vine.style.transform = 'scaleX(-1)';
          }
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
