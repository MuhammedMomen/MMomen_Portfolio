import React from 'react';
import { motion } from 'framer-motion';
import { ViewState, AppContent } from '../types';
import { User, Briefcase, Code, Mail } from 'lucide-react';

interface NavigationProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  content: AppContent['nav'];
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, onNavigate, content }) => {
  const navItems = [
    { id: ViewState.PROFILE, icon: User, label: content.profile },
    { id: ViewState.EXPERIENCE, icon: Briefcase, label: content.experience },
    { id: ViewState.PROJECTS, icon: Code, label: content.projects },
    { id: ViewState.CONTACT, icon: Mail, label: content.contact },
  ];

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="flex items-center gap-1 bg-surface/90 backdrop-blur-md border border-borderSubtle rounded-2xl p-2 shadow-2xl"
      >
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="relative px-5 py-3 rounded-xl flex flex-col items-center justify-center transition-all duration-300 group"
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-textPrimary/5 rounded-xl border border-textPrimary/10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <item.icon 
                size={20} 
                className={`z-10 transition-colors duration-300 ${isActive ? 'text-primary' : 'text-textSecondary group-hover:text-textPrimary'}`} 
              />
              <span className={`text-[10px] mt-1 font-medium z-10 transition-colors duration-300 ${isActive ? 'text-textPrimary' : 'text-textSecondary'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </motion.div>
    </div>
  );
};