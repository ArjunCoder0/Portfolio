# Deploy to Cloudflare Pages

## 🚀 Quick Deployment Steps

### Method 1: Deploy via Cloudflare Dashboard (Recommended)

#### Step 1: Build Your Project Locally (Optional - Test First)
```bash
npm run build
```

#### Step 2: Push to GitHub
```bash
git add .
git commit -m "Ready for Cloudflare deployment"
git push origin main
```

#### Step 3: Connect to Cloudflare Pages
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click **Workers & Pages** in the sidebar
3. Click **Create Application** → **Pages** → **Connect to Git**
4. Select your GitHub repository
5. Click **Begin Setup**

#### Step 4: Configure Build Settings
```
Framework preset: Next.js
Build command: npm run build
Build output directory: .next
Root directory: /
Node version: 18 or higher
```

#### Step 5: Add Environment Variables
Click **Environment Variables** and add:
```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=9S10CX7DoonkSIUDL
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_5wh4uxs
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_uycf11r
```

#### Step 6: Deploy
1. Click **Save and Deploy**
2. Wait 2-5 minutes for deployment
3. Your site will be live at: `your-project.pages.dev`

### Method 2: Deploy via Wrangler CLI

#### Step 1: Install Wrangler
```bash
npm install -g wrangler
```

#### Step 2: Login to Cloudflare
```bash
wrangler login
```

#### Step 3: Build Project
```bash
npm run build
```

#### Step 4: Deploy
```bash
npx wrangler pages deploy .next --project-name=arjun-portfolio
```

## 🔧 Custom Domain Setup

### Add Your Domain (www.arjunsagar.com)

1. Go to your Cloudflare Pages project
2. Click **Custom Domains**
3. Click **Set up a custom domain**
4. Enter: `www.arjunsagar.com`
5. Follow DNS configuration instructions
6. Wait for DNS propagation (5-30 minutes)

## ⚙️ Important Configuration

### Next.js Configuration
Your `next.config.mjs` should have:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For static export
  images: {
    unoptimized: true, // Required for Cloudflare Pages
  },
};

export default nextConfig;
```

### Package.json Scripts
Make sure you have:
```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "export": "next build && next export"
  }
}
```

## 🔍 Troubleshooting

### Build Fails
- Check Node version (use 18 or higher)
- Clear cache: `rm -rf .next node_modules && npm install`
- Check build logs in Cloudflare dashboard

### Environment Variables Not Working
- Make sure they start with `NEXT_PUBLIC_`
- Redeploy after adding variables
- Check spelling and values

### Images Not Loading
- Use `unoptimized: true` in next.config.mjs
- Check image paths are correct
- Use relative paths for images

## 📊 Deployment Checklist

- ✅ GitHub repository is up to date
- ✅ Environment variables are set
- ✅ Build succeeds locally
- ✅ All images are in public folder
- ✅ next.config.mjs is configured
- ✅ EmailJS credentials are correct
- ✅ Custom domain DNS is configured (if using)

## 🎉 Post-Deployment

After deployment:
1. Test contact form
2. Check all pages load correctly
3. Verify images display properly
4. Test on mobile devices
5. Check social links work
6. Verify project links are correct

## 🔄 Automatic Deployments

Cloudflare Pages automatically deploys when you push to GitHub:
- Push to `main` branch → Production deployment
- Push to other branches → Preview deployment

## 📝 Useful Commands

```bash
# Test build locally
npm run build

# Start production server locally
npm start

# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

Your portfolio is now ready for Cloudflare Pages deployment! 🚀
