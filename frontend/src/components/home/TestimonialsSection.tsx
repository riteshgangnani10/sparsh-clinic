import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { testimonialsAPI } from '../../api';

// Clean default testimonials
const defaultTestimonials = [
  {
    _id: '1',
    testimonial: "The team at Sparsh Clinic has been incredible in helping our son with his development. We've seen remarkable improvements in his mobility and confidence.",
    patientName: "Arjun",
    parentName: "Priya Sharma",
    condition: "Cerebral Palsy",
    rating: 5
  },
  {
    _id: '2',
    testimonial: "The occupational therapy sessions have transformed our daughter's daily life. She can now participate in school activities with confidence.",
    patientName: "Kavya",
    parentName: "Rajesh Patel",
    condition: "Developmental Delays",
    rating: 5
  },
  {
    _id: '3',
    testimonial: "We were worried about our son's speech development, but the therapy program here exceeded our expectations. He's now communicating clearly.",
    patientName: "Aarav",
    parentName: "Meera Joshi",
    condition: "Speech Delays",
    rating: 5
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

  const testimonials = data && data.length > 0 ? data : defaultTestimonials;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (isLoading) {
    return (
      <section className="py-24 bg-white">
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

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-white">
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
            What Parents Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from families who have experienced life-changing results.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Clean Testimonial Card */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Clean Rating */}
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(currentTestimonial.rating || 5)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-current w-6 h-6" />
                ))}
              </div>

              {/* Clean Testimonial Text */}
              <blockquote className="text-2xl text-gray-700 mb-8 leading-relaxed italic">
                "{currentTestimonial.testimonial}"
              </blockquote>

              {/* Clean Author Info */}
              <div className="space-y-2">
                <div className="font-bold text-lg text-gray-900">
                  {currentTestimonial.parentName}
                </div>
                <div className="text-gray-600">
                  Parent of {currentTestimonial.patientName}
                </div>
                {currentTestimonial.condition && (
                  <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mt-2">
                    {currentTestimonial.condition}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Clean Navigation */}
            {testimonials.length > 1 && (
              <div className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-gray-200">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-full bg-white hover:bg-blue-50 transition-colors flex items-center justify-center shadow-sm"
                >
                  <FiChevronLeft className="w-5 h-5 text-gray-600" />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`transition-all duration-200 ${
                        index === currentIndex
                          ? 'w-8 h-3 bg-blue-600 rounded-full'
                          : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  className="w-12 h-12 rounded-full bg-white hover:bg-blue-50 transition-colors flex items-center justify-center shadow-sm"
                >
                  <FiChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}