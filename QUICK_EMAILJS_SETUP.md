# Quick EmailJS Setup - 5 Minutes

## 🚀 Fast Setup Steps

### 1. Sign Up
- Visit: https://www.emailjs.com/
- Create account with your email

### 2. Connect Gmail
- Dashboard → Email Services → Add New Service
- Select Gmail → Connect arjunssagar3@gmail.com
- **Copy Service ID**

### 3. Create Template
- Dashboard → Email Templates → Create New Template
- Template content:
```
New message from {{from_name}}
Email: {{email}}
Message: {{message}}
```
- **Copy Template ID**

### 4. Get Public Key
- Dashboard → Account → General
- **Copy Public Key**

### 5. Update .env.local
Replace the values in `.env.local`:
```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```

### 6. Restart Server
```bash
# Stop current server (Ctrl+C)
npm run dev
```

### 7. Test
- Go to: http://localhost:3000/contact
- Send test message
- Check: arjunssagar3@gmail.com

## ✅ Done!
Your contact form will now send messages to your email!

---

**Need help?** Check EMAILJS_SETUP_GUIDE.md for detailed instructions.
