import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import AboutExperienceSection from '../components/home/AboutExperienceSection';
import ServicesSection from '../components/home/ServicesSection';
import ProcessSection from '../components/home/ProcessSection';
import ResearchSection from '../components/home/ResearchSection';
import DoctorProfilesSection from '../components/home/DoctorProfilesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
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
      {/* Hero Section - NAPA Style Impact */}
      <HeroSection settings={settings} />
      
      {/* About Experience - Build Trust */}
      <AboutExperienceSection />
      
      {/* Services/Programs - Core Offerings */}
      <ServicesSection />
      
      {/* Our Process - Clear Steps */}
      <ProcessSection />
      
      {/* Research Section - Credibility */}
      <ResearchSection />
      
      {/* Doctor Profiles - Expertise */}
      <DoctorProfilesSection />
      
      {/* Testimonials - Social Proof */}
      <TestimonialsSection />
    </motion.div>
  );
}