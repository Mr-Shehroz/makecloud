import { client } from './client'
import { HOME_PAGE_QUERY } from './queries'

export async function getHomePage() {
  return await client.fetch(HOME_PAGE_QUERY)
}
