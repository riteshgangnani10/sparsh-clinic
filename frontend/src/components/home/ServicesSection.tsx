import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { servicesAPI } from '../../api';
import { Link } from 'react-router-dom';

// NAPA-style service data
const napaStyleServices = [
  {
    _id: '1',
    title: 'Intensive Therapy Programs',
    shortDescription: 'Our intensive programs, which may include combinations of occupational, physical, & speech therapy, are customized for each child based on their needs & goals.',
    slug: 'intensive-therapy',
    color: 'blue'
  },
  {
    _id: '2',
    title: 'Pediatric Physical Therapy',
    shortDescription: 'Sparsh Clinic takes an intensive approach to physical therapy using specialized equipment and evidence-based techniques for optimal results.',
    slug: 'pediatric-physiotherapy',
    color: 'green'
  },
  {
    _id: '3',
    title: 'Pediatric Occupational Therapy',
    shortDescription: 'An OT\'s role is to assist individuals in performing "occupations" with the greatest level of independence possible. Childhood occupations include learning in school and playing with friends.',
    slug: 'occupational-therapy',
    color: 'purple'
  },
  {
    _id: '4',
    title: 'Pediatric Speech Therapy',
    shortDescription: 'Our therapists use a variety of techniques to address oral motor dysfunction, apraxia, fluency, receptive and expressive language, social pragmatics, and feeding difficulties.',
    slug: 'speech-therapy',
    color: 'orange'
  },
  {
    _id: '5',
    title: 'Developmental Feeding Therapy',
    shortDescription: 'Our occupational and speech therapists will work with your child to help them learn to feed themselves so they can become more independent.',
    slug: 'feeding-therapy',
    color: 'teal'
  },
  {
    _id: '6',
    title: 'Weekly Therapy Sessions',
    shortDescription: 'As well as our intensive therapy program, Sparsh also offers weekly appointments. Weekly appointments are available for physical therapy, occupational therapy, and speech therapy.',
    slug: 'weekly-therapy',
    color: 'indigo'
  }
];

const colorClasses = {
  blue: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
  green: 'bg-green-50 border-green-200 hover:bg-green-100',
  purple: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
  orange: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
  teal: 'bg-teal-50 border-teal-200 hover:bg-teal-100',
  indigo: 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100'
};

export default function ServicesSection() {
  const { data, isLoading } = useQuery({
    queryKey: ['services', 'active'],
    queryFn: async () => {
      const response = await servicesAPI.getAll({ isActive: true });
      return response.data.data;
    },
  });

  // Use API data or fallback to NAPA-style services
  const services = data && data.length > 0 ? data : napaStyleServices;

  if (isLoading) {
    return (
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-pulse space-y-4">
              <div className="h-12 bg-gray-200 rounded w-64 mx-auto"></div>
              <div className="h-6 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* NAPA-Style Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Our Programs
          </h2>
        </motion.div>

        {/* NAPA-Style Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service: any, index: number) => (
            <motion.div
              key={service._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link to={`/services/${service.slug}`} className="block group h-full">
                <div className={`
                  ${colorClasses[service.color as keyof typeof colorClasses] || colorClasses.blue}
                  border-2 rounded-2xl p-8 transition-all duration-300 h-full flex flex-col
                `}>
                  {/* Service Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Service Description */}
                  <p className="text-gray-700 mb-8 leading-relaxed flex-grow text-lg">
                    {service.shortDescription}
                  </p>
                  
                  {/* NAPA-Style Learn More Link */}
                  <div className="flex items-center text-blue-600 font-bold text-lg group-hover:gap-3 transition-all">
                    Learn More
                    <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link 
            to="/services" 
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-blue-700 transition-colors shadow-lg"
          >
            View All Programs
            <FiArrowRight className="w-6 h-6" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}