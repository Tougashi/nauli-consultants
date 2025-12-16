# Testing Email Functionality

## Option 1: Deploy ke Vercel (Recommended)
```bash
# Install Vercel CLI jika belum ada
npm install -g vercel

# Login ke Vercel
vercel login

# Deploy
vercel --prod
```

## Option 2: Test dengan Vercel Dev (Local Testing)
```bash
# Install Vercel CLI
npm install -g vercel

# Jalankan development server dengan Vercel
vercel dev
```
Kemudian buka http://localhost:3000 dan test form contact.

## Option 3: Quick Deploy
Push ke GitHub dan connect dengan Vercel dashboard, akan auto-deploy.

## Email Configuration

### Current Settings:
- **SMTP Host**: mail.webgoster.com
- **Port**: 465 (SSL)
- **From**: sender@webgoster.com
- **Test To**: adryanowh@gmail.com

### To Change Email Recipient:
Edit `api/send-email.ts` line 34:
```typescript
to: 'adryanowh@gmail.com', // Change this to your email
```

### Production Email:
Untuk production, ganti ke:
```typescript
to: 'hello@nauliconsultants.com',
```

## Form Fields:
- **Name** * (required)
- **Company / Project** (optional)
- **Email** * (required)
- **WhatsApp Number** * (required)
- **Message** (optional)

## Expected Behavior:
1. User mengisi form dan click SUBMIT
2. Button berubah jadi "SENDING..." dan disabled
3. Setelah success: Green success message muncul, form reset
4. Jika error: Red error message muncul
5. Email dikirim dengan style minimalist matching website design

## Email Template Preview:
- Dark header dengan "CONTACT REQUEST" title
- Clean field layout dengan uppercase labels
- Message dalam box dengan border accent
- Minimalist footer dengan company name
- Monospace typography throughout

