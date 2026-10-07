import { motion } from 'framer-motion';
import { KnowledgeMap } from '../components/knowledge/KnowledgeMap';

export function KnowledgeSection() {
  return (
    <section id="knowledge" className="relative w-full min-h-screen bg-primary-bg overflow-hidden py-24 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex flex-col xl:flex-row items-center gap-16">
        
        {/* Left Side: Editorial Typography */}
        <div className="w-full xl:w-1/3 flex flex-col justify-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <span className="text-sm font-bold tracking-widest text-orange mb-6 block">
              03
            </span>
            <div className="text-xs font-semibold tracking-widest text-black/50 mb-4 uppercase">
              KNOWLEDGE SYSTEM
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-black leading-[1.1] tracking-tight mb-6">
              HOW I THINK<br />
              ABOUT<br />
              TECHNOLOGY.
            </h2>
            
            <p className="text-lg text-black/70 leading-relaxed max-w-md">
              A connected view of the tools, concepts, and systems I work with. Hover over the domains to explore.
            </p>
          </motion.div>
        </div>

        {/* Right Side: Interactive Map */}
        <div className="w-full xl:w-2/3 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 }}
            className="w-full"
          >
            <KnowledgeMap />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
