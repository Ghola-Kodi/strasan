import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, User } from 'lucide-react'
import { BLOG_POSTS } from '@/lib/data'

export const metadata = {
  title: 'Insights & Articles – Strasan Group Limited',
  description: 'Engineering insights, technical articles and industry updates from the Strasan Group team.',
}

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS
  return (
    <div>
      <section className="bg-gradient-to-br from-forest-900 to-forest-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gold-400 font-semibold uppercase tracking-wider text-sm mb-3">Knowledge Hub</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Engineering Insights</h1>
          <p className="text-forest-200 text-lg max-w-2xl">
            Technical articles, industry analysis and project commentary from our registered engineers and specialists.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-gold-500 font-semibold uppercase tracking-wider text-sm mb-6">Featured Article</p>
        <Link href={`/blog/${featured.slug}`} className="card p-10 block group md:grid md:grid-cols-2 gap-8 mb-16">
          {/* Featured Image */}
          <div className="relative h-64 md:h-auto rounded-2xl overflow-hidden bg-forest-100 mb-6 md:mb-0">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="inline-block bg-forest-100 text-forest-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">{featured.category}</span>
            <h2 className="text-2xl font-bold text-forest-900 mb-4 group-hover:text-gold-700 transition-colors leading-snug">{featured.title}</h2>
            <p className="text-forest-600 leading-relaxed mb-6">{featured.excerpt}</p>
            <div className="flex items-center gap-6 text-sm text-forest-400 mb-6">
              <span className="flex items-center gap-1"><User size={14}/>{featured.author}</span>
              <span className="flex items-center gap-1"><Clock size={14}/>{featured.readTime}</span>
            </div>
            <span className="text-gold-600 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read Article <ArrowRight size={16}/></span>
          </div>
        </Link>

        <div className="grid md:grid-cols-3 gap-6">
          {rest.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card p-6 block group flex flex-col">
              {/* Blog Card Image */}
              <div className="relative h-40 rounded-xl overflow-hidden bg-forest-100 mb-5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <span className="inline-block bg-forest-50 border border-forest-200 text-forest-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit">{post.category}</span>
              <h3 className="font-bold text-forest-900 mb-3 group-hover:text-gold-700 transition-colors leading-snug flex-1">{post.title}</h3>
              <p className="text-forest-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-forest-400 pt-4 border-t border-forest-100">
                <span className="flex items-center gap-1"><User size={12}/>{post.author}</span>
                <span className="flex items-center gap-1"><Clock size={12}/>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
