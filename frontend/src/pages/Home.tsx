import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import QuickStatsSection from '../components/home/QuickStatsSection';
import QuickAboutSection from '../components/home/QuickAboutSection';
import ServicesSection from '../components/home/ServicesSection';
import { settingsAPI } from '../api';

export default function Home() {
  const { data: settings } = useQuery({
    queryKey: ['settings'],
    queryFn: async () => {
      const response = await settingsAPI.get();
      return response.data.data;
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      {/* Hero Section - Main Introduction */}
      <HeroSection settings={settings} />
      
      {/* Quick Stats - Trust Indicators */}
      <QuickStatsSection />
      
      {/* Quick About - Essential Info */}
      <QuickAboutSection />
      
      {/* Services Overview - What We Offer */}
      <ServicesSection />
    </motion.div>
  );
}