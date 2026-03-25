import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, FileText, GraduationCap, MapPin, Download, ShoppingCart, BookOpen, FileSpreadsheet } from 'lucide-react'
import { BLOG_POSTS, WHITE_PAPERS, SEMINARS, PROJECTS, SHOP_PRODUCTS } from '@/lib/data'

// Helper function to format price
const formatPrice = (price: string | number) => {
  if (typeof price === 'number') return `KSh ${price.toLocaleString()}`
  return price
}

// Product card component for consistency
const ProductCard = ({ product, type, children }: { product: any; type: string; children?: React.ReactNode }) => (
  <div className="card overflow-hidden group">
    <div className="relative h-32 overflow-hidden">
      <Image 
        src={product.image} 
        alt={product.title} 
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <div className="p-5">
      {children}
      <h4 className="font-bold text-forest-900 mb-1 text-sm">{product.title}</h4>
      <p className="text-forest-500 text-xs mb-4">{product.desc}</p>
      <div className="flex items-center justify-between">
        <span className="text-forest-900 font-bold text-sm">
          {formatPrice(product.price)} <small className="font-normal text-forest-400">{product.format}</small>
        </span>
        <Link 
          href={`/checkout?product=${encodeURIComponent(product.id || product.slug || product.title)}&type=${type}&price=${product.price}`}
          className="w-8 h-8 rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-colors"
          aria-label={`Purchase ${product.title}`}
        >
          <Download size={14} />
        </Link>
      </div>
    </div>
  </div>
)

