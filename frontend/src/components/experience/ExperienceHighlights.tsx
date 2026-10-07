import { motion } from 'framer-motion';
import type { Highlight } from '../../data/experience';

interface ExperienceHighlightsProps {
  highlights: Highlight[];
}

export const ExperienceHighlights = ({ highlights }: ExperienceHighlightsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 w-full border-t border-dark/10 pt-8 mt-8">
      {highlights.map((highlight, index) => (
        <motion.div 
          key={highlight.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex flex-col gap-1"
        >
          <span className="text-3xl md:text-4xl font-display font-black text-accent leading-none">
            {highlight.value}
          </span>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-dark/40 mt-1">
            {highlight.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};
