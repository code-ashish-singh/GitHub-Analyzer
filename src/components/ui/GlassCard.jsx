import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const GlassCard = ({ children, className = '', hover = true, onClick }) => (
  <motion.div
    whileHover={hover ? { y: -4, scale: 1.015 } : {}}
    transition={{ type: 'spring', stiffness: 320, damping: 22 }}
    onClick={onClick}
    className={cn(
      'relative overflow-hidden rounded-2xl border border-white/10',
      'bg-white/[0.04] backdrop-blur-xl p-6 shadow-xl',
      onClick && 'cursor-pointer',
      className
    )}
  >
    {/* Subtle inner highlight */}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent" />
    <div className="relative z-10">{children}</div>
  </motion.div>
);

export default GlassCard;
