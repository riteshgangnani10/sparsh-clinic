import { motion } from 'framer-motion';
import { FiFileText, FiUser, FiMail, FiCreditCard } from 'react-icons/fi';

const processSteps = [
  {
    step: '1',
    title: 'Initial Assessment',
    description: 'If you\'re new to Sparsh Clinic, your first step is completing our comprehensive assessment forms. This is essential because it helps our team create the best therapy program for your child. Our therapists will review your child\'s medical history, current needs, and family goals.',
    icon: <FiFileText className="w-8 h-8" />,
    action: 'Complete Assessment Forms'
  },
  {
    step: '2',
    title: 'Personalized Treatment Plan',
    description: 'After you submit your paperwork, our certified therapists will review your assessment and determine the most effective treatment approach. They will decide what type of therapy and how many sessions should be included in your individualized plan.',
    icon: <FiUser className="w-8 h-8" />,
    action: 'Receive Treatment Recommendations'
  },
  {
    step: '3',
    title: 'Schedule Your Sessions',
    description: 'Our team will keep you updated on available appointment slots and therapy schedules. We work with your family\'s schedule to ensure consistent, effective treatment. Your spot is confirmed once you complete the scheduling process.',
    icon: <FiMail className="w-8 h-8" />,
    action: 'Book Your Sessions'
  },
  {
    step: '4',
    title: 'Begin Your Journey',
    description: 'Once your treatment plan is confirmed and scheduled, your child will begin their personalized therapy journey. Our team provides ongoing support and progress monitoring to ensure optimal outcomes for your child\'s development.',
    icon: <FiCreditCard className="w-8 h-8" />,
    action: 'Start Treatment'
  }
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From determining your individualized program to starting treatment, here's a step-by-step guide to begin your child's developmental journey.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              className="mb-16 last:mb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Step Number */}
                <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4">
                    {step.step}
                  </div>
                  <div className="text-sm text-gray-500 font-medium text-center lg:text-left">
                    STEP {step.step}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-8">
                  <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                      {step.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {step.description}
                    </p>

                    {/* Action Button */}
                    <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors">
                      {step.action}
                    </button>
                  </div>
                </div>

                {/* Connector Line (except for last item) */}
                {index < processSteps.length - 1 && (
                  <div className="lg:col-span-2 hidden lg:block">
                    <div className="w-px h-24 bg-gray-200 mx-auto mt-8"></div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20 bg-blue-50 rounded-3xl p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Child's Journey?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards your child's developmental success with our comprehensive assessment.
          </p>
          <button className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-blue-700 transition-colors shadow-lg">
            Begin Assessment Process
          </button>
        </motion.div>
      </div>
    </section>
  );
}
