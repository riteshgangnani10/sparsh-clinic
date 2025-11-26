import { motion } from 'framer-motion';
import { FiPhone, FiMail } from 'react-icons/fi';

const doctors = [
  {
    id: '1',
    name: 'Dr. Tejas Patel',
    title: 'Pediatric Physiotherapist',
    experience: '18+ Years Experience',
    phone: '+91-9426284419',
    email: 'tejas@sparshclinic.com',
    certifications: ['NDTA Certified', 'USC Certified']
  },
  {
    id: '2',
    name: 'Dr. Mona Patel',
    title: 'Occupational Therapist',
    experience: '15+ Years Experience',
    phone: '+91-9426038646',
    email: 'mona@sparshclinic.com',
    certifications: ['IATF Certified', 'Sensory Integration Specialist']
  }
];

export default function DoctorProfilesSection() {
  return (
    <section className="py-24 bg-gray-50">
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
            Meet Our Specialists
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our team of certified pediatric specialists brings decades of experience in helping children achieve their developmental milestones.
          </p>
        </motion.div>

        {/* Clean Doctors Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                {/* Clean Profile Image Placeholder */}
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">
                    {doctor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                {/* Clean Doctor Info */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                <p className="text-blue-600 font-medium text-lg mb-2">{doctor.title}</p>
                <p className="text-gray-600 mb-6">{doctor.experience}</p>

                {/* Clean Certifications */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {doctor.certifications.map((cert, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {cert}
                    </span>
                  ))}
                </div>

                {/* Clean Contact Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${doctor.phone}`}
                    className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    <FiPhone className="w-4 h-4" />
                    Call Now
                  </a>
                  <a
                    href={`mailto:${doctor.email}`}
                    className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    <FiMail className="w-4 h-4" />
                    Email
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clean CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Child's Journey?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our specialists to create a personalized treatment plan.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Schedule Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}