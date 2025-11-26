import { motion } from 'framer-motion';
import { FiHeart, FiEye, FiCompass, FiShield, FiSun, FiUsers } from 'react-icons/fi';

const coreValues = [
  {
    icon: <FiHeart className="w-8 h-8" />,
    title: "Compassion First",
    description: "Every interaction is guided by genuine care and understanding",
    philosophy: "We believe that healing begins with compassion. Every child and family who enters our doors is met with unconditional love and acceptance.",
    color: "from-red-400 to-pink-500",
    examples: [
      "Listening to parents' concerns with empathy",
      "Celebrating every small victory",
      "Creating a judgment-free environment"
    ]
  },
  {
    icon: <FiEye className="w-8 h-8" />,
    title: "See Potential, Not Limitations",
    description: "We focus on what children CAN do, not what they can't",
    philosophy: "Every child has unique gifts waiting to be discovered. Our role is to uncover these strengths and build upon them.",
    color: "from-blue-400 to-indigo-500",
    examples: [
      "Strength-based assessment approach",
      "Individualized goal setting",
      "Celebrating unique abilities"
    ]
  },
  {
    icon: <FiCompass className="w-8 h-8" />,
    title: "Evidence-Based Excellence",
    description: "Our methods are grounded in research and proven results",
    philosophy: "We combine the latest scientific research with 18+ years of clinical experience to provide the most effective treatments.",
    color: "from-green-400 to-teal-500",
    examples: [
      "NDTA certified techniques",
      "Continuous professional development",
      "Outcome-measured therapy"
    ]
  },
  {
    icon: <FiShield className="w-8 h-8" />,
    title: "Family-Centered Care",
    description: "We treat the whole family, not just the child",
    philosophy: "Families are the most important part of a child's support system. We empower parents and siblings to be active participants in the healing journey.",
    color: "from-purple-400 to-pink-500",
    examples: [
      "Parent education and training",
      "Sibling support programs",
      "Home exercise programs"
    ]
  },
  {
    icon: <FiSun className="w-8 h-8" />,
    title: "Joy in Every Session",
    description: "Therapy should be fun, engaging, and filled with laughter",
    philosophy: "Children learn best when they're happy. We make every therapy session an opportunity for joy, play, and discovery.",
    color: "from-yellow-400 to-orange-500",
    examples: [
      "Play-based therapy approaches",
      "Child-friendly environment",
      "Celebrating achievements"
    ]
  },
  {
    icon: <FiUsers className="w-8 h-8" />,
    title: "Community & Connection",
    description: "Building a supportive community for all families",
    philosophy: "No family should feel alone in their journey. We create connections between families and build a community of support and understanding.",
    color: "from-indigo-400 to-purple-500",
    examples: [
      "Family support groups",
      "Peer mentorship programs",
      "Community events and workshops"
    ]
  }
];

const philosophyPillars = [
  {
    title: "Every Child is Unique",
    description: "We recognize that each child has their own timeline, strengths, and way of learning. Our approach is always individualized.",
    quote: "There is no such thing as a 'one-size-fits-all' approach to therapy. Every child deserves a plan as unique as they are."
  },
  {
    title: "Small Steps, Big Dreams",
    description: "We celebrate every milestone, no matter how small, because we know that small steps lead to big achievements.",
    quote: "A child's first independent step is as significant as an athlete's world record. Every victory deserves celebration."
  },
  {
    title: "Hope is Powerful Medicine",
    description: "We believe that hope, combined with expert care, can overcome the greatest challenges.",
    quote: "When families lose hope, we become their lighthouse, guiding them back to possibility and potential."
  }
];

export default function ValuesPhilosophySection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <defs>
            <pattern id="values-pattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
              <circle cx="12.5" cy="12.5" r="2" fill="#20B2AA" />
              <circle cx="6" cy="6" r="1" fill="#FF6347" />
              <circle cx="19" cy="19" r="1" fill="#9ACD32" />
              <path d="M5 20 L20 5" stroke="#6A5ACD" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#values-pattern)" />
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
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-teal-100 px-6 py-3 rounded-full text-purple-800 font-semibold mb-8">
            <FiCompass className="w-5 h-5 mr-2 text-purple-600" />
            Our Values & Philosophy
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            What Guides
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-teal-500 to-orange-500">
              {" "}Everything We Do
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our values aren't just words on a wall – they're the foundation of every decision we make, 
            every interaction we have, and every treatment plan we create. They guide us in our mission 
            to make every life worth living.
          </p>
        </motion.div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Value Header */}
              <div className="p-8 pb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{value.description}</p>
              </div>

              {/* Philosophy */}
              <div className="px-8 pb-6">
                <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Our Philosophy:</h4>
                  <p className="text-sm text-gray-700 italic leading-relaxed">"{value.philosophy}"</p>
                </div>

                {/* Examples */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">In Practice:</h4>
                  <ul className="space-y-2">
                    {value.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${value.color} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-sm text-gray-700">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-white mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">The Pillars of Our Philosophy</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These fundamental beliefs shape every aspect of our care and guide us in creating 
              meaningful, lasting change in the lives of children and families.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {philosophyPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-teal-400 to-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                
                <h4 className="text-xl font-bold mb-4">{pillar.title}</h4>
                <p className="text-gray-300 leading-relaxed mb-6">{pillar.description}</p>
                
                <blockquote className="text-sm italic text-teal-200 border-l-2 border-teal-400 pl-4">
                  "{pillar.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Living Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-br from-teal-50 to-orange-50 rounded-3xl p-12"
        >
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full flex items-center justify-center">
              <FiHeart className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Living Our Values Every Day
            </h3>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              These aren't just ideals we aspire to – they're the reality of how we operate. 
              Every team member, every therapy session, and every family interaction is guided by these principles. 
              When you choose Sparsh Clinic, you're choosing a team that truly lives by the values of 
              compassion, excellence, and hope.
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to You</h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                "We promise that these values will be evident in every moment of your journey with us. 
                From your first phone call to your child's graduation from therapy, 
                you'll experience the difference that values-driven care makes."
              </p>
              
              <div className="flex items-center justify-center space-x-4 mt-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mb-2">
                    <span className="text-white font-bold">TP</span>
                  </div>
                  <div className="text-sm font-semibold text-gray-900">Dr. Tejas</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-2">
                    <span className="text-white font-bold">MP</span>
                  </div>
                  <div className="text-sm font-semibold text-gray-900">Dr. Mona</div>
                </div>
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
            Experience Values-Driven Care
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            See how our values translate into exceptional care for your child. 
            Schedule a consultation and experience the Sparsh difference.
          </p>
          
          <button className="bg-gradient-to-r from-purple-500 via-teal-500 to-orange-500 text-white font-bold px-8 py-4 rounded-2xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-center space-x-2">
              <FiCompass className="w-5 h-5" />
              <span>Discover Our Approach</span>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
