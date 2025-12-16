const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create reusable transporter
const transporter = nodemailer.createTransporter({
  host: 'mail.webgoster.com',
  port: 465,
  secure: true,
  auth: {
    user: 'sender@webgoster.com',
    pass: '@Anjinglo123'
  }
});

// Email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, company, email, whatsapp, message } = req.body;

    console.log('\n📧 Sending email...');
    console.log('From:', name, email);

    // Verify SMTP connection
    await transporter.verify();

    const mailOptions = {
      from: '"Nauli Consultants - Contact Form" <sender@webgoster.com>',
      to: 'adryanowh@gmail.com',
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
    console.log('✅ Email sent successfully:', info.messageId);
    console.log('📬 Sent to: adryanowh@gmail.com\n');

    res.json({ 
      success: true, 
      message: 'Message sent successfully' 
    });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: error.message || 'Failed to send message' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`\n🚀 Development API Server running on http://localhost:${PORT}`);
  console.log(`📧 Email endpoint: http://localhost:${PORT}/api/send-email\n`);
});

