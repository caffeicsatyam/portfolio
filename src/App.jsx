import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Links from './pages/Links';
import Contact from './pages/Contact';
import Certificates from './pages/Certificates';
import StreetLamp from './components/StreetLamp';

function App() {
  const location = useLocation();
  const isLinksPage = location.pathname === '/links';

  return (
    <>
      <Navigation />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/links" element={<Links />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/certificates" element={<Certificates />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <StreetLamp isLinksPage={isLinksPage} isIndexPage={location.pathname === '/'} />
    </>
  );
}

export default App;
