import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { testimonialsAPI } from '../../api';
import Card from '../common/Card';

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

  const testimonials = data || [];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (isLoading || testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="badge badge-primary mb-4">Testimonials</span>
          <h2 className="section-title">
            What <span className="text-gradient">Parents Say</span>
          </h2>
          <p className="section-subtitle">
            Real stories from families we've had the privilege to serve
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(currentTestimonial.rating || 5)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg text-gray-700 mb-6 italic">
                "{currentTestimonial.testimonial}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {currentTestimonial.image?.url && (
                  <img
                    src={currentTestimonial.image.url}
                    alt={currentTestimonial.patientName}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                )}
                <div>
                  <div className="font-semibold text-gray-900">
                    {currentTestimonial.parentName || 'Parent'}
                  </div>
                  <div className="text-sm text-gray-600">
                    Parent of {currentTestimonial.patientName}
                  </div>
                  {currentTestimonial.condition && (
                    <div className="text-xs text-primary-600 mt-1">
                      {currentTestimonial.condition}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            {testimonials.length > 1 && (
              <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200">
                <button
                  onClick={prev}
                  className="p-2 rounded-full bg-gray-100 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                >
                  <FiChevronLeft size={24} />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? 'bg-primary-600 w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  className="p-2 rounded-full bg-gray-100 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                >
                  <FiChevronRight size={24} />
                </button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}

