import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { formData, captchaToken } = await request.json();

    console.log('API Route - Received request:', { 
      hasFormData: !!formData, 
      hasCaptchaToken: !!captchaToken,
      captchaTokenLength: captchaToken?.length 
    });

    // Check if required fields are present
    if (!captchaToken) {
      console.log('API Route - Missing captcha token');
      return NextResponse.json({ error: 'reCAPTCHA verification required' }, { status: 400 });
    }

    // Send directly to backend - let backend handle reCAPTCHA verification
    console.log('API Route - Sending to backend for verification and processing...');
    const backendResponse = await fetch("https://kingsley-portfolio.onrender.com/api/form/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData, captchaToken }),
      signal: AbortSignal.timeout(15000),
    });

    const backendData = await backendResponse.json();
    console.log('API Route - Backend response:', { status: backendResponse.status, data: backendData });

    if (backendResponse.ok) {
      return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
    } else {
      return NextResponse.json({ error: backendData.error || 'Failed to submit form' }, { status: backendResponse.status });
    }

  } catch (error) {
    console.error('API Route - Form submission error:', error);
    return NextResponse.json({ error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}