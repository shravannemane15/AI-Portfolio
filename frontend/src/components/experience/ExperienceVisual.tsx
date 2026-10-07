import { motion } from 'framer-motion';

export const ExperienceVisual = () => {
  return (
    <div className="w-full bg-dark rounded-2xl overflow-hidden relative border border-dark/10 shadow-lg p-6 md:p-8 flex flex-col gap-6 font-mono selection:bg-accent/30">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between relative z-10 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <motion.div 
            animate={{ opacity: [1, 0.4, 1] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-2 h-2 rounded-full bg-accent"
          />
          <span className="text-[10px] tracking-widest text-white/50 uppercase font-bold">ANALYTICAL ENGINE V1.0</span>
        </div>
        <span className="text-[10px] tracking-widest text-white/30 uppercase">DATA → ANALYSIS → INSIGHT</span>
      </div>

      {/* Data Visualization Area */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10 flex-1">
        
        {/* Main Chart Area */}
        <div className="md:col-span-8 flex flex-col gap-4">
          <div className="flex justify-between items-end">
            <span className="text-[10px] text-white/40 tracking-widest uppercase font-bold">Price Trend (Simulated)</span>
            <span className="text-xs text-accent font-bold">+14.2%</span>
          </div>
          
          <div className="h-32 w-full relative flex items-end">
            {/* SVG Line Chart */}
            <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible preserve-3d" preserveAspectRatio="none">
              {/* Grid lines */}
              <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
              <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
              <line x1="0" y1="30" x2="100" y2="30" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
              
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#FF6A00" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Area fill */}
              <motion.path 
                d="M0,40 L0,25 L15,30 L30,15 L45,22 L60,8 L75,18 L90,5 L100,10 L100,40 Z" 
                fill="url(#chartGradient)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              />

              {/* Path line */}
              <motion.path 
                d="M0,25 L15,30 L30,15 L45,22 L60,8 L75,18 L90,5 L100,10" 
                fill="none" 
                stroke="#FF6A00" 
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              
              {/* Highlight point */}
              <motion.circle 
                cx="60" cy="8" r="1.5" 
                fill="#FFFFFF" 
                stroke="#FF6A00" strokeWidth="0.5"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.3 }}
              />
            </svg>
          </div>
          
          {/* Volatility/Volume Bars */}
          <div className="mt-2 flex flex-col gap-2">
            <span className="text-[9px] text-white/40 tracking-widest uppercase font-bold">Trading Volume</span>
            <div className="flex items-end gap-1 h-8 w-full">
              {[4, 7, 3, 8, 5, 10, 6, 9, 4, 7, 5, 8, 6, 9, 3, 5, 8].map((height, i) => (
                <motion.div 
                  key={i}
                  className="flex-1 bg-white/20 rounded-t-sm hover:bg-accent/50 transition-colors"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height * 10}%` }}
                  transition={{ duration: 0.5, delay: 0.1 * (i % 5) }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Info Column */}
        <div className="md:col-span-4 flex flex-col gap-6 justify-center">
          
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <span className="block text-[9px] text-white/40 tracking-widest uppercase font-bold mb-1">Data Quality</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-white">95%<span className="text-accent">+</span></span>
            </div>
            <motion.div 
              className="w-full h-1 bg-white/10 mt-3 rounded-full overflow-hidden"
            >
              <motion.div 
                className="h-full bg-accent rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '95%' }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <span className="block text-[9px] text-white/40 tracking-widest uppercase font-bold mb-2">Volatility Index</span>
            <div className="flex items-center gap-3">
              <div className="flex-1 flex gap-1">
                <div className="h-2 flex-1 bg-white/20 rounded-sm"></div>
                <div className="h-2 flex-1 bg-white/40 rounded-sm"></div>
                <div className="h-2 flex-1 bg-accent rounded-sm"></div>
              </div>
              <span className="text-xs text-white/80 font-bold">HIGH</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
