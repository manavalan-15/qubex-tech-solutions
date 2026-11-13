import 'dotenv/config';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

type ContactInquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  description: string;
  submittedAt: string;
};

const recentInquiries: ContactInquiry[] = [];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+\d\s()-]{7,20}$/;

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '1mb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', service: 'QUBEX TECH SOLUTIONS' });
  });

  app.post('/api/contact', async (req, res) => {
    const body = req.body ?? {};
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
    const service = typeof body.service === 'string' ? body.service.trim() : '';
    const description =
      typeof body.description === 'string' ? body.description.trim() : '';

    if (name.length < 2) {
      res.status(400).json({
        error: 'Please enter your full name (at least 2 characters).',
        field: 'name',
      });
      return;
    }

    if (!EMAIL_PATTERN.test(email)) {
      res.status(400).json({
        error: 'Please provide a valid email address.',
        field: 'email',
      });
      return;
    }

    if (!PHONE_PATTERN.test(phone)) {
      res.status(400).json({
        error: 'Please provide a valid phone or WhatsApp number.',
        field: 'phone',
      });
      return;
    }

    if (!service) {
      res.status(400).json({
        error: 'Please select the service you are interested in.',
        field: 'service',
      });
      return;
    }

    if (description.length < 10) {
      res.status(400).json({
        error: 'Please share a brief description of your project (at least 10 characters).',
        field: 'description',
      });
      return;
    }

    const inquiry: ContactInquiry = {
      id: `QBX-${Date.now().toString(36).toUpperCase()}`,
      name,
      email,
      phone,
      service,
      description,
      submittedAt: new Date().toISOString(),
    };

    recentInquiries.unshift(inquiry);
    if (recentInquiries.length > 100) {
      recentInquiries.pop();
    }

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(inquiry),
        });
      } catch (err) {
        console.error('Webhook delivery warning:', err);
      }
    }

    res.status(201).json({
      success: true,
      referenceId: inquiry.id,
      message:
        'Your inquiry has been received. Our team will reach out within 24 hours.',
    });
  });

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('/{*splat}', (_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`QUBEX TECH SOLUTIONS server running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
