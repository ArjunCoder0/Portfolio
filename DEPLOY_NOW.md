# 🚀 Deploy to Cloudflare Pages - Quick Guide

## ✅ Pre-Deployment Checklist

Your portfolio is ready! Here's what's been done:
- ✅ GitHub projects section removed
- ✅ Next.js config optimized for Cloudflare
- ✅ All personal information updated
- ✅ EmailJS configured
- ✅ Logo updated
- ✅ Social links added

## 📦 Deploy in 5 Minutes

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Portfolio ready for deployment"
git push origin main
```

### Step 2: Go to Cloudflare
1. Visit: https://dash.cloudflare.com/
2. Click **Workers & Pages**
3. Click **Create Application** → **Pages**
4. Click **Connect to Git**

### Step 3: Select Repository
1. Authorize GitHub
2. Select your portfolio repository
3. Click **Begin Setup**

### Step 4: Build Configuration
```
Project name: arjun-portfolio (or your choice)
Production branch: main
Framework preset: Next.js
Build command: npm run build
Build output directory: .next
Root directory: (leave empty)
```

### Step 5: Environment Variables
Click **Add variable** for each:
```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = 9S10CX7DoonkSIUDL
NEXT_PUBLIC_EMAILJS_SERVICE_ID = service_5wh4uxs
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = template_uycf11r
```

### Step 6: Deploy!
1. Click **Save and Deploy**
2. Wait 3-5 minutes
3. Your site will be live! 🎉

## 🌐 Your Live URL
After deployment, you'll get:
- `https://arjun-portfolio.pages.dev` (or your project name)

## 🔗 Add Custom Domain (Optional)
To use **www.arjunsagar.com**:
1. Go to your project → **Custom Domains**
2. Click **Set up a custom domain**
3. Enter: `www.arjunsagar.com`
4. Follow DNS instructions
5. Wait 10-30 minutes for DNS propagation

## 🧪 Test After Deployment
- ✅ Homepage loads
- ✅ Projects page works
- ✅ Contact form sends emails
- ✅ All links work
- ✅ Images display correctly
- ✅ Mobile responsive

## 🔄 Future Updates
Every time you push to GitHub, Cloudflare automatically redeploys!

```bash
# Make changes
git add .
git commit -m "Update portfolio"
git push origin main
# Cloudflare auto-deploys in 2-3 minutes!
```

---

**Ready to deploy?** Follow the steps above and your portfolio will be live! 🚀
