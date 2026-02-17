// sanity/getHomePage.ts
import { client } from '@/sanity/client'

const HOME_PAGE_QUERY = `
  *[_type == "homePage"][0]{
    sections[]->{
      _type,
      ...
    }
  }
`

export async function getHomePage() {
  return await client.fetch(
    HOME_PAGE_QUERY,
    {},
    { cache: 'no-store' }
  )
}