import { ProjectCategory, AppContent, Language } from './types';

const DATA_EN: AppContent = {
  profile: {
    name: "Mido",
    role: "Lead ERP Financial Consultant & AI Architect",
    tagline: "Merging Financial Expertise with Agentic AI & Python Automation.",
    valueProp: "Highly analytical professional leveraging data and AI to solve complex business problems. I bridge the gap between financial stakeholders and technical teams, leading ERP implementations while building custom AI agents to automate the un-automatable.",
    openToAdvisory: "OPEN TO ADVISORY",
    ctaExperience: "View Track Record",
    ctaProjects: "See AI Solutions",
    start: "Start",
    skillsTitle: "Core Competencies",
    skills: [
      {
        category: "AI & Engineering",
        items: ["Python", "Agentic AI", "CrewAI", "LangChain", "RAG Systems", "Flet UI"]
      },
      {
        category: "ERP & Finance",
        items: ["Oracle EBS", "Financial Analysis", "Accounting Principles", "ERP Implementation", "Business Process Mapping"]
      },
      {
        category: "Data & Tools",
        items: ["SQL", "Power BI", "Tableau", "Excel VBA", "Data Modeling"]
      }
    ]
  },
  experience: {
    title: "Career Timeline",
    subtitle: "Swipe to see professional progression",
    readImpact: "View Impact",
    items: [
      {
        id: 'exp-1',
        role: "Lead ERP Financial Consultant",
        company: "Ultimate Solutions",
        period: "Aug 2021 — Present",
        context: "Team Leadership & AI Innovation",
        problem: "Disconnect between business needs and technical ERP implementation.",
        solution: "Led the financial consulting team and developed an internal RAG AI chat tool.",
        impact: "Established new KPIs, enhanced cross-dept collaboration, and automated info retrieval.",
        labels: { context: "Context", problem: "Challenge", solution: "Strategy", impact: "Key Impact" }
      },
      {
        id: 'exp-2',
        role: "ERP Senior Financial Consultant",
        company: "Ultimate Solutions",
        period: "Dec 2020 — Aug 2021",
        context: "System Localization & Simulation",
        problem: "Complex accounting concepts were difficult for non-finance users to grasp.",
        solution: "Created a multilingual interactive Excel simulator for journal entries.",
        impact: "Simplified user training across 4 languages (EN, FR, AR, TR) and improved adoption.",
        labels: { context: "Context", problem: "Challenge", solution: "Strategy", impact: "Key Impact" }
      },
      {
        id: 'exp-3',
        role: "Senior Fixed Assets Analyst",
        company: "e& Etisalat",
        period: "Jan 2019 — Dec 2020",
        context: "Network Fixed Assets (NFA) Project",
        problem: "Discrepancies between finance records, technical data, and physical counts.",
        solution: "Executed rigorous reconciliation and data mapping for millions of assets.",
        impact: "Identified and closed a 60 Million EGP gap. Saved outsourcing costs.",
        labels: { context: "Context", problem: "Challenge", solution: "Strategy", impact: "Key Impact" }
      },
      {
        id: 'exp-4',
        role: "GL & AP Accountant",
        company: "Raya Holding",
        period: "Apr 2017 — Feb 2019",
        context: "High-Volume Financial Ops",
        problem: "Monthly closing pressure for 6,000+ employees and foreign subsidiaries.",
        solution: "Streamlined AP cycles and managed intercompany eliminations.",
        impact: "Ensured 100% tax compliance and timely monthly closings.",
        labels: { context: "Context", problem: "Challenge", solution: "Strategy", impact: "Key Impact" }
      }
    ]
  },
  projects: {
    title: "Technical Portfolio",
    outcomeLabel: "Business Outcome",
    viewDetailsLabel: "Deep Dive",
    categories: {
      [ProjectCategory.AI]: "AI Agents & RAG",
      [ProjectCategory.PRODUCTIVITY]: "Automation Tools",
      [ProjectCategory.ERP]: "ERP & Finance",
      [ProjectCategory.LEARNING]: "Data Science & Certs",
    },
    items: [
      // --- AI ---
      {
        id: 'ai-1',
        title: "FatooraX - Agentic Invoice Processor",
        category: ProjectCategory.AI,
        techStack: ["Computer Vision", "CrewAI", "Vector Search", "FastAPI"],
        description: "Smart tool using AI vision models to extract and validate data from hardcopy invoices.",
        longDescription: "A cutting-edge solution (FatooraX) that applies agentic AI techniques to verify invoice amounts through logic checks. It implements multi-layered matching (fuzzy logic, semantic vector search) to validate data against database records with configurable acceptance thresholds.",
        outcome: "Automated error-checking and data entry for physical invoices.",
        images: [
          "https://images.unsplash.com/photo-1633419461186-7d75076e82d7?q=80&w=800&auto=format&fit=crop", 
          "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-6',
        title: "AI Theme Manager",
        category: ProjectCategory.AI,
        techStack: ["Python", "Flet", "Gemini 2.0", "LangChain"],
        description: "Real-time AI-driven design system for instant UI theming.",
        longDescription: "A sophisticated project bridging static UI styling and dynamic, AI-orchestrated environments. It allows an AI agent to generate and apply complex application themes (colors, typography, spatial design) in real-time, effectively allowing the AI to 'redesign' itself based on context.",
        outcome: "Enabled real-time, context-aware UI adaptation.",
        images: [
          "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-7',
        title: "Beneish M-Score AI",
        category: ProjectCategory.AI,
        techStack: ["Python", "Flet", "Pandas", "PDF Parsing"],
        description: "AI-powered financial forensics tool for detecting earnings manipulation.",
        longDescription: "An advanced desktop application that leverages LLMs to extract financial data from complex PDF reports and automatically calculates the Beneish M-Score. It instantly flags potential accounting anomalies and risk of manipulation with detailed ratio breakdowns.",
        outcome: "Automated forensic analysis of corporate financial statements.",
        images: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-8',
        title: "CoA-Gen Agent",
        category: ProjectCategory.AI,
        techStack: ["FastAPI", "Oracle PL/SQL", "Gemini Flash"],
        description: "AI Agent that instanly generates industry-specific Chart of Accounts (CoA).",
        longDescription: "Revolutionizes the ERP presales process by using Generative AI to create complete, hierarchical, and bilingual (English/Arabic) Chart of Accounts in seconds. Maps directly to Oracle ERP schemas, eliminating days of manual configuration work.",
        outcome: "Reduced ERP discovery phase setup from days to seconds.",
        images: [
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-9',
        title: "Schema AI",
        category: ProjectCategory.AI,
        techStack: ["Next.js", "React Flow", "Genkit", "Tailwind"],
        description: "Generative Database Design Studio for architects and developers.",
        longDescription: "A modern web-based tool for visual database design, powered by AI. Users can generate entity-relationship diagrams (ERDs) from text prompts, analyze schemas for normalization issues, and export SQL DDL or ORM code (FastAPI/SQLAlchemy) automatically.",
        outcome: "Accelerated database prototyping and schema validation.",
        images: [
          "https://images.unsplash.com/photo-1558494949-ef526b01201b?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-10',
        title: "aQil - Study with AI",
        category: ProjectCategory.AI,
        techStack: ["Flet", "LangChain", "Gemini", "SQLite"],
        description: "Personal AI Tutor that turns PDFs and YouTube videos into quizzes and flashcards.",
        longDescription: "An educational platform utilizing multimodal AI to transform diverse learning materials (documents, video lectures) into interactive study aids. Features smart quizzes, dynamic flashcards, and structured summaries, with native support for Arabic content.",
        outcome: "Democratized access to personalized tutoring for students.",
        images: [
          "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-11',
        title: "Labels AI (i18n Tool)",
        category: ProjectCategory.AI,
        techStack: ["Python AST", "Gemini Pro", "Flet"],
        description: "Dev tool for automated UI string extraction and localization.",
        longDescription: "Solves the pain of manual internationalization by parsing Python source code (AST) to extract UI strings and using Generative AI to translate them into multiple languages JSON files. Features a 'Dev-First' dark UI and real-time synchronization.",
        outcome: "Reduced app localization time from days to minutes.",
        images: [
          "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-2',
        title: "Enterprise RAG Assistant",
        category: ProjectCategory.AI,
        techStack: ["LangChain", "NLP", "Python", "SQL"],
        description: "Chat-to-data AI tool for querying structured (SQL) and unstructured (PDF) data.",
        longDescription: "Designed an internal AI tool enabling 'Chat to Database & Files'. It processes multiple data sources (Databases, PDFs, Text Files) and provides multi-language answers via a bilingual UI. It solves the information retrieval bottleneck in complex ERP environments.",
        outcome: "Instant retrieval of financial policies and database records.",
        images: [
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-3',
        title: "Financial Ratio Analyzer",
        category: ProjectCategory.AI,
        techStack: ["Generative AI", "PDF Parsing", "Pandas"],
        description: "Web tool utilizing GenAI to automate analysis of PDF financial statements.",
        longDescription: "Streamlines the process of extracting key financial data from annual reports and automatically calculates liquidity, profitability, and solvency ratios. Provides a rapid, insightful overview of a company's financial health without manual data entry.",
        outcome: "Reduced financial statement analysis time by 90%.",
        images: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-4',
        title: "Predictive Sales Agent",
        category: ProjectCategory.AI,
        techStack: ["Python", "Scikit-Learn", "Flet GUI"],
        description: "Machine Learning model for forecasting sales trends and inventory needs.",
        longDescription: "Developed a predictive model using Scikit-Learn to analyze historical sales data and forecast future demand. Wrapped in a user-friendly GUI using the Flet framework, allowing non-technical staff to run forecasts and adjust parameters dynamically.",
        outcome: "Enhanced inventory planning accuracy by 25%.",
        images: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-5',
        title: "TeamFlow - AI Issue Tracker",
        category: ProjectCategory.AI,
        techStack: ["Next.js", "Genkit AI", "shadcn/ui", "Recharts"],
        description: "Modern AI-powered issue tracking system with natural language processing for software teams.",
        longDescription: "TeamFlow minimizes administrative overhead by leveraging AI to automatically categorize issues, suggest assignees, and generate unique issue codes. Features include AI-assisted issue creation, insightful dashboards with KPIs, Kanban board view, and dynamic user/system management. Built with RTL support for Arabic-speaking teams.",
        outcome: "Reduced issue creation time by 70% with AI auto-population.",
        images: [
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
        ]
      },

      // --- ERP ---
      {
        id: 'erp-1',
        title: "NFA Reconciliation",
        category: ProjectCategory.ERP,
        techStack: ["SAP/Oracle", "Data Mapping", "Excel Macros"],
        description: "Network Fixed Assets project for a major telecom provider (Etisalat).",
        longDescription: "Reconciled fixed asset records across finance systems, technical registers, and physical counts. Identified and resolved variances between financial, technical, and physical records for millions of assets.",
        outcome: "Closed 60 Million EGP gap & saved outsourcing costs.",
        images: [
          "https://images.unsplash.com/photo-1558494949-ef526b01201b?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1649174984260-1e5212b033d4?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'erp-2',
        title: "ERP Implementation Lead",
        category: ProjectCategory.ERP,
        techStack: ["Oracle EBS", "Onyx ERP", "SQL"],
        description: "Leading financial consultancy for ERP rollouts at Ultimate Solutions.",
        longDescription: "Directed a team of consultants to align software features with financial standards. Acted as subject matter expert offering insights to developers on financial workflows, regulatory requirements, and documentation standards.",
        outcome: "Successful delivery of complex multi-module ERP systems.",
        images: [
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'erp-3',
        title: "Mass Payroll Engine",
        category: ProjectCategory.ERP,
        techStack: ["SQL", "ERP Integration", "Excel VBA"],
        description: "Automated payroll allocation and tax processing for 6,000+ employees.",
        longDescription: "Engineered a streamlined payroll processing system at Raya Holding. Handled complex multi-site allocations and ensured 100% accuracy in local tax preparation and submission, significantly reducing monthly closing pressure.",
        outcome: "Zero delays in monthly payroll for 6k workforce.",
        images: [
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'erp-4',
        title: "Costing Logic Optimizer",
        category: ProjectCategory.ERP,
        techStack: ["Process Mapping", "SQL Analysis", "Oracle"],
        description: "Diagnostic and repair of inventory costing inefficiencies.",
        longDescription: "Conducted a deep-dive audit of inventory costing systems at Etisalat. Identified logic gaps causing financial discrepancies and implemented robust solutions to ensure accurate inventory valuation and compliance.",
        outcome: "Restored accuracy to mission-critical inventory data.",
        images: [
          "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1535378437327-10ffb4146750?q=80&w=800&auto=format&fit=crop"
        ]
      },

      // --- Productivity ---
      {
        id: 'prod-3',
        title: "LinguaBlocks",
        category: ProjectCategory.PRODUCTIVITY,
        techStack: ["React", "AI Integration", "Local-First", "Vibe Coding"],
        description: "AI-driven application for structured, multilingual technical documentation automation.",
        longDescription: "A powerful local-first application designed to streamline the creation of structured user manuals. It empowers technical writers to build consistent 'Memory Blocks', assemble them via drag-and-drop, and leverage AI to generate documentation directly from screenshots and context checkpoints.",
        outcome: "Accelerated documentation workflow significantly via reusable blocks.",
        images: [
          "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'prod-1',
        title: "Multilingual Simulator",
        category: ProjectCategory.PRODUCTIVITY,
        techStack: ["Advanced Excel", "VBA", "UI Design"],
        description: "Interactive system simulation for accounting journal entries.",
        longDescription: "Developed a custom tool enabling interactive presentations of accounting entries. Supported 4 languages (English, French, Arabic, Turkish) with seamless customization. Simplified complex accounting concepts for diverse client audiences.",
        outcome: "Standardized training across 4 different language regions.",
        images: [
          "https://images.unsplash.com/photo-1543286386-713df548e9cc?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'prod-2',
        title: "Auto-Reporting Flows",
        category: ProjectCategory.PRODUCTIVITY,
        techStack: ["Python", "Tableau", "Power BI"],
        description: "Automated dashboards for expense analysis and P&L monitoring.",
        longDescription: "Designed automated workflows to process large volumes of asset-related data and generate ad-hoc reports. Provided insights into monthly expense accounts (Costs, G&A, S&M) to support budget adherence.",
        outcome: "Eliminated manual monthly reporting drudgery.",
        images: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'prod-4',
        title: "Task Tracker Pro",
        category: ProjectCategory.PRODUCTIVITY,
        techStack: ["Advanced Excel", "VBA", "Dynamic Charts"],
        description: "Exceptional Excel-based task tracking solution with stunning visualizations.",
        longDescription: "A comprehensive task management spreadsheet featuring dynamic progress visualization, interactive dashboards, and automated status tracking. Designed to enhance productivity and streamline project management with captivating features and an intuitive interface.",
        outcome: "Simplified project tracking for teams without complex software.",
        images: [
          "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'prod-5',
        title: "Employee Leave Tracker",
        category: ProjectCategory.PRODUCTIVITY,
        techStack: ["Excel", "VBA", "Automation"],
        description: "Comprehensive leave management system with style and efficiency.",
        longDescription: "A full-featured Excel solution for managing employee leaves with seamless configuration options. Offers automated leave calculations, visual dashboards, and easy-to-use interfaces for HR teams to track vacations, sick days, and other leave types.",
        outcome: "Streamlined HR leave management for 200+ employees.",
        images: [
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'prod-6',
        title: "MediStock - Inventory Control",
        category: ProjectCategory.PRODUCTIVITY,
        techStack: ["Excel", "VBA", "Data Visualization"],
        description: "Ultimate medication stock distribution and allocation management system.",
        longDescription: "Comprehensive Excel-based inventory management tool designed for efficient medication stock distribution across multiple branches. Features six dynamic sheets with user-friendly navigation, customizable configuration options, and visually appealing dashboards for optimizing stock management.",
        outcome: "Optimized medication inventory across 15+ pharmacy branches.",
        images: [
          "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'prod-7',
        title: "FusionPOS AI",
        category: ProjectCategory.PRODUCTIVITY,
        techStack: ["Flet Desktop", "React Web", "FastAPI", "FusionAI"],
        description: "Next-gen retail management system with AI-driven business intelligence.",
        longDescription: "A unified POS and retail management platform available on Desktop (Python/Flet) and Web (React). Integrated with 'FusionAI' to provide real-time sales forecasting, smart inventory alerts, and natural language business queries (e.g., 'What are my top selling items?').",
        outcome: "Empowered SMEs with enterprise-grade retail AI insights.",
        images: [
          "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'prod-8',
        title: "DocuSync (Word Mass Replace)",
        category: ProjectCategory.PRODUCTIVITY,
        techStack: ["Python-docx", "Flet", "Pandas"],
        description: "Automated terminology synchronization tool for ERP documentation.",
        longDescription: "A specialized QA tool for ERP technical writers. It automates the mass updating of terminology across thousands of pages of MS Word documentation while preserving complex formatting (bold, colors, headers). Synced directly with Excel glossaries.",
        outcome: "Eliminated manual find-and-replace for large technical manuals.",
        images: [
          "https://images.unsplash.com/photo-1585282263861-f55e341878f8?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1536733246328-3e56b823e20e?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'prod-9',
        title: "Personal Index Hub",
        category: ProjectCategory.PRODUCTIVITY,
        techStack: ["Flet", "SQLite", "Python Poetry"],
        description: "Modern, local-first knowledge management application.",
        longDescription: "A sophisticated link and resource management app built with Flet and SQLite. Features tagging, categorization, usage statistics, and a privacy-focused local database. Solves browser bookmark clutter with a clean, app-like interface.",
        outcome: "Centralized personal digital knowledge base.",
        images: [
          "https://images.unsplash.com/photo-1481487484168-9b930d55206d?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'prod-10',
        title: "Excel AI Suite",
        category: ProjectCategory.PRODUCTIVITY,
        techStack: ["TypeScript (Office Scripts)", "VBA", "Gemini API"],
        description: "Bringing LLM intelligence directly inside Microsoft Excel.",
        longDescription: "A suite of integrations connecting Excel to Google Gemini. Includes a VBA-based 'Macro Button' for desktop automation and TypeScript-based Office Scripts for web compatibility. Allows users to query AI directly from cells to analyze data or generate text.",
        outcome: "Enabled Excel users to leverage GenAI capabilities directly in spreadsheets.",
        images: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
        ]
      },

      // --- Learning ---
      {
        id: 'learn-1',
        title: "Fraud Detection System",
        category: ProjectCategory.LEARNING,
        techStack: ["Machine Learning", "Python", "Scikit-Learn"],
        description: "Certified Data Scientist Specialist Project (EPSILON AI).",
        longDescription: "Developed a fraud detection system using pre-trained machine learning models. Involved data preprocessing, model selection, training, and evaluation to identify anomalous financial transactions.",
        outcome: "Achieved high accuracy in detecting fraudulent patterns.",
        images: [
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'learn-2',
        title: "ISO Quality Management",
        category: ProjectCategory.LEARNING,
        techStack: ["ISO 27001", "ISO 9001", "ISO 20000"],
        description: "Comprehensive certification in Quality & Information Security Management.",
        longDescription: "Gained deep understanding of Information Security Management Systems (ISMS), Quality Management Systems (QMS), and IT Service Management. Applied these standards to improve documentation and consulting processes.",
        outcome: "Enhanced consulting compliance and security standards.",
        images: [
          "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'learn-3',
        title: "Risk Assessment Tracker",
        category: ProjectCategory.LEARNING,
        techStack: ["Excel", "ISO Standards", "Risk Management"],
        description: "Multilingual ISO standards risk assessment tracker with comprehensive dashboard.",
        longDescription: "Meticulously designed Excel spreadsheet for ISO standards compliance (ISMS, QMS, ITSMS). Features dynamic dashboard, criteria and scores input sheet, and user-friendly sidebar navigation. Supports multiple languages and provides comprehensive risk assessment and compliance tracking capabilities.",
        outcome: "Achieved ISO compliance tracking for enterprise clients.",
        images: [
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
        ]
      }
    ]
  },
  contact: {
    title: "Let's Connect",
    subtitle: "Open to consulting roles, advisory boards, and technical leadership opportunities.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    phoneLabel: "Phone",
    whatsappLabel: "WhatsApp",
    githubLabel: "GitHub",
    connectLabel: "Mido on LinkedIn",
    location: "Cairo, Egypt",
    saveCardLabel: "Scan to Save Contact"
  },
  nav: {
    profile: "Profile",
    experience: "Timeline",
    projects: "Work",
    contact: "Contact"
  }
};

const DATA_AR: AppContent = {
  profile: {
    name: "ميدو",
    role: "مستشار مالي رئيسي لنظم ERP ومعماري ذكاء اصطناعي",
    tagline: "دمج الخبرة المالية مع أتمتة الذكاء الاصطناعي (Agentic AI) وبايثون.",
    valueProp: "محترف تحليلي للغاية أستفيد من البيانات والذكاء الاصطناعي لحل مشكلات الأعمال المعقدة. أسد الفجوة بين أصحاب المصلحة الماليين والفرق التقنية، وأقود تنفيذ تخطيط موارد المؤسسات (ERP) مع بناء وكلاء ذكاء اصطناعي مخصصين للأتمتة.",
    openToAdvisory: "متاح للاستشارات",
    ctaExperience: "شاهد المسار المهني",
    ctaProjects: "حلول الذكاء الاصطناعي",
    start: "ابدأ",
    skillsTitle: "الكفاءات الأساسية",
    skills: [
      {
        category: "الذكاء الاصطناعي والهندسة",
        items: ["Python", "Agentic AI", "CrewAI", "LangChain", "RAG Systems", "Flet UI"]
      },
      {
        category: "تخطيط الموارد والمالية",
        items: ["Oracle EBS", "التحليل المالي", "مبادئ المحاسبة", "تنفيذ ERP", "تخطيط العمليات"]
      },
      {
        category: "البيانات والأدوات",
        items: ["SQL", "Power BI", "Tableau", "Excel VBA", "نمذجة البيانات"]
      }
    ]
  },
  experience: {
    title: "المسار المهني",
    subtitle: "اسحب لرؤية الجدول الزمني",
    readImpact: "شاهد الأثر",
    items: [
      {
        id: 'exp-1',
        role: "مستشار مالي رئيسي (ERP)",
        company: "Ultimate Solutions",
        period: "أغسطس 2021 — الحاضر",
        context: "قيادة الفريق والابتكار بالذكاء الاصطناعي",
        problem: "الفجوة بين احتياجات العمل والتنفيذ التقني لنظام ERP.",
        solution: "قدت فريق الاستشارات المالية وطورت أداة محادثة ذكية (RAG) داخلية.",
        impact: "تحسين التعاون بين الأقسام وأتمتة استرجاع المعلومات بشكل فوري.",
        labels: { context: "السياق", problem: "التحدي", solution: "الاستراتيجية", impact: "الأثر الرئيسي" }
      },
      {
        id: 'exp-2',
        role: "مستشار مالي أول (ERP)",
        company: "Ultimate Solutions",
        period: "ديسمبر 2020 — أغسطس 2021",
        context: "توطين الأنظمة والمحاكاة",
        problem: "صعوبة استيعاب المفاهيم المحاسبية المعقدة للمستخدمين غير الماليين.",
        solution: "إنشاء محاكي تفاعلي متعدد اللغات لقيود اليومية باستخدام Excel.",
        impact: "تبسيط التدريب عبر 4 لغات (الإنجليزية، الفرنسية، العربية، التركية).",
        labels: { context: "السياق", problem: "التحدي", solution: "الاستراتيجية", impact: "الأثر الرئيسي" }
      },
      {
        id: 'exp-3',
        role: "محلل أول للأصول الثابتة",
        company: "e& Etisalat",
        period: "يناير 2019 — ديسمبر 2020",
        context: "مشروع أصول الشبكة الثابتة (NFA)",
        problem: "تناقضات بين السجلات المالية والبيانات الفنية والجرد الفعلي.",
        solution: "تنفيذ مطابقة دقيقة للبيانات وتوحيدها لملايين الأصول.",
        impact: "إغلاق فجوة بقيمة 60 مليون جنيه مصري وتوفير تكاليف الاستعانة بمصادر خارجية.",
        labels: { context: "السياق", problem: "التحدي", solution: "الاستراتيجية", impact: "الأثر الرئيسي" }
      },
      {
        id: 'exp-4',
        role: "محاسب الأستاذ العام والدائنين",
        company: "Raya Holding",
        period: "أبريل 2017 — فبراير 2019",
        context: "عمليات مالية عالية الحجم",
        problem: "ضغط الإغلاق الشهري لأكثر من 6000 موظف والشركات التابعة الأجنبية.",
        solution: "تبسيط دورات الدفع (A/P) وإدارة التسويات بين الشركات.",
        impact: "ضمان الامتثال الضريبي بنسبة 100٪ والإغلاق الشهري في الوقت المحدد.",
        labels: { context: "السياق", problem: "التحدي", solution: "الاستراتيجية", impact: "الأثر الرئيسي" }
      }
    ]
  },
  projects: {
    title: "المحفظة التقنية",
    outcomeLabel: "النتيجة التجارية",
    viewDetailsLabel: "تفاصيل عميقة",
    categories: {
      [ProjectCategory.AI]: "وكلاء الذكاء الاصطناعي و RAG",
      [ProjectCategory.PRODUCTIVITY]: "أدوات الأتمتة",
      [ProjectCategory.ERP]: "تخطيط الموارد والمالية",
      [ProjectCategory.LEARNING]: "علوم البيانات والشهادات",
    },
    items: [
      // --- AI ---
      {
        id: 'ai-1',
        title: "FatooraX - معالج الفواتير الذكي",
        category: ProjectCategory.AI,
        techStack: ["Computer Vision", "CrewAI", "Vector Search", "FastAPI"],
        description: "أداة ذكية تستخدم نماذج الرؤية لاستخراج البيانات والتحقق منها من الفواتير الورقية.",
        longDescription: "حل متطور (FatooraX) يطبق تقنيات الذكاء الاصطناعي (Agentic AI) للتحقق من مبالغ الفواتير من خلال فحوصات منطقية. ينفذ مطابقة متعددة الطبقات (المنطق الضبابي، البحث المتجه الدلالي) للتحقق من البيانات مقابل سجلات قاعدة البيانات.",
        outcome: "أتمتة التحقق من الأخطاء وإدخال البيانات للفواتير المادية.",
        images: [
          "https://images.unsplash.com/photo-1633419461186-7d75076e82d7?q=80&w=800&auto=format&fit=crop", 
          "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-6',
        title: "مدير السمات الذكي (AI Theme Manager)",
        category: ProjectCategory.AI,
        techStack: ["Python", "Flet", "Gemini 2.0", "LangChain"],
        description: "نظام تصميم ديناميكي مدعوم بالذكاء الاصطناعي لتكييف واجهة المستخدم بشكل فوري.",
        longDescription: "مشروع متطور يربط بين تصميم واجهة المستخدم الثابت والبيئات الديناميكية. يسمح لوكيل الذكاء الاصطناعي بإنشاء وتطبيق سمات معقدة للتطبيق (الألوان، الطباعة، التصميم المكاني) في الوقت الفعلي بناءً على تفضيلات المستخدم.",
        outcome: "تمكين تكيف واجهة المستخدم مع السياق في الوقت الفعلي.",
        images: [
          "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-7',
        title: "Beneish M-Score - كاشف الاحتيال المالي",
        category: ProjectCategory.AI,
        techStack: ["Python", "Flet", "Pandas", "PDF Parsing"],
        description: "أداة للتحليل الجنائي المالي تستخدم الذكاء الاصطناعي لكشف التلاعب المحتمل في الأرباح.",
        longDescription: "تطبيق سطح مكتب متقدم يستفيد من النماذج اللغوية الكبيرة (LLMs) لاستخراج البيانات المالية من تقارير PDF المعقدة وحساب مقياس Beneish M-Score تلقائياً. يحدد فوراً المخالفات المحاسبية المحتملة ويفصل النسب المالية بدقة.",
        outcome: "أتمتة التحليل الجنائي للقوائم المالية للشركات.",
        images: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-8',
        title: "CoA-Gen - منشئ دليل الحسابات الذكي",
        category: ProjectCategory.AI,
        techStack: ["FastAPI", "Oracle PL/SQL", "Gemini Flash"],
        description: "وكيل ذكي ينشئ أدلة حسابات (CoA) مخصصة للصناعة فورياً.",
        longDescription: "يحدث ثورة في عملية مبيعات ERP باستخدام الذكاء الاصطناعي التوليدي لإنشاء أدلة حسابات كاملة وهرمية وثنائية اللغة (إنجليزي/عربي) في ثوانٍ. يرتبط مباشرة بمخططات Oracle ERP، مما يختصر أياماً من عمل التكوين والتجهيز.",
        outcome: "تسريع عملية استكشاف وتجهيز مشاريع ERP.",
        images: [
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-9',
        title: "Schema AI - مصمم قواعد البيانات",
        category: ProjectCategory.AI,
        techStack: ["Next.js", "React Flow", "Genkit", "Tailwind"],
        description: "ستوديو تصميم قواعد البيانات التوليدي للمهندسين والمطورين.",
        longDescription: "أداة حديثة قائمة على الويب لتصميم قواعد البيانات بصرياً، مدعومة بالذكاء الاصطناعي. تتيح للمستخدمين إنشاء مخططات العلاقات (ERD) من الوصف النصي، وتحليل المخططات، وتصدير كود SQL أو ORM تلقائياً.",
        outcome: "تسريع نمذجة قواعد البيانات والتحقق من صحة المخططات.",
        images: [
          "https://images.unsplash.com/photo-1558494949-ef526b01201b?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-10',
        title: "عقـل (aQil) - رفيقك الدراسي الذكي",
        category: ProjectCategory.AI,
        techStack: ["Flet", "LangChain", "Gemini", "SQLite"],
        description: "منصة تعليمية تفاعلية تحول المحتوى التقليدي إلى تجربة دراسية ذكية.",
        longDescription: "منصة تعليمية تستخدم الذكاء الاصطناعي متعدد الوسائط لتحويل مواد التعلم المختلفة (مستندات PDF، محاضرات فيديو) إلى وسائل دراسية تفاعلية. تتميز باختبارات ذكية، وبطاقات تعليمية ديناميكية، وملخصات منظمة، مع دعم ممتاز للمحتوى العربي.",
        outcome: "تحويل الدراسة التقليدية إلى تجربة تفاعلية مخصصة.",
        images: [
          "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-11',
        title: "Labels AI - أداة التوطين",
        category: ProjectCategory.AI,
        techStack: ["Python AST", "Gemini Pro", "Flet"],
        description: "أداة ذكية للمطورين لأتمتة استخراج وترجمة نصوص واجهات التطبيقات.",
        longDescription: "تحل مشكلة الترجمة اليدوية عن طريق تحليل كود بايثون لاستخراج نصوص الواجهة واستخدام الذكاء الاصطناعي التوليدي لترجمتها إلى ملفات JSON متعددة اللغات. تتميز بواجهة مظلمة مخصصة للمطورين ومزامنة فورية.",
        outcome: "توفير وقت وجهد كبير في عملية تعريب التطبيقات.",
        images: [
          "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-2',
        title: "مساعد RAG المؤسسي",
        category: ProjectCategory.AI,
        techStack: ["LangChain", "NLP", "Python"],
        description: "أداة محادثة للبيانات للاستعلام عن البيانات المهيكلة (SQL) وغير المهيكلة (PDF).",
        longDescription: "تصميم أداة ذكاء اصطناعي داخلية تمكن من 'الدردشة مع قاعدة البيانات والملفات'. تعالج مصادر بيانات متعددة وتوفر إجابات متعددة اللغات عبر واجهة مستخدم ثنائية اللغة. تحل مشكلة اختناق استرجاع المعلومات في بيئات ERP المعقدة.",
        outcome: "استرجاع فوري للسياسات المالية وسجلات قاعدة البيانات.",
        images: [
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-3',
        title: "محلل النسب المالية",
        category: ProjectCategory.AI,
        techStack: ["Generative AI", "PDF Parsing", "Pandas"],
        description: "أداة ويب تستخدم GenAI لأتمتة تحليل القوائم المالية بصيغة PDF.",
        longDescription: "تبسط عملية استخراج البيانات المالية الرئيسية من التقارير السنوية وتحسب تلقائيًا نسب السيولة والربحية والملاءة المالية. توفر نظرة عامة سريعة ومفيدة عن الصحة المالية للشركة دون إدخال بيانات يدوي.",
        outcome: "تقليل وقت تحليل القوائم المالية بشكل كبير.",
        images: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-4',
        title: "وكيل المبيعات التنبؤي",
        category: ProjectCategory.AI,
        techStack: ["Python", "Scikit-Learn", "Flet GUI"],
        description: "نموذج تعلم آلي للتنبؤ باتجاهات المبيعات واحتياجات المخزون.",
        longDescription: "تطوير نموذج تنبؤي باستخدام Scikit-Learn لتحليل بيانات المبيعات التاريخية والتنبؤ بالطلب المستقبلي. مغلف في واجهة مستخدم سهلة الاستخدام باستخدام إطار عمل Flet، مما يسمح للموظفين غير التقنيين بتشغيل التوقعات وتعديل المعلمات ديناميكيًا.",
        outcome: "تعزيز دقة تخطيط المخزون وتقليل الهدر.",
        images: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-5',
        title: "TeamFlow - متتبع القضايا الذكي",
        category: ProjectCategory.AI,
        techStack: ["Next.js", "Genkit AI", "shadcn/ui", "Recharts"],
        description: "نظام حديث لتتبع القضايا مدعوم بالذكاء الاصطناعي مع معالجة اللغة الطبيعية لفرق البرمجيات.",
        longDescription: "يعمل TeamFlow على تقليل العبء الإداري من خلال الاستفادة من الذكاء الاصطناعي لتصنيف المشكلات تلقائيًا واقتراح المكلفين وإنشاء رموز فريدة للمشاكل. تشمل الميزات إنشاء مشكلات بمساعدة الذكاء الاصطناعي، ولوحات معلومات ثاقبة مع مؤشرات الأداء الرئيسية، وعرض لوحة كانبان، وإدارة ديناميكية للمستخدم/النظام. مصمم بدعم كامل للغة العربية (RTL).",
        outcome: "تقليل وقت إنشاء وتنظيم المهام بشكل ملحوظ.",
        images: [
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
        ]
      },

      // --- ERP ---
      {
        id: 'erp-1',
        title: "تسوية أصول الشبكة (NFA)",
        category: ProjectCategory.ERP,
        techStack: ["SAP/Oracle", "Data Mapping", "Excel Macros"],
        description: "مشروع الأصول الثابتة للشبكة لمزود اتصالات رئيسي (اتصالات).",
        longDescription: "تسوية سجلات الأصول الثابتة عبر النظم المالية والسجلات الفنية والجرد الفعلي. تحديد وحل الفروق بين السجلات المالية والفنية والمادية لملايين الأصول.",
        outcome: "إغلاق فجوة بقيمة 60 مليون جنيه وتوفير تكاليف المصادر الخارجية.",
        images: [
          "https://images.unsplash.com/photo-1558494949-ef526b01201b?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1649174984260-1e5212b033d4?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'erp-2',
        title: "قائد تنفيذ ERP",
        category: ProjectCategory.ERP,
        techStack: ["Oracle EBS", "Onyx ERP", "SQL"],
        description: "قيادة الاستشارات المالية لإطلاق أنظمة ERP في Ultimate Solutions.",
        longDescription: "توجيه فريق من المستشارين لمواءمة ميزات البرنامج مع المعايير المالية. العمل كخبير متخصص لتقديم رؤى للمطورين حول سير العمل المالي والمتطلبات التنظيمية ومعايير التوثيق.",
        outcome: "تسليم ناجح لأنظمة ERP معقدة ومتعددة الوحدات.",
        images: [
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'erp-3',
        title: "محرك الرواتب الشامل",
        category: ProjectCategory.ERP,
        techStack: ["SQL", "ERP Integration", "Excel VBA"],
        description: "أتمتة تخصيص الرواتب ومعالجة الضرائب لأكثر من 6000 موظف.",
        longDescription: "هندسة نظام مبسط لمعالجة الرواتب في راية القابضة. التعامل مع مخصصات معقدة متعددة المواقع وضمان دقة 100٪ في إعداد الضرائب المحلية وتقديمها، مما قلل بشكل كبير من ضغط الإغلاق الشهري.",
        outcome: "صفر تأخير في الرواتب الشهرية لقوى عاملة قوامها 6 آلاف.",
        images: [
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'erp-4',
        title: "محسن منطق التكاليف",
        category: ProjectCategory.ERP,
        techStack: ["Process Mapping", "SQL Analysis", "Oracle"],
        description: "تشخيص وإصلاح أوجه القصور في تكاليف المخزون.",
        longDescription: "إجراء تدقيق عميق لأنظمة تكاليف المخزون في اتصالات. تحديد الثغرات المنطقية التي تسبب تناقضات مالية وتنفيذ حلول قوية لضمان تقييم دقيق للمخزون والامتثال.",
        outcome: "استعادة الدقة لبيانات المخزون المهمة للمهمة.",
        images: [
          "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1535378437327-10ffb4146750?q=80&w=800&auto=format&fit=crop"
        ]
      },

      // --- Productivity ---
      {
        id: 'prod-3',
        title: "LinguaBlocks",
        category: ProjectCategory.PRODUCTIVITY,
        techStack: ["React", "AI Integration", "Local-First", "Vibe Coding"],
        description: "تطبيق مدعوم بالذكاء الاصطناعي لأتمتة التوثيق الفني الهيكلي متعدد اللغات.",
        longDescription: "تطبيق قوي يعمل محلياً ومصمم لتبسيط إنشاء أدلة المستخدم المنظمة. يمكّن الكتاب الفنيين من بناء 'وحدات ذاكرة' متسقة، وتجميعها عبر السحب والإفلات، والاستفادة من الذكاء الاصطناعي لتوليد التوثيق مباشرة من لقطات الشاشة ونقاط السياق.",
        outcome: "تسريع سير عمل التوثيق بشكل كبير.",
        images: [
          "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'prod-1',
        title: "محاكي القيود متعدد اللغات",
        category: ProjectCategory.PRODUCTIVITY,
        techStack: ["Advanced Excel", "VBA", "UI Design"],
        description: "نظام محاكاة تفاعلي لقيود اليومية المحاسبية.",
        longDescription: "تطوير أداة مخصصة تمكن من العروض التقديمية التفاعلية للإدخالات المحاسبية. تدعم 4 لغات (الإنجليزية، الفرنسية، العربية، التركية) مع تخصيص سلس. تبسيط المفاهيم المحاسبية المعقدة لجمهور العملاء المتنوع.",
        outcome: "توحيد التدريب عبر 4 مناطق لغوية مختلفة.",
        images: [
          "https://images.unsplash.com/photo-1543286386-713df548e9cc?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'prod-2',
        title: "سير عمل التقارير الآلية",
        category: ProjectCategory.PRODUCTIVITY,
        techStack: ["Python", "Tableau", "Power BI"],
        description: "لوحات معلومات آلية لتحليل النفقات ومراقبة الأرباح والخسائر.",
        longDescription: "تصميم سير عمل آلي لمعالجة كميات كبيرة من البيانات المتعلقة بالأصول وإنشاء تقارير مخصصة. توفير رؤى حول حسابات المصروفات الشهرية (التكاليف، العمومية والإدارية، المبيعات والتسويق) لدعم الالتزام بالميزانية.",
        outcome: "القضاء على عناء التقارير الشهرية اليدوية.",
        images: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'prod-4',
        title: "متتبع المهام الاحترافي",
        category: ProjectCategory.PRODUCTIVITY,
        techStack: ["Advanced Excel", "VBA", "Dynamic Charts"],
        description: "حل استثنائي لتتبع المهام قائم على Excel مع تصورات مذهلة.",
        longDescription: "جدول بيانات شامل لإدارة المهام يتميز بتصور ديناميكي للتقدم، ولوحات معلومات تفاعلية، وتتبع آلي للحالة. مصمم لتعزيز الإنتاجية وتبسيط إدارة المشاريع بميزات جذابة وواجهة بديهية.",
        outcome: "تبسيط تتبع المشاريع للفرق دون الحاجة لبرمجيات معقدة.",
        images: [
          "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'prod-5',
        title: "متتبع إجازات الموظفين",
        category: ProjectCategory.PRODUCTIVITY,
        techStack: ["Excel", "VBA", "Automation"],
        description: "نظام شامل لإدارة الإجازات بأسلوب وكفاءة.",
        longDescription: "حل Excel كامل الميزات لإدارة إجازات الموظفين مع خيارات تكوين سلسة. يوفر حسابات آلية للإجازات، ولوحات معلومات مرئية، واجهات سهلة الاستخدام لفرق الموارد البشرية لتتبع الإجازات والمرضيات وأنواع الإجازات الأخرى.",
        outcome: "تبسيط إدارة إجازات الموارد البشرية لأكثر من 200 موظف.",
        images: [
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'prod-6',
        title: "MediStock - مراقبة المخزون",
        category: ProjectCategory.PRODUCTIVITY,
        techStack: ["Excel", "VBA", "Data Visualization"],
        description: "النظام الأمثل لتوزيع وتخصيص مخزون الأدوية.",
        longDescription: "أداة شاملة لإدارة المخزون قائمة على Excel مصممة للتوزيع الفعال لمخزون الأدوية عبر فروع متعددة. تتميز بست أوراق ديناميكية مع تنقل سهل الاستخدام، وخيارات تكوين قابلة للتخصيص، ولوحات معلومات جذابة بصريًا لتحسين إدارة المخزون.",
        outcome: "تحسين مخزون الأدوية عبر أكثر من 15 فرع صيدلية.",
        images: [
          "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'prod-7',
        title: "FusionPOS AI - منظومة إدارة التجزئة الذكية",
        category: ProjectCategory.PRODUCTIVITY,
        techStack: ["Flet Desktop", "React Web", "FastAPI", "FusionAI"],
        description: "منصة إدارة تجزئة من الجيل التالي مع ذكاء أعمال مدعوم بالذكاء الاصطناعي.",
        longDescription: "منصة موحدة لنقاط البيع وإدارة التجزئة متاحة على سطح المكتب (Python/Flet) والويب (React). مدمجة مع 'FusionAI' لتوفير تنبؤ المبيعات في الوقت الفعلي، وتنبيهات المخزون الذكية، واستعلامات الأعمال باللغة الطبيعية.",
        outcome: "تمكين الشركات الصغيرة والمتوسطة برؤى ذكاء اصطناعي من الدرجة المؤسسية.",
        images: [
          "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'prod-8',
        title: "DocuSync - مزامنة الوثائق الفنية",
        category: ProjectCategory.PRODUCTIVITY,
        techStack: ["Python-docx", "Flet", "Pandas"],
        description: "أداة ذكية لمزامنة المصطلحات الفنية لتوثيق أنظمة ERP.",
        longDescription: "أداة ضمان جودة متخصصة للكتاب الفنيين. تقوم بأتمتة التحديث الشامل للمصطلحات عبر آلاف الصفحات من وثائق MS Word مع الحفاظ على التنسيق المعقد. متزامنة مباشرة مع مسارد Excel.",
        outcome: "القضاء على عناء البحث والاستبدال اليدوي في الأدلة التقنية الضخمة.",
        images: [
          "https://images.unsplash.com/photo-1585282263861-f55e341878f8?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1536733246328-3e56b823e20e?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'prod-9',
        title: "الفهرس الشخصي - Personal Index",
        category: ProjectCategory.PRODUCTIVITY,
        techStack: ["Flet", "SQLite", "Python Poetry"],
        description: "مساحة عمل شخصية لإدارة المعرفة الرقمية تعمل محلياً.",
        longDescription: "تطبيق متطور لإدارة الروابط والموارد مبني باستخدام Flet و SQLite. يتميز بوضع العلامات، والتصنيف، وإحصائيات الاستخدام، وقاعدة بيانات محلية تركز على الخصوصية. يحل مشكلة فوضى الإشارات المرجعية في المتصفح بواجهة نظيفة.",
        outcome: "إنشاء قاعدة معرفة رقمية شخصية مركزية.",
        images: [
          "https://images.unsplash.com/photo-1481487484168-9b930d55206d?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'prod-10',
        title: "حزمة الذكاء الاصطناعي للإكسل",
        category: ProjectCategory.PRODUCTIVITY,
        techStack: ["TypeScript (Office Scripts)", "VBA", "Gemini API"],
        description: "دمج قدرات النماذج اللغوية الكبيرة (LLM) داخل بيئة Microsoft Excel مباشرة.",
        longDescription: "مجموعة أدوات تربط Excel بـ Google Gemini. تتضمن 'زر ماكرو' (VBA) لأتمتة سطح المكتب ونصوص Office Scripts للتوافق مع الويب. تتيح للمستخدمين استعلام الذكاء الاصطناعي تحليل البيانات أو إنشاء النصوص مباشرة من داخل الخلايا.",
        outcome: "تمكين مستخدمي Excel من الاستفادة من قدرات الذكاء الاصطناعي التوليدي مباشرة داخل الجداول.",
        images: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
        ]
      },

      // --- Learning ---
      {
        id: 'learn-1',
        title: "نظام كشف الاحتيال",
        category: ProjectCategory.LEARNING,
        techStack: ["Machine Learning", "Python", "Scikit-Learn"],
        description: "مشروع أخصائي علوم بيانات معتمد (EPSILON AI).",
        longDescription: "تطوير نظام للكشف عن الاحتيال باستخدام نماذج التعلم الآلي المدربة مسبقًا. شمل معالجة البيانات، واختيار النموذج، والتدريب، والتقييم لتحديد المعاملات المالية الشاذة.",
        outcome: "تحقيق دقة عالية في الكشف عن الأنماط الاحتيالية.",
        images: [
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'learn-2',
        title: "إدارة الجودة ISO",
        category: ProjectCategory.LEARNING,
        techStack: ["ISO 27001", "ISO 9001", "ISO 20000"],
        description: "شهادة شاملة في إدارة الجودة وأمن المعلومات.",
        longDescription: "اكتساب فهم عميق لنظم إدارة أمن المعلومات (ISMS)، ونظم إدارة الجودة (QMS)، وإدارة خدمات تكنولوجيا المعلومات. تطبيق هذه المعايير لتحسين عمليات التوثيق والاستشارات.",
        outcome: "تعزيز الامتثال الاستشاري ومعايير الأمان.",
        images: [
          "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'learn-3',
        title: "متتبع تقييم المخاطر",
        category: ProjectCategory.LEARNING,
        techStack: ["Excel", "ISO Standards", "Risk Management"],
        description: "متتبع تقييم مخاطر معايير ISO متعدد اللغات مع لوحة معلومات شاملة.",
        longDescription: "جدول بيانات Excel مصمم بدقة للامتثال لمعايير ISO (ISMS، QMS، ITSMS). يتميز بلوحة معلومات ديناميكية، ورقة إدخال المعايير والدرجات، وتنقل سهل عبر الشريط الجانبي. يدعم لغات متعددة ويوفر قدرات شاملة لتقييم المخاطر وتتبع الامتثال.",
        outcome: "تحقيق تتبع الامتثال لـ ISO لعملاء الشركات.",
        images: [
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
        ]
      }
    ]
  },
  contact: {
    title: "لنتواصل",
    subtitle: "منفتح للأدوار الاستشارية، والمجالس الاستشارية، وفرص القيادة التقنية.",
    emailLabel: "البريد الإلكتروني",
    linkedinLabel: "لينكد إن",
    phoneLabel: "الهاتف",
    whatsappLabel: "واتساب",
    githubLabel: "جيت هب",
    connectLabel: "ميدو على لينكد إن",
    location: "القاهرة، مصر",
    saveCardLabel: "امسح لحفظ جهة الاتصال"
  },
  nav: {
    profile: "الملف",
    experience: "المسار",
    projects: "الأعمال",
    contact: "تواصل"
  }
};

export const CONTACT_DATA_STATIC = {
  email: "Acct@gmail.com",
  linkedin: "linkedin.com/in/mido/",
  phone: "+201001234567",
  github: "github.com/midouser",
  website: "sites.google.com/view/muhammed-momen"
};

export const getContent = (lang: Language): AppContent => {
  return lang === 'ar' ? DATA_AR : DATA_EN;
};