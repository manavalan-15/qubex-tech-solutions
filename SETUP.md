# QUBEX TECH SOLUTIONS — Project Setup & Integration Guide

## 1. Local Development

```bash
npm install
npm run dev
```

The Express + Vite full-stack server runs on `http://localhost:3000`.

## 2. Production Build & Start

```bash
npm run build
NODE_ENV=production npm start
```

---

## 3. Replacing Sample Portfolio Projects

All sample projects live in `src/data/portfolio.ts`:

1. Place your real screenshots, posters, or video thumbnails inside `src/assets/images/`.
2. Open `src/data/portfolio.ts` and update the entries in `PORTFOLIO_PROJECTS` (`title`, `client`, `year`, `shortDescription`, `fullDescription`, `outcomeMetric`, `imageUrl`, and `deliverables`).
3. Keep `category` set to one of the 6 supported categories:
   - `Website Development`
   - `Mobile Apps`
   - `Video Editing`
   - `Photo Editing`
   - `Graphic Design`
   - `Digital Marketing`

---

## 4. Contact Form Backend Integration

The contact form submits via `POST /api/contact` in `server.ts`, which validates all inputs (`name`, `email`, `phone`, `service`, `description`) and returns a unique inquiry reference ID (`QBX-...`).

### Option A: Instant Webhook Forwarding (Slack, Discord, Make, Zapier, CRM)
Set `CONTACT_WEBHOOK_URL` in your `.env` file:

```env
CONTACT_WEBHOOK_URL="https://your-webhook-endpoint.example.com/hook"
```

Every validated inquiry is automatically forwarded as JSON to that webhook.

### Option B: Email Delivery via Resend or Nodemailer
Inside `server.ts` inside `app.post('/api/contact', ...)`, add your preferred email SDK call (e.g., `resend.emails.send(...)` or `nodemailer.createTransport(...)`) using server-side environment variables (`RESEND_API_KEY` or `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`).

### Option C: WhatsApp & Instagram
- **WhatsApp Direct Link**: `https://wa.me/919384754527` (prefilled automatically with the visitor's selected service in `src/components/ContactSection.tsx`).
- **Instagram Profile**: `https://www.instagram.com/qubex.tech.solutions/`
