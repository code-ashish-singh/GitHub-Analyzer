import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const LoadingState = ({ message = 'Analyzing your GitHub profile…' }) => (
  <div className="flex flex-col items-center justify-center py-24 gap-6">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      className="w-14 h-14 rounded-full border-2 border-violet-500/30 border-t-violet-500 flex items-center justify-center"
    >
      <Cpu className="w-6 h-6 text-violet-400" />
    </motion.div>
    <div className="text-center">
      <p className="text-white font-medium mb-1">{message}</p>
      <p className="text-gray-500 text-sm">This may take a few seconds</p>
    </div>
    <div className="flex gap-1.5">
      {[0, 0.15, 0.3].map((delay, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, delay }}
          className="w-2 h-2 rounded-full bg-violet-500"
        />
      ))}
    </div>
  </div>
);

export default LoadingState;
