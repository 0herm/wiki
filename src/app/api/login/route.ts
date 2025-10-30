import { NextResponse } from 'next/server'
import config from '@config'

export async function GET() {
    const state = Math.random().toString(36).substring(5)
    const authQueryParams = new URLSearchParams({
        client_id: config.authService.CLIENT_ID ?? '',
        redirect_uri: config.authInternal.REDIRECT_URL,
        response_type: 'code',
        scope: 'openid profile email',
        state: state,
    }).toString()

    return NextResponse.redirect(
        `${config.authService.AUTH_URL}?${authQueryParams}`
    )
}