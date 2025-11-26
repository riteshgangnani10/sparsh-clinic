import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { servicesAPI } from '../../api';
import Card from '../common/Card';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

export default function ServicesSection() {
  const { data, isLoading } = useQuery({
    queryKey: ['services', 'active'],
    queryFn: async () => {
      const response = await servicesAPI.getAll({ isActive: true });
      return response.data.data;
    },
  });

  const services = data || [];

  const serviceIcons: any = {
    0: '🏃',
    1: '✋',
    2: '🎯',
    3: '🏊',
    4: '💬',
    5: '🧩',
  };

  if (isLoading) {
    return (
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center">Loading services...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="badge badge-primary mb-4">Our Services</span>
          <h2 className="section-title">
            Comprehensive <span className="text-gradient">Therapy Services</span>
          </h2>
          <p className="section-subtitle">
            We offer a wide range of specialized pediatric rehabilitation services tailored to each child's unique needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service: any, index: number) => (
            <motion.div
              key={service._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/services/${service.slug}`}>
                <Card hover className="h-full group">
                  <div className="text-5xl mb-4">{serviceIcons[index] || '⭐'}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center text-primary-600 font-medium group-hover:gap-2 transition-all">
                    Learn More <FiArrowRight className="ml-2" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {services.length > 6 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button to="/services" variant="outline" size="lg">
              View All Services
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

