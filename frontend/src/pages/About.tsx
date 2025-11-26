import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { teamAPI } from '../api';
import Card from '../components/common/Card';

export default function About() {
  const { data: team } = useQuery({
    queryKey: ['team'],
    queryFn: async () => {
      const response = await teamAPI.getAll({ isActive: true, isFeatured: true });
      return response.data.data;
    },
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Nurturing potential and celebrating progress since 2006
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2>Our Story</h2>
            <p>
              Powered by passion and sailing on dreams, SPARSH was established in 2006 to nurture and cultivate 
              functionality in the lives of physically and mentally challenged children affected with neurological, 
              musculoskeletal, genetic, and metabolic disorders.
            </p>
            <p>
              Years of vigorous effort have brought many stories of clinical success and appraisals from patients 
              and parents, which is not a matter of our pride but a matter of our satisfaction.
            </p>
            <p>
              From initial years of career, Dr. Mona Patel and Dr. Tejas Patel had a dream to build their unique 
              rehabilitation centre. With blessings and support, they started Sparsh as a Paediatric Neuro Developmental 
              Therapy Clinic in 2005, which has now grown into a comprehensive 3000 sq ft facility offering state-of-the-art 
              services including Aquatic Therapy, Sensory Integration, and Applied Behavioral Analysis.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">
              Expert professionals dedicated to your child's development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team?.map((member: any, index: number) => (
              <motion.div
                key={member._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <div className="text-6xl mb-4">👨‍⚕️</div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{member.title}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  {member.qualifications && member.qualifications.length > 0 && (
                    <div className="space-y-1">
                      {member.qualifications.map((qual: string, i: number) => (
                        <div key={i} className="text-sm text-gray-700">• {qual}</div>
                      ))}
                    </div>
                  )}
                  {member.phone && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <a href={`tel:${member.phone}`} className="text-primary-600 hover:underline">
                        {member.phone}
                      </a>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

