Project Overview: aQil (AI Study Assistant)
Core Concept
aQil (formerly StudyAI) is an AI-powered educational SaaS platform designed to revolutionize how students and professionals interact with learning materials. The project emerged from a vision to provide a personalized "AI Tutor" that can process diverse information sources—ranging from academic PDFs to YouTube lectures—and instantly transform them into structured, interactive study aids.

Developed prior to the widespread availability of tools like Google's NotebookLM, aQil pioneers the "Source-to-Knowledge" workflow, allowing users to maintain a private library of materials and generate customized learning outputs.

Key Features
1. Multimodal Knowledge Extraction
Users can feed the AI with various types of content, which the system processes using Langchain and specialized document loaders:

Document Uploads: Support for PDF and TXT files.
Web Content: Direct extraction of text from URLs.
Multimedia Integration: Transcription and analysis of YouTube videos via URLs.
2. AI-Generated Study Aids
The core engine utilizes Google Gemini to generate three primary types of interactive materials:

Smart Quizzes: Multiple-choice and true/false questions with instant feedback and answer reveals.
Dynamic Flashcards: Term/definition pairs with a "flip" mechanic for self-testing.
Structured Summaries: Concise, high-level overviews of source material to facilitate quick review.
3. Study Spaces (Organization)
A feature-rich organization system that allows users to:

Curate Content: Favorite specific quiz questions, flashcards, or summaries.
Organize by Topic: Group favorited items into custom-named "Study Spaces" (e.g., "Biology 101", "Project Q3 Prep").
History Tracking: A persistent sidebar allows users to revisit past generations, rename them for easier retrieval, and build upon previous work.
4. Native Multi-Language Support (i18n)
Built with international accessibility in mind, the app supports:

Bi-directional UI: Full support for English (LTR) and Arabic (RTL).
Content Generation: Ability to generate study materials in multiple languages regardless of the source language.
5. Historical Context: The Mindmap Feature
NOTE

In earlier iterations, the project featured a Mindmap Generation tool. This tool visually mapped the connections between concepts in a source document, providing a spatial representation of knowledge. While not active in this specific build, it remains a core part of the "aQil" vision for comprehensive non-linear learning.

Technical Stack
Frontend: Flet (Flutter for Python) providing a premium, responsive cross-platform experience.
Orchestration: Langchain for document loading, text splitting, and LLM chain management.
Intelligence: Google Gemini (via Google Generative AI) as the primary reasoning engine.
Database: SQLite for local, fast, and structured data persistence of users, history, and study spaces.
Authentication: JWT-based secure sessions with SHA-256 password hashing.
aQil vs. NotebookLM
While Google's NotebookLM has since introduced a similar "Notebook" concept, aQil differentiates itself through:

Direct Study Aids: Focused specifically on the mechanics of studying (quizzes/flashcards) rather than just note-taking.
Multilingual Focus: Native, first-class support for Arabic and RTL layouts.
Independence: A portable, Python-based architecture that isn't tied exclusively to a specific cloud provider's ecosystem for data hosting.