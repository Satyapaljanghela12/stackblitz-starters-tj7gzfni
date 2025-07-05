import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Here you would typically send an email or save to database
    // For now, we'll just log the contact form submission
    console.log('Contact form submission:', {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString()
    });

    // In a real application, you might:
    // 1. Send an email using nodemailer or a service like SendGrid
    // 2. Save the message to a database
    // 3. Send a notification to administrators

    return NextResponse.json({
      message: 'Thank you for your message! We will get back to you soon.'
    });

  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}