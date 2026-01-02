# Schema AI: AI-Powered Database Designer

Schema AI is a modern, web-based tool designed to help developers, architects, and business analysts visually design, manage, and analyze database schemas with the power of artificial intelligence.

It provides an intuitive interface for creating projects, defining schemas for different SQL dialects, and building out tables and relationships, all while offering AI-powered assistance to accelerate and improve the design process.

## Key Features

### Core Database Design
- **Project-Based Organization**: Manage multiple database designs in isolated projects.
- **Multi-Schema Support**: Create multiple schemas within a single project, each with its own target SQL dialect (PostgreSQL, MySQL, SQLite, etc.).
- **List & Visual Editors**:
    - **Table Editor**: A detailed card view for creating and modifying tables and columns, setting data types, and defining constraints like Primary Keys, Foreign Keys, and Unique constraints.
    - **Interactive Canvas**: A fully interactive visual designer powered by React Flow, allowing you to see your tables as nodes and their relationships as connectors. Drag and rearrange your architecture visually.
- **SQL Dialect Awareness**: The tool understands different SQL dialects and can map data types between them when you switch a schema's target dialect.

### AI-Powered Assistance
- **Generate from Prompt**: Scaffold entire database projects or individual schemas from a simple text description (e.g., "a database for a blog").
- **Edit with AI**: Use natural language to modify your schemas. Ask the AI to "add a 'tags' table with a many-to-many relationship to posts" and watch it happen.
- **Schema Analysis**: Get intelligent suggestions from an AI expert to improve your schema's performance, security, normalization, and adherence to best practices. Apply fixes with a single click.

### Project Management & Documentation
- **Business Requirements Document (BRD)**: Each project includes a dedicated BRD page with a full markdown editor. You can write your requirements manually or have the AI generate a complete BRD based on your schema.
- **Screen Flow Designer**: Design user flows and application logic using an integrated Mermaid.js editor. Generate and edit your diagrams with AI to quickly visualize user journeys.
- **Task Management Workspace**: A built-in Kanban board for each project to manage tasks. It features drag-and-drop functionality, different view modes (Table, Calendar, Timeline), and allows for detailed task tracking.
- **Versioning**: Commit versions of your project with descriptive messages and restore to any previous point in time.

### Code Export
- **SQL DDL Generation**: Export your schemas as SQL `CREATE TABLE` scripts for various dialects.
- **ORM & Model Export**: Generate Python code for SQLAlchemy models or Pydantic V2 models.
- **UI Generation**: Export a Python Flet UI form for basic CRUD operations on a table.
- **Data Export**: Download your schema definition as JSON, CSV, or Excel (XLSX).

## Getting Started

The application is ready to use.
1.  Navigate to the homepage to see the project dashboard.
2.  Click on "New Project" to create a project manually or use the AI generator.
3.  Once inside a project, you can add schemas and tables, or switch to the BRD, Screen Flow, and Workspace views using the sidebar.

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **UI**: ShadCN UI Components, Tailwind CSS
- **State Management**: React Hooks & Context
- **Diagramming**: React Flow (for schema visualizer), Mermaid.js (for screen flows)
- **Generative AI**: Google Gemini via Genkit
- **Database (for app data)**: Firebase Firestore
