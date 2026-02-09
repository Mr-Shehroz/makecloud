// types/hero.ts

// Hero Logo Type
export interface HeroLogo {
    _key: string
    alt: string
    logo: {
      asset: {
        _ref: string
        _type: 'reference'
      }
    }
    order: number
  }
  
  // CTA Button Type
  export interface CtaButton {
    text: string
    url: string
    openInNewTab?: boolean
  }
  
  // Hero Section Data Type
  export interface HeroData {
    _id: string
    _type: 'hero'
    logos: HeroLogo[]
    heading: string
    subheading: string
    ctaButton: CtaButton
  }