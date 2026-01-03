import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_DATA_STATIC } from '../constants';
import { AppContent } from '../types';
import { Mail, Linkedin, MapPin, Copy, Check, ArrowUpRight, Phone, MessageCircle, Github, QrCode } from 'lucide-react';

export const ContactView: React.FC<{ content: AppContent['contact'] }> = ({ content }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTACT_DATA_STATIC.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Generate rich vCard Content including Social Links and Professional Info
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Muhammed Momen
N:;Muhammed Momen;;;
TITLE:Lead ERP Financial Consultant & AI Architect
ORG:Ultimate Solutions
TEL;TYPE=CELL:${CONTACT_DATA_STATIC.phone}
EMAIL;TYPE=INTERNET:${CONTACT_DATA_STATIC.email}
URL;TYPE=WEBSITE:https://${CONTACT_DATA_STATIC.website}
URL;TYPE=LINKEDIN:https://${CONTACT_DATA_STATIC.linkedin}
URL;TYPE=GITHUB:https://${CONTACT_DATA_STATIC.github}
ADR;TYPE=WORK:;;${content.location};;;;
NOTE:Merging Financial Expertise with Agentic AI & Python Automation.
END:VCARD`;

  const vcardUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(vcard)}`;

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, type: 'spring' }
    },
    exit: { opacity: 0, scale: 1.05, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      className="h-full w-full flex flex-col items-center px-4 pt-4 pb-24 overflow-y-auto no-scrollbar max-w-lg md:max-w-3xl mx-auto text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-blue-700 rounded-3xl flex items-center justify-center mb-6 shadow-2xl shadow-primary/20 rotate-3 rtl:-rotate-3 shrink-0">
        <Mail size={28} className="text-white md:w-10 md:h-10" />
      </div>

      <h2 className="text-2xl md:text-4xl font-heading font-bold text-textPrimary mb-2">{content.title}</h2>
      <p className="text-textSecondary mb-8 leading-relaxed text-sm md:text-lg max-w-lg">
        {content.subtitle}
      </p>

      <div className="w-full space-y-3">
        {/* Email Card */}
        <button 
          onClick={handleCopy}
          className="w-full flex items-center justify-between p-3 md:p-5 bg-surface border border-borderSubtle rounded-2xl hover:bg-borderSubtle/50 transition-colors group"
        >
          <div className="flex items-center gap-3 md:gap-4">
            <div className="p-2 bg-background rounded-xl text-textSecondary group-hover:text-textPrimary transition-colors">
              <Mail size={18} className="md:w-5 md:h-5" />
            </div>
            <div className="text-start">
              <span className="block text-[10px] md:text-xs text-textSecondary uppercase tracking-wider">{content.emailLabel}</span>
              <span className="text-textPrimary font-medium text-sm md:text-lg">{CONTACT_DATA_STATIC.email}</span>
            </div>
          </div>
          <div className="text-textSecondary group-hover:text-primary transition-colors">
            {copied ? <Check size={18} /> : <Copy size={18} />}
          </div>
        </button>

        {/* Action Grid: Phone & WhatsApp */}
        <div className="grid grid-cols-2 gap-3">
          <a 
            href={`tel:${CONTACT_DATA_STATIC.phone}`}
            className="flex flex-col items-center justify-center p-4 bg-surface border border-borderSubtle rounded-2xl hover:border-primary/50 hover:bg-primary/5 transition-all group"
          >
            <div className="p-2 mb-2 bg-background rounded-full text-textSecondary group-hover:text-primary transition-colors">
              <Phone size={20} />
            </div>
            <span className="text-xs text-textSecondary mb-1 uppercase tracking-wide">{content.phoneLabel}</span>
            <span className="text-sm font-semibold text-textPrimary">Call</span>
          </a>

          <a 
            href={`https://wa.me/${CONTACT_DATA_STATIC.whatsapp.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 bg-surface border border-borderSubtle rounded-2xl hover:border-green-500/50 hover:bg-green-500/5 transition-all group"
          >
            <div className="p-2 mb-2 bg-background rounded-full text-textSecondary group-hover:text-green-500 transition-colors">
              <MessageCircle size={20} />
            </div>
            <span className="text-xs text-textSecondary mb-1 uppercase tracking-wide">{content.whatsappLabel}</span>
            <span className="text-sm font-semibold text-textPrimary">Message</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
           <a 
            href={`https://${CONTACT_DATA_STATIC.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 md:p-4 bg-surface border border-borderSubtle rounded-2xl hover:bg-borderSubtle/50 transition-colors group"
          >
            <Linkedin size={20} className="text-[#0077b5]" />
            <div className="flex-1 text-start">
              <span className="block text-[10px] text-textSecondary uppercase">{content.linkedinLabel}</span>
              <span className="text-textPrimary font-medium text-sm">LinkedIn</span>
            </div>
            <ArrowUpRight size={16} className="text-textSecondary group-hover:text-primary rtl:rotate-[270deg]" />
          </a>

          <a 
            href={`https://${CONTACT_DATA_STATIC.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 md:p-4 bg-surface border border-borderSubtle rounded-2xl hover:bg-borderSubtle/50 transition-colors group"
          >
            <Github size={20} className="text-textPrimary" />
            <div className="flex-1 text-start">
              <span className="block text-[10px] text-textSecondary uppercase">{content.githubLabel}</span>
              <span className="text-textPrimary font-medium text-sm">GitHub</span>
            </div>
            <ArrowUpRight size={16} className="text-textSecondary group-hover:text-primary rtl:rotate-[270deg]" />
          </a>
        </div>

        {/* QR Code Section */}
        <div className="mt-6 p-6 bg-white rounded-3xl border border-borderSubtle shadow-inner flex flex-col items-center gap-4">
          <div className="p-2 bg-white rounded-xl shadow-lg border border-gray-100">
             <img src={vcardUrl} alt="Contact QR Code" className="w-40 h-40 mix-blend-multiply" />
          </div>
          <div className="text-center">
             <div className="flex items-center justify-center gap-2 text-gray-900 font-bold mb-1">
               <QrCode size={18} />
               <span>{content.saveCardLabel}</span>
             </div>
             <p className="text-xs text-gray-500 max-w-[200px] mx-auto">
               Scan with your phone camera to instantly save contact details.
             </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};