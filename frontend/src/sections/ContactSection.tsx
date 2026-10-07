import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowUpRight, ChevronDown, Copy, Check } from 'lucide-react';
import { CONTACT_DATA } from '../data/contact';
import { PORTFOLIO_DATA } from '../data/portfolio';

/* ─── Brand SVG Icons ─────────────────────────────────────────── */
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

/* ─── Email Card (no mailto dependency) ──────────────────────── */
interface EmailCardProps {
  email: string;
  copied: boolean;
  onCopy: () => void;
}

const EmailCard = ({ email, copied, onCopy }: EmailCardProps) => {
  const [hovered, setHovered] = useState(false);
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  return (
    <motion.div
      className="group relative flex flex-col bg-white border border-dark/8 rounded-3xl p-7 md:p-8 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-dark/8 hover:border-dark/15"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="absolute inset-0 rounded-3xl"
        style={{ background: 'radial-gradient(circle at 20% 20%, #FF6A0008 0%, transparent 60%)' }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      <div className="relative z-10 flex flex-col h-full gap-6">
        {/* Top: icon */}
        <div className="flex items-start justify-between">
          <motion.div
            className="w-14 h-14 rounded-2xl flex items-center justify-center border border-dark/8"
            animate={{ backgroundColor: hovered ? '#FF6A0020' : '#FF6A0012' }}
          >
            <Mail size={22} className="text-accent" />
          </motion.div>
        </div>

        {/* Email address */}
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] font-bold tracking-[0.2em] text-dark/40 uppercase">Email</span>
          <span className="text-base md:text-lg font-bold text-dark break-all leading-snug">{email}</span>
        </div>

        {/* Two explicit action buttons */}
        <div className="flex flex-wrap gap-3 mt-auto">
          <button
            onClick={onCopy}
            className="flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-full border border-dark/10 text-[10px] font-bold tracking-widest uppercase hover:border-accent hover:text-accent transition-colors bg-transparent"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.span key="check" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-1.5 text-accent">
                  <Check size={11} /> COPIED!
                </motion.span>
              ) : (
                <motion.span key="copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-1.5">
                  <Copy size={11} /> COPY EMAIL
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-full bg-accent text-white text-[10px] font-bold tracking-widest uppercase hover:bg-dark transition-colors"
          >
            <ArrowUpRight size={11} />
            OPEN GMAIL
          </a>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Contact Card ─────────────────────────────────────────────── */
interface ContactCardProps {
  icon: React.ReactNode;
  label: string;
  displayValue: string;
  sublabel: string;
  href: string;
  external?: boolean;
  accentColor: string;
  onCopy?: () => void;
  copied?: boolean;
}

const ContactCard = ({ icon, label, displayValue, sublabel, href, external, accentColor, onCopy, copied }: ContactCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group relative flex flex-col bg-white border border-dark/8 rounded-3xl p-7 md:p-8 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-dark/8 hover:border-dark/15"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Subtle background gradient on hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        style={{ background: `radial-gradient(circle at 20% 20%, ${accentColor}08 0%, transparent 60%)` }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      <div className="relative z-10 flex flex-col h-full gap-6">
        {/* Top row: icon + arrow */}
        <div className="flex items-start justify-between">
          {/* Icon box */}
          <motion.div
            className="w-14 h-14 rounded-2xl flex items-center justify-center border border-dark/8"
            style={{ backgroundColor: `${accentColor}12` }}
            animate={{ backgroundColor: hovered ? `${accentColor}20` : `${accentColor}12` }}
          >
            <div style={{ color: accentColor }} className="w-6 h-6 flex items-center justify-center">
              {icon}
            </div>
          </motion.div>

          {/* Arrow + copy */}
          <div className="flex items-center gap-2">
            {onCopy && (
              <motion.button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); onCopy(); }}
                className="flex items-center gap-1.5 text-[9px] font-bold tracking-widest text-dark/30 hover:text-accent uppercase transition-colors px-2 py-1 rounded-full hover:bg-accent/10"
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span key="check" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-1 text-accent">
                      <Check size={10} /> COPIED
                    </motion.span>
                  ) : (
                    <motion.span key="copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-1">
                      <Copy size={10} /> COPY
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            )}

            <motion.div
              className="w-9 h-9 rounded-full bg-dark/5 flex items-center justify-center"
              animate={{ 
                backgroundColor: hovered ? accentColor : 'rgba(11,11,11,0.05)',
                rotate: hovered ? 0 : -45
              }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight size={14} className="text-dark" style={{ color: hovered ? '#fff' : '#0b0b0b' }} />
            </motion.div>
          </div>
        </div>

        {/* Label */}
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] font-bold tracking-[0.2em] text-dark/40 uppercase">{label}</span>
          <span className="text-base md:text-lg font-bold text-dark break-all leading-snug group-hover:text-dark transition-colors">
            {displayValue}
          </span>
          <span className="text-xs text-dark/40 font-medium">{sublabel}</span>
        </div>
      </div>
    </motion.a>
  );
};

