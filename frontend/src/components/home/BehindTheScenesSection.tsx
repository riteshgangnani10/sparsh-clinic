import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiCamera, FiMapPin, FiUsers, FiHeart } from 'react-icons/fi';

const facilityAreas = [
  {
    id: 1,
    name: "Physiotherapy Gym",
    description: "State-of-the-art equipment designed specifically for pediatric rehabilitation",
    image: "/api/placeholder/600/400",
    features: ["Parallel bars", "Balance training equipment", "Gait training tools", "Strength building apparatus"],
    icon: "🏃‍♂️"
  },
  {
    id: 2,
    name: "Occupational Therapy Room",
    description: "Sensory-rich environment for developing daily living skills",
    image: "/api/placeholder/600/400",
    features: ["Sensory integration tools", "Fine motor skill stations", "ADL training setup", "Cognitive development games"],
    icon: "🎨"
  },
  {
    id: 3,
    name: "Speech Therapy Suite",
    description: "Quiet, comfortable space for communication development",
    image: "/api/placeholder/600/400",
    features: ["Sound-proof rooms", "Interactive communication boards", "Voice recording equipment", "Language development tools"],
    icon: "🗣️"
  },
  {
    id: 4,
    name: "Hydrotherapy Pool",
    description: "Therapeutic water exercises for enhanced mobility",
    image: "/api/placeholder/600/400",
    features: ["Temperature controlled", "Accessible entry/exit", "Underwater treadmill", "Flotation devices"],
    icon: "🏊‍♀️"
  },
  {
    id: 5,
    name: "Assessment Room",
    description: "Comprehensive evaluation space for initial assessments",
    image: "/api/placeholder/600/400",
    features: ["Standardized testing tools", "Video recording setup", "Comfortable seating", "Child-friendly environment"],
    icon: "📋"
  },
  {
    id: 6,
    name: "Family Consultation Area",
    description: "Private space for family discussions and education",
    image: "/api/placeholder/600/400",
    features: ["Comfortable seating", "Educational materials", "Progress tracking displays", "Privacy for sensitive discussions"],
    icon: "👨‍👩‍👧‍👦"
  }
];

const teamMembers = [
  {
    name: "Dr. Tejas Patel",
    role: "Lead Pediatric Physiotherapist",
    experience: "18+ years",
    specialization: "Neurological Rehabilitation",
    image: "/api/placeholder/300/300",
    certifications: ["NDTA Certified", "USC Certified", "Pediatric Specialist"],
    quote: "Every child has unlimited potential. Our job is to unlock it."
  },
  {
    name: "Dr. Mona Patel",
    role: "Senior Occupational Therapist",
    experience: "15+ years",
    specialization: "Sensory Integration",
    image: "/api/placeholder/300/300",
    certifications: ["IATF Certified", "Sensory Integration Specialist", "ADL Expert"],
    quote: "Small steps lead to big achievements. We celebrate every milestone."
  }
];

export default function BehindTheScenesSection() {
  const [activeArea, setActiveArea] = useState(0);
  const [viewMode, setViewMode] = useState<'facilities' | 'team'>('facilities');

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FiCamera className="w-4 h-4 mr-2" />
            Behind the Scenes
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Where the Magic
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> Happens</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Take a virtual tour of our clinic and meet the passionate team dedicated to your child's success. 
            Every space is designed with children's comfort and progress in mind.
          </p>

          {/* View Toggle */}
          <div className="inline-flex bg-gray-100 rounded-2xl p-1">
            <button
              onClick={() => setViewMode('facilities')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                viewMode === 'facilities'
                  ? 'bg-white text-purple-600 shadow-md'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              <FiMapPin className="w-4 h-4 inline mr-2" />
              Our Facilities
            </button>
            <button
              onClick={() => setViewMode('team')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                viewMode === 'team'
                  ? 'bg-white text-purple-600 shadow-md'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              <FiUsers className="w-4 h-4 inline mr-2" />
              Meet Our Team
            </button>
          </div>
        </motion.div>

        {/* Facilities View */}
        {viewMode === 'facilities' && (
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8">
              
              {/* Facility Navigation */}
              <div className="lg:col-span-4">
                <div className="space-y-3">
                  {facilityAreas.map((area, index) => (
                    <motion.button
                      key={area.id}
                      onClick={() => setActiveArea(index)}
                      className={`w-full text-left p-4 rounded-2xl transition-all duration-300 ${
                        activeArea === index
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-xl'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl">{area.icon}</div>
                        <div>
                          <h3 className="font-bold">{area.name}</h3>
                          <p className={`text-sm ${
                            activeArea === index ? 'text-purple-100' : 'text-gray-600'
                          }`}>
                            {area.description.substring(0, 50)}...
                          </p>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Main Facility Display */}
              <div className="lg:col-span-8">
                <motion.div
                  key={activeArea}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-3xl shadow-2xl overflow-hidden"
                >
                  {/* Facility Image */}
                  <div className="relative aspect-video bg-gradient-to-br from-purple-100 to-pink-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">{facilityAreas[activeArea].icon}</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {facilityAreas[activeArea].name}
                        </h3>
                        <p className="text-gray-600 px-8">
                          Professional facility photo would be displayed here
                        </p>
                      </div>
                    </div>
                    
                    {/* Photo Credit */}
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      📸 Real Clinic Photo
                    </div>
                  </div>

                  {/* Facility Details */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {facilityAreas[activeArea].name}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {facilityAreas[activeArea].description}
                    </p>

                    <h4 className="font-bold text-gray-900 mb-4">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {facilityAreas[activeArea].features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        )}

        {/* Team View */}
        {viewMode === 'team' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-xl overflow-hidden"
                >
                  {/* Doctor Photo */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-purple-100 to-pink-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-3xl">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">Professional photo would be here</div>
                      </div>
                    </div>
                  </div>

                  {/* Doctor Details */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <div className="text-purple-600 font-semibold mb-1">{member.role}</div>
                    <div className="text-gray-600 text-sm mb-4">{member.experience} • {member.specialization}</div>

                    {/* Quote */}
                    <div className="bg-purple-50 rounded-2xl p-4 mb-6">
                      <FiHeart className="w-5 h-5 text-purple-500 mb-2" />
                      <p className="text-gray-700 italic leading-relaxed">"{member.quote}"</p>
                    </div>

                    {/* Certifications */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Certifications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.certifications.map((cert, certIndex) => (
                          <span
                            key={certIndex}
                            className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Virtual Tour CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to See More?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Schedule a personal tour of our facilities and meet our team in person. 
              See where your child's transformation will take place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 font-bold px-8 py-4 rounded-2xl hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 shadow-xl">
                Schedule Facility Tour
              </button>
              <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/10 transition-all duration-300">
                Virtual 360° Tour
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
