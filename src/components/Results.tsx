import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    metric: '+230%',
    description: 'Faster response times',
    testimonial: 'Our AI chatbot handles leads so effectively, it\'s like having a full sales team that never sleeps.',
    author: 'Sarah Johnson',
  },
  {
    metric: '+40%',
    description: 'Increase in booked calls',
    testimonial: 'We went from losing 60% of leads to qualified prospects to now converting 85% of them. The automation is a game changer.',
    author: 'Michael Chen',
  },
  {
    metric: '24/7',
    description: 'Customer coverage',
    testimonial: 'No more hiring extra support staff. Our automation handles everything, and customers actually prefer the instant responses.',
    author: 'Emma Rodriguez',
  },
];

const Results = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-40 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Results in <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Action</span>
          </h2>
          <p className="text-gray-400 text-lg">Real metrics from our clients</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl" />

              <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 h-full group-hover:border-purple-600/50 transition-all duration-300">
                <div className="mb-6">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                    {item.metric}
                  </div>
                  <p className="text-gray-400">{item.description}</p>
                </div>

                <blockquote className="text-gray-300 mb-6 italic leading-relaxed">
                  "{item.testimonial}"
                </blockquote>

                <div className="border-t border-zinc-700 pt-6">
                  <p className="font-semibold text-white">{item.author}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
