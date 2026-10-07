import { motion } from 'framer-motion';

interface AboutFocusProps {
  currentFocus: string[];
}

export const AboutFocus = ({ currentFocus }: AboutFocusProps) => {
  return (
    <div className="w-full">
      <h4 className="text-[10px] font-bold tracking-[0.25em] text-dark/40 uppercase mb-5">
        Current Focus
      </h4>
      <div className="flex flex-wrap gap-2">
        {currentFocus.map((item, idx) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.07 }}
            className="text-[11px] font-bold tracking-widest bg-dark text-white/80 px-4 py-2 rounded-full uppercase hover:bg-accent hover:text-white transition-colors duration-200 cursor-default"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );
};
