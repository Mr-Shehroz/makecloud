// components/ServicesSection.tsx
'use client'

import Link from 'next/link'
import { getFileUrl } from '@/sanity/client'
import type { ServicesData } from '@/types/services'

interface ServicesSectionProps {
  servicesData: ServicesData | null
}

const ServicesSection = ({ servicesData }: ServicesSectionProps) => {
  if (!servicesData) return null

  const { heading, servicesList = [] } = servicesData

  return (
    <section className='md:my-[10.6vh] my-[8vh] max-w-[1480px] mx-auto px-4 xl:px-10'>
      <div>
        <div className='md:w-[800px] md:mx-auto'>
          <h2 className='font-normal font-archivo-black text-center'>{heading}</h2>
        </div>  
        <div className='lg:flex lg:justify-center lg:items-center grid md:grid-cols-2 grid-cols-1 gap-5 mt-[4vh]'>
          {servicesList.map((service) => (
            <div key={service._key} className='md:w-[335px] h-auto rounded-[22px] relative'>
              {/* Top-left icon */}
              <div className='bg-[#E53023] xl:w-12 xl:h-12 lg:w-9 lg:h-9 w-12 h-12 rounded-full absolute left-0 top-0 flex justify-center items-center'>
                <img 
                  src={getFileUrl(service.icon)} 
                  alt="icon" 
                  className='xl:w-[25px] lg:w-[20px] w-[25px] h-auto' 
                />
              </div>
              
              {/* Bottom-right arrow link */}
              <Link 
                href={service.url} 
                className='bg-[#345CA7] xl:w-12 xl:h-12 lg:w-9 lg:h-9 w-12 h-12 rounded-full absolute right-0 bottom-0 flex justify-center items-center hover:bg-[#E53023] transition-all duration-300'
              >
                <img 
                  src="/arrow.svg" 
                  alt="arrow" 
                  className='xl:w-[12px] lg:w-[9px] w-[12px] h-auto' 
                />
              </Link>
              
              {/* Main service image */}
              <img 
                src={getFileUrl(service.image)} 
                alt={service.title} 
                className='w-full h-auto rounded-[22px]' 
              />
              
              {/* Service title */}
              <h4 className='font-normal font-archivo-black services absolute bottom-[11%] pr-8 md:pr-0'>
                {service.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection