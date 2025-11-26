import { motion } from 'framer-motion';
import { FiHeart, FiAward, FiUsers, FiTrendingUp } from 'react-icons/fi';

const stats = [
  {
    icon: <FiUsers className="w-8 h-8" />,
    number: "5000+",
    label: "Children Helped",
    description: "Families who have found hope and progress with us"
  },
  {
    icon: <FiAward className="w-8 h-8" />,
    number: "18+",
    label: "Years Experience",
    description: "Dedicated to pediatric rehabilitation since 2005"
  },
  {
    icon: <FiTrendingUp className="w-8 h-8" />,
    number: "95%",
    label: "Success Rate",
    description: "Families report significant improvement"
  },
  {
    icon: <FiHeart className="w-8 h-8" />,
    number: "100%",
    label: "Personalized Care",
    description: "Every treatment plan is uniquely designed"
  }
];

export default function QuickStatsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Why Families
            <span className="text-blue-600"> Choose Sparsh</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our track record speaks for itself. These numbers represent real families, 
            real progress, and the trust that parents place in our expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="text-center bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-600 rounded-full flex items-center justify-center text-white">
                {stat.icon}
              </div>
              
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-slate-900 mb-3">{stat.label}</div>
              <div className="text-sm text-slate-600 leading-relaxed">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
