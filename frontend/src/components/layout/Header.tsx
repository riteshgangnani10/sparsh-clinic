import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';

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
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/conditions', label: 'Conditions' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Professional Top Bar */}
      <div className="bg-primary-600 text-white py-3 text-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <a 
                href="tel:+919426284419" 
                className="flex items-center gap-2 hover:text-primary-100 transition-colors"
              >
                <FiPhone className="w-4 h-4" />
                <span className="font-medium">+91-9426284419</span>
              </a>
              <a 
                href="mailto:sparshprc@gmail.com" 
                className="hidden sm:flex items-center gap-2 hover:text-primary-100 transition-colors"
              >
                <FiMail className="w-4 h-4" />
                <span>sparshprc@gmail.com</span>
              </a>
              <div className="hidden md:flex items-center gap-2 text-primary-100">
                <FiMapPin className="w-4 h-4" />
                <span>Rajkot, Gujarat</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-primary-100">
              <FiClock className="w-4 h-4" />
              <span className="font-medium">Mon-Sat: 9AM-7PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Professional Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-medical border-b border-neutral-100' 
            : 'bg-white border-b border-neutral-100'
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Professional Logo */}
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center text-white shadow-medical group-hover:shadow-medical-lg transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">+</span>
                </div>
              </div>
              <div>
                <div className="font-bold text-2xl text-neutral-900 group-hover:text-primary-600 transition-colors">
                  Sparsh Clinic
                </div>
                <div className="text-sm text-neutral-600 font-medium">
                  Pediatric Rehabilitation Center
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative font-medium transition-all duration-200 ${
                    location.pathname === link.to
                      ? 'text-primary-600'
                      : 'text-neutral-700 hover:text-primary-600'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.to && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                      layoutId="activeNav"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Professional CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919426284419"
                className="flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                <FiPhone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <Link 
                to="/contact" 
                className="bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-all duration-200 shadow-medical hover:shadow-medical-lg"
              >
                Schedule Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-neutral-700 hover:text-primary-600 transition-colors"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-neutral-200 bg-white/95 backdrop-blur-sm"
            >
              <div className="container mx-auto px-6 py-6">
                <div className="flex flex-col gap-1 mb-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                        location.pathname === link.to
                          ? 'bg-primary-100 text-primary-700 shadow-soft'
                          : 'text-neutral-700 hover:bg-neutral-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                
                {/* Mobile Contact Actions */}
                <div className="grid grid-cols-1 gap-3 pt-4 border-t border-neutral-200">
                  <a
                    href="tel:+919426284419"
                    className="flex items-center justify-center gap-3 bg-secondary-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-secondary-700 transition-colors"
                  >
                    <FiPhone className="w-4 h-4" />
                    Call: +91-9426284419
                  </a>
                  <Link 
                    to="/contact" 
                    className="flex items-center justify-center gap-3 bg-primary-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}