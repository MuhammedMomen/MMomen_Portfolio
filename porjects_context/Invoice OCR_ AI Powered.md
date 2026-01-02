FatooraX - Project Description
Project Idea
FatooraX is an AI-powered automation tool designed to streamline the extraction, validation, and matching of invoice data. By leveraging state-of-the-art Large Language Models (LLMs), semantic search, and agentic workflows, FatooraX transforms raw invoice images into structured, verified data that can be easily integrated into accounting or ERP systems.

The core motivation is to eliminate manual data entry and reduce errors in accounts payable processes by using "AI First" principles for document understanding and entity resolution.

Core Architecture
FatooraX follows a modular, three-tier architecture:

1. Frontend (Flet)
A modern, cross-platform Single Page Application (SPA) built with the Flet framework (Python-based).

Themed UI: A premium, responsive interface with Dark/Light mode support.
Navigation: Tabbed layout separating Configuration (LLM, Matching, Entities) from Analysis & Processing.
Real-time Feedback: Dynamic status indicators and snackbar notifications for background processing.
2. Backend (FastAPI)
A high-performance FastAPI server that orchestrates all data processing and persistence.

RESTful API: Endpoints for session management, entity CRUD, and invoice processing.
Persistence: Uses SQLAlchemy with SQLite for reliable local data storage.
Safety: Robust CORS and health monitoring.
3. AI Orchestration Layer (LangGraph & LangChain)
The "brain" of the application, utilizing advanced AI patterns:

Agentic Workflow: Managed by LangGraph, coordinating extraction, matching, and validation nodes.
Multimodal Extraction: Uses Google Gemini to "read" invoice images directly without traditional OCR.
Hybrid Matching Engine: A sophisticated system for linking extracted names to known entities (vendors/items) using:
Fuzzy Matching: For simple typographic similarities.
Vector Search (FAISS): For semantic meaning using HuggingFace embeddings.
Contextual AI Match: For complex cases requiring LLM reasoning.
Key Features
📄 Intelligent AI Extraction
Zero-OCR Required: Direct multimodal visual understanding of invoices.
Structured Output: Automatic extraction of supplier info, dates, tax IDs, and full line-item details into a standardized JSON schema.
Custom Instructions: Users can provide specific prompts to guide the AI for unique invoice formats.
🔍 Advanced Entity Resolution
Multi-Strategy Matching: Supports "Fuzzy First", "Vector First", and "AI First" presets.
Adaptive Strategy: Automatically switches matching logic based on the complexity of the query.
Semantic Understanding: Recognizes that "Test Corp Ltd." and "Test Corporation Limited" are the same entity, even without a literal string match.
🧮 Automated Calculation Validation
Arithmetic Consistency: A dedicated agent verifies that Quantity * Price = Total and that subtotals/taxes sum up correctly to the grand total.
Error Flagging: Highlights inconsistencies for manual review.
⚙️ Comprehensive Configuration
Model Tuning: Full control over LLM parameters (temperature, model selection).
Matching Gates: Configurable confidence thresholds to ensure high-quality data linking.
Session-Based Workspaces: Separate environments for different clients or projects.
Technology Stack
Language: Python 3.9+
Frontend: Flet
Backend API: FastAPI, Uvicorn
Database: SQLite, SQLAlchemy
AI/ML:
LangChain & LangGraph
Google Gemini (Multimodal)
FAISS (Vector Store)
Sentence-Transformers (Embeddings)
FuzzyWuzzy (Fuzzy Matching)