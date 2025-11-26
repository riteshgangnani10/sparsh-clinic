import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiHeart, FiUsers, FiTarget, FiPhone } from 'react-icons/fi';
import { servicesAPI } from '../api';

// Enhanced service data with more details
const enhancedServices = [
  {
    _id: '1',
    title: 'Pediatric Physiotherapy',
    shortDescription: 'Comprehensive physical therapy for children with movement and mobility challenges',
    detailedDescription: 'Our pediatric physiotherapy program addresses gross motor skills, balance, coordination, and strength. We work with children with cerebral palsy, developmental delays, and neurological conditions.',
    slug: 'pediatric-physiotherapy',
    conditions: ['Cerebral Palsy', 'Developmental Delays', 'Muscular Dystrophy', 'Spina Bifida'],
    techniques: ['NDTA Approach', 'Bobath Technique', 'Sensory Integration', 'Aquatic Therapy'],
    ageRange: '0-18 years',
    sessionDuration: '45-60 minutes',
    icon: '🏃‍♂️'
  },
  {
    _id: '2',
    title: 'Occupational Therapy',
    shortDescription: 'Helping children develop daily living skills and sensory processing abilities',
    detailedDescription: 'Our occupational therapy focuses on fine motor skills, sensory integration, activities of daily living, and cognitive development to help children participate fully in home, school, and community activities.',
    slug: 'occupational-therapy',
    conditions: ['Autism Spectrum Disorder', 'ADHD', 'Sensory Processing Disorder', 'Developmental Delays'],
    techniques: ['Sensory Integration', 'Fine Motor Training', 'ADL Training', 'Cognitive Rehabilitation'],
    ageRange: '2-18 years',
    sessionDuration: '45 minutes',
    icon: '🎨'
  },
  {
    _id: '3',
    title: 'Speech & Language Therapy',
    shortDescription: 'Communication development for children with speech and language challenges',
    detailedDescription: 'Our speech therapy program addresses articulation, language development, fluency, voice disorders, and alternative communication methods to help children express themselves effectively.',
    slug: 'speech-therapy',
    conditions: ['Speech Delays', 'Autism', 'Cerebral Palsy', 'Hearing Impairment'],
    techniques: ['PROMPT Technique', 'Oral Motor Therapy', 'AAC Systems', 'Language Stimulation'],
    ageRange: '1-18 years',
    sessionDuration: '30-45 minutes',
    icon: '🗣️'
  },
  {
    _id: '4',
    title: 'Aquatic Therapy',
    shortDescription: 'Water-based therapy for enhanced mobility and strength development',
    detailedDescription: 'Our hydrotherapy program uses the unique properties of water to facilitate movement, reduce pain, and improve strength and endurance in a fun, supportive environment.',
    slug: 'aquatic-therapy',
    conditions: ['Cerebral Palsy', 'Muscular Dystrophy', 'Joint Disorders', 'Post-Surgery Recovery'],
    techniques: ['Halliwick Method', 'Watsu Technique', 'Aquatic Exercises', 'Pool Therapy'],
    ageRange: '3-18 years',
    sessionDuration: '30-45 minutes',
    icon: '🏊‍♀️'
  }
];

export default function Services() {
  const { data, isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const response = await servicesAPI.getAll({ isActive: true });
      return response.data.data || enhancedServices;
    },
  });

  const services = data || enhancedServices;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-slate-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive pediatric rehabilitation services tailored to each child's unique needs. 
              Every program is designed with evidence-based techniques and delivered with compassionate care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Specialized Therapy
                <span className="text-blue-600"> Programs</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Each service is delivered by certified professionals using evidence-based techniques 
                tailored to your child's specific needs and developmental goals.
              </p>
            </motion.div>

            {isLoading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <p className="mt-4 text-slate-600">Loading services...</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service: any, index: number) => (
                  <motion.div
                    key={service._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden group"
                  >
                    {/* Service Header */}
                    <div className="p-8">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="text-4xl">{service.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed">
                            {service.shortDescription}
                          </p>
                        </div>
                      </div>

                      {/* Detailed Description */}
                      <div className="bg-slate-50 rounded-xl p-4 mb-6">
                        <p className="text-slate-700 text-sm leading-relaxed">
                          {service.detailedDescription}
                        </p>
                      </div>

                      {/* Service Details Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2 text-sm">Age Range:</h4>
                          <p className="text-slate-600 text-sm">{service.ageRange}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2 text-sm">Session Duration:</h4>
                          <p className="text-slate-600 text-sm">{service.sessionDuration}</p>
                        </div>
                      </div>

                      {/* Conditions Treated */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-900 mb-3 text-sm">Conditions We Treat:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.conditions?.map((condition: string, idx: number) => (
                            <span
                              key={idx}
                              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                            >
                              {condition}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Techniques Used */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-900 mb-3 text-sm">Techniques & Approaches:</h4>
                        <div className="space-y-2">
                          {service.techniques?.map((technique: string, idx: number) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                              <span className="text-slate-700 text-sm">{technique}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <Link 
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                      >
                        Learn More About This Service
                        <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Why Choose
                <span className="text-blue-600"> Sparsh Clinic</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center bg-slate-50 rounded-xl p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <FiHeart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Personalized Care</h3>
                <p className="text-slate-600 text-sm">Every treatment plan is uniquely designed for your child's specific needs and goals</p>
              </div>

              <div className="text-center bg-slate-50 rounded-xl p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <FiUsers className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Expert Team</h3>
                <p className="text-slate-600 text-sm">NDTA and USC certified therapists with 18+ years of specialized experience</p>
              </div>

              <div className="text-center bg-slate-50 rounded-xl p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <FiTarget className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Proven Results</h3>
                <p className="text-slate-600 text-sm">95% of families report significant improvement in their child's abilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Schedule a consultation to discuss which services would be most beneficial 
                for your child's development and create a personalized treatment plan.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <FiHeart className="w-5 h-5" />
                    <span>Schedule Consultation</span>
                  </div>
                </Link>
                
                <a 
                  href="tel:+919426284419"
                  className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <FiPhone className="w-5 h-5" />
                    <span>Call: +91-9426284419</span>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}