// types/trusted.ts

// Partner Item Type
export interface PartnerItem {
    _key: string
    name: string
    logo: {
      asset: {
        _ref: string
        _type: 'reference'
      }
    }
    websiteUrl?: string
    order: number
  }
  
  // Carousel Settings Type
  export interface CarouselSettings {
    enableLoop: boolean
    align: 'start' | 'center' | 'end'
    showNavigation: boolean
  }
  
  // Trusted Section Data Type
  export interface TrustedData {
    _id: string
    _type: 'trusted'
    heading: string
    partnersList: PartnerItem[]
    carouselSettings: CarouselSettings
  }