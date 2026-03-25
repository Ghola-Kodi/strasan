import { CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { SERVICES } from '@/lib/data'
import * as LucideIcons from 'lucide-react'

function ServiceIcon({ name }: { name: string }) {
  // @ts-ignore
  const Icon = LucideIcons[name] ?? LucideIcons.Building2
  return <Icon size={28} className="text-gold-500" />
}

export const metadata = {
  title: 'Services – Strasan Group Limited',
  description: 'Civil engineering consultancy services including structural, roads, water, geotechnical, project management and EIA.',
}

export default function ServicesPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-forest-900 to-forest-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gold-400 font-semibold uppercase tracking-wider text-sm mb-3">Our Expertise</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Engineering Services</h1>
          <p className="text-forest-200 text-lg max-w-2xl">
            Eight integrated service lines covering the full infrastructure lifecycle – from site
            investigation and feasibility through detailed design, construction supervision and
            environmental compliance.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map(s => (
            <div key={s.id} id={s.id} className="card p-8">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-forest-50 rounded-2xl flex items-center justify-center">
                  <ServiceIcon name={s.icon} />
                </div>
                <h2 className="text-2xl font-bold text-forest-900">{s.title}</h2>
              </div>
              <p className="text-forest-600 leading-relaxed mb-6">{s.summary}</p>
              <ul className="space-y-2">
                {s.details.map(d => (
                  <li key={d} className="flex items-start gap-3 text-forest-700 text-sm">
                    <CheckCircle2 className="text-gold-500 mt-0.5 shrink-0" size={16} />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process section */}
      <section className="bg-forest-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold uppercase tracking-wider text-sm mb-2">How We Work</p>
            <h2 className="text-3xl font-bold">Our Project Delivery Process</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Client Brief', desc: 'Define scope, budget and programme' },
              { step: '02', title: 'Feasibility', desc: 'Options appraisal and technical review' },
              { step: '03', title: 'Detailed Design', desc: 'Full engineering calculations and drawings' },
              { step: '04', title: 'Procurement', desc: 'Tender documents and contractor selection' },
              { step: '05', title: 'Supervision', desc: 'Site supervision and contract administration' },
            ].map(p => (
              <div key={p.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-gold-500 text-white font-bold flex items-center justify-center mx-auto mb-4 text-lg">
                  {p.step}
                </div>
                <h3 className="font-bold text-white mb-2">{p.title}</h3>
                <p className="text-forest-400 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-forest-900 mb-4">Discuss Your Project</h2>
        <p className="text-forest-600 mb-8">
          Our senior engineers are available for a no-obligation initial consultation to understand
          your requirements and propose the right approach.
        </p>
        <a href="mailto:info@strasangroup.co.ke" className="btn-primary inline-flex items-center gap-2">
          Request a Consultation <ArrowRight size={18} />
        </a>
      </section>
    </div>
  )
}
