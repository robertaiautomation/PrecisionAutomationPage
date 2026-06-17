import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import MagneticButton from './MagneticButton';
import AI3DSphere from './AI3DSphere';

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const gradientX = useTransform(mouseX, [0, window.innerWidth], [0, 100]);
  const gradientY = useTransform(mouseY, [0, window.innerHeight], [0, 100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background: useTransform(
            [gradientX, gradientY],
            ([x, y]) =>
              `radial-gradient(circle at ${x}% ${y}%, rgba(74, 0, 224, 0.4) 0%, rgba(142, 45, 226, 0.2) 25%, transparent 50%)`
          ),
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />

      <div className="relative z-10 w-full px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
                <span className="block">Rank in TOP 3.</span>
                <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Convert with AI.
                </span>
                <span className="block">— Automatically.</span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed"
              >
                Drive high-intent search traffic by ranking in the Google TOP 3, and let our custom AI systems instantly capture, qualify, and close every lead.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex gap-4 flex-col sm:flex-row"
              >
                <MagneticButton>Book a Free Consultation</MagneticButton>
                <motion.a
                  href="#how-it-works"
                  whileHover={{ scale: 1.02 }}
                  className="px-8 py-3 border border-purple-600/50 text-white font-medium rounded-lg hover:border-purple-600 transition-all duration-300 text-center"
                >
                  See How It Works
                </motion.a>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-sm text-gray-500 mt-6"
              >
                No spam. No bots pretending to be human. Just results.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block"
            >
              <AI3DSphere />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-purple-400" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;
