import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import Industries from './pages/Industries';
import Compliance from './pages/Compliance';
import Careers from './pages/Careers';
import CaseStudies from './pages/CaseStudies';
import Resources from './pages/Resources';

// Placeholder components for other pages
const Placeholder = ({ title }: { title: string }) => (
  <div className="pt-40 pb-20 px-4 text-center min-h-[60vh]">
    <h1 className="text-4xl mb-4">{title}</h1>
    <p className="text-brand-blue/60">This page is coming soon as part of our comprehensive validation portal.</p>
  </div>
);

export default function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/compliance" element={<Compliance />} />
              <Route path="/cases" element={<CaseStudies />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
