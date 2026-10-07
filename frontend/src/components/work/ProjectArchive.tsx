import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../../data/projects';
import { ChevronRight } from 'lucide-react';

interface ProjectArchiveProps {
  projects: Project[];
}

export const ProjectArchive = ({ projects }: ProjectArchiveProps) => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className="w-full flex flex-col gap-6">
      {projects.map((project, idx) => {
        const isHovered = hoveredProject === project.id;
        
        return (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="w-full bg-white border border-dark/10 rounded-3xl overflow-hidden transition-colors hover:border-dark/20"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row gap-8 lg:items-center justify-between cursor-default">
              
              {/* Left Column: Number, Title, Description */}
              <div className="flex flex-col gap-4 lg:w-1/3">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-black text-accent">{project.number}</span>
                  <div className="w-8 h-[1px] bg-dark/20"></div>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-black text-dark uppercase group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-dark/70 font-medium leading-relaxed mb-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-[9px] font-bold tracking-widest bg-primary-bg border border-dark/5 text-dark/70 px-2 py-1 rounded-sm uppercase">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[9px] font-bold tracking-widest text-dark/40 uppercase">...</span>
                  )}
                </div>
              </div>

              {/* Middle Column: Visual */}
              <div className="lg:w-1/2">
                {project.imageUrl ? (
                  <div className="w-full aspect-[16/9] rounded-xl overflow-hidden border border-dark/10 shadow-lg bg-dark relative">
                    <img src={project.imageUrl} alt={project.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-full aspect-[16/9] rounded-xl bg-dark/5 border border-dark/10 flex items-center justify-center">
                    <span className="text-[10px] font-bold tracking-widest text-dark/30 uppercase">VISUALIZATION</span>
                  </div>
                )}
              </div>

              {/* Right Column: Interaction */}
              <div className="lg:w-auto flex justify-end">
                <motion.div 
                  className="w-12 h-12 rounded-full border border-dark/10 flex items-center justify-center bg-primary-bg"
                  animate={{ 
                    backgroundColor: isHovered ? '#FF6A00' : '#F4F2ED',
                    color: isHovered ? '#FFFFFF' : '#0B0B0B',
                    borderColor: isHovered ? '#FF6A00' : 'rgba(11,11,11,0.1)'
                  }}
                >
                  <ChevronRight size={18} />
                </motion.div>
              </div>
            </div>

            {/* Expanding Details Panel */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-primary-bg/50 border-t border-dark/5"
                >
                  <div className="p-6 md:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Metrics (if available) */}
                    {project.metrics && (
                      <div>
                        <h4 className="text-[10px] font-bold tracking-[0.2em] text-dark/40 uppercase mb-4">Key Metrics</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {project.metrics.map(metric => (
                            <div key={metric.label} className="bg-white border border-dark/5 rounded-xl p-4">
                              <div className="text-xl font-black text-accent mb-1">{metric.value}</div>
                              <div className="text-[9px] font-bold tracking-widest text-dark/50 uppercase">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Features (if available and metrics aren't) */}
                    {!project.metrics && project.features && (
                      <div className="md:col-span-2">
                        <h4 className="text-[10px] font-bold tracking-[0.2em] text-dark/40 uppercase mb-4">Project Highlights</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm font-medium text-dark/80">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};
