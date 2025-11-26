import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesAPI } from '../api';
import Card from '../components/common/Card';
import { FiArrowRight } from 'react-icons/fi';

export default function Services() {
  const { data, isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const response = await servicesAPI.getAll({ isActive: true });
      return response.data.data;
    },
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Comprehensive pediatric rehabilitation services tailored to each child's unique needs
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          {isLoading ? (
            <div className="text-center py-12">Loading services...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data?.map((service: any, index: number) => (
                <motion.div
                  key={service._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/services/${service.slug}`}>
                    <Card hover className="h-full group">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.shortDescription}
                      </p>
                      <div className="flex items-center text-primary-600 font-medium">
                        Learn More <FiArrowRight className="ml-2" />
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

