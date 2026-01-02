# CoA-Gen Agent: AI-Powered ERP Presales Optimizer

## Project Vision
**CoA-Gen Agent** is a strategic solution designed to revolutionize the "Discovery and Demo" phase of ERP sales cycles. By leveraging Google's Gemini LLM, it transforms the traditionally slow and manual process of configuring a Chart of Accounts (CoA) into an instantaneous, AI-powered experience.

## The Problem: The "Presales Bottleneck"
In ERP sales, consultants often spend days manually creating a realistic Chart of Accounts for a prospect's specific industry (e.g., Pharma, Chemicals, Retail). 
- **Time Consuming**: Manual setup delays the demo.
- **Data Inaccuracy**: Generic templates fail to "wow" the prospect.
- **Language Barriers**: Aligning local (Arabic) and foreign (English) names is tedious.

## The Solution: AI-Powered Rapid Prototyping
CoA-Gen Agent automates the creation of complex, multi-level, industry-specific accounting structures, enabling presales teams to generate a production-ready environment in seconds.

## Key Features

### 1. Instant Industry Adaptation
Generate a complete, hierarchical CoA for any industry (from "Pharmaceutical Manufacturing" to "Boutique Retail") with a single prompt.

### 2. Built-in Bilingual Intelligence
Automatically generates names in both **Arabic (Local)** and **English (Foreign)**, ensuring the demo environment feels localized and professional for global prospects.

### 3. ERP-Ready Structured Data
Outputs data in structured formats (`JSONL`, `CSV`, and `SQL`) that map directly to standard ERP schemas (like Oracle GNR_ACCNT), permitting immediate import into demo databases.

### 4. Hierarchical Depth & Logic
- **Multi-Level Support**: Supports levels 1 to 5+ of account hierarchy.
- **Accounting Logic**: Automatically assigns correct account types (Asset, Liability, etc.), Debit/Credit natures, and Statement types (Balance Sheet vs. P&L).

### 5. Seamless Integration
- **RESTful API**: Can be embedded into any web-based ERP portal.
- **Oracle/PL-SQL Integration**: Includes specialized templates for Oracle-based systems (e.g., integration via `UTL_HTTP`).

## Presales Workflow Optimization

| Manual Process | AI-Powered with CoA-Gen |
| :--- | :--- |
| **Days** to draft and enter accounts | **Seconds** to generate a complete structure |
| **Static** generic industry templates | **Dynamic** AI-tailored accounts per prospect |
| **Manual** translation of account names | **Automated** bilingual synchronization |
| **High risk** of data entry errors | **Consistent** hierarchical and accounting logic |

## Technology Stack
- **Engine**: Google Gemini 2.5 Flash
- **Framework**: FastAPI (Python)
- **Data Modeling**: Pydantic for strict schema validation
- **Integration**: REST API, Oracle PL/SQL, JSONL/CSV Output

## Target Audience
- **Presales Engineers**: Reduce demo prep time.
- **ERP Consultants**: Rapidly prototype new industry verticals.
- **Sales Teams**: Present highly customized live demos that resonate with industry-specific needs.
