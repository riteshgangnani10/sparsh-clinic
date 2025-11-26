import { motion } from 'framer-motion';
import { FiHeart, FiEye, FiCompass, FiShield, FiSun, FiUsers } from 'react-icons/fi';

const coreValues = [
  {
    icon: <FiHeart className="w-8 h-8" />,
    title: "Compassionate Excellence",
    description: "Clinical expertise delivered with genuine care and understanding",
    philosophy: "We believe that the best outcomes emerge when advanced clinical skills are combined with heartfelt compassion and respect for each family's unique journey.",
    color: "from-rose-400 to-pink-500",
    examples: [
      "Active listening to understand family concerns",
      "Celebrating progress at every child's pace",
      "Creating a welcoming, judgment-free environment"
    ]
  },
  {
    icon: <FiEye className="w-8 h-8" />,
    title: "Strength-Based Approach",
    description: "We identify and build upon each child's unique abilities and interests",
    philosophy: "Every child has inherent strengths and capabilities. Our role is to discover these gifts and use them as the foundation for growth and development.",
    color: "from-blue-400 to-indigo-500",
    examples: [
      "Comprehensive strength assessments",
      "Goal setting based on child's interests",
      "Celebrating individual achievements"
    ]
  },
  {
    icon: <FiCompass className="w-8 h-8" />,
    title: "Evidence-Informed Practice",
    description: "Treatment decisions guided by research, experience, and family values",
    philosophy: "We integrate the latest scientific evidence with our clinical expertise and your family's preferences to create the most effective treatment approach.",
    color: "from-emerald-400 to-teal-500",
    examples: [
      "NDTA and USC certified techniques",
      "Ongoing professional development",
      "Outcome measurement and tracking"
    ]
  },
  {
    icon: <FiShield className="w-8 h-8" />,
    title: "Family-Centered Partnership",
    description: "Families are essential partners in the therapeutic process",
    philosophy: "Parents and caregivers know their children best. We collaborate with families to ensure therapy goals align with daily life and family priorities.",
    color: "from-violet-400 to-purple-500",
    examples: [
      "Collaborative goal setting",
      "Parent education and training",
      "Home program development"
    ]
  },
  {
    icon: <FiSun className="w-8 h-8" />,
    title: "Engaging Experiences",
    description: "Learning happens best through play, exploration, and positive interactions",
    philosophy: "Children are naturally motivated to learn through play. We create therapeutic experiences that are engaging, meaningful, and enjoyable.",
    color: "from-amber-400 to-orange-500",
    examples: [
      "Play-based therapy approaches",
      "Child-led activity choices",
      "Positive reinforcement strategies"
    ]
  },
  {
    icon: <FiUsers className="w-8 h-8" />,
    title: "Community Connection",
    description: "Building supportive networks for children and families",
    philosophy: "No family should navigate this journey alone. We foster connections between families and create a community of mutual support and understanding.",
    color: "from-cyan-400 to-blue-500",
    examples: [
      "Family support groups",
      "Peer mentorship opportunities",
      "Community resource connections"
    ]
  }
];

const guidingPrinciples = [
  {
    title: "Individualized Excellence",
    description: "Every child receives a uniquely designed treatment plan that honors their specific needs, interests, and family circumstances.",
    quote: "We don't believe in one-size-fits-all therapy. Each child deserves an approach as unique as their fingerprint."
  },
  {
    title: "Progress Over Perfection",
    description: "We celebrate meaningful progress in all its forms, recognizing that every step forward is significant and worthy of recognition.",
    quote: "Small steps consistently taken lead to extraordinary journeys. We honor every milestone along the way."
  },
  {
    title: "Hope Through Action",
    description: "We maintain realistic optimism while taking concrete steps toward achievable goals, helping families see possibility in every situation.",
    quote: "Hope without action is wishful thinking. Action without hope is drudgery. Together, they create transformation."
  }
];

export default function ValuesPhilosophySection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-3">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <defs>
            <pattern id="values-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="1.5" fill="#3b82f6" />
              <circle cx="8" cy="8" r="0.8" fill="#06b6d4" />
              <circle cx="22" cy="22" r="0.8" fill="#8b5cf6" />
              <path d="M5 25 L25 5" stroke="#10b981" strokeWidth="0.3" opacity="0.5" />
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
          <div className="inline-flex items-center bg-gradient-to-r from-violet-100 to-cyan-100 px-6 py-3 rounded-full text-violet-800 font-semibold mb-8">
            <FiCompass className="w-5 h-5 mr-2 text-violet-600" />
            Our Values & Approach
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8">
            Principles That
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600">
              {" "}Guide Our Care
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Our approach to pediatric therapy is built on fundamental principles that ensure every child 
            receives not just excellent clinical care, but also the respect, understanding, and support 
            they deserve on their unique developmental journey.
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
              className="group bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden border border-slate-100"
            >
              {/* Value Header */}
              <div className="p-8 pb-6">
                <div className={`w-14 h-14 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{value.description}</p>
              </div>

              {/* Philosophy */}
              <div className="px-8 pb-6">
                <div className="bg-slate-50 rounded-xl p-4 mb-6">
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm">Our Approach:</h4>
                  <p className="text-sm text-slate-700 leading-relaxed italic">"{value.philosophy}"</p>
                </div>

                {/* Examples */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3 text-sm">In Practice:</h4>
                  <ul className="space-y-2">
                    {value.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${value.color} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-sm text-slate-700">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guiding Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-slate-900 via-blue-900 to-violet-900 rounded-3xl p-12 text-white mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">Our Guiding Principles</h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              These core beliefs shape every aspect of our practice and ensure that our care 
              remains focused on what matters most: your child's success and your family's wellbeing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {guidingPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                
                <h4 className="text-xl font-bold mb-4">{principle.title}</h4>
                <p className="text-slate-300 leading-relaxed mb-6">{principle.description}</p>
                
                <blockquote className="text-sm italic text-cyan-200 border-l-2 border-cyan-400 pl-4">
                  "{principle.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Commitment Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-br from-blue-50 to-violet-50 rounded-3xl p-12"
        >
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full flex items-center justify-center">
              <FiHeart className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
              Our Promise to Your Family
            </h3>
            
            <p className="text-xl text-slate-700 leading-relaxed mb-8">
              When you choose Sparsh Clinic, you're not just selecting a therapy provider – 
              you're joining a community that believes in your child's potential and is committed 
              to supporting your family every step of the way. These values aren't just ideals; 
              they're the foundation of every interaction, every treatment session, and every milestone celebration.
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Experience the Difference</h4>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                "Our values come to life in every moment we spend with your child. 
                From the warmth of our welcome to the expertise of our care, 
                you'll feel the difference that values-driven practice makes."
              </p>
              
              <div className="flex items-center justify-center space-x-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-sm">TP</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-900">Dr. Tejas Patel</div>
                  <div className="text-xs text-slate-600">Founder & Lead Therapist</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-sm">MP</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-900">Dr. Mona Patel</div>
                  <div className="text-xs text-slate-600">Co-Founder & OT Specialist</div>
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
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            See Our Values in Action
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Experience firsthand how our values translate into exceptional care. 
            Schedule a consultation and discover the Sparsh difference.
          </p>
          
          <button className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-center space-x-2">
              <FiCompass className="w-5 h-5" />
              <span>Experience Our Approach</span>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}