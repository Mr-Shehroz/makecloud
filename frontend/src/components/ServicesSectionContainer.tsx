// components/ServicesSectionContainer.tsx
import { client } from '@/sanity/client'
import ServicesSection from './ServicesSection'
import type { ServicesData } from '@/types/services'

const SERVICES_QUERY = `*[_type == "services"][0]{
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

export default async function ServicesSectionContainer() {
  const servicesData: ServicesData | null = await client.fetch(
    SERVICES_QUERY,
    {},
    { cache: 'no-store' }
  )

  return <ServicesSection servicesData={servicesData} />
}