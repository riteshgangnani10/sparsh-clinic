import { motion } from 'framer-motion';
import { FiPlay, FiPhone, FiMapPin, FiClock, FiHeart, FiStar } from 'react-icons/fi';
import { useState } from 'react';

interface HeroSectionProps {
  settings?: any;
}

export default function HeroSection({}: HeroSectionProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-teal-50 via-white to-orange-50 overflow-hidden">
      {/* Mission-inspired background pattern */}
      <div className="absolute inset-0">
        <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 100 100">
          <defs>
            <pattern id="mission-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.5" fill="#20B2AA" />
              <circle cx="5" cy="5" r="1" fill="#9ACD32" />
              <circle cx="15" cy="15" r="1" fill="#FF6347" />
              <path d="M2 18 L18 2" stroke="#6A5ACD" strokeWidth="0.3" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#mission-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          
          {/* Left Content - Mission-Driven */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Mission Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-4"
            >
              <div className="flex items-center bg-gradient-to-r from-teal-100 to-orange-100 px-4 py-2 rounded-full">
                <FiHeart className="w-4 h-4 text-teal-600 mr-2" />
                <span className="text-sm font-semibold text-gray-800">Our Mission</span>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-600 ml-2">5000+ Lives Transformed</span>
              </div>
            </motion.div>

            {/* Mission-Driven Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Making Life</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-blue-500 to-orange-500">
                  Worth Living!
                </span>
              </h1>
              
              <div className="mt-6 text-xl text-gray-600 leading-relaxed max-w-2xl">
                At Sparsh, we don't just provide therapy – we unlock potential, restore hope, and transform lives. 
                Every child deserves to experience the joy of movement, communication, and independence.
              </div>
            </motion.div>

            {/* Mission Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8"
            >
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-2xl">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
                  <FiHeart className="w-6 h-6 text-white" />
                </div>
                <div className="font-bold text-gray-900">Compassionate Care</div>
                <div className="text-sm text-gray-600">Every child is treated with love and respect</div>
              </div>
              
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-2xl">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="font-bold text-gray-900">Proven Results</div>
                <div className="text-sm text-gray-600">18+ years of transforming lives</div>
              </div>
              
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-2xl">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="font-bold text-gray-900">Family-Centered</div>
                <div className="text-sm text-gray-600">We support the entire family journey</div>
              </div>
            </motion.div>

            {/* Mission-Based CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group bg-gradient-to-r from-teal-500 via-blue-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-center space-x-2">
                  <FiHeart className="w-5 h-5" />
                  <span>Begin Your Child's Journey</span>
                </div>
                <div className="text-sm opacity-90 font-normal">Free consultation & assessment</div>
              </button>
              
              <button className="group flex items-center justify-center space-x-3 bg-white/80 backdrop-blur-sm border-2 border-teal-200 text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:border-teal-400 transition-all duration-300">
                <FiPhone className="w-5 h-5 text-teal-600" />
                <div>
                  <div className="text-teal-600">+91-9426284419</div>
                  <div className="text-sm font-normal text-gray-600">Speak with our team</div>
                </div>
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap items-center gap-6 text-sm text-gray-600 pt-4"
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
                <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span>NDTA & USC Certified</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Mission Video */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              
              {/* Main Mission Video Container */}
              <div className="relative bg-gradient-to-br from-white to-teal-50 rounded-3xl overflow-hidden shadow-2xl">
                
                {/* Mission Video */}
                <div className="aspect-[4/5] relative">
                  {!isVideoPlaying ? (
                    <>
                      {/* Mission Video Thumbnail */}
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-blue-100 to-orange-100">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-32 h-32 mx-auto mb-6 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center">
                              <FiHeart className="w-16 h-16 text-teal-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Mission in Action</h3>
                            <p className="text-gray-600 px-8">Watch how we make life worth living</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Play Button Overlay */}
                      <button
                        onClick={() => setIsVideoPlaying(true)}
                        className="absolute inset-0 flex items-center justify-center group"
                      >
                        <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <FiPlay className="w-8 h-8 text-white ml-1" />
                        </div>
                      </button>
                    </>
                  ) : (
                    // Mission Video Player
                    <div className="absolute inset-0 bg-black flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-lg mb-4">🎥 Mission Video</div>
                        <div className="text-sm text-gray-300 mb-6">
                          "Making Life Worth Living" - Our story, our mission, our impact
                        </div>
                        <button
                          onClick={() => setIsVideoPlaying(false)}
                          className="mt-4 px-6 py-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg hover:from-teal-600 hover:to-blue-600 transition-colors"
                        >
                          Close Video
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Mission Impact Stats */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-600 mb-1">5000+</div>
                    <div className="text-sm text-gray-600 mb-2">Lives Transformed</div>
                    <div className="text-xs text-gray-500 italic">"Making each life worth living"</div>
                  </div>
                </div>

                {/* Certification Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-2xl shadow-xl p-4">
                  <div className="text-center">
                    <div className="text-lg font-bold">18+</div>
                    <div className="text-xs">Years</div>
                  </div>
                </div>
              </div>

              {/* Decorative Mission Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-teal-200 to-blue-200 rounded-full opacity-60 blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-60 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission Quote Footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-teal-500/10 to-orange-500/10 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg font-medium text-gray-700 italic">
            "Every small step forward is a victory. Every smile restored is our success. 
            <span className="text-teal-600 font-bold"> Making life, worth living!</span>"
          </p>
          <p className="text-sm text-gray-500 mt-2">- Dr. Tejas & Dr. Mona Patel, Founders</p>
        </div>
      </div>
    </section>
  );
}