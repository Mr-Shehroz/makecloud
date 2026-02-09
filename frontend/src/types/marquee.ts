// types/marquee.ts

// Marquee Logo Type
export interface MarqueeLogo {
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
  
  // Marquee Settings Type
  export interface MarqueeSettings {
    animationSpeed: number
    animationDirection: 'normal' | 'reverse'
    enableAnimation: boolean
  }
  
  // Marquee Section Data Type
  export interface MarqueeData {
    _id: string
    _type: 'marquee'
    logos: MarqueeLogo[]
    marqueeSettings: MarqueeSettings
  }