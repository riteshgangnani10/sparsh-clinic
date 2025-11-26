import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { FiStar, FiHeart, FiPhone } from 'react-icons/fi';
import { testimonialsAPI } from '../api';
import RealStoriesSection from '../components/home/RealStoriesSection';

export default function Testimonials() {
  const { data, isLoading } = useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      const response = await testimonialsAPI.getAll({ isActive: true, isFeatured: true });
      return response.data.data;
    },
  });

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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Success Stories</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Real families, real progress, real hope. Discover how Sparsh Clinic has helped 
              children overcome challenges and reach their full potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Success Statistics */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-sm text-slate-600">Success Stories</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-sm text-slate-600">Positive Outcomes</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">18+</div>
              <div className="text-sm text-slate-600">Years Experience</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm text-slate-600">Personalized Care</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Real Stories Section - Moved from Homepage */}
      <RealStoriesSection />

      {/* Written Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                What Families
                <span className="text-blue-600"> Say About Us</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Read testimonials from parents who have experienced the transformation 
                that personalized pediatric therapy can bring to their children's lives.
              </p>
            </motion.div>

            {isLoading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <p className="mt-4 text-slate-600">Loading testimonials...</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data?.map((testimonial: any, index: number) => (
                  <motion.div
                    key={testimonial._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 p-6"
                  >
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FiStar 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < (testimonial.rating || 5) 
                              ? 'text-amber-400 fill-current' 
                              : 'text-slate-300'
                          }`} 
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-slate-700 leading-relaxed mb-6 italic">
                      "{testimonial.testimonial}"
                    </blockquote>

                    {/* Patient Info */}
                    <div className="border-t border-slate-100 pt-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            {testimonial.patientName?.[0] || 'P'}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 text-sm">
                            {testimonial.patientName || 'Patient'}
                          </div>
                          <div className="text-xs text-slate-600">
                            {testimonial.condition || 'Therapy Patient'}
                          </div>
                          <div className="text-xs text-slate-500">
                            - {testimonial.parentName || 'Parent'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Join the thousands of families who have found hope, progress, and transformation 
                at Sparsh Clinic. Your child's success story starts here.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg transition-colors">
                  <div className="flex items-center justify-center space-x-2">
                    <FiHeart className="w-5 h-5" />
                    <span>Start Your Journey</span>
                  </div>
                </button>
                
                <a 
                  href="tel:+919426284419"
                  className="border-2 border-slate-400 text-slate-300 hover:bg-slate-800 font-bold px-8 py-4 rounded-lg transition-colors"
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