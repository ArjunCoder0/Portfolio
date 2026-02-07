# EmailJS Configuration Checklist

## 📋 What You Need to Verify

### 1. Service ID ⚠️ IMPORTANT
Go to EmailJS Dashboard → **Email Services**

**Current in .env.local:** `service_ti87dh9`

❓ **Is this YOUR Service ID?** 
- If NO, copy your actual Service ID and update `.env.local`
- If YES, proceed to step 2

### 2. Template Variables ⚠️ CRITICAL
Go to EmailJS Dashboard → **Email Templates** → `template_uycf11r`

Your template MUST use these exact variables:
```
{{name}}
{{email}}
{{message}}
```

**NOT:**
- ~~{{from_name}}~~
- ~~{{user_email}}~~
- ~~{{reply_to}}~~

### 3. Public Key ✅
**Current:** `9S10CX7DoonkSIUDL`
This looks correct!

### 4. Template ID ✅
**Current:** `template_uycf11r`
This looks correct!

## 🔧 Quick Fix Steps

1. **Login to EmailJS:** https://dashboard.emailjs.com/
2. **Check Service ID:**
   - Email Services → Copy YOUR Service ID
   - Update `.env.local` if different
3. **Fix Template:**
   - Email Templates → Edit `template_uycf11r`
   - Change variables to: `{{name}}`, `{{email}}`, `{{message}}`
   - Save template
4. **Restart server:**
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```
5. **Test:** http://localhost:3000/contact

## 🎯 Most Likely Issue

The Service ID `service_ti87dh9` might not be yours. Please:
1. Check your EmailJS dashboard
2. Copy YOUR actual Service ID
3. Let me know so I can update it

---

**Need the Service ID?** Check: Dashboard → Email Services → Your Gmail Service
