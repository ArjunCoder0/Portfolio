# Fix 404 Error - Quick Steps

## 🔧 Option 1: Fix Cloudflare Settings (5 minutes)

### Go to Cloudflare Dashboard
1. Visit: https://dash.cloudflare.com/
2. Click **Workers & Pages**
3. Click **portfolio-mjt**
4. Click **Settings** → **Builds & deployments**

### Update These Settings:
```
Framework preset: Next.js (Static HTML Export)
Build command: npm run build
Build output directory: out
```

### Click "Retry deployment"
Wait 3-5 minutes for rebuild.

## 🚀 Option 2: Use Vercel (RECOMMENDED - 2 minutes)

Vercel is made for Next.js and works perfectly:

1. Go to: https://vercel.com/
2. Sign in with GitHub
3. Click **Add New** → **Project**
4. Import: **ArjunCoder0/Portfolio**
5. Click **Deploy**
6. Done! ✅

Your site will be live at: `portfolio-xxx.vercel.app`

### Why Vercel?
- ✅ Made by Next.js creators
- ✅ Zero configuration needed
- ✅ Automatic deployments
- ✅ Free custom domain
- ✅ Perfect Next.js support

## 📊 Current Status

Your GitHub repo is updated with:
- ✅ Fixed next.config.mjs
- ✅ Added wrangler.toml
- ✅ Added _routes.json
- ✅ All configurations ready

Cloudflare will auto-deploy the new changes in a few minutes!

---

**Recommended:** Use Vercel for hassle-free deployment! 🎉
