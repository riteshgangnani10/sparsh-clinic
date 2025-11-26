import { motion } from 'framer-motion';
import { FiCalendar, FiUsers, FiHeart, FiAward } from 'react-icons/fi';

interface StatsSectionProps {
  settings?: any;
}

export default function StatsSection({ settings }: StatsSectionProps) {
  const defaultStats = [
    { label: 'Years of Experience', value: '18+', icon: FiCalendar },
    { label: 'Children Helped', value: '5000+', icon: FiUsers },
    { label: 'Therapy Services', value: '15+', icon: FiHeart },
    { label: 'Success Rate', value: '95%', icon: FiAward },
  ];

  const stats = settings?.homepage?.statistics || defaultStats;

  const getIcon = (iconName: string) => {
    const icons: any = {
      calendar: FiCalendar,
      users: FiUsers,
      heart: FiHeart,
      trophy: FiAward,
    };
    return icons[iconName?.toLowerCase()] || FiHeart;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat: any, index: number) => {
            const Icon = typeof stat.icon === 'string' ? getIcon(stat.icon) : stat.icon;
            
            return (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl mb-4">
                  <Icon className="text-primary-600" size={28} />
                </div>
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

