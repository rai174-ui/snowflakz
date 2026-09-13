import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'dist')));

// Configure Google Workspace SMTP transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER || 'info@snowflakz.com',
    pass: process.env.SMTP_PASS, // 16-character Google App Password
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  // Verify SMTP credentials are provided
  if (!process.env.SMTP_PASS) {
    console.error('SMTP_PASS environment variable is missing!');
    return res.status(500).json({ error: 'Mail service not configured on server yet.' });
  }

  try {
    const notifyRecipient = process.env.NOTIFICATION_EMAIL || 'info@snowflakz.com';

    // 1. Email to Business (Snowflakz Foods)
    const adminMailOptions = {
      from: `"Snowflakz Website" <${process.env.SMTP_USER || 'info@snowflakz.com'}>`,
      to: notifyRecipient,
      replyTo: email,
      subject: `New Enquiry from ${name} - Snowflakz Website`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 8px; padding: 20px;">
          <h2 style="color: #d97706; border-bottom: 2px solid #fef3c7; padding-bottom: 10px;">New Website Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px; font-weight: bold; width: 30%; border-bottom: 1px solid #f1f5f9;">Name:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f1f5f9;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Email:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f1f5f9;">Phone:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f1f5f9;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; vertical-align: top; border-bottom: 1px solid #f1f5f9;">Message:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f1f5f9; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    };

    // 2. Automatic Confirmation Email to Customer
    const autoReplyOptions = {
      from: `"Snowflakz Foods" <${process.env.SMTP_USER || 'info@snowflakz.com'}>`,
      to: email,
      subject: `Thank you for contacting Snowflakz Foods`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 8px; padding: 25px;">
          <h2 style="color: #d97706; margin-top: 0;">Snowflakz Foods</h2>
          <p style="font-size: 16px; color: #1e293b;">Dear <strong>${name}</strong>,</p>
          <p style="font-size: 15px; color: #334155;">
            Thankyou so much for your query. Our team will shortly get in touch with you.
          </p>
          
          <div style="background-color: #f8fafc; border-left: 4px solid #d97706; padding: 15px; margin: 20px 0; border-radius: 4px;">
            <h4 style="margin: 0 0 10px 0; color: #475569;">Summary of your submitted enquiry:</h4>
            <p style="margin: 4px 0;"><strong>Email:</strong> ${email}</p>
            ${phone ? `<p style="margin: 4px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
            <p style="margin: 4px 0;"><strong>Message:</strong></p>
            <p style="margin: 4px 0; font-style: italic; color: #64748b; white-space: pre-wrap;">"${message}"</p>
          </div>

          <p style="font-size: 14px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 15px; margin-top: 25px;">
            Warm regards,<br/>
            <strong>Snowflakz Foods Team</strong><br/>
            <a href="https://snowflakz.com" style="color: #d97706; text-decoration: none;">www.snowflakz.com</a> | info@snowflakz.com<br/>
            +91 99712 99631 | +91 99715 87831
          </p>
        </div>
      `,
    };

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(autoReplyOptions),
    ]);

    return res.status(200).json({ success: true, message: 'Enquiry submitted successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send emails. Please try again later.' });
  }
});

// For any other route, send back React app
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
