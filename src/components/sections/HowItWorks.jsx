import { motion } from 'framer-motion';
import { Terminal, Cpu, Zap } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import SectionHeading from '../ui/SectionHeading';

const STEPS = [
  {
    number: '01',
    title: 'Enter GitHub Username',
    description:
      'Simply type your GitHub username into our secure search field. No authentication or permissions required.',
    Icon: Terminal,
  },
  {
    number: '02',
    title: 'AI Analyzes Repositories',
    description:
      'Our AI engine scans your public repositories, commit history, code patterns, and documentation quality.',
    Icon: Cpu,
  },
  {
    number: '03',
    title: 'Get Professional Feedback',
    description:
      'Receive a detailed report with scores, visualizations, and actionable recommendations in seconds.',
    Icon: Zap,
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/15 to-transparent pointer-events-none" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <SectionHeading subtitle="Three simple steps to unlock your GitHub potential">
        How It <span className="text-violet-400">Works</span>
      </SectionHeading>

      <div className="relative">
        {/* Vertical connector — desktop only */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-purple-500 to-transparent hidden md:block" />

        <div className="space-y-12">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 w-full">
                <GlassCard className={i % 2 === 1 ? 'md:text-right' : ''}>
                  {/* Mobile step badge */}
                  <div className="flex items-center gap-3 mb-3 md:hidden">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-white font-bold text-sm">
                      {step.number}
                    </div>
                    <step.Icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </GlassCard>
              </div>

              {/* Center circle — desktop */}
              <div className="relative hidden md:flex items-center justify-center w-16 shrink-0">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-white font-bold shadow-[0_0_28px_rgba(139,92,246,0.45)] z-10">
                  {step.number}
                </div>
              </div>

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
