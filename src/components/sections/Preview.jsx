import { motion } from 'framer-motion';
import { Star, CheckCircle, Sparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const REPOS = [
  { name: 'nexus-ui-framework', desc: 'High-performance atomic design framework', stars: 892, lang: 'TypeScript', dot: 'bg-blue-500' },
  { name: 'distributed-ledger-core', desc: 'Lightweight consensus engine for blockchain', stars: 654, lang: 'Rust', dot: 'bg-orange-500' },
  { name: 'neural-canvas', desc: 'AI-powered generative art platform', stars: 423, lang: 'Python', dot: 'bg-yellow-500' },
];

const Preview = () => (
  <section className="py-32 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading subtitle="A glimpse into your personalized AI analysis dashboard">
        Your <span className="text-violet-400">Dashboard</span> Preview
      </SectionHeading>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        {/* Glow border */}
        <div className="absolute -inset-px bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 rounded-2xl blur-sm opacity-30" />

        <div className="relative bg-[#0d0d15] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.07] bg-white/[0.03]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-white/5 rounded-md px-3 py-1 text-xs text-gray-600 text-center font-mono">
                gitinsight.ai/dashboard/alexander-chen
              </div>
            </div>
          </div>

          {/* Dashboard body */}
          <div className="p-6 md:p-8 grid md:grid-cols-3 gap-6">
            {/* Left column */}
            <div className="md:col-span-1 space-y-5">
              <div className="p-5 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                <div className="flex flex-col items-center text-center">
                  <div className="w-18 h-18 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-0.5 mb-4">
                    <div className="w-full h-full rounded-full bg-[#111] overflow-hidden">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="avatar" className="w-full h-full" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white">Alexander Chen</h3>
                  <p className="text-xs text-gray-500 mb-4">Staff Engineer @ TechFlow</p>
                  <div className="w-full p-4 rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 mb-4">
                    <div className="text-3xl font-bold text-white mb-0.5">92</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Hiring Score</div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {['TypeScript', 'React', 'Rust', 'Node'].map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-md bg-white/8 text-xs text-gray-400 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                <h4 className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-wider">Core Strengths</h4>
                <div className="space-y-2.5">
                  {['Clean Architecture', 'System Design', 'Documentation'].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-sm text-gray-300">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="md:col-span-2 space-y-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[{ l: 'Total Repos', v: '124' }, { l: 'Stars', v: '3.2k' }, { l: 'Activity', v: '98' }, { l: 'Collaborators', v: '42' }].map(({ l, v }) => (
                  <div key={l} className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.07] text-center">
                    <div className="text-xl font-bold text-white mb-0.5">{v}</div>
                    <div className="text-xs text-gray-500">{l}</div>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                <h4 className="text-xs font-medium text-gray-500 mb-4 uppercase tracking-wider">Top Repositories</h4>
                <div className="space-y-3">
                  {REPOS.map((repo) => (
                    <div key={repo.name} className="flex items-center justify-between p-3.5 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:border-white/20 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-2.5 h-2.5 rounded-full ${repo.dot} shrink-0`} />
                        <div>
                          <div className="text-white font-medium text-sm">{repo.name}</div>
                          <div className="text-xs text-gray-500">{repo.desc}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-500 shrink-0 ml-4">
                        <span className="flex items-center gap-1 text-xs">
                          <Star className="w-3 h-3" /> {repo.stars}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-white/5 text-xs">{repo.lang}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="p-5 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                  <h4 className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-wider">Growth Areas</h4>
                  <div className="space-y-3">
                    {[{ label: 'Test Coverage', pct: '64%', w: 'w-[64%]', color: 'bg-yellow-500' }, { label: 'Legacy Complexity', pct: 'High', w: 'w-[85%]', color: 'bg-red-500' }].map(({ label, pct, w, color }) => (
                      <div key={label}>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="text-gray-300">{label}</span>
                          <span className="text-gray-500">{pct}</span>
                        </div>
                        <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                          <div className={`h-full ${w} ${color} rounded-full`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20">
                  <h4 className="text-xs font-medium text-violet-300 mb-3 uppercase tracking-wider">AI Recommendation</h4>
                  <p className="text-sm text-gray-300 italic leading-relaxed">
                    "Build an open-source Rust core for state management to demonstrate low-level optimization skills."
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-violet-400" />
                    </div>
                    <span className="text-xs text-violet-400">Generated by AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Preview;
