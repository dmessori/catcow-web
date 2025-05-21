// src/app/blog/[slug]/page.tsx

import { client } from '@/lib/sanityClient'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

type Params = {
  params: {
    slug: string
  }
}

type BlogPost = {
  title: string
  publishedAt: string
  body: any
}

export const revalidate = 60

export default async function BlogPostPage({ params }: Params) {
  const query = `
    *[_type == "blogPost" && slug.current == $slug][0] {
      title,
      publishedAt,
      body
    }
  `

  const post: BlogPost | null = await client.fetch(query, {
    slug: params.slug,
  })

  if (!post) return notFound()

  return (
    <>
      <Header />
      <main className="p-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-8">
          {new Date(post.publishedAt).toDateString()}
        </p>
        <div className="prose">
          <PortableText value={post.body} />
        </div>
      </main>
      <Footer />
    </>
  )
}
