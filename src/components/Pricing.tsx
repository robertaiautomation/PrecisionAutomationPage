import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Sparkles } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Basic',
    price: '$499',
    period: '/mo',
    features: [
      'AI Lead Generation Chatbot',
      'Basic AI Customer Support Bot',
      'CRM Sync (Lite)',
      'Email Support',
      'Basic Appointment Setting Automations',
    ],
    cta: 'Choose Basic Plan',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$999',
    period: '/mo',
    badge: 'Most Popular',
    features: [
      'Advanced AI Lead Gen Chatbot',
      'Full AI Customer Support Chatbot',
      'Full CRM Integrations',
      'AI Appointment Setter',
      'AI Phone Caller (Lite)',
      'Automated Outreach System',
      'Priority Support',
    ],
    cta: 'Choose Professional Plan',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: ' Pricing',
    features: [
      'Fully Custom AI Systems',
      'Multi-Channel AI Agents',
      'Dedicated Automation Engineer',
      'Custom CRM Integrations',
      'AI Phone Caller (Unlimited)',
      'Full Custom Workflow Automation',
      '24/7 Premium Support',
    ],
    cta: 'Book Enterprise Consultation',
    popular: false,
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Flexible Plans for Every Business
          </h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Choose the plan that fits your automation needs and scale your business with AI-driven systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 md:mb-12">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative group ${
                plan.popular ? 'lg:scale-105 lg:-mt-6 lg:mb-6' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-xs md:text-sm font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-purple-500/50 animate-pulse">
                    <Sparkles className="w-3.5 h-3.5" />
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-2xl animate-pulse'
                    : 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-20 blur-xl'
                }`}
              />

              <div
                className={`relative backdrop-blur-sm rounded-2xl p-8 md:p-10 h-full transition-all duration-300 flex flex-col ${
                  plan.popular
                    ? 'bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 border-2 border-purple-500 shadow-2xl shadow-purple-500/30'
                    : 'bg-zinc-900/80 border border-zinc-700 hover:border-purple-500/60 hover:shadow-xl hover:shadow-purple-500/10'
                }`}
              >
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span
                      className={`text-5xl md:text-6xl font-bold ${
                        plan.popular
                          ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'
                          : 'text-white'
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-gray-400 text-lg md:text-xl">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.15 + i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <div
                          className={`rounded-full p-1 ${
                            plan.popular
                              ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                              : 'bg-blue-500/20'
                          }`}
                        >
                          <Check
                            className={`w-4 h-4 ${
                              plan.popular ? 'text-white' : 'text-blue-400'
                            }`}
                          />
                        </div>
                      </div>
                      <span className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block py-4 px-6 text-center font-semibold rounded-xl transition-all duration-300 text-base ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/60'
                      : 'border-2 border-zinc-700 text-white hover:border-purple-500 hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/30'
                  }`}
                >
                  {plan.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-center text-gray-400 mt-8 text-sm md:text-base">
            All plans include a 14-day money-back guarantee. No contracts. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
