// types/blogs.ts

// Case Study Item Type
export interface CaseStudyItem {
    _key: string
    title: string
    date: string // ISO date string from Sanity
    featuredImage: {
      asset: {
        _ref: string
        _type: 'reference'
      }
    }
    url: string
    openInNewTab?: boolean
    order: number
  }
  
  // Carousel Settings Type
  export interface CarouselSettings {
    enableLoop: boolean
    align: 'start' | 'center' | 'end'
    showNavigation: boolean
  }
  
  // Blogs Section Data Type
  export interface BlogsData {
    _id: string
    _type: 'blogs'
    heading: string
    caseStudies: CaseStudyItem[]
    carouselSettings: CarouselSettings
  }