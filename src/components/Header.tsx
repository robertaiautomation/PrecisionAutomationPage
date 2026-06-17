import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://qhotphj7iu.ufs.sh/f/zPG9pdgOD5jUTK1zEraLzDFQGE0KYxnufPm1MOp3NJHcZsCX"
            alt="Precision Automation"
            className="h-12 w-auto"
          />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['About', 'Services', 'Pricing', 'Blog', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm tracking-wide"
            >
              {item}
            </a>
          ))}
        </div>

        <motion.a
          href="#audit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative px-6 py-2 text-sm font-medium text-white rounded-lg overflow-hidden group block"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="absolute inset-0 border border-transparent bg-gradient-to-r from-blue-500 to-purple-600 opacity-100 group-hover:opacity-0 transition-opacity duration-300" style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '1px' }} />
          <span className="relative z-10">Get Started</span>
        </motion.a>
      </nav>
    </motion.header>
  );
};

export default Header;
