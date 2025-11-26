import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { FiArrowRight, FiActivity, FiHeart, FiUsers } from 'react-icons/fi';
import { servicesAPI } from '../../api';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

// Medical service icons
const MedicalIcons = {
  physiotherapy: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  occupational: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  speech: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  aquatic: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  sensory: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  behavioral: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
};

// Default services if API fails
const defaultServices = [
  {
    _id: '1',
    title: 'Pediatric Physiotherapy',
    shortDescription: 'Specialized movement therapy for children with developmental delays, cerebral palsy, and neurological conditions.',
    slug: 'pediatric-physiotherapy',
    icon: 'physiotherapy',
    features: ['Gross motor development', 'Balance and coordination', 'Strength training', 'Gait training']
  },
  {
    _id: '2',
    title: 'Occupational Therapy',
    shortDescription: 'Helping children develop fine motor skills, sensory processing, and daily living activities.',
    slug: 'occupational-therapy',
    icon: 'occupational',
    features: ['Fine motor skills', 'Sensory integration', 'Daily living skills', 'Cognitive development']
  },
  {
    _id: '3',
    title: 'Speech & Language Therapy',
    shortDescription: 'Comprehensive communication support for speech delays, language disorders, and swallowing difficulties.',
    slug: 'speech-therapy',
    icon: 'speech',
    features: ['Speech articulation', 'Language development', 'Swallowing therapy', 'Communication aids']
  },
  {
    _id: '4',
    title: 'Aquatic Therapy',
    shortDescription: 'Water-based therapy sessions that provide unique benefits for muscle strengthening and mobility.',
    slug: 'aquatic-therapy',
    icon: 'aquatic',
    features: ['Water exercises', 'Muscle strengthening', 'Joint mobility', 'Pain relief']
  },
  {
    _id: '5',
    title: 'Sensory Integration',
    shortDescription: 'Specialized therapy for children with sensory processing disorders and autism spectrum conditions.',
    slug: 'sensory-integration',
    icon: 'sensory',
    features: ['Sensory processing', 'Autism support', 'Behavioral therapy', 'Environmental adaptation']
  },
  {
    _id: '6',
    title: 'Behavioral Therapy',
    shortDescription: 'Evidence-based interventions for behavioral challenges and developmental disorders.',
    slug: 'behavioral-therapy',
    icon: 'behavioral',
    features: ['Behavior modification', 'Social skills', 'Emotional regulation', 'Parent training']
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

  // Use API data or fallback to default services
  const services = data && data.length > 0 ? data : defaultServices;

  if (isLoading) {
    return (
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-neutral-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-neutral-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FiHeart className="w-4 h-4 mr-2" />
            Our Specialized Services
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
            Comprehensive Pediatric 
            <span className="text-primary-600"> Rehabilitation</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Evidence-based treatment approaches tailored for each child's unique needs, 
            delivered by certified specialists with 18+ years of experience.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.slice(0, 6).map((service: any, index: number) => (
            <motion.div
              key={service._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link to={`/services/${service.slug}`} className="block group">
                <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-medical-lg transition-all duration-300 h-full group-hover:-translate-y-2">
                  {/* Service Icon */}
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    {MedicalIcons[service.icon as keyof typeof MedicalIcons] || <FiActivity className="w-8 h-8" />}
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Service Description */}
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {service.shortDescription}
                  </p>
                  
                  {/* Service Features */}
                  {service.features && (
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-center text-sm text-neutral-600">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {/* Learn More Link */}
                  <div className="flex items-center text-primary-600 font-semibold group-hover:gap-3 transition-all">
                    Learn More 
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-white p-8 rounded-2xl shadow-card max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                <FiUsers className="w-6 h-6 text-secondary-600" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-neutral-900">Need a Consultation?</h3>
                <p className="text-neutral-600">Get personalized treatment recommendations</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                to="/services" 
                className="bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors"
              >
                View All Services
              </Button>
              <Button 
                to="/contact" 
                variant="outline"
                className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}