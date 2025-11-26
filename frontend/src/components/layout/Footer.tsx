import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white font-bold">
                S
              </div>
              <div className="font-heading font-bold text-xl text-white">
                Sparsh Clinic
              </div>
            </div>
            <p className="text-sm mb-4">
              Nurturing potential and celebrating progress. Comprehensive pediatric rehabilitation
              services with expertise, compassion, and dedication.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
              >
                <FiFacebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
              >
                <FiInstagram size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
              >
                <FiYoutube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/conditions" className="hover:text-primary-400 transition-colors">
                  Conditions We Treat
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-primary-400 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-primary-400 transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Pediatric Physiotherapy</li>
              <li>Occupational Therapy</li>
              <li>Speech Therapy</li>
              <li>Sensory Integration</li>
              <li>Aquatic Therapy</li>
              <li>Applied Behavior Analysis</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <FiMapPin className="flex-shrink-0 mt-1" />
                <span>
                  1st Floor, Soham-2, Navarangpura, Ahmedabad-380014
                </span>
              </li>
              <li className="flex gap-2">
                <FiPhone className="flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:+919426284419" className="block hover:text-primary-400">
                    Dr. Tejas: +91-9426284419
                  </a>
                  <a href="tel:+919426038646" className="block hover:text-primary-400">
                    Dr. Mona: +91-9426038646
                  </a>
                </div>
              </li>
              <li className="flex gap-2">
                <FiMail className="flex-shrink-0 mt-1" />
                <a href="mailto:sparshprc@gmail.com" className="hover:text-primary-400">
                  sparshprc@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            © {currentYear} Sparsh Pediatric Rehabilitation Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

