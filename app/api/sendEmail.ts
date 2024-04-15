import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_EMAIL_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { name, email, website, phone, message } = req.body;

    try {
      await resend.emails.send({
        from: 'contactmired@gmail.com',
        to: 'contactmired@gmail.com',
        subject: 'New Contact Form Submission',
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Website:</strong> ${website}</p>
          <p><strong>Message:</strong> ${message}</p>
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