import type { Metadata } from 'next'
// @ts-ignore
import './globals.css'

export const metadata: Metadata = {
    title: 'Wiki',
    description: 'A collaborative knowledge base',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en'>
            <body
                className='antialiased'
            >
                {children}
            </body>
        </html>
    )
}
