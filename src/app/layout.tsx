import type { Metadata } from 'next'
// @ts-ignore
import './globals.css'
// @ts-ignore
import 'uibee/styles'
import NavBar from '@/components/navbar/navbar'

export const metadata: Metadata = {
    title: 'Wiki',
    description: 'A collaborative knowledge base',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en' className='dark'>
            <body
                className='antialiased'
            >
                <NavBar />
                {children}
            </body>
        </html>
    )
}
