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
          {/* Sparsh Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            {/* Logo SVG - Recreating the Sparsh logo design */}
            <div className="relative">
              <svg width="120" height="40" viewBox="0 0 300 100" className="group-hover:scale-105 transition-transform">
                {/* Background circle for logo */}
                <defs>
                  <linearGradient id="sparsh-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#20B2AA" />
                    <stop offset="20%" stopColor="#9ACD32" />
                    <stop offset="40%" stopColor="#6A5ACD" />
                    <stop offset="60%" stopColor="#FF6347" />
                    <stop offset="80%" stopColor="#20B2AA" />
                    <stop offset="100%" stopColor="#2F4F4F" />
                  </linearGradient>
                </defs>
                
                {/* Sparsh text */}
                <text x="10" y="35" fontSize="32" fontWeight="bold" fill="url(#sparsh-gradient)" fontFamily="Arial, sans-serif">
                  sparsh
                </text>
                
                {/* Subtitle */}
                <text x="10" y="55" fontSize="12" fill="#666" fontFamily="Arial, sans-serif">
                  paediatric rehabilitation clinic
                </text>
                
                {/* Tagline */}
                <text x="10" y="75" fontSize="10" fill="#FF6347" fontFamily="Arial, sans-serif" fontStyle="italic">
                  "making life, worth living!"
                </text>
                
                {/* Small heart icon */}
                <path d="M270 25 C270 20, 275 15, 280 15 C285 15, 290 20, 290 25 C290 35, 280 45, 280 45 C280 45, 270 35, 270 25 Z" 
                      fill="#FF6347" opacity="0.8"/>
              </svg>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-medium transition-colors hover:text-teal-600 ${
                  location.pathname === link.to 
                    ? 'text-teal-600' 
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
              className="flex items-center space-x-2 text-slate-600 hover:text-teal-600 transition-colors"
            >
              <FiPhone className="w-4 h-4" />
              <span className="font-medium">+91-9426284419</span>
            </a>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-all hover:shadow-md"
            >
              Start Your Journey
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
                        ? 'bg-teal-50 text-teal-600'
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
                    className="flex items-center space-x-2 text-slate-600 hover:text-teal-600"
                  >
                    <FiPhone className="w-4 h-4" />
                    <span>+91-9426284419</span>
                  </a>
                  <Link
                    to="/contact"
                    className="block bg-gradient-to-r from-teal-500 to-blue-500 text-white text-center py-3 rounded-lg font-semibold"
                  >
                    Start Your Journey
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