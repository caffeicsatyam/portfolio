import { Link } from 'react-router-dom';

export default function Links() {
  const links = [
    { label: 'GitHub', icon: 'terminal', url: 'https://github.com/caffeicsatyam' },
    { label: 'LinkedIn', icon: 'work', url: 'https://www.linkedin.com/in/satyamchaturvedi0237' },
    { label: 'LeetCode', icon: 'code', url: 'https://leetcode.com/u/Knightmen/' },
    { label: 'CodeChef', icon: 'emoji_events', url: 'https://www.codechef.com/users/knightmen' },
    { label: 'HackerRank', icon: 'leaderboard', url: 'https://www.hackerrank.com/profile/satyamiscoding' },
    { label: 'Kaggle', icon: 'analytics', url: 'https://www.kaggle.com/satyammchaturvedi' },
    { label: 'Personal Blog', icon: 'article', url: '#' },
    { label: 'Email', icon: 'mail', url: 'mailto:satyamchaturvedibbk@gmail.com' }
  ];

  return (
    <>
      <header style={{ width: '100%', padding: '24px var(--gutter)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <Link to="/" className="links-back">
            <span className="material-symbols-outlined">arrow_back</span>
            RETURN_TO_ROOT
          </Link>
        </div>
      </header>

      <main className="links-center">
        <div style={{ width: '100%', maxWidth: '480px', padding: '0 var(--margin-mobile)' }}>
          <div className="links-identity">
            <h1 style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(24px,4vw,32px)', fontWeight: 700, color: 'var(--primary)', letterSpacing: '-0.02em' }}>
              Satyam Chaturvedi
            </h1>
            <div className="hero-prompt" style={{ marginBottom: 0 }}>
              <span className="caret">&gt;</span>
              <span className="handle">satyamc _</span>
            </div>
          </div>

          <nav className="links-nav" aria-label="Important Links">
            {links.map((link, idx) => (
              <a key={idx} className="link-item" href={link.url} target={link.url.startsWith('mailto') ? '_self' : '_blank'} rel="noopener noreferrer">
                <div className="link-item-left">
                  <span className="caret">&gt;</span>
                  <span className="link-label">{link.label}</span>
                </div>
                <span className="material-symbols-outlined link-icon">{link.icon}</span>
              </a>
            ))}

            <a className="link-item link-item--primary" href="https://drive.google.com/file/d/1rzwMle66g0ydoDG9dPV6Y-xXrzmsRjAi/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <div className="link-item-left">
                <span className="caret">&gt;</span>
                <span className="link-label" style={{ fontWeight: 700 }}>Download Resume</span>
              </div>
              <span className="material-symbols-outlined link-icon">download</span>
            </a>
          </nav>
        </div>
      </main>
    </>
  );
}
