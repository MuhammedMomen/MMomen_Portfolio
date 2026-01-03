import { ProjectCategory, AppContent, Language } from './types';

const DATA_EN: AppContent = {
  profile: {
    name: "Muhammed Momen",
    role: "Lead ERP Financial Consultant & AI Architect",
    tagline: "Merging Financial Expertise with Agentic AI & Python Automation.",
    valueProp: "Highly analytical and results-oriented professional with a strong background in financial analysis and a proven ability to leverage data and technology to solve complex business problems. Experienced in gathering and documenting requirements, optimizing processes, and facilitating communication between technical teams and business stakeholders. Adept at using data analysis techniques and tools, including Python and AI, to drive insights and inform strategic decisions.",
    openToAdvisory: "OPEN TO ADVISORY",
    ctaExperience: "View Track Record",
    ctaProjects: "See Innovations",
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
        items: ["Power BI", "Tableau", "Excel VBA", "Data Modeling", "Office Scripts"]
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
        solution: "Established KPIs, guided financial consulting, and designed an internal RAG AI chat tool.",
        impact: "Enhanced information retrieval, reporting, and improved cross-departmental collaboration.",
        labels: { context: "Context", problem: "Challenge", solution: "Strategy", impact: "Key Impact" }
      },
      {
        id: 'exp-2',
        role: "ERP Senior Financial Consultant",
        company: "Ultimate Solutions",
        period: "Dec 2020 — Aug 2021",
        context: "System Localization & Quality Assurance",
        problem: "Complex accounting concepts were difficult for non-finance users to grasp; ensuring software quality.",
        solution: "Collaborated with developers as SME and created a multilingual Excel-based simulator.",
        impact: "Validating usability through end-user testing and simplifying complex concepts for diverse audiences.",
        labels: { context: "Context", problem: "Challenge", solution: "Strategy", impact: "Key Impact" }
      },
      {
        id: 'exp-3',
        role: "Senior Fixed Assets Analyst",
        company: "e& Etisalat",
        period: "Jan 2019 — Dec 2020",
        context: "NFA Project & Asset Management",
        problem: "Massive discrepancies between finance records, technical data, and physical counts.",
        solution: "Executed rigorous reconciliation and data mapping for millions of assets (NFA Project).",
        impact: "Identified and closed a 60 Million EGP gap and saved outsourcing costs via in-house execution.",
        labels: { context: "Context", problem: "Challenge", solution: "Strategy", impact: "Key Impact" }
      },
      {
        id: 'exp-4',
        role: "GL & AP Accountant",
        company: "Raya Holding",
        period: "Apr 2017 — Feb 2019",
        context: "High-Volume Financial Operations",
        problem: "Monthly closing pressure for 6,000+ employees and foreign subsidiaries.",
        solution: "Streamlined AP cycles, managed intercompany eliminations, and automated payroll allocations.",
        impact: "Ensured 100% tax compliance, accurate financial consolidation, and zero delay in payroll.",
        labels: { context: "Context", problem: "Challenge", solution: "Strategy", impact: "Key Impact" }
      }
    ]
  },
  projects: {
    title: "Innovations & Projects",
    outcomeLabel: "Business Outcome",
    viewDetailsLabel: "Deep Dive",
    categories: {
      [ProjectCategory.AI_AGENTS]: "AI Agents & Systems",
      [ProjectCategory.AI_TOOLS]: "AI Productivity Tools",
      [ProjectCategory.FULLSTACK]: "Full Stack Dev",
      [ProjectCategory.ERP]: "ERP & Finance",
      [ProjectCategory.EXCEL]: "Excel & Automation",
      [ProjectCategory.PRODUCTIVITY]: "Productivity Tools",
      [ProjectCategory.LEARNING]: "Data & Certs",
    },
    items: [
      // --- AI AGENTS (Standalone) ---
      {
        id: 'ai-1',
        title: "FatooraX - Agentic Invoice Processor",
        category: ProjectCategory.AI_AGENTS,
        techStack: ["Computer Vision", "CrewAI", "Vector Search", "FastAPI"],
        description: "Smart tool using AI vision models to extract and validate data from hardcopy invoices.",
        businessDescription: "Automates the tedious process of manual invoice entry and validation. By using AI to 'read' scans and match them against database records, it drastically reduces errors and processing time for finance teams, ensuring accurate AP cycles.",
        technicalDescription: "Built with Agentic AI workflows (CrewAI) to orchestrate OCR extraction and validation logic. Uses semantic vector search for multi-layered matching and fuzzy logic to cross-reference extracted data against SQL databases with configurable confidence thresholds.",
        outcome: "Automated error-checking and data entry for invoices.",
        images: [
          "https://images.unsplash.com/photo-1633419461186-7d40a2307e68?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-7',
        title: "Beneish M-Score AI",
        category: ProjectCategory.AI_AGENTS,
        techStack: ["Python", "Flet", "Pandas", "PDF Parsing"],
        description: "AI-powered financial forensic tool to detect potential earnings manipulation.",
        businessDescription: "Provides auditors and financial analysts with an instant 'health check' on company financials. By automating the complex Beneish M-Score calculation, it quickly flags potential accounting irregularities that would take hours to identify manually.",
        technicalDescription: "A desktop application (Flet) that parses complex PDF financial statements. Uses LLMs to structure unstructured data into Pandas DataFrames, then applies mathematical models to calculate M-Score ratios and generate forensic reports.",
        outcome: "Automated forensic analysis of corporate financial statements.",
        images: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-8',
        title: "CoA-Gen Agent",
        category: ProjectCategory.AI_AGENTS,
        techStack: ["FastAPI", "Oracle PL/SQL", "Gemini Flash"],
        description: "Intelligent agent that generates industry-specific Charts of Accounts (CoA) instantly.",
        businessDescription: "Revolutionizes the ERP presales and setup phase. Instead of spending days configuring a Chart of Accounts manually, consultants can generate a tailored, bilingual (EN/AR) structure in seconds, accelerating implementation timelines.",
        technicalDescription: "Leverages Generative AI to construct hierarchical financial structures based on industry prompts. Integrates with Oracle PL/SQL to validate and directly map the generated CoA into the ERP schema.",
        outcome: "Accelerated ERP discovery and setup phase from days to seconds.",
        images: [
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-6',
        title: "AI Theme Manager",
        category: ProjectCategory.AI_AGENTS,
        techStack: ["Python", "Flet", "Gemini 2.0", "LangChain"],
        description: "AI-driven dynamic design system for instant UI adaptation.",
        businessDescription: "Allows applications to dynamically adapt their look and feel based on user preferences or branding requirements without code changes. Enhances user experience by providing instant, personalized UI themes.",
        technicalDescription: "Bridged static UI definitions with dynamic AI logic. The agent interprets natural language or context cues to generate complex theme configurations (colors, typography, spacing) and applies them in real-time to the Flet component tree.",
        outcome: "Enabled real-time, context-aware UI adaptation.",
        images: [
          "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-3',
        title: "Financial Ratio Analyzer",
        category: ProjectCategory.AI_AGENTS,
        techStack: ["Generative AI", "PDF Parsing", "Pandas"],
        description: "Web tool using GenAI to automate analysis of PDF financial statements.",
        businessDescription: "Streamlines financial assessment by extracting key data from PDF reports and calculating liquidity, profitability, and solvency ratios. Provides a rapid and insightful overview of financial health, reducing manual data entry effort.",
        technicalDescription: "Uses RAG-like processes to ingest PDF documents, identify table structures, and extract key line items. Computes standard financial ratios using Python (Pandas) and presents results in an interactive web dashboard.",
        outcome: "Significantly reduced time for financial statement analysis.",
        images: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-2',
        title: "Internal RAG Assistant",
        category: ProjectCategory.AI_AGENTS,
        techStack: ["LangChain", "NLP", "Python"],
        description: "Chat-to-Data tool querying structured (SQL) and unstructured (PDF) data.",
        businessDescription: "Solved the information retrieval bottleneck in complex ERP environments. Employees can ask natural language questions about policies or database records and get instant, accurate answers, improving decision speed.",
        technicalDescription: "Implemented a hybrid RAG system connecting to SQL databases and a vector store for documents. Handles query routing, SQL generation, and context retrieval to provide grounded answers in English and Arabic.",
        outcome: "Instant retrieval of financial policies and database records.",
        images: [
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
        ]
      },
      // --- AI TOOLS (Productivity) ---
      {
        id: 'ai-11',
        title: "Labels AI (Localization)",
        category: ProjectCategory.AI_TOOLS,
        techStack: ["Python AST", "Gemini Pro", "Flet"],
        description: "Developer tool to automate extraction and translation of app UI strings.",
        businessDescription: "Drastically reduces the time required to localize applications. Instead of manually maintaining translation files, developers can auto-generate multilingual assets, accelerating market readiness for global products.",
        technicalDescription: "Parses Python source code using Abstract Syntax Trees (AST) to identify string literals. Sends extracted strings to Gemini Pro for context-aware translation and generates standardized JSON localization files.",
        outcome: "Saved significant time and effort in app localization.",
        images: [
          "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-10',
        title: "aQil - Study with AI",
        category: ProjectCategory.AI_TOOLS,
        techStack: ["Flet", "LangChain", "Gemini", "SQLite"],
        description: "Interactive learning platform transforming content into smart study aids.",
        businessDescription: "Democratizes access to personalized tutoring. Converts static content (PDFs, Videos) into dynamic quizzes and flashcards, making learning more engaging and effective for students.",
        technicalDescription: "Multimodal AI processing system that ingests text and video transcripts. Uses LangChain to generate educational artifacts (questions, summaries) and stores user progress in a local SQLite database.",
        outcome: "Turned traditional study materials into interactive personalized experiences.",
        images: [
          "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop"
        ]
      },
      // --- FULL STACK ---
      {
        id: 'prod-7',
        title: "FusionPOS AI",
        category: ProjectCategory.FULLSTACK,
        techStack: ["Flet Desktop", "FastAPI", "FusionAI"],
        description: "Next-gen retail management system with AI-driven business intelligence.",
        businessDescription: "Empowers small businesses with enterprise-grade retail insights. Combines a robust Point of Sale system with AI that answers questions like 'What are my top selling items?' and predicts inventory needs.",
        technicalDescription: "A pure Python full-stack application. Frontend built with Flet for cross-platform desktop deployment. Backend powered by FastAPI. 'FusionAI' engine uses simple forecasting models and natural language processing to query sales data.",
        outcome: "Empowered SMEs with enterprise-grade retail AI insights.",
        images: [
          "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=800&auto=format&fit=crop"
        ]
      },
       // --- EXCEL & AUTOMATION ---
      {
        id: 'erp-1',
        title: "Network Fixed Assets (NFA)",
        category: ProjectCategory.EXCEL,
        techStack: ["Data Mapping", "Excel Macros", "Reconciliation"],
        description: "Massive asset reconciliation project for a major telecom provider.",
        businessDescription: "Critical financial project that saved millions. Reconciled disconnected records between Finance, Technical Engineering, and Physical counts, identifying a 60M EGP gap that was successfully closed.",
        technicalDescription: "Advanced Excel automation and heuristic matching algorithms to handle millions of rows. Created custom macros for data unification and variance reporting across disparate system exports.",
        outcome: "Closed 60M EGP gap and saved outsourcing costs.",
        images: [
          "https://images.unsplash.com/photo-1558494949-ef526b01201b?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1649174984260-1e5212b033d4?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'erp-3',
        title: "Mass Payroll Engine",
        category: ProjectCategory.EXCEL,
        techStack: ["Excel VBA", "Complex Formulas", "Automation"],
        description: "Automated payroll allocation and tax processing for 6000+ employees.",
        businessDescription: "Ensured 6,000 employees were paid on time, every time. Eliminated the risk of human error in complex multi-site allocations and tax calculations, guaranteeing 100% regulatory compliance.",
        technicalDescription: "A robust VBA-driven engine that processed raw HR data, applied complex tax logic and allocation rules, and generated bank-ready payment files and G/L journal entries.",
        outcome: "Zero delay in monthly payroll for 6k workforce.",
        images: [
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'prod-10',
        title: "Excel AI Suite",
        category: ProjectCategory.EXCEL,
        techStack: ["TypeScript (Office Scripts)", "VBA", "Gemini API"],
        description: "Integrating LLM intelligence directly inside Microsoft Excel.",
        businessDescription: "Brings the power of Generative AI to where finance professionals live: Excel. Allows users to classify data, summarize text, or ask questions about their spreadsheets without leaving the interface.",
        technicalDescription: "Hybrid solution: VBA Macros for desktop-grade automation and TypeScript Office Scripts for web compatibility. Calls Gemini API directly from cell formulas or script actions to process range data.",
        outcome: "Enabled Excel users to leverage GenAI capabilities locally.",
        images: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'prod-1',
        title: "Multilingual Simulator",
        category: ProjectCategory.EXCEL,
        techStack: ["Advanced Excel", "VBA", "UI Design"],
        description: "Interactive system simulation for accounting journal entries.",
        businessDescription: "Simplified the training process for complex ERP systems. Enabled consultants to demonstrate accounting effects in real-time to clients in their native language (EN, FR, AR, TR), improving understanding and buy-in.",
        technicalDescription: "A dynamic Excel tool utilizing VBA for state management and interface switching. Simulated ERP screen logic to generate corresponding journal entries based on user inputs.",
        outcome: "Standardized training across 4 different language regions.",
        images: [
          "https://images.unsplash.com/photo-1543286386-713df548e9cc?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'prod-6',
        title: "MediStock Manager",
        category: ProjectCategory.EXCEL,
        techStack: ["Excel", "VBA", "Data Visualization"],
        description: "Medication stock distribution and allocation management system.",
        businessDescription: "Optimized inventory levels across pharmacy branches. Prevented stockouts and overstocking by providing a clear tool for allocation and tracking, directly impacting operational efficiency.",
        technicalDescription: "Excel-based inventory application with 6 dynamic sheets. Features VBA-driven forms for data entry and automatic dashboard updates for stock visualization.",
        outcome: "Optimized medication inventory across 15+ branches.",
        images: [
          "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
        ]
      },
      // --- PRODUCTIVITY ---
      {
        id: 'prod-8',
        title: "DocuSync (Word Mass Replace)",
        category: ProjectCategory.PRODUCTIVITY,
        techStack: ["Python-docx", "Flet", "Pandas"],
        description: "Automated terminology synchronization tool for ERP documentation.",
        businessDescription: "Ensures consistency in technical documentation. Eliminates the risk of outdated terminology across thousands of pages of manuals, saving weeks of manual proofreading and editing effort.",
        technicalDescription: "Python application utilizing `python-docx` to iterate through Word documents. Replaces terms based on an Excel mapping file while preserving run-level formatting (bold, styles, colors).",
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
        description: "Local-first knowledge management application.",
        businessDescription: "Boosts personal productivity by organizing scattered digital resources (links, files, notes) into a single, searchable local database, free from browser clutter and cloud dependencies.",
        technicalDescription: "Desktop app built with Flet and SQLite. Implements tagging, search indexing, and resource categorization in a private local file storage system.",
        outcome: "Centralized personal digital knowledge base.",
        images: [
          "https://images.unsplash.com/photo-1481487484168-9b930d55206d?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=800&auto=format&fit=crop"
        ]
      },
    ]
  },
  contact: {
    title: "Get in Touch",
    subtitle: "Let's automate the future of finance",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    phoneLabel: "Phone",
    whatsappLabel: "WhatsApp",
    githubLabel: "GitHub",
    connectLabel: "Connect",
    location: "Cairo, Egypt",
    saveCardLabel: "Save Contact"
  },
  nav: {
    profile: "Profile",
    experience: "Experience",
    projects: "Innovations",
    contact: "Contact"
  }
};

const DATA_AR: AppContent = {
  profile: {
    name: "محمد مؤمن",
    role: "استشاري أول نظم ERP ومهندس ذكاء اصطناعي",
    tagline: "دمج الخبرة المالية مع الذكاء الاصطناعي والأتمتة.",
    valueProp: "محترف ذو عقلية تحليلية وخبرة واسعة في التحليل المالي، أمتلك القدرة على توظيف البيانات والتكنولوجيا لحل مشكلات الأعمال المعقدة. وسيط فعال بين الفرق التقنية والمالية، أقود تنفيذ أنظمة ERP وأبني وكلاء ذكاء اصطناعي لأتمتة المهام الصعبة.",
    openToAdvisory: "متاح للاستشارات",
    ctaExperience: "مسار الخبرة",
    ctaProjects: "استكشف الابتكارات",
    start: "ابدأ",
    skillsTitle: "الكفاءات الأساسية",
    skills: [
      {
        category: "الذكاء الاصطناعي والهندسة",
        items: ["Python", "Agentic AI", "CrewAI", "LangChain", "RAG Systems", "Flet UI"]
      },
      {
        category: "المالية و ERP",
        items: ["Oracle EBS", "التحليل المالي", "مبادئ المحاسبة", "تطبيق ERP", "هندسة العمليات"]
      },
      {
        category: "البيانات والأدوات",
        items: ["Power BI", "Tableau", "Excel VBA", "نمذجة البيانات", "Office Scripts"]
      }
    ]
  },
  experience: {
    title: "المسار المهني",
    subtitle: "اسحب لرؤية التسلسل الزمني",
    readImpact: "شاهد الأثر",
    items: [
      {
        id: 'exp-1',
        role: "استشاري أول مالي لنظم ERP",
        company: "Ultimate Solutions",
        period: "أغسطس 2021 — الآن",
        context: "القيادة والابتكار بالذكاء الاصطناعي",
        problem: "الفجوة بين متطلبات الأعمال والتطبيق التقني لنظام ERP.",
        solution: "قدت فريق الاستشارات المالية وأسست مؤشرات أداء، وصممت أداة دردشة داخلية مدعومة بالذكاء الاصطناعي.",
        impact: "تحسين استرجاع المعلومات والتعاون بين الإدارات وأتمتة الوصول للمعرفة.",
        labels: { context: "السياق", problem: "التحدي", solution: "الاستراتيجية", impact: "الأثر الرئيسي" }
      },
      {
        id: 'exp-2',
        role: "استشاري مالي لنظم ERP",
        company: "Ultimate Solutions",
        period: "ديسمبر 2020 — أغسطس 2021",
        context: "توطين النظم وضمان الجودة",
        problem: "صعوبة استيعاب المفاهيم المحاسبية المعقدة للمستخدمين غير الماليين.",
        solution: "عملت كخبير للمطورين وصممت محاكي محاسبي تفاعلي متعدد اللغات.",
        impact: "تبسيط تدريب المستخدمين عبر 4 لغات وتحسين جودة البرمجيات.",
        labels: { context: "السياق", problem: "التحدي", solution: "الاستراتيجية", impact: "الأثر الرئيسي" }
      },
      {
        id: 'exp-3',
        role: "محليل أول أصول ثابتة",
        company: "اتصالات مصر (e&)",
        period: "يناير 2019 — ديسمبر 2020",
        context: "مشروع أصول الشبكة (NFA)",
        problem: "فروقات ضخمة بين السجلات المالية والفنية والجرد الفعلي.",
        solution: "نفذت عمليات مطابقة دقيقة ومسح بيانات لملايين الأصول.",
        impact: "إغلاق فجوة بقيمة 60 مليون جنيه وتوفير تكاليف شركات خارجية.",
        labels: { context: "السياق", problem: "التحدي", solution: "الاستراتيجية", impact: "الأثر الرئيسي" }
      },
      {
        id: 'exp-4',
        role: "محاسب أول (GL & AP)",
        company: "راية القابضة",
        period: "أبريل 2017 — فبراير 2019",
        context: "عمليات مالية ضخمة",
        problem: "ضغوط الإغلاق الشهري لـ 6000 موظف وشركات تابعة أجنبية.",
        solution: "تحسين دورات الموردين (AP) وأتمتة مخصصات الرواتب.",
        impact: "امتثال ضريبي 100% وإغلاق شهري دقيق دون تأخير.",
        labels: { context: "السياق", problem: "التحدي", solution: "الاستراتيجية", impact: "الأثر الرئيسي" }
      }
    ]
  },
  projects: {
    title: "الابتكارات والمشاريع",
    outcomeLabel: "القيمة التجارية",
    viewDetailsLabel: "تفاصيل تعميقية",
    categories: {
      [ProjectCategory.AI_AGENTS]: "وكلاء وأنظمة ذكية",
      [ProjectCategory.AI_TOOLS]: "أدوات الإنتاجية بالذكاء الاصطناعي",
      [ProjectCategory.FULLSTACK]: "تطوير شامل (Full Stack)",
      [ProjectCategory.ERP]: "نظم ERP والمالية",
      [ProjectCategory.EXCEL]: "إكسل والأتمتة",
      [ProjectCategory.PRODUCTIVITY]: "أدوات الإنتاجية",
      [ProjectCategory.LEARNING]: "علوم البيانات",
    },
    items: [
      // --- AI AGENTS ---
      {
        id: 'ai-1',
        title: "FatooraX - معالج الفواتير الذكي",
        category: ProjectCategory.AI_AGENTS,
        techStack: ["Computer Vision", "CrewAI", "Vector Search", "FastAPI"],
        description: "أداة ذكية تستخدم رؤية الحاسوب لاستخراج وتدقيق بيانات الفواتير الورقية.",
        businessDescription: "تؤتمت العملية الشاقة لإدخال ومراجعة الفواتير يدوياً. باستخدام الذكاء الاصطناعي لمطابقة المسح الضوئي مع سجلات قاعدة البيانات، تقلل الأخطاء وزمن المعالجة بشكل جذري لفرق المالية.",
        technicalDescription: "مبنية باستخدام تدفقات العمل الذكية (Agentic AI) لتنسيق الاستخراج والتحقق. تستخدم البحث الدلالي للمطابقة متعددة الطبقات والمنطق الضبابي لمقارنة البيانات المستخرجة مع قواعد بيانات SQL.",
        outcome: "أتمتة التدقيق وإدخال البيانات للفواتير.",
        images: [
          "https://images.unsplash.com/photo-1633419461186-7d40a2307e68?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-7',
        title: "Beneish M-Score AI",
        category: ProjectCategory.AI_AGENTS,
        techStack: ["Python", "Flet", "Pandas", "PDF Parsing"],
        description: "أداة جنائية مالية مدعومة بالذكاء الاصطناعي لكشف التلاعب المحتمل في الأرباح.",
        businessDescription: "توفر للمراجعين والمحللين الماليين 'فحص صحة' فوري للقوائم المالية. من خلال أتمتة حساب مقياس Beneish المعقد، تكشف بسرعة عن المخالفات المحاسبية المحتملة التي قد تستغرق ساعات لاكتشافها يدوياً.",
        technicalDescription: "تطبيق سطح مكتب (Flet) يحلل القوائم المالية بصيغة PDF. يستخدم LLMs لهيكلة البيانات غير المهيكلة، ثم يطبق نماذج رياضية لحساب النسب وإعداد تقارير جنائية.",
        outcome: "أتمتة التحليل الجنائي للقوائم المالية.",
        images: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-8',
        title: "CoA-Gen Agent",
        category: ProjectCategory.AI_AGENTS,
        techStack: ["FastAPI", "Oracle PL/SQL", "Gemini Flash"],
        description: "وكيل ذكي ينشئ أدلة حسابات (CoA) مخصصة للصناعة فورياً.",
        businessDescription: "يحدث ثورة في مرحلة مبيعات وتجهيز ERP. بدلاً من قضاء أيام في تكوين دليل الحسابات يدوياً، يمكن للاستشاريين توليد هيكل مخصص وثنائي اللغة في ثوانٍ، مما يسرع الجدول الزمني للتنفيذ.",
        technicalDescription: "يستفيد من الذكاء الاصطناعي التوليدي لبناء هياكل مالية هرمية بناءً على نوع الصناعة. يتكامل مع Oracle PL/SQL للتحقق ورسم خريطة الدليل مباشرة داخل مخطط ERP.",
        outcome: "اختصار مرحلة تجهيز ERP من أيام إلى ثوانٍ.",
        images: [
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-6',
        title: "AI Theme Manager",
        category: ProjectCategory.AI_AGENTS,
        techStack: ["Python", "Flet", "Gemini 2.0", "LangChain"],
        description: "نظام تصميم ديناميكي مدعوم بالذكاء الاصطناعي لتكييف واجهة المستخدم.",
        businessDescription: "يسمح للتطبيقات بتكييف مظهرها ديناميكياً بناءً على تفضيلات المستخدم أو الهوية البصرية دون تعديل الكود. يعزز تجربة المستخدم من خلال توفير سمات مخصصة فورية.",
        technicalDescription: "حلقة وصل بين واجهة المستخدم الثابتة ومنطق الذكاء الاصطناعي الديناميكي. يترجم الوكيل الوصف النصي إلى تكوينات تصميم معقدة (ألوان، خطوط) ويطبقها فورياً على شجرة مكونات Flet.",
        outcome: "تمكين تكييف واجهة المستخدم مع السياق في الوقت الفعلي.",
        images: [
          "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-3',
        title: "محلل النسب المالية",
        category: ProjectCategory.AI_AGENTS,
        techStack: ["Generative AI", "PDF Parsing", "Pandas"],
        description: "أداة ويب لأتمتة تحليل القوائم المالية (PDF) باستخدام الذكاء الاصطناعي.",
        businessDescription: "تبسط عملية التقييم المالي من خلال استخراج البيانات الرئيسية من التقارير وحساب نسب السيولة والربحية تلقائياً. توفر نظرة سريعة ودقيقة للصحة المالية، مما يقلل من الجهد اليدوي.",
        technicalDescription: "تستخدم عمليات الشظية (RAG) لقراءة ملفات PDF وتحديد الجداول. تقوم بحساب النسب المالية القياسية باستخدام Python (Pandas) وعرض النتائج في لوحة معلومات تفاعلية.",
        outcome: "تقليل وقت تحليل القوائم المالية بشكل كبير.",
        images: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-2',
        title: "المساعد الذكي (Internal RAG)",
        category: ProjectCategory.AI_AGENTS,
        techStack: ["LangChain", "NLP", "Python"],
        description: "أداة محادثة للاستعلام عن البيانات المهيكلة (SQL) وغير المهيكلة (PDF).",
        businessDescription: "حلت مشكلة اختناق الوصول للمعلومات في بيئات ERP المعقدة. تمكن الموظفين من الاستفسار بلغة طبيعية عن السياسات أو سجلات البيانات والحصول على إجابات فورية ودقيقة.",
        technicalDescription: "نظام RAG هجين يتصل بقواعد بيانات SQL ومخزن مستندات. يعالج توجيه الاستفسارات وتوليد SQL واسترجاع السياق لتقديم إجابات موثقة باللغتين العربية والإنجليزية.",
        outcome: "استرجاع فوري للسياسات المالية وسجلات قاعدة البيانات.",
        images: [
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
        ]
      },
      // --- AI TOOLS ---
      {
        id: 'ai-11',
        title: "Labels AI (للتوطين)",
        category: ProjectCategory.AI_TOOLS,
        techStack: ["Python AST", "Gemini Pro", "Flet"],
        description: "أداة للمطورين لأتمتة استخراج وترجمة نصوص واجهات التطبيقات.",
        businessDescription: "تقلل بشكل كبير الوقت اللازم لتعريب التطبيقات. بدلاً من صيانة ملفات الترجمة يدوياً، يمكن للمطورين توليد أصول متعددة اللغات تلقائياً، مما يسرع من جاهزية المنتج للسوق العالمي.",
        technicalDescription: "تقوم بتحليل كود Python المصدري (AST) لتحديد النصوص. ترسل النصوص المستخرجة إلى Gemini Pro للترجمة المدركة للسياق وتولد ملفات JSON قياسية.",
        outcome: "توفير وقت وجهد كبير في عملية تعريب التطبيقات.",
        images: [
          "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'ai-10',
        title: "عقـل (aQil) - للدراسة الذكية",
        category: ProjectCategory.AI_TOOLS,
        techStack: ["Flet", "LangChain", "Gemini", "SQLite"],
        description: "منصة تعليمية تحول المحتوى الجامد إلى وسائل مساعدة ذكية.",
        businessDescription: "تتيح الوصول الديمقراطي للتعليم الشخصي. تحول المحتوى الثابت (ملفات، فيديو) إلى اختبارات وبطاقات تعليمية تفاعلية، مما يجعل الدراسة أكثر جاذبية وفاعلية للطلاب.",
        technicalDescription: "نظام معالجة متعدد الوسائط يستوعب النصوص وتفريغ الفيديو. يستخدم LangChain لتوليد عناصر تعليمية ويخزن تقدم المستخدم في قاعدة بيانات SQLite محلية.",
        outcome: "تحويل المواد التقليدية إلى تجربة تفاعلية مخصصة.",
        images: [
          "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop"
        ]
      },
      // --- FULL STACK ---
      {
        id: 'prod-7',
        title: "FusionPOS AI",
        category: ProjectCategory.FULLSTACK,
        techStack: ["Flet Desktop", "FastAPI", "FusionAI"],
        description: "نظام إدارة تجزئة من الجيل التالي مع ذكاء أعمال مدمج.",
        businessDescription: "يمكن الشركات الصغيرة من الحصول على رؤى تجارية متقدمة. يجمع بين نظام نقاط بيع قوي وذكاء اصطناعي يجيب على أسئلة مثل 'ما هي أكثر الأصناف مبيعاً؟' ويتنبأ باحتياجات المخزون.",
        technicalDescription: "تطبيق Full-Stack بلغة Python بالكامل. الواجهة مبنية بـ Flet للعمل على سطح المكتب وعبر المنصات. الواجهة الخلفية (Backend) تعمل بـ FastAPI مع محرك ذكاء بسيط للتنبؤ ومعالجة اللغة.",
        outcome: "تمكين الشركات الصغيرة من رؤى ذكاء اصطناعي مؤسسية.",
        images: [
          "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=800&auto=format&fit=crop"
        ]
      },
       // --- EXCEL ---
      {
        id: 'erp-1',
        title: "تسوية أصول الشبكة (NFA)",
        category: ProjectCategory.EXCEL,
        techStack: ["Data Mapping", "Excel Macros", "Reconciliation"],
        description: "مشروع ضخم لتسوية الأصول الثابتة لمزود اتصالات رئيسي.",
        businessDescription: "مشروع مالي حيوي وفر الملايين. قام بتسوية السجلات المنفصلة بين المالية والهندسة والجرد الفعلي، مما كشف عن فجوة بقيمة 60 مليون جنيه تم إغلاقها بنجاح.",
        technicalDescription: "أتمتة متقدمة باستخدام Excel وخوارزميات مطابقة للتعامل مع ملايين الصفوف. تم إنشاء ماكروهات مخصصة لتوحيد البيانات وإعداد تقارير الفروقات عبر أنظمة متعددة.",
        outcome: "إغلاق فجوة 60 مليون جنيه وتوفير تكاليف المصادر الخارجية.",
        images: [
          "https://images.unsplash.com/photo-1558494949-ef526b01201b?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1649174984260-1e5212b033d4?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'erp-3',
        title: "محرك الرواتب الشامل",
        category: ProjectCategory.EXCEL,
        techStack: ["Excel VBA", "Complex Formulas", "Automation"],
        description: "أتمتة تخصيص الرواتب ومعالجة الضرائب لأكثر من 6000 موظف.",
        businessDescription: "ضمن دفع رواتب 6000 موظف في الوقت المحدد والمبلغ الصحيح. قضى على مخاطر الخطأ البشري في التخصيصات المعقدة وحسابات الضرائب، مما ضمن الامتثال التنظيمي بنسبة 100%.",
        technicalDescription: "محرك قوي يعتمد على VBA يعالج بيانات الموارد البشرية الخام، ويطبق منطق ضرائب وتخصيص معقد، ويولد ملفات الدفع البنكية وقيود اليومية.",
        outcome: "صفر تأخير في الرواتب الشهرية لقوة عمل ضخمة.",
        images: [
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'prod-10',
        title: "حزمة الذكاء الاصطناعي للإكسل",
        category: ProjectCategory.EXCEL,
        techStack: ["TypeScript (Office Scripts)", "VBA", "Gemini API"],
        description: "دمج قدرات النماذج اللغوية (LLM) مباشرة داخل Excel.",
        businessDescription: "يجلب قوة الذكاء الاصطناعي التوليدي إلى بيئة عمل الماليين: إكسل. يتيح للمستخدمين تصنيف البيانات، تلخيص النصوص، أو طرح الأسئلة حول جداولهم دون مغادرة البرنامج.",
        technicalDescription: "حل هجين: ماكروهات VBA للأتمتة المكتبية ونصوص TypeScript للتوافق مع الويب. يتصل بـ Gemini API مباشرة من صيغ الخلايا لمعالجة نطاقات البيانات.",
        outcome: "تمكين مستخدمي Excel من الاستفادة من الذكاء الاصطناعي محلياً.",
        images: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'prod-1',
        title: "المحاكي المالي متعدد اللغات",
        category: ProjectCategory.EXCEL,
        techStack: ["Advanced Excel", "VBA", "UI Design"],
        description: "نظام محاكاة تفاعلي لقيود اليومية المحاسبية.",
        businessDescription: "بسّط عملية التدريب على أنظمة ERP المعقدة. مكن الاستشاريين من توضيح التأثيرات المحاسبية فورياً للعملاء بلغتهم الأم (إنجليزي، فرنسي، عربي، تركي)، مما حسن الفهم والقبول.",
        technicalDescription: "أداة إكسل ديناميكية تستخدم VBA لإدارة الحالة وتبديل الواجهات. تحاكي منطق شاشات ERP لتوليد قيود اليومية المقابلة بناءً على مدخلات المستخدم.",
        outcome: "توحيد التدريب عبر 4 مناطق لغوية مختلفة.",
        images: [
          "https://images.unsplash.com/photo-1543286386-713df548e9cc?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        id: 'prod-6',
        title: "MediStock - مراقبة المخزون",
        category: ProjectCategory.EXCEL,
        techStack: ["Excel", "VBA", "Data Visualization"],
        description: "نظام توزيع وتخصيص مخزون الأدوية.",
        businessDescription: "تحسين مستويات المخزون عبر فروع الصيدليات. منع نفاد المخزون أو تكدسه من خلال توفير أداة واضحة للتخصيص والتتبع، مما أثر إيجاباً على الكفاءة التشغيلية.",
        technicalDescription: "تطبيق إكسل لإدارة المخزون مع 6 أوراق ديناميكية. يتميز نماذج إدخال مدعومة بـ VBA وتحديث تلقائي للوحات المعلومات لتصور حالة المخزون.",
        outcome: "تحسين مخزون الأدوية عبر أكثر من 15 فرع.",
        images: [
          "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
        ]
      },
      // --- PRODUCTIVITY ---
      {
        id: 'prod-8',
        title: "DocuSync - مزامنة الوثائق",
        category: ProjectCategory.PRODUCTIVITY,
        techStack: ["Python-docx", "Flet", "Pandas"],
        description: "أداة أتمتة مزامنة المصطلحات لتوثيق ERP.",
        businessDescription: "تضمن الاتساق في الوثائق الفنية. تقضي على مخاطر المصطلحات القديمة عبر آلاف الصفحات، مما يوفر أسابيع من جهد المراجعة والتدقيق اليدوي.",
        technicalDescription: "تطبيق Python يستخدم `python-docx` للمرور عبر ملفات Word. يستبدل المصطلحات بناءً على ملف تعيين Excel مع الحفاظ على التنسيق الدقيق (العريض، الأنماط، الألوان).",
        outcome: "القضاء على البحث والاستبدال اليدوي للأدلة الضخمة.",
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
        description: "تطبيق إدارة معرفة يعمل محلياً.",
        businessDescription: "يعزز الإنتاجية الشخصية من خلال تنظيم الموارد الرقمية المشتتة (روابط، ملفات) في قاعدة بيانات محلية واحدة قابلة للبحث، بعيداً عن فوضى المتصفح والاعتماد على السحابة.",
        technicalDescription: "تطبيق سطح مكتب مبني بـ Flet و SQLite. ينفذ التصنيف، وفهرسة البحث، وتنظيم الموارد في نظام تخزين ملفات محلي خاص.",
        outcome: "إنشاء قاعدة معرفة رقمية شخصية مركزية.",
        images: [
          "https://images.unsplash.com/photo-1481487484168-9b930d55206d?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=800&auto=format&fit=crop"
        ]
      },
    ]
  },
  contact: {
    title: "تواصل معي",
    subtitle: "دعنا نؤتمت مستقبل المالية",
    emailLabel: "البريد الإلكتروني",
    linkedinLabel: "لينكد إن",
    phoneLabel: "الهاتف",
    whatsappLabel: "واتساب",
    githubLabel: "جيت هب",
    connectLabel: "تواصل",
    location: "القاهرة، مصر",
    saveCardLabel: "حفظ جهة الاتصال"
  },
  nav: {
    profile: "الملف الشخصي",
    experience: "الخبرات",
    projects: "الابتكارات",
    contact: "تواصل"
  }
};

export const CONTENT = {
  'en': DATA_EN,
  'ar': DATA_AR
};

export const CONTACT_DATA_STATIC = {
  email: "m.momen.cairo@gmail.com",
  phone: "+201016629988",
  linkedin: "linkedin.com/in/muhammedmomen",
  github: "github.com/MMomen-ERP",
  website: "mmomen-portfolio.github.io"
};

export const getContent = (lang: Language): AppContent => {
  return CONTENT[lang] || CONTENT['en'];
};