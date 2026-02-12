// types/services.ts

export interface ServiceItem {
  _key: string
  title: string
  description?: string // Optional description field
  url: string
  icon: {
    _type: 'file'
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  order?: number
}

export interface ServicesData {
  _id: string
  _type: 'services'
  heading: string
  description?: string // Optional section description
  servicesList: ServiceItem[]
}