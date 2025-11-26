import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import MakingLifeWorthLivingSection from '../components/home/MakingLifeWorthLivingSection';
import ValuesPhilosophySection from '../components/home/ValuesPhilosophySection';
import RealStoriesSection from '../components/home/RealStoriesSection';
import BehindTheScenesSection from '../components/home/BehindTheScenesSection';
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
      {/* Mission-Driven Hero Section */}
      <HeroSection settings={settings} />
      
      {/* Making Life Worth Living - Core Mission */}
      <MakingLifeWorthLivingSection />
      
      {/* Values & Philosophy */}
      <ValuesPhilosophySection />
      
      {/* Real Stories with Video Testimonials */}
      <RealStoriesSection />
      
      {/* Behind the Scenes - Facilities & Team */}
      <BehindTheScenesSection />
      
      {/* Services Section */}
      <ServicesSection />
    </motion.div>
  );
}