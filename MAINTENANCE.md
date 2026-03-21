# GitHub User Search Tool - Maintenance Log

## Project Info
- **Framework**: React 18.3.1 + Vite 5.4.21
- **Deployment**: Netlify
- **Node Version**: 22
- **Package Manager**: npm
- **Repository**: [https://github.com/Noble-247/Github-Search-App]
- **Live URL**: [https://coolgithub-search.netlify.app/]

## Features to Test After Updates
- ✅ Real-time search as you type
- ✅ User profile display (bio, location, stats)
- ✅ Repository listing with links
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ GitHub API integration working
- ✅ Navigation between pages

## Last Updated
**Date**: March 14, 2025
**By**: Emmanuel

## Update History

### 2025-03-14 - Security Fix & Maintenance Update
- **Fixed**: esbuild security vulnerability (moderate severity)
  - Updated esbuild to 0.27.4
  - Used npm overrides to force Vite to use safe esbuild version
- **Added**: Node version lock files (.nvmrc, .node-version)
- **Status**: ✅ 0 vulnerabilities
- **Build**: ✅ Successful
- **Tests**: ✅ All features working
- **Current versions**:
  - React: 18.3.1 (staying on v18, v19 too new)
  - Vite: 5.4.21 (v8 has breaking changes)
  - React Router: 6.30.3 (v7 has breaking changes)
  - esbuild: 0.27.4 (overridden)

## Known Issues
- None currently

## Packages on Hold (Major Updates)
- **React 18 → 19**: Too new (Dec 2024 release), waiting for ecosystem stability
- **React Router 6 → 7**: Breaking changes in routing API
- **Vite 5 → 8**: Major breaking changes (Feb 2025 release)
- **ESLint 8 → 10**: New flat config format

## Dependencies Status
- ✅ Vite: Latest v5 (5.4.21)
- ✅ React: Stable on v18
- ✅ Axios: Up to date
- ✅ React Icons: Up to date
- ✅ esbuild: Overridden to 0.27.4 for security

## Next Scheduled Maintenance
**Date**: June 14, 2025 (3 months)

**Tasks**: 
- [ ] Run `npm audit`
- [ ] Check `npm outdated`
- [ ] Check if React 19 ecosystem is stable
- [ ] Review React Router v7 migration guide
- [ ] Check Vite 6 release status
- [ ] Review Netlify build logs for deprecation warnings

## Notes
- Using npm overrides to ensure all esbuild dependencies use safe version
- Intentionally staying on stable major versions for production reliability