import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ViewState, Language, Theme } from './types';
import { Navigation } from './components/Navigation';
import { ProfileView } from './components/ProfileView';
import { ExperienceView } from './components/ExperienceView';
import { ProjectsView } from './components/ProjectsView';
import { ContactView } from './components/ContactView';
import { getContent } from './constants';
import { Moon, Sun, Languages } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.PROFILE);
  const [lang, setLang] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>('dark');
  const scrollRef = React.useRef<HTMLDivElement>(null);
  
  const content = getContent(lang);

  // Apply Theme and Direction updates
  useEffect(() => {
    const root = document.documentElement;
    
    // Theme
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Language Direction
    if (lang === 'ar') {
      root.setAttribute('dir', 'rtl');
      root.setAttribute('lang', 'ar');
    } else {
      root.setAttribute('dir', 'ltr');
      root.setAttribute('lang', 'en');
    }
  }, [theme, lang]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');

  // Auto-scroll to top on view change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case ViewState.PROFILE:
        return <ProfileView onNavigate={setCurrentView} content={content.profile} />;
      case ViewState.EXPERIENCE:
        return <ExperienceView content={content.experience} />;
      case ViewState.PROJECTS:
        return <ProjectsView content={content.projects} />;
      case ViewState.CONTACT:
        return <ContactView content={content.contact} />;
      default:
        return <ProfileView onNavigate={setCurrentView} content={content.profile} />;
    }
  };

  return (
    <div 
      ref={scrollRef}
      className="relative w-full h-[100dvh] bg-background text-textPrimary font-sans overflow-x-hidden overflow-y-auto selection:bg-primary/30 no-scrollbar scroll-smooth"
    >
      
      {/* Background ambient gradient */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Settings Toggles - Top Corner */}
      <div className="fixed top-4 right-4 rtl:right-auto rtl:left-4 z-50 flex gap-2">
         <button 
          onClick={toggleLang}
          className="p-2 bg-surface/50 backdrop-blur-md border border-borderSubtle rounded-full text-textSecondary hover:text-primary transition-colors hover:bg-surface"
          aria-label="Switch Language"
        >
          <div className="flex items-center gap-1 px-1 font-mono text-xs font-bold">
            <Languages size={16} />
            <span>{lang === 'en' ? 'AR' : 'EN'}</span>
          </div>
        </button>

        <button 
          onClick={toggleTheme}
          className="p-2 bg-surface/50 backdrop-blur-md border border-borderSubtle rounded-full text-textSecondary hover:text-primary transition-colors hover:bg-surface"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
        </button>
      </div>

      {/* Main Content Area */}
      <main className="w-full min-h-screen pb-24 pt-16 sm:pt-12">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentView + lang} // Remount on lang change to reset layout animations
            className="w-full h-full"
            initial={{ opacity: 0, filter: 'blur(8px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(8px)' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Navigation */}
      <Navigation currentView={currentView} onNavigate={setCurrentView} content={content.nav} />
    </div>
  );
};

export default App;