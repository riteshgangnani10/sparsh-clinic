import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiCamera, FiMapPin, FiUsers } from 'react-icons/fi';

const facilityAreas = [
  {
    id: 1,
    name: "Physiotherapy Gym",
    description: "State-of-the-art equipment designed specifically for pediatric rehabilitation",
    features: ["Parallel bars", "Balance training equipment", "Gait training tools", "Strength building apparatus"],
    icon: "🏃‍♂️"
  },
  {
    id: 2,
    name: "Occupational Therapy Room",
    description: "Sensory-rich environment for developing daily living skills",
    features: ["Sensory integration tools", "Fine motor skill stations", "ADL training setup", "Cognitive development games"],
    icon: "🎨"
  },
  {
    id: 3,
    name: "Speech Therapy Suite",
    description: "Quiet, comfortable space for communication development",
    features: ["Sound-proof rooms", "Interactive communication boards", "Voice recording equipment", "Language development tools"],
    icon: "🗣️"
  },
  {
    id: 4,
    name: "Hydrotherapy Pool",
    description: "Therapeutic water exercises for enhanced mobility",
    features: ["Temperature controlled", "Accessible entry/exit", "Underwater treadmill", "Flotation devices"],
    icon: "🏊‍♀️"
  },
  {
    id: 5,
    name: "Assessment Room",
    description: "Comprehensive evaluation space for initial assessments",
    features: ["Standardized testing tools", "Video recording setup", "Comfortable seating", "Child-friendly environment"],
    icon: "📋"
  },
  {
    id: 6,
    name: "Family Consultation Area",
    description: "Private space for family discussions and education",
    features: ["Comfortable seating", "Educational materials", "Progress tracking displays", "Privacy for sensitive discussions"],
    icon: "👨‍👩‍👧‍👦"
  }
];

export default function BehindTheScenesSection() {
  const [activeArea, setActiveArea] = useState(0);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        
        {/* Section Header - Professional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-medium mb-8">
            <FiCamera className="w-4 h-4 mr-2" />
            Our Facilities
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Professional Therapy
            <span className="text-blue-600"> Environments</span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Every space at Sparsh Clinic is thoughtfully designed to support your child's therapy goals. 
            Our modern facilities combine professional equipment with a welcoming, child-friendly atmosphere.
          </p>
        </motion.div>

        {/* Facilities View */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Facility Navigation - Professional Design */}
            <div className="lg:col-span-4">
              <div className="space-y-3">
                {facilityAreas.map((area, index) => (
                  <motion.button
                    key={area.id}
                    onClick={() => setActiveArea(index)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      activeArea === index
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white hover:bg-slate-50 text-slate-900 border border-slate-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl">{area.icon}</div>
                      <div>
                        <h3 className="font-bold text-sm">{area.name}</h3>
                        <p className={`text-xs ${
                          activeArea === index ? 'text-blue-100' : 'text-slate-600'
                        }`}>
                          {area.description.substring(0, 50)}...
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Main Facility Display - Professional */}
            <div className="lg:col-span-8">
              <motion.div
                key={activeArea}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200"
              >
                {/* Facility Image */}
                <div className="relative aspect-video bg-gradient-to-br from-blue-50 to-slate-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">{facilityAreas[activeArea].icon}</div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {facilityAreas[activeArea].name}
                      </h3>
                      <p className="text-slate-600 px-8">
                        Professional facility photo would be displayed here
                      </p>
                    </div>
                  </div>
                  
                  {/* Photo Credit */}
                  <div className="absolute bottom-4 right-4 bg-slate-800/80 text-white px-3 py-1 rounded-full text-sm">
                    📸 Real Clinic Photo
                  </div>
                </div>

                {/* Facility Details */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {facilityAreas[activeArea].name}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {facilityAreas[activeArea].description}
                  </p>

                  <h4 className="font-bold text-slate-900 mb-4">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {facilityAreas[activeArea].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Professional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-slate-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to See More?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Schedule a personal tour of our facilities and meet our team in person. 
              See where your child's transformation will take place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300">
                Schedule Facility Tour
              </button>
              <button className="border-2 border-slate-400 text-slate-300 hover:bg-slate-800 font-semibold px-8 py-3 rounded-lg transition-colors duration-300">
                Virtual Tour
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}