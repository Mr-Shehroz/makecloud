// components/HeroSection.tsx
'use client'

import { Button } from "./ui/button"
import { getFileUrl } from "@/sanity/client"
import type { HeroData } from '@/types/hero'

interface HeroSectionProps {
  heroData: HeroData | null
}

const HeroSection = ({ heroData }: HeroSectionProps) => {
  if (!heroData) return null

  const { logos = [], heading, subheading, ctaButton } = heroData

  return (
    <section className='relative w-full hero md:h-[500px] h-[420px] my-[2.5vh] px-4 xl:px-10'>
      <div className='flex flex-col justify-center items-center h-full'>
        {/* Partner Logos */}
        <div className='flex items-center justify-center xl:gap-11 gap-8'>
          {logos.map((logo) => (
            <img 
              key={logo._key} 
              src={getFileUrl(logo.logo)} 
              alt={logo.alt} 
              className='2xl:w-[70px] xl:w-[60px] md:w-[55px] w-[40px] h-auto' 
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className='md:w-[681px] md:mx-auto mt-[1.6vh]'>
          <h1 className='font-archivo-black text-center 2xl:text-[77px] xl:text-[65px] lg:text-[56px] md:text-[48px] text-[36px] leading-[100%] font-normal uppercase text-white'>
            {heading}
          </h1>
          <p className='font-roboto 2xl:text-[27px] xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px] text-center font-normal leading-[100%] mt-[1.5vh] text-white'>
            {subheading}
          </p>
          <div className='flex justify-center mt-[2.8vh]'>
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection