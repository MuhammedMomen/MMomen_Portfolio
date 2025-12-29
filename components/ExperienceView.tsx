import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { ExperienceItem, AppContent } from '../types';

const ExpandedCard: React.FC<{ item: ExperienceItem; onClose: () => void }> = ({ item, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: containerRef });

  const y1 = useTransform(scrollY, [0, 500], [0, 250]); 
  const y2 = useTransform(scrollY, [0, 500], [0, 150]);
  const rotate1 = useTransform(scrollY, [0, 500], [0, 45]);

  return (
    <motion.div
      layoutId={`card-${item.id}`}
      ref={containerRef}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      initial={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
      animate={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
      className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl bg-surface border border-borderSubtle rounded-3xl p-6 md:p-10 relative max-h-[85vh] overflow-y-auto no-scrollbar"
    >
      {/* Parallax Background Elements - direction aware positions */}
      <motion.div 
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-[-10%] right-[-20%] rtl:right-auto rtl:left-[-20%] w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none z-0"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[30%] left-[-20%] rtl:left-auto rtl:right-[-20%] w-56 h-56 bg-secondary/5 rounded-full blur-3xl pointer-events-none z-0"
      />

      <button 
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="sticky top-0 right-0 rtl:right-auto rtl:left-0 ms-auto block mb-4 p-2 bg-surface/80 backdrop-blur-md rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-textSecondary z-20 border border-black/5 dark:border-white/5 shadow-lg"
      >
        <X size={20} />
      </button>

      <div className="relative z-10 text-start">
        <span className="text-sm font-mono text-primary mb-2 block">{item.period}</span>
        <h3 className="text-3xl md:text-4xl font-bold text-textPrimary mb-2">{item.role}</h3>
        <h4 className="text-xl md:text-2xl text-textSecondary mb-8 md:mb-12">{item.company}</h4>

        <div className="space-y-6 md:space-y-8">
          <div className="p-4 md:p-6 rounded-xl bg-surface/40 border border-borderSubtle backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="text-xs uppercase tracking-wider text-textSecondary font-bold block mb-2 relative z-10">{item.labels.problem}</span>
            <p className="text-textPrimary text-lg relative z-10">{item.problem}</p>
          </div>

          <div className="p-4 md:p-6 rounded-xl bg-surface/40 border border-borderSubtle backdrop-blur-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 rtl:left-0 rtl:right-auto w-20 h-20 bg-primary/5 rounded-bl-full rtl:rounded-bl-none rtl:rounded-br-full blur-xl" />
            <span className="text-xs uppercase tracking-wider text-textSecondary font-bold block mb-2 relative z-10">{item.labels.solution}</span>
            <p className="text-textPrimary text-lg relative z-10">{item.solution}</p>
          </div>

          <div className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 backdrop-blur-sm relative overflow-hidden">
             <div className="absolute -bottom-10 -right-10 rtl:-left-10 rtl:right-auto w-32 h-32 bg-green-500/10 rounded-full blur-2xl" />
            <span className="text-xs uppercase tracking-wider text-secondary font-bold block mb-2 relative z-10">{item.labels.impact}</span>
            <p className="text-textPrimary font-medium text-xl relative z-10">{item.impact}</p>
          </div>
          
          <div className="h-12" />
        </div>
      </div>
    </motion.div>
  );
};

export const ExperienceView: React.FC<{ content: AppContent['experience'] }> = ({ content }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -50, rtl: { x: 50 }, transition: { duration: 0.3 } }
  };

  const selectedItem = content.items.find(item => item.id === selectedId);

  return (
    <motion.div 
      className="h-full w-full flex flex-col justify-center relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="px-6 md:px-12 mb-4">
        <h2 className="text-2xl md:text-4xl font-heading font-bold text-textPrimary">{content.title}</h2>
        <p className="text-textSecondary text-sm md:text-base">{content.subtitle}</p>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory px-6 md:px-12 gap-4 md:gap-8 pb-12 pt-4 no-scrollbar items-center min-h-[420px] md:min-h-[500px]">
        {content.items.map((item) => (
          <motion.div
            key={item.id}
            layoutId={`card-${item.id}`}
            onClick={() => setSelectedId(item.id)}
            className="snap-center shrink-0 w-[85vw] md:w-[450px] h-[360px] md:h-[420px] bg-surface border border-borderSubtle rounded-3xl p-6 md:p-8 flex flex-col justify-between cursor-pointer relative overflow-hidden group hover:border-primary/50 transition-colors text-start"
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 rtl:-ml-10 -mt-10 transition-transform duration-500 group-hover:scale-125" />

            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 rounded-lg bg-borderSubtle/50 text-textSecondary text-xs font-mono">
                  {item.period}
                </span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-textPrimary mb-1 leading-tight">{item.role}</h3>
              <p className="text-primary font-medium text-sm md:text-base mb-6">{item.company}</p>
              
              <div className="space-y-3">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-wider text-textSecondary font-bold">{item.labels.context}</span>
                  <p className="text-sm md:text-base text-textPrimary leading-snug">{item.context}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-wider text-textSecondary font-bold">{item.labels.problem}</span>
                  <p className="text-sm md:text-base text-textSecondary line-clamp-2">{item.problem}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center text-primary text-sm font-semibold mt-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
              {content.readImpact} <ArrowRight size={16} className="ms-2 rtl:rotate-180" />
            </div>
          </motion.div>
        ))}
        <div className="w-2 shrink-0" />
      </div>

      <AnimatePresence>
        {selectedId && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-40 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
            <ExpandedCard item={selectedItem} onClose={() => setSelectedId(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};