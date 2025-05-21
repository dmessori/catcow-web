import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'yu83al1c',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
})

// Si querés también mantener esto, lo podés agregar:
const blogPostQuery = `*[_type == "blogPost"] | order(publishedAt desc){
  _id,
  title,
  slug,
  publishedAt
}`

export async function getBlogPosts() {
  return client.fetch(blogPostQuery)
}

