import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import SectionHeading from '../ui/SectionHeading';
import { FAQ_ITEMS } from '../../constants/faqData';

const FAQItem = ({ faq, isOpen, onToggle }) => (
  <GlassCard hover={false} onClick={onToggle}>
    <div className="flex items-center justify-between">
      <h3 className="text-white font-medium text-sm pr-8">{faq.question}</h3>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.25 }}
        className="shrink-0"
      >
        <ChevronDown className="w-5 h-5 text-violet-400" />
      </motion.div>
    </div>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden"
        >
          <p className="mt-4 text-gray-400 text-sm leading-relaxed border-t border-white/[0.07] pt-4">
            {faq.answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </GlassCard>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-32 relative bg-white/[0.015]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Common questions about GitInsight AI">
          Frequently Asked <span className="text-violet-400">Questions</span>
        </SectionHeading>

        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <FAQItem faq={faq} isOpen={openIndex === i} onToggle={() => toggle(i)} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
