import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiPlay, FiPause, FiVolume2 } from 'react-icons/fi';

const realStories = [
  {
    id: 1,
    childName: "Arjun",
    age: "6 years",
    condition: "Cerebral Palsy",
    parentName: "Priya Sharma",
    location: "Ahmedabad",
    story: "When Arjun was diagnosed with cerebral palsy, we thought his dreams of walking were over. Dr. Tejas and his team proved us wrong. Today, Arjun not only walks but runs and plays with his friends.",
    videoThumbnail: "/api/placeholder/400/300",
    videoDuration: "2:34",
    beforeImage: "/api/placeholder/200/200",
    afterImage: "/api/placeholder/200/200",
    treatmentDuration: "18 months",
    keyMilestones: ["First steps at 4 months", "Independent walking at 8 months", "Running at 12 months"]
  },
  {
    id: 2,
    childName: "Kavya",
    age: "4 years",
    condition: "Autism Spectrum Disorder",
    parentName: "Rajesh Patel",
    location: "Surat",
    story: "Kavya barely spoke when we first came to Sparsh Clinic. Through occupational therapy and speech therapy, she's now communicating beautifully and even started school.",
    videoThumbnail: "/api/placeholder/400/300",
    videoDuration: "3:12",
    beforeImage: "/api/placeholder/200/200",
    afterImage: "/api/placeholder/200/200",
    treatmentDuration: "24 months",
    keyMilestones: ["First words at 6 months", "Sentences at 12 months", "School ready at 18 months"]
  },
  {
    id: 3,
    childName: "Rohan",
    age: "8 years",
    condition: "Developmental Delay",
    parentName: "Meera Singh",
    location: "Vadodara",
    story: "Rohan was behind in all his milestones. The personalized therapy program at Sparsh helped him catch up and now he's excelling in school.",
    videoThumbnail: "/api/placeholder/400/300",
    videoDuration: "1:58",
    beforeImage: "/api/placeholder/200/200",
    afterImage: "/api/placeholder/200/200",
    treatmentDuration: "12 months",
    keyMilestones: ["Motor skills improved", "Speech clarity enhanced", "Academic performance boosted"]
  }
];

export default function RealStoriesSection() {
  const [activeStory, setActiveStory] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const currentStory = realStories[activeStory];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-teal-50">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <div className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></div>
            Real Stories, Real Progress
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Every Child Has a 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600"> Success Story</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These aren't just testimonials – they're real journeys of transformation. 
            Meet the families whose lives have been changed through our personalized therapy programs.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Story Selector - Left Side */}
            <div className="lg:col-span-4 space-y-4">
              {realStories.map((story, index) => (
                <motion.button
                  key={story.id}
                  onClick={() => {
                    setActiveStory(index);
                    setIsVideoPlaying(false);
                  }}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                    activeStory === index
                      ? 'bg-white shadow-xl border-2 border-teal-200'
                      : 'bg-white/50 hover:bg-white hover:shadow-lg border-2 border-transparent'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start space-x-4">
                    {/* Child Avatar */}
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{story.childName[0]}</span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-gray-900">{story.childName}</h3>
                        <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
                          {story.age}
                        </span>
                      </div>
                      
                      <div className="text-sm text-gray-600 mb-2">{story.condition}</div>
                      
                      <div className="text-xs text-gray-500">
                        {story.parentName} • {story.location}
                      </div>
                      
                      {activeStory === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-4 pt-4 border-t border-gray-100"
                        >
                          <div className="text-sm text-gray-600 leading-relaxed">
                            {story.story.substring(0, 120)}...
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Main Story Display - Right Side */}
            <div className="lg:col-span-8">
              <motion.div
                key={activeStory}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                
                {/* Video Section */}
                <div className="relative aspect-video bg-gradient-to-br from-teal-100 to-blue-100">
                  {!isVideoPlaying ? (
                    <>
                      {/* Video Thumbnail */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center mb-4">
                            <FiPlay className="w-10 h-10 text-teal-600 ml-1" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {currentStory.childName}'s Journey
                          </h3>
                          <p className="text-gray-600">Watch the transformation</p>
                        </div>
                      </div>
                      
                      {/* Play Button */}
                      <button
                        onClick={() => setIsVideoPlaying(true)}
                        className="absolute inset-0 group"
                      >
                        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                          {currentStory.videoDuration}
                        </div>
                      </button>
                    </>
                  ) : (
                    // Video Player Simulation
                    <div className="absolute inset-0 bg-black flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-2xl mb-4">🎥 Video Playing</div>
                        <div className="text-lg mb-2">{currentStory.childName}'s Success Story</div>
                        <div className="text-sm text-gray-300 mb-6">
                          Real therapy session and parent interview
                        </div>
                        
                        <div className="flex items-center justify-center space-x-4">
                          <button
                            onClick={() => setIsVideoPlaying(false)}
                            className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
                          >
                            <FiPause className="w-4 h-4" />
                            <span>Pause</span>
                          </button>
                          
                          <button className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                            <FiVolume2 className="w-4 h-4" />
                            <span>Volume</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Story Details */}
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    
                    {/* Left Column - Story */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {currentStory.childName}'s Transformation
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {currentStory.story}
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Treatment Duration:</span>
                          <span className="font-semibold text-teal-600">{currentStory.treatmentDuration}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Condition:</span>
                          <span className="font-semibold text-gray-900">{currentStory.condition}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Parent:</span>
                          <span className="font-semibold text-gray-900">{currentStory.parentName}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Milestones */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Key Milestones</h4>
                      
                      <div className="space-y-4">
                        {currentStory.keyMilestones.map((milestone, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                            <span className="text-gray-700">{milestone}</span>
                          </div>
                        ))}
                      </div>

                      {/* Before/After Images Placeholder */}
                      <div className="mt-8">
                        <h5 className="font-semibold text-gray-900 mb-4">Progress Photos</h5>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <div className="w-full aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-2 flex items-center justify-center">
                              <span className="text-gray-500 text-sm">Before</span>
                            </div>
                            <span className="text-xs text-gray-500">Initial Assessment</span>
                          </div>
                          <div className="text-center">
                            <div className="w-full aspect-square bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl mb-2 flex items-center justify-center">
                              <span className="text-teal-600 text-sm">After</span>
                            </div>
                            <span className="text-xs text-gray-500">Current Progress</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Child's Success Story?</h3>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              Every journey begins with a single step. Let's take that step together and unlock your child's potential.
            </p>
            <button className="bg-white text-teal-600 font-bold px-8 py-4 rounded-2xl hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 shadow-xl">
              Book Your Free Assessment Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
