// components/BlogsSection.tsx
'use client'

import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Calendar, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getFileUrl } from '@/sanity/client'
import { formatDate } from '@/lib/utils'
import type { BlogsData } from '@/types/blogs'

interface BlogsSectionProps {
  blogsData: BlogsData | null
}

const BlogsSection = ({ blogsData }: BlogsSectionProps) => {
  if (!blogsData) return null

  const { heading, caseStudies = [], carouselSettings } = blogsData
  const { enableLoop = true, align = 'start', showNavigation = true } = carouselSettings

  return (
    <section>
      <div className='max-w-[1480px] mx-auto px-4 xl:px-10 md:mt-[11.2vh] mt-[6vh]'>
        <div className='flex justify-between items-center md:mb-2 mb-8 relative'>
          <h2 className='font-normal font-archivo-black'>
            {heading}
          </h2>
        </div>

        <div>
          <Carousel
            opts={{
              align: align,
              loop: enableLoop,
            }}
            className="w-full"
          >
            {/* Navigation Arrows */}
            {showNavigation && (
              <div className="flex items-center justify-end gap-2 md:relative md:mt-[-4.8vh] md:mb-[4.8vh] absolute left-1/2 -translate-x-1/2 z-30 bottom-[-5vh] md:bottom-0">
                <CarouselPrevious className='static translate-y-0 bg-[#345CA7] hover:bg-[#E53023] text-white border-none h-12 w-12 z-10 navigation cursor-pointer duration-200 transition-all' />
                <CarouselNext className='static translate-y-0 bg-[#345CA7] hover:bg-[#E53023] text-white border-none h-12 w-12 z-10 navigation cursor-pointer duration-200 transition-all' />
              </div>
            )}
            
            <CarouselContent className="-ml-4">
              {caseStudies.map((study) => (
                <CarouselItem 
                  key={study._key} 
                  className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className='group cursor-pointer'>
                    {/* Image */}
                    <div className='relative overflow-hidden'>
                      <img
                        src={getFileUrl(study.featuredImage)}
                        alt={study.title}   
                        className='w-full h-full object-cover transition-transform duration-300'
                      />
                    </div>

                    {/* Date */}
                    <div className='flex items-center gap-2 mb-3 text-[#E53023] relative 2xl:top-[-16vh] lg:top-[-16vh] top-[-19vh] 2xl:pl-7 pl-5 date'>
                      <Calendar className='w-5 h-5' />
                      <span className='font-roboto font-bold 2xl:text-[18px] text-[16px] text-black'>
                        {formatDate(study.date)}
                      </span>
                    </div>

                    {/* Title and Arrow */}
                    <div className='flex items-start justify-between gap-3 relative 2xl:pl-7 pl-5 2xl:pr-22 pr-18'>
                      <h3 className='font-normal font-archivo-black 2xl:text-[22px] lg:text-[18px] text-[20px] text-black leading-[100%] uppercase 2xl:mt-[-16vh] lg:mt-[-16vh] mt-[-18vh] relative title'>
                        {study.title}
                      </h3>
                      <a
                        href={study.url}
                        target={study.openInNewTab ? '_blank' : '_self'}
                        rel={study.openInNewTab ? 'noopener noreferrer' : ''}
                        className='block'
                      >
                        <Button
                          size="icon"
                          className='bg-[#345CA7] hover:bg-[#E53023] text-white rounded-full h-12 w-12 absolute right-0 bottom-10 cursor-pointer duration-200 transition-all'
                        >
                          <ArrowUpRight className='w-5 h-5' />
                        </Button>
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default BlogsSection