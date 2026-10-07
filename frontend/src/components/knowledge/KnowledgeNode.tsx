import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface KnowledgeNodeProps {
  label: string;
  isCenter?: boolean;
  isDomain?: boolean;
  isActive?: boolean;
  isFaded?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  icon?: LucideIcon;
}

export function KnowledgeNode({
  label,
  isCenter = false,
  isDomain = false,
  isActive = false,
  isFaded = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: KnowledgeNodeProps) {
  // Base classes for the node
  const baseClasses = "relative flex items-center justify-center rounded-full transition-colors outline-none select-none";
  const interactiveClasses = (isCenter || (isFaded && !isDomain)) ? "cursor-default pointer-events-none" : "cursor-pointer";
  
  // Specific sizing and styling based on node type
  let sizeClasses = "";
  let colorClasses = "";
  
  if (isCenter) {
    sizeClasses = "w-32 h-32 md:w-40 md:h-40 z-20";
    colorClasses = "bg-black text-warmGray border-2 border-black hover:border-orange";
  } else if (isDomain) {
    sizeClasses = "px-6 py-3 md:px-8 md:py-4 z-10";
    colorClasses = isActive 
      ? "bg-orange text-white border border-orange shadow-lg shadow-orange/20" 
      : "bg-white text-black border border-black/10 hover:border-orange/50 shadow-sm";
  } else {
    sizeClasses = "px-3 py-1.5 md:px-4 md:py-2 text-sm z-0";
    colorClasses = "bg-white text-black/80 border border-black/10";
  }

  // Animation variants
  const variants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: isFaded ? 0.3 : 1,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeOut" as const }
    }
  };

  const Component = isCenter ? motion.div : motion.button;

  return (
    <Component
      className={`${baseClasses} ${interactiveClasses} ${sizeClasses} ${colorClasses}`}
      onClick={!isCenter ? onClick : undefined}
      onMouseEnter={!isCenter ? onMouseEnter : undefined}
      onMouseLeave={!isCenter ? onMouseLeave : undefined}
      variants={variants}
      whileHover={!isCenter && !isFaded ? "hover" : undefined}
      layout
    >
      <span className={`font-medium ${isCenter ? 'text-center leading-tight tracking-wide' : 'whitespace-nowrap'}`}>
        {isCenter ? (
          <>
            SHRAVAN<br/>INTELLIGENCE
          </>
        ) : (
          label
        )}
      </span>
    </Component>
  );
}
