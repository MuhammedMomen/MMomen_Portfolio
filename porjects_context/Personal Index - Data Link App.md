# Personal Index (Data Link)

A sophisticated, modern link management application built with Python and Flet. Personal Index provides a centralized hub for organizing, searching, and managing your personal and professional web links with a premium user interface.

## 🚀 Project Overview
Personal Index is designed to solve the problem of bookmark clutter. It offers a structured way to categorize web resources, track usage statistics, and quickly access frequently used links through a clean, responsive interface that supports both light and dark modes.

## 🛠️ Technology Stack
- **Frontend/UI**: [Flet](https://flet.dev/) (Flutter-powered UI framework for Python)
- **Backend**: Python 3.x
- **Database**: SQLite3 (Persistent local storage)
- **Packaging**: Poetry (Dependency management)

## ✨ Key Features

### 📂 Organization & Management
- **Category System**: Group links into custom categories with unique icons and colors.
- **Tagging**: Enhanced searchability with multiple tags per link.
- **Favorite System**: Quick access to your most important resources.
- **Bulk Import/Export**: (Planned/In Progress) Support for JSON, CSV, and TXT formats.

### 📊 Dashboard & Stats
- **Summary Cards**: Real-time stats on total links, categories, and tags.
- **Activity Tracking**: Weekly and monthly growth charts using dynamic UI elements.
- **Recent Links**: One-tap access to recently added resources.

### 🎨 Premium UI/UX
- **Responsive Design**: Adapts seamlessly to various screen sizes.
- **Dynamic Themes**: Full support for Light and Dark modes with automatic adaptation.
- **Animations**: Smooth transitions using Flet's animation capabilities.
- **Side & Bottom Navigation**: Intuitive navigation structure for power users.

## 🗄️ Database Schema
The application uses two primary tables:
- `categories`: Stores category names, HEX colors, and Material Design icons.
- `links`: Stores link metadata including labels, URLs, descriptions, tags, and timestamps.
- `settings`: (Planned) Personalization and app-wide configuration data.

## 🛠️ Getting Started
1. **Installation**:
   ```powershell
   poetry install
   ```
2. **Setup Data**:
   ```powershell
   poetry run python src/seed_data.py
   ```
3. **Run App**:
   ```powershell
   poetry run flet run src/main.py
   ```
