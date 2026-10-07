import { motion } from 'framer-motion';

interface ProjectVisualProps {
  isActive: boolean;
}

export const ProjectVisual = ({ isActive }: ProjectVisualProps) => {
  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[450px] bg-dark rounded-3xl overflow-hidden relative border border-dark/10 shadow-2xl flex items-center justify-center">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '32px 32px' }}>
      </div>

      {/* CCTV Frame Indicators */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-white/30"></div>
      <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-white/30"></div>
      <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-white/30"></div>
      <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-white/30"></div>
      
      {/* Recording indicator */}
      <div className="absolute top-8 right-10 flex items-center gap-2">
        <motion.div 
          animate={{ opacity: isActive ? [1, 0.2, 1] : 0.2 }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-2.5 h-2.5 rounded-full bg-accent" 
        />
        <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase">REC</span>
      </div>

      {/* Abstract Detection Scene */}
      <div className="relative w-[70%] h-[60%] flex items-center justify-center">
        
        {/* Main "Person" Abstract Block */}
        <motion.div 
          className="absolute w-24 h-40 bg-white/5 rounded-sm border border-white/10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isActive ? 1 : 0.3, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Privacy Masking (Face) */}
          <motion.div 
            className="absolute -top-12 left-1/2 -translate-x-1/2 w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {/* Pixelation effect simulation */}
            <div className="absolute inset-1 grid grid-cols-3 grid-rows-3 gap-[1px] opacity-40">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-white/40"></div>
              ))}
            </div>
            {/* Detection Label */}
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isActive ? 1 : 0, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-24 top-2 text-[8px] tracking-widest text-white/60 bg-white/5 px-2 py-1 rounded-sm border border-white/10"
            >
              ANONYMIZED
            </motion.div>
          </motion.div>

          {/* YOLO Bounding Box */}
          <motion.div
            className="absolute -inset-4 border border-accent/70 bg-accent/5 rounded-sm pointer-events-none"
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: isActive ? 1 : 1.05, opacity: isActive ? 1 : 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          >
            {/* Bounding Box Label */}
            <div className="absolute -top-5 left-0 bg-accent text-white text-[9px] font-bold px-1.5 py-0.5 tracking-wider uppercase">
              PERSON 98%
            </div>
          </motion.div>
        </motion.div>

        {/* Suspicious Object Abstract Block */}
        <motion.div 
          className="absolute right-0 bottom-10 w-16 h-12 bg-white/5 border border-white/10"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: isActive ? 1 : 0.2, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* YOLO Bounding Box */}
          <motion.div
            className="absolute -inset-2 border border-red-500/70 bg-red-500/5 pointer-events-none"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: isActive ? 1 : 1.1, opacity: isActive ? 1 : 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="absolute -top-5 left-0 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 tracking-wider uppercase">
              ALERT
            </div>
          </motion.div>
        </motion.div>

        {/* Scanning Line */}
        <motion.div 
          className="absolute left-0 right-0 h-[1px] bg-accent/50 shadow-[0_0_8px_rgba(255,106,0,0.5)]"
          initial={{ top: '0%' }}
          animate={isActive ? { top: ['0%', '100%', '0%'] } : { top: '50%' }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Processing Metadata */}
      <motion.div 
        className="absolute bottom-6 left-8 flex flex-col gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0.3 }}
        transition={{ delay: 0.5 }}
      >
        <div className="text-[9px] font-mono text-white/40">FPS: 30.0</div>
        <div className="text-[9px] font-mono text-white/40">LATENCY: 12ms</div>
        <div className="text-[9px] font-mono text-accent">INFERENCE: YOLOv8</div>
      </motion.div>
    </div>
  );
};
