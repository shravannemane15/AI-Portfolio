import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { KNOWLEDGE_DOMAINS } from '../../data/knowledge';
import { KnowledgeNode } from './KnowledgeNode';
import { KnowledgeDetailPanel } from './KnowledgeDetailPanel';

export function KnowledgeMap() {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const activeDomainData = activeDomain
    ? KNOWLEDGE_DOMAINS.find(d => d.id === activeDomain) || null
    : null;

  // Desktop radial layout math
  const getDomainStyle = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    const radiusX = 35;
    const radiusY = 35;
    return {
      left: `calc(50% + ${Math.cos(angle) * radiusX}%)`,
      top: `calc(50% + ${Math.sin(angle) * radiusY}%)`,
      transform: 'translate(-50%, -50%)',
    };
  };

  return (
    <div
      className="relative w-full h-[600px] md:h-[800px] rounded-3xl bg-transparent overflow-visible flex items-center justify-center"
      ref={containerRef}
    >
      {/* Detail panel — desktop only */}
      {!isMobile && <KnowledgeDetailPanel domain={activeDomainData} />}

      {/* SVG Connection Lines — desktop only */}
      {!isMobile && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {KNOWLEDGE_DOMAINS.map((domain, i) => {
            const angle = (i / KNOWLEDGE_DOMAINS.length) * 2 * Math.PI - Math.PI / 2;
            const x2 = 50 + Math.cos(angle) * 35;
            const y2 = 50 + Math.sin(angle) * 35;
            const isFaded = activeDomain !== null && activeDomain !== domain.id;
            const isActive = activeDomain === domain.id;

            return (
              <g key={`line-${domain.id}`}>
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke={isActive ? '#FF6A00' : '#0B0B0B'}
                  strokeWidth={isActive ? 2 : 1}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: isFaded ? 0.05 : isActive ? 0.4 : 0.1,
                  }}
                  transition={{ duration: 0.4 }}
                />
              </g>
            );
          })}
        </svg>
      )}

      {/* Nodes container */}
      <div
        className={`relative w-full h-full ${
          isMobile ? 'flex flex-col items-center py-12 px-4 overflow-y-auto' : ''
        }`}
      >
        {/* Center node */}
        {isMobile ? (
          <div className="mb-12 sticky top-0 z-20">
            <KnowledgeNode label="Center" isCenter />
          </div>
        ) : (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <KnowledgeNode label="Center" isCenter />
          </div>
        )}

        {/* Domain nodes */}
        {KNOWLEDGE_DOMAINS.map((domain, i) => {
          const isFaded = activeDomain !== null && activeDomain !== domain.id;
          const isActive = activeDomain === domain.id;

          if (isMobile) {
            return (
              <div key={domain.id} className="w-full flex flex-col items-center mb-12">
                <div className="h-8 w-px bg-black/20 mb-4" />
                <KnowledgeNode
                  label={domain.title}
                  isDomain
                  isActive={isActive}
                  onClick={() => setActiveDomain(isActive ? null : domain.id)}
                />
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="panel"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 p-4 bg-white rounded-xl border border-black/5 text-center w-full max-w-sm"
                    >
                      <p className="text-sm text-black/70 mb-4">{domain.focus}</p>
                      <div className="flex flex-wrap justify-center gap-2 mt-4">
                        {domain.technologies.map(tech => (
                          <span
                            key={tech}
                            className="text-xs font-medium bg-black/5 text-black px-2 py-1 rounded-md"
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

          // Desktop domain node
          return (
            <div key={domain.id}>
              <div
                className="absolute z-10"
                style={getDomainStyle(i, KNOWLEDGE_DOMAINS.length)}
              >
                <KnowledgeNode
                  label={domain.title}
                  isDomain
                  isActive={isActive}
                  isFaded={isFaded}
                  onMouseEnter={() => setActiveDomain(domain.id)}
                  onMouseLeave={() => setActiveDomain(null)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
