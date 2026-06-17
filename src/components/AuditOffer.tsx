import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check } from 'lucide-react';

const AuditOffer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY || '0953e6a9-eeaa-40ef-aa53-9f5c32a0ea62',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          website: formData.website,
          subject: 'New AI & SEO Audit Request - Precision Automation',
          from_name: 'Precision Automation Website'
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Something went wrong while submitting the audit request.');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', website: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="audit" className="relative py-40 px-6 bg-gradient-to-b from-black to-zinc-900/50">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="relative border border-zinc-800 rounded-3xl p-8 md:p-12 backdrop-blur-sm bg-zinc-900/50">
            <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-5 transition-opacity duration-300 pointer-events-none"
                 style={{
                   background: 'linear-gradient(90deg, transparent, rgba(74, 0, 224, 0.2), transparent)',
                 }}
            />

            <div className="relative z-10 text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Want to claim your{' '}
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  TOP 3 spot?
                </span>
              </h2>
              <p className="text-gray-400 text-lg">
                Get a free AI & SEO Growth Audit — see exactly which keywords to target and how AI will convert them.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center"
              >
                <Check className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <p className="text-white font-semibold mb-1">Thank you!</p>
                <p className="text-green-400">We'll send you a free audit report within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    id="audit-name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:border-purple-600 focus:outline-none transition-colors duration-200 text-white placeholder-gray-500"
                  />
                  <input
                    type="email"
                    name="email"
                    id="audit-email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:border-purple-600 focus:outline-none transition-colors duration-200 text-white placeholder-gray-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="company"
                    id="audit-company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    autoComplete="organization"
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:border-purple-600 focus:outline-none transition-colors duration-200 text-white placeholder-gray-500"
                  />
                  <input
                    type="url"
                    name="website"
                    id="audit-website"
                    placeholder="Website (optional)"
                    value={formData.website}
                    onChange={handleChange}
                    autoComplete="url"
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:border-purple-600 focus:outline-none transition-colors duration-200 text-white placeholder-gray-500"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-600/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Submitting...' : 'Get Free Audit'}
                </motion.button>

                <p className="text-gray-500 text-sm text-center">
                  No spam. We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuditOffer;
