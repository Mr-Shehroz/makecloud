// components/PartnersSectionContainer.tsx
import { client } from '@/sanity/client'
import PartnersSection from './PartnersSection'
import type { PartnersData } from '@/types/partners'

export default async function PartnersSectionContainer() {
  // Fetch partners data from Sanity
  const partnersData: PartnersData | null = await client.fetch(
    `*[_type == "partners"][0]{
      _id,
      _type,
      heading,
      backgroundImage,
      partnersList[] {
        _key,
        partnerName,
        logoIcon,
        mainLogo,
        description,
        order
      } | order(order asc)
    }`
  )

  return <PartnersSection partnersData={partnersData} />
}