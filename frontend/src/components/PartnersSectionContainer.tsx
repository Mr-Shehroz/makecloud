// components/PartnersSectionContainer.tsx
import { client } from '@/sanity/client'
import PartnersSection from './PartnersSection'
import type { PartnersData } from '@/types/partners'

const PARTNERS_QUERY = `*[_type == "partners"][0]{
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

export default async function PartnersSectionContainer() {
  const partnersData: PartnersData | null = await client.fetch(
    PARTNERS_QUERY,
    {},
    { cache: 'no-store' }
  )

  return <PartnersSection partnersData={partnersData} />
}