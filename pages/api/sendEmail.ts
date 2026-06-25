// /pages/api/sendEmail.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_EMAIL_API_KEY);

// Simple in-memory rate limiting (resets on server restart)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now - record.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }
  
  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  
  record.count++;
  return false;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function containsSuspiciousPatterns(text: string): boolean {
  // Check for random character strings (high consonant ratio, no real words)
  const consonantRatio = (text.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length / text.length;
  if (text.length > 10 && consonantRatio > 0.7) return true;
  
  // Check for excessive uppercase in the middle of words
  const mixedCasePattern = /[a-z][A-Z]{2,}[a-z]/;
  if (mixedCasePattern.test(text)) return true;
  
  return false;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, company_size, challenge, source, _honeypot, _timestamp } = req.body;

    // Honeypot check - if this hidden field is filled, it's a bot
    if (_honeypot) {
      // Silently reject but return success to not alert the bot
      return res.status(200).json({ message: 'Email sent successfully' });
    }

    // Timestamp check - form should take at least 3 seconds to fill
    const submissionTime = Date.now();
    if (_timestamp && submissionTime - parseInt(_timestamp) < 3000) {
      return res.status(200).json({ message: 'Email sent successfully' });
    }

    // Rate limiting by IP
    const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0] || 
                     req.socket.remoteAddress || 
                     'unknown';
    if (isRateLimited(clientIp)) {
      return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }

    // Validate required fields
    if (!name || !email || !company_size) {
      return res.status(400).json({ error: 'Name, email, and company size are required' });
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address' });
    }

    // Check for suspicious patterns in name and message
    if (containsSuspiciousPatterns(name) || (challenge && containsSuspiciousPatterns(challenge))) {
      // Silently reject spam
      return res.status(200).json({ message: 'Email sent successfully' });
    }

    // Validate phone format removed — phone no longer collected on short form

    try {
      const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/mired";
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'contactmired@gmail.com',
        subject: `New Contact Form Submission (${source ?? "contact_form"})`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company size:</strong> ${company_size}</p>
          <p><strong>Challenge:</strong> ${challenge ?? "—"}</p>
          <p><strong>Source:</strong> ${source ?? "contact_form"}</p>
          <p><a href="${calendlyUrl}">Calendly</a></p>
        `,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'An error occurred while sending the email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
