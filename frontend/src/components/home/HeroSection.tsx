import { motion } from 'framer-motion';
import { FiPhone, FiArrowRight } from 'react-icons/fi';
import Button from '../common/Button';

interface HeroSectionProps {
  settings?: any;
}

export default function HeroSection({ settings }: HeroSectionProps) {

  return (
    <section className="relative bg-white min-h-[90vh] flex items-center">
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content - Clean and Minimal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Simple Badge */}
            <div className="inline-block">
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                Certified Pediatric Rehabilitation
              </span>
            </div>
            
            {/* Clean Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Helping Children
              <span className="block text-blue-600">Reach Their</span>
              <span className="block text-green-600">Full Potential</span>
            </h1>
            
            {/* Simple Subtitle */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Expert pediatric rehabilitation services with 18+ years of proven results in child development.
            </p>
            
            {/* Clean CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
                Schedule Consultation
                <FiArrowRight className="w-4 h-4" />
              </Button>
              <a
                href="tel:+919426284419"
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                <FiPhone className="w-5 h-5" />
                +91-9426284419
              </a>
            </div>
            
            {/* Simple Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-100">
              <div>
                <div className="text-3xl font-bold text-gray-900">5000+</div>
                <div className="text-sm text-gray-600 mt-1">Children Helped</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">18+</div>
                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600 mt-1">Success Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Clean Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Simple Hero Image */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Sparsh Clinic</h3>
                  <p className="text-gray-600">Nurturing Every Child's Potential</p>
                </div>
              </div>

              {/* Single Floating Element */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">NDTA Certified</div>
                    <div className="text-sm text-gray-600">Pediatric Specialists</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}