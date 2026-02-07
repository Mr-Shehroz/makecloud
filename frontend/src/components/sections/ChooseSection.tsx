"use client"
import React, { useState, useEffect } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Image from 'next/image'

const ChooseSection = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const carouselData = [
    {
      image: "/choose-1.png",
      icon: "/choose-icon-1.svg",
      title: "CLOUD MIGRATION & OPTIMISATION",
      description: "IAM encryption, monitoring and governance are implemented early to keep your cloud environment secure and audit-ready."
    },
    {
      image: "/choose-2.png",
      icon: "/choose-icon-2.svg",
      title: "PERFORMANCE & SCALABILITY",
      description: "Optimize your infrastructure for peak performance with auto-scaling capabilities and load balancing."
    },
    {
      image: "/choose-3.png",
      icon: "/choose-icon-1.svg",
      title: "COST OPTIMIZATION",
      description: "Reduce cloud spending with intelligent resource allocation and automated cost management tools."
    },
    {
      image: "/choose-1.png",
      icon: "/choose-icon-2.svg",
      title: "SECURITY & COMPLIANCE",
      description: "Enterprise-grade security measures with compliance standards including SOC2, HIPAA, and GDPR."
    }
  ]

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    const onSelect = () => setCurrent(api.selectedScrollSnap())
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <section className='md:py-[12vh] py-[8vh]'>
      <div>
        <div className='w-full max-w-[689px] mx-auto mb-[4.3vh]'>
          <h2 className='font-normal font-archivo-black text-center'>
            Why Companies Choose Make Cloud
          </h2>
        </div>
        
        <div className='w-full'>
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            {/* Keep carouselContent styling untouched for large screens */}
            <CarouselContent className="flex items-center">
              {carouselData.map((item, index) => {
                const isCenter = index === current
                
                return (
                  <CarouselItem 
                    key={index} 
                    className="basis-auto flex justify-center overflow-hidden"
                  >
                    <div 
                      className={`relative rounded-[20px] px-4 md:px-0 overflow-hidden transition-all duration-700 delay-200 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        isCenter 
                          ? 'xl:w-[742px] xl:h-[344px] lg:w-[600px] md:w-[500px] md:h-[300px] w-[75%] h-[400px] scale-100' 
                          : 'xl:w-[670px] xl:h-[290px] lg:w-[560px] w-[460px] h-[230px] scale-100'
                      }`}
                    >
                      {/* Background Image */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                      
                      {/* Content - Only visible when centered */}
                      {isCenter && (
                        <div className="relative h-full flex flex-col items-center justify-end p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                          <div className="bg-white rounded-[20px] pl-3.5 pr-6 py-4 shadow-lg xl:w-[651px] xl:h-[110px] lg:w-[500px] md:w-[440px] w-[60%] lg:h-[100px] flex flex-col">
                            <div className="flex items-start lg:gap-4 gap-2">
                              {/* Icon */}
                              <div className="flex-shrink-0 xl:w-[70px] xl:h-[70px] lg:h-[50px] lg:w-[50px] w-[40px] h-[40px] bg-[#E53023] rounded-full flex items-center justify-center text-white">
                                {/* FIXED: Remove template string error and forward icon path correctly */}
                                <Image src={item.icon} height={45} width={45} alt="icon" className='xl:w-[45px] lg:w-[35px] w-[25px] h-auto' unoptimized />
                              </div>
                              
                              {/* Text Content */}
                              <div className="flex-1">
                                <h3 className="font-normal font-archivo-black xl:text-[22px] md:text-[18px] text-[16px] leading-[100%] text-black xl:mb-3.5 mb-2 uppercase">
                                  {item.title}
                                </h3>
                                <p className="text-black xl:text-[18px] lg:text-[16px] text-[14px] font-roboto leading-[100%]">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            
            {/* Navigation Arrows */}
            <CarouselPrevious className="hidden md:flex -left-12 lg:-left-16" />
            <CarouselNext className="hidden md:flex -right-12 lg:-right-16" />
          </Carousel>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-[2.5vh] overflow-visible"> 
            {carouselData.map((_, index) => ( 
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-[10px] h-[10px] rounded-full transition-all duration-300 relative overflow-visible ${
                  index === current 
                    ? 'bg-[#345CA7] border border-[#345CA7] rounded-full pagination overflow-visible' 
                    : 'bg-black'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChooseSection