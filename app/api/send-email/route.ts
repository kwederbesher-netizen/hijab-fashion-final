// app/api/send-email/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, country, phone, email, message } = await request.json()

    // Create transporter with your email service
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or use SMTP
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password
      },
    })

    // Email content
    const mailOptions = {
      from: `"Hijab Fashion Mall Contact" <${process.env.EMAIL_USER}>`,
      to: 'kwederbesher@gmail.com',
      subject: `رسالة جديدة من ${name} - حجاب فاشون مول`,
      html: `
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: 'Tajawal', Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #ff5a00; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #ff5a00; margin-bottom: 5px; display: block; }
            .value { background: white; padding: 10px; border-radius: 5px; border: 1px solid #eee; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #777; }
            hr { border: none; border-top: 1px solid #eee; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>📧 رسالة جديدة من موقع حجاب فاشون مول</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 الاسم:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">🌍 الدولة:</div>
                <div class="value">${country}</div>
              </div>
              <div class="field">
                <div class="label">📞 رقم الهاتف:</div>
                <div class="value">${phone}</div>
              </div>
              ${email ? `
              <div class="field">
                <div class="label">📧 البريد الإلكتروني:</div>
                <div class="value">${email}</div>
              </div>
              ` : ''}
              <hr />
              <div class="field">
                <div class="label">💬 الرسالة:</div>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>تم إرسال هذه الرسالة من نموذج الاتصال في موقع حجاب فاشون مول</p>
              <p>${new Date().toLocaleString('ar-SA')}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        رسالة جديدة من ${name}
        
        الاسم: ${name}
        الدولة: ${country}
        الهاتف: ${phone}
        ${email ? `البريد الإلكتروني: ${email}` : ''}
        
        الرسالة:
        ${message}
        
        --------------------
        تم إرسال هذه الرسالة من نموذج الاتصال في موقع حجاب فاشون مول
        التاريخ: ${new Date().toLocaleString('ar-SA')}
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: 'تم إرسال الرسالة بنجاح' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { success: false, message: 'حدث خطأ في إرسال الرسالة' },
      { status: 500 }
    )
  }
}