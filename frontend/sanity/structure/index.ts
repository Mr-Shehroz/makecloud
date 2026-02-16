import { StructureBuilder } from 'sanity/structure'

// Simple structure - shows all document types without custom organization
export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // This will show all your document types automatically
      ...S.documentTypeListItems(),
    ])