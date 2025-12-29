import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCategory, ProjectItem, AppContent } from '../types';
import { ArrowUpRight, Layers, X, ChevronLeft, ChevronRight, Maximize2, Zap, Code2 } from 'lucide-react';

// --- Carousel Component ---
const ImageCarousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [index, setIndex] = useState(0);

  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full aspect-video bg-black/20 rounded-2xl overflow-hidden mb-6 lg:mb-0 group shadow-2xl">
      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={index}
          src={images[index]}
          alt={`Project Slide ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
      </AnimatePresence>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />

      {images.length > 1 && (
        <>
          <button 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary border border-white/10"
          >
            <ChevronLeft size={20} className="rtl:rotate-180" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary border border-white/10"
          >
            <ChevronRight size={20} className="rtl:rotate-180" />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, i) => (
              <div 
                key={i}
                className={`w-2 h-2 rounded-full transition-all shadow-sm ${i === index ? 'bg-white w-6' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// --- Detailed Modal Component ---
const ProjectDetailsModal: React.FC<{ 
  project: ProjectItem; 
  onClose: () => void;
  labels: { outcome: string }
}> = ({ project, onClose, labels }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-end lg:items-center justify-center sm:p-4 lg:p-8 bg-black/60 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        layoutId={`project-container-${project.id}`}
        className="w-full sm:max-w-2xl lg:max-w-6xl h-[90vh] sm:h-auto sm:max-h-[90vh] bg-surface border-t sm:border border-borderSubtle rounded-t-3xl sm:rounded-3xl p-6 lg:p-10 overflow-hidden shadow-2xl relative flex flex-col lg:flex-row lg:gap-10"
        onClick={(e) => e.stopPropagation()}
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-50 p-2.5 bg-black/80 text-white rounded-full backdrop-blur-md hover:bg-red-500 transition-colors border border-white/20 shadow-lg group"
        >
          <X size={20} className="group-hover:scale-110 transition-transform" />
        </button>

        {/* Left Col: Image */}
        <div className="w-full lg:w-3/5 shrink-0 flex flex-col">
          <ImageCarousel images={project.images} />
          
          {/* Tech Stack in Desktop View - moved below image for better layout */}
          <div className="hidden lg:flex flex-wrap gap-2 mt-4">
             {project.techStack.map(tech => (
                <span key={tech} className="text-xs font-mono px-3 py-1.5 rounded-lg bg-surface border border-borderSubtle text-textSecondary flex items-center gap-1.5">
                  <Code2 size={12} /> {tech}
                </span>
              ))}
          </div>
        </div>

        {/* Right Col: Content */}
        <div className="flex flex-col gap-6 pb-20 lg:pb-0 lg:w-2/5 lg:h-full lg:overflow-y-auto no-scrollbar">
           <div>
              <div className="flex lg:hidden flex-wrap gap-2 mb-4">
                {project.techStack.map(tech => (
                  <span key={tech} className="text-[10px] font-mono px-2 py-1 rounded bg-borderSubtle/30 border border-borderSubtle text-textSecondary">
                    {tech}
                  </span>
                ))}
              </div>
              <motion.h2 layoutId={`project-title-${project.id}`} className="text-3xl md:text-4xl font-heading font-bold text-textPrimary mb-2 leading-tight">
                {project.title}
              </motion.h2>
           </div>

           <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10">
             <div className="flex items-center gap-2 mb-2 text-primary">
               <Zap size={18} className="fill-current" />
               <span className="text-xs font-bold uppercase tracking-wider">{labels.outcome}</span>
             </div>
             <p className="text-textPrimary font-semibold text-lg md:text-xl leading-snug">{project.outcome}</p>
           </div>

           <div className="prose prose-invert max-w-none text-textSecondary leading-relaxed space-y-4">
             <p className="text-base md:text-lg text-textPrimary font-medium">{project.description}</p>
             <div className="w-full h-px bg-borderSubtle" />
             <p className="text-sm md:text-base opacity-90">{project.longDescription}</p>
           </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

// --- Main Projects View ---
export const ProjectsView: React.FC<{ content: AppContent['projects'] }> = ({ content }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(ProjectCategory.ERP);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  
  const categoryKeys: ProjectCategory[] = [
    ProjectCategory.ERP,
    ProjectCategory.AI,
    ProjectCategory.PRODUCTIVITY,
    ProjectCategory.LEARNING
  ];

  const filteredProjects = content.items.filter(p => p.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      className="h-full w-full flex flex-col pt-8 px-4 md:px-8 max-w-7xl mx-auto relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-textPrimary mb-2">{content.title}</h2>
          <p className="text-textSecondary text-sm md:text-base max-w-lg">
            Selected works demonstrating enterprise scale, automation, and technical depth.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categoryKeys.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border backdrop-blur-sm ${
                activeCategory === cat 
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25' 
                  : 'bg-surface/50 border-borderSubtle text-textSecondary hover:border-textSecondary hover:bg-surface'
              }`}
            >
              {content.categories[cat]}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-32 no-scrollbar px-1 -mx-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                outcomeLabel={content.outcomeLabel} 
                viewDetailsLabel={content.viewDetailsLabel}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailsModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
            labels={{ outcome: content.outcomeLabel }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- Project Card Component ---
const ProjectCard: React.FC<{ 
  project: ProjectItem; 
  index: number; 
  outcomeLabel: string;
  viewDetailsLabel: string;
  onClick: () => void;
}> = ({ project, index, outcomeLabel, viewDetailsLabel, onClick }) => {
  return (
    <motion.div
      layoutId={`project-container-${project.id}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className="group relative bg-surface border border-borderSubtle rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/50 transition-all duration-500 cursor-pointer flex flex-col h-full"
    >
      {/* Image Section */}
      <div className="h-56 md:h-64 w-full relative overflow-hidden shrink-0">
        <motion.img 
          layoutId={`project-image-${project.id}`}
          src={project.images[0]} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:filter group-hover:contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent opacity-90 transition-opacity group-hover:opacity-60" />
        
        {/* Outcome Badge - Hooking Element */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
           <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-xl px-3 py-2 max-w-[85%]">
             <div className="flex items-center gap-1.5 text-secondary mb-0.5">
               <Zap size={12} className="fill-current" />
               <span className="text-[10px] font-bold uppercase tracking-wider">{outcomeLabel}</span>
             </div>
             <p className="text-white text-xs font-semibold leading-tight line-clamp-2">{project.outcome}</p>
           </div>
        </div>

        {/* View Case Study Button - Appears on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
          <div className="px-5 py-2.5 bg-white text-black rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg flex items-center gap-2">
            {viewDetailsLabel} <ArrowUpRight size={16} />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow relative">
        <div className="mb-3">
           <motion.h3 layoutId={`project-title-${project.id}`} className="text-xl font-bold text-textPrimary mb-2 group-hover:text-primary transition-colors">
             {project.title}
           </motion.h3>
           
           {/* Tech Stack Tags - Visible immediately for recruiters */}
           <div className="flex flex-wrap gap-2 mb-3">
            {project.techStack.slice(0, 3).map(tech => (
              <span key={tech} className="text-[10px] font-mono px-2 py-1 rounded bg-borderSubtle/50 text-textSecondary border border-transparent group-hover:border-borderSubtle transition-colors">
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
               <span className="text-[10px] font-mono px-2 py-1 rounded bg-borderSubtle/30 text-textSecondary opacity-60">+{project.techStack.length - 3}</span>
            )}
           </div>
        </div>

        <p className="text-textSecondary text-sm leading-relaxed line-clamp-3 mb-4">{project.description}</p>

        {/* Decorative subtle line that lights up on hover */}
        <div className="mt-auto pt-4 flex justify-end">
           <div className="w-8 h-1 rounded-full bg-borderSubtle group-hover:bg-primary group-hover:w-16 transition-all duration-500" />
        </div>
      </div>
    </motion.div>
  );
};