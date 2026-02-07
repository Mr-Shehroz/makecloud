"use client"
import React from 'react'

const images = [
  '/logo.svg',
  '/logo.svg',
  '/logo.svg',
  '/logo.svg',
  '/logo.svg',
]

const Marquee = () => {
  return (
    <section className='hero 2xl:h-[160px] lg:h-[140px] md:h-[110px] h-[90px] flex items-center'>
      <div className="overflow-hidden w-full relative">
        <div
          className="flex items-center animate-marquee 2xl:gap-37 xl:gap-30 lg:gap-24 md:gap-20 gap-14"
          style={{ width: 'max-content' }}
        >
          {[...images, ...images].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Marquee image ${i + 1}`}
              className="h-auto 2xl:w-[392px] xl:w-[320px] lg:w-[280px] md:w-[240px] w-[180px] object-contain"
              draggable={false}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 24s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default Marquee