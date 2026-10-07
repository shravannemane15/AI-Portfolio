import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../../data/projects';
import { ProjectVisual } from './ProjectVisual';
import { ChevronRight } from 'lucide-react';

interface ProjectHeroProps {
  project: Project;
}

export const ProjectHero = ({ project }: ProjectHeroProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="w-full relative bg-white border border-dark/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 transition-all duration-500 hover:shadow-xl hover:shadow-dark/5"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Left Column - Metadata */}
        <div className="lg:col-span-5 flex flex-col h-full justify-center">
          <motion.div 
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-black text-accent">{project.number}</span>
            <div className="w-8 h-[1px] bg-dark/20"></div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-dark/40">
              FEATURED PROJECT
            </span>
          </motion.div>

          <motion.h3 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-dark mb-4 leading-none uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {project.title}
          </motion.h3>

          <motion.p 
            className="text-sm md:text-base font-bold tracking-widest text-dark/50 mb-8 uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {project.subtitle}
          </motion.p>

          <motion.p 
            className="text-base text-dark/70 leading-relaxed mb-8 max-w-md font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {project.description}
          </motion.p>

          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-[10px] font-bold tracking-widest text-dark/40 uppercase mb-2">Role</h4>
            <p className="text-sm font-bold text-dark">{project.role}</p>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {project.technologies.map(tech => (
              <span 
                key={tech} 
                className="text-[10px] font-bold tracking-widest bg-primary-bg border border-dark/5 text-dark/70 px-3 py-1.5 rounded-md uppercase"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Column - Visual & Expanding Details */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            {project.imageUrl ? (
              <div className="w-full aspect-[16/9] md:aspect-auto md:h-[450px] rounded-3xl overflow-hidden border border-dark/10 shadow-2xl relative bg-dark">
                <img src={project.imageUrl} alt={project.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            ) : (
              <ProjectVisual isActive={isExpanded} />
            )}
          </motion.div>

          {/* Details Panel that reveals on hover (desktop) or tap (mobile is handled by state) */}
          <div className="overflow-hidden">
            <AnimatePresence>
              {isExpanded && project.features && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-primary-bg rounded-2xl p-6 md:p-8 border border-dark/5"
                >
                  <h4 className="text-[10px] font-bold tracking-[0.2em] text-dark/40 uppercase mb-4">
                    Key Project Features
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <ChevronRight size={14} className="text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-medium text-dark/80">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
};
