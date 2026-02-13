// components/HeroSectionContainer.tsx
import { client } from '@/sanity/client'
import HeroSection from './HeroSection'
import type { HeroData } from '@/types/hero'

export default async function HeroSectionContainer() {
  const heroData: HeroData | null = await client.fetch(
    `*[_type == "hero"][0]{
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
  )

  return <HeroSection heroData={heroData} />
}
