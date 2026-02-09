// components/ChooseSectionContainer.tsx
import { client } from '@/sanity/client'
import ChooseSection from './ChooseSection'
import type { ChooseData } from '@/types/choose'

export default async function ChooseSectionContainer() {
  // Fetch choose section data from Sanity
  const chooseData: ChooseData | null = await client.fetch(
    `*[_type == "choose"][0]{
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
  )

  return <ChooseSection chooseData={chooseData} />
}