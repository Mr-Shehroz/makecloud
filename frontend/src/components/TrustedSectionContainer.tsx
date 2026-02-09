// components/TrustedSectionContainer.tsx
import { client } from '@/sanity/client'
import TrustedSection from './TrustedSection'
import type { TrustedData } from '@/types/trusted'

export default async function TrustedSectionContainer() {
  // Fetch trusted section data from Sanity
  const trustedData: TrustedData | null = await client.fetch(
    `*[_type == "trusted"][0]{
      _id,
      _type,
      heading,
      partnersList[] {
        _key,
        name,
        logo,
        websiteUrl,
        order
      } | order(order asc),
      carouselSettings {
        enableLoop,
        align,
        showNavigation
      }
    }`
  )

  return <TrustedSection trustedData={trustedData} />
}