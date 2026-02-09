import type { SlugValidationContext } from "sanity";

export async function isUniqueSlug(slug: string, context: SlugValidationContext): Promise<boolean> {
  const { document, getClient } = context;
  if (!document || !document._id) {
    throw new Error("Missing document or document._id in slug validation context");
  }
  const client = getClient({ apiVersion: '2023-04-24' });
  const id = (document._id as string).replace(/^drafts\./, '');
  const params = {
    draft: `drafts.${id}`,
    published: id,
    slug,
  };
  const query = `!defined(*[
    !(_id in [$draft, $published]) &&
    slug.current == $slug
  ][0]._id)`;
  const result = await client.fetch(query, params);
  return result;
}