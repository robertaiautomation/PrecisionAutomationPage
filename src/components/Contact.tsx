import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          message: formData.message,
          subject: 'New Contact Form Submission - Precision Automation',
          from_name: 'Precision Automation Website'
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Something went wrong while sending the message.');
      }

      setSubmitted(true);
      setSuccessMessage('Thank you for reaching out! Our team will contact you within 24 hours.');
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
        setSuccessMessage('');
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-40 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Get in <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg">Have questions? We'd love to hear from you.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-400">For inquiries, partnerships, or demos:</p>
                  <a href="mailto:robert@precision-automation.org" className="text-blue-400 hover:text-purple-400 transition-colors font-medium mt-1">
                    robert@precision-automation.org
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Response Time</h3>
                  <p className="text-gray-400">
                    We typically respond within 24 hours.
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-8 border-t border-zinc-800"
              >
                <p className="text-gray-400 mb-6">Ready to book a consultation?</p>
                <motion.a
                  href="#audit"
                  whileHover={{ scale: 1.05 }}
                  className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-600/50 transition-all duration-300"
                >
                  Book Consultation
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 group hover:border-purple-600/50 transition-all duration-300">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <Check className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
                  <p className="text-gray-400">We'll be in touch within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="contact-name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:border-purple-600 focus:outline-none transition-colors text-white placeholder-gray-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="contact-email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:border-purple-600 focus:outline-none transition-colors text-white placeholder-gray-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="block text-sm font-medium text-gray-300 mb-2">Company <span className="text-gray-500">(optional)</span></label>
                    <input
                      type="text"
                      name="company"
                      id="contact-company"
                      value={formData.company}
                      onChange={handleChange}
                      autoComplete="organization"
                      className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:border-purple-600 focus:outline-none transition-colors text-white placeholder-gray-500"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      name="message"
                      id="contact-message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      autoComplete="off"
                      className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:border-purple-600 focus:outline-none transition-colors text-white placeholder-gray-500 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm">{error}</p>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-600/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </motion.button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Prefer direct contact? Email us at{' '}
                    <a href="mailto:robert@precision-automation.org" className="text-blue-400 hover:text-purple-400 transition-colors">
                      robert@precision-automation.org
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
