'use client'

import { Button } from "./ui/button"
import { getFileUrl } from "@/sanity/client"
import type { HeroData } from '@/types/hero'
import { motion } from 'framer-motion'

interface HeroSectionProps {
  heroData: HeroData | null
}

// Easing function compatible with Framer Motion
const EASE: [number, number, number, number] = [0.45, 0, 0.55, 1];

const parentAnim = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  }
};

const logoAnim = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } }
};

const itemAnim = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } }
};

const buttonAnim = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE } }
};

const HeroSection = ({ heroData }: HeroSectionProps) => {
  if (!heroData) return null

  const { logos = [], heading, subheading, ctaButton } = heroData

  return (
    <motion.section
      className='relative w-full hero md:h-[500px] h-[420px] my-[2.5vh] lg:mt-[12vh] md:mt-[10vh] mt-[9vh] px-4 xl:px-10'
      initial="hidden"
      animate="visible"
      variants={parentAnim}
    >
      <motion.div
        className='flex flex-col justify-center items-center h-full'
        variants={parentAnim}
      >
        {/* Partner Logos */}
        <motion.div
          className='flex items-center justify-center xl:gap-11 gap-8'
          variants={parentAnim}
        >
          {logos.map((logo) => (
            <motion.img 
              key={logo._key}
              src={getFileUrl(logo.logo)}
              alt={logo.alt}
              className='2xl:w-[70px] xl:w-[60px] md:w-[55px] w-[40px] h-auto'
              variants={logoAnim}
              // Slight delay via style, not variants, to keep types clean
              style={{}}
            />
          ))}
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className='md:w-[681px] md:mx-auto mt-[1.6vh]'
          variants={parentAnim}
        >
          <motion.h1
            className='font-archivo-black text-center 2xl:text-[77px] xl:text-[65px] lg:text-[56px] md:text-[48px] text-[36px] leading-[100%] font-normal uppercase text-white'
            variants={itemAnim}
          >
            {heading}
          </motion.h1>
          <motion.p
            className='font-roboto 2xl:text-[27px] xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px] text-center font-normal leading-[100%] mt-[1.5vh] text-white'
            variants={itemAnim}
          >
            {subheading}
          </motion.p>
          <motion.div
            className='flex justify-center mt-[2.8vh]'
            variants={itemAnim}
          >
            <motion.div variants={buttonAnim}>
              <Button 
                className='font-roboto font-bold xl:text-[18px] text-[16px] text-black hover:opacity-90 hover:bg-white bg-white rounded-full xl:w-[154px] xl:h-[43px] px-6 py-3 flex justify-center items-center cursor-pointer'
                onClick={() => {
                  if (ctaButton.openInNewTab) {
                    window.open(ctaButton.url, '_blank')
                  } else {
                    window.location.href = ctaButton.url
                  }
                }}
              >
                {ctaButton.text}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default HeroSection
