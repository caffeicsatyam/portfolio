import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const goToProjects = () => {
    setIsOpen(false);
    if (location.pathname === '/') {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }, 300); // Wait for framer-motion page transition to complete
    }
  };

  return (
    <header className="nav">
      <div className="container nav-inner">
        <NavLink to="/" className="nav-brand">&gt; satyamc</NavLink>
        <nav>
          <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="navLinks">
            <li><NavLink to="/" end>root</NavLink></li>
            <li><a onClick={goToProjects} style={{ cursor: 'pointer' }}>projects</a></li>
            <li><NavLink to="/links">links</NavLink></li>
            <li><NavLink to="/contact">contact</NavLink></li>
          </ul>
        </nav>
        <button 
          className="nav-mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Menu"
        >
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>
    </header>
  );
}
