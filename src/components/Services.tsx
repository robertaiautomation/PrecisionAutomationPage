import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, Headphones, Database, Calendar, Phone, Send, Search } from 'lucide-react';

const services = [
  {
    icon: MessageSquare,
    title: 'AI Lead Generation Chatbot',
    description: 'Engage every visitor instantly, qualify leads, and capture info 24/7.',
  },
  {
    icon: Headphones,
    title: 'AI Customer Support Chatbot',
    description: 'Deliver instant, consistent answers across chat, email, and social.',
  },
  {
    icon: Database,
    title: 'CRM Integrations',
    description: 'Seamlessly sync conversations and leads into your existing systems.',
  },
  {
    icon: Calendar,
    title: 'Appointment Setting System',
    description: 'Automate scheduling, reminders, and follow-ups effortlessly.',
  },
  {
    icon: Phone,
    title: 'AI Phone Callers',
    description: 'Outbound voice AI that calls leads, confirms bookings, and closes gaps.',
  },
  {
    icon: Send,
    title: 'Automated Outreach System',
    description: 'Multichannel automation that nurtures leads across platforms.',
  },
  {
    icon: Search,
    title: 'Google TOP 3 SEO Engine',
    description: 'Dominate Google search rankings for high-intent keywords to pull in consistent organic traffic.',
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative py-40 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Our Core <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">AI Systems</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">See which automation fits your business</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} isInView={isInView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <motion.a
            href="#audit"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-600/50 transition-all duration-300"
          >
            Book Strategy Call
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: {
    icon: React.ElementType;
    title: string;
    description: string;
  };
  index: number;
  isInView: boolean;
}

const ServiceCard = ({ service, index, isInView }: ServiceCardProps) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.02 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

      <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-transparent">
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
             style={{
               background: 'linear-gradient(90deg, transparent, rgba(74, 0, 224, 0.1), transparent)',
               backgroundSize: '200% 100%',
               animation: 'shimmer 2s infinite'
             }}
        />

        <div className="relative z-10">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
          <p className="text-gray-400 leading-relaxed">{service.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
