// components/MarqueeContainer.tsx
import { client } from '@/sanity/client'
import Marquee from './marquee'
import type { MarqueeData } from '@/types/marquee'

const MARQUEE_QUERY = `*[_type == "marquee"][0]{
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

export default async function MarqueeContainer() {
  const marqueeData: MarqueeData | null = await client.fetch(
    MARQUEE_QUERY,
    {},
    { cache: 'no-store' }
  )

  return <Marquee marqueeData={marqueeData} />
}