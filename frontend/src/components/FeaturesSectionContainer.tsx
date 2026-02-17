// components/FeaturesSectionContainer.tsx
import { client } from '@/sanity/client'
import FeaturesSection from './FeaturesSection'
import type { FeaturesData } from '@/types/features'

const FEATURES_QUERY = `*[_type == "features"][0]{
  _id,
  _type,
  heading,
  tickIcon,
  featuresList[] {
    _key,
    title,
    description,
    column,
    order
  } | order(column asc, order asc)
}`

export default async function FeaturesSectionContainer() {
  const featuresData: FeaturesData | null = await client.fetch(
    FEATURES_QUERY,
    {},
    { cache: 'no-store' }
  )

  return <FeaturesSection featuresData={featuresData} />
}