'use client'

import { ChevronDown } from 'lucide-react'
import React, { ReactNode, useRef, useState } from 'react'

export type NavDropdownProps = {
    children: ReactNode
    title: string
}

export default function NavDropdown({ children, title }: NavDropdownProps) {
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)
    const navItemRef = useRef<HTMLDivElement>(null)

    return (
        <>
            {/* Desktop Dropdown */}
            <div className={'relative group hidden 800px:block'}>
                <div className='outline-none' tabIndex={0} ref={navItemRef}>
                    <div className={`list-none no-underline text-base leading-4 p-3 font-bold cursor-pointer flex flex-row items-center 
                        transition-colors`
                    }>
                        {title}
                        <ChevronDown className={'w-6 h-6 stroke-login ml-1 text-2xl transition-transform duration-300 ease-in-out'} />
                    </div>
                    <div className={`absolute pt-2 -ml-4 -translate-y-4 opacity-0 pointer-events-none
                        transition-all duration-200 ease-in-out z-10
                        group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0
                        group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0`}
                    >
                        <ul className={'p-3 px-6 pb-4 rounded-[0.4rem] shadow-[0_0.1rem_0.5rem_rgba(3,3,3,0.5)] bg-login-700/98'}>
                            {React.Children.map(children, (child, index) => (
                                <div
                                    key={index}
                                    onClick={() => navItemRef.current?.blur()}
                                    className='group dropdown'
                                >
                                    {child}
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            <div className={'block 800px:hidden'}>
                <button
                    className={'bg-none border-none cursor-pointer w-full text-left'}
                    onClick={(e) => {
                        e.stopPropagation()
                        setIsMobileDropdownOpen(!isMobileDropdownOpen)
                    }}
                >
                    <li className={`list-none no-underline text-2xl leading-6 overflow-hidden
                        w-full pl-4 pr-4 rounded-[0.3rem] transition-all duration-400
                        flex items-center gap-2 opacity-100 min-h-16 py-5 `}
                    >
                        <span>{title}</span>
                        <ChevronDown className={`w-6 h-6 transition-transform duration-400 shrink-0 
                            ${isMobileDropdownOpen ? 'rotate-180' : ''}`}
                        />
                    </li>
                </button>
                <div className={`list-none no-underline text-xl px-6 ${isMobileDropdownOpen ? 'pb-4' : ''}`}>
                    {React.Children.map(children, (child, index) => (
                        <div key={index} className={`leading-6 transition-all duration-500 group dropdown
                            ${isMobileDropdownOpen ? 'h-11 opacity-100' : 'h-0 opacity-0'}
                        `}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}