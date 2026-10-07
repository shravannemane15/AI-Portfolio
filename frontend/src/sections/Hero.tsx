import { motion, useReducedMotion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { Bot, Code2, Database, Cloud, Globe, MessageCircle, Mail, Mouse } from 'lucide-react';
import portraitImg from '../assets/shravan-portrait.png';

export const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: prefersReducedMotion ? 0 : 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  // Splitting name to render on two lines like the reference
  const nameParts = PORTFOLIO_DATA.name.split(' ');
  const firstName = nameParts[0] || 'SHRAVAN';
  const lastName = nameParts[1] || 'NEMANE';

  return (
    <section id="hero" className="relative min-h-[100dvh] w-full flex flex-col justify-center pt-32 pb-12 overflow-hidden">
      {/* Background Subtle Details */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.2] text-dark/30">
        <div className="absolute top-[20%] left-6 md:left-12 text-[10px] tracking-widest font-mono hidden md:block">INT.01 // {new Date().getFullYear()}</div>
        <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-dark/5 hidden lg:block"></div>
        <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-dark/5 hidden lg:block"></div>
        {/* Subtle grid lines like the reference */}
        <div className="absolute top-[15%] left-[5%] right-[5%] h-[1px] bg-dark/5"></div>
        <div className="absolute bottom-[15%] left-[5%] right-[5%] h-[1px] bg-dark/5"></div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10">
        
        {/* Left: Text Content */}
        <motion.div 
          className="lg:col-span-6 flex flex-col justify-center xl:pr-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-accent"></div>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-dark/60">
              AI KNOWLEDGE INTERFACE
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-6xl md:text-[5.5rem] lg:text-[7rem] xl:text-[8.5rem] font-display font-black leading-[0.85] tracking-tight mb-4">
            {firstName}<br/>
            {lastName}
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-xl md:text-3xl font-display font-bold tracking-widest text-accent mb-6 uppercase">
            {PORTFOLIO_DATA.role}
          </motion.h2>

          <motion.p variants={itemVariants} className="text-base md:text-lg text-dark/70 max-w-md mb-10 leading-relaxed font-medium">
            {PORTFOLIO_DATA.shortDescription}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
            <motion.a 
              href="#ai"
              className="px-8 py-4 bg-dark text-white rounded-2xl font-bold text-sm flex items-center gap-3 hover:bg-dark/90 transition-all shadow-xl shadow-dark/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              ASK MY AI
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </motion.a>
            <motion.a 
              href="#projects"
              className="px-8 py-4 bg-transparent text-dark border border-dark/20 rounded-2xl font-bold text-sm flex items-center gap-3 hover:bg-white hover:border-dark/30 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              EXPLORE WORK
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dark/50"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </motion.a>
          </motion.div>

          {/* Tech Focus */}
          <motion.div variants={itemVariants} className="mb-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-dark/60">TECH FOCUS</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {PORTFOLIO_DATA.techFocus.map((tech) => (
                <div key={tech} className="px-4 py-2 border border-dark/10 rounded-full text-xs font-semibold text-dark/80 bg-white/50 backdrop-blur-sm">
                  {tech}
                </div>
              ))}
              <div className="w-8 h-8 flex items-center justify-center border border-dark/10 rounded-full text-accent font-bold bg-white/50 cursor-pointer hover:bg-white">
                +
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Visual Composition */}
        <div className="lg:col-span-6 relative flex justify-center items-center h-[500px] lg:h-[700px] mt-12 lg:mt-0">

          {/* Outer rotating dashed ring (decorative, sits behind main circle) */}
          <motion.div
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 1.5, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[370px] h-[370px] md:w-[520px] md:h-[520px] lg:w-[660px] lg:h-[660px] z-0"
          >
            <motion.div
              animate={prefersReducedMotion ? {} : { rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-accent/20 border-dashed"
            >
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-1/4 right-0 w-3 h-3 bg-accent rounded-full translate-x-1/2 translate-y-1/2"></div>
              <div className="absolute bottom-0 left-1/4 w-2 h-2 bg-accent rounded-full -translate-x-1/2 translate-y-1/2"></div>
            </motion.div>
          </motion.div>

          {/* Main portrait circle — dark fill + thick orange border + portrait inside */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 1, delay: prefersReducedMotion ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-[300px] h-[300px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] rounded-full overflow-hidden border-[10px] border-accent shadow-[0_0_60px_rgba(255,106,0,0.35)] bg-black"
          >
            <motion.img
              src={portraitImg}
              alt="Shravan Nemane"
              animate={prefersReducedMotion ? {} : { y: [-4, 4, -4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full object-contain scale-110"
              style={{ objectPosition: '50% 100%' }}
            />
          </motion.div>

          {/* Floating Metadata pills */}
          {PORTFOLIO_DATA.skills.map((skill, index) => {
            const icons = [<Bot size={14} />, <Database size={14} />, <Code2 size={14} />, <Cloud size={14} />];
            return (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 1 + (index * 0.2) }}
                className={`absolute z-20 bg-white/90 backdrop-blur-md text-dark text-[10px] font-bold tracking-widest uppercase px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2 border border-white hidden md:flex ${
                  index === 0 ? 'top-[22%] left-0 lg:left-[4%]' :
                  index === 1 ? 'top-[18%] -right-2 lg:right-[2%]' :
                  index === 2 ? 'bottom-[28%] left-2 lg:left-[4%]' :
                  'bottom-[24%] right-0 lg:right-[2%]'
                }`}
              >
                <motion.div animate={prefersReducedMotion ? {} : { y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, delay: index, ease: "easeInOut" }} className="flex items-center gap-2">
                  <span className="text-dark/60">{icons[index % icons.length]}</span>
                  {skill}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Footer Area (Hero Bottom) */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 mt-12 lg:mt-auto flex flex-col md:flex-row justify-between items-center z-10 relative">
        <motion.div 
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 1.2 }}
          className="flex items-center gap-4 bg-white/50 backdrop-blur-md px-6 py-4 rounded-2xl border border-dark/5 shadow-sm mb-6 md:mb-0"
        >
          <span className="text-3xl font-display font-black text-accent">01</span>
          <div className="flex flex-col">
            <span className="text-[9px] font-bold tracking-widest text-dark/50">AVAILABLE FOR</span>
            <span className="text-[11px] font-bold tracking-wider text-dark">OPPORTUNITIES</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 1.5 }}
          className="flex flex-col items-center gap-3 absolute left-1/2 -translate-x-1/2 bottom-0 md:bottom-auto hidden md:flex"
        >
          <span className="text-[10px] font-bold tracking-widest uppercase text-dark/50">SCROLL TO EXPLORE</span>
          <Mouse size={20} className="text-dark/40" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 1.4 }}
          className="flex items-center gap-4"
        >
          {[Globe, MessageCircle, Mail].map((Icon, i) => (
            <a key={i} href="#" className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-dark/5 text-dark hover:bg-dark hover:text-white transition-colors">
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
