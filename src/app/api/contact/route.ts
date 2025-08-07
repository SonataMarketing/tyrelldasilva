import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { firstName, lastName, email, phone, description, referralSource, otherReferral } = data;

    // Check if Mailchimp credentials are configured
    if (!process.env.MAILCHIMP_API_KEY || !process.env.MAILCHIMP_AUDIENCE_ID) {
      console.error('❌ Mailchimp credentials not found in environment variables');
      return NextResponse.json({ 
        success: false, 
        error: 'Email service not configured. Please contact administrator.' 
      }, { status: 500 });
    }

    // Extract server prefix from API key (e.g., 'us14' from API key ending in '-us14')
    const serverPrefix = process.env.MAILCHIMP_API_KEY.split('-').pop();
    const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`;

    // Prepare contact data for Mailchimp
    const mailchimpData = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        PHONE: phone,
        MMERGE6: description, // Custom field for project description
        MMERGE7: referralSource === 'other' ? `${referralSource} - ${otherReferral}` : referralSource // Custom field for referral source
      },
      tags: ['Contact Form Submission']
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mailchimpData)
    });

    const result = await response.json();

    if (!response.ok) {
      // Handle the case where email is already subscribed
      if (result.title === 'Member Exists') {
        
        // Update existing member
        const updateUrl = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members/${Buffer.from(email.toLowerCase()).toString('hex')}`;
        
        const updateResponse = await fetch(updateUrl, {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${process.env.MAILCHIMP_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            merge_fields: mailchimpData.merge_fields,
            tags: mailchimpData.tags
          })
        });

        if (updateResponse.ok) {
        } else {
          console.error('❌ Failed to update contact in Mailchimp');
        }
      } else {
        console.error('❌ Mailchimp API error:', result);
        throw new Error(`Mailchimp API error: ${result.detail || result.title}`);
      }
    } else {
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully! You have been added to our mailing list.' 
    });

  } catch (error: any) {
    console.error('❌ Contact form error:', error);
    console.error('Error details:', {
      message: error.message,
      name: error.name
    });
    
    return NextResponse.json({ 
      success: false, 
      error: `Server error: ${error.message}` 
    }, { status: 500 });
  }
}
