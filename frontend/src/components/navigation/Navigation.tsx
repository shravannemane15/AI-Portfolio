import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolio';

export const Navigation = () => {
  const links = ['Work', 'AI', 'About', 'Contact'];
  const shortName = PORTFOLIO_DATA.name.split(' ')[0] || 'PORTFOLIO';
  
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    links.forEach((link) => {
      const el = document.getElementById(link.toLowerCase());
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []); // Intentionally leaving dependency array empty so it runs once to bind the static sections

  // Handle outside click and Escape key for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (isMobileMenuOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-6 md:px-8"
      ref={menuRef}
    >
      <div className="relative bg-dark/90 backdrop-blur-md text-primary-bg rounded-full px-8 py-4 flex items-center justify-between shadow-2xl shadow-dark/20 border border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-accent"></div>
          <div className="font-display font-bold tracking-widest text-base uppercase">
            {shortName}
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => {
            const id = link.toLowerCase();
            const isActive = activeSection === id;
            return (
              <motion.a
                key={link}
                href={`#${id}`}
                className={`text-xs font-bold tracking-wider uppercase transition-colors relative ${isActive ? 'text-accent' : 'text-primary-bg/70 hover:text-white'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link}
                {isActive && (
                  <motion.div 
                    layoutId="active-indicator"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
        </div>
        
        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center p-2 -mr-2 min-w-[44px] min-h-[44px] text-primary-bg hover:text-accent transition-colors"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            id="mobile-navigation"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-6 right-6 mt-4 bg-dark/95 backdrop-blur-lg border border-white/10 rounded-3xl p-6 shadow-2xl md:hidden flex flex-col gap-6"
          >
            {links.map((link) => {
              const id = link.toLowerCase();
              const isActive = activeSection === id;
              return (
                <a
                  key={link}
                  href={`#${id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-bold tracking-widest uppercase transition-colors ${isActive ? 'text-accent' : 'text-primary-bg/70 hover:text-white'}`}
                >
                  {link}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
