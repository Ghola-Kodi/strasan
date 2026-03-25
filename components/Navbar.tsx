'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, ShoppingCart } from 'lucide-react'
import { NAV_LINKS, COMPANY } from '@/lib/data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-2xl font-bold text-forest-800">Strasan</span>
          <span className="text-2xl font-light text-gold-500">Group Limited</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 pointer-events-auto">
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href} className="nav-link text-sm pointer-events-auto">{l.label}</Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 pointer-events-auto">
          <Link href="/shop" className="flex items-center gap-1.5 text-forest-700 hover:text-gold-600 transition-colors text-sm font-medium pointer-events-auto">
            <ShoppingCart size={16}/> Shop
          </Link>
          <Link href="/quote" className="btn-primary text-sm py-2 px-5 pointer-events-auto">
            Get a Quote
          </Link>
        </div>

        <button className="lg:hidden pointer-events-auto" onClick={() => setOpen(o => !o)}>
          {open ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-forest-100 px-6 pb-4 pointer-events-auto">
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href}
              className="block py-3 nav-link border-b border-forest-50 last:border-0 pointer-events-auto"
              onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/quote" className="btn-primary block text-center mt-4 pointer-events-auto" onClick={() => setOpen(false)}>
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  )
}
