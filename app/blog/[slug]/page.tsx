import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, User, Tag } from 'lucide-react'
import { BLOG_POSTS } from '@/lib/data'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug)
  if (!post) return {}
  return { title: `${post.title} – Strasan Group`, description: post.excerpt }
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug)
  if (!post) notFound()
  const related = BLOG_POSTS.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 2)

  function renderContent(text: string) {
    return text.split('\n\n').map((block, i) => {
      if (block.startsWith('## ')) {
        return <h2 key={i} className="text-2xl font-bold text-forest-900 mt-10 mb-4">{block.slice(3)}</h2>
      }
      const parts = block.split(/(\*\*[^*]+\*\*)/)
      return (
        <p key={i} className="text-forest-700 leading-relaxed mb-5">
          {parts.map((part, j) =>
            part.startsWith('**') && part.endsWith('**')
              ? <strong key={j} className="font-semibold text-forest-900">{part.slice(2,-2)}</strong>
              : part
          )}
        </p>
      )
    })
  }

  return (
    <div>
      <section className="bg-gradient-to-br from-forest-900 to-forest-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-forest-300 hover:text-gold-400 transition-colors mb-8 text-sm">
            <ArrowLeft size={16}/> Back to Insights
          </Link>
          <span className="inline-block bg-gold-500 bg-opacity-20 border border-gold-400 text-gold-300 text-sm font-medium px-4 py-1 rounded-full mb-4">{post.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-forest-300 text-sm">
            <span className="flex items-center gap-2"><User size={15}/>{post.author}</span>
            <span className="flex items-center gap-2"><Clock size={15}/>{post.readTime}</span>
            <span>{new Date(post.date).toLocaleDateString('en-KE', { day:'numeric', month:'long', year:'numeric' })}</span>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <article className="md:col-span-2">
            <p className="text-forest-600 text-lg leading-relaxed mb-8 font-medium border-l-4 border-gold-400 pl-5">{post.excerpt}</p>
            <div>{renderContent(post.content)}</div>
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-forest-100">
              <Tag size={16} className="text-forest-400 mt-0.5"/>
              {post.tags.map(tag => (
                <span key={tag} className="bg-forest-50 border border-forest-200 text-forest-700 text-sm px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </article>

          <aside className="space-y-6">
            <div className="card p-6">
              <h3 className="font-bold text-forest-900 mb-4 text-sm uppercase tracking-wide">About the Author</h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest-700 flex items-center justify-center text-white font-bold text-sm">
                  {post.author.split(' ').map((n: string) => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-forest-900 text-sm">{post.author}</p>
                  <p className="text-forest-500 text-xs">Strasan Group</p>
                </div>
              </div>
            </div>

            <div className="bg-forest-900 text-white rounded-2xl p-6">
              <h3 className="font-bold mb-3">Need Engineering Advice?</h3>
              <p className="text-forest-300 text-sm mb-4 leading-relaxed">Our team is available for project consultations.</p>
              <Link href="/services" className="btn-primary text-sm block text-center">View Services</Link>
            </div>

            {related.length > 0 && (
              <div className="card p-6">
                <h3 className="font-bold text-forest-900 mb-4 text-sm uppercase tracking-wide">Related Articles</h3>
                <div className="space-y-4">
                  {related.map(r => (
                    <Link key={r.slug} href={`/blog/${r.slug}`} className="block group">
                      <p className="font-semibold text-forest-800 text-sm group-hover:text-gold-700 transition-colors leading-snug">{r.title}</p>
                      <p className="text-forest-500 text-xs mt-1">{r.readTime}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </div>
  )
}
