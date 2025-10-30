'use server'

import config from '@config'
import { cookies } from 'next/headers'

type GetWrapperProps = {
    path: string
    options?: object
}

type PostWrapper = {
    path: string
    data?: object | FormData
}

type DeleteWrapperProps = {
    path: string
    options?: object
}

type PutWrapperProps = {
    path: string
    data?: object
}

const baseUrl = config.url.API_URL

export async function getWrapper({ path, options = {} }: GetWrapperProps) {
    const Cookies = await cookies()
    const access_token = Cookies.get('access_token')?.value || ''

    const baseHeaders = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`,
    }

    const defaultOptions = { method: 'GET', headers: baseHeaders }
    const finalOptions = { ...defaultOptions, ...options }

    try {
        const response = await fetch(`${baseUrl}${path}`, finalOptions)
        if (!response.ok) {
            throw new Error(await response.text())
        }

        const text = await response.text()
        return JSON.parse(text)
        // eslint-disable-next-line
    } catch (error: any) {
        return (
            JSON.stringify(error.error) ||
            JSON.stringify(error.message) ||
            'Unknown error! Please contact TekKom'
        )
    }
}

export async function postWrapper({ path, data }: PostWrapper) {
    const Cookies = await cookies()
    const access_token = Cookies.get('access_token')?.value || ''


    const defaultOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(data),
    }

    try {
        const response = await fetch(`${baseUrl}${path}`, defaultOptions)
        if (!response.ok) {
            throw new Error(await response.text())
        }

        const text = await response.text()
        return JSON.parse(text)
        // eslint-disable-next-line
    } catch (error: any) {
        return (
            JSON.stringify(error.error) ||
            JSON.stringify(error.message) ||
            'Unknown error! Please contact TekKom'
        )
    }
}

export async function deleteWrapper({ path, options }: DeleteWrapperProps) {
    const Cookies = await cookies()
    const access_token = Cookies.get('access_token')?.value || ''


    const defaultOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access_token}`,
        },
    }
    const finalOptions = { ...defaultOptions, ...options }

    try {
        const response = await fetch(`${baseUrl}${path}`, finalOptions)
        const data = await response.json()

        if (!response.ok) {
            throw new Error(await response.text())
        }

        return data
        // eslint-disable-next-line
    } catch (error: any) {
        return (
            JSON.stringify(error.error) ||
            JSON.stringify(error.message) ||
            'Unknown error! Please contact TekKom'
        )
    }
}

export async function putWrapper({ path, data = {} }: PutWrapperProps) {
    const Cookies = await cookies()
    const access_token = Cookies.get('access_token')?.value || ''

    const defaultOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(data),
    }
    const finalOptions = { ...defaultOptions }

    try {
        const response = await fetch(`${baseUrl}${path}`, finalOptions)
        if (!response.ok) {
            throw new Error(await response.text())
        }

        const text = await response.text()
        return JSON.parse(text)
        // eslint-disable-next-line
    } catch (error: any) {
        return (
            JSON.stringify(error.error) ||
            JSON.stringify(error.message) ||
            'Unknown error! Please contact TekKom'
        )
    }
}