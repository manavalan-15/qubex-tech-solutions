interface VercelRequestLike {
  method?: string;
  body?: Record<string, unknown>;
}

interface VercelResponseLike {
  status: (code: number) => VercelResponseLike;
  json: (data: unknown) => void;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+\d\s()-]{7,20}$/;

export default async function handler(
  req: VercelRequestLike,
  res: VercelResponseLike,
) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

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
      error:
        'Please share a brief description of your project (at least 10 characters).',
      field: 'description',
    });
    return;
  }

  const inquiry = {
    id: `QBX-${Date.now().toString(36).toUpperCase()}`,
    name,
    email,
    phone,
    service,
    description,
    submittedAt: new Date().toISOString(),
  };

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
}
