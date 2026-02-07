# Fix EmailJS 400 Error

The 400 error means there's a mismatch between your form fields and EmailJS template variables.

## ✅ Your Form Fields (Correct)
Your contact form sends these fields:
- `name` 
- `email`
- `message`

## 🔧 Fix Your EmailJS Template

### Step 1: Go to EmailJS Dashboard
1. Login to [EmailJS.com](https://dashboard.emailjs.com/)
2. Go to **Email Templates**
3. Find your template: `template_uycf11r`
4. Click **Edit**

### Step 2: Update Template Variables

**IMPORTANT:** Your template must use these EXACT variable names:

#### Template Subject:
```
New Contact Form Message from {{name}}
```

#### Template Content:
```
Hello Arjun,

You have received a new message from your portfolio contact form:

Name: {{name}}
Email: {{email}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

### Step 3: Verify Variable Names

Make sure your template uses:
- `{{name}}` (NOT `{{from_name}}`)
- `{{email}}` (NOT `{{user_email}}` or `{{reply_to}}`)
- `{{message}}` (NOT `{{user_message}}`)

### Step 4: Save Template

1. Click **Save** in EmailJS dashboard
2. Wait a few seconds for changes to apply

### Step 5: Test Again

1. Go to: http://localhost:3000/contact
2. Fill out the form
3. Click "Send Message"
4. Check your email: arjunssagar3@gmail.com

## 🔍 Alternative: Check Service ID

If the error persists, verify your Service ID:

1. Go to **Email Services** in EmailJS dashboard
2. Check if your Gmail service is active
3. Copy the correct **Service ID**
4. Update `.env.local` if needed:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_correct_service_id
```

## 📧 Correct Template Example

Here's a working template you can copy:

**Subject:**
```
Portfolio Contact: {{name}}
```

**Body:**
```
New message from your portfolio!

From: {{name}}
Email: {{email}}

Message:
{{message}}

---
Sent via portfolio contact form
```

## ⚠️ Common Mistakes

❌ Using `{{from_name}}` instead of `{{name}}`
❌ Using `{{user_email}}` instead of `{{email}}`
❌ Wrong Service ID
❌ Template not saved properly

✅ Use exact field names: `name`, `email`, `message`
✅ Save template after editing
✅ Wait a few seconds before testing

---

After fixing the template, the form should work perfectly! 🎉
