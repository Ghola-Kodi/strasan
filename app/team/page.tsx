import { Users, Linkedin, Crown } from 'lucide-react'
import TeamImage from '@/components/TeamImage'
import { TEAM } from '@/lib/data'

export const metadata = {
  title: 'Our Team – Strasan Group Limited',
  description: 'Meet the founders and engineering team at Strasan Group Limited.',
}

export default function TeamPage() {
  const founders = TEAM.filter(m => m.isFounder)
  const staff    = TEAM.filter(m => !m.isFounder)

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-forest-900 to-forest-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gold-400 font-semibold uppercase tracking-wider text-sm mb-3">The People Behind the Projects</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Founders & Team</h1>
          <p className="text-forest-200 text-lg max-w-2xl">
            Strasan Group is built on the expertise of registered engineers, surveyors and
            environmental specialists who bring both international training and deep East African
            field experience to every commission.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-10">
          <Crown className="text-gold-500" size={26} />
          <h2 className="text-3xl font-bold text-forest-900">Founders</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {founders.map(f => (
            <div key={f.id} className="card p-8">
              <TeamImage
                src={f.image}
                alt={f.name}
                name={f.name}
                className="w-20 h-20 rounded-full mb-6 overflow-hidden"
              />
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-forest-900">{f.name}</h3>
                  <p className="text-gold-600 font-semibold mt-1">{f.role}</p>
                </div>
                <a href={f.linkedin} className="text-forest-400 hover:text-gold-500 transition-colors">
                  <Linkedin size={22} />
                </a>
              </div>
              <p className="text-forest-600 leading-relaxed mb-6">{f.bio}</p>
              <div>
                <p className="text-xs font-semibold text-forest-500 uppercase tracking-wider mb-3">Areas of Expertise</p>
                <div className="flex flex-wrap gap-2">
                  {f.expertise.map(e => (
                    <span key={e} className="bg-forest-100 text-forest-700 text-sm px-3 py-1 rounded-full">
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full Team */}
      <section className="bg-forest-50 border-t border-forest-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <Users className="text-gold-500" size={26} />
            <h2 className="text-3xl font-bold text-forest-900">Our Engineering Team</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staff.map(m => (
              <div key={m.id} className="card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <TeamImage
                    src={m.image}
                    alt={m.name}
                    name={m.name}
                    className="w-14 h-14 rounded-full shrink-0 overflow-hidden"
                  />
                  <div>
                    <h3 className="font-bold text-forest-900">{m.name}</h3>
                    <p className="text-gold-600 text-sm font-medium">{m.role}</p>
                  </div>
                </div>
                <p className="text-forest-600 text-sm leading-relaxed mb-4">{m.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {m.expertise.map(e => (
                    <span key={e} className="bg-forest-50 border border-forest-200 text-forest-700 text-xs px-2 py-1 rounded-full">
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: 'Continuous Learning', desc: 'We fund CPD for every team member and encourage international conference attendance and professional registration.' },
              { title: 'Mentorship Culture', desc: 'Senior engineers are paired with graduates in a structured mentorship programme aligned with EBK requirements.' },
              { title: 'Diversity & Inclusion', desc: 'We actively recruit engineers from all counties and maintain a gender-balanced leadership team.' },
            ].map(v => (
              <div key={v.title} className="card p-8">
                <h3 className="text-xl font-bold text-forest-900 mb-3">{v.title}</h3>
                <p className="text-forest-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
