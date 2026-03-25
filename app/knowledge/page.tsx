import Link from 'next/link'
import { FileText, Download } from 'lucide-react'
import { WHITE_PAPERS } from '@/lib/data'

export const metadata = {
  title: 'Knowledge Base – Strasan Group Limited',
  description: 'White papers, technical guidelines and Kenya-specific engineering standards.',
}

export default function KnowledgePage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-forest-900 to-forest-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gold-400 font-semibold uppercase tracking-wider text-sm mb-3">
            Technical Library
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Knowledge Base</h1>
          <p className="text-forest-200 text-lg max-w-2xl">
            Download in-depth guides, research papers, and Kenya-specific engineering standards
            authored by our registered engineers.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-10">
          <FileText className="text-gold-500" size={26}/>
          <h2 className="text-2xl font-bold text-forest-900">
            Featured White Papers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHITE_PAPERS.map(wp => (
            <div key={wp.id} className="card overflow-hidden group flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={wp.image}
                  alt={wp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 right-3 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {wp.badge}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <FileText size={22} className="text-gold-500 mb-3"/>

                <h3 className="font-bold text-forest-900 text-lg mb-2">
                  {wp.title}
                </h3>

                <p className="text-forest-500 text-sm leading-relaxed flex-1 mb-5">
                  {wp.desc}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-forest-100">
                  <span className="font-bold text-forest-900">
                    {wp.price} <small className="font-normal text-forest-400">{wp.format}</small>
                  </span>

                  {/* ✅ Fixed: Now leads to checkout */}
                  <Link
                    href="/checkout"
                    className="flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
                  >
                    <Download size={14}/> Download
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
