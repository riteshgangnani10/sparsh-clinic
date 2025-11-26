import { motion } from 'framer-motion';
import { FiArrowRight, FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function QuickAboutSection() {
  return (
    <section className="py-20 bg-white">
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
              <div className="inline-flex items-center bg-blue-50 px-4 py-2 rounded-full border border-blue-100 font-medium mb-8">
                <FiHeart className="w-4 h-4 mr-2 text-blue-600" />
                <span className="text-blue-800">About Sparsh Clinic</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                18+ Years of
                <span className="text-blue-600"> Transforming Lives</span>
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Founded in 2005 by Dr. Tejas and Dr. Mona Patel, Sparsh Clinic has grown from a small 
                therapy center into a comprehensive 3000 sq ft facility. Our mission remains the same: 
                helping every child reach their full potential through expert, compassionate care.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-slate-900">NDTA & USC Certified Therapists</div>
                    <div className="text-sm text-slate-600">Advanced training in pediatric rehabilitation</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-slate-900">Evidence-Based Treatment</div>
                    <div className="text-sm text-slate-600">Research-backed therapy approaches</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-slate-900">Family-Centered Care</div>
                    <div className="text-sm text-slate-600">Supporting the entire family journey</div>
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 group"
              >
                Learn More About Our Story
                <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Right Content - Founders */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-8"
            >
              {/* Dr. Tejas */}
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">TP</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Dr. Tejas Patel</h3>
                    <div className="text-blue-600 font-semibold text-sm">Lead Pediatric Physiotherapist</div>
                    <div className="text-slate-600 text-sm">18+ Years • NDTA Certified</div>
                  </div>
                </div>
                <blockquote className="mt-4 text-slate-700 italic">
                  "Every child has unlimited potential. Our expertise helps unlock it."
                </blockquote>
              </div>

              {/* Dr. Mona */}
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">MP</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Dr. Mona Patel</h3>
                    <div className="text-blue-600 font-semibold text-sm">Senior Occupational Therapist</div>
                    <div className="text-slate-600 text-sm">15+ Years • IATF Certified</div>
                  </div>
                </div>
                <blockquote className="mt-4 text-slate-700 italic">
                  "Small steps lead to big achievements. We celebrate every milestone."
                </blockquote>
              </div>

              {/* Quick Contact */}
              <div className="bg-slate-900 rounded-2xl p-6 text-white">
                <h4 className="text-lg font-bold mb-4">Ready to Get Started?</h4>
                <p className="text-slate-300 mb-4 text-sm">
                  Schedule a free consultation to discuss your child's needs and create a personalized treatment plan.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
                  >
                    Schedule Consultation
                  </Link>
                  <a
                    href="tel:+919426284419"
                    className="border border-slate-600 text-slate-300 hover:bg-slate-800 font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
                  >
                    Call: +91-9426284419
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
