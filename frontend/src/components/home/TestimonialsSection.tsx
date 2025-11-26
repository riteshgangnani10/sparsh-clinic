import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar, FiAward, FiHeart, FiUsers } from 'react-icons/fi';
import { testimonialsAPI } from '../../api';

// Default testimonials if API fails
const defaultTestimonials = [
  {
    _id: '1',
    testimonial: "Dr. Tejas and Dr. Mona have been incredible in helping our son with cerebral palsy. Their expertise and compassionate approach have made such a difference in his development. We've seen remarkable improvements in his mobility and confidence.",
    patientName: "Arjun",
    parentName: "Priya Sharma",
    condition: "Cerebral Palsy",
    rating: 5,
    age: "6 years old",
    treatmentDuration: "18 months"
  },
  {
    _id: '2',
    testimonial: "The occupational therapy sessions have transformed our daughter's daily life. She can now dress herself, write properly, and participate in school activities with confidence. The team's dedication is truly remarkable.",
    patientName: "Kavya",
    parentName: "Rajesh Patel",
    condition: "Developmental Delays",
    rating: 5,
    age: "8 years old",
    treatmentDuration: "12 months"
  },
  {
    _id: '3',
    testimonial: "We were worried about our son's speech development, but the speech therapy program here exceeded our expectations. He's now communicating clearly and his confidence has soared. Thank you for giving him his voice.",
    patientName: "Aarav",
    parentName: "Meera Joshi",
    condition: "Speech Delays",
    rating: 5,
    age: "5 years old",
    treatmentDuration: "8 months"
  },
  {
    _id: '4',
    testimonial: "The aquatic therapy sessions have been a game-changer for our daughter with muscular dystrophy. She looks forward to every session and we've seen significant improvements in her strength and mobility.",
    patientName: "Ananya",
    parentName: "Vikram Singh",
    condition: "Muscular Dystrophy",
    rating: 5,
    age: "10 years old",
    treatmentDuration: "24 months"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data, isLoading } = useQuery({
    queryKey: ['testimonials', 'homepage'],
    queryFn: async () => {
      const response = await testimonialsAPI.getAll({ 
        displayOnHomepage: true,
        approved: true 
      });
      return response.data.data;
    },
  });

  // Use API data or fallback to default testimonials
  const testimonials = data && data.length > 0 ? data : defaultTestimonials;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (isLoading) {
    return (
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
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

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-accent-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FiHeart className="w-4 h-4 mr-2" />
            Patient Success Stories
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
            Transforming Lives,
            <span className="text-primary-600"> One Child at a Time</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from families who have experienced the life-changing impact of our pediatric rehabilitation services.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Main Testimonial Card */}
          <motion.div
            className="bg-white rounded-3xl shadow-medical-lg p-8 lg:p-12 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(currentTestimonial.rating || 5)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-current w-6 h-6" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl lg:text-2xl text-neutral-700 text-center mb-8 leading-relaxed font-medium italic">
                "{currentTestimonial.testimonial}"
              </blockquote>

              {/* Patient & Parent Info */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                {/* Patient Avatar */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-600">
                      {currentTestimonial.patientName?.charAt(0) || 'P'}
                    </span>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="font-bold text-lg text-neutral-900">
                      {currentTestimonial.patientName}
                    </div>
                    <div className="text-sm text-neutral-600">
                      {currentTestimonial.age}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden lg:block w-px h-12 bg-neutral-200"></div>

                {/* Parent Info */}
                <div className="text-center lg:text-left">
                  <div className="font-semibold text-neutral-900">
                    {currentTestimonial.parentName || 'Parent'}
                  </div>
                  <div className="text-sm text-neutral-600 mb-1">
                    Parent
                  </div>
                  {currentTestimonial.condition && (
                    <div className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-xs font-medium">
                      {currentTestimonial.condition}
                    </div>
                  )}
                </div>

                {/* Treatment Duration */}
                {currentTestimonial.treatmentDuration && (
                  <>
                    <div className="hidden lg:block w-px h-12 bg-neutral-200"></div>
                    <div className="text-center">
                      <div className="text-sm text-neutral-500 mb-1">Treatment Duration</div>
                      <div className="font-semibold text-secondary-600">
                        {currentTestimonial.treatmentDuration}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>

            {/* Navigation */}
            {testimonials.length > 1 && (
              <div className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-neutral-200">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-full bg-neutral-100 hover:bg-primary-100 hover:text-primary-600 transition-all duration-200 flex items-center justify-center group"
                >
                  <FiChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                </button>

                <div className="flex gap-3">
                  {testimonials.map((_: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`transition-all duration-200 ${
                        index === currentIndex
                          ? 'w-8 h-3 bg-primary-600 rounded-full'
                          : 'w-3 h-3 bg-neutral-300 hover:bg-neutral-400 rounded-full'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  className="w-12 h-12 rounded-full bg-neutral-100 hover:bg-primary-100 hover:text-primary-600 transition-all duration-200 flex items-center justify-center group"
                >
                  <FiChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            )}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-6 text-center shadow-card">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FiUsers className="w-6 h-6 text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-primary-600 mb-1">5000+</div>
              <div className="text-sm text-neutral-600 font-medium">Happy Families</div>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-card">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FiAward className="w-6 h-6 text-secondary-600" />
              </div>
              <div className="text-2xl font-bold text-secondary-600 mb-1">95%</div>
              <div className="text-sm text-neutral-600 font-medium">Success Rate</div>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-card">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FiStar className="w-6 h-6 text-accent-600" />
              </div>
              <div className="text-2xl font-bold text-accent-600 mb-1">4.9/5</div>
              <div className="text-sm text-neutral-600 font-medium">Patient Rating</div>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-card">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FiHeart className="w-6 h-6 text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-primary-600 mb-1">18+</div>
              <div className="text-sm text-neutral-600 font-medium">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}