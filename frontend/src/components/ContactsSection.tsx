// components/ContactsSection.tsx
'use client'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Phone, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { getFileUrl } from '@/sanity/client'
import type { ContactsData } from '@/types/contacts'
import { motion } from 'framer-motion'

interface ContactsSectionProps {
  contactsData: ContactsData | null
}

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, staggerChildren: 0.12, delayChildren: 0.05, ease: [0.4, 0, 0.2, 1] }
  }
} as const

const leftVariants = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.4, 0, 0.2, 1] } }
} as const

const rightVariants = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.4, 0, 0.2, 1] } }
} as const

const contentVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
} as const

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: [0.4, 0, 0.2, 1] } }
} as const

const contactInfoVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } }
} as const

// Map link requested in prompt
const MAP_LINK = "https://www.google.com/maps/place/MakeCloud/data=!4m2!3m1!1s0x0:0x20ab1389917c9999?sa=X&ved=1t:2428&ictx=111";

const ContactsSection = ({ contactsData }: ContactsSectionProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    privacy: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  if (!contactsData) return null

  const { leftSection, rightSection, formSettings } = contactsData
  const { heading, subheading, phone, email, address, backgroundImage, nameVectorImage } = leftSection
  const { formHeading, formFields, submitButton, privacyPolicy, successMessage, errorMessage, formBackgroundImage } = rightSection
  const { apiEndpoint, requiredFields, enablePrivacyCheckbox } = formSettings

  // Get image URLs or use defaults
  const bgImageUrl = backgroundImage ? getFileUrl(backgroundImage) : '/contact-vector.svg'
  const nameVectorUrl = nameVectorImage ? getFileUrl(nameVectorImage) : '/contact-name-vector.svg'
  const formBgImageUrl = formBackgroundImage ? getFileUrl(formBackgroundImage) : '/contact-vector-2.svg'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      privacy: checked
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Form validation
      if (enablePrivacyCheckbox && !formData.privacy) {
        setSubmitStatus('error')
        setIsSubmitting(false)
        return
      }

      // Dummy AJAX call
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500))

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          message: '',
          privacy: false
        })

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.section
      id='contact'
      className='mt-[7.5vh]'
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div>
        <motion.div
          className='grid md:grid-cols-2 gap-8 items-stretch'
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Side - Gradient Background */}
          <motion.div
            className='hero 2xl:w-[967px] md:w-[53vw] text-white relative overflow-hidden rounded-br-[20px] rounded-tr-[20px] md:pt-[10.6vh] pt-[8vh] lg:pb-[11vh] pb-[6vh] 2xl:pl-[13.5vw] xl:pl-[9vw] md:pl-[7vw]'
            variants={leftVariants}
          >
            <Image src={bgImageUrl} height={100} width={100} alt='vector' className='xl:w-[199px] w-[160px] h-auto absolute -top-6 -right-6 z-10' />
            <Image src={nameVectorUrl} height={100} width={100} alt='vector' className='2xl:h-auto h-[100%] absolute top-0 left-0 z-10' />

            {/* Content */}
            <div className='relative z-10 2xl:w-[611px] xl:w-[520px] px-5 xl:px-0'>
              <h2 className='font-normal h2 leading-[100%] font-archivo-black mb-6'>
                {heading}
              </h2>

              <p className='font-roboto font-normal text-white leading-[100%] mb-9 xl:text-[18px] text-[16px]'>
                {subheading}
              </p>

              {/* Contact Info */}
              <motion.div className='space-y-6' variants={contactInfoVariants}>
                {/* Phone */}
                <motion.div className='flex items-start gap-4' variants={itemVariants}>
                  <div className='bg-white w-12 h-12 flex justify-center items-center rounded-full text-black'>
                    <Phone className='w-6 h-6' />
                  </div>
                  <div>
                    <p className='xl:text-[18px] text-[16px] font-roboto leading-[100%] text-white mb-2'>{phone.label}</p>
                    <a href={phone.link} className='xl:text-[18px] text-[16px] font-roboto leading-[100%] text-white font-bold hover:underline'>
                      {phone.number}
                    </a>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div className='flex items-start gap-4' variants={itemVariants}>
                  <div className='bg-white w-12 h-12 flex justify-center items-center rounded-full text-black'>
                    <Mail className='w-6 h-6' />
                  </div>
                  <div>
                    <p className='xl:text-[18px] text-[16px] font-roboto leading-[100%] text-white mb-2'>{email.label}</p>
                    <a href={email.link} className='xl:text-[18px] text-[16px] font-roboto leading-[100%] text-white font-bold hover:underline'>
                      {email.address}
                    </a>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div className='flex items-start gap-4' variants={itemVariants}>
                  <div className='bg-white w-12 h-12 flex justify-center items-center rounded-full text-black'>
                    <MapPin className='w-6 h-6' />
                  </div>
                  <div>
                    <p className='xl:text-[18px] text-[16px] font-roboto leading-[100%] text-white mb-2'>{address.label}</p>
                    {/* Link the address to Google Maps as requested */}
                    <a
                      href={MAP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="xl:text-[18px] text-[16px] font-roboto leading-[120%] text-white font-bold hover:underline"
                    >
                      {address.street}<br />
                      {address.city}
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            className='bg-[#F7F9FC] 2xl:w-[900px] md:w-[45vw] ml-auto border border-[#DADEE7] rounded-bl-[16px] rounded-tl-[16px] 2xl:pt-[5.7vh] pt-[4vh] 2xl:pl-[4.6vw] xl:pl-[3vw] md:pl-[1vw] relative overflow-hidden md:pb-0 pb-[4vh]'
            variants={rightVariants}
          >
            <Image src={formBgImageUrl} height={100} width={100} alt='vector' className='xl:w-[78px] w-[65px] absolute right-0 top-1/2 -translate-y-1/2 z-10' />
            <div className='2xl:w-[562px] xl:w-[470px] px-5 xl:px-0'>
              <h3 className='font-normal font-archivo-black text-[22px] leading-[100%] text-black mb-6 uppercase'>
                {formHeading}
              </h3>

              <form onSubmit={handleSubmit} className='xl:space-y-4 space-y-3 relative z-10'>
                {/* Full Name */}
                <div>
                  <label htmlFor='fullName' className='block font-roboto xl:text-[18px] text-[16px] font-normal leading-[100%] mb-2 text-black'>
                    {formFields.fullNameLabel} {requiredFields.includes('fullName') && <span className='text-red-500'>*</span>}
                  </label>
                  <Input
                    id='fullName'
                    type='text'
                    required={requiredFields.includes('fullName')}
                    value={formData.fullName}
                    onChange={handleChange}
                    className='w-full xl:h-[48px] h-[40px]'
                    placeholder=''
                    disabled={isSubmitting}
                  />
                </div>

                {/* Email and Phone */}
                <div className='grid md:grid-cols-2 xl:gap-4 gap-3'>
                  <div>
                    <label htmlFor='email' className='block font-roboto xl:text-[18px] text-[16px] font-normal leading-[100%] mb-2 text-black'>
                      {formFields.emailLabel} {requiredFields.includes('email') && <span className='text-red-500'>*</span>}
                    </label>
                    <Input
                      id='email'
                      type='email'
                      required={requiredFields.includes('email')}
                      value={formData.email}
                      onChange={handleChange}
                      className='w-full xl:h-[48px] h-[40px]'
                      placeholder=''
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor='phone' className='block font-roboto xl:text-[18px] text-[16px] font-normal leading-[100%] mb-2 text-black'>
                      {formFields.phoneLabel}
                    </label>
                    <Input
                      id='phone'
                      type='tel'
                      value={formData.phone}
                      onChange={handleChange}
                      className='w-full xl:h-[48px] h-[40px]'
                      placeholder=''
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor='message' className='block font-roboto xl:text-[18px] text-[16px] font-normal leading-[100%] mb-2 text-black'>
                    {formFields.messageLabel} {requiredFields.includes('message') && <span className='text-red-500'>*</span>}
                  </label>
                  <Textarea
                    id='message'
                    required={requiredFields.includes('message')}
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className='w-full resize-none h-[150px]'
                    placeholder=''
                    disabled={isSubmitting}
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg'>
                    {successMessage}
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg'>
                    {errorMessage}
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type='submit'
                  disabled={isSubmitting}
                  className='bg-[#345CA7] hover:bg-blue-700 text-white font-bold font-roboto 2xl:w-[562px] xl:w-[470px] w-full h-[43px] rounded-full xl:text-[18px] text-[16px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {isSubmitting ? submitButton.submittingText : submitButton.text}
                </Button>

                {/* Privacy Policy Checkbox */}
                {enablePrivacyCheckbox && (
                  <div className='flex items-center gap-3 mt-[1vh] pb-3'>
                    <Checkbox
                      id='privacy'
                      checked={formData.privacy}
                      onCheckedChange={handleCheckboxChange}
                      className='accent-[#345CA7] shadow-inner border border-[#DADEE7]'
                      style={{ boxShadow: 'inset 0 2px 6px rgba(52, 92, 167, 0.15)' }}
                      disabled={isSubmitting}
                    />
                    <label htmlFor='privacy' className='block font-roboto xl:text-[18px] text-[16px] font-normal leading-[100%] text-black'>
                      {privacyPolicy}
                    </label>
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default ContactsSection