export default function HomePage() {
  const latestPosts = BLOG_POSTS.slice(0, 4)
  const featuredWPs = WHITE_PAPERS.slice(0, 3)
  const revenueWS = SHOP_PRODUCTS.worksheets.slice(0, 2)
  const revenueDowns = SHOP_PRODUCTS.downloads.slice(0, 3)

  return (
    <div>
      {/* ══════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-0">
          <div className="grid md:grid-cols-2 min-h-[520px]">

            {/* Left: content */}
            <div className="flex flex-col justify-center py-20 pr-8">
              <span className="inline-block bg-white/10 border border-white/20 text-gold-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 w-fit">
                Civil Engineering Consultancy · 30+ years combined experience.
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                civil engineering consultancy{' '}
                <span className="text-gold-400 italic">Kenya</span>
              </h1>
              <p className="text-forest-200 text-lg leading-relaxed mb-8 max-w-lg">
                Smart infrastructure powered by local expertise and modern engineering tools.
              </p>

              {/* Stats pills */}
              <div className="flex flex-wrap gap-3 mb-10">
                <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm">
                  <FileText size={15} className="text-gold-400" /> 50+ white papers
                </div>
                <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm">
                  <GraduationCap size={15} className="text-gold-400" /> Kenya seminars
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/services" className="btn-primary inline-flex items-center gap-2">
                  Explore Services <ArrowRight size={16} />
                </Link>
                <Link href="/shop" className="btn-outline inline-flex items-center gap-2">
                  <ShoppingCart size={16} /> Visit Shop
                </Link>
              </div>
            </div>

            {/* Right: map/image card */}
            <div className="hidden md:flex items-end justify-end pb-0">
              <div className="relative w-full h-full min-h-[400px] rounded-tl-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1575281923032-f40d94ef6160?ixlib=rb-4.1.0&auto=format&fit=crop&w=900&q=80"
                  alt="Infrastructure project Kenya"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 50vw, 33vw"
                  priority
                />
                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                  <MapPin size={14} className="text-gold-400" /> Rift Valley Projects
                </div>

                {/* stat cards */}
                <div className="absolute top-6 right-6 flex flex-col gap-3">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3 text-center">
                    <p className="text-2xl font-bold text-gold-400">200+</p>
                    <p className="text-xs text-forest-200">Projects</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3 text-center">
                    <p className="text-2xl font-bold text-gold-400">14+</p>
                    <p className="text-xs text-forest-200">Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          BLOG SECTION
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <BookOpen className="text-gold-500" size={26} />
          <h2 className="text-3xl font-bold text-forest-900">Engineering Blog</h2>
          <span className="flex items-center gap-1 bg-forest-100 text-forest-700 text-xs font-semibold px-3 py-1.5 rounded-full">
            <MapPin size={11} /> Kenya focus
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestPosts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card block group overflow-hidden flex flex-col">
              <div className="relative h-44 overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-forest-900/30 group-hover:bg-forest-900/20 transition-colors" />
                <span className="absolute bottom-3 left-3 bg-forest-900/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-forest-900 mb-2 group-hover:text-gold-700 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-forest-500 text-sm leading-relaxed flex-1 line-clamp-2 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-forest-400 pt-3 border-t border-forest-100">
                  <span>📅 {new Date(post.date).toLocaleDateString('en-KE', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  <ArrowRight size={14} className="text-gold-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/blog" className="btn-outline inline-flex items-center gap-2">
            All Articles <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          WHITE PAPERS + PROJECT SHOWCASES
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-forest-50 border-y border-forest-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-12">

            {/* White papers */}
            <div className="flex-[2] min-w-[280px]">
              <div className="flex items-center gap-3 mb-8">
                <FileText className="text-gold-500" size={22} />
                <h3 className="text-2xl font-bold text-forest-900">White Papers &amp; Guidelines</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {featuredWPs.map(wp => (
                  <ProductCard key={wp.id} product={wp} type="whitepaper">
                    <FileText size={22} className="text-gold-500 mb-2" />
                  </ProductCard>
                ))}
              </div>
              <Link href="/knowledge" className="mt-6 inline-flex items-center gap-2 text-gold-600 font-semibold text-sm hover:gap-3 transition-all">
                View all white papers <ArrowRight size={14} />
              </Link>
            </div>

            {/* Project showcases */}
            <div className="flex-[1.2] min-w-[240px]">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="text-gold-500" size={22} />
                <h3 className="text-2xl font-bold text-forest-900">Project Showcases</h3>
              </div>
              <div className="flex flex-col gap-4">
                {PROJECTS.map(p => (
                  <Link 
                    key={p.title} 
                    href={`/projects/${p.slug || p.title.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="flex items-center gap-4 card p-3 group cursor-pointer"
                  >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
                      <Image 
                        src={p.image} 
                        alt={p.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-forest-900 text-sm">{p.title}</p>
                      <p className="text-forest-600 text-xs">{p.value}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          TRAINING & SEMINARS
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <GraduationCap className="text-gold-500" size={26} />
          <h2 className="text-3xl font-bold text-forest-900">Training &amp; Seminars</h2>
          <span className="bg-forest-100 text-forest-700 text-xs font-semibold px-3 py-1.5 rounded-full">
            Nairobi · Mombasa · Online
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SEMINARS.map(s => (
            <Link 
              key={s.id} 
              href={`/seminars/${s.id}`}
              className="card overflow-hidden group cursor-pointer"
            >
              <div className="relative h-36 overflow-hidden">
                <Image 
                  src={s.image} 
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-forest-900/30" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-forest-900 mb-1">{s.title}</h3>
                <p className="text-forest-500 text-sm mb-4">{s.desc}</p>
                <span className="inline-block bg-gold-50 border border-gold-200 text-gold-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {s.badge}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          REVENUE ZONE – DIGITAL PRODUCTS
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-[#e1efea] to-[#f0f7f3] py-20 border-y border-forest-200">
        <div className="max-w-7xl mx-auto px-6">

          {/* Zone header */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <span className="inline-flex items-center gap-2 bg-gold-500 text-white font-bold px-5 py-2 rounded-full text-sm">
              💰 Revenue Zone – Digital Products
            </span>
            <span className="bg-forest-100 text-forest-700 text-xs font-semibold px-3 py-1.5 rounded-full">
              Prices in KSh
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Cost Handbook */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <BookOpen size={30} className="text-gold-600" />
                <h3 className="text-2xl font-bold text-forest-900">Cost Handbook KE</h3>
              </div>
              <div className="card overflow-hidden bg-amber-50">
                <div className="relative h-44 overflow-hidden">
                  <Image 
                    src={SHOP_PRODUCTS.handbook.image} 
                    alt="Cost handbook"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-forest-900 mb-1">{SHOP_PRODUCTS.handbook.title}</h4>
                  <p className="text-forest-500 text-sm mb-4">{SHOP_PRODUCTS.handbook.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-forest-900">
                      {formatPrice(SHOP_PRODUCTS.handbook.price)} <small className="font-normal text-forest-400">annual sub</small>
                    </span>
                    <Link 
                      href={`/checkout?product=${encodeURIComponent(SHOP_PRODUCTS.handbook.title)}&type=handbook&price=${SHOP_PRODUCTS.handbook.price}`}
                      className="w-9 h-9 rounded-full bg-gold-500 text-white flex items-center justify-center hover:bg-gold-600 transition-colors"
                      aria-label="Purchase Cost Handbook"
                    >
                      <ShoppingCart size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Excel worksheets */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <FileSpreadsheet size={30} className="text-green-600" />
                <h3 className="text-2xl font-bold text-forest-900">Excel Worksheets</h3>
              </div>
              <div className="flex flex-col gap-4">
                {revenueWS.map(ws => (
                  <div key={ws.id} className="card overflow-hidden bg-amber-50 flex flex-row">
                    <div className="relative w-24 shrink-0 overflow-hidden">
                      <Image 
                        src={ws.image} 
                        alt={ws.title}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                    <div className="p-4 flex flex-col justify-between flex-1">
                      <div>
                        <h4 className="font-bold text-forest-900 text-sm mb-1">{ws.title}</h4>
                        <p className="text-forest-500 text-xs">{ws.desc}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-bold text-forest-900 text-sm">{formatPrice(ws.price)}</span>
                        <Link 
                          href={`/checkout?product=${encodeURIComponent(ws.title)}&type=worksheet&price=${ws.price}`}
                          className="text-gold-500 hover:text-gold-600 transition-colors"
                          aria-label={`Download ${ws.title}`}
                        >
                          <Download size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                <Link href="/shop" className="text-gold-600 font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                  View all worksheets <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Downloads hub */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Download size={30} className="text-gold-600" />
                <h3 className="text-2xl font-bold text-forest-900">Downloads</h3>
              </div>
              <div className="flex flex-col gap-3">
                {revenueDowns.map(d => (
                  <Link 
                    key={d.id} 
                    href={`/checkout?product=${encodeURIComponent(d.title)}&type=download&price=${d.price}`}
                    className="card bg-amber-50 flex flex-row items-center gap-4 p-4 hover:bg-amber-100 transition-colors cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center shrink-0">
                      <Download size={18} className="text-gold-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-forest-900 text-sm">{d.title}</p>
                    </div>
                    <span className="font-bold text-forest-900 text-sm shrink-0">{formatPrice(d.price)}</span>
                  </Link>
                ))}
                <div className="flex items-center gap-2 bg-gold-500 text-white font-bold px-4 py-2.5 rounded-2xl text-sm justify-center mt-1">
                  ↑ High margin KSh products
                </div>
                <Link href="/shop" className="text-gold-600 font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Full shop <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          BOTTOM CTA STRIP
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-4 items-center justify-center">
          <div className="bg-forest-100 rounded-full px-6 py-3 text-forest-700 text-sm font-medium">
            📰 Weekly blog · free insights
          </div>
          <div className="bg-amber-50 border border-gold-200 rounded-full px-6 py-3 text-forest-700 text-sm font-medium">
            👑 Cost handbook + worksheets – KSh bestsellers
          </div>
          <Link href="/quote" className="btn-primary inline-flex items-center gap-2 text-sm py-3">
            Talk to an Engineer <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  )
}
