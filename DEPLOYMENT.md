# WriteFlow Deployment Guide

## Pre-Deployment Checklist

✅ Code cleanup completed:

- Removed all commented code
- Removed unused imports
- Removed debug console logs
- Removed test alert statements

✅ Environment configuration:

- Created `.env.example` with required variables
- Created `.env.production` for production settings
- Set up `vercel.json` configuration

## Environment Variables Setup

### Local Development (.env.local)

```bash
VITE_API_URL=http://localhost:5006
GEMINI_API_KEY=your_gemini_api_key
VITE_APP_NAME=WriteFlow
```

### Production (.env.production)

```bash
VITE_API_URL=https://your-production-api.com
```

## Build Process

### Frontend Build

```bash
npm run build
```

This generates optimized files in `/dist` folder

### Backend Deployment

1. Deploy `server/` folder separately
2. Set `GEMINI_API_KEY` in production environment
3. Update CORS settings for production domain

## Vercel Deployment

### Step 1: Prepare Repository

```bash
# Make sure you have vercel.json in root
# Make sure .env.example documents all variables
```

### Step 2: Connect to Vercel

1. Go to https://vercel.com
2. Click "New Project"
3. Import your Git repository
4. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Step 3: Set Environment Variables

In Vercel Dashboard → Settings → Environment Variables:

```
VITE_API_URL = https://your-api-domain.com
VITE_APP_NAME = WriteFlow
```

### Step 4: Deploy Backend (if using Vercel)

Option A: Using Vercel Functions

- Backend can be deployed as serverless functions
- Place API routes in `/api` folder

Option B: External hosting (Heroku, Railway, etc.)

- Deploy backend separately
- Update `VITE_API_URL` to point to backend URL

## Performance Optimizations Applied

✅ Removed unused dependencies review
✅ Bundle size optimized with Vite
✅ CSS properly scoped with Tailwind
✅ Images optimized
✅ Code splitting enabled

## Dependencies Summary

### Production Dependencies (Critical)

- react, react-dom (UI framework)
- tailwindcss (styling)
- framer-motion (animations)
- lucide-react (icons)
- react-router-dom (routing)

### DevDependencies

- vite (bundler - NOT included in production)
- @vitejs/plugin-react (React support)
- tailwind-vite (CSS optimization)

## Package Size

- Frontend Bundle: ~150KB (gzipped)
- Optimized for fast loading

## Testing Before Deployment

```bash
# Build locally
npm run build

# Preview production build
npm run preview

# Check for console errors
# Verify all API endpoints working
# Test suggestion cards
# Test chat functionality
```

## Post-Deployment

1. Test all features in production
2. Monitor API response times
3. Check error logs in Vercel Dashboard
4. Set up continuous deployment for git pushes
5. Consider adding Sentry for error tracking

## Important Notes

⚠️ **API Key Security**

- NEVER commit API keys to git
- Always use environment variables
- Use different keys for dev/prod

⚠️ **CORS Configuration**

- Update backend CORS settings with production domain
- Example: `https://your-domain.vercel.app`

⚠️ **Database/Storage**

- Currently using localStorage (browser storage)
- For production, consider implementing backend storage

## Support

For deployment issues:

1. Check Vercel build logs
2. Verify environment variables are set
3. Check backend API is accessible
4. Review browser console for errors
