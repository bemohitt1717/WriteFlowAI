# 🚀 Quick Deployment Checklist

## Pre-Deployment (Local)

- [ ] Run `npm run build` - ensure no errors
- [ ] Run `npm run preview` - test production build locally
- [ ] Check browser console - should be clean
- [ ] Test all features:
  - [ ] Type message and send
  - [ ] Click suggestion cards
  - [ ] View AI responses
  - [ ] Create new chats
  - [ ] Check scrolling and UI

## Environment Setup

- [ ] Create `.env.local` in project root with:
  ```
  VITE_API_URL=http://localhost:5006
  GEMINI_API_KEY=your_key_here
  VITE_APP_NAME=WriteFlow
  ```
- [ ] Create `.env.production` for production API URL
- [ ] Backend: Set `GEMINI_API_KEY` in environment

## Git Setup

- [ ] Commit all changes: `git add . && git commit -m "Pre-deployment cleanup"`
- [ ] Push to GitHub: `git push origin main`
- [ ] Verify `.env` files are in `.gitignore` (they shouldn't be committed)

## Vercel Deployment

### Option 1: Via Vercel Dashboard (Recommended)

1. [ ] Go to https://vercel.com
2. [ ] Click "New Project"
3. [ ] Import your GitHub repository
4. [ ] Framework: Auto-detect (should be Vite)
5. [ ] Build settings:
   - [ ] Build Command: `npm run build`
   - [ ] Output Directory: `dist`
   - [ ] Install Command: `npm install`
6. [ ] Environment Variables → Add:
   - [ ] `VITE_API_URL` = your production API URL
   - [ ] `VITE_APP_NAME` = WriteFlow
7. [ ] Click "Deploy"

### Option 2: Via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

## Post-Deployment

- [ ] Visit your deployment URL
- [ ] Test all features work
- [ ] Check performance in Lighthouse
- [ ] Monitor error logs in Vercel dashboard
- [ ] Set up domain (if needed)

## Backend Deployment

### Option A: Vercel Serverless (Advanced)

- Deploy API as Vercel functions in `/api` folder
- Update `VITE_API_URL` to point to serverless functions

### Option B: External Hosting (Heroku, Railway, etc.)

```bash
# In server/ directory
npm run start  # should start on localhost:5000
```

Then update `VITE_API_URL` in Vercel environment variables

### Option C: Local/Self-Hosted

- Keep backend running on your server
- Update CORS settings with production domain

## Performance Check

After deployment, verify:

```
✅ Bundle size < 200KB gzipped
✅ First contentful paint < 2s
✅ Lighthouse score > 80
✅ No console errors
✅ API calls working
```

## Troubleshooting

### Build fails locally?

```bash
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

### API not connecting?

- [ ] Check `VITE_API_URL` is correct
- [ ] Verify backend is running
- [ ] Check CORS settings on backend
- [ ] Look at Network tab in DevTools

### Deployment stuck?

- [ ] Check Vercel build logs
- [ ] Verify environment variables set
- [ ] Check for missing dependencies
- [ ] Review error messages carefully

## Success Indicators

✅ You've successfully deployed when:

- Build completes without errors
- Application loads at your domain
- Features work as expected
- No console errors
- API responses show in Network tab

## Important URLs

- Vercel Dashboard: https://vercel.com/dashboard
- Your App: https://your-app-name.vercel.app
- Production API: https://your-api-domain.com/api/chat

---

**Total Deployment Time**: ~5-10 minutes
**Difficulty**: Easy 🟢
**Status**: Ready to Deploy ✅
