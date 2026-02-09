// components/BlogsSectionContainer.tsx
import { client } from '@/sanity/client'
import BlogsSection from './BlogsSection'
import type { BlogsData } from '@/types/blogs'

export default async function BlogsSectionContainer() {
  // Fetch blogs data from Sanity
  const blogsData: BlogsData | null = await client.fetch(
    `*[_type == "blogs"][0]{
      _id,
      _type,
      heading,
      caseStudies[] {
        _key,
        title,
        date,
        featuredImage,
        url,
        openInNewTab,
        order
      } | order(order asc),
      carouselSettings {
        enableLoop,
        align,
        showNavigation
      }
    }`
  )

  return <BlogsSection blogsData={blogsData} />
}