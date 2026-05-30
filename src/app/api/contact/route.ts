import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    const data = await resend.emails.send({
      from: 'H Dentistry <onboarding@resend.dev>', // Must use verified domain or onboarding@resend.dev in dev
      to: ['contact@hdentistry.in'], // Replace with doctor's actual receiving email
      subject: `New Appointment Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f1f5f9; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
            .header { background-color: #0f172a; color: white; padding: 30px 20px; text-align: center; }
            .header h2 { margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.5px; }
            .header p { margin: 5px 0 0 0; color: #94a3b8; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; }
            .content { padding: 30px; }
            .row { margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #e2e8f0; }
            .row:last-child { margin-bottom: 0; padding-bottom: 0; border-bottom: none; }
            .label { font-weight: 700; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
            .value { font-size: 16px; color: #0f172a; }
            .value a { color: #0ea5e9; text-decoration: none; }
            .footer { background-color: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Appointment Request</h2>
              <p>H Dentistry Erode</p>
            </div>
            <div class="content">
              <div class="row">
                <div class="label">Patient Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="row">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="row">
                <div class="label">Phone Number</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              <div class="row">
                <div class="label">Service Requested</div>
                <div class="value">${service || 'Not specified'}</div>
              </div>
              <div class="row">
                <div class="label">Additional Message</div>
                <div class="value">${message || 'No additional message.'}</div>
              </div>
            </div>
            <div class="footer">
              This is an automated message from the H Dentistry website contact form.
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
