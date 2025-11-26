import { motion } from 'framer-motion';

export default function AboutExperienceSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                An Extraordinary Experience
              </h2>
              
              <h3 className="text-2xl font-bold text-blue-600 mb-6">
                Sparsh Clinic, A World-Renowned Pediatric Therapy Center
              </h3>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Your child is unique with very specific needs. Sparsh Clinic embraces these differences 
                  with an understanding that individualized programs work better. For this reason, no two 
                  therapy programs are alike.
                </p>
                
                <p>
                  We work with you to incorporate our wide range of therapies into a customized program 
                  specific to your child's needs and your family's goals. Our evidence-based approach 
                  ensures the highest quality of care.
                </p>
                
                <div className="border-l-4 border-blue-600 pl-6 py-4 bg-blue-50 rounded-r-lg">
                  <p className="italic text-gray-700 font-medium">
                    "Every child deserves the opportunity to reach their full potential. At Sparsh Clinic, 
                    we make that possible through personalized, intensive therapy programs."
                  </p>
                  <div className="mt-3 text-sm text-blue-600 font-semibold">
                    — Dr. Tejas Patel, Founder & Chief Therapist
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-8">
                    <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Sparsh Clinic</h3>
                  <p className="text-xl text-gray-600 mb-6">Nurturing Every Child's Potential</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/70 rounded-lg p-3">
                      <div className="font-bold text-blue-600">NDTA</div>
                      <div className="text-gray-600">Certified</div>
                    </div>
                    <div className="bg-white/70 rounded-lg p-3">
                      <div className="font-bold text-green-600">USC</div>
                      <div className="text-gray-600">Certified</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
