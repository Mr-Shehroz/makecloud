// components/HeroSectionContainer.tsx
import { client } from '@/sanity/client'
import HeroSection from './HeroSection'
import type { HeroData } from '@/types/hero'

const HERO_QUERY = `*[_type == "hero"][0]{
  _id,
  _type,
  partnersLogo,
  heading,
  subheading,
  ctaButton {
    text,
    url,
    openInNewTab
  }
}`

export default async function HeroSectionContainer() {
  const heroData: HeroData | null = await client.fetch(
    HERO_QUERY,
    {},
    { cache: 'no-store' }
  )

  return <HeroSection heroData={heroData} />
}