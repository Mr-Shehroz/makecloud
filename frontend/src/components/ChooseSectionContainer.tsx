// components/ChooseSectionContainer.tsx
import { client } from '@/sanity/client'
import ChooseSection from './ChooseSection'
import type { ChooseData } from '@/types/choose'

const CHOOSE_QUERY = `*[_type == "choose"][0]{
  _id,
  _type,
  heading,
  carouselItems[] {
    _key,
    title,
    description,
    backgroundImage,
    icon,
    order
  } | order(order asc),
  carouselSettings {
    autoplayInterval,
    enableAutoplay,
    enableLoop
  }
}`

export default async function ChooseSectionContainer() {
  const chooseData: ChooseData | null = await client.fetch(
    CHOOSE_QUERY,
    {},
    { cache: 'no-store' }
  )

  return <ChooseSection chooseData={chooseData} />
}