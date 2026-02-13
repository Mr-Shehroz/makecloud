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

  const { partnersLogo, heading, subheading, ctaButton } = heroData

  return (
    <motion.section
      className='relative w-full bg-[#F7F9FC] lg:h-[60vh] md:h-[50vh] min-h-[400px] pt-[5vh] mb-[2.5vh] lg:mt-[10vh] md:mt-[8vh] mt-[6vh]'
      initial="hidden"
      animate="visible"
      variants={parentAnim}
    >
      <motion.div
        className='flex flex-col-reverse md:justify-between md:flex-row-reverse md:items-center h-full max-w-[1480px] mx-auto xl:px-10 px-4'
        variants={parentAnim}
      >
        {/* Cloud Logo + Border + Partner Logos (right side) */}
        <motion.div
          className='flex items-center justify-center gap-5 xl:gap-10 md:mt-0 mt-[5vh]'
          variants={parentAnim}
        >
          {/* Cloud Logo */}
          <motion.img
            key="cloud-logo"
            src={getFileUrl(partnersLogo)} 
            alt="PartnersLogo"
            className='2xl:w-[453px] xl:w-[400px] lg:w-[350px] md:w-[300px] w-full h-auto pb-[5vh] md:pb-0'
            variants={logoAnim}
            style={{}}
          />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className='xl:w-[681px] lg:w-[60%] md:w-[50%] mt-[1.6vh]'
          variants={parentAnim}
        >
          <motion.h1
            className='font-archivo-black 2xl:text-[77px] xl:text-[65px] lg:text-[56px] text-[48px] leading-[100%] font-normal text-black'
            variants={itemAnim}
          >
            {heading}
          </motion.h1>
          <motion.p
            className='font-roboto 2xl:text-[27px] xl:text-[24px] lg:text-[22px] md:text-[20px] text-[25px] leading-[35px] font-normal md:leading-[100%] mt-[1.5vh] text-black'
            variants={itemAnim}
          >
            {subheading}
          </motion.p>
          <motion.div
            className='mt-[2.8vh]'
            variants={itemAnim}
          >
            <motion.div variants={buttonAnim}>
              <Button 
                className='font-roboto font-bold xl:text-[18px] text-[16px] text-white hover:opacity-80 hero rounded-full xl:w-[154px] xl:h-[43px] px-6 py-3 cursor-pointer'
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
