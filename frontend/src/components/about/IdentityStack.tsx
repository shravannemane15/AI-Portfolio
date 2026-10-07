import { useState } from 'react';
import { motion } from 'framer-motion';
import type { FocusArea } from '../../data/about';

interface IdentityStackProps {
  focusAreas: FocusArea[];
}

export const IdentityStack = ({ focusAreas }: IdentityStackProps) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="w-full flex flex-col">
      {focusAreas.map((area, idx) => {
        const isHovered = hoveredIdx === idx;
        const isDimmed = hoveredIdx !== null && !isHovered;

        return (
          <div key={area.title}>
            <motion.div
              className="flex items-center justify-between py-4 cursor-default group"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              animate={{ opacity: isDimmed ? 0.35 : 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-accent"
                  animate={{ scale: isHovered ? 1.5 : 1, opacity: isHovered ? 1 : 0.3 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="text-xl md:text-2xl font-display font-black uppercase tracking-tight text-dark"
                  animate={{ x: isHovered ? 6 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {area.title}
                </motion.span>
              </div>
              <span className="text-[9px] font-bold tracking-widest text-dark/30 uppercase">
                {area.category}
              </span>
            </motion.div>
            {idx < focusAreas.length - 1 && (
              <div className="w-full h-[1px] bg-dark/8" />
            )}
          </div>
        );
      })}
    </div>
  );
};
