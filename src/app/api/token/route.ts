import config from '@config'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    const url = new URL(request.url)
    const token = url.searchParams.get('access_token')

    if (!token) {
        return NextResponse.json({ error: 'No access token provided' }, { status: 400 })
    }

    const accessToken = url.searchParams.get('access_token')!
    const userID = url.searchParams.get('id')!
    const username = url.searchParams.get('name')!
    const userEmail = url.searchParams.get('email')!
    const userGroups = url.searchParams.get('groups')!

    const response = NextResponse.redirect(new URL('/', config.authInternal.BASE_URL ?? ''))
    response.cookies.set('access_token', accessToken)
    response.cookies.set('user_id', userID)
    response.cookies.set('user_name', username)
    response.cookies.set('user_email', userEmail)
    response.cookies.set('user_groups', userGroups)

    return response
}