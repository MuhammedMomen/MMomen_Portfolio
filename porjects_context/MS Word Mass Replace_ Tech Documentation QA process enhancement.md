ERP Documentation & Localization: Mass Word Replace Utility
Overview
This project is a specialized productivity tool designed to automate the heavy-lifting involved in ERP software documentation, translation, and localization. In the ERP industry, products often undergo significant renaming, module changes, or localization efforts that span thousands of pages of user manuals and technical guides.

Manual "Find and Replace" in Microsoft Word is insufficient for these professional workflows, as it often destroys formatting, misses text in headers/footers, or fails due to hidden XML tags. This utility bridges that gap by providing a high-precision, automated synchronization layer between terminology glossaries (Excel) and final documents (Word).

Core Project Idea
To provide a Terminological Synchronization Engine that allows localization and documentation teams to maintain a master list of terms in Excel and instantly "flash" those changes across complex MS Word documents while preserving every bit of professional layout and styling.

Key Features & Productivity Drivers
1. Excel-to-Word glossary synchronization
Teams can maintain their terminology or translation glossaries in standard 
.xlsx
 files. The utility imports these pairs (Old Term -> New Term) and applies them in bulk, eliminating hours of repetitive manual data entry.

2. Formatting-Aware Replacement Engine
Unlike standard search-and-replace, this tool operates on the run level of MS Word's XML structure. This ensures that:

Bold, italic, and colored text is preserved.
Paragraph alignments and font styles remain intact.
Hyperlinks and special formatting are not corrupted during the process.
3. Comprehensive Document Coverage
The tool scans and replaces text in locations often missed by basic scripts:

Main Body Paragraphs: The bulk of the content.
Tables: Crucial for ERP documentation (field names, setup tables).
Headers & Footers: Where module names, versioning, and corporate branding often reside.
4. Intelligent Multi-Pass Replacement (XML Run Defragmentation)
Microsoft Word often splits single words into multiple "runs" in the underlying XML (due to spellcheck markers or mixed LTR/RTL text). This tool features a 5-pass retry mechanism to ensure that fragmented strings are successfully identified and replaced, a critical feature for high-precision ERP manuals.

5. Multi-Language & Bi-directional Support
Native Arabic/English UI: Specifically built with "Lalezar" typography for professional RTL (Arabic) support.
Bi-directional Swap: A "Swap" feature allows teams to easily toggle between source and target languages or old and new product versions.
6. Safety & Verification Tools
Real-time Counters: Displays Found vs. Replaced counts per term, allowing terminologists to verify 100% completion.
Non-Destructive Saving: Offers a "Save as new" option with automatic timestamping to maintain a clear audit trail of document versions.
Technical Stack
UI Framework: Flet (Builds high-performance, cross-platform apps with Python).
Document Processing: python-docx for deep XML manipulation of 
.docx
 files.
Data Management: pandas for handling complex Excel-based glossaries.
Design Language: Minimalist modern UI with integrated RTL/LTR support.