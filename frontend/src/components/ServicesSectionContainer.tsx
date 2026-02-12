// components/ServicesSectionContainer.tsx
import { client } from '@/sanity/client'
import ServicesSection from './ServicesSection'
import type { ServicesData } from '@/types/services'

export default async function ServicesSectionContainer() {
  // Fetch services data from Sanity
  const servicesData: ServicesData | null = await client.fetch(
    `*[_type == "services"][0]{
      _id,
      _type,
      heading,
      servicesList[] {
        _key,
        title,
        description,
        url,
        icon,
        order
      } | order(order asc)
    }`
  )

  return <ServicesSection servicesData={servicesData} />
}