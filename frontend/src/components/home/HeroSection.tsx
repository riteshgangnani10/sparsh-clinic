import { motion } from 'framer-motion';
import { FiPlay, FiPhone, FiMapPin, FiClock, FiHeart, FiStar, FiArrowRight } from 'react-icons/fi';
import { useState } from 'react';

interface HeroSectionProps {
  settings?: any;
}

export default function HeroSection({}: HeroSectionProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <svg className="absolute top-0 left-0 w-full h-full opacity-3" viewBox="0 0 100 100">
          <defs>
            <pattern id="hero-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#3b82f6" opacity="0.1" />
              <circle cx="5" cy="15" r="0.5" fill="#06b6d4" opacity="0.1" />
              <circle cx="15" cy="5" r="0.5" fill="#8b5cf6" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#hero-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-4"
            >
              <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-100 shadow-sm">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-slate-700">Trusted by 5000+ families since 2005</span>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>
            </motion.div>

            {/* Main Headline - More Sophisticated */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-slate-900">Unlocking Every Child's</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-violet-600">
                  Potential
                </span>
              </h1>
              
              <div className="mt-6 text-xl text-slate-600 leading-relaxed max-w-2xl">
                Expert pediatric therapy that transforms challenges into achievements. 
                We help children with cerebral palsy, autism, and developmental delays 
                discover their unique strengths and reach new milestones.
              </div>
            </motion.div>

            {/* Key Differentiators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6"
            >
              <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <FiHeart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Personalized Care</div>
                  <div className="text-sm text-slate-600">Tailored to each child</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Proven Results</div>
                  <div className="text-sm text-slate-600">95% success rate</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Expert Team</div>
                  <div className="text-sm text-slate-600">NDTA certified</div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons - More Professional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-center space-x-2">
                  <span>Schedule Free Consultation</span>
                  <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-sm opacity-90 font-normal">Expert assessment & personalized plan</div>
              </button>
              
              <button className="group flex items-center justify-center space-x-3 bg-white/80 backdrop-blur-sm border-2 border-slate-200 text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:border-blue-300 transition-all duration-300">
                <FiPhone className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="text-blue-600">+91-9426284419</div>
                  <div className="text-sm font-normal text-slate-600">Speak with our team</div>
                </div>
              </button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap items-center gap-6 text-sm text-slate-600 pt-4"
            >
              <div className="flex items-center space-x-2">
                <FiMapPin className="w-4 h-4 text-blue-600" />
                <span>Ahmedabad, Gujarat</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiClock className="w-4 h-4 text-emerald-600" />
                <span>Mon-Sat: 9AM-7PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-violet-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span>18+ Years Excellence</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Professional Image */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-3xl overflow-hidden shadow-2xl">
                
                {/* Professional Image */}
                <div className="aspect-[4/5] relative">
                  {!isVideoPlaying ? (
                    <>
                      {/* Professional Image Placeholder */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-violet-50">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-32 h-32 mx-auto mb-6 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center">
                              <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Expert Pediatric Care</h3>
                            <p className="text-slate-600 px-8">Professional therapy in a caring environment</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Play Button */}
                      <button
                        onClick={() => setIsVideoPlaying(true)}
                        className="absolute inset-0 flex items-center justify-center group"
                      >
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <FiPlay className="w-8 h-8 text-white ml-1" />
                        </div>
                      </button>
                    </>
                  ) : (
                    // Video Player
                    <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-lg mb-4">🎥 Therapy in Action</div>
                        <div className="text-sm text-slate-300 mb-6">
                          See how we help children achieve their goals
                        </div>
                        <button
                          onClick={() => setIsVideoPlaying(false)}
                          className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-colors"
                        >
                          Close Video
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">5000+</div>
                      <div className="text-sm text-slate-600">Children Helped</div>
                    </div>
                    <div className="w-px h-12 bg-slate-200"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">18+</div>
                      <div className="text-sm text-slate-600">Years Experience</div>
                    </div>
                  </div>
                </div>

                {/* Certification Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-2xl shadow-xl p-4">
                  <div className="text-center">
                    <div className="text-sm font-bold">NDTA</div>
                    <div className="text-xs">Certified</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-60 blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-violet-200 to-purple-200 rounded-full opacity-60 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-500/5 to-violet-500/5 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg font-medium text-slate-700">
            "Every child has unlimited potential. Our expertise helps unlock it."
          </p>
          <p className="text-sm text-slate-500 mt-2">- Dr. Tejas & Dr. Mona Patel, Founders</p>
        </div>
      </div>
    </section>
  );
}