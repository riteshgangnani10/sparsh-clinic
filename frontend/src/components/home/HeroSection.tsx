import { motion } from 'framer-motion';
import { FiPlay } from 'react-icons/fi';
import Button from '../common/Button';

interface HeroSectionProps {
  settings?: any;
}

export default function HeroSection({ settings }: HeroSectionProps) {
  const heroTitle = settings?.homepage?.heroTitle || 'Every Child Deserves the Chance to Reach Their Full Potential';
  const heroSubtitle = settings?.homepage?.heroSubtitle || 'Comprehensive pediatric rehabilitation services delivered with expertise, compassion, and dedication.';

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-secondary-50 to-purple-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-50"></div>
      
      {/* Animated Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="badge badge-primary text-base px-4 py-2">
                🌟 18+ Years of Excellence
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {heroTitle.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {heroSubtitle}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Button to="/contact" size="lg">
                Book Appointment
              </Button>
              <Button to="/services" variant="outline" size="lg">
                Our Services
              </Button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="mt-8 flex flex-wrap gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div>
                <div className="text-sm text-gray-500">Dr. Tejas Patel</div>
                <a href="tel:+919426284419" className="text-primary-600 font-semibold hover:underline">
                  +91-9426284419
                </a>
              </div>
              <div>
                <div className="text-sm text-gray-500">Dr. Mona Patel</div>
                <a href="tel:+919426038646" className="text-primary-600 font-semibold hover:underline">
                  +91-9426038646
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              {/* Placeholder for hero image */}
              <div className="aspect-square bg-gradient-to-br from-primary-400 to-secondary-500 rounded-3xl shadow-2xl flex items-center justify-center text-white">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🏥</div>
                  <h3 className="text-2xl font-bold mb-2">Sparsh Clinic</h3>
                  <p className="text-lg opacity-90">Nurturing Potential</p>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-large p-4 max-w-xs"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                    ✅
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">95% Success Rate</div>
                    <div className="text-sm text-gray-600">In Child Development</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-large p-4 max-w-xs"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-2xl">
                    👶
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">5000+ Children Helped</div>
                    <div className="text-sm text-gray-600">Happy Families</div>
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

