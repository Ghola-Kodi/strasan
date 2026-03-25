import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { COMPANY, NAV_LINKS } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-forest-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-2xl font-bold text-white">Strasan</span>
              <span className="text-2xl font-light text-gold-400">Group</span>
              <span className="text-xs ml-2 text-forest-400">Limited</span>
            </div>
            <p className="text-forest-400 text-sm leading-relaxed mb-6 max-w-sm">
              {COMPANY.description}
            </p>
            <div className="space-y-2 text-sm text-forest-400">
              <div className="flex items-center gap-2"><Mail size={14} />{COMPANY.email}</div>
              <div className="flex items-center gap-2"><Phone size={14} />{COMPANY.phone}</div>
              <div className="flex items-start gap-2 whitespace-pre-line"><MapPin size={14} className="mt-0.5 shrink-0" />{COMPANY.address}</div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-forest-400 hover:text-gold-400 text-sm transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-white font-semibold mb-4">Certifications</h4>
            <ul className="space-y-2 text-sm text-forest-400">
              <li>Engineers Board of Kenya (EBK)</li>
              <li>NCA Category 1 Consultant</li>
              <li>NEMA Accredited (EIA/EA)</li>
              
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-forest-500">
          <p>© {new Date().getFullYear()} Strasan Group Limited. All rights reserved.</p>
          <p>Nairobi · Mombasa · Kisumu</p>
        </div>
      </div>
    </footer>
  )
}
