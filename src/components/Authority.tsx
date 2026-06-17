import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Puzzle, TrendingUp } from 'lucide-react';

const advantages = [
  {
    icon: Zap,
    title: 'Tailored Intelligence',
    description: 'We train every AI agent on your business data and tone.',
  },
  {
    icon: Puzzle,
    title: 'Seamless Integration',
    description: 'Connects with your CRM, calendar, and communication stack.',
  },
  {
    icon: TrendingUp,
    title: 'Real Results',
    description: 'Automations that increase leads, speed, and satisfaction — not complexity.',
  },
];

const Authority = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-40 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Why Choose <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg" />
              <div className="relative bg-transparent border border-zinc-800 rounded-xl p-8 group-hover:border-purple-600/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-gray-400 leading-relaxed">{advantage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex justify-center gap-4 flex-wrap"
        >
          <span className="text-sm text-gray-400 text-center w-full mb-4">Integrates with</span>
          {['HubSpot', 'Calendly', 'Slack', 'Notion'].map((tool) => (
            <motion.span
              key={tool}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
              className="px-4 py-2 border border-zinc-800 rounded-lg text-gray-300 text-sm transition-all duration-300"
            >
              {tool}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Authority;
