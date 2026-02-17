export interface PartnersLogo {
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
  partnersLogo: PartnersLogo
  heading: string
  subheading: string
  ctaButton: CtaButton
}