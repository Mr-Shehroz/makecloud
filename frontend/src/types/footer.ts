// types/footer.ts

// Certification Badge Type
export interface CertificationBadge {
    _key: string
    alt: string
    badge: {
      asset: {
        _ref: string
        _type: 'reference'
      }
    }
    row: number // 1 or 2
    order: number
  }
  
  // Social Link Type
  export interface SocialLink {
    _key: string
    platform: 'twitter' | 'linkedin' | 'facebook' | 'instagram' | 'github'
    url: string
    order: number
  }
  
  // Quick Link Type
  export interface QuickLink {
    _key: string
    name: string
    url: string
    order: number
  }
  
  // Contact Info Type
  export interface ContactInfo {
    phone: {
      number: string
      link: string
    }
    email: {
      address: string
      link: string
    }
    address: {
      line1: string
      line2: string
    }
  }
  
  // Newsletter Type
  export interface Newsletter {
    heading: string
    emailPlaceholder: string
    subscribeButtonText: string
    submittingText: string
    successMessage: string
    errorMessage: string
    apiEndpoint: string
  }
  
  // Footer Section Data Type
  export interface FooterData {
    _id: string
    _type: 'footer'
    logo?: {
      asset: {
        _ref: string
        _type: 'reference'
      }
    }
    certificationBadges: CertificationBadge[]
    socialLinks: SocialLink[]
    quickLinks: QuickLink[]
    contactInfo: ContactInfo
    newsletter: Newsletter
    copyright: string
  }