import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ViewState, AppContent } from '../types';

interface ProfileViewProps {
  onNavigate: (view: ViewState) => void;
  content: AppContent['profile'];
}

export const ProfileView: React.FC<ProfileViewProps> = ({ onNavigate, content }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, filter: 'blur(4px)' },
    visible: { 
      y: 0, 
      opacity: 1, 
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <motion.div 
      className="flex flex-col items-start justify-center min-h-full px-6 py-10 max-w-lg md:max-w-3xl lg:max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div variants={itemVariants} className="mb-4 lg:mb-6">
        <span className="px-3 py-1 lg:px-4 lg:py-1.5 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs lg:text-sm font-mono tracking-wider border border-primary/20">
          {content.openToAdvisory}
        </span>
      </motion.div>

      <motion.h1 
        variants={itemVariants} 
        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-textPrimary leading-tight mb-4 lg:mb-6"
      >
        {content.name}
      </motion.h1>
      
      <motion.h2 
        variants={itemVariants} 
        className="text-lg sm:text-xl md:text-3xl text-textSecondary font-medium mb-6 lg:mb-10"
      >
        {content.role}
      </motion.h2>

      <motion.div 
        variants={itemVariants} 
        className="w-12 md:w-20 h-1 md:h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mb-6 lg:mb-12 rtl:-scale-x-100" 
      />

      <motion.p 
        variants={itemVariants} 
        className="text-base sm:text-lg md:text-xl lg:text-2xl text-textSecondary leading-relaxed mb-8 lg:mb-16 border-s-2 md:border-s-4 border-borderSubtle ps-4 md:ps-6 max-w-2xl"
      >
        {content.valueProp}
      </motion.p>

      <motion.div variants={itemVariants} className="flex flex-col w-full gap-4 sm:flex-row sm:w-auto mb-12">
        <button 
          onClick={() => onNavigate(ViewState.EXPERIENCE)}
          className="group flex items-center justify-between sm:justify-center gap-3 px-6 py-3.5 md:px-8 md:py-5 bg-primary text-white rounded-2xl font-semibold shadow-lg shadow-primary/20 hover:bg-blue-600 transition-all active:scale-[0.98] text-sm md:text-lg"
        >
          <span>{content.ctaExperience}</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
        </button>
        
        <button 
          onClick={() => onNavigate(ViewState.PROJECTS)}
          className="group flex items-center justify-between sm:justify-center gap-3 px-6 py-3.5 md:px-8 md:py-5 bg-surface border border-borderSubtle text-textPrimary rounded-2xl font-medium hover:bg-borderSubtle/50 transition-all active:scale-[0.98] text-sm md:text-lg"
        >
          <span>{content.ctaProjects}</span>
          <ArrowRight size={18} className="text-textSecondary group-hover:text-textPrimary group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all rtl:rotate-180" />
        </button>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="flex justify-center w-full opacity-30 pointer-events-none pb-10"
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-widest hidden md:block">{content.start}</span>
          <ChevronDown size={16} />
        </div>
      </motion.div>
    </motion.div>
  );
};