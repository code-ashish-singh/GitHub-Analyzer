import { motion } from 'framer-motion';
import UsernameInput from '../ui/UsernameInput';
import useGithubAnalysis from '../../hooks/useGithubAnalysis';

const CTA = () => {
  const { mutate, isPending } = useGithubAnalysis();

  const handleSubmit = (username) => {
    mutate(username);
    // TODO: navigate to /dashboard/:username
  };

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/40 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-700/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Analyze Your{' '}
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-400">
              GitHub Profile?
            </span>
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Join 50,000+ developers who have already unlocked their potential with AI-powered insights.
          </p>

          <div className="flex justify-center">
            <UsernameInput onSubmit={handleSubmit} loading={isPending} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
