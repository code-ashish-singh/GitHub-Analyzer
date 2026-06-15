import { motion } from 'framer-motion';
import { TrendingUp, Briefcase, Target, Rocket } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import SectionHeading from '../ui/SectionHeading';
import { BENEFITS } from '../../constants/testimonialData';

const ICONS = [TrendingUp, Briefcase, Target, Rocket];

const Benefits = () => (
  <section className="py-32 relative bg-white/[0.015]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading subtitle="Real outcomes for real developers">
        Why Developers <span className="text-violet-400">Love</span> Us
      </SectionHeading>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {BENEFITS.map((benefit, i) => {
          const Icon = ICONS[i];
          return (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <GlassCard className="h-full text-center group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/15 to-purple-500/15 border border-violet-500/25 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Benefits;
