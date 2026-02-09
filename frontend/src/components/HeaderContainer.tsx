// components/HeaderContainer.tsx
import { client } from '@/sanity/client'
import Header from './header'
import type { HeaderData } from '@/types/header'

export default async function HeaderContainer() {
  // Fetch header data from Sanity
  const headerData: HeaderData | null = await client.fetch(
    `*[_type == "header"][0]{
      _id,
      _type,
      logo,
      navigation[] {
        _key,
        label,
        url,
        hasDropdown,
        dropdownItems[] {
          _key,
          label,
          url
        }
      },
      contactInfo {
        phoneNumber,
        consultantText
      }
    }`
  )

  return <Header headerData={headerData} />
}