import { motion } from 'framer-motion';
import { AIChat } from '../components/ai/AIChat';

export const AiChatSection = () => {
  return (
    <section id="ai" className="relative w-full min-h-screen py-24 px-6 md:px-12 flex items-center justify-center bg-primary-bg overflow-hidden border-t border-dark/5">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#FF8A33]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-dark/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10 h-full min-h-[600px] lg:h-[750px]">
        
        {/* Left Column: Heading & Context */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-3xl font-display font-black text-accent">02</span>
            <div className="w-12 h-[2px] bg-dark/10"></div>
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-dark/40">
              AI INTERFACE
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-black leading-[0.9] tracking-tight mb-8"
          >
            ASK<br/>SHRAVAN
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-dark/70 leading-relaxed max-w-sm mb-12 font-medium"
          >
            Don't just read a resume. Have a conversation with my personal AI knowledge system.
            <br/><br/>
            Ask anything about my skills, projects, and experience.
          </motion.p>
          
          {/* Status Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-dark/50 uppercase bg-white/50 w-fit px-4 py-2 rounded-full border border-dark/5 shadow-sm"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            SYSTEM ONLINE
          </motion.div>
        </div>

        {/* Right Column: Chat Interface */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="lg:col-span-8 h-[600px] lg:h-full relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-br from-white/40 to-white/10 rounded-[2.2rem] blur-sm"></div>
          <AIChat />
        </motion.div>

      </div>
    </section>
  );
};
