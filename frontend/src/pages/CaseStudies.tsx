import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { caseStudiesAPI } from '../api';
import Card from '../components/common/Card';
import { FiArrowRight } from 'react-icons/fi';

export default function CaseStudies() {
  const { data, isLoading } = useQuery({
    queryKey: ['caseStudies'],
    queryFn: async () => {
      const response = await caseStudiesAPI.getAll({ published: true });
      return response.data.data;
    },
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl opacity-90">Success stories that inspire hope and confidence</p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          {isLoading ? (
            <div className="text-center py-12">Loading case studies...</div>
          ) : data && data.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.map((caseStudy: any, index: number) => (
                <motion.div
                  key={caseStudy._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/case-studies/${caseStudy.slug}`}>
                    <Card hover className="h-full group">
                      <div className="badge badge-primary mb-3">{caseStudy.condition}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {caseStudy.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {caseStudy.summary}
                      </p>
                      <div className="flex items-center text-primary-600 font-medium">
                        Read More <FiArrowRight className="ml-2" />
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-600">
              No case studies available
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

