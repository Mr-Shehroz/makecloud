// components/Header.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { getFileUrl } from '@/sanity/client'
import type { HeaderData } from '@/types/header'

interface HeaderProps {
  headerData: HeaderData | null
}

const Header = ({ headerData }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [serviceOpen, setServiceOpen] = useState(false)
  const [partnerOpen, setPartnerOpen] = useState(false)

  if (!headerData) return null

  const { navigation = [], contactInfo, logo } = headerData

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setServiceOpen(false)
    setPartnerOpen(false)
  }

  return (
    // Set header to relative and high z-index so dropdowns go above hero
    <header className='py-[2vh] relative z-[60]'>
      <div className='flex justify-between items-center max-w-[1480px] mx-auto px-4 xl:px-10 relative'>
        {/* Logo - Always Left */}
        <div className='flex items-center'>
          <Link href="/">
            {logo ? (
              <Image 
                src={getFileUrl(logo)} 
                alt="logo" 
                height={100} 
                width={100} 
                className='2xl:w-[292px] xl:w-[250px] lg:w-[220px] md:w-[180px] w-[140px] h-auto' 
              />
            ) : (
              <Image 
                src="/logo.svg" 
                alt="logo" 
                height={100} 
                width={100} 
                className='2xl:w-[292px] xl:w-[250px] lg:w-[220px] md:w-[180px] w-[140px] h-auto' 
              />
            )}
          </Link>
        </div>

        {/* Desktop Navigation - Centered Horizontally (xl only); hidden on mobile and md-lg */}
        {/* Set nav's parent to relative, nav to static so real dropdown MENU can be absolute to header */}
        <nav className='hidden lg:flex items-center xl:gap-12.5 gap-6 links absolute left-1/2 -translate-x-1/2 z-[61]'>
          {navigation.map((item) => (
            <div key={item._key} className='relative group'>
              {item.hasDropdown ? (
                <>
                  <Link 
                    href={item.url} 
                    className='cursor-pointer flex items-center gap-2 group hover:text-gray-300 transition-colors'
                  >
                    {item.label}
                    <span>
                      <img 
                        src="/dropdown.png" 
                        alt="dropdown-arrow" 
                        className='h-auto mt-1 group-hover:rotate-180 transition-transform duration-300' 
                      />
                    </span>
                  </Link>
                  {/* Dropdown Menu */}
                  {/* Make sure this is on top of hero: z-[70], and absolute to the <header> */}
                  <div className='absolute left-0 top-[calc(100%+0.5rem)] w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[70]'>
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link 
                        key={dropdownItem._key} 
                        href={dropdownItem.url} 
                        className='block px-4 py-3 text-black hover:bg-gray-100 transition-colors'
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link 
                  href={item.url} 
                  className='hover:text-gray-300 transition-colors'
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button for md to lg - Visible only md to lg */}
        <button 
          onClick={toggleMenu}
          className='hidden md:block lg:hidden text-white z-50 relative'
          aria-label='Toggle menu'
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Contact Info - Hidden on Mobile */}
        <div className='hidden lg:flex flex-col gap-0'>
          <h5 className='links'>{contactInfo.phoneNumber}</h5>
          <h4 className='font-normal lg:text-[20px] text-[18px] font-archivo-black text-white'>
            {contactInfo.consultantText}
          </h4>
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
            className='lg:hidden fixed inset-0 bg-black/50 z-40'
            onClick={toggleMenu}
          />
        )}

        {/* Sidebar */}
        <div className={`lg:hidden fixed top-0 right-0 h-full w-[80%] max-w-[320px] hero z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
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
              {logo ? (
                <Image 
                  src={getFileUrl(logo)} 
                  alt="logo" 
                  height={100} 
                  width={100} 
                  className='w-[160px] h-auto' 
                />
              ) : (
                <Image 
                  src="/logo.svg" 
                  alt="logo" 
                  height={100} 
                  width={100} 
                  className='w-[160px] h-auto' 
                />
              )}
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className='flex flex-col px-6 gap-4 links text-lg'>
            {navigation.map((item) => {
              // Check if this is Service or Partner for accordion state
              const isService = item.label.toLowerCase().includes('service')
              const isPartner = item.label.toLowerCase().includes('partner')
              const hasDropdown = item.hasDropdown && item.dropdownItems?.length

              return (
                <div key={item._key} className={hasDropdown ? 'border-b border-white/30' : ''}>
                  {hasDropdown ? (
                    <>
                      <button
                        onClick={() => {
                          if (isService) setServiceOpen(!serviceOpen)
                          if (isPartner) setPartnerOpen(!partnerOpen)
                        }}
                        className='w-full py-3 flex items-center justify-between text-white hover:text-gray-300 transition-colors'
                      >
                        <span>{item.label}</span>
                        <ChevronDown 
                          size={20} 
                          className={`transition-transform duration-300 ${
                            (isService && serviceOpen) || (isPartner && partnerOpen) 
                              ? 'rotate-180' 
                              : ''
                          }`}
                        />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${
                        (isService && serviceOpen) || (isPartner && partnerOpen) 
                          ? 'max-h-96 mb-3' 
                          : 'max-h-0'
                      }`}>
                        <div className='pl-4 flex flex-col gap-2'>
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link 
                              key={dropdownItem._key} 
                              href={dropdownItem.url} 
                              onClick={toggleMenu}
                              className='py-2 text-white/80 hover:text-white transition-colors text-base'
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link 
                      href={item.url} 
                      onClick={toggleMenu}
                      className='py-3 border-b border-white/30 hover:border-white transition-colors text-white hover:text-gray-300 block'
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              )
            })}

            {/* Contact Info in Mobile Menu */}
            <div className='flex flex-col gap-2 mt-4'>
              <h5 className='links text-base text-white'>{contactInfo.phoneNumber}</h5>
              <h4 className='font-normal text-sm font-archivo-black text-white'>
                {contactInfo.consultantText}
              </h4>
            </div>
          </nav>
        </div>
      </>
    </header>
  )
}

export default Header