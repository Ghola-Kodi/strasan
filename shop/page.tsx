import Link from 'next/link'
import { Download, ShoppingCart, FileSpreadsheet, BookOpen } from 'lucide-react'
import { SHOP_PRODUCTS } from '@/lib/data'

export const metadata = {
  title: 'Digital Shop – Strasan Group Limited',
  description: 'Excel worksheets, Word templates, cost handbooks, CAD packs and PDF guides for Kenyan engineers.',
}

export default function ShopPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-forest-900 to-forest-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gold-400 font-semibold uppercase tracking-wider text-sm mb-3">
            Digital Products
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Engineering Shop
          </h1>
          <p className="text-forest-200 text-lg max-w-2xl mb-6">
            Excel, Word, CAD, and PDF resources to boost your productivity — all priced in KSh
            and instantly downloadable.
          </p>
       <span className="inline-flex items-center gap-2 bg-gold-500 text-white font-bold px-5 py-2.5 rounded-full text-sm">
  🛠️ Engineering Resource Hub
</span>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">

        {/* Cost Handbook */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-gold-500" size={26}/>
            <h2 className="text-2xl font-bold text-forest-900">
              Cost Handbook (Kenya)
            </h2>
          </div>

          <div className="max-w-sm">
            <div className="card overflow-hidden">
              <div className="h-52 overflow-hidden">
                <img
                  src={SHOP_PRODUCTS.handbook.image}
                  alt={SHOP_PRODUCTS.handbook.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <span className="inline-block bg-gold-50 border border-gold-200 text-gold-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {SHOP_PRODUCTS.handbook.badge}
                </span>

                <h3 className="font-bold text-forest-900 text-lg mb-2">
                  {SHOP_PRODUCTS.handbook.title}
                </h3>

                <p className="text-forest-500 text-sm mb-5">
                  {SHOP_PRODUCTS.handbook.desc}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-forest-900">
                    {SHOP_PRODUCTS.handbook.price}
                    <small className="text-sm font-normal text-forest-400 ml-1">
                      {SHOP_PRODUCTS.handbook.period}
                    </small>
                  </span>

                  <Link
                    href="/checkout"
                    className="btn-primary flex items-center gap-2 text-sm py-2 px-4"
                  >
                    <ShoppingCart size={15}/> Subscribe
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Worksheets */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <FileSpreadsheet className="text-green-600" size={26}/>
            <h2 className="text-2xl font-bold text-forest-900">
              Excel Worksheets &amp; Word Templates
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SHOP_PRODUCTS.worksheets.map(ws => (
              <div key={ws.id} className="card overflow-hidden group">
                <div className="h-40 overflow-hidden">
                  <img
                    src={ws.image}
                    alt={ws.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-forest-900 mb-2">{ws.title}</h3>
                  <p className="text-forest-500 text-sm mb-5">{ws.desc}</p>

                  <div className="flex items-center justify-between">
                    <span className="font-bold text-forest-900">{ws.price}</span>

                    <Link
                      href="/checkout"
                      className="flex items-center gap-1.5 bg-forest-100 hover:bg-gold-500 hover:text-white text-forest-700 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors"
                    >
                      <Download size={13}/> Buy
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Downloads */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Download className="text-gold-500" size={26}/>
            <h2 className="text-2xl font-bold text-forest-900">
              Downloads – CAD, Revit &amp; Checklists
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SHOP_PRODUCTS.downloads.map(d => (
              <div
                key={d.id}
                className="card flex items-center gap-5 p-5 group cursor-pointer hover:border-gold-300 transition-colors"
              >
                <div className="w-14 h-14 bg-gold-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-gold-500 transition-colors">
                  <Download size={22} className="text-gold-500 group-hover:text-white"/>
                </div>

                <div className="flex-1">
                  <h4 className="font-bold text-forest-900 mb-1 text-sm">
                    {d.title}
                  </h4>
                  <span className="text-forest-900 font-bold">{d.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bundle CTA */}
        <div className="bg-gradient-to-br from-forest-800 to-forest-900 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-3">Get the Full Bundle</h2>

          <p className="text-forest-300 text-lg mb-8 max-w-xl mx-auto">
            All worksheets, the cost handbook subscription, and every download pack at one discounted price.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="text-center">
              <p className="text-4xl font-bold text-gold-400">KSh 24,900</p>
              <p className="text-forest-400 text-sm mt-1">Everything (save ~40%)</p>
            </div>

            <Link
              href="/checkout"
              className="btn-primary flex items-center gap-2"
            >
              <ShoppingCart size={18}/> Get Full Bundle
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
