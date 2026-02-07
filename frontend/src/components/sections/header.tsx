'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className='py-[2vh]'>
            <div className='flex justify-between items-center max-w-[1480px] mx-auto px-4 xl:px-10'>
                {/* Desktop Navigation - Hidden on Mobile */}
                <nav className='hidden md:flex items-center lg:gap-12.5 gap-6 links'>
                    <Link href="#">
                        Home
                    </Link>
                    <Link href="#">
                        Service
                    </Link>
                    <Link href="#">
                        Partner
                    </Link>
                </nav>

                {/* Logo - Left on Mobile, Centered on Desktop */}
                <div className='flex items-center md:absolute md:left-1/2 md:-translate-x-[50%]'>
                    <Link href="/">
                        <Image 
                            src="/logo.svg" 
                            alt="logo" 
                            height={100} 
                            width={100} 
                            className='2xl:w-[292px] xl:w-[250px] lg:w-[220px] md:w-[180px] w-[140px] h-auto' 
                        />
                    </Link>
                </div>

                {/* Contact Info - Hidden on Mobile */}
                <div className='hidden md:flex flex-col gap-0'>
                    <h5 className='links'>+91-234-567-8900</h5>
                    <h4 className='font-normal lg:text-[20px] text-[18px] font-archivo-black text-white'>Free Consultant</h4>
                </div>

                {/* Mobile Menu Button - Visible only on Mobile */}
                <button 
                    onClick={toggleMenu}
                    className='md:hidden text-white z-50 relative'
                    aria-label='Toggle menu'
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay & Sidebar */}
            <>
                {/* Backdrop */}
                {isMenuOpen && (
                    <div 
                        className='md:hidden fixed inset-0 bg-black/50 z-40'
                        onClick={toggleMenu}
                    />
                )}

                {/* Sidebar */}
                <div className={`md:hidden fixed top-0 right-0 h-full w-[80%] max-w-[320px] hero z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {/* Close Button */}
                    <div className='flex justify-end p-6'>
                        <button 
                            onClick={toggleMenu}
                            className='text-white hover:text-gray-300 transition-colors'
                            aria-label='Close menu'
                        >
                            <X size={28} />
                        </button>
                    </div>

                    {/* Logo in Sidebar */}
                    <div className='flex justify-center px-6 mb-8'>
                        <Link href="/" onClick={toggleMenu}>
                            <Image 
                                src="/logo.svg" 
                                alt="logo" 
                                height={100} 
                                width={100} 
                                className='w-[160px] h-auto' 
                            />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <nav className='flex flex-col px-6 gap-6 links text-xl'>   
                        <Link 
                            href="#" 
                            onClick={toggleMenu}
                            className='py-3 border-b border-white hover:border-gray-500 transition-colors text-white hover:text-gray-300'
                        >
                            Home
                        </Link>
                        <Link 
                            href="#" 
                            onClick={toggleMenu}
                            className='py-3 border-b border-white hover:border-gray-500 transition-colors text-white hover:text-gray-300'
                        >
                            Service
                        </Link>
                        <Link 
                            href="#" 
                            onClick={toggleMenu}
                            className='py-3 border-b border-white hover:border-gray-500 transition-colors text-white hover:text-gray-300'
                        >
                            Partner
                        </Link>
                        <Link 
                            href="#" 
                            onClick={toggleMenu}
                            className='py-3 border-b border-white hover:border-gray-500 transition-colors text-white hover:text-gray-300'
                        >
                            Case Study
                        </Link>
                        <Link 
                            href="#" 
                            onClick={toggleMenu}
                            className='py-3 border-b border-white hover:border-gray-500 transition-colors text-white hover:text-gray-300'
                        >
                            Contact
                        </Link>
                        
                        {/* Contact Info in Mobile Menu */}
                        <div className='flex flex-col gap-2 mt-8 pt-8 border-t border-white'>
                            <h5 className='links text-base text-white'>+91-234-567-8900</h5>
                            <h4 className='font-normal text-sm font-archivo-black text-white'>Free Consultant</h4>
                        </div>
                    </nav>
                </div>
            </>
        </header>
    )
}

export default Header