import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/testimonials', label: 'Success Stories' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Sparsh Logo - Refined */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <svg width="140" height="45" viewBox="0 0 350 110" className="group-hover:scale-105 transition-transform">
                <defs>
                  {/* Refined gradient for logo */}
                  <linearGradient id="sparsh-refined-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="25%" stopColor="#06b6d4" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="75%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
                
                {/* Sparsh text - more refined */}
                <text x="15" y="40" fontSize="36" fontWeight="700" fill="url(#sparsh-refined-gradient)" fontFamily="Inter, sans-serif">
                  sparsh
                </text>
                
                {/* Subtitle - more professional */}
                <text x="15" y="60" fontSize="11" fill="#64748b" fontFamily="Inter, sans-serif" fontWeight="500">
                  pediatric rehabilitation clinic
                </text>
                
                {/* Tagline - smaller and more subtle */}
                <text x="15" y="80" fontSize="9" fill="#f59e0b" fontFamily="Inter, sans-serif" fontStyle="italic" fontWeight="400">
                  "making life, worth living!"
                </text>
                
                {/* Refined heart icon */}
                <path d="M300 30 C300 25, 305 20, 310 20 C315 20, 320 25, 320 30 C320 40, 310 50, 310 50 C310 50, 300 40, 300 30 Z" 
                      fill="#f59e0b" opacity="0.8"/>
              </svg>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === link.to 
                    ? 'text-blue-600' 
                    : scrolled ? 'text-slate-700' : 'text-slate-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+919426284419"
              className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <FiPhone className="w-4 h-4" />
              <span className="font-medium">+91-9426284419</span>
            </a>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-2 rounded-lg font-semibold transition-all hover:shadow-md"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isOpen ? (
              <FiX className="w-6 h-6 text-slate-700" />
            ) : (
              <FiMenu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-slate-100 bg-white"
            >
              <nav className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                      location.pathname === link.to
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                
                {/* Mobile Contact */}
                <div className="px-4 py-3 border-t border-slate-100 space-y-3">
                  <a 
                    href="tel:+919426284419"
                    className="flex items-center space-x-2 text-slate-600 hover:text-blue-600"
                  >
                    <FiPhone className="w-4 h-4" />
                    <span>+91-9426284419</span>
                  </a>
                  <Link
                    to="/contact"
                    className="block bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-3 rounded-lg font-semibold"
                  >
                    Get Started
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}