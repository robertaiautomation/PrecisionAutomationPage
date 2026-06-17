import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, TrendingUp, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'SEO & AI Strategy',
    description: 'We analyze high-intent keywords and design your automated conversion roadmap.',
  },
  {
    icon: TrendingUp,
    number: '02',
    title: 'Build & Rank',
    description: 'Our team optimizes your site for Google TOP 3 and deploys custom AI agents.',
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'Drive & Convert',
    description: 'Watch organic traffic scale while AI instantly captures and closes every lead.',
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" className="relative py-40 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            How It <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-gray-400 text-lg">Three simple steps to transform your business</p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 relative z-20"
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>

                    <span className="text-6xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text mb-4 opacity-20">
                      {step.number}
                    </span>

                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#audit"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-600/50 transition-all duration-300"
          >
            Schedule Discovery Call
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
