import { motion } from 'framer-motion';
import { FiHeart, FiEye, FiCompass, FiShield, FiSun, FiUsers } from 'react-icons/fi';

const coreValues = [
  {
    icon: <FiHeart className="w-7 h-7" />,
    title: "Compassionate Excellence",
    description: "Clinical expertise delivered with genuine care and understanding",
    philosophy: "We believe that the best outcomes emerge when advanced clinical skills are combined with heartfelt compassion and respect for each family's unique journey.",
    examples: [
      "Active listening to understand family concerns",
      "Celebrating progress at every child's pace",
      "Creating a welcoming, judgment-free environment"
    ]
  },
  {
    icon: <FiEye className="w-7 h-7" />,
    title: "Strength-Based Approach",
    description: "We identify and build upon each child's unique abilities and interests",
    philosophy: "Every child has inherent strengths and capabilities. Our role is to discover these gifts and use them as the foundation for growth and development.",
    examples: [
      "Comprehensive strength assessments",
      "Goal setting based on child's interests",
      "Celebrating individual achievements"
    ]
  },
  {
    icon: <FiCompass className="w-7 h-7" />,
    title: "Evidence-Informed Practice",
    description: "Treatment decisions guided by research, experience, and family values",
    philosophy: "We integrate the latest scientific evidence with our clinical expertise and your family's preferences to create the most effective treatment approach.",
    examples: [
      "NDTA and USC certified techniques",
      "Ongoing professional development",
      "Outcome measurement and tracking"
    ]
  },
  {
    icon: <FiShield className="w-7 h-7" />,
    title: "Family-Centered Partnership",
    description: "Families are essential partners in the therapeutic process",
    philosophy: "Parents and caregivers know their children best. We collaborate with families to ensure therapy goals align with daily life and family priorities.",
    examples: [
      "Collaborative goal setting",
      "Parent education and training",
      "Home program development"
    ]
  },
  {
    icon: <FiSun className="w-7 h-7" />,
    title: "Engaging Experiences",
    description: "Learning happens best through play, exploration, and positive interactions",
    philosophy: "Children are naturally motivated to learn through play. We create therapeutic experiences that are engaging, meaningful, and enjoyable.",
    examples: [
      "Play-based therapy approaches",
      "Child-led activity choices",
      "Positive reinforcement strategies"
    ]
  },
  {
    icon: <FiUsers className="w-7 h-7" />,
    title: "Community Connection",
    description: "Building supportive networks for children and families",
    philosophy: "No family should navigate this journey alone. We foster connections between families and create a community of mutual support and understanding.",
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
    <section className="py-20 bg-white relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-2">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <defs>
            <pattern id="values-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#1e40af" />
              <circle cx="10" cy="30" r="0.5" fill="#1e40af" />
              <circle cx="30" cy="10" r="0.5" fill="#1e40af" />
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-blue-50 px-6 py-3 rounded-full border border-blue-100 font-medium mb-8">
            <FiCompass className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-blue-800">Our Values & Approach</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Principles That
            <span className="text-blue-600"> Guide Our Care</span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our approach to pediatric therapy is built on fundamental principles that ensure every child 
            receives not just excellent clinical care, but also the respect, understanding, and support 
            they deserve on their unique developmental journey.
          </p>
        </motion.div>

        {/* Core Values Grid - Fixed Alignment */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 h-full flex flex-col"
            >
              {/* Value Header - Consistent Height */}
              <div className="p-6 flex-1">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {value.icon}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-4">{value.description}</p>
                
                {/* Philosophy */}
                <div className="bg-slate-50 rounded-lg p-3 mb-4">
                  <h4 className="font-semibold text-slate-900 mb-2 text-xs">Our Approach:</h4>
                  <p className="text-xs text-slate-700 leading-relaxed italic">"{value.philosophy}"</p>
                </div>
              </div>

              {/* Examples - Consistent Position */}
              <div className="p-6 pt-0">
                <h4 className="font-semibold text-slate-900 mb-3 text-xs">In Practice:</h4>
                <ul className="space-y-1">
                  {value.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-xs text-slate-700">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guiding Principles - Professional Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-900 rounded-2xl p-10 text-white mb-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Our Guiding Principles</h3>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
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
                className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-white">{index + 1}</span>
                </div>
                
                <h4 className="text-lg font-bold mb-3">{principle.title}</h4>
                <p className="text-slate-300 leading-relaxed mb-4 text-sm">{principle.description}</p>
                
                <blockquote className="text-xs italic text-blue-200 border-l-2 border-blue-400 pl-3">
                  "{principle.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Commitment Statement - Clean Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-blue-50 rounded-2xl p-10 border border-blue-100"
        >
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-6 bg-blue-600 rounded-full flex items-center justify-center">
              <FiHeart className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
              Our Promise to Your Family
            </h3>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              When you choose Sparsh Clinic, you're not just selecting a therapy provider – 
              you're joining a community that believes in your child's potential and is committed 
              to supporting your family every step of the way. These values aren't just ideals; 
              they're the foundation of every interaction, every treatment session, and every milestone celebration.
            </p>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Experience the Difference</h4>
              <p className="text-base text-slate-700 leading-relaxed mb-6">
                "Our values come to life in every moment we spend with your child. 
                From the warmth of our welcome to the expertise of our care, 
                you'll feel the difference that values-driven practice makes."
              </p>
              
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-sm">TP</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-900">Dr. Tejas Patel</div>
                  <div className="text-xs text-slate-600">Founder & Lead Therapist</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-sm">MP</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-900">Dr. Mona Patel</div>
                  <div className="text-xs text-slate-600">Co-Founder & OT Specialist</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action - Professional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-12"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            See Our Values in Action
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Experience firsthand how our values translate into exceptional care. 
            Schedule a consultation and discover the Sparsh difference.
          </p>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300">
            <div className="flex items-center justify-center space-x-2">
              <FiCompass className="w-4 h-4" />
              <span>Experience Our Approach</span>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}