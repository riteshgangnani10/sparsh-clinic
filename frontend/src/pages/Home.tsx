import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import AboutSection from '../components/home/AboutSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import StatsSection from '../components/home/StatsSection';
import CTASection from '../components/home/CTASection';
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
    >
      <HeroSection settings={settings} />
      <StatsSection settings={settings} />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </motion.div>
  );
}

