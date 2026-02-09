// components/FooterSectionContainer.tsx
import { client } from '@/sanity/client'
import FooterSection from './FooterSection'
import type { FooterData } from '@/types/footer'

export default async function FooterSectionContainer() {
  // Fetch footer data from Sanity
  const footerData: FooterData | null = await client.fetch(
    `*[_type == "footer"][0]{
      _id,
      _type,
      logo,
      certificationBadges[] {
        _key,
        alt,
        badge,
        row,
        order
      } | order(row asc, order asc),
      socialLinks[] {
        _key,
        platform,
        url,
        order
      } | order(order asc),
      quickLinks[] {
        _key,
        name,
        url,
        order
      } | order(order asc),
      contactInfo {
        phone {
          number,
          link
        },
        email {
          address,
          link
        },
        address {
          line1,
          line2
        }
      },
      newsletter {
        heading,
        emailPlaceholder,
        subscribeButtonText,
        submittingText,
        successMessage,
        errorMessage,
        apiEndpoint
      },
      copyright
    }`
  )

  return <FooterSection footerData={footerData} />
}