// components/BlogsSectionContainer.tsx
import { client } from '@/sanity/client'
import BlogsSection from './BlogsSection'
import type { BlogsData } from '@/types/blogs'

const BLOGS_QUERY = `*[_type == "blogs"][0]{
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

export default async function BlogsSectionContainer() {
  const blogsData: BlogsData | null = await client.fetch(
    BLOGS_QUERY,
    {},
    { cache: 'no-store' }
  )

  return <BlogsSection blogsData={blogsData} />
}