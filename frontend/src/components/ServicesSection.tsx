'use client'

import Link from 'next/link'
import { getFileUrl } from '@/sanity/client'
import type { ServicesData } from '@/types/services'
import { motion, AnimatePresence } from 'framer-motion'

interface ServicesSectionProps {
  servicesData: ServicesData | null
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.14, delayChildren: 0.10 } }
} as const

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 18 } }
} as const

const iconVariants = {
  hidden: { scale: 0.7, opacity: 0, rotate: -15 },
  visible: { scale: 1, opacity: 1, rotate: 0, transition: { delay: 0.07, type: 'spring' as const, stiffness: 300 } }
} as const

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.13, type: 'spring' as const, stiffness: 100 } }
} as const

const headingVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring' as const, stiffness: 70, delay: 0.04 } }
} as const

const ServicesSection = ({ servicesData }: ServicesSectionProps) => {
  if (!servicesData) return null

  const { heading, servicesList = [], description } = servicesData

  return (
    <motion.section
      id='service'
      className='md:my-[10.6vh] my-[8vh] max-w-[1480px] mx-auto px-4 xl:px-10'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-24% 0px -24% 0px' }}
    >
      <motion.div>
        <motion.div className='md:w-[800px]'>
          <motion.h2
            className='font-normal font-archivo-black'
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-24% 0px -24% 0px' }}
          >
            {heading}
          </motion.h2>
        </motion.div>
        {/* Section description if present */}
        {description && (
          <motion.div
            className='md:w-[700px] mx-auto mt-2 mb-3'
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
          >
            <p className='font-archivo text-[1.12rem] text-center text-black/80'>
              {description}
            </p>
          </motion.div>
        )}
        <motion.div
          className='lg:flex lg:justify-center 2xl:items-center grid md:grid-cols-2 grid-cols-1 2xl:gap-7 gap-5 mt-[4vh]'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-24% 0px -24% 0px' }}
        >
          <AnimatePresence>
            {servicesList
              .slice()
              .sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999))
              .map((service) => (
                <motion.div
                  key={service._key}
                  className='md:w-[350px] min-h-[280px] h-auto rounded-[24px] bg-white/95 shadow-lg border border-[#ececec] flex flex-col items-center py-8 px-2 group transition-transform duration-300 hover:-translate-y-2'
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-18% 0px -18% 0px' }}
                >
                  {/* Icon top, centered */}
                  <motion.div
                    className='flex justify-center items-center w-20 h-20 rounded-full hero shadow-md border mb-5'
                    variants={iconVariants}
                  >
                    <img
                      src={getFileUrl(service.icon)}
                      alt="icon"
                      className='w-[42px] h-[42px] object-contain'
                    />
                  </motion.div>

                  {/* Title */}
                  <motion.div
                    className='flex flex-col items-center px-2 pt-1 pb-0 flex-1 w-full'
                    variants={contentVariants}
                  >
                    <h4 className='font-archivo-black font-bold text-[1.28rem] text-center text-black relative z-50'>
                      {service.title}
                    </h4>
                  </motion.div>

                  {/* Description */}
                  {service.description && (
                    <motion.div
                      className='flex flex-col items-center px-2 pt-1 pb-4 flex-1 w-full'
                      variants={contentVariants}
                    >
                      <p className='font-archivo text-[1rem] text-center text-black relative z-50 mb-2 mt-[6px]'>
                        {service.description}
                      </p>
                    </motion.div>
                  )}

                  {/* Learn More link */}
                  <div className="w-full flex flex-col items-center justify-end mt-auto">
                    <Link
                      href={service.url}
                      className='inline-flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-white bg-[#345CA7] hover:opacity-90 transition-colors duration-300 text-sm shadow-sm mt-2'
                    >
                      Learn more
                      <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M0.59375 10.6899L10.571 0.712646" stroke="white" stroke-width="1.18777" stroke-miterlimit="10" stroke-linecap="round"></path>
                        <path d="M0.712891 0.593872H10.6901" stroke="white" stroke-width="1.18777" stroke-miterlimit="10"></path>
                        <path d="M10.6895 10.5711V0.593872" stroke="white" stroke-width="1.18777" stroke-miterlimit="10"></path>
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default ServicesSection
