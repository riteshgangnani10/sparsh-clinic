import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiTrendingUp, FiUsers } from 'react-icons/fi';

export default function ResearchSection() {
  return (
    <section className="py-24 bg-blue-600 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl lg:text-6xl font-bold mb-8">
                Supported By Research
              </h2>
              <p className="text-xl leading-relaxed mb-8 text-blue-100">
                All of our physical, occupational and speech therapy approaches are supported by extensive research and evidence-based practices.
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors">
                Learn More About Our Research
              </button>
            </motion.div>

            {/* Right Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <FiBookOpen className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-blue-200 text-sm font-medium">Research Studies</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <FiAward className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-blue-200 text-sm font-medium">Certifications</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <FiTrendingUp className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-blue-200 text-sm font-medium">Improvement Rate</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <FiUsers className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-blue-200 text-sm font-medium">Evidence-Based</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
