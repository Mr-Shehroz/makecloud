// types/services.ts

// Service Item Type
export interface ServiceItem {
    _key: string
    title: string
    url: string
    icon: {
      asset: {
        _ref: string
        _type: 'reference'
      }
    }
    image: {
      asset: {
        _ref: string
        _type: 'reference'
      }
    }
    order: number
  }
  
  // Services Section Data Type
  export interface ServicesData {
    _id: string
    _type: 'services'
    heading: string
    servicesList: ServiceItem[]
  }