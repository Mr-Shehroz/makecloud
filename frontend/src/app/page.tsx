import BlogsSectionContainer from '@/components/BlogsSectionContainer'
import ChooseSectionContainer from '@/components/ChooseSectionContainer'
import ContactsSectionContainer from '@/components/ContactsSectionContainer'
import FeaturesSectionContainer from '@/components/FeaturesSectionContainer'
import HeroSectionContainer from '@/components/HeroSectionContainer'
import MarqueeContainer from '@/components/MarqueeContainer'
import PartnersSectionContainer from '@/components/PartnersSectionContainer'
import ServicesSectionContainer from '@/components/ServicesSectionContainer'
import TrustedSectionContainer from '@/components/TrustedSectionContainer'
import React from 'react'

const Home = () => {
  return (
    <div>
      <HeroSectionContainer />
      <ServicesSectionContainer />
      <PartnersSectionContainer />
      <ChooseSectionContainer />
      <MarqueeContainer />
      <FeaturesSectionContainer />
      <TrustedSectionContainer />
      <BlogsSectionContainer />
      <ContactsSectionContainer />
    </div>
  )
}

export default Home