import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import dns from 'dns';

dotenv.config();

// Force IPv4 DNS resolution first to prevent cloud containers hanging on IPv6
try {
  dns.setDefaultResultOrder('ipv4first');
} catch (e) {
  // Ignore if not supported in environment
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'dist')));

// Helper to create Google SMTP transporter
const createGoogleTransporter = (port, secure) => {
  const cleanPass = (process.env.SMTP_PASS || '').replace(/\s+/g, '');
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: port,
    secure: secure,
    auth: {
      user: process.env.SMTP_USER || 'info@snowflakz.com',
      pass: cleanPass,
    },
    family: 4, // Crucial: force IPv4 to avoid IPv6 timeouts on cloud platforms
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,
  });
};

// Send mail via Google SMTP trying Port 465 then Port 587
async function sendViaGoogleSMTP(mailOptions) {
  try {
    const transporter465 = createGoogleTransporter(465, true);
    return await transporter465.sendMail(mailOptions);
  } catch (err465) {
    console.warn('Google SMTP Port 465 failed, attempting Port 587:', err465.message);
    const transporter587 = createGoogleTransporter(587, false);
    return await transporter587.sendMail(mailOptions);
  }
}

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const notifyRecipient = process.env.NOTIFICATION_EMAIL || 'info@snowflakz.com';
  const fromUser = process.env.SMTP_USER || 'info@snowflakz.com';

  const adminHtml = `
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
  `;

  const autoReplyHtml = `
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
  `;

  // Method 1: Google Apps Script Web App (Native Google HTTP endpoint - 100% Google service, immune to SMTP port blocking)
  if (process.env.GOOGLE_SCRIPT_URL) {
    try {
      const response = await fetch(process.env.GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          adminEmail: notifyRecipient,
          subject: `New Enquiry from ${name} - Snowflakz Website`,
          adminHtml,
          autoReplyHtml,
        }),
      });

      if (response.ok) {
        return res.status(200).json({ success: true, message: 'Enquiry submitted successfully.' });
      }
    } catch (scriptErr) {
      console.error('Google Script error:', scriptErr);
    }
  }

  // Method 2: Google Workspace Direct SMTP (Port 465 / 587 with IPv4 forcing)
  if (!process.env.SMTP_PASS) {
    console.error('SMTP_PASS environment variable is missing!');
    return res.status(500).json({ error: 'Mail service not configured. Please add SMTP_PASS in Railway.' });
  }

  try {
    const adminMailOptions = {
      from: `"Snowflakz Website" <${fromUser}>`,
      to: notifyRecipient,
      replyTo: email,
      subject: `New Enquiry from ${name} - Snowflakz Website`,
      html: adminHtml,
    };

    const autoReplyOptions = {
      from: `"Snowflakz Foods" <${fromUser}>`,
      to: email,
      subject: `Thank you for contacting Snowflakz Foods`,
      html: autoReplyHtml,
    };

    // Send both via Google SMTP
    await Promise.all([
      sendViaGoogleSMTP(adminMailOptions),
      sendViaGoogleSMTP(autoReplyOptions),
    ]);

    return res.status(200).json({ success: true, message: 'Enquiry submitted successfully.' });
  } catch (smtpError) {
    console.error('Google SMTP error:', smtpError);
    return res.status(500).json({
      error: `Google SMTP connection failed: ${smtpError.message}. If Railway blocks outbound SMTP ports, connect via Google Apps Script Web App.`
    });
  }
});

// For any other route, send back React app
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
