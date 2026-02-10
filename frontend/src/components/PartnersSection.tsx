'use client'

import Image from 'next/image'
import { getFileUrl } from '@/sanity/client'
import type { PartnersData } from '@/types/partners'
import { motion } from 'framer-motion'

interface PartnersSectionProps {
  partnersData: PartnersData | null
}

// Animation variants
const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.14, delayChildren: 0.08, duration: 0.6 } }
}
const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.52 } },
}
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delay: 0.24 } }
}

const PartnersSection = ({ partnersData }: PartnersSectionProps) => {
  if (!partnersData) return null

  const { heading, partnersList = [] } = partnersData

  return (
    <motion.section 
      id='partner' 
      className='bg-[#F7F9FC] lg:h-[617px] px-4 xl:px-10'
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className='max-w-[1480px] mx-auto lg:pt-[12vh] lg:pb-[13vh] md:py-[10vh] py-[8vh]'
        variants={fadeIn}
      >
        <motion.div 
          className='md:w-[633px] md:mx-auto'
          variants={itemVariant}
        >
          <motion.h2
            className='font-normal font-archivo-black text-center'
            variants={itemVariant}
          >
            {heading}
          </motion.h2>
        </motion.div>
        <motion.div 
          className='lg:flex lg:justify-center lg:items-center grid md:grid-cols-2 xl:gap-6 md:gap-4 gap-0 mt-[4.5vh]'
          variants={sectionVariant}
        >
          {partnersList.map((partner, index) => (
            <motion.div 
              key={partner._key} 
              className={`lg:w-[452px] h-[247px] bg-[url(/partners-bg.png)] xl:bg-cover bg-contain bg-no-repeat bg-center rounded-[30px] relative ${
                index === 0 ? '' : 
                index === 1 ? '' : 
                'lg:mt-0 md:mt-[-4vh]'
              }`}
              variants={itemVariant}
            >
              {/* Top-right logo icon in red circle */}
              <motion.div
                className='2xl:w-16 2xl:h-16 xl:w-14 xl:h-14 lg:w-10 lg:h-10 w-12 h-12 rounded-full absolute xl:right-0 xl:top-0 right-[2%] lg:top-[16%] top-[12%] flex justify-center items-center bg-[#E53023] transition-all duration-300'
                variants={itemVariant}
              >
                <motion.img 
                  src={getFileUrl(partner.logoIcon)} 
                  alt={partner.partnerName.toLowerCase()} 
                  className='2xl:w-[35px] xl:w-[30px] w-[26px] h-auto'
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.14, duration: 0.33 }}
                />
              </motion.div>
              
              {/* Main partner logo */}
              <motion.div
                className='relative'
                variants={itemVariant}
              >
                <Image 
                  src={getFileUrl(partner.mainLogo)} 
                  alt={partner.partnerName} 
                  width={100} 
                  height={100} 
                  className={`2xl:w-[244px] xl:w-[200px] w-[150px] h-auto ml-[4.2vh] mt-[3.7vh] xl:pt-0 pt-5 ${
                    partner.partnerName.toLowerCase().includes('azure') 
                      ? '2xl:w-[316px] xl:w-[270px] w-[200px] mt-[4vh]' 
                      : partner.partnerName.toLowerCase().includes('console') || partner.partnerName.toLowerCase().includes('google')
                      ? '2xl:w-[232px] xl:w-[180px] w-[140px]' 
                      : ''
                  }`} 
                  style={{ willChange: 'transform, opacity' }}
                />
              </motion.div>
              
              {/* Divider line */}
              <motion.div 
                className='border border-[#EDEDF1] w-[73%] xl:my-[3vh] my-[1vh]'
                variants={itemVariant}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.45, delay: 0.22 }}
                style={{ originX: 0 }}
              />

              {/* Description text */}
              <motion.p
                className='font-roboto font-normal 2xl:text-[18px] text-[16px] leading-[100%] text-black xl:pl-8 xl:pr-0 pl-5 pr-4'
                variants={itemVariant}
              >
                {partner.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default PartnersSection
