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

export const revalidate = 60

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
      <main className="px-6 md:px-12 max-w-4xl mx-auto py-12">
        <h1 className="text-5xl font-semibold mb-12 tracking-tight text-blue-600">Blog</h1>
        <div className="space-y-12">
          {posts.map((post) => (
            <div
              key={post._id}
              className="border-b border-gray-300 pb-6 transition-all duration-200"
            >
              <Link href={`/blog/${post.slug.current}`}>
                <span className="text-xl font-normal text-black underline hover:text-blue-600 hover:underline cursor-pointer transition-colors duration-200">
                  {post.title}
                </span>
              </Link>
              <p className="text-sm text-gray-500 mt-2">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
