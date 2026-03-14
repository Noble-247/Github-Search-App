# GitHub Search App

A modern, responsive web application for searching and exploring GitHub user profiles and repositories in real-time.

> **Live Demo**: [coolgithub-search.netlify.app](https://coolgithub-search.netlify.app/)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Maintenance & Security](#maintenance--security)
- [Project Journey](#project-journey)

## Features

- 🔍 **Real-time Search**: Search for GitHub users instantly as you type
- 👤 **User Profiles**: View detailed information about GitHub users including bio, location, and statistics
- 📂 **Repository Listing**: Browse user repositories with details and links
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast & Modern**: Built with Vite for lightning-fast development and production builds
- 🎨 **Clean UI**: Intuitive user interface with smooth navigation
- 📊 **GitHub API Integration**: Leverages the official GitHub REST API

## Tech Stack

### Core Technologies
- **React** (v18.3.1) - UI library
- **Vite** (v5.3.1) - Build tool and dev server
- **React Router** (v6.24.1) - Client-side routing
- **Axios** (v1.7.5) - HTTP client for API requests

### UI & Icons
- **React Icons** (v5.2.1) - Icon library

### Development & Linting
- **ESLint** (v8.57.0) - Code quality and style enforcement
- **Babel** - JavaScript transpilation via @vitejs/plugin-react

## Project Structure

```
src/
├── components/
│   ├── context/              # Context API setup
│   │   ├── alert/            # Alert notification context
│   │   └── github/           # GitHub API context
│   ├── layout/               # Layout components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Alert.jsx
│   │   └── Spinner.jsx
│   ├── pages/                # Page components
│   │   ├── Home.jsx          # Search page
│   │   ├── About.jsx         # About page
│   │   └── NotFound.jsx      # 404 page
│   ├── users/                # User search & display
│   │   ├── Search.jsx
│   │   ├── Users.jsx
│   │   ├── User.jsx          # User detail page
│   │   ├── UserItem.jsx
│   │   └── ClearUsers.jsx
│   └── repos/                # Repository display
│       ├── Repos.jsx
│       └── RepoItem.jsx
├── hooks/                    # Custom React hooks
│   └── useTitle.jsx          # Document title management
├── App.jsx                   # Main application component
├── main.jsx                  # Entry point
└── index.css                 # Global styles
```

## Getting Started

### Prerequisites
- **Node.js** (v16 or higher recommended)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Github-Search-App-update
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173` (or the next available port)

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot module replacement (HMR) |
| `npm run build` | Build for production (optimized bundle in `/dist` folder) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality and style |

## Environment Variables

Currently, the app uses the public GitHub REST API without authentication. For higher rate limits or private data access, you can add a GitHub personal access token:

```
VITE_GITHUB_TOKEN=your_github_token_here
```

**Note**: Never commit tokens to version control. Use environment variable files (`.env.local`) for local development.

## Deployment

The application is deployed on **Netlify**. 

### Build Configuration
- **Build Command**: `npm ci && npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 22

### Deploy Your Own Version

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `/dist` folder** to your hosting platform (Netlify, Vercel, GitHub Pages, etc.)

3. **Ensure SPA routing** is configured (redirects from `/*` to `/index.html`)

See [netlify.toml](netlify.toml) for production deployment configuration.

## Maintenance & Security

### Current Status
- ✅ All dependencies are up to date
- ⚠️ **Known Issue**: Moderate severity vulnerability in esbuild dependency
  - Related to vite versions <6.1.6
  - Resolution requires vite upgrade (breaking change)
  - Not critical for this project scope

### Recommended Actions
- Review [audit-report.txt](project-maintenance-files/audit-report.txt) for detailed vulnerability info
- Run `npm audit` regularly to check for security updates
- Keep dependencies updated with `npm update`

### Code Quality
- ESLint is configured and enforced (0 warnings policy)
- Run `npm run lint` before committing code

## Project Journey

This project represents a personal learning journey in web development:

### Original Version
- Built while learning REST APIs and data fetching
- Used Create React App and React Router v4
- Bootstrap icons for UI

### Recent Modernization (2024)
- 🚀 Migrated from Create React App to **Vite** (significant speed improvement)
- 🗺️ Upgraded to **React Router v6** (improved routing capabilities)
- ✨ Switched to **React Icons** (better React integration)
- 🎨 Enhanced UI/UX for better user experience
- 📦 Modernized build process and dependencies

### Key Technologies
- ⚛️ React - Modern UI library
- 🐙 GitHub REST API - Data source
- 🚦 React Router - Navigation
- 🖼️ React Icons - Scalable icons
- ⚡ Vite - Lightning-fast build tool

## License

This project is open source and available for personal and educational use.

---

**Questions or Feedback?** Feel free to open an issue or contribute to the project!

**Built with ❤️ as a learning project and commitment to modern web development practices.**
