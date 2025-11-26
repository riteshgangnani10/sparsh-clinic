import { motion } from 'framer-motion';
import { FiHeart, FiStar, FiUsers, FiTrendingUp, FiSmile, FiSun } from 'react-icons/fi';

const missionStories = [
  {
    icon: <FiHeart className="w-8 h-8" />,
    title: "Restoring Hope",
    description: "When families come to us feeling overwhelmed, we restore hope by showing them what's possible.",
    color: "from-red-400 to-pink-500",
    story: "Every parent who walks through our doors carries hope mixed with worry. We transform that worry into confidence.",
    impact: "Hope Restored"
  },
  {
    icon: <FiStar className="w-8 h-8" />,
    title: "Celebrating Milestones",
    description: "Every small achievement is a giant leap forward. We celebrate each victory, no matter how small.",
    color: "from-yellow-400 to-orange-500",
    story: "From first steps to first words, we celebrate every milestone as if it were our own child's achievement.",
    impact: "Milestones Achieved"
  },
  {
    icon: <FiUsers className="w-8 h-8" />,
    title: "Building Community",
    description: "We create a supportive community where families connect, share experiences, and grow together.",
    color: "from-blue-400 to-indigo-500",
    story: "Our clinic becomes a second home where families find not just therapy, but friendship and understanding.",
    impact: "Families Connected"
  },
  {
    icon: <FiTrendingUp className="w-8 h-8" />,
    title: "Unlocking Potential",
    description: "We see beyond limitations to discover the unique potential within every child.",
    color: "from-green-400 to-teal-500",
    story: "What others see as challenges, we see as opportunities to unlock hidden strengths and abilities.",
    impact: "Potential Unlocked"
  },
  {
    icon: <FiSmile className="w-8 h-8" />,
    title: "Creating Joy",
    description: "Therapy should be joyful. We make every session an opportunity for laughter and happiness.",
    color: "from-purple-400 to-pink-500",
    story: "The sound of children's laughter during therapy sessions is the music that drives our mission.",
    impact: "Joy Created"
  },
  {
    icon: <FiSun className="w-8 h-8" />,
    title: "Brightening Futures",
    description: "Every child we help goes on to brighten the world with their unique gifts and abilities.",
    color: "from-amber-400 to-yellow-500",
    story: "We don't just change lives today - we create brighter tomorrows for children and their families.",
    impact: "Futures Brightened"
  }
];

const impactNumbers = [
  { number: "5000+", label: "Lives Transformed", description: "Children who now live fuller, happier lives" },
  { number: "18+", label: "Years of Dedication", description: "Committed to making life worth living" },
  { number: "95%", label: "Success Rate", description: "Families who see significant improvement" },
  { number: "100%", label: "Love & Care", description: "Every child treated with unconditional love" }
];

export default function MakingLifeWorthLivingSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-teal-50 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <defs>
            <pattern id="heart-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M10 15 C10 10, 15 5, 20 5 C25 5, 30 10, 30 15 C30 25, 20 35, 20 35 C20 35, 10 25, 10 15 Z" 
                    fill="#20B2AA" opacity="0.3" transform="scale(0.3) translate(10,10)"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#heart-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-teal-100 to-orange-100 px-6 py-3 rounded-full text-teal-800 font-semibold mb-8">
            <FiHeart className="w-5 h-5 mr-2 text-teal-600" />
            Our Mission in Action
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Making Life
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-blue-500 to-orange-500">
              {" "}Worth Living!
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            This isn't just our tagline – it's our promise, our purpose, and our passion. 
            Every day, we witness the transformation of lives, the restoration of hope, 
            and the creation of possibilities that seemed impossible.
          </p>
        </motion.div>

        {/* Mission Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {missionStories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Card Header */}
              <div className={`h-2 bg-gradient-to-r ${story.color}`}></div>
              
              <div className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${story.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {story.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{story.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{story.description}</p>
                
                {/* Story Quote */}
                <div className="bg-gray-50 rounded-2xl p-4 mb-4">
                  <p className="text-sm text-gray-700 italic leading-relaxed">"{story.story}"</p>
                </div>

                {/* Impact Badge */}
                <div className={`inline-flex items-center bg-gradient-to-r ${story.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                  <FiStar className="w-4 h-4 mr-2" />
                  {story.impact}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-teal-600 via-blue-600 to-orange-600 rounded-3xl p-12 text-white mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">Our Impact Speaks Volumes</h3>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Numbers tell a story, but behind every number is a life transformed, 
              a family reunited with hope, and a future made brighter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactNumbers.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">{item.number}</div>
                <div className="text-lg font-semibold text-teal-100 mb-2">{item.label}</div>
                <div className="text-sm text-white/80 leading-relaxed">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-white rounded-3xl shadow-xl p-12"
        >
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full flex items-center justify-center">
              <FiHeart className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Our Promise to Every Family
            </h3>
            
            <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed italic mb-8">
              "We promise to see beyond the diagnosis to the child within. 
              We promise to celebrate every small victory as if it were our own. 
              We promise to never give up on any child's potential. 
              Most importantly, we promise to make every life we touch worth living."
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">TP</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">MP</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">Dr. Tejas & Dr. Mona Patel</div>
                <div className="text-gray-600">Founders, Sparsh Clinic</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Make Your Child's Life Worth Living?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Every journey begins with hope and a single step. 
            Let us walk alongside you as we unlock your child's potential together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-teal-500 via-blue-500 to-orange-500 text-white font-bold px-8 py-4 rounded-2xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-center space-x-2">
                <FiHeart className="w-5 h-5" />
                <span>Start Your Journey Today</span>
              </div>
            </button>
            
            <button className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 font-bold px-8 py-4 rounded-2xl transition-all duration-300">
              Learn More About Our Mission
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
