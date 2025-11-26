import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { testimonialsAPI } from '../api';
import Card from '../components/common/Card';

export default function Testimonials() {
  const { data, isLoading } = useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      const response = await testimonialsAPI.getAll({ approved: true });
      return response.data.data;
    },
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">Testimonials</h1>
          <p className="text-xl opacity-90">Hear from the families we've had the privilege to serve</p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          {isLoading ? (
            <div className="text-center py-12">Loading testimonials...</div>
          ) : data && data.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {data.map((testimonial: any, index: number) => (
                <motion.div
                  key={testimonial._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating || 5)].map((_, i) => (
                        <FiStar key={i} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.testimonial}"</p>
                    <div className="flex items-center gap-3">
                      {testimonial.image?.url && (
                        <img
                          src={testimonial.image.url}
                          alt={testimonial.patientName}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      )}
                      <div>
                        <div className="font-semibold">
                          {testimonial.parentName || 'Parent'}
                        </div>
                        <div className="text-sm text-gray-600">
                          Parent of {testimonial.patientName}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-600">
              No testimonials available
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

