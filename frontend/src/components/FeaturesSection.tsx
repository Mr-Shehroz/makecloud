// components/FeaturesSection.tsx
'use client'

import Image from 'next/image'
import { getFileUrl } from '@/sanity/client'
import type { FeaturesData } from '@/types/features'

interface FeaturesSectionProps {
  featuresData: FeaturesData | null
}

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
    <section className='bg-[#F7F9FC] xl:h-[650px] lg:h-[600px]'>
      <div className='max-w-[1480px] mx-auto px-4 xl:px-10 md:pt-[10.5vh] py-[6vh] lg:pb-0'>
        <div>
          <h2 className='font-normal font-archivo-black w-full'>{heading}</h2>
        </div>
        <div className='mt-[4.4vh] flex md:flex-row flex-col justify-center items-start'>
          {/* Column 1 */}
          <div className='flex flex-col gap-6 md:w-[33%] w-full'>
            {column1.map((feature, index) => (
              <div key={feature._key || `col1-${index}`} className='flex lg:gap-4.5 md:gap-2 gap-3'>
                <div>
                  <Image 
                    src={tickIconUrl} 
                    height={100} 
                    width={100} 
                    alt='tick-mark' 
                    className='2xl:min-w-[30px] min-w-[20px] h-auto' 
                  />
                </div>
                <div>
                  <h4 className='font-normal font-archivo-black 2xl:text-[22px] xl:text-[20px] lg:text-[18px] text-[16px] leading-[100%] uppercase text-black'>
                    {feature.title}
                  </h4>
                  <p className='font-medium font-dm-sans 2xl:text-[18px] lg:text-[15px] text-[14px] 2xl:leading-[28.8px] text-[#333E49] xl:mt-[2.3vh] mt-[1.5vh]'>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className='flex flex-col gap-6 md:w-[33%] w-full mt-[2.5vh] md:mt-0'>
            {column2.map((feature, index) => (
              <div key={feature._key || `col2-${index}`} className='flex lg:gap-4.5 md:gap-2 gap-3'>
                <div>
                  <Image 
                    src={tickIconUrl} 
                    height={100} 
                    width={100} 
                    alt='tick-mark' 
                    className='2xl:min-w-[30px] min-w-[25px] h-auto' 
                  />
                </div>
                <div>
                  <h4 className='font-normal font-archivo-black 2xl:text-[22px] xl:text-[20px] lg:text-[18px] text-[16px] leading-[100%] uppercase text-black'>
                    {feature.title}
                  </h4>
                  <p className='font-medium font-dm-sans 2xl:text-[18px] lg:text-[15px] text-[14px] 2xl:leading-[28.8px] text-[#333E49] xl:mt-[2.3vh] mt-[1.5vh]'>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className='flex flex-col gap-6 md:w-[33%] w-full'>
            {column3.map((feature, index) => (
              <div key={feature._key || `col3-${index}`} className='flex lg:gap-4.5 md:gap-2 gap-3'>
                <div>
                  <Image 
                    src={tickIconUrl} 
                    height={100} 
                    width={100} 
                    alt='tick-mark' 
                    className='2xl:min-w-[30px] min-w-[25px] h-auto' 
                  />
                </div>
                <div>
                  <h4 className='font-normal font-archivo-black 2xl:text-[22px] xl:text-[20px] lg:text-[18px] text-[16px] leading-[100%] uppercase text-black'>
                    {feature.title}
                  </h4>
                  <p className='font-medium font-dm-sans 2xl:text-[18px] lg:text-[15px] text-[14px] 2xl:leading-[28.8px] text-[#333E49] xl:mt-[2.3vh] mt-[1.5vh]'>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection