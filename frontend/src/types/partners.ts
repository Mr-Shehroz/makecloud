// types/partners.ts

// Partner Item Type
export interface PartnerItem {
    _key: string
    partnerName: string
    logoIcon: {
      asset: {
        _ref: string
        _type: 'reference'
      }
    }
    mainLogo: {
      asset: {
        _ref: string
        _type: 'reference'
      }
    }
    description: string
    order: number
  }
  
  // Partners Section Data Type
  export interface PartnersData {
    _id: string
    _type: 'partners'
    heading: string
    backgroundImage?: {
      asset: {
        _ref: string
        _type: 'reference'
      }
    }
    partnersList: PartnerItem[]
  }