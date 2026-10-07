import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Experience } from '../../data/experience';
import { ExperienceVisual } from './ExperienceVisual';
import { ExperienceHighlights } from './ExperienceHighlights';

interface ExperiencePanelProps {
  experience: Experience;
}

export const ExperiencePanel = ({ experience }: ExperiencePanelProps) => {
  const [activeArea, setActiveArea] = useState<number | null>(0);

  return (
    <div className="w-full bg-white border border-dark/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-xl shadow-dark/5">
      
      {/* Header: Company & Role */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-dark/10 pb-8">
        <div>
          <motion.h3 
            className="text-2xl md:text-4xl font-display font-black text-dark uppercase mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {experience.role}
          </motion.h3>
          <motion.h4 
            className="text-lg md:text-xl font-bold text-accent"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {experience.company}
          </motion.h4>
        </div>
        <motion.div 
          className="flex flex-col md:items-end text-dark/50"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-sm font-bold uppercase tracking-widest">{experience.period}</span>
          <span className="text-xs font-bold uppercase tracking-widest">{experience.duration}</span>
        </motion.div>
      </div>

      {/* Work Snapshot (Interactive Areas) */}
      <div className="mb-12">
        <h4 className="text-[10px] font-bold tracking-[0.2em] text-dark/40 uppercase mb-6">Work Snapshot</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {experience.responsibilities.map((resp, idx) => {
            const isActive = activeArea === idx;
            return (
              <motion.div 
                key={resp.title}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-primary-bg border-accent shadow-sm' 
                    : 'bg-white border-dark/10 hover:border-dark/20'
                }`}
                onMouseEnter={() => setActiveArea(idx)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold tracking-widest uppercase ${isActive ? 'text-accent' : 'text-dark'}`}>
                    {resp.title}
                  </span>
                </div>
                <AnimatePresence>
                  {isActive && (
                    <motion.p 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="text-sm text-dark/70 font-medium leading-relaxed overflow-hidden pt-2"
                    >
                      {resp.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Conceptual Visualization */}
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <ExperienceVisual />
      </motion.div>

      {/* Skills */}
      <div className="mb-4">
        <h4 className="text-[10px] font-bold tracking-[0.2em] text-dark/40 uppercase mb-4">Core Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, idx) => (
            <motion.span 
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="text-[10px] font-bold tracking-widest bg-primary-bg border border-dark/5 text-dark/70 px-3 py-1.5 rounded-md uppercase"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <ExperienceHighlights highlights={experience.highlights} />

    </div>
  );
};
