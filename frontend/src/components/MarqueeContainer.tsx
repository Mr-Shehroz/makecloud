// components/MarqueeContainer.tsx
import { client } from '@/sanity/client'
import Marquee from './marquee'
import type { MarqueeData } from '@/types/marquee'

export default async function MarqueeContainer() {
  // Fetch marquee data from Sanity
  const marqueeData: MarqueeData | null = await client.fetch(
    `*[_type == "marquee"][0]{
      _id,
      _type,
      logos[] {
        _key,
        alt,
        logo,
        order
      } | order(order asc),
      marqueeSettings {
        animationSpeed,
        animationDirection,
        enableAnimation
      }
    }`
  )

  return <Marquee marqueeData={marqueeData} />
}