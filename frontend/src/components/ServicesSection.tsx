'use client'

import Link from 'next/link'
import { getFileUrl } from '@/sanity/client'
import type { ServicesData } from '@/types/services'
import { motion, AnimatePresence } from 'framer-motion'

interface ServicesSectionProps {
  servicesData: ServicesData | null
}

// Only entrance (mount) animation, not hover, and only supported values for transition
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.18, delayChildren: 0.15 } }
} as const

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 18 } }
} as const

const iconVariants = {
  hidden: { scale: 0.7, opacity: 0, rotate: -15 },
  visible: { scale: 1, opacity: 1, rotate: 0, transition: { delay: 0.1, type: 'spring' as const, stiffness: 300 } }
} as const

const arrowVariants = {
  hidden: { scale: 0.7, opacity: 0, rotate: 15 },
  visible: { scale: 1, opacity: 1, rotate: 0, transition: { delay: 0.18, type: 'spring' as const, stiffness: 300 } }
} as const

const imageVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { delay: 0.14, type: 'spring' as const, stiffness: 80 } }
} as const

const titleVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { delay: 0.22, type: 'spring' as const, stiffness: 100 } }
} as const

const headingVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring' as const, stiffness: 70, delay: 0.04 } }
} as const

const ServicesSection = ({ servicesData }: ServicesSectionProps) => {
  if (!servicesData) return null

  const { heading, servicesList = [] } = servicesData

  return (
    <motion.section
      id='service'
      className='md:my-[10.6vh] my-[8vh] max-w-[1480px] mx-auto px-4 xl:px-10'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-24% 0px -24% 0px' }}
    >
      <motion.div>
        <motion.div className='md:w-[800px] md:mx-auto'>
          <motion.h2
            className='font-normal font-archivo-black text-center'
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-24% 0px -24% 0px' }}
          >
            {heading}
          </motion.h2>
        </motion.div>
        <motion.div
          className='lg:flex lg:justify-center lg:items-center grid md:grid-cols-2 grid-cols-1 gap-5 mt-[4vh]'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-24% 0px -24% 0px' }}
        >
          <AnimatePresence>
            {servicesList.map((service) => (
              <motion.div
                key={service._key}
                className='md:w-[335px] h-auto rounded-[22px] relative group cursor-pointer'
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-24% 0px -24% 0px' }}
              >
                {/* Top-left icon */}
                <motion.div
                  className='bg-[#E53023] xl:w-12 xl:h-12 lg:w-9 lg:h-9 w-12 h-12 rounded-full absolute left-0 top-0 flex justify-center items-center z-10'
                  variants={iconVariants}
                >
                  {/* This image no hover motion (just entrance) */}
                  <img 
                    src={getFileUrl(service.icon)} 
                    alt="icon" 
                    className='xl:w-[25px] lg:w-[20px] w-[25px] h-auto' 
                  />
                </motion.div>
                
                {/* Bottom-right arrow link */}
                <Link 
                  href={service.url}
                  className='bg-[#345CA7] xl:w-12 xl:h-12 lg:w-9 lg:h-9 w-12 h-12 rounded-full absolute right-0 bottom-0 flex justify-center items-center group-hover:bg-[#E53023] hover:bg-[#E53023] transition-all duration-300 z-10'
                >
                  <motion.img 
                    src="/arrow.svg" 
                    alt="arrow"
                    className='xl:w-[12px] lg:w-[9px] w-[12px] h-auto'
                    variants={arrowVariants}
                  />
                </Link>
                
                {/* Main service image */}
                <motion.img 
                  src={getFileUrl(service.image)} 
                  alt={service.title} 
                  className='w-full h-auto rounded-[22px] transition-transform duration-500 group-hover:scale-105' 
                  variants={imageVariants}
                  style={{ zIndex: 1 }}
                />
                
                {/* Service title */}
                <motion.h4
                  className='font-normal font-archivo-black services absolute bottom-[11%] pr-8 md:pr-0 transition-colors duration-300 group-hover:text-[#345CA7] z-10'
                  variants={titleVariants}
                >
                  {service.title}
                </motion.h4>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default ServicesSection
