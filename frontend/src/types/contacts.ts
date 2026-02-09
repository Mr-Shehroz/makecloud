// types/contacts.ts

// Phone Type
export interface PhoneInfo {
    label: string
    number: string
    link: string
  }
  
  // Email Type
  export interface EmailInfo {
    label: string
    address: string
    link: string
  }
  
  // Address Type
  export interface AddressInfo {
    label: string
    street: string
    city: string
  }
  
  // Left Section Type
  export interface LeftSection {
    heading: string
    subheading: string
    phone: PhoneInfo
    email: EmailInfo
    address: AddressInfo
    backgroundImage?: {
      asset: {
        _ref: string
        _type: 'reference'
      }
    }
    nameVectorImage?: {
      asset: {
        _ref: string
        _type: 'reference'
      }
    }
  }
  
  // Form Fields Type
  export interface FormFields {
    fullNameLabel: string
    emailLabel: string
    phoneLabel: string
    messageLabel: string
  }
  
  // Submit Button Type
  export interface SubmitButton {
    text: string
    submittingText: string
  }
  
  // Right Section Type
  export interface RightSection {
    formHeading: string
    formFields: FormFields
    submitButton: SubmitButton
    privacyPolicy: string
    successMessage: string
    errorMessage: string
    formBackgroundImage?: {
      asset: {
        _ref: string
        _type: 'reference'
      }
    }
  }
  
  // Form Settings Type
  export interface FormSettings {
    apiEndpoint: string
    requiredFields: string[]
    enablePrivacyCheckbox: boolean
  }
  
  // Contacts Section Data Type
  export interface ContactsData {
    _id: string
    _type: 'contacts'
    leftSection: LeftSection
    rightSection: RightSection
    formSettings: FormSettings
  }