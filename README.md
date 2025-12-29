<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Portfolio Project

A modern, responsive portfolio built with React, TypeScript, Vite, and Framer Motion.

**Live Demo:** `https://yourusername.github.io/repository-name/` *(Update after deployment)*

## Features

- ⚡ Fast and optimized with Vite
- 🎨 Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🔒 Environment variable support
- 🚀 Automated deployment to GitHub Pages

## Run Locally

**Prerequisites:** Node.js (v18 or higher)

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to GitHub Pages

### Initial Setup

1. **Create a GitHub repository** for this project

2. **Add your Gemini API key as a GitHub Secret:**
   - Go to your repository Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `GEMINI_API_KEY`
   - Value: Your Gemini API key

3. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Source: Select "GitHub Actions"

4. **Push your code:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

### Automated Deployment

The project uses GitHub Actions for automated deployment. Every push to the `main` branch will:
1. Install dependencies
2. Build the project
3. Deploy to GitHub Pages

You can also manually trigger deployment from the Actions tab.

### Manual Deployment

Alternatively, deploy manually using:
```bash
npm run deploy
```

## Project Structure

```
├── components/          # React components
├── .github/workflows/   # GitHub Actions workflows
├── index.html          # Entry HTML file
├── App.tsx             # Main App component
├── constants.ts        # Application constants
├── types.ts            # TypeScript type definitions
└── vite.config.ts      # Vite configuration
```

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Framer Motion** - Animations
- **Lucide React** - Icons

## License

MIT

---

View original in AI Studio: https://ai.studio/apps/drive/10leP6LbMHTt_0RzXEqn9vZZtL3ru0k5y
