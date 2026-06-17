import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertCircle, Clock, MessageSquare, Users, Search } from 'lucide-react';

const painPoints = [
  { icon: MessageSquare, text: 'Leads that never get followed up' },
  { icon: Clock, text: 'Prospects waiting hours for a reply' },
  { icon: Users, text: 'Reps spending more time typing than selling' },
  { icon: AlertCircle, text: 'Support tickets piling up unanswered' },
  { icon: Search, text: 'Invisible on Google while competitors claim the TOP 3 traffic' },
];

const Bottleneck = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-40 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Every missed search is a{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                missed opportunity.
              </span>
            </h2>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              You built your business to grow — not to babysit your inbox.
            </p>

            <p className="text-lg text-gray-300 font-medium">
              It's time to automate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-purple-600/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-300">{point.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Bottleneck;
