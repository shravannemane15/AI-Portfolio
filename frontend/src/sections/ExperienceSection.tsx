import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../data/experience';
import { ExperiencePanel } from '../components/experience/ExperiencePanel';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full bg-primary-bg py-24 md:py-32 px-6 md:px-12 border-t border-dark/5">
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column - Section Intro */}
        <div className="lg:col-span-4 flex flex-col">
          <div className="sticky top-32">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-3xl font-display font-black text-accent">05</span>
              <div className="w-12 h-[2px] bg-dark/10"></div>
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-dark/40">
                EXPERIENCE
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl font-display font-black leading-[0.9] tracking-tight text-dark mb-8 uppercase"
            >
              WHERE I<br/>HAVE WORKED.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-dark/70 font-medium leading-relaxed max-w-sm"
            >
              Practical experience working with data, analytics, and real-world technical workflows.
            </motion.p>
          </div>
        </div>

        {/* Right Column - Experience Panels */}
        <div className="lg:col-span-8 flex flex-col gap-16">
          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <ExperiencePanel experience={exp} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
