import type { Metadata } from 'next'
// @ts-ignore
import './globals.css'
// @ts-ignore
import 'uibee/styles'
import NavBar from '@/components/navbar/navbar'
import SideBar from '@/components/sidebar/sidebar'

export const metadata: Metadata = {
    title: 'Wiki',
    description: 'A collaborative knowledge base',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en' className='dark min-h-screen'>
            <body className='flex flex-col bg-login-700 min-h-screen w-full'>
                <NavBar />
                <main className='flex w-full grow pt-20'>
                    <SideBar />
                    <div className='grow bg-login-800'>{children}</div>
                </main>
            </body>
        </html>
    )
}
