import { FormEvent, useEffect, useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Instagram,
  Loader2,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { SERVICES } from '../data/services';

interface ContactSectionProps {
  preselectedService: string;
  preselectedNote?: string;
}

const SERVICE_OPTIONS = [
  ...SERVICES.map((s) => s.title),
  'Complete Digital Package / Multiple Services',
];

export function ContactSection({
  preselectedService,
  preselectedNote,
}: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(SERVICE_OPTIONS[0]);
  const [description, setDescription] = useState('');

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [referenceId, setReferenceId] = useState('');

  useEffect(() => {
    if (preselectedService) {
      const match = SERVICE_OPTIONS.find(
        (opt) => opt.toLowerCase() === preselectedService.toLowerCase(),
      );
      if (match) {
        setService(match);
      }
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedNote) {
      setDescription((prev) =>
        prev.trim() ? prev : `Interested in a project similar to "${preselectedNote}".`,
      );
    }
  }, [preselectedNote]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setFeedbackMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          service,
          description,
        }),
      });

      const payload = await response.json();

      if (!response.ok) {
        setStatus('error');
        setFeedbackMessage(
          payload.error || 'Unable to submit inquiry. Please check your details.',
        );
        return;
      }

      setStatus('success');
      setReferenceId(payload.referenceId || '');
      setFeedbackMessage(
        payload.message ||
          'Thank you! Your project inquiry has been received.',
      );
      setName('');
      setEmail('');
      setPhone('');
      setDescription('');
    } catch {
      setStatus('error');
      setFeedbackMessage(
        'Network error while sending your message. You can also reach us instantly via WhatsApp.',
      );
    }
  };

  const whatsappText = encodeURIComponent(
    `Hello QUBEX TECH SOLUTIONS! I would like to discuss a project for ${service}.${
      name ? ` My name is ${name}.` : ''
    }`,
  );
  const whatsappLink = `${COMPANY_INFO.whatsappUrl}?text=${whatsappText}`;

  return (
    <section id="contact" className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Contact Info & Direct Channels */}
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-blue-400">Contact Us</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s Build Something Amazing Together!
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Share your idea, software requirement, editing brief, or marketing
              goal. Our team responds promptly with a clear roadmap and
              estimate.
            </p>

            {/* Direct Contact Details */}
            <div className="mt-8 space-y-4">
              <div className="glass-surface rounded-2xl p-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-500/10 text-blue-400">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">
                      Phone &amp; WhatsApp
                    </span>
                    <a
                      href={COMPANY_INFO.phoneHref}
                      className="font-mono text-base font-semibold text-white transition-colors hover:text-blue-400 tabular-nums"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-surface rounded-2xl p-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-400/25 bg-purple-500/10 text-purple-400">
                    <Instagram className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">
                      Instagram Studio Feed
                    </span>
                    <a
                      href={COMPANY_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-base text-white transition-colors hover:text-purple-300"
                    >
                      {COMPANY_INFO.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons: WhatsApp & Instagram */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-purple-400/50 hover:bg-purple-500/15 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                <Instagram className="h-4 w-4 text-purple-400" aria-hidden="true" />
                <span>Instagram Profile</span>
                <ExternalLink className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Functional Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass-surface-elevated rounded-2xl p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-slate-300"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="mt-1.5 min-h-[44px] w-full rounded-xl border border-white/15 bg-[#05070D]/80 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-slate-300"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="mt-1.5 min-h-[44px] w-full rounded-xl border border-white/15 bg-[#05070D]/80 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-medium text-slate-300"
                  >
                    Phone / WhatsApp Number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="mt-1.5 min-h-[44px] w-full rounded-xl border border-white/15 bg-[#05070D]/80 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-xs font-medium text-slate-300"
                  >
                    Service Needed
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="mt-1.5 min-h-[44px] w-full rounded-xl border border-white/15 bg-[#05070D]/90 px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  >
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-description"
                  className="block text-xs font-medium text-slate-300"
                >
                  Project Description
                </label>
                <textarea
                  id="contact-description"
                  name="description"
                  rows={4}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell us about your project goals, timeline, or features you need..."
                  className="mt-1.5 w-full rounded-xl border border-white/15 bg-[#05070D]/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                />
              </div>

              {/* Validation / Submission Feedback Banner */}
              {status === 'success' && (
                <div
                  role="status"
                  className="mt-5 flex items-start gap-3 rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-sm text-emerald-200"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-white">
                      Inquiry Sent Successfully
                      {referenceId ? ` · Ref ${referenceId}` : ''}
                    </p>
                    <p className="mt-0.5 text-xs text-emerald-200/90">
                      {feedbackMessage}
                    </p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div
                  role="alert"
                  className="mt-5 flex items-start gap-3 rounded-xl border border-rose-400/30 bg-rose-500/10 p-4 text-sm text-rose-200"
                >
                  <AlertCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-rose-400"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-white">
                      Please Check Your Input
                    </p>
                    <p className="mt-0.5 text-xs text-rose-200/90">
                      {feedbackMessage}
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-slate-400">
                  Direct backend submission via{' '}
                  <span className="font-mono text-slate-300">/api/contact</span>
                </p>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-transform duration-150 hover:scale-[1.01] hover:from-blue-500 hover:to-purple-500 disabled:cursor-not-allowed disabled:opacity-60 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2
                        className="h-4 w-4 animate-spin"
                        aria-hidden="true"
                      />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" aria-hidden="true" />
                      <span>Submit Project Inquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
