import { motion } from 'framer-motion';
import { ABOUT_DATA } from '../data/about';
import { IdentityStack } from '../components/about/IdentityStack';
import { AboutFocus } from '../components/about/AboutFocus';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-white py-24 md:py-36 px-6 md:px-12 border-t border-dark/5">
      <div className="w-full max-w-[1400px] mx-auto">

        {/* ── Top grid: intro left + right column ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20 md:mb-32">

          {/* Left — Section intro (sticky on desktop) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="sticky top-32">
              <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-3xl font-display font-black text-accent">06</span>
                <div className="w-12 h-[2px] bg-dark/10" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-dark/40">
                  IDENTITY
                </span>
              </motion.div>

              <motion.h2
                className="text-5xl md:text-6xl xl:text-7xl font-display font-black leading-[0.88] tracking-tight text-dark uppercase mb-10"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: 0.08 }}
              >
                BEYOND<br />THE<br />CODE.
              </motion.h2>

              <motion.p
                className="text-base md:text-lg text-dark/60 font-medium leading-relaxed max-w-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: 0.16 }}
              >
                AI & Data Science student building at the intersection of intelligent systems, data, and engineering.
              </motion.p>
            </div>
          </div>

          {/* Right — Personal content */}
          <motion.div
            className="lg:col-span-8 flex flex-col gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {/* Introduction */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <p className="text-lg md:text-xl text-dark/80 font-medium leading-relaxed">
                {ABOUT_DATA.introduction}
              </p>
              <p className="text-base md:text-lg text-dark/60 font-medium leading-relaxed border-l-2 border-accent pl-5">
                "{ABOUT_DATA.positioning}"
              </p>
            </motion.div>

            {/* Principles — BUILDING / LEARNING / EXPERIMENTING */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ABOUT_DATA.principles.map((p) => (
                <div key={p.title} className="flex flex-col gap-3 bg-primary-bg rounded-2xl p-6 border border-dark/5 hover:border-accent/30 transition-colors">
                  <span className="text-xs font-black tracking-[0.2em] text-accent uppercase">{p.title}</span>
                  <p className="text-sm text-dark/70 font-medium leading-relaxed">{p.description}</p>
                </div>
              ))}
            </motion.div>

            {/* Identity Stack */}
            <motion.div variants={itemVariants} className="flex flex-col gap-5">
              <h4 className="text-[10px] font-bold tracking-[0.25em] text-dark/40 uppercase">
                Focus Areas
              </h4>
              <IdentityStack focusAreas={ABOUT_DATA.focusAreas} />
            </motion.div>

            {/* Current Focus pills */}
            <motion.div variants={itemVariants}>
              <AboutFocus currentFocus={ABOUT_DATA.currentFocus} />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
