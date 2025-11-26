import { motion } from 'framer-motion';
import { FiPlay, FiPhone, FiMapPin, FiClock, FiAward } from 'react-icons/fi';
import { useState } from 'react';

interface HeroSectionProps {
  settings?: any;
}

export default function HeroSection({}: HeroSectionProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Pattern - Unique geometric design */}
      <div className="absolute inset-0">
        <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 100 100">
          <defs>
            <pattern id="therapy-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="#059669" />
              <path d="M5 15 L15 5" stroke="#3b82f6" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#therapy-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Unique Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-4"
            >
              <div className="flex -space-x-2">
                {/* Real doctor photos would go here */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 border-2 border-white shadow-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TP</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 border-2 border-white shadow-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">MP</span>
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">Dr. Tejas & Dr. Mona Patel</div>
                <div className="text-xs text-gray-600">18+ Years • 5000+ Children Helped</div>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FiAward key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>
            </motion.div>

            {/* Main Headline - More Personal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Every Child</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600">
                  Deserves to Thrive
                </span>
              </h1>
              
              <div className="mt-6 text-xl text-gray-600 leading-relaxed max-w-2xl">
                We don't just treat conditions – we unlock potential. Through personalized therapy programs, 
                we help children with cerebral palsy, autism, and developmental delays discover their strength.
              </div>
            </motion.div>

            {/* Unique Stats Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 py-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">18+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center border-x border-gray-200">
                <div className="text-3xl font-bold text-blue-600">5000+</div>
                <div className="text-sm text-gray-600 font-medium">Children Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">95%</div>
                <div className="text-sm text-gray-600 font-medium">Success Rate</div>
              </div>
            </motion.div>

            {/* CTA Buttons - More Personal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Start Your Child's Journey
                <div className="text-sm opacity-90 font-normal">Free Assessment Call</div>
              </button>
              
              <button className="group flex items-center justify-center space-x-3 bg-white border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-teal-500 hover:text-teal-600 transition-all duration-300">
                <FiPhone className="w-5 h-5" />
                <div>
                  <div>+91-9426284419</div>
                  <div className="text-sm font-normal text-gray-600">Call Now</div>
                </div>
              </button>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap items-center gap-6 text-sm text-gray-600"
            >
              <div className="flex items-center space-x-2">
                <FiMapPin className="w-4 h-4 text-teal-600" />
                <span>Ahmedabad, Gujarat</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiClock className="w-4 h-4 text-blue-600" />
                <span>Mon-Sat: 9AM-7PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiAward className="w-4 h-4 text-purple-600" />
                <span>NDTA & USC Certified</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - 5 columns - Video/Image Section */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              
              {/* Main Video/Image Container */}
              <div className="relative bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl overflow-hidden shadow-2xl">
                
                {/* Video Placeholder - Replace with real therapy video */}
                <div className="aspect-[4/5] relative">
                  {!isVideoPlaying ? (
                    <>
                      {/* Therapy Session Image Placeholder */}
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100">
                        {/* This would be replaced with actual therapy session photo */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-32 h-32 mx-auto mb-6 bg-white/80 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center">
                              <svg className="w-16 h-16 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Real Therapy in Action</h3>
                            <p className="text-gray-600 px-8">Watch how we help children achieve their milestones</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Play Button Overlay */}
                      <button
                        onClick={() => setIsVideoPlaying(true)}
                        className="absolute inset-0 flex items-center justify-center group"
                      >
                        <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <FiPlay className="w-8 h-8 text-teal-600 ml-1" />
                        </div>
                      </button>
                    </>
                  ) : (
                    // Video Player - Replace with actual therapy video
                    <div className="absolute inset-0 bg-black flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-lg mb-4">Therapy Session Video</div>
                        <div className="text-sm text-gray-300">Real video would play here</div>
                        <button
                          onClick={() => setIsVideoPlaying(false)}
                          className="mt-4 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                        >
                          Close Video
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Floating Success Story Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">A</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Arjun's Success</div>
                      <div className="text-sm text-gray-600 leading-relaxed">
                        "From crawling to walking in 8 months. Dr. Tejas changed our lives."
                      </div>
                      <div className="text-xs text-teal-600 font-medium mt-2">- Priya, Mother</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-60 blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-teal-200 to-blue-200 rounded-full opacity-60 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}