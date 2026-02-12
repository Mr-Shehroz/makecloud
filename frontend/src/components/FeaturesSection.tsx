// components/FeaturesSection.tsx
'use client'

import Image from 'next/image'
import { getFileUrl } from '@/sanity/client'
import type { FeaturesData } from '@/types/features'
import { motion } from 'framer-motion'

interface FeaturesSectionProps {
  featuresData: FeaturesData | null
}

// Animation variants (with correct types for Framer Motion)
const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12, delayChildren: 0.10 } }
} as const;
const headingVariant = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
} as const;
const columnVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16 } }
} as const;
const featureItemVariant = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.46, ease: [0.45, 0, 0.55, 1] } }
} as const;
const iconVariant = {
  hidden: { opacity: 0, scale: 0.85, rotate: -16 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.25, ease: [0.45, 0, 0.55, 1] } }
} as const;
const featureTitleVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.31, delay: 0.06 } }
} as const;
const featureDescVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.31, delay: 0.13 } }
} as const;

const FeaturesSection = ({ featuresData }: FeaturesSectionProps) => {
  if (!featuresData) return null

  const { heading, tickIcon, featuresList = [] } = featuresData

  // Group features by column
  const column1 = featuresList.filter(f => f.column === 1).sort((a, b) => a.order - b.order)
  const column2 = featuresList.filter(f => f.column === 2).sort((a, b) => a.order - b.order)
  const column3 = featuresList.filter(f => f.column === 3).sort((a, b) => a.order - b.order)

  // Get tick icon URL or use default
  const tickIconUrl = tickIcon ? getFileUrl(tickIcon) : '/tick.svg'

  return (
    <motion.section
      className='bg-[#F7F9FC] xl:h-[650px] lg:h-[600px]'
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.32 }}
    >
      <motion.div
        className='max-w-[1480px] mx-auto px-4 xl:px-10 md:pt-[10.5vh] py-[6vh] lg:pb-0'
        variants={sectionVariant}
      >
        <motion.div variants={headingVariant}>
          <motion.h2
            className='font-normal font-archivo-black w-full'
            variants={headingVariant}
          >
            {heading}
          </motion.h2>
        </motion.div>
        <motion.div
          className='mt-[4.4vh] flex md:flex-row flex-col justify-center items-start'
          variants={sectionVariant}
        >
          {/* Column 1 */}
          <motion.div className='flex flex-col gap-6 md:w-[33%] w-full' variants={columnVariant}>
            {column1.map((feature, index) => (
              <motion.div
                key={feature._key || `col1-${index}`}
                className='flex lg:gap-4.5 md:gap-2 gap-3'
                variants={featureItemVariant}
              >
                <motion.div variants={iconVariant}>
                  <Image
                    src={tickIconUrl}
                    height={100}
                    width={100}
                    alt='tick-mark'
                    className='2xl:min-w-[30px] xl:max-w-[40px] lg:max-w-[30px] md:max-w-[30px] max-w-[40px] min-w-[25px] h-auto'
                  />
                </motion.div>
                <div>
                  <motion.h4
                    className='font-normal font-archivo-black 2xl:text-[22px] xl:text-[20px] lg:text-[18px] text-[16px] leading-[100%] uppercase text-black'
                    variants={featureTitleVariant}
                  >
                    {feature.title}
                  </motion.h4>
                  <motion.p
                    className='font-medium font-dm-sans 2xl:text-[18px] lg:text-[15px] text-[14px] 2xl:leading-[28.8px] text-[#333E49] xl:mt-[2.3vh] mt-[1.5vh]'
                    variants={featureDescVariant}
                  >
                    {feature.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Column 2 */}
          <motion.div className='flex flex-col gap-6 md:w-[33%] w-full mt-[2.5vh] md:mt-0' variants={columnVariant}>
            {column2.map((feature, index) => (
              <motion.div
                key={feature._key || `col2-${index}`}
                className='flex lg:gap-4.5 md:gap-2 gap-3'
                variants={featureItemVariant}
              >
                <motion.div variants={iconVariant}>
                  <Image
                    src={tickIconUrl}
                    height={100}
                    width={100}
                    alt='tick-mark'
                    className='2xl:min-w-[30px] xl:max-w-[40px] lg:max-w-[30px] md:max-w-[30px] max-w-[40px] min-w-[25px] h-auto'
                  />
                </motion.div>
                <div>
                  <motion.h4
                    className='font-normal font-archivo-black 2xl:text-[22px] xl:text-[20px] lg:text-[18px] text-[16px] leading-[100%] uppercase text-black'
                    variants={featureTitleVariant}
                  >
                    {feature.title}
                  </motion.h4>
                  <motion.p
                    className='font-medium font-dm-sans 2xl:text-[18px] lg:text-[15px] text-[14px] 2xl:leading-[28.8px] text-[#333E49] xl:mt-[2.3vh] mt-[1.5vh]'
                    variants={featureDescVariant}
                  >
                    {feature.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Column 3 */}
          <motion.div className='flex flex-col gap-6 md:w-[33%] w-full mt-[2.5vh] md:mt-0' variants={columnVariant}>
            {column3.map((feature, index) => (
              <motion.div
                key={feature._key || `col3-${index}`}
                className='flex lg:gap-4.5 md:gap-2 gap-3'
                variants={featureItemVariant}
              >
                <motion.div variants={iconVariant}>
                  <Image
                    src={tickIconUrl}
                    height={100}
                    width={100}
                    alt='tick-mark'
                    className='2xl:min-w-[30px] xl:max-w-[40px] lg:max-w-[30px] md:max-w-[30px] max-w-[40px] min-w-[25px] h-auto'
                  />
                </motion.div>
                <div>
                  <motion.h4
                    className='font-normal font-archivo-black 2xl:text-[22px] xl:text-[20px] lg:text-[18px] text-[16px] leading-[100%] uppercase text-black'
                    variants={featureTitleVariant}
                  >
                    {feature.title}
                  </motion.h4>
                  <motion.p
                    className='font-medium font-dm-sans 2xl:text-[18px] lg:text-[15px] text-[14px] 2xl:leading-[28.8px] text-[#333E49] xl:mt-[2.3vh] mt-[1.5vh]'
                    variants={featureDescVariant}
                  >
                    {feature.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default FeaturesSection