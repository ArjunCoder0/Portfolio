# Fix Cloudflare Pages 404 Error

## 🔴 Problem
Your site shows "HTTP ERROR 404" because Next.js requires special configuration for Cloudflare Pages.

## ✅ Solution - Update Build Settings

### Step 1: Go to Cloudflare Dashboard
1. Visit: https://dash.cloudflare.com/
2. Go to **Workers & Pages**
3. Click on your project: **portfolio-mjt**
4. Click **Settings** tab
5. Scroll to **Build & deployments**

### Step 2: Update Build Configuration

Click **Edit configuration** and set:

```
Framework preset: Next.js (Static HTML Export)
Build command: npm run build
Build output directory: out
Root directory: (leave empty)
Node version: 18 or higher
```

### Step 3: Add Build Environment Variables

In **Environment variables** section, add:

```
NODE_VERSION = 18
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = 9S10CX7DoonkSIUDL
NEXT_PUBLIC_EMAILJS_SERVICE_ID = service_5wh4uxs
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = template_uycf11r
```

### Step 4: Update Package.json

Make sure your `package.json` has this build script:

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "export": "next build"
  }
}
```

### Step 5: Redeploy

1. Click **Deployments** tab
2. Click **Retry deployment** on the latest deployment
3. OR push a new commit to trigger auto-deployment

## 🔧 Alternative: Use @cloudflare/next-on-pages

If the above doesn't work, use Cloudflare's official Next.js adapter:

### Install the adapter:
```bash
npm install --save-dev @cloudflare/next-on-pages
```

### Update package.json:
```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "pages:build": "npx @cloudflare/next-on-pages",
    "preview": "npm run pages:build && wrangler pages dev",
    "deploy": "npm run pages:build && wrangler pages deploy"
  }
}
```

### Update Cloudflare Build Settings:
```
Build command: npm run pages:build
Build output directory: .vercel/output/static
```

## 🎯 Quick Fix (Recommended)

The easiest solution is to use **Vercel** instead of Cloudflare for Next.js:

1. Go to [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Click Deploy
4. Done! It works automatically with Next.js

## 📝 Check Build Logs

To see what went wrong:
1. Go to Cloudflare Dashboard
2. Click your project
3. Click **Deployments**
4. Click on the failed deployment
5. Check the **Build log** for errors

## 🔍 Common Issues

### Issue: "Build failed"
- Check Node version is 18 or higher
- Make sure all dependencies are in package.json
- Check build logs for specific errors

### Issue: "404 on all pages"
- Wrong build output directory
- Missing _routes.json file
- Incorrect framework preset

### Issue: "Images not loading"
- Make sure `unoptimized: true` is in next.config.mjs
- Check image paths are correct

## 🚀 Recommended: Deploy to Vercel

Since you're using Next.js, Vercel is the best option:

1. **Push to GitHub** (already done ✅)
2. **Go to Vercel:** https://vercel.com/
3. **Import Repository:** ArjunCoder0/Portfolio
4. **Deploy:** Click Deploy (no configuration needed!)
5. **Done!** Your site will be live in 2 minutes

Vercel is made by the creators of Next.js and works perfectly without any configuration.

---

**Need help?** Check the build logs in Cloudflare dashboard or try deploying to Vercel instead.
