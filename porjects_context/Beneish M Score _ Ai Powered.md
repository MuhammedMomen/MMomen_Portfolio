# Beneish M-Score Financial Analysis Tool - Project Description

## 💡 Project Idea
The **Beneish M-Score Financial Analysis Tool** is an AI-powered desktop application designed to assist financial analysts, auditors, and investors in detecting potential earnings manipulation in corporate financial statements. 

By leveraging the **Beneish M-Score model**—a proven mathematical formula developed by Professor Messod Beneish—the tool calculates a specific score based on eight financial ratios. A score higher than **-1.78** indicates a higher probability that the company's earnings may have been manipulated.

The core innovation of this project is the integration of **Large Language Models (LLMs)** to automate the tedious process of extracting financial data from complex documents like PDFs, Excel sheets, and CSV files, making sophisticated financial forensics accessible and efficient.

---

## 🔥 Key Features

### 1. AI-Powered Data Extraction
- **Zero-Manual Entry**: Automatically identifies and extracts 13+ critical financial metrics from financial statements.
- **Multi-Model Support**: Compatible with **OpenAI GPT**, **Anthropic Claude**, and **Google Gemini**.
- **Contextual Understanding**: Handles varied financial report layouts and terminologies with high accuracy.

### 2. Forensic Financial Analysis
- **M-Score Calculation**: Automatically computes the 8 key ratios and the final M-Score.
- **Risk Assessment**: Instant categorization of companies into "Low Risk" or "High Risk" groups.
- **Multi-Year Comparison**: Compares current year data against the previous year to identify trends.

### 3. User Experience & Accessibility
- **Modern Desktop UI**: Built with **Flet (Flutter for Python)** for a sleek, responsive, and cross-platform experience.
- **Multilingual Support**: Fully localized in both **English** and **Arabic**.
- **Interactive Results**: Color-coded risk levels and detailed educational explanations for each ratio.
- **Data Portability**: Easy "Copy Data" feature for exporting extracted metrics to Excel or other analysis tools.

---

## 🛠️ Technical Stack
- **UI Framework**: [Flet](https://flet.dev/) (Python-based framework powered by Flutter)
- **AI Integration**: [LangChain](https://www.langchain.com/) for orchestrating LLM providers (Google GenAI, OpenAI, Anthropic)
- **File Processing**: `PyPDF2`, `openpyxl`, `pandas`
- **Environment Management**: `python-dotenv`
- **Language**: Python 3.8+

---

## 🏗️ Architecture (MVC Pattern)
The application follows a clean **Model-View-Controller (MVC)** architecture to ensure maintainability and scalability:

- **Models**: Handles the core business logic, M-Score formulas, and translation data (`beneish_models.py`, `translation.py`).
- **Views**: Manages the user interface components and user interactions (`main_view.py`, `results_view.py`, `settings_view.py`).
- **Controllers**: Acts as the bridge, coordinating data flow between UI and services (`beneish_controller.py`).
- **Services**: Specialized layers for external integrations like LLM APIs and local file parsing (`llm_service.py`, `file_service.py`).

---

## 📊 The Eight Beneish Ratios
The tool calculates and explains the following metrics:
1. **DSRI**: Days Sales in Receivables Index (Revenue manipulation)
2. **GMI**: Gross Margin Index (Margin deterioration)
3. **AQI**: Asset Quality Index (Asset overstatement)
4. **SGI**: Sales Growth Index (Extreme growth risks)
5. **DEPI**: Depreciation Index (Expense under-recording)
6. **SGAI**: SGA Expenses Index (Efficiency analysis)
7. **LVGI**: Leverage Index (Debt/Capitalization risks)
8. **TATA**: Total Accruals to Total Assets (Cash flow vs. Earnings)

---

## 🚀 How It Works (User Workflow)
1. **Setup**: User configures their preferred AI provider and API key in the settings.
2. **Upload**: User uploads a financial statement (PDF, Excel, or CSV).
3. **Analyze**: AI extracts the required metrics (Revenue, COGS, Assets, etc.) for two consecutive years.
4. **Result**: The tool displays the calculated M-Score, risk level, and a breakdown of all ratios with clear interpretations.
