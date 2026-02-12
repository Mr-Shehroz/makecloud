import BlogsSectionContainer from '@/components/BlogsSectionContainer'
import ChooseSectionContainer from '@/components/ChooseSectionContainer'
import ContactsSectionContainer from '@/components/ContactsSectionContainer'
import FeaturesSectionContainer from '@/components/FeaturesSectionContainer'
import HeroSectionContainer from '@/components/HeroSectionContainer'
import MarqueeContainer from '@/components/MarqueeContainer'
import PartnersSectionContainer from '@/components/PartnersSectionContainer'
import ServicesSectionContainer from '@/components/ServicesSectionContainer'
import TrustedSectionContainer from '@/components/TrustedSectionContainer'

import { getHomePage } from '@/sanity/getHomePage'

export default async function Home() {
  const data = await getHomePage()

  // ⭐ filter nulls (VERY IMPORTANT)
  const sections = (data?.sections || []).filter(Boolean)

  const componentsMap: Record<string, React.ReactNode> = {
    hero: <HeroSectionContainer />,
    services: <ServicesSectionContainer />,
    partners: <PartnersSectionContainer />,
    choose: <ChooseSectionContainer />,
    marquee: <MarqueeContainer />,
    features: <FeaturesSectionContainer />,
    trusted: <TrustedSectionContainer />,
    blogs: <BlogsSectionContainer />,
    contacts: <ContactsSectionContainer />,
  }

  return (
    <div>
      {sections.map((section: { _type: string }, i: number) => {
        const Component = componentsMap[section?._type]

        // ⭐ extra safety
        if (!Component) return null

        return <div key={i}>{Component}</div>
      })}
    </div>
  )
}
