// types/choose.ts

// Carousel Item Type
export interface CarouselItem {
    _key: string
    title: string
    description: string
    backgroundImage: {
      asset: {
        _ref: string
        _type: 'reference'
      }
    }
    icon: {
      asset: {
        _ref: string
        _type: 'reference'
      }
    }
    order: number
  }
  
  // Carousel Settings Type
  export interface CarouselSettings {
    autoplayInterval: number
    enableAutoplay: boolean
    enableLoop: boolean
  }
  
  // Choose Section Data Type
  export interface ChooseData {
    _id: string
    _type: 'choose'
    heading: string
    carouselItems: CarouselItem[]
    carouselSettings: CarouselSettings
  }