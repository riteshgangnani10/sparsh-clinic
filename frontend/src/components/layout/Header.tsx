import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiChevronDown } from 'react-icons/fi';

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
    { 
      to: '/about', 
      label: 'About Us',
      submenu: [
        { to: '/about', label: 'About Sparsh Clinic' },
        { to: '/team', label: 'Meet the Team' },
        { to: '/story', label: 'Our Story' }
      ]
    },
    { 
      to: '/services', 
      label: 'Programs',
      submenu: [
        { to: '/services', label: 'Overview' },
        { to: '/services/intensive-therapy', label: 'Intensive Therapy' },
        { to: '/services/pediatric-physiotherapy', label: 'Pediatric Physical Therapy' },
        { to: '/services/occupational-therapy', label: 'Pediatric Occupational Therapy' },
        { to: '/services/speech-therapy', label: 'Pediatric Speech Therapy' },
        { to: '/services/weekly-therapy', label: 'Weekly Therapy' }
      ]
    },
    { to: '/conditions', label: 'Conditions' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/contact', label: 'Contact Us' }
  ];

  return (
    <>
      {/* Top Contact Bar - NAPA Style */}
      <div className="bg-blue-600 text-white py-2 text-sm">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:+919426284419" className="hover:text-blue-200 transition-colors font-medium">
              +91-9426284419
            </a>
          </div>
          <div className="hidden sm:block font-medium">
            Mon-Sat: 9AM-7PM
          </div>
        </div>
      </div>

      {/* Main Header - NAPA Style */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white shadow-lg' 
            : 'bg-white'
        }`}
      >
        <nav className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo - NAPA Style */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-blue-700 transition-colors">
                S
              </div>
              <div>
                <div className="font-bold text-2xl text-gray-900 tracking-wide">SPARSH</div>
              </div>
            </Link>

            {/* Desktop Navigation - NAPA Style */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.to} className="relative group">
                  <Link
                    to={link.to}
                    className={`flex items-center gap-1 font-medium transition-colors py-2 ${
                      location.pathname === link.to || location.pathname.startsWith(link.to)
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {link.label}
                    {link.submenu && <FiChevronDown className="w-4 h-4" />}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {link.submenu && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.to}
                            to={sublink.to}
                            className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons - NAPA Style */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+919426284419"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium"
              >
                <FiPhone className="w-4 h-4" />
                Call Now
              </a>
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden border-t border-gray-100 py-4"
              >
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <div key={link.to}>
                      <Link
                        to={link.to}
                        className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                          location.pathname === link.to
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {link.label}
                      </Link>
                      {/* Mobile Submenu */}
                      {link.submenu && (
                        <div className="ml-4 mt-2 space-y-1">
                          {link.submenu.map((sublink) => (
                            <Link
                              key={sublink.to}
                              to={sublink.to}
                              className="block py-2 px-4 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            >
                              {sublink.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {/* Mobile CTA */}
                  <div className="pt-4 border-t border-gray-100 mt-4 space-y-3">
                    <a
                      href="tel:+919426284419"
                      className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-4 rounded-lg font-bold"
                    >
                      <FiPhone className="w-4 h-4" />
                      Call: +91-9426284419
                    </a>
                    <Link 
                      to="/contact" 
                      className="block text-center bg-blue-600 text-white py-3 px-4 rounded-lg font-bold"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
}