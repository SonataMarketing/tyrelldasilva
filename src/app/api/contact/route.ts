import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { firstName, lastName, email, phone, description, referralSource, otherReferral } = data;

    const msgHtml = `
      <h2>New Contact Form Submission</h2>
      <p><b>Name:</b> ${firstName} ${lastName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Referral Source:</b> ${referralSource === 'other' ? `${referralSource} - ${otherReferral}` : referralSource}</p>
      <p><b>Description:</b> ${description}</p>
    `;

    await resend.emails.send({
      from: 'Contact Form <noreply@tyrelldasilva.com>',
      to: ['marketing@tyrelldasilva.com', 'tyrell@tyrelldasilva.com'],
      subject: 'New Contact Form Submission',
      html: msgHtml
    });

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, error: 'Server error.' }, { status: 500 });
  }
}
