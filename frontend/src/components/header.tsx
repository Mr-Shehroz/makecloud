'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { getFileUrl } from '@/sanity/client'
import type { HeaderData } from '@/types/header'
import { motion, AnimatePresence } from 'framer-motion'

interface HeaderProps {
  headerData: HeaderData | null
}

const fade = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 }
}

const sideMenuVariants = {
  closed: { x: '100%' },
  open: { x: 0 }
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const dropdownVariants = {
  closed: { opacity: 0, y: 20, pointerEvents: 'none', transition: { duration: 0.18 } },
  open: { opacity: 1, y: 0, pointerEvents: 'all', transition: { duration: 0.22 } }
}

const mobileDropdownVariants = {
  closed: { height: 0, opacity: 0, transition: { duration: 0.18 } },
  open: { height: 'auto', opacity: 1, transition: { duration: 0.24 } }
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
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fade}
      className='py-[2vh] z-[60] fixed left-0 w-full'
    >
      <div className='flex justify-between items-center max-w-[1480px] mx-auto px-4 xl:px-10 relative'>
        {/* Logo - Always Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.07 }}
          className='flex items-center'
        >
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
        </motion.div>

        {/* Desktop Navigation - Centered Horizontally (xl only); hidden on mobile and md-lg */}
        {/* Set nav's parent to relative, nav to static so real dropdown MENU can be absolute to header */}
        <nav className='hidden lg:flex items-center xl:gap-12.5 gap-6 links absolute left-1/2 -translate-x-1/2 z-[61]'>
          {navigation.map((item, idx) => (
            <motion.div
              key={item._key}
              initial="hidden"
              animate="visible"
              variants={fade}
              transition={{ delay: 0.10 + idx * 0.07, duration: 0.28 }}
              className='relative group'
            >
              {item.hasDropdown ? (
                <>
                  <Link
                    href={item.url}
                    className='cursor-pointer flex items-center gap-2 group hover:text-gray-300 transition-colors'
                  >
                    {item.label}
                    <span>
                      <motion.img
                        src="/dropdown.png"
                        alt="dropdown-arrow"
                        className='h-auto mt-1 group-hover:rotate-180 transition-transform duration-300'
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.2 }}
                      />
                    </span>
                  </Link>
                  {/* Dropdown Menu */}
                  {/* Make sure this is on top of hero: z-[70], and absolute to the <header> */}
                  <AnimatePresence>
                    <motion.div
                      className='absolute left-0 top-[calc(100%+0.5rem)] w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[70]'
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={dropdownVariants}
                    >
                      {item.dropdownItems?.map((dropdownItem, didx) => (
                        <motion.div
                          key={dropdownItem._key}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.08 + didx * 0.05, duration: 0.18 }}
                        >
                          <Link 
                            href={dropdownItem.url} 
                            className='block px-4 py-3 text-black hover:bg-gray-100 transition-colors'
                          >
                            {dropdownItem.label}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </>
              ) : (
                <Link 
                  href={item.url} 
                  className='hover:text-gray-300 transition-colors'
                >
                  {item.label}
                </Link>
              )}
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button for md to lg - Visible only md to lg */}
        <motion.button
          onClick={toggleMenu}
          className='hidden md:block lg:hidden text-white z-50 relative'
          aria-label='Toggle menu'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.18, duration: 0.22 }}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>

        {/* Contact Info - Hidden on Mobile */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.3 }}
          className='hidden lg:flex flex-col gap-0'
        >
          <h5 className='links'>
            <a href={`tel:${contactInfo.phoneNumber}`} className='hover:underline'>
              {contactInfo.phoneNumber}
            </a>
          </h5>
          <h4 className='font-normal lg:text-[20px] text-[18px] font-archivo-black text-white'>
            {contactInfo.consultantText}
          </h4>
        </motion.div>

        {/* Mobile Menu Button - Visible only on Mobile */}
        <motion.button
          onClick={toggleMenu}
          className='md:hidden text-white z-50 relative'
          aria-label='Toggle menu'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.18, duration: 0.25 }}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay & Sidebar */}
      <>
        {/* Backdrop */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className='lg:hidden fixed inset-0 bg-black/50 z-40'
              onClick={toggleMenu}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={backdropVariants}
              transition={{ duration: 0.15 }}
            />
          )}
        </AnimatePresence>

        {/* Sidebar */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="sidebar"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideMenuVariants}
              transition={{ type: "tween", duration: 0.33 }}
              className={`lg:hidden fixed top-0 right-0 h-full w-[80%] max-w-[320px] hero z-50 transform overflow-y-auto`}
              style={{ transitionProperty: undefined }} // override tailwind transform transition, use framer instead
            >
              {/* Close Button */}
              <motion.div
                className='flex justify-end p-6'
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05, duration: 0.18 }}
              >
                <button 
                  onClick={toggleMenu}
                  className='text-white hover:text-gray-300 transition-colors'
                  aria-label='Close menu'
                >
                  <X size={28} />
                </button>
              </motion.div>

              {/* Logo in Sidebar */}
              <motion.div
                className='flex justify-center px-6 mb-8'
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.10, duration: 0.28 }}
              >
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
              </motion.div>

              {/* Navigation Links */}
              <motion.nav
                className='flex flex-col px-6 gap-4 links text-lg'
                initial="hidden"
                animate="visible"
                variants={fade}
                transition={{ delay: 0.19, duration: 0.19 }}
              >
                {navigation.map((item, idx) => {
                  // Check if this is Service or Partner for accordion state
                  const isService = item.label.toLowerCase().includes('service')
                  const isPartner = item.label.toLowerCase().includes('partner')
                  const hasDropdown = item.hasDropdown && item.dropdownItems?.length

                  return (
                    <motion.div
                      key={item._key}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.09 + idx * 0.06, duration: 0.18 }}
                      className={hasDropdown ? 'border-b border-white/30' : ''}
                    >
                      {hasDropdown ? (
                        <>
                          <motion.button
                            onClick={() => {
                              if (isService) setServiceOpen(!serviceOpen)
                              if (isPartner) setPartnerOpen(!partnerOpen)
                            }}
                            className='w-full py-3 flex items-center justify-between text-white hover:text-gray-300 transition-colors'
                            initial={false}
                            animate={{
                              color: (isService && serviceOpen) || (isPartner && partnerOpen)
                                ? '#b3b3b3'
                                : '#fff'
                            }}
                            transition={{ duration: 0.14 }}
                          >
                            <span>{item.label}</span>
                            <motion.span
                              animate={{
                                rotate: ((isService && serviceOpen) || (isPartner && partnerOpen)) ? 180 : 0
                              }}
                              transition={{ duration: 0.23 }}
                            >
                              <ChevronDown size={20} />
                            </motion.span>
                          </motion.button>
                          <AnimatePresence initial={false}>
                            {((isService && serviceOpen) || (isPartner && partnerOpen)) && (
                              <motion.div
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={mobileDropdownVariants}
                                style={{ overflow: "hidden" }}
                              >
                                <div className='pl-4 flex flex-col gap-2'>
                                  {item.dropdownItems?.map((dropdownItem, didx) => (
                                    <motion.div
                                      key={dropdownItem._key}
                                      initial={{ opacity: 0, x: 22 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.07 + didx * 0.04, duration: 0.11 }}
                                    >
                                      <Link
                                        href={dropdownItem.url}
                                        onClick={toggleMenu}
                                        className='py-2 text-white/80 hover:text-white transition-colors text-base'
                                      >
                                        {dropdownItem.label}
                                      </Link>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
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
                    </motion.div>
                  )
                })}

                {/* Contact Info in Mobile Menu */}
                <motion.div
                  className='flex flex-col gap-2 mt-4'
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12, duration: 0.18 }}
                >
                  <h5 className='links text-base text-white'>
                    <a href={`tel:${contactInfo.phoneNumber}`} className="hover:underline">
                      {contactInfo.phoneNumber}
                    </a>
                  </h5>
                  <h4 className='font-normal text-sm font-archivo-black text-white'>
                    {contactInfo.consultantText}
                  </h4>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </motion.header>
  )
}

export default Header
