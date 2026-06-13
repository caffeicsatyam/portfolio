import { useEffect, useRef } from 'react';

export default function StreetLamp({ isLinksPage, isIndexPage }) {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        window.requestAnimationFrame(() => {
          glowRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
          glowRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Dynamic Spotlight Effect */}
      <div 
        ref={glowRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 9999,
          background: 'radial-gradient(600px circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh), rgba(255, 255, 255, 0.15), transparent 40%)'
        }} 
      />

      {/* Bioluminescent Grass */}
      <div 
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          pointerEvents: 'none',
          zIndex: -2,
          height: isIndexPage ? '32px' : '16px',
          backgroundRepeat: 'repeat-x',
          opacity: 0.7,
          backgroundImage: isIndexPage 
            ? `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='32' viewBox='0 0 120 32'><path d='M 10 32 Q 15 14 8 6 Q 18 16 18 32 M 40 32 Q 35 16 30 8 M 38 27 Q 30 25 32 27 M 36 21 Q 28 19 30 21 M 34 16 Q 26 14 28 16 M 39 27 Q 47 25 45 27 M 37 21 Q 45 19 43 21 M 35 16 Q 43 14 41 16 M 70 32 Q 65 19 70 14 Q 75 19 70 32 M 95 32 Q 92 14 95 8 M 92 16 Q 86 14 88 16 M 97 16 Q 103 14 101 16' stroke='%23444748' stroke-width='1.3' fill='none' stroke-linecap='round'/><circle cx='8' cy='6' r='1.5' fill='%23bbf7d0'/><circle cx='70' cy='14' r='1.8' fill='%23bbf7d0'/><circle cx='95' cy='8' r='1.8' fill='%23bbf7d0'/><circle cx='92' cy='11' r='1.2' fill='%23bbf7d0'/><circle cx='98' cy='11' r='1.2' fill='%23bbf7d0'/></svg>")`
            : `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='16' viewBox='0 0 120 16'><path d='M 10 16 Q 15 7 8 3 Q 18 8 18 16 M 40 16 Q 35 8 30 4 M 38 13 Q 30 12 32 13 M 36 10 Q 28 9 30 10 M 34 8 Q 26 7 28 8 M 39 13 Q 47 12 45 13 M 37 10 Q 45 9 43 10 M 35 8 Q 43 7 41 8 M 70 16 Q 65 9 70 7 Q 75 9 70 16 M 95 16 Q 92 7 95 4 M 92 8 Q 86 7 88 8 M 97 8 Q 103 7 101 8' stroke='%23444748' stroke-width='1.3' fill='none' stroke-linecap='round'/><circle cx='8' cy='3' r='1' fill='%23bbf7d0'/><circle cx='70' cy='7' r='1.2' fill='%23bbf7d0'/><circle cx='95' cy='4' r='1.2' fill='%23bbf7d0'/><circle cx='92' cy='5' r='1' fill='%23bbf7d0'/><circle cx='98' cy='5' r='1' fill='%23bbf7d0'/></svg>")`
        }} 
      />

      {!isLinksPage && (
        <>
          {/* Left Lamp */}
          <div style={{ position: 'fixed', bottom: 0, left: '32px', pointerEvents: 'none', zIndex: -1 }}>
            <svg width="160" height="260" viewBox="0 0 160 260" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
              <path d="M 30 260 L 30 80 C 30 30 60 20 100 20" stroke="var(--outline-variant)" strokeWidth="8" fill="none" strokeLinecap="round"/>
              <rect x="97" y="16" width="6" height="24" fill="var(--outline-variant)" rx="2"/>
              <path d="M 85 40 L 115 40 L 108 60 L 92 60 Z" fill="var(--outline-variant)"/>
              <path d="M 92 60 L 108 60 L 103 75 L 97 75 Z" fill="var(--outline-variant)"/>
              <circle className="glow-bulb" cx="100" cy="72" r="14" fill="#fff" />
            </svg>
            
            {/* Sprouts */}
            <div style={{ 
              position: 'absolute', bottom: 0, left: '8px',
              transform: isIndexPage ? 'scale(1.4)' : 'none',
              transformOrigin: 'bottom left'
            }}>
              <svg width="24" height="40" viewBox="0 0 24 40" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                <path d="M 12 40 Q 8 28 12 16 Q 16 12 12 6" stroke="var(--outline-variant)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M 11 30 Q 4 28 8 23 Q 12 25 11 30 Z" fill="var(--outline-variant)"/>
                <circle className="glow-spore" cx="12" cy="6" r="3.5" fill="#bbf7d0" />
              </svg>
            </div>
            
            <div style={{ 
              position: 'absolute', bottom: 0, left: '24px',
              transform: isIndexPage ? 'scale(1.4)' : 'none',
              transformOrigin: 'bottom left'
            }}>
              <svg width="24" height="35" viewBox="0 0 24 35" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                <path d="M 12 35 Q 8 22 14 14 Q 20 8 18 5 Q 15 4 13 7 Q 13 10 16 9" stroke="var(--outline-variant)" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
                <circle className="glow-spore" cx="18" cy="5" r="2" fill="#bbf7d0" style={{ animationDuration: '2s' }}/>
                <circle className="glow-spore" cx="14" cy="14" r="1.5" fill="#bbf7d0" style={{ animationDuration: '2.8s' }}/>
                <circle className="glow-spore" cx="10" cy="22" r="1.5" fill="#bbf7d0" style={{ animationDuration: '1.9s' }}/>
              </svg>
            </div>
            
            <div style={{ 
              position: 'absolute', bottom: 0, left: '42px',
              transform: isIndexPage ? 'scaleX(-1) scale(1.4)' : 'scaleX(-1)',
              transformOrigin: 'bottom right'
            }}>
              <svg width="20" height="30" viewBox="0 0 20 30" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                <path d="M 10 30 Q 6 20 10 12 Q 14 9 10 4" stroke="var(--outline-variant)" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
                <circle className="glow-spore" cx="10" cy="4" r="3" fill="#bbf7d0" style={{ animationDuration: '2.5s' }}/>
              </svg>
            </div>
          </div>

          {/* Right Lamp */}
          <div style={{ position: 'fixed', bottom: 0, right: '32px', transform: 'scaleX(-1)', pointerEvents: 'none', zIndex: -1 }}>
            <svg width="160" height="260" viewBox="0 0 160 260" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
              <path d="M 30 260 L 30 80 C 30 30 60 20 100 20" stroke="var(--outline-variant)" strokeWidth="8" fill="none" strokeLinecap="round"/>
              <rect x="97" y="16" width="6" height="24" fill="var(--outline-variant)" rx="2"/>
              <path d="M 85 40 L 115 40 L 108 60 L 92 60 Z" fill="var(--outline-variant)"/>
              <path d="M 92 60 L 108 60 L 103 75 L 97 75 Z" fill="var(--outline-variant)"/>
              <circle className="glow-bulb" cx="100" cy="72" r="14" fill="#fff" />
            </svg>
            <div style={{ 
              position: 'absolute', bottom: 0, left: '8px',
              transform: isIndexPage ? 'scale(1.4)' : 'none',
              transformOrigin: 'bottom left'
            }}>
              <svg width="24" height="40" viewBox="0 0 24 40" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                <path d="M 12 40 Q 8 28 12 16 Q 16 12 12 6" stroke="var(--outline-variant)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M 11 30 Q 4 28 8 23 Q 12 25 11 30 Z" fill="var(--outline-variant)"/>
                <circle className="glow-spore" cx="12" cy="6" r="3.5" fill="#bbf7d0" />
              </svg>
            </div>
            
            <div style={{ 
              position: 'absolute', bottom: 0, left: '24px',
              transform: isIndexPage ? 'scale(1.4)' : 'none',
              transformOrigin: 'bottom left'
            }}>
              <svg width="24" height="35" viewBox="0 0 24 35" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                <path d="M 12 35 Q 8 22 14 14 Q 20 8 18 5 Q 15 4 13 7 Q 13 10 16 9" stroke="var(--outline-variant)" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
                <circle className="glow-spore" cx="18" cy="5" r="2" fill="#bbf7d0" style={{ animationDuration: '2s' }}/>
                <circle className="glow-spore" cx="14" cy="14" r="1.5" fill="#bbf7d0" style={{ animationDuration: '2.8s' }}/>
                <circle className="glow-spore" cx="10" cy="22" r="1.5" fill="#bbf7d0" style={{ animationDuration: '1.9s' }}/>
              </svg>
            </div>
            
            <div style={{ 
              position: 'absolute', bottom: 0, left: '42px',
              transform: isIndexPage ? 'scaleX(-1) scale(1.4)' : 'scaleX(-1)',
              transformOrigin: 'bottom right'
            }}>
              <svg width="20" height="30" viewBox="0 0 20 30" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                <path d="M 10 30 Q 6 20 10 12 Q 14 9 10 4" stroke="var(--outline-variant)" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
                <circle className="glow-spore" cx="10" cy="4" r="3" fill="#bbf7d0" style={{ animationDuration: '2.5s' }}/>
              </svg>
            </div>
          </div>
        </>
      )}

      {isLinksPage && (
        <>
          {/* Top Left Vine */}
          <div style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: -1 }}>
            <svg width="180" height="320" viewBox="0 0 180 320" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
              <path d="M 0 0 C 30 40, 10 120, 50 180 C 70 220, 30 280, 40 320" stroke="var(--outline-variant)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M 25 75 Q -5 130, 15 190" stroke="var(--outline-variant)" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
              <circle className="glow-spore" cx="40" cy="320" r="3" fill="#bbf7d0" style={{ animationDuration: '2s' }}/>
              <circle className="glow-spore" cx="15" cy="190" r="2.5" fill="#bbf7d0" style={{ animationDuration: '2.8s' }}/>
              <circle className="glow-spore" cx="43" cy="130" r="2.5" fill="#bbf7d0" style={{ animationDuration: '2.2s' }}/>
              <circle className="glow-spore" cx="12" cy="85" r="2" fill="#bbf7d0" style={{ animationDuration: '3.2s' }}/>
              <path d="M 27 55 Q 45 62, 37 70 Z" fill="rgba(74, 222, 128, 0.15)" stroke="var(--outline-variant)" strokeWidth="1"/>
              <path d="M 38 140 Q 62 148, 50 160 Z" fill="rgba(74, 222, 128, 0.15)" stroke="var(--outline-variant)" strokeWidth="1"/>
            </svg>
          </div>
          
          {/* Top Right Vine */}
          <div style={{ position: 'fixed', top: 0, right: 0, transform: 'scaleX(-1)', pointerEvents: 'none', zIndex: -1 }}>
            <svg width="180" height="320" viewBox="0 0 180 320" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
              <path d="M 0 0 C 30 40, 10 120, 50 180 C 70 220, 30 280, 40 320" stroke="var(--outline-variant)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M 25 75 Q -5 130, 15 190" stroke="var(--outline-variant)" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
              <circle className="glow-spore" cx="40" cy="320" r="3" fill="#bbf7d0" style={{ animationDuration: '2s' }}/>
              <circle className="glow-spore" cx="15" cy="190" r="2.5" fill="#bbf7d0" style={{ animationDuration: '2.8s' }}/>
              <circle className="glow-spore" cx="43" cy="130" r="2.5" fill="#bbf7d0" style={{ animationDuration: '2.2s' }}/>
              <circle className="glow-spore" cx="12" cy="85" r="2" fill="#bbf7d0" style={{ animationDuration: '3.2s' }}/>
              <path d="M 27 55 Q 45 62, 37 70 Z" fill="rgba(74, 222, 128, 0.15)" stroke="var(--outline-variant)" strokeWidth="1"/>
              <path d="M 38 140 Q 62 148, 50 160 Z" fill="rgba(74, 222, 128, 0.15)" stroke="var(--outline-variant)" strokeWidth="1"/>
            </svg>
          </div>
          
          {/* Bottom Left Fern */}
          <div style={{ position: 'fixed', bottom: 0, left: 0, pointerEvents: 'none', zIndex: -1 }}>
            <svg width="200" height="300" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
              <path d="M 0 300 Q 60 250, 90 160 Q 100 110, 75 30" stroke="var(--outline-variant)" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <path d="M 0 300 Q 40 210, 30 120" stroke="var(--outline-variant)" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M 42 255 Q 67 245, 60 260 Z" fill="var(--outline-variant)"/>
              <path d="M 66 210 Q 91 195, 84 210 Z" fill="var(--outline-variant)"/>
              <path d="M 80 165 Q 105 150, 98 165 Z" fill="var(--outline-variant)"/>
              <path d="M 88 115 Q 110 95, 102 110 Z" fill="var(--outline-variant)"/>
              <circle className="glow-spore" cx="60" cy="260" r="1.8" fill="#bbf7d0" style={{ animationDuration: '2.1s' }}/>
              <circle className="glow-spore" cx="84" cy="210" r="1.8" fill="#bbf7d0" style={{ animationDuration: '2.7s' }}/>
              <circle className="glow-spore" cx="98" cy="165" r="2.2" fill="#bbf7d0" style={{ animationDuration: '1.8s' }}/>
              <circle className="glow-spore" cx="102" cy="110" r="2.2" fill="#bbf7d0" style={{ animationDuration: '2.5s' }}/>
              <circle className="glow-spore-white" cx="75" cy="30" r="4" fill="#fff" style={{ animationDuration: '3.5s' }}/>
            </svg>
          </div>
          
          {/* Bottom Right Fern */}
          <div style={{ position: 'fixed', bottom: 0, right: 0, transform: 'scaleX(-1)', pointerEvents: 'none', zIndex: -1 }}>
            <svg width="200" height="300" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
              <path d="M 0 300 Q 60 250, 90 160 Q 100 110, 75 30" stroke="var(--outline-variant)" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <path d="M 0 300 Q 40 210, 30 120" stroke="var(--outline-variant)" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M 42 255 Q 67 245, 60 260 Z" fill="var(--outline-variant)"/>
              <path d="M 66 210 Q 91 195, 84 210 Z" fill="var(--outline-variant)"/>
              <path d="M 80 165 Q 105 150, 98 165 Z" fill="var(--outline-variant)"/>
              <path d="M 88 115 Q 110 95, 102 110 Z" fill="var(--outline-variant)"/>
              <circle className="glow-spore" cx="60" cy="260" r="1.8" fill="#bbf7d0" style={{ animationDuration: '2.1s' }}/>
              <circle className="glow-spore" cx="84" cy="210" r="1.8" fill="#bbf7d0" style={{ animationDuration: '2.7s' }}/>
              <circle className="glow-spore" cx="98" cy="165" r="2.2" fill="#bbf7d0" style={{ animationDuration: '1.8s' }}/>
              <circle className="glow-spore" cx="102" cy="110" r="2.2" fill="#bbf7d0" style={{ animationDuration: '2.5s' }}/>
              <circle className="glow-spore-white" cx="75" cy="30" r="4" fill="#fff" style={{ animationDuration: '3.5s' }}/>
            </svg>
          </div>
        </>
      )}
    </>
  );
}
