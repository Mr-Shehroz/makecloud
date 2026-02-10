// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json()
    const { fullName, email, phone, message, privacy } = body

    // Simulate processing delay (500-1500ms)
    await new Promise(resolve => setTimeout(resolve, Math.random() * 1000 + 500))

    // Basic validation
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Missing required fields' 
        },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid email address' 
        },
        { status: 400 }
      )
    }

    // Log submission to console (in production, this would save to database)
    console.log('📧 New contact form submission:', {
      fullName,
      email,
      phone,
      message,
      privacy,
      timestamp: new Date().toISOString()
    })

    // Simulate successful submission
    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully!',
        data: {
          id: `contact_${Date.now()}`,
          submittedAt: new Date().toISOString()
        }
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error' 
      },
      { status: 500 }
    )
  }
}

// Optional: Handle other methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}