import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'How AI Automation is Replacing Customer Support Teams (Without Losing the Human Touch)',
    summary: 'Discover how businesses are deploying AI chatbots to handle 80% of support tickets instantly while improving customer satisfaction. Learn the strategy behind balancing automation and personalization.',
    date: 'November 15, 2024',
    readTime: '6 min read',
    fullContent: 'Discover how businesses are deploying AI chatbots to handle 80% of support tickets instantly while improving customer satisfaction. Learn the strategy behind balancing automation and personalization.\n\nIn today\'s fast-paced business environment, customer support teams are under unprecedented pressure. With 24/7 availability expectations and rising ticket volumes, many businesses struggle to maintain quality service without overwhelming their teams.\n\nAI-powered chatbots have emerged as a game-changing solution. By automating routine support tasks, companies can now:\n\n• Reduce support costs by 40-60%\n• Improve first-response time from hours to seconds\n• Scale support without hiring new staff\n• Free up your team to handle complex, high-value interactions\n\nThe key to success isn\'t replacing human support entirely—it\'s using AI to handle the predictable, repetitive questions while your team focuses on relationship-building and problem-solving.\n\nOur AI Support System learns your knowledge base and customer communication style, ensuring responses feel natural and aligned with your brand voice. Plus, seamless handoff to human agents means complex issues never fall through the cracks.',
  },
  {
    id: 2,
    title: '5 Automation Systems Every Modern Business Needs in 2025',
    summary: 'From AI callers to CRM-integrated chatbots, see how small automation shifts can multiply revenue. Includes insights on what yields the fastest ROI.',
    date: 'November 10, 2024',
    readTime: '8 min read',
    fullContent: 'From AI callers to CRM-integrated chatbots, see how small automation shifts can multiply revenue. Includes insights on what yields the fastest ROI.\n\nThe businesses winning in 2025 aren\'t just using automation—they\'re automating strategically. Here are the five systems that deliver the fastest results:\n\n1. AI Lead Generation Chatbots\nCapture leads 24/7 without hiring a sales development team. Average ROI: 300% in year one.\n\n2. AI Customer Support Chatbots\nHandle routine support instantly. Frees your team for high-value interactions. Cost savings: 50%.\n\n3. Appointment Setting Automation\nNo more back-and-forth scheduling. Direct integration with your calendar. Time saved: 10+ hours/week.\n\n4. AI Phone Callers\nOutbound calls that qualify leads, confirm bookings, and follow up automatically. Conversion lift: 25-40%.\n\n5. Multichannel Outreach Systems\nDeliver the right message across email, SMS, and chat. Engagement rates improve by 3x when leveraging multiple channels.\n\nThe best part? These systems work together. A lead captured by your chatbot gets nurtured via email automation, books a call with your AI phone caller, and gets a reminder via SMS. The entire funnel runs on autopilot.',
  },
  {
    id: 3,
    title: 'The Future of Sales: AI Systems That Book Calls While You Sleep',
    summary: 'Learn how AI appointment systems are replacing traditional outbound teams, and how your business can implement them today.',
    date: 'November 5, 2024',
    readTime: '7 min read',
    fullContent: 'Learn how AI appointment systems are replacing traditional outbound teams, and how your business can implement them today.\n\nImagine waking up to a full calendar of qualified calls—without lifting a finger. This isn\'t science fiction. It\'s happening right now for businesses using AI appointment-setting systems.\n\nTraditional outbound sales processes are broken:\n• Sales reps spend 80% of time on non-selling activities\n• Call connection rates hover around 5-10%\n• Follow-up consistency is nearly impossible to maintain\n• Hiring and training new reps takes months\n\nAI Appointment Systems fix all of this. They:\n\n1. Call prospects automatically at optimal times\n2. Engage in natural conversation to qualify leads\n3. Navigate objections intelligently\n4. Book calendar appointments seamlessly\n5. Send reminders automatically\n6. Log all interactions in your CRM\n\nImplementing AI appointment automation typically results in:\n• 3-5x increase in booked calls\n• 60% reduction in labor costs\n• 24/7 prospecting (without paying for overnight shifts)\n• 40% improvement in follow-up consistency\n\nThe transition is seamless. Your existing CRM, email, and calendar systems integrate directly. Your team gets a dashboard showing all booked calls, notes, and follow-ups. The AI learns from your sales process and continuously improves its qualification and closing ability.\n\nThe future of sales isn\'t about hiring more reps. It\'s about automating the mundane and letting your team focus on closing deals.',
  },
];

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  return (
    <section id="blog" className="relative py-40 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Latest <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-gray-400 text-lg">Stay updated on automation trends and strategies</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-lg" />

              <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 h-full group-hover:border-purple-600/50 transition-all duration-300 flex flex-col">
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">{post.date} • {post.readTime}</p>
                  <h3 className="text-xl font-bold leading-tight mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {post.title}
                  </h3>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                  {post.summary}
                </p>

                <motion.button
                  onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                  whileHover={{ gap: '12px' }}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-purple-400 transition-colors duration-300 font-medium"
                >
                  {expandedPost === post.id ? 'Show Less' : 'Read More'}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                {expandedPost === post.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-zinc-700"
                  >
                    <div className="prose prose-invert max-w-none text-sm text-gray-400 space-y-4">
                      {post.fullContent.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="leading-relaxed whitespace-pre-wrap">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-3 border border-purple-600/50 text-white font-medium rounded-lg hover:border-purple-600 hover:bg-purple-600/10 transition-all duration-300"
          >
            View All Blog Posts
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
