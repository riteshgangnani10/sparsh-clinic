import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import DoctorProfilesSection from '../components/home/DoctorProfilesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import AboutSection from '../components/home/AboutSection';
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
      className="overflow-hidden"
    >
      {/* Hero Section - First impression */}
      <HeroSection settings={settings} />
      
      {/* Services Section - What we offer */}
      <ServicesSection />
      
      {/* Doctor Profiles - Build trust with expertise */}
      <DoctorProfilesSection />
      
      {/* About Section - Our story and mission */}
      <AboutSection />
      
      {/* Stats Section - Credibility through numbers */}
      <StatsSection settings={settings} />
      
      {/* Testimonials - Social proof and success stories */}
      <TestimonialsSection />
      
      {/* CTA Section - Convert visitors to patients */}
      <CTASection />
    </motion.div>
  );
}