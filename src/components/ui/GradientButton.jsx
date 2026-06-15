import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const GradientButton = ({ children, onClick, className = '', variant = 'primary' }) => {
  const base =
    'relative px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center gap-2 group overflow-hidden';

  const variants = {
    primary:
      'bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:shadow-[0_0_32px_rgba(139,92,246,0.45)]',
    secondary:
      'bg-white/8 border border-white/20 hover:bg-white/14 hover:border-white/40',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={cn(base, variants[variant], className)}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}
    </motion.button>
  );
};

export default GradientButton;
