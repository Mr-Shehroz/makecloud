// components/ContactsSectionContainer.tsx
import { client } from '@/sanity/client'
import ContactsSection from './ContactsSection'
import type { ContactsData } from '@/types/contacts'

const CONTACTS_QUERY = `*[_type == "contacts"][0]{
  _id,
  _type,
  leftSection {
    heading,
    subheading,
    phone {
      label,
      number,
      link
    },
    email {
      label,
      address,
      link
    },
    address {
      label,
      street,
      city
    },
    backgroundImage,
    nameVectorImage
  },
  rightSection {
    formHeading,
    formFields {
      fullNameLabel,
      emailLabel,
      phoneLabel,
      messageLabel
    },
    submitButton {
      text,
      submittingText
    },
    privacyPolicy,
    successMessage,
    errorMessage,
    formBackgroundImage
  },
  formSettings {
    apiEndpoint,
    requiredFields,
    enablePrivacyCheckbox
  }
}`

export default async function ContactsSectionContainer() {
  const contactsData: ContactsData | null = await client.fetch(
    CONTACTS_QUERY,
    {},
    { cache: 'no-store' }
  )

  return <ContactsSection contactsData={contactsData} />
}