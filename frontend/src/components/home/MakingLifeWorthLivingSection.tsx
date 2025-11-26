import { motion } from 'framer-motion';
import { FiHeart, FiTarget, FiUsers, FiTrendingUp, FiSmile, FiAward } from 'react-icons/fi';

const impactAreas = [
  {
    icon: <FiHeart className="w-7 h-7" />,
    title: "Compassionate Excellence",
    description: "Every interaction is guided by genuine care, professional expertise, and unwavering commitment to your child's success.",
    story: "We believe that healing begins with compassion. Every child receives individualized attention in a nurturing environment.",
    metric: "100% Personalized"
  },
  {
    icon: <FiTarget className="w-7 h-7" />,
    title: "Milestone Achievements",
    description: "We celebrate every victory, from first steps to independent communication, recognizing that progress comes in many forms.",
    story: "Each milestone reached is a testament to your child's determination and our collaborative approach to therapy.",
    metric: "5000+ Milestones"
  },
  {
    icon: <FiUsers className="w-7 h-7" />,
    title: "Family Partnership",
    description: "We work closely with families, providing education, support, and tools to continue progress at home.",
    story: "Parents become our partners in therapy, equipped with knowledge and confidence to support their child's journey.",
    metric: "Families Empowered"
  },
  {
    icon: <FiTrendingUp className="w-7 h-7" />,
    title: "Proven Outcomes",
    description: "Our evidence-based approach consistently delivers measurable improvements in function and quality of life.",
    story: "Data-driven therapy plans ensure that every session contributes meaningfully to your child's development.",
    metric: "95% Success Rate"
  },
  {
    icon: <FiSmile className="w-7 h-7" />,
    title: "Joyful Learning",
    description: "Therapy should be engaging and fun. We create positive experiences that children look forward to.",
    story: "When children enjoy their therapy sessions, they're more motivated to participate and achieve their goals.",
    metric: "Happy Children"
  },
  {
    icon: <FiAward className="w-7 h-7" />,
    title: "Professional Excellence",
    description: "Our team maintains the highest standards through continuous education and evidence-based practice.",
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
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <defs>
            <pattern id="impact-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#1e40af" opacity="0.1" />
              <circle cx="10" cy="30" r="0.5" fill="#1e40af" opacity="0.1" />
              <circle cx="30" cy="10" r="0.5" fill="#1e40af" opacity="0.1" />
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-200 font-medium mb-8">
            <FiHeart className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-slate-700">Our Impact & Approach</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Transforming Lives Through
            <span className="text-blue-600"> Expert Care</span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            At Sparsh Clinic, we combine clinical excellence with heartfelt compassion. 
            Our comprehensive approach addresses not just the condition, but the whole child and family.
          </p>
        </motion.div>

        {/* Impact Areas Grid - Fixed Alignment */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {impactAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 h-full flex flex-col"
            >
              {/* Card Header - Consistent Height */}
              <div className="p-6 flex-1">
                {/* Icon - Professional Medical Blue */}
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {area.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 mb-3">{area.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-4">{area.description}</p>
                
                {/* Story */}
                <div className="bg-slate-50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-slate-700 leading-relaxed italic">"{area.story}"</p>
                </div>
              </div>

              {/* Metric Badge - Consistent Position */}
              <div className="p-6 pt-0">
                <div className="inline-flex items-center bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {area.metric}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Numbers - Professional Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-blue-600 rounded-2xl p-10 text-white mb-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Our Track Record</h3>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              These numbers represent real families, real progress, and real hope. 
              Each statistic tells a story of transformation and achievement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactNumbers.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center bg-white/20 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="text-3xl lg:text-4xl font-bold mb-2 text-white">
                  {item.number}
                </div>
                <div className="text-base font-semibold text-blue-100 mb-2">{item.label}</div>
                <div className="text-sm text-blue-200 leading-relaxed">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy Statement - Clean Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-white rounded-2xl shadow-sm p-10 border border-slate-100"
        >
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-6 bg-blue-600 rounded-full flex items-center justify-center">
              <FiHeart className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
              Our Commitment to Excellence
            </h3>
            
            <blockquote className="text-lg lg:text-xl text-slate-700 leading-relaxed italic mb-8">
              "We believe that every child deserves the opportunity to reach their full potential. 
              Through evidence-based practice, compassionate care, and unwavering dedication, 
              we help families navigate their journey with confidence and hope."
            </blockquote>
            
            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center justify-center">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">TP</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MP</span>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <div className="font-semibold text-slate-900">Dr. Tejas Patel & Dr. Mona Patel</div>
              <div className="text-sm text-slate-600">Founders, Sparsh Clinic</div>
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
            Ready to Begin Your Child's Journey?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Take the first step towards unlocking your child's potential. 
            Schedule a consultation and discover how we can help your family thrive.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300">
              <div className="flex items-center justify-center space-x-2">
                <FiHeart className="w-4 h-4" />
                <span>Schedule Consultation</span>
              </div>
            </button>
            
            <button className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold px-8 py-3 rounded-lg transition-colors duration-300">
              Learn About Our Services
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}