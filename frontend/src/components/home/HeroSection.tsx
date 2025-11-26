import { motion } from 'framer-motion';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import Button from '../common/Button';

interface HeroSectionProps {
  settings?: any;
}

export default function HeroSection({}: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white min-h-[85vh] flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline - NAPA Style */}
          <motion.h1 
            className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Intensive Pediatric Therapy Programs,
            <span className="block text-blue-600">Tailored to Your Child's Unique Needs.</span>
          </motion.h1>
          
          {/* Subtitle - Professional */}
          <motion.p
            className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our therapists deliver diverse and innovative pediatric therapies, helping your child reach their full potential through evidence-based treatment approaches.
          </motion.p>
          
          {/* CTA Buttons - NAPA Style */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg inline-flex items-center gap-2">
              Start Registration Process
              <FiArrowRight className="w-5 h-5" />
            </Button>
            <a
              href="tel:+919426284419"
              className="flex items-center gap-3 text-blue-600 hover:text-blue-700 transition-colors font-semibold text-lg"
            >
              <FiPhone className="w-5 h-5" />
              +91-9426284419
            </a>
          </motion.div>

          {/* Trust Indicators - Clean Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-sm text-gray-600 font-medium">Children Helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">18+</div>
              <div className="text-sm text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-sm text-gray-600 font-medium">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-sm text-gray-600 font-medium">Sessions Daily</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}