// components/HeaderContainer.tsx
import { client } from '@/sanity/client'
import Header from './header'
import type { HeaderData } from '@/types/header'

const HEADER_QUERY = `*[_type == "header"][0]{
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

export default async function HeaderContainer() {
  const headerData: HeaderData | null = await client.fetch(
    HEADER_QUERY,
    {},
    { cache: 'no-store' }
  )

  return <Header headerData={headerData} />
}