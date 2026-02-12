import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {['Services', 'Why MainteX', 'Process', 'Case Studies'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-heading font-bold hover:text-primary transition-colors text-lg"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button size="md">Get a Proposal</Button>
          </div>

          <button 
            className="lg:hidden text-heading"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={32} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center p-6"
          >
            <button 
              className="absolute top-6 right-6 text-heading"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col items-center gap-8 text-2xl font-bold text-heading">
              {['Services', 'Why MainteX', 'Process', 'Case Studies'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
              <Button className="mt-8" size="lg" onClick={() => setIsMobileMenuOpen(false)}>
                Get a Proposal
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};