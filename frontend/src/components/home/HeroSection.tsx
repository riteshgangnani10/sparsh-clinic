import { motion } from 'framer-motion';
import { FiPhone, FiMapPin, FiClock, FiAward } from 'react-icons/fi';
import Button from '../common/Button';

interface HeroSectionProps {
  settings?: any;
}

export default function HeroSection({ settings }: HeroSectionProps) {
  const heroSubtitle = settings?.homepage?.heroSubtitle || 'Expert pediatric physiotherapy, occupational therapy, and speech therapy services with 18+ years of proven results in child development.';

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle medical pattern background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-60"></div>
      
      {/* Floating medical elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-100 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-32 right-20 w-24 h-24 bg-secondary-100 rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Professional */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Certification Badge */}
            <motion.div
              className="inline-flex items-center bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <FiAward className="w-4 h-4 mr-2" />
              Certified Pediatric Rehabilitation Center
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1 
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Helping Children
              <span className="text-primary-600 block"> Reach Their </span>
              <span className="text-secondary-600">Full Potential</span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              className="text-xl text-neutral-600 mb-8 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {heroSubtitle}
            </motion.p>
            
            {/* Professional CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button 
                to="/contact" 
                className="bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-colors shadow-medical"
              >
                Schedule Consultation
              </Button>
              <Button 
                to="/services" 
                variant="outline"
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-colors"
              >
                View Our Services
              </Button>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">5000+</div>
                <div className="text-sm text-neutral-600 font-medium">Children Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-1">18+</div>
                <div className="text-sm text-neutral-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600 mb-1">95%</div>
                <div className="text-sm text-neutral-600 font-medium">Success Rate</div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <FiPhone className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Dr. Tejas Patel</div>
                  <a href="tel:+919426284419" className="text-primary-600 font-semibold hover:underline">
                    +91-9426284419
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center">
                  <FiPhone className="w-5 h-5 text-secondary-600" />
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Dr. Mona Patel</div>
                  <a href="tel:+919426038646" className="text-secondary-600 font-semibold hover:underline">
                    +91-9426038646
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Professional Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Hero Image Placeholder */}
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 shadow-medical-lg">
                <div className="aspect-[4/3] bg-white rounded-2xl shadow-soft flex items-center justify-center">
                  {/* Placeholder for actual clinic photo */}
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-800 mb-2">Sparsh Clinic</h3>
                    <p className="text-lg text-neutral-600">Nurturing Every Child's Potential</p>
                  </div>
                </div>
              </div>

              {/* Floating Credential Cards */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-card max-w-xs"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">NDTA Certified</div>
                    <div className="text-sm text-neutral-600">Pediatric Specialists</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-card max-w-xs"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <FiAward className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">USC Certified</div>
                    <div className="text-sm text-neutral-600">Excellence in Care</div>
                  </div>
                </div>
              </motion.div>

              {/* Location & Hours Info */}
              <motion.div
                className="absolute top-1/2 -left-8 bg-white p-3 rounded-xl shadow-card"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <FiMapPin className="w-4 h-4 text-primary-600" />
                  <span className="text-sm font-medium text-neutral-700">Rajkot, Gujarat</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/3 -right-8 bg-white p-3 rounded-xl shadow-card"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
              >
                <div className="flex items-center gap-2">
                  <FiClock className="w-4 h-4 text-secondary-600" />
                  <span className="text-sm font-medium text-neutral-700">Mon-Sat 9AM-7PM</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}