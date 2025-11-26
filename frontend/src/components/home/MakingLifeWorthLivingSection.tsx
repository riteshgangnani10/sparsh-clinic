import { motion } from 'framer-motion';
import { FiHeart, FiTarget, FiUsers, FiTrendingUp, FiSmile, FiAward } from 'react-icons/fi';

const impactAreas = [
  {
    icon: <FiHeart className="w-8 h-8" />,
    title: "Compassionate Excellence",
    description: "Every interaction is guided by genuine care, professional expertise, and unwavering commitment to your child's success.",
    color: "from-rose-400 to-pink-500",
    story: "We believe that healing begins with compassion. Every child receives individualized attention in a nurturing environment.",
    metric: "100% Personalized"
  },
  {
    icon: <FiTarget className="w-8 h-8" />,
    title: "Milestone Achievements",
    description: "We celebrate every victory, from first steps to independent communication, recognizing that progress comes in many forms.",
    color: "from-amber-400 to-orange-500",
    story: "Each milestone reached is a testament to your child's determination and our collaborative approach to therapy.",
    metric: "5000+ Milestones"
  },
  {
    icon: <FiUsers className="w-8 h-8" />,
    title: "Family Partnership",
    description: "We work closely with families, providing education, support, and tools to continue progress at home.",
    color: "from-blue-400 to-indigo-500",
    story: "Parents become our partners in therapy, equipped with knowledge and confidence to support their child's journey.",
    metric: "Families Empowered"
  },
  {
    icon: <FiTrendingUp className="w-8 h-8" />,
    title: "Proven Outcomes",
    description: "Our evidence-based approach consistently delivers measurable improvements in function and quality of life.",
    color: "from-emerald-400 to-teal-500",
    story: "Data-driven therapy plans ensure that every session contributes meaningfully to your child's development.",
    metric: "95% Success Rate"
  },
  {
    icon: <FiSmile className="w-8 h-8" />,
    title: "Joyful Learning",
    description: "Therapy should be engaging and fun. We create positive experiences that children look forward to.",
    color: "from-violet-400 to-purple-500",
    story: "When children enjoy their therapy sessions, they're more motivated to participate and achieve their goals.",
    metric: "Happy Children"
  },
  {
    icon: <FiAward className="w-8 h-8" />,
    title: "Professional Excellence",
    description: "Our team maintains the highest standards through continuous education and evidence-based practice.",
    color: "from-cyan-400 to-blue-500",
    story: "NDTA and USC certifications ensure that your child receives the most advanced and effective treatments available.",
    metric: "Expert Certified"
  }
];

const impactNumbers = [
  { number: "5000+", label: "Children Served", description: "Families who have found hope and progress with us" },
  { number: "18+", label: "Years of Excellence", description: "Dedicated to pediatric rehabilitation since 2005" },
  { number: "95%", label: "Positive Outcomes", description: "Families report significant improvement in their child's abilities" },
  { number: "100%", label: "Personalized Care", description: "Every treatment plan is uniquely designed for each child" }
];

export default function MakingLifeWorthLivingSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <defs>
            <pattern id="impact-pattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
              <circle cx="12.5" cy="12.5" r="1.5" fill="#3b82f6" />
              <circle cx="6" cy="19" r="1" fill="#06b6d4" />
              <circle cx="19" cy="6" r="1" fill="#8b5cf6" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#impact-pattern)" />
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
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-violet-100 px-6 py-3 rounded-full text-blue-800 font-semibold mb-8">
            <FiHeart className="w-5 h-5 mr-2 text-blue-600" />
            Our Impact & Approach
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8">
            Transforming Lives Through
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-violet-600">
              {" "}Expert Care
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            At Sparsh Clinic, we combine clinical excellence with heartfelt compassion. 
            Our comprehensive approach addresses not just the condition, but the whole child and family, 
            creating lasting positive change that extends far beyond our clinic walls.
          </p>
        </motion.div>

        {/* Impact Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {impactAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100"
            >
              {/* Card Header */}
              <div className={`h-1 bg-gradient-to-r ${area.color}`}></div>
              
              <div className="p-8">
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-r ${area.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {area.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-4">{area.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{area.description}</p>
                
                {/* Story */}
                <div className="bg-slate-50 rounded-xl p-4 mb-4">
                  <p className="text-sm text-slate-700 leading-relaxed italic">"{area.story}"</p>
                </div>

                {/* Metric Badge */}
                <div className={`inline-flex items-center bg-gradient-to-r ${area.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                  {area.metric}
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
          className="bg-gradient-to-r from-slate-900 via-blue-900 to-violet-900 rounded-3xl p-12 text-white mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">Our Track Record Speaks</h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              These numbers represent real families, real progress, and real hope. 
              Each statistic tells a story of transformation and achievement.
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
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {item.number}
                </div>
                <div className="text-lg font-semibold text-slate-200 mb-2">{item.label}</div>
                <div className="text-sm text-slate-400 leading-relaxed">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-white rounded-3xl shadow-lg p-12"
        >
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full flex items-center justify-center">
              <FiHeart className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
              Our Commitment to Excellence
            </h3>
            
            <blockquote className="text-xl lg:text-2xl text-slate-700 leading-relaxed italic mb-8">
              "We believe that every child deserves the opportunity to reach their full potential. 
              Through evidence-based practice, compassionate care, and unwavering dedication, 
              we help families navigate their journey with confidence and hope."
            </blockquote>
            
            <div className="flex items-center justify-center space-x-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-lg">TP</span>
                </div>
                <div className="font-semibold text-slate-900">Dr. Tejas Patel</div>
                <div className="text-sm text-slate-600">Lead Physiotherapist</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-lg">MP</span>
                </div>
                <div className="font-semibold text-slate-900">Dr. Mona Patel</div>
                <div className="text-sm text-slate-600">Occupational Therapist</div>
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
            Ready to Begin Your Child's Journey?
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards unlocking your child's potential. 
            Schedule a consultation and discover how we can help your family thrive.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold px-8 py-4 rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-center space-x-2">
                <FiHeart className="w-5 h-5" />
                <span>Schedule Consultation</span>
              </div>
            </button>
            
            <button className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-bold px-8 py-4 rounded-xl transition-all duration-300">
              Learn About Our Services
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}