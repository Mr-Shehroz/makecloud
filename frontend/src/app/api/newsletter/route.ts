// app/api/newsletter/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json()
    const { email } = body

    // Simulate processing delay (300-1000ms)
    await new Promise(resolve => setTimeout(resolve, Math.random() * 700 + 300))

    // Basic validation
    if (!email) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email address is required' 
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

    // Check for disposable/temporary email domains (optional)
    const disposableDomains = ['tempmail.com', 'throwaway.email', '10minutemail.com']
    const emailDomain = email.split('@')[1]
    if (disposableDomains.includes(emailDomain)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Please use a permanent email address' 
        },
        { status: 400 }
      )
    }

    // Log subscription to console (in production, this would save to database/mailing list)
    console.log('📬 New newsletter subscription:', {
      email,
      subscribedAt: new Date().toISOString(),
      source: 'footer_form'
    })

    // Simulate successful subscription
    return NextResponse.json(
      {
        success: true,
        message: 'Successfully subscribed to newsletter!',
        data: {
          id: `subscriber_${Date.now()}`,
          email,
          subscribedAt: new Date().toISOString()
        }
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Newsletter subscription error:', error)
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

// Optional: Unsubscribe endpoint
export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email required' },
        { status: 400 }
      )
    }

    console.log('📭 Newsletter unsubscribe:', {
      email,
      unsubscribedAt: new Date().toISOString()
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully unsubscribed from newsletter'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Unsubscribe error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}