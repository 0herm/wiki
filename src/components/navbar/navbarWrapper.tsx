'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import LogoSmall from '@components/logo/logoSmall'
import { LogOut } from 'lucide-react'


function hamburgerStyle (isOpen: boolean, isSecond?: boolean) {
    return `bg-login-50 h-0.5 absolute w-8 transition-all duration-[400ms] left-2 ${
        isOpen
            ? `top-6 ${isSecond ? 'rotate-45' : '-rotate-45'}`
            : isSecond ? 'top-7' : 'top-4'
    }`
}

export type NavbarProps = {
    onlyLogo?: boolean
    token: string | null
    disableAuthButton?: boolean
    children: React.ReactNode
}

export default function Navbar({
    onlyLogo,
    token,
    children,
    disableAuthButton
}: NavbarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <div className={`${isMobileMenuOpen ? 'bg-[#181818f0]' : 'bg-[#18181899]'} backdrop-blur-xl fixed top-0 z-900 w-full`}>
            <div className={`flex w-full max-w-6xl m-auto p-2 transition duration-500 800px:justify-between 800px:p-4 ${
                isMobileMenuOpen ? 'h-screen bg-login-900/20 800px:h-20' : ''
            }`}>
                {/* Logo */}
                <div className='block h-12 p-1 800px:p-0'>
                    <Link
                        href='/'
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <LogoSmall />
                    </Link>
                </div>

                {onlyLogo ? null : (
                    <>
                        {/* Desktop Navigation */}
                        <nav className='hidden 800px:flex 800px:justify-between 800px:items-center 800px:w-fill max-w-200'>
                            {children}
                        </nav>

                        {/* Controls */}
                        <nav className='flex w-[calc(100vw-8rem)] justify-end h-12 800px:w-fit'>
                            {!disableAuthButton && <AuthButton token={token} />}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className='w-12 h-12 relative cursor-pointer bg-none border-none 800px:hidden'
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <div className={hamburgerStyle(isMobileMenuOpen)} />
                            <div className={hamburgerStyle(isMobileMenuOpen, true)} />
                        </button>

                        {/* Mobile Navigation */}
                        <nav className={`fixed top-16 w-[calc(100%-2rem)] max-w-140 mx-auto left-0 right-0 800px:hidden
                            transition-all duration-500 ease-in-out overflow-hidden 
                            ${isMobileMenuOpen ? 'max-h-[calc(100vh-4rem)] opacity-100' : 'max-h-0 opacity-0'}`}
                        onClick={() => setIsMobileMenuOpen(false)}>
                            {React.Children.map(children, (child, index) => (
                                <div
                                    key={index}
                                    className={`transition-all duration-500 ease-out ${
                                        isMobileMenuOpen
                                            ? 'opacity-100 transform translate-y-0'
                                            : 'opacity-0 transform -translate-y-4'
                                    }`}
                                    style={{
                                        transitionDelay: isMobileMenuOpen ? `${index * 80}ms` : '0ms'
                                    }}
                                >
                                    {child}
                                </div>
                            ))}
                        </nav>
                    </>
                )}
            </div>
        </div>
    )
}

function AuthButton({ token }: { token: string | null }) {
    return (
        <div className='rounded-[0.3rem] hover:bg-[#6464641a] h-12 w-12'>
            {token ? (
                <Link
                    href='/api/logout'
                    prefetch={false}
                    onClick={(e) => {
                        e.preventDefault()
                        window.location.href = '/api/logout'
                    }}
                    className='grid items-center justify-center h-full w-full'
                >
                    <LogOut size={24} />
                </Link>
            ) : (
                <Link
                    href='/api/login'
                    className='grid items-center justify-center h-full w-full'
                >
                    <div className={`relative w-[30px] h-5
                        before:content-[""] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2
                        before:w-2.5 before:h-2.5 before:border-2 before:border-login-50
                        before:rounded-full before:bg-transparent
                        after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                        after:w-[18px] after:h-2 after:border-2 after:border-login-50
                        after:rounded-t-[22px] after:border-b-0 after:bg-transparent
                    `}
                    />
                </Link>
            )}
        </div>
    )
}
