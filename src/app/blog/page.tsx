// src/app/blog/page.tsx

import { client } from '@/lib/sanityClient'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

type BlogPost = {
  _id: string
  title: string
  slug: {
    current: string
  }
  publishedAt: string
}

export const revalidate = 60 // ISR cada 60 segundos

export default async function BlogPage() {
  const posts: BlogPost[] = await client.fetch(`
    *[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt
    }
  `)

  return (
    <>
      <Header />
      <main className="p-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post._id}>
              <Link href={`/blog/${post.slug.current}`}>
                <span className="text-xl text-blue-600 hover:underline">
                  {post.title}
                </span>
              </Link>
              <p className="text-sm text-gray-500">
                {new Date(post.publishedAt).toDateString()}
              </p>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  )
}
