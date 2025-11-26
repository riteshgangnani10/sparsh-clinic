import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import Button from '../common/Button';

export default function AboutSection() {
  const features = [
    'Expert team with international certifications',
    'Individualized treatment plans',
    'State-of-the-art facilities and equipment',
    'Comprehensive multidisciplinary approach',
    'Family-centered care and support',
    'Evidence-based therapeutic interventions',
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4">
              <span className="badge badge-primary">About Sparsh</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Empowering Children to Reach Their{' '}
              <span className="text-gradient">Full Potential</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Powered by passion and sailing on dreams, SPARSH was established in 2006 to nurture and cultivate 
              functionality in the lives of physically and mentally challenged children affected with neurological, 
              musculoskeletal, genetic, and metabolic disorders.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              Our team of internationally certified professionals provides comprehensive pediatric rehabilitation 
              services, including Pediatric Physiotherapy, Occupational Therapy, Speech Therapy, Sensory Integration, 
              Aquatic Therapy, and Applied Behavioral Analysis.
            </p>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FiCheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button to="/about" size="lg">
              Learn More About Us
            </Button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center text-white text-6xl">
                  👨‍⚕️
                </div>
                <div className="aspect-square bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-2xl flex items-center justify-center text-white text-6xl">
                  🏊
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center text-white text-6xl">
                  🎯
                </div>
                <div className="aspect-square bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl flex items-center justify-center text-white text-6xl">
                  🧸
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-large p-6 max-w-xs"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">18+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

