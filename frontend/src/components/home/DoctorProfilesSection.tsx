import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiAward, FiCalendar, FiUsers } from 'react-icons/fi';

interface Doctor {
  id: string;
  name: string;
  title: string;
  specialization: string;
  experience: string;
  phone: string;
  email: string;
  certifications: string[];
  expertise: string[];
  image?: string;
}

const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Tejas Patel',
    title: 'Pediatric Physiotherapist',
    specialization: 'Neurological Rehabilitation',
    experience: '18+ Years',
    phone: '+91-9426284419',
    email: 'tejas@sparshclinic.com',
    certifications: ['NDTA Certified', 'USC Certified', 'Pediatric Specialist'],
    expertise: [
      'Cerebral Palsy Management',
      'Developmental Delays',
      'Neurological Conditions',
      'Gross Motor Development',
      'Gait Training'
    ]
  },
  {
    id: '2',
    name: 'Dr. Mona Patel',
    title: 'Occupational Therapist',
    specialization: 'Sensory Integration & Development',
    experience: '15+ Years',
    phone: '+91-9426038646',
    email: 'mona@sparshclinic.com',
    certifications: ['IATF Certified', 'Sensory Integration Specialist', 'Autism Specialist'],
    expertise: [
      'Sensory Processing Disorders',
      'Autism Spectrum Disorders',
      'Fine Motor Development',
      'Daily Living Skills',
      'Behavioral Interventions'
    ]
  }
];

export default function DoctorProfilesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-secondary-100 text-secondary-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FiUsers className="w-4 h-4 mr-2" />
            Meet Our Expert Team
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
            Certified Specialists
            <span className="text-secondary-600"> Dedicated to Your Child</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Our team of highly qualified pediatric specialists brings decades of combined experience 
            in helping children achieve their developmental milestones.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group"
            >
              <div className="bg-neutral-50 rounded-3xl p-8 hover:shadow-medical-lg transition-all duration-300">
                {/* Doctor Image & Basic Info */}
                <div className="flex flex-col sm:flex-row gap-6 mb-8">
                  {/* Profile Image Placeholder */}
                  <div className="w-32 h-32 mx-auto sm:mx-0 rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center shadow-soft">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div className="text-xs text-primary-600 font-medium">Photo</div>
                    </div>
                  </div>

                  {/* Doctor Details */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">{doctor.name}</h3>
                    <p className="text-primary-600 font-semibold text-lg mb-2">{doctor.title}</p>
                    <p className="text-neutral-600 mb-3">{doctor.specialization}</p>
                    
                    {/* Experience Badge */}
                    <div className="inline-flex items-center bg-white px-3 py-1 rounded-full text-sm font-medium text-secondary-700 shadow-soft">
                      <FiCalendar className="w-4 h-4 mr-2" />
                      {doctor.experience} Experience
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3 flex items-center">
                    <FiAward className="w-5 h-5 mr-2 text-accent-600" />
                    Certifications
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.certifications.map((cert, idx) => (
                      <span
                        key={idx}
                        className="bg-accent-100 text-accent-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Areas of Expertise */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">Areas of Expertise</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {doctor.expertise.map((area, idx) => (
                      <li key={idx} className="flex items-center text-sm text-neutral-600">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Information */}
                <div className="border-t border-neutral-200 pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href={`tel:${doctor.phone}`}
                      className="flex items-center justify-center sm:justify-start gap-3 bg-primary-600 text-white px-4 py-3 rounded-xl hover:bg-primary-700 transition-colors group"
                    >
                      <FiPhone className="w-4 h-4" />
                      <span className="font-medium">Call Now</span>
                    </a>
                    <a
                      href={`mailto:${doctor.email}`}
                      className="flex items-center justify-center sm:justify-start gap-3 border-2 border-primary-600 text-primary-600 px-4 py-3 rounded-xl hover:bg-primary-50 transition-colors"
                    >
                      <FiMail className="w-4 h-4" />
                      <span className="font-medium">Email</span>
                    </a>
                  </div>
                  
                  {/* Phone Number Display */}
                  <div className="mt-3 text-center sm:text-left">
                    <span className="text-sm text-neutral-500">Direct Line: </span>
                    <span className="text-sm font-medium text-neutral-700">{doctor.phone}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">33+</div>
              <div className="text-sm text-neutral-600 font-medium">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-600 mb-2">5000+</div>
              <div className="text-sm text-neutral-600 font-medium">Children Treated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-600 mb-2">8+</div>
              <div className="text-sm text-neutral-600 font-medium">Specialized Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
              <div className="text-sm text-neutral-600 font-medium">Patient Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            Ready to Start Your Child's Journey?
          </h3>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
            Schedule a consultation with our specialists to create a personalized treatment plan for your child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-colors shadow-medical"
            >
              Schedule Consultation
            </a>
            <a
              href="tel:+919426284419"
              className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-colors"
            >
              Call Now: +91-9426284419
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