/* ─── Main Section ─────────────────────────────────────────────── */
export const ContactSection = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_DATA.email);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = CONTACT_DATA.email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const scrollToAI = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('ai')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <>
      {/* ══════════════ CONTACT SECTION ══════════════ */}
      <section id="contact" className="w-full bg-primary-bg py-24 md:py-36 px-6 md:px-12 border-t border-dark/5">
        <div className="w-full max-w-[1400px] mx-auto">

          {/* ── Section header ── */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 md:mb-24">
            <div>
              <motion.div
                className="flex items-center gap-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-3xl font-display font-black text-accent">07</span>
                <div className="w-12 h-[2px] bg-dark/10" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-dark/40">CONTACT</span>
              </motion.div>

              <motion.h2
                className="text-5xl md:text-7xl xl:text-8xl font-display font-black leading-[0.88] tracking-tight text-dark uppercase"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: 0.08 }}
              >
                LET'S<br />BUILD<br />SOMETHING.
              </motion.h2>
            </div>

            <motion.div
              className="flex flex-col gap-4 lg:items-end max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-base md:text-lg text-dark/60 font-medium leading-relaxed lg:text-right">
                Have a project, opportunity, or technical conversation in mind? Let's connect.
              </p>

              {/* Primary CTAs */}
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <motion.a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_DATA.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-dark text-white px-7 py-3.5 rounded-full text-xs font-bold tracking-[0.15em] uppercase hover:bg-accent transition-colors duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Mail size={14} />
                  GET IN TOUCH
                </motion.a>

                <motion.button
                  onClick={scrollToAI}
                  className="inline-flex items-center gap-2.5 border border-dark/20 text-dark px-7 py-3.5 rounded-full text-xs font-bold tracking-[0.15em] uppercase hover:border-accent hover:text-accent transition-colors duration-300 bg-transparent"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  ASK MY AI
                  <ChevronDown size={14} />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* ── Contact cards grid ── */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {/* Email — dedicated card with Copy + Gmail actions */}
            <motion.div variants={itemVariants}>
              <EmailCard email={CONTACT_DATA.email} copied={emailCopied} onCopy={handleCopyEmail} />
            </motion.div>

            {/* LinkedIn */}
            <motion.div variants={itemVariants}>
              <ContactCard
                icon={<LinkedInIcon className="w-6 h-6" />}
                label="LinkedIn"
                displayValue="shravannemane"
                sublabel="Connect on LinkedIn"
                href={CONTACT_DATA.linkedin}
                external
                accentColor="#0A66C2"
              />
            </motion.div>

            {/* GitHub */}
            <motion.div variants={itemVariants}>
              <ContactCard
                icon={<GitHubIcon className="w-6 h-6" />}
                label="GitHub"
                displayValue="shravannemane15"
                sublabel="View projects and code"
                href={CONTACT_DATA.github}
                external
                accentColor="#24292F"
              />
            </motion.div>
          </motion.div>

          {/* ── Bottom tagline ── */}
          <motion.div
            className="mt-16 pt-12 border-t border-dark/8 flex flex-col md:flex-row items-center justify-between gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-sm text-dark/40 font-medium text-center md:text-left">
              Open to internships, freelance projects, and AI research collaborations.
            </p>
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                className="w-2 h-2 rounded-full bg-accent"
              />
              <span className="text-[10px] font-bold tracking-widest text-dark/40 uppercase">Available for opportunities</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ══════════════ FOOTER ══════════════ */}
      <footer className="w-full bg-dark py-10 px-6 md:px-12">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-accent" />
              <span className="text-white font-display font-black tracking-widest text-base uppercase">
                {PORTFOLIO_DATA.name.split(' ')[0]}
              </span>
            </div>
            <span className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">
              AI & Data Science
            </span>
          </div>

          <span className="text-white/20 text-[10px] font-bold tracking-widest uppercase">© 2026</span>

          <div className="flex items-center gap-6">
            <a href={CONTACT_DATA.linkedin} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-white/40 uppercase hover:text-accent transition-colors">
              <LinkedInIcon className="w-3.5 h-3.5" /> LinkedIn
            </a>
            <a href={CONTACT_DATA.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-white/40 uppercase hover:text-accent transition-colors">
              <GitHubIcon className="w-3.5 h-3.5" /> GitHub
            </a>
            <a href={`mailto:${CONTACT_DATA.email}`}
              className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-white/40 uppercase hover:text-accent transition-colors">
              <Mail size={14} /> Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
