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

export interface CloudLogo {
  asset: {
    _ref: string
    _type: 'reference'
  }
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
  cloudLogo: CloudLogo
  logos: HeroLogo[]
  heading: string
  subheading: string
  ctaButton: CtaButton
}