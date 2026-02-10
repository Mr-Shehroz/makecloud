// components/ChooseSection.tsx
'use client'

import { useState, useEffect } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Image from 'next/image'
import { getFileUrl } from '@/sanity/client'
import type { ChooseData } from '@/types/choose'

interface ChooseSectionProps {
  chooseData: ChooseData | null
}

const SMOOTH_DURATION = 800; // ms - for smoother jump/scrollTo

const ChooseSection = ({ chooseData }: ChooseSectionProps) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [isInteracting, setIsInteracting] = useState(false)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    const onSelect = () => setCurrent(api.selectedScrollSnap())
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  // Autoplay effect
  useEffect(() => {
    if (
      !api ||
      !chooseData ||
      !(chooseData.carouselSettings?.enableAutoplay ?? true)
    )
      return

    const autoplayInterval =
      chooseData.carouselSettings?.autoplayInterval ?? 4000

    const autoplay = setInterval(() => {
      if (!isInteracting) {
        // CarouselApi.scrollNext([jumpTo], [instant])
        // If passed true, jump is instant. We want animation/transition, so `false` or undefined.
        api.scrollNext(false)
      }
    }, autoplayInterval)

    return () => clearInterval(autoplay)
  }, [api, isInteracting, chooseData])

  if (!chooseData) return null

  const { heading, carouselItems = [], carouselSettings } = chooseData
  const { enableLoop = true } = carouselSettings

  // Smooth scroll helpers - call .scrollTo(index, instant?: boolean)
  function handleDotClick(index: number) {
    if (api) {
      // .scrollTo(index, instant?) - instant = false for smooth
      api.scrollTo(index, false)
    }
  }

  function handlePrev() {
    if (api) {
      api.scrollPrev(false)
    }
  }

  function handleNext() {
    if (api) {
      api.scrollNext(false)
    }
  }

  return (
    <section className='md:py-[12vh] py-[8vh]'>
      <div>
        <div className='w-full max-w-[689px] mx-auto mb-[4.3vh]'>
          <h2 className='font-normal font-archivo-black text-center'>
            {heading}
          </h2>
        </div>
        
        <div className='w-full'>
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: enableLoop,
              duration: SMOOTH_DURATION,
              dragFree: false,
              skipSnaps: false,
            }}
            className="w-full"
          >
            {/* Fixed height container to prevent layout shift */}
            <div 
              className="xl:h-[344px] lg:h-[300px] md:h-[300px] h-[400px] relative"
              onMouseEnter={() => setIsInteracting(true)}
              onMouseLeave={() => setIsInteracting(false)}
              onTouchStart={() => setIsInteracting(true)}
              onTouchEnd={() => setTimeout(() => setIsInteracting(false), 3000)}
            >
              <CarouselContent className="flex items-center h-full">
                {carouselItems.map((item, index) => {
                  const isCenter = index === current

                  return (
                    <CarouselItem 
                      key={item._key || index} 
                      className="basis-auto flex justify-center overflow-visible h-full items-center"
                    >
                      <div 
                        className={`relative rounded-[20px] px-4 md:px-0 overflow-hidden transition-all duration-500 ease-in-out ${
                          isCenter 
                            ? 'xl:w-[742px] xl:h-[344px] lg:w-[600px] md:w-[500px] md:h-[300px] w-[75%] h-[400px] scale-100' 
                            : 'xl:w-[670px] xl:h-[290px] lg:w-[560px] w-[460px] h-[230px] scale-100'
                        }`}
                      >
                        {/* Background Image */}
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out"
                          style={{ backgroundImage: `url(${getFileUrl(item.backgroundImage)})` }}
                        />

                        {/* Content - Only visible when centered */}
                        {isCenter && (
                          <div className="relative h-full flex flex-col items-center justify-end p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="bg-white rounded-[20px] pl-3.5 pr-6 py-4 -mx-4 md:mx-0 shadow-lg xl:w-[651px] xl:h-[110px] lg:w-[500px] md:w-[440px] w-[60%] lg:h-[100px] flex flex-col">
                              <div className="flex items-start lg:gap-4 gap-2">
                                {/* Icon */}
                                <div className="flex-shrink-0 xl:w-[70px] xl:h-[70px] lg:h-[50px] lg:w-[50px] w-[40px] h-[40px] bg-[#E53023] rounded-full flex items-center justify-center text-white">
                                  <Image 
                                    src={getFileUrl(item.icon)} 
                                    height={45} 
                                    width={45} 
                                    alt="icon" 
                                    className='xl:w-[35px] lg:w-[25px] w-[20px] h-auto' 
                                    unoptimized 
                                  />
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
            </div>
            
            {/* Navigation Arrows */}
            <CarouselPrevious
              className="hidden md:flex -left-12 lg:-left-16"
              onClick={handlePrev}
            />
            <CarouselNext
              className="hidden md:flex -right-12 lg:-right-16"
              onClick={handleNext}
            />
          </Carousel>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-[2.5vh] overflow-visible"> 
            {carouselItems.map((_, index) => ( 
              <button
                key={index}
                onClick={() => handleDotClick(index)}
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