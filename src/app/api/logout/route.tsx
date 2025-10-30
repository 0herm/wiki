import config from '@config'
import { NextResponse } from 'next/server'

export async function GET() {
    const response = NextResponse.redirect(new URL('/', config.authInternal.BASE_URL ?? ''))

    // Remove all authentication cookies
    const cookiesToRemove = [
        'access_token',
        'user_id',
        'user_name',
        'user_email',
        'user_groups'
    ]

    cookiesToRemove.forEach(cookieName => {
        response.cookies.delete(cookieName)
    })

    return response
}
