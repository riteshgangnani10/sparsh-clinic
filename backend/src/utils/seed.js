import User from '../models/User.model.js';
import Service from '../models/Service.model.js';
import TeamMember from '../models/TeamMember.model.js';
import Condition from '../models/Condition.model.js';
import Settings from '../models/Settings.model.js';
import connectDB from '../config/database.js';
import dotenv from 'dotenv';

dotenv.config();

const seedData = async () => {
  try {
    await connectDB();

    // Clear existing data
    console.log('Clearing existing data...');
    await User.deleteMany({});
    await Service.deleteMany({});
    await TeamMember.deleteMany({});
    await Condition.deleteMany({});
    await Settings.deleteMany({});

    // Create admin user
    console.log('Creating admin user...');
    await User.create({
      name: 'Admin',
      email: process.env.ADMIN_EMAIL || 'admin@sparshprc.com',
      password: process.env.ADMIN_PASSWORD || 'changeThisPassword123!',
      role: 'admin',
    });

    // Create services
    console.log('Creating services...');
    const services = await Service.insertMany([
      {
        title: 'Pediatric Physiotherapy',
        shortDescription: 'Specialized physical therapy for children to improve movement, strength, and motor skills.',
        description: 'Our pediatric physiotherapy services help children develop gross motor skills, improve balance and coordination, and achieve their developmental milestones. We use evidence-based techniques including NDT, targeted segmental training, and functional therapy.',
        order: 1,
        isActive: true,
      },
      {
        title: 'Pediatric Occupational Therapy',
        shortDescription: 'Helping children develop fine motor skills and independence in daily activities.',
        description: 'Occupational therapy focuses on helping children develop the skills needed for daily living, including fine motor skills, self-care activities, and sensory processing. Our therapists work with children to improve handwriting, feeding, dressing, and play skills.',
        order: 2,
        isActive: true,
      },
      {
        title: 'Sensory Integration Therapy',
        shortDescription: 'Addressing sensory processing challenges to improve function and behavior.',
        description: 'Sensory Integration Therapy helps children who have difficulty processing sensory information. Through structured, playful activities, we help children organize sensory input to respond appropriately to their environment.',
        order: 3,
        isActive: true,
      },
      {
        title: 'Aquatic Therapy',
        shortDescription: 'Water-based therapy for improved strength, flexibility, and function.',
        description: 'Aquatic therapy uses the unique properties of water to facilitate therapeutic exercise and activities. The buoyancy and resistance of water make it ideal for children with movement challenges, providing a safe and fun environment for therapy.',
        order: 4,
        isActive: true,
      },
      {
        title: 'Speech Therapy',
        shortDescription: 'Comprehensive speech and language therapy for communication development.',
        description: 'Our speech therapy services address communication disorders including speech sound disorders, language delays, fluency issues, and voice disorders. We also provide therapy for feeding and swallowing difficulties.',
        order: 5,
        isActive: true,
      },
      {
        title: 'Applied Behavior Analysis (ABA)',
        shortDescription: 'Evidence-based therapy for children with autism and developmental disorders.',
        description: 'ABA therapy uses scientifically validated principles to improve socially significant behaviors. Our trained therapists work with children to develop communication, social, and learning skills while reducing challenging behaviors.',
        order: 6,
        isActive: true,
      },
    ]);

    // Create team members
    console.log('Creating team members...');
    await TeamMember.insertMany([
      {
        name: 'Dr. Mona Patel',
        title: 'Paediatric Physiotherapist',
        role: 'doctor',
        qualifications: ['PT', 'C/NDT (PAEDS cert. by NDTA, USA)', 'SI (SIPT cert. by USC, USA)', 'Aquatic Therapy (certi, ATNI, India)'],
        experience: '15+ years',
        bio: 'Dr. Mona Patel is a highly experienced pediatric physiotherapist with specialized training in Neurodevelopmental Treatment (NDT) and Sensory Integration. She has dedicated her career to helping children with developmental challenges reach their full potential.',
        order: 1,
        isActive: true,
        isFeatured: true,
        phone: '+91-9426038646',
      },
      {
        name: 'Dr. Tejas Patel',
        title: 'Paediatric Physiotherapist',
        role: 'doctor',
        qualifications: ['PT', 'C/NDT (PAEDS cert. by NDTA, USA)', 'SI (cert. by USC, USA)', 'Aquatic Therapy (Water Specific Therapy – Halliwick, certi by IATF, Switzerland)'],
        experience: '15+ years',
        bio: 'Dr. Tejas Patel is a renowned pediatric physiotherapist with advanced certifications in NDT, Sensory Integration, and Aquatic Therapy. His expertise in water-based therapy using the Halliwick method has helped countless children improve their motor function.',
        order: 2,
        isActive: true,
        isFeatured: true,
        phone: '+91-9426284419',
      },
    ]);

    // Create conditions
    console.log('Creating conditions...');
    await Condition.insertMany([
      {
        name: 'Cerebral Palsy',
        shortDescription: 'A group of disorders affecting movement, posture, and muscle tone.',
        description: 'Cerebral Palsy (CP) is caused by abnormal brain development or damage to the developing brain. At Sparsh, we provide comprehensive treatment including physiotherapy, occupational therapy, and specialized interventions to help children with CP achieve maximum independence.',
        symptoms: ['Delayed motor milestones', 'Abnormal muscle tone', 'Difficulty with coordination', 'Impaired fine motor skills'],
        treatmentApproach: 'Our multidisciplinary approach includes NDT-based therapy, strengthening exercises, gait training, sensory integration, and family education.',
        servicesOffered: services.slice(0, 4).map(s => s._id),
        order: 1,
        isActive: true,
      },
      {
        name: 'Autism Spectrum Disorder (ASD)',
        shortDescription: 'A developmental disorder affecting communication and behavior.',
        description: 'Autism Spectrum Disorder is characterized by challenges with social communication and interaction, along with restricted and repetitive patterns of behavior. Our comprehensive therapy programs help children with autism develop essential life skills.',
        symptoms: ['Social communication difficulties', 'Repetitive behaviors', 'Sensory sensitivities', 'Delayed language development'],
        treatmentApproach: 'We use evidence-based interventions including ABA therapy, sensory integration, speech therapy, and structured teaching methods.',
        servicesOffered: [services[1]._id, services[2]._id, services[4]._id, services[5]._id],
        order: 2,
        isActive: true,
      },
      {
        name: 'Developmental Delays',
        shortDescription: 'Slower than expected achievement of developmental milestones.',
        description: 'Developmental delays occur when a child does not reach developmental milestones at the expected times. Early intervention is crucial for maximizing developmental outcomes.',
        symptoms: ['Delayed motor skills', 'Speech and language delays', 'Cognitive delays', 'Social-emotional delays'],
        treatmentApproach: 'Our early intervention program provides targeted therapy to address specific developmental areas while supporting overall growth.',
        servicesOffered: services.slice(0, 5).map(s => s._id),
        order: 3,
        isActive: true,
      },
      {
        name: 'Down Syndrome',
        shortDescription: 'A genetic condition causing developmental and intellectual delays.',
        description: 'Down syndrome is caused by the presence of an extra chromosome 21. Children with Down syndrome benefit greatly from early and ongoing therapeutic interventions.',
        symptoms: ['Hypotonia', 'Delayed motor development', 'Speech delays', 'Learning difficulties'],
        treatmentApproach: 'We provide individualized therapy focusing on muscle strengthening, motor skill development, communication, and functional independence.',
        servicesOffered: services.slice(0, 5).map(s => s._id),
        order: 4,
        isActive: true,
      },
    ]);

    // Create settings
    console.log('Creating settings...');
    await Settings.create({
      clinicName: 'Sparsh Pediatric Rehabilitation Clinic',
      tagline: 'Nurturing Potential, Celebrating Progress',
      about: 'Powered by passion and sailing on dreams, SPARSH was set up in 2006 to nurture and cultivate functionality to live of physically and mentally challenged children who are affected with neurological, musculoskeletal, genetic, and metabolic disorders.',
      contact: {
        email: 'sparshprc@gmail.com',
        phone: [
          { label: 'Dr. Tejas Patel', number: '+91-9426284419' },
          { label: 'Dr. Mona Patel', number: '+91-9426038646' },
        ],
        address: {
          street: '1st Floor, Soham-2, Opp- Ramji Mandir, Ishwar Bhuvan Road, Nr- Navarang School Six Road Circle, Navarangpura',
          city: 'Ahmedabad',
          state: 'Gujarat',
          zipCode: '380014',
          country: 'India',
        },
      },
      operatingHours: [
        { day: 'Monday', open: '9:00 AM', close: '7:00 PM', closed: false },
        { day: 'Tuesday', open: '9:00 AM', close: '7:00 PM', closed: false },
        { day: 'Wednesday', open: '9:00 AM', close: '7:00 PM', closed: false },
        { day: 'Thursday', open: '9:00 AM', close: '7:00 PM', closed: false },
        { day: 'Friday', open: '9:00 AM', close: '7:00 PM', closed: false },
        { day: 'Saturday', open: '9:00 AM', close: '2:00 PM', closed: false },
        { day: 'Sunday', open: '', close: '', closed: true },
      ],
      homepage: {
        heroTitle: 'Every Child Deserves the Chance to Reach Their Full Potential',
        heroSubtitle: 'Comprehensive pediatric rehabilitation services delivered with expertise, compassion, and dedication.',
        statistics: [
          { label: 'Years of Experience', value: '18+', icon: 'calendar' },
          { label: 'Children Helped', value: '5000+', icon: 'users' },
          { label: 'Therapy Services', value: '15+', icon: 'heart' },
          { label: 'Success Rate', value: '95%', icon: 'trophy' },
        ],
      },
      appointments: {
        enabled: true,
        message: 'Contact us to schedule an appointment',
        whatsappNumber: '+919426284419',
      },
      seo: {
        defaultTitle: 'Sparsh Pediatric Rehabilitation Clinic | Best Child Therapy Centre in Ahmedabad',
        defaultDescription: 'Leading pediatric rehabilitation clinic offering Autism treatment, Cerebral Palsy therapy, Speech therapy, and comprehensive developmental support for children in Ahmedabad.',
        defaultKeywords: ['pediatric therapy', 'autism treatment', 'cerebral palsy', 'speech therapy', 'occupational therapy', 'physiotherapy', 'Ahmedabad'],
      },
    });

    console.log('✅ Database seeded successfully!');
    console.log('\nDefault admin credentials:');
    console.log(`Email: ${process.env.ADMIN_EMAIL || 'admin@sparshprc.com'}`);
    console.log(`Password: ${process.env.ADMIN_PASSWORD || 'changeThisPassword123!'}`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedData();

