import { motion } from 'framer-motion';
import { PROJECTS } from '../data/projects';
import { ProjectHero } from '../components/work/ProjectHero';
import { ProjectArchive } from '../components/work/ProjectArchive';

export const WorkSection = () => {
  const featuredProject = PROJECTS.find(p => p.featured);
  const archiveProjects = PROJECTS.filter(p => !p.featured);

  return (
    <section id="work" className="w-full bg-primary-bg py-24 md:py-32 px-6 md:px-12 border-t border-dark/5">
      <div className="w-full max-w-[1400px] mx-auto">
        
        {/* Section Intro */}
        <div className="flex flex-col mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-3xl font-display font-black text-accent">04</span>
            <div className="w-12 h-[2px] bg-dark/10"></div>
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-dark/40">
              SELECTED WORK
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-black leading-[0.9] tracking-tight text-dark mb-8 uppercase"
          >
            WHAT I<br/>BUILD.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-dark/70 font-medium max-w-md leading-relaxed"
          >
            Projects where AI, data, and engineering come together to solve practical problems.
          </motion.p>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-16 md:mb-24">
            <ProjectHero project={featuredProject} />
          </div>
        )}

        {/* Secondary Projects / Archive */}
        {archiveProjects.length > 0 && (
          <div>
            <ProjectArchive projects={archiveProjects} />
          </div>
        )}

      </div>
    </section>
  );
};
