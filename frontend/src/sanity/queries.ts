export const HOME_PAGE_QUERY = `
*[_type == "homePage"][0]{
  sections[]->{
    _type
  }
}
`
