import { motion } from 'framer-motion';
import { Users, Star, GitFork, Activity } from 'lucide-react';
import AnimatedCounter from '../ui/AnimatedCounter';
import { STATS } from '../../constants/testimonialData';

const ICONS = [Users, Star, GitFork, Activity];

const TrustedBy = () => (
  <section className="py-20 relative border-y border-white/[0.06] bg-white/[0.015]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((stat, i) => {
          const Icon = ICONS[i];
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 mb-4">
                <Icon className="w-5 h-5 text-violet-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1.5">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default TrustedBy;
