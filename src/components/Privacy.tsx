import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Privacy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="privacy" className="relative py-32 px-6 bg-black border-t border-zinc-900">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Privacy Policy</h3>
            <p className="text-gray-400 leading-relaxed">
              Precision Automation respects your privacy. We collect only the information necessary to provide services and never share data with third parties. For inquiries or data requests, contact{' '}
              <a href="mailto:robert@precision-automation.org" className="text-blue-400 hover:text-purple-400 transition-colors">
                robert@precision-automation.org
              </a>
              .
            </p>
          </div>

          <div className="pt-6 border-t border-zinc-800">
            <p className="text-sm text-gray-500">
              Last updated: November 2024
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Privacy;
