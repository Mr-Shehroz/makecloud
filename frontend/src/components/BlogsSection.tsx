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
import { motion, Variants } from 'framer-motion'

type BlogImageAsset = {
  _ref: string
  _type: string
}

type BlogFeaturedImage = {
  asset: BlogImageAsset
  alt?: string
  _type: string
}

type BlogCaseStudy = {
  _key: string
  title: string
  date: string
  url: string
  featuredImage: BlogFeaturedImage
  openInNewTab?: boolean
}

interface RawBlogCaseStudy {
  _key?: string | number
  title?: string
  date?: string
  url?: string
  featuredImage?: {
    asset?: {
      _ref?: string
      _type?: string
    }
    alt?: string
    _type?: string
  }
  openInNewTab?: boolean
}

interface BlogsSectionProps {
  blogsData: BlogsData | null
}

// Animation Variants
const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1]

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      staggerChildren: 0.14,
      delayChildren: 0.1,
      ease: EASE,
    },
  }
}

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE }
  }
}

const carouselVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE }
  }
}

const imageVariants: Variants = {
  hidden: { scale: 0.96, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.7, ease: EASE } }
}

const dateVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.25, ease: EASE } }
}

const titleVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, delay: 0.32, ease: EASE } }
}

const arrowVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.33, delay: 0.39, ease: EASE } }
}

// Ensures all required fields for BlogCaseStudy, falling back to defaults or empty values as necessary
function toBlogCaseStudy(study: RawBlogCaseStudy): BlogCaseStudy {
  const featuredImage = study.featuredImage ?? {};
  const asset = featuredImage.asset ?? {};

  return {
    _key: String(study._key ?? ''),
    title: String(study.title ?? ''),
    date: String(study.date ?? ''),
    url: String(study.url ?? ''),
    featuredImage: {
      asset: {
        _ref: asset._ref ?? '',
        _type: typeof asset._type === 'string' ? asset._type : 'reference',
      },
      alt: typeof featuredImage.alt === "string" ? featuredImage.alt : undefined,
      _type: typeof featuredImage._type === "string" ? featuredImage._type : "image",
    },
    openInNewTab: Boolean(study.openInNewTab ?? false),
  }
}

const BlogsSection = ({ blogsData }: BlogsSectionProps) => {
  if (!blogsData) return null

  const { heading, caseStudies = [], carouselSettings } = blogsData
  const { enableLoop = true, align = 'start', showNavigation = true } = carouselSettings || {}

  // Map using pure type (no use of any)
  const blogCaseStudies: BlogCaseStudy[] =
    Array.isArray(caseStudies)
      ? (caseStudies as RawBlogCaseStudy[]).map(toBlogCaseStudy)
      : []

  return (
    <motion.section
      id='case-study'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionVariants}
    >
      <div className='max-w-[1480px] mx-auto px-4 xl:px-10 md:mt-[11.2vh] mt-[2.7vh] md:mb-0 mb-[14vh]'>
        <motion.div
          className='flex justify-between items-center md:mb-2 mb-8 relative'
          variants={headingVariants}
        >
          <motion.h2
            className='font-normal font-archivo-black'
            variants={headingVariants}
          >
            {heading}
          </motion.h2>
        </motion.div>

        <motion.div variants={carouselVariants}>
          <Carousel
            opts={{
              align: align,
              loop: enableLoop,
            }}
            className="w-full"
          >
            {/* Navigation Arrows */}
            {showNavigation && (
              <motion.div
                className="flex items-center justify-end gap-2 md:relative md:mt-[-4.8vh] md:mb-[4.8vh] absolute left-1/2 -translate-x-1/2 z-30 bottom-[-5vh] md:bottom-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.22, ease: EASE }}
              >
                <CarouselPrevious className='static translate-y-0 bg-[#345CA7] hover:bg-[#E53023] text-white border-none h-12 w-12 z-10 navigation cursor-pointer duration-200 transition-all' />
                <CarouselNext className='static translate-y-0 bg-[#345CA7] hover:bg-[#E53023] text-white border-none h-12 w-12 z-10 navigation cursor-pointer duration-200 transition-all' />
              </motion.div>
            )}
            <CarouselContent className="-ml-4">
              {blogCaseStudies.map((study) => (
                <CarouselItem
                  key={study._key}
                  className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <motion.div
                    className='group cursor-pointer'
                    variants={itemVariants}
                  >
                    {/* Image */}
                    <motion.div className='relative overflow-hidden' variants={imageVariants}>
                      <motion.img
                        src={getFileUrl(study.featuredImage)}
                        alt={study.title}
                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                        variants={imageVariants}
                        whileHover={{ scale: 1.045 }}
                      />
                    </motion.div>

                    {/* Date */}
                    <motion.div
                      className='flex items-center gap-2 mb-3 text-[#E53023] relative lg:top-[-14vh] top-[-17vh] 2xl:pl-7 pl-5 date'
                      variants={dateVariants}
                    >
                      <Calendar className='w-5 h-5' />
                      <motion.span
                        className='font-roboto font-bold 2xl:text-[18px] text-[16px] text-black'
                        variants={dateVariants}
                      >
                        {formatDate(study.date)}
                      </motion.span>
                    </motion.div>

                    {/* Title and Arrow */}
                    <motion.div
                      className='flex items-start justify-between gap-3 relative 2xl:pl-7 pl-5 pr-18'
                      // Use as container for stagger animation if wanted
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.25 }}
                      variants={carouselVariants}
                    >
                      <motion.h3
                        className='font-normal font-archivo-black 2xl:text-[22px] lg:text-[18px] text-[20px] text-black leading-[100%] uppercase lg:mt-[-13.5vh] mt-[-16vh] relative title transition-colors duration-300 group-hover:text-[#345CA7]'
                        variants={titleVariants}
                      >
                        {study.title}
                      </motion.h3>
                      <motion.a
                        href={study.url}
                        target={study.openInNewTab ? '_blank' : undefined}
                        rel={study.openInNewTab ? 'noopener noreferrer' : undefined}
                        className='block'
                        variants={arrowVariants}
                      >
                        <Button
                          size="icon"
                          type="button"
                          className='bg-[#345CA7] hover:bg-[#E53023] group-hover:bg-[#E53023] text-white rounded-full h-12 w-12 absolute right-0 bottom-10 cursor-pointer duration-200 transition-all'
                        >
                          <ArrowUpRight className='w-5 h-5' />
                        </Button>
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default BlogsSection
