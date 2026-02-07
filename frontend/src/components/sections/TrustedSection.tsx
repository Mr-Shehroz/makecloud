import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const TrustedSection = () => {
  const partners = [
    { id: 1, name: 'Growth from Knowledge', logo: '/trusted-logo-1.svg' },
    { id: 2, name: 'Qatalog', logo: '/trusted-logo-2.svg' },
    { id: 3, name: 'Growth from Knowledge', logo: '/trusted-logo-3.svg' },
    { id: 4, name: 'PEI Media', logo: '/trusted-logo-4.svg' },
    { id: 5, name: 'Data Language', logo: '/trusted-logo-5.svg' },
    { id: 6, name: 'Growth from Knowledge', logo: '/trusted-logo-1.svg' },
    { id: 7, name: 'Qatalog', logo: '/trusted-logo-2.svg' },
    { id: 8, name: 'Growth from Knowledge', logo: '/trusted-logo-3.svg' },
    { id: 9, name: 'PEI Media', logo: '/trusted-logo-4.svg' },
    { id: 10, name: 'Data Language', logo: '/trusted-logo-5.svg' },
  ]

  return (
    <section className=''>
      <div className='max-w-[1480px] mx-auto px-4 xl:px-10 md:mt-[10.8vh] md:pb-0 py-[6vh]'>
        <div className='mb-12'>
          <h2 className='font-normal font-archivo-black text-center'>
            We Trusted By   
          </h2>
        </div>
        
        <div className='relative 2xl:px-16 xl:px-10 px-4'>
          <Carousel
            opts={{
              align: "start",   
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {partners.map((partner, idx) => (
                <CarouselItem 
                  key={idx} 
                  className="2xl:pl-2 basis-1/2 md:basis-1/4 lg:basis-1/5"
                >
                  <div className='bg-white border border-[#345CA7] rounded-[9px] 2xl:w-[239px] xl:w-[220px] lg:w-[170px] md:w-[150px] lg:h-[82px] h-[70px] flex items-center justify-center hover:shadow-md transition-shadow'>
                    <img
                      src={partner.logo} 
                      alt={partner.name}
                      className='xl:w-[170px] lg:w-[120px] w-[100px] h-auto'
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className='absolute md:-left-[3.4vw] left-[-4vw] top-1/2 -translate-y-1/2 bg-[#345CA7] hover:bg-blue-700 text-white border-none md:h-12 md:w-12 w-8 h-8 rounded-full shadow-lg z-10 navigation' />
            <CarouselNext className='absolute md:-right-[3.4vw] right-[-4vw] top-1/2 -translate-y-1/2 bg-[#345CA7] hover:bg-blue-700 text-white border-none md:h-12 md:w-12 w-8 h-8 rounded-full shadow-lg z-10 navigation' />
          </Carousel>
        </div>
      </div>    
    </section>  
  )
}

export default TrustedSection