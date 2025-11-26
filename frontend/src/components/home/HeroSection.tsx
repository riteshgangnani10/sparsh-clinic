import { motion } from 'framer-motion';
import { FiArrowRight, FiPhone, FiCalendar, FiMapPin } from 'react-icons/fi';
import Button from '../common/Button';

interface HeroSectionProps {
  settings?: any;
}

export default function HeroSection({}: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-[85vh] flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <span className="text-sm font-medium text-slate-600">18+ Years of Excellence</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Helping Children
              <span className="block text-blue-600">Reach Their Full</span>
              <span className="block">Potential</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-slate-600 leading-relaxed">
              Expert pediatric physiotherapy, occupational therapy, and speech therapy services. 
              Personalized treatment plans for your child's development.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-slate-700">NDTA Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-slate-700">5000+ Children</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-slate-700">95% Success Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-slate-700">Personalized Care</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all group"
              >
                Book Free Consultation
                <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                <FiPhone className="mr-2 w-5 h-5" />
                Call: +91-9426284419
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <FiMapPin className="w-4 h-4 text-blue-600" />
                <span>Ahmedabad, Gujarat</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiCalendar className="w-4 h-4 text-blue-600" />
                <span>Mon-Sat: 9AM-7PM</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Banner Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="aspect-[4/5] bg-gradient-to-br from-blue-50 to-slate-50 flex items-center justify-center">
                {/* Professional Medical Illustration */}
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Caring for Every Child</h3>
                  <p className="text-slate-600">Professional therapy in a nurturing environment</p>
                </div>

                {/* Stats */}
                <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-md">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">18+</div>
                    <div className="text-xs text-slate-600">Years</div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-md">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">5000+</div>
                    <div className="text-xs text-slate-600">Children</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}