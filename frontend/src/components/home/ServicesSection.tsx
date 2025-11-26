import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { servicesAPI } from '../../api';
import { Link } from 'react-router-dom';

// Clean service icons
const ServiceIcons = {
  physiotherapy: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  occupational: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  speech: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
};

// Simplified default services
const defaultServices = [
  {
    _id: '1',
    title: 'Pediatric Physiotherapy',
    shortDescription: 'Specialized movement therapy for children with developmental delays and neurological conditions.',
    slug: 'pediatric-physiotherapy',
    icon: 'physiotherapy'
  },
  {
    _id: '2',
    title: 'Occupational Therapy',
    shortDescription: 'Helping children develop fine motor skills, sensory processing, and daily living activities.',
    slug: 'occupational-therapy',
    icon: 'occupational'
  },
  {
    _id: '3',
    title: 'Speech & Language Therapy',
    shortDescription: 'Comprehensive communication support for speech delays and language disorders.',
    slug: 'speech-therapy',
    icon: 'speech'
  }
];

export default function ServicesSection() {
  const { data, isLoading } = useQuery({
    queryKey: ['services', 'active'],
    queryFn: async () => {
      const response = await servicesAPI.getAll({ isActive: true });
      return response.data.data;
    },
  });

  const services = data && data.length > 0 ? data : defaultServices;

  if (isLoading) {
    return (
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Clean Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized pediatric rehabilitation services tailored for each child's unique needs.
          </p>
        </motion.div>

        {/* Clean Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.slice(0, 3).map((service: any, index: number) => (
            <motion.div
              key={service._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link to={`/services/${service.slug}`} className="block group">
                <div className="bg-white p-8 rounded-2xl hover:shadow-lg transition-all duration-300 h-full">
                  {/* Clean Icon */}
                  <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-100 transition-colors">
                    {ServiceIcons[service.icon as keyof typeof ServiceIcons] || ServiceIcons.physiotherapy}
                  </div>
                  
                  {/* Clean Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Clean Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.shortDescription}
                  </p>
                  
                  {/* Clean Link */}
                  <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                    Learn More 
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Clean CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            View All Services
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}