# EmailJS Setup Guide - Contact Form Configuration

Your contact form is already integrated with EmailJS, but you need to set up your own account to receive messages at **arjunssagar3@gmail.com**.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose **Gmail** (since you're using Gmail)
4. Click **Connect Account** and authorize your Gmail (arjunssagar3@gmail.com)
5. Copy the **Service ID** (looks like: service_xxxxxxx)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template content:

**Template Name:** Contact Form Submission

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Hello Arjun,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{email}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Save the template and copy the **Template ID** (looks like: template_xxxxxxx)

## Step 4: Get Public Key

1. Go to **Account** → **General** in the dashboard
2. Find your **Public Key** (looks like: xxxxxxxxxxxxxx)
3. Copy this key

## Step 5: Update Environment Variables

Update your `.env.local` file with your new credentials:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

## Step 6: Restart Development Server

After updating the `.env.local` file:

1. Stop the current server (Ctrl+C in terminal)
2. Run `npm run dev` again
3. Test the contact form

## Testing the Contact Form

1. Go to http://localhost:3000/contact
2. Fill out the form with test data
3. Click "Send Message"
4. Check your email (arjunssagar3@gmail.com) for the message

## Important Notes

- **Free Plan Limits**: 200 emails per month
- **Email Delivery**: Messages arrive within seconds
- **Spam Folder**: Check spam if you don't see the email
- **Template Variables**: Make sure template uses {{from_name}}, {{email}}, and {{message}}

## Current Configuration

The contact form is already set up to use these fields:
- `name` → Maps to `{{from_name}}` in template
- `email` → Maps to `{{email}}` in template  
- `message` → Maps to `{{message}}` in template

## Troubleshooting

**Form not sending?**
- Check browser console for errors
- Verify all three environment variables are set correctly
- Make sure you restarted the dev server after updating .env.local

**Not receiving emails?**
- Check spam/junk folder
- Verify Gmail service is connected in EmailJS dashboard
- Test the template directly in EmailJS dashboard

**Rate limit errors?**
- Free plan has 200 emails/month limit
- Upgrade to paid plan if needed

---

Once configured, visitors can send you messages directly through your portfolio contact form, and you'll receive them at arjunssagar3@gmail.com! 📧
