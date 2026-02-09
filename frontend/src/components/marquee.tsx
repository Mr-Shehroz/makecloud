// components/Marquee.tsx
'use client'

import { getFileUrl } from "@/sanity/client"
import type { MarqueeData } from '@/types/marquee'

interface MarqueeProps {
  marqueeData: MarqueeData | null
}

const Marquee = ({ marqueeData }: MarqueeProps) => {
  if (!marqueeData) return null

  const { logos = [], marqueeSettings } = marqueeData
  const { animationSpeed = 24, animationDirection = 'normal', enableAnimation = true } = marqueeSettings

  // Create doubled array for seamless animation
  const doubledLogos = [...logos, ...logos]

  return (
    <section className='hero 2xl:h-[160px] lg:h-[140px] md:h-[110px] h-[90px] flex items-center'>
      <div className="overflow-hidden w-full relative">
        <div
          className={`flex items-center 2xl:gap-37 xl:gap-30 lg:gap-24 md:gap-20 gap-14 ${
            enableAnimation ? 'animate-marquee' : ''
          }`}
          style={{ 
            width: 'max-content',
            animationDuration: `${animationSpeed}s`,
            animationDirection: animationDirection,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite'
          }}
        >
          {doubledLogos.map((logo, i) => (
            <img
              key={logo._key || i}
              src={getFileUrl(logo.logo)}
              alt={logo.alt || `Marquee logo ${i + 1}`}
              className="h-auto 2xl:w-[392px] xl:w-[320px] lg:w-[280px] md:w-[240px] w-[180px] object-contain"
              draggable={false}
            />
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation-name: marquee;
        }
      `}</style>
    </section>
  )
}

export default Marquee