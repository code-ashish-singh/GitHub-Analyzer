import { motion } from 'framer-motion';
import { CheckCircle, Sparkles, Star, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import UsernameInput from '../ui/UsernameInput';
import GlassCard from '../ui/GlassCard';
import useGithubAnalysis from '../../hooks/useGithubAnalysis';

// Floating mock profile card shown on the right side of the hero
const MockProfileCard = () => (
  <motion.div
    animate={{ y: [0, -18, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
  >
    <GlassCard className="w-full max-w-md mx-auto p-0">
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-0.5">
            <div className="w-full h-full rounded-full bg-[#111] overflow-hidden">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
                alt="avatar"
                className="w-full h-full"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Alexander Chen</h3>
            <p className="text-gray-400 text-sm">Staff Engineer @ TechFlow</p>
            <div className="flex items-center gap-1 mt-1">
              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
              <span className="text-xs text-gray-400">Score: 982 / 1000</span>
            </div>
          </div>
          <span className="ml-auto px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-medium border border-violet-500/30">
            PRO
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-400 uppercase tracking-wider">Hiring Readiness</span>
            <span className="text-xs text-gray-400">92/100</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '92%' }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-violet-500 to-purple-400 rounded-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-5">
          {[
            { label: 'Total Repos', value: '124' },
            { label: 'Stars Earned', value: '3.2k' },
            { label: 'Activity Score', value: '98' },
            { label: 'Collaborators', value: '42' },
          ].map(({ label, value }) => (
            <div key={label} className="p-3 rounded-xl bg-white/5 border border-white/[0.06]">
              <div className="text-xl font-bold text-white">{value}</div>
              <div className="text-xs text-gray-500 mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        <div className="p-3 rounded-xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20">
          <div className="flex items-center gap-2 mb-1">
            <Target className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium text-white">Career Roadmap</span>
          </div>
          <p className="text-xs text-gray-400">Next Milestone: Staff Engineer Path (Q4 2025)</p>
        </div>
      </div>
    </GlassCard>
  </motion.div>
);

const Hero = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useGithubAnalysis();

  const handleSubmit = (username) => {
    mutate(username, {
      onSuccess: () => navigate(`/dashboard/${username}`),
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Ambient glow background */}
      <div className="absolute inset-0 bg-[#080810]">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-700/15 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-700/15 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-indigo-700/8 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy + input */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-violet-300 mb-7">
            <Sparkles className="w-4 h-4" />
            <span>Powered by Advanced AI Models</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6">
            Analyze Your <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400">
              GitHub Profile
            </span>
            <br />
            with AI
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
            Get deep insights into your code quality, hiring readiness, and skill gaps.
            Transform your GitHub presence into a career accelerator.
          </p>

          <UsernameInput onSubmit={handleSubmit} loading={isPending} />

          <div className="mt-7 flex items-center gap-6 text-sm text-gray-500">
            {['Free Analysis', 'No Login Required'].map((text) => (
              <div key={text} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: floating mock card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <MockProfileCard />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-violet-600/15 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
