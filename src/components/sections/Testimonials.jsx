import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import SectionHeading from '../ui/SectionHeading';
import { TESTIMONIALS } from '../../constants/testimonialData';

const StarRating = () => (
  <div className="flex items-center gap-1 mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
    ))}
  </div>
);

const Testimonials = () => (
  <section className="py-32 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading subtitle="Join thousands of developers who transformed their GitHub presence">
        Developer <span className="text-violet-400">Stories</span>
      </SectionHeading>

      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard className="h-full">
              <StarRating />
              <p className="text-gray-300 leading-relaxed mb-6 italic text-sm">"{t.content}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 overflow-hidden shrink-0">
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${t.avatar}`}
                    alt={t.name}
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
