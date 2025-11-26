import { motion } from 'framer-motion';
import { FiHeart, FiAward, FiUsers, FiMapPin, FiClock } from 'react-icons/fi';
import MakingLifeWorthLivingSection from '../components/home/MakingLifeWorthLivingSection';
import ValuesPhilosophySection from '../components/home/ValuesPhilosophySection';

export default function About() {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">About Sparsh Clinic</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Nurturing potential and celebrating progress since 2005. 
              Meet the team and discover the values that guide our mission.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-blue-50 px-6 py-3 rounded-full border border-blue-100 font-medium mb-8">
                <FiHeart className="w-4 h-4 mr-2 text-blue-600" />
                <span className="text-blue-800">Our Story</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
                A Dream Turned Into
                <span className="text-blue-600"> Reality</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-slate-800"
            >
              <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-slate-100">
                <p className="text-lg leading-relaxed mb-6 text-slate-700">
                  Powered by passion and sailing on dreams, <strong className="text-slate-900">SPARSH was established in 2005</strong> to nurture and cultivate 
                  functionality in the lives of physically and mentally challenged children affected with neurological, 
                  musculoskeletal, genetic, and metabolic disorders.
                </p>
                
                <p className="text-lg leading-relaxed mb-6 text-slate-700">
                  Years of vigorous effort have brought many stories of clinical success and appraisals from patients 
                  and parents, which is not a matter of our pride but a matter of our satisfaction.
                </p>
                
                <p className="text-lg leading-relaxed text-slate-700">
                  From initial years of career, <strong className="text-slate-900">Dr. Mona Patel and Dr. Tejas Patel</strong> had a dream to build their unique 
                  rehabilitation centre. With blessings and support, they started Sparsh as a Paediatric Neuro Developmental 
                  Therapy Clinic in 2005, which has now grown into a comprehensive <strong className="text-slate-900">3000 sq ft facility</strong> offering state-of-the-art 
                  services including Aquatic Therapy, Sensory Integration, and Applied Behavioral Analysis.
                </p>
              </div>

              {/* Key Milestones */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <div className="w-12 h-12 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                    <FiAward className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">2005</div>
                  <div className="text-sm text-slate-600">Clinic Established</div>
                </div>
                
                <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <div className="w-12 h-12 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                    <FiUsers className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">5000+</div>
                  <div className="text-sm text-slate-600">Children Helped</div>
                </div>
                
                <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <div className="w-12 h-12 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                    <FiMapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">3000</div>
                  <div className="text-sm text-slate-600">Sq Ft Facility</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-slate-50">
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
                Meet Our
                <span className="text-blue-600"> Founders</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                The passionate professionals who turned their dream of helping children into reality.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Dr. Tejas Patel */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100"
              >
                <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-50 to-slate-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">TP</span>
                      </div>
                      <div className="text-sm text-slate-600">Professional photo</div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Dr. Tejas Patel</h3>
                  <div className="text-blue-600 font-semibold mb-1">Lead Pediatric Physiotherapist</div>
                  <div className="text-slate-600 text-sm mb-4">18+ Years Experience • Neurological Rehabilitation</div>

                  <div className="bg-blue-50 rounded-xl p-4 mb-6">
                    <p className="text-slate-700 italic leading-relaxed">
                      "Every child has unlimited potential. Our job is to unlock it through compassionate, 
                      evidence-based therapy that meets each child where they are."
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Certifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">NDTA Certified</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">USC Certified</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Pediatric Specialist</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Dr. Mona Patel */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100"
              >
                <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-50 to-slate-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">MP</span>
                      </div>
                      <div className="text-sm text-slate-600">Professional photo</div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Dr. Mona Patel</h3>
                  <div className="text-blue-600 font-semibold mb-1">Senior Occupational Therapist</div>
                  <div className="text-slate-600 text-sm mb-4">15+ Years Experience • Sensory Integration</div>

                  <div className="bg-blue-50 rounded-xl p-4 mb-6">
                    <p className="text-slate-700 italic leading-relaxed">
                      "Small steps lead to big achievements. We celebrate every milestone and help families 
                      see the extraordinary in everyday progress."
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Certifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">IATF Certified</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">SI Specialist</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">ADL Expert</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values - Moved from Homepage */}
      <MakingLifeWorthLivingSection />
      
      {/* Values & Philosophy - Moved from Homepage */}
      <ValuesPhilosophySection />

      {/* Contact Information */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Visit Our Clinic</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <FiMapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-slate-300">
                  Sparsh Pediatric Rehabilitation Clinic<br />
                  Ahmedabad, Gujarat, India
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <FiClock className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Hours</h3>
                <p className="text-slate-300">
                  Monday - Saturday: 9:00 AM - 7:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="bg-blue-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Contact us today to schedule your child's initial assessment and take the first step 
                towards unlocking their potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Schedule Consultation
                </button>
                <a 
                  href="tel:+919426284419"
                  className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Call: +91-9426284419
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}