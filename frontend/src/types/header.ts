// types/header.ts

// Dropdown Item Type
export interface DropdownItem {
    _key: string
    label: string
    url: string
  }
  
  // Navigation Item Type
  export interface NavigationItem {
    _key: string
    label: string
    url: string
    hasDropdown?: boolean
    dropdownItems?: DropdownItem[]
  }
  
  // Contact Info Type
  export interface ContactInfo {
    phoneNumber: string
    consultantText: string
  }
  
  // Header Data Type
  export interface HeaderData {
    _id: string
    _type: 'header'
    logo?: {
      asset: {
        _ref: string
        _type: 'reference'
      }
    }
    navigation: NavigationItem[]
    contactInfo: ContactInfo
  }