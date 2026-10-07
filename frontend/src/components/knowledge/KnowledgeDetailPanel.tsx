import { motion, AnimatePresence } from 'framer-motion';
import type { KnowledgeDomain } from '../../data/knowledge';

interface KnowledgeDetailPanelProps {
  domain: KnowledgeDomain | null;
}

export function KnowledgeDetailPanel({ domain }: KnowledgeDetailPanelProps) {
  return (
    <div className="absolute top-4 right-4 md:top-8 md:right-8 w-64 md:w-80 pointer-events-none z-30">
      <AnimatePresence mode="wait">
        {domain && (
          <motion.div
            key={domain.id}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="bg-white/95 backdrop-blur-md border border-black/10 shadow-xl rounded-2xl p-6"
          >
            <h3 className="text-lg md:text-xl font-bold text-black mb-3 uppercase tracking-tight">
              {domain.title}
            </h3>
            
            <hr className="border-black/10 mb-4" />

            <p className="text-sm md:text-base text-black/80 leading-relaxed mb-6">
              {domain.focus}
            </p>

            <div className="flex flex-wrap gap-x-3 gap-y-2">
              {domain.technologies.map(tech => (
                <span 
                  key={tech} 
                  className="text-xs font-bold tracking-widest text-black/50 uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
