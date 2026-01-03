import React from 'react';

export type Language = 'en' | 'ar';
export type Theme = 'light' | 'dark';

export enum ViewState {
  PROFILE = 'PROFILE',
  EXPERIENCE = 'EXPERIENCE',
  PROJECTS = 'PROJECTS',
  CONTACT = 'CONTACT'
}

export enum ProjectCategory {
  AI_AGENTS = 'AI_AGENTS',
  AI_TOOLS = 'AI_TOOLS',
  FULLSTACK = 'FULLSTACK',
  ERP = 'ERP_BUSINESS',
  EXCEL = 'EXCEL',
  PRODUCTIVITY = 'PRODUCTIVITY',
  LEARNING = 'LEARNING'
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  context: string;
  problem: string;
  solution: string;
  impact: string;
  labels: {
    context: string;
    problem: string;
    solution: string;
    impact: string;
  }
}

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  techStack: string[];
  description: string;
  // Dual-view content
  technicalDescription: string;
  businessDescription: string;
  outcome: string;
  images: string[];
}

export interface NavItem {
  id: ViewState;
  label: string;
  icon: React.ComponentType<any>;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface AppContent {
  profile: {
    name: string;
    role: string;
    tagline: string;
    valueProp: string;
    openToAdvisory: string;
    ctaExperience: string;
    ctaProjects: string;
    start: string;
    skillsTitle: string; 
    skills: SkillGroup[];
  };
  experience: {
    title: string;
    subtitle: string;
    readImpact: string;
    items: ExperienceItem[];
  };
  projects: {
    title: string;
    subtitle: string;
    categories: Record<ProjectCategory, string>;
    items: ProjectItem[];
    outcomeLabel: string;
    viewDetailsLabel: string;
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    linkedinLabel: string;
    phoneLabel: string;
    whatsappLabel: string;
    githubLabel: string;
    connectLabel: string;
    location: string;
    saveCardLabel: string;
  };
  nav: {
    profile: string;
    experience: string;
    projects: string;
    contact: string;
  };
}