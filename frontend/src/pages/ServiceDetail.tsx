import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesAPI } from '../api';
import { FiArrowLeft, FiCheck } from 'react-icons/fi';
import Button from '../components/common/Button';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();

  const { data, isLoading } = useQuery({
    queryKey: ['service', slug],
    queryFn: async () => {
      const response = await servicesAPI.getBySlug(slug!);
      return response.data.data;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!data) {
    return <div className="min-h-screen flex items-center justify-center">Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="container-custom">
          <Link to="/services" className="inline-flex items-center gap-2 mb-6 hover:underline">
            <FiArrowLeft /> Back to Services
          </Link>
          <h1 className="text-5xl font-bold mb-4">{data.title}</h1>
          <p className="text-xl opacity-90">{data.shortDescription}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom max-w-4xl">
          <motion.div
            className="bg-white rounded-2xl shadow-large p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 whitespace-pre-wrap">{data.description}</p>

              {data.benefits && data.benefits.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-4">Benefits</h2>
                  <ul className="space-y-2">
                    {data.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <FiCheck className="text-green-500 flex-shrink-0 mt-1" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <Button to="/contact" size="lg">
                Book This Service
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

