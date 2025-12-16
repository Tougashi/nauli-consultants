import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: 'mail.webgoster.com',
  port: 465,
  secure: true,
  auth: {
    user: 'sender@webgoster.com',
    pass: '@Anjinglo123'
  }
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, company, email, whatsapp, message } = req.body;

    // Verify SMTP connection
    await transporter.verify();

    const mailOptions = {
      from: '"Nauli Consultants - Contact Form" <sender@webgoster.com>',
      to: 'hello@nauliconsultants.com', // Test email first
      subject: `Nauli Consultants - New Contact from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              body {
                font-family: 'Courier New', monospace;
                color: #1A1A1A;
                background-color: #FFFFFF;
                line-height: 1.6;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #FFFFFF;
              }
              .header {
                background-color: #1A1A1A;
                color: #FFFFFF;
                padding: 40px 30px;
                text-align: center;
                border-bottom: 2px solid #D9D9D9;
              }
              .header h1 {
                font-size: 28px;
                font-weight: 700;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                margin-bottom: 12px;
              }
              .header p {
                font-size: 10px;
                letter-spacing: 0.15em;
                text-transform: uppercase;
                opacity: 0.8;
              }
              .content {
                padding: 40px 30px;
                background-color: #FFFFFF;
              }
              .field-group {
                margin-bottom: 24px;
                border-bottom: 1px solid #E7E7E7;
                padding-bottom: 16px;
              }
              .field-group:last-child {
                border-bottom: none;
              }
              .label {
                font-size: 9px;
                font-weight: 700;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                color: #666666;
                margin-bottom: 8px;
                display: block;
              }
              .value {
                font-size: 13px;
                color: #1A1A1A;
                padding: 8px 0;
                word-wrap: break-word;
              }
              .message-box {
                background-color: #F9FAFB;
                padding: 20px;
                border-left: 3px solid #1A1A1A;
                margin-top: 8px;
                font-size: 13px;
                line-height: 1.8;
                white-space: pre-wrap;
              }
              .footer {
                background-color: #F9FAFB;
                padding: 30px;
                text-align: center;
                border-top: 1px solid #E7E7E7;
              }
              .footer-text {
                font-size: 9px;
                letter-spacing: 0.15em;
                text-transform: uppercase;
                color: #666666;
              }
              .divider {
                width: 60px;
                height: 2px;
                background-color: #1A1A1A;
                margin: 20px auto;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <!-- Header -->
              <div class="header">
                <h1>Contact Request</h1>
                <div class="divider" style="background-color: #FFFFFF; width: 80px;"></div>
                <p>New inquiry from website</p>
              </div>

              <!-- Content -->
              <div class="content">
                <div class="field-group">
                  <span class="label">Name</span>
                  <div class="value">${name}</div>
                </div>

                <div class="field-group">
                  <span class="label">Company / Project</span>
                  <div class="value">${company || 'Not provided'}</div>
                </div>

                <div class="field-group">
                  <span class="label">Email</span>
                  <div class="value">${email}</div>
                </div>

                <div class="field-group">
                  <span class="label">WhatsApp Number</span>
                  <div class="value">${whatsapp}</div>
                </div>

                <div class="field-group">
                  <span class="label">Message</span>
                  <div class="message-box">${message || 'No message provided'}</div>
                </div>
              </div>

              <!-- Footer -->
              <div class="footer">
                <div class="divider"></div>
                <p class="footer-text">Nauli Consultants</p>
                <p class="footer-text" style="margin-top: 8px;">Design • Build • Thrive</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      success: false, 
      message: error instanceof Error ? error.message : 'Failed to send message' 
    });
  }
}

