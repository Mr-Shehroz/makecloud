// components/TrustedSectionContainer.tsx
import { client } from '@/sanity/client'
import TrustedSection from './TrustedSection'
import type { TrustedData } from '@/types/trusted'

const TRUSTED_QUERY = `*[_type == "trusted"][0]{
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

export default async function TrustedSectionContainer() {
  const trustedData: TrustedData | null = await client.fetch(
    TRUSTED_QUERY,
    {},
    { cache: 'no-store' }
  )

  return <TrustedSection trustedData={trustedData} />
}