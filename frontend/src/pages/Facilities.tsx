import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiCamera, FiMapPin, FiPhone } from 'react-icons/fi';
import BehindTheScenesSection from '../components/home/BehindTheScenesSection';

export default function Facilities() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-slate-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Facilities</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Take a virtual tour of our modern, child-friendly facilities designed specifically 
              for pediatric rehabilitation and therapy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                State-of-the-Art
                <span className="text-blue-600"> Therapy Environments</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our 3000 sq ft facility houses specialized therapy areas, each designed with your child's 
                comfort, safety, and progress in mind. Every space combines professional equipment 
                with a welcoming, child-friendly atmosphere.
              </p>
            </motion.div>
          </div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <div className="text-center bg-blue-50 rounded-xl p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Safety First</h3>
              <p className="text-slate-600 text-sm">All equipment and spaces meet the highest safety standards for pediatric use</p>
            </div>

            <div className="text-center bg-blue-50 rounded-xl p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Child-Friendly</h3>
              <p className="text-slate-600 text-sm">Welcoming environments that help children feel comfortable and engaged</p>
            </div>

            <div className="text-center bg-blue-50 rounded-xl p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Modern Equipment</h3>
              <p className="text-slate-600 text-sm">Latest therapy equipment and technology for optimal treatment outcomes</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Behind the Scenes Section - Moved from Homepage */}
      <BehindTheScenesSection />

      {/* Schedule Tour CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Schedule Your Facility Tour
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                See our facilities in person and meet our team. We'd love to show you where 
                your child's therapy journey will take place.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="flex items-center justify-center space-x-2">
                    <FiCamera className="w-5 h-5" />
                    <span>Schedule In-Person Tour</span>
                  </div>
                </button>
                
                <a 
                  href="tel:+919426284419"
                  className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <FiPhone className="w-5 h-5" />
                    <span>Call: +91-9426284419</span>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
