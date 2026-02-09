// components/PartnersSection.tsx
'use client'

import Image from 'next/image'
import { getFileUrl } from '@/sanity/client'
import type { PartnersData } from '@/types/partners'

interface PartnersSectionProps {
  partnersData: PartnersData | null
}

const PartnersSection = ({ partnersData }: PartnersSectionProps) => {
  if (!partnersData) return null

  const { heading, backgroundImage, partnersList = [] } = partnersData

  // Get background image URL or use default
  const bgImageUrl = backgroundImage ? getFileUrl(backgroundImage) : '/partners-bg.png'

  return (
    <section className='bg-[#F7F9FC] lg:h-[617px] px-4 xl:px-10'>
      <div className='max-w-[1480px] mx-auto lg:pt-[12vh] lg:pb-[13vh] md:py-[10vh] py-[8vh]'>
        <div className='md:w-[633px] md:mx-auto'>
          <h2 className='font-normal font-archivo-black text-center'>{heading}</h2>
        </div>
        <div className='lg:flex lg:justify-center lg:items-center grid md:grid-cols-2 xl:gap-6 md:gap-4 gap-0 mt-[4.5vh]'>
          {partnersList.map((partner, index) => (
            <div 
              key={partner._key} 
              className={`lg:w-[452px] h-[247px] bg-[url(${bgImageUrl})] xl:bg-cover bg-contain bg-no-repeat bg-center rounded-[30px] relative ${
                index === 0 ? '' : 
                index === 1 ? '' : 
                'lg:mt-0 md:mt-[-4vh]'
              }`}
            >
              {/* Top-right logo icon in red circle */}
              <div className='2xl:w-16 2xl:h-16 xl:w-14 xl:h-14 lg:w-10 lg:h-10 w-12 h-12 rounded-full absolute xl:right-0 xl:top-0 right-[2%] lg:top-[16%] top-[12%] flex justify-center items-center bg-[#E53023] transition-all duration-300'>
                <img 
                  src={getFileUrl(partner.logoIcon)} 
                  alt={partner.partnerName.toLowerCase()} 
                  className='2xl:w-[45px] xl:w-[38px] w-[30px] h-auto' 
                />
              </div>
              
              {/* Main partner logo */}
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
              />
              
              {/* Divider line */}
              <div className='border border-[#EDEDF1] w-[73%] xl:my-[3vh] my-[1vh]' />
              
              {/* Description text */}
              <p className='font-roboto font-normal 2xl:text-[18px] text-[16px] leading-[100%] text-black xl:pl-8 xl:pr-0 pl-5 pr-4'>
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection