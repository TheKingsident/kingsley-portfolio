import { NextRequest, NextResponse } from 'next/server';

// Use local backend in development, Render backend in production
const BACKEND_URL = process.env.NODE_ENV === 'production' 
  ? 'https://kingsley-portfolio.onrender.com'
  : 'http://localhost:5000';

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
    console.log(`API Route - Sending to backend (${BACKEND_URL}) for verification and processing...`);
    const backendResponse = await fetch(`${BACKEND_URL}/api/form/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData, captchaToken }),
      signal: AbortSignal.timeout(30000), // 30 seconds to allow for email sending
    });

    console.log('API Route - Backend response status:', backendResponse.status);

    // Check if backend is reachable and returned a valid response
    if (!backendResponse.ok && backendResponse.status === 404) {
      console.error('API Route - Backend endpoint not found. Is the backend server running?');
      return NextResponse.json({ 
        error: 'Backend server not available', 
        details: 'Make sure the backend server is running on port 5000' 
      }, { status: 503 });
    }

    // Try to parse JSON, handle HTML error pages
    let backendData;
    const contentType = backendResponse.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      backendData = await backendResponse.json();
    } else {
      const textResponse = await backendResponse.text();
      console.error('API Route - Non-JSON response from backend:', textResponse.substring(0, 200));
      return NextResponse.json({ 
        error: 'Invalid response from backend server',
        details: 'Backend returned HTML instead of JSON. Check backend logs.' 
      }, { status: 502 });
    }

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