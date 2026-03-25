import { TrendingUp, TrendingDown, Minus, Database, Info } from 'lucide-react'
import { PRICE_MATERIALS, OVERALL_CIPI } from '@/lib/data'

export const metadata = {
  title: 'Construction Material Price Tracker – Strasan Group',
  description: 'Kenya Construction Input Price Indices (CIPI) Q1–Q3 2025 from KNBS official data.',
}

function pct(a: number, b: number) {
  return (((b - a) / a) * 100).toFixed(2)
}

function TrendIcon({ trend }: { trend: string }) {
  if (trend === 'up')   return <TrendingUp  className="text-red-500"   size={16}/>
  if (trend === 'down') return <TrendingDown className="text-green-600" size={16}/>
  return <Minus className="text-amber-500" size={16}/>
}

export default function PricesPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-forest-900 to-forest-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gold-400 font-semibold uppercase tracking-wider text-sm mb-3">Market Intelligence</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Construction Material Price Tracker</h1>
          <p className="text-forest-200 text-lg max-w-2xl">
            Quarterly Construction Input Price Indices (CIPI) for Kenya.
            Data sourced from Kenya National Bureau of Statistics (KNBS) official reports.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-gold-500 bg-opacity-20 border border-gold-400 text-gold-300 px-4 py-2 rounded-full text-sm">
            <Database size={14}/> Official Government Data · Base: Q4 2019 = 100
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          {[
            { label: 'Overall CIPI (Q3 2025)',  value: '121.27', sub: '+1.27% vs Q2',           trend: 'up' },
            { label: 'Year-on-Year Inflation',   value: '0.74%',  sub: 'Slowing from 3.56% (2024)', trend: 'neutral' },
            { label: 'Building Cost Index',      value: '121.29', sub: '+1.48% quarterly',       trend: 'up' },
            { label: 'Civil Engineering Index',  value: '121.79', sub: '+1.05% quarterly',       trend: 'up' },
          ].map(c => (
            <div key={c.label} className="card p-6">
              <p className="text-forest-500 text-sm mb-2">{c.label}</p>
              <p className="text-3xl font-bold text-forest-900 mb-1">{c.value}</p>
              <div className="flex items-center gap-1 text-sm">
                <TrendIcon trend={c.trend}/>
                <span className="text-forest-600">{c.sub}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="card overflow-hidden mb-14">
          <div className="bg-forest-800 text-white px-6 py-4 font-semibold text-lg">Construction Material Price Indices — Kenya</div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-forest-50 text-forest-700 font-semibold border-b border-forest-200">
                  <th className="text-left px-6 py-4">Material</th>
                  <th className="text-right px-4 py-4">Q1 2025</th>
                  <th className="text-right px-4 py-4">Q2 2025</th>
                  <th className="text-right px-6 py-4">Q3 2025</th>
                  <th className="text-right px-6 py-4">Q2→Q3 Change</th>
                  <th className="px-6 py-4">Trend</th>
                </tr>
              </thead>
              <tbody>
                {PRICE_MATERIALS.map((m, i) => {
                  const change = parseFloat(pct(m.q2, m.q3))
                  return (
                    <tr key={m.name} className={`border-b border-forest-100 ${i % 2 === 0 ? '' : 'bg-forest-50/40'}`}>
                      <td className="px-6 py-4 font-semibold text-forest-900">{m.name}</td>
                      <td className="px-4 py-4 text-right text-forest-600">{m.q1.toFixed(2)}</td>
                      <td className="px-4 py-4 text-right text-forest-600">{m.q2.toFixed(2)}</td>
                      <td className="px-6 py-4 text-right font-bold text-forest-900">{m.q3.toFixed(2)}</td>
                      <td className={`px-6 py-4 text-right font-semibold ${change > 0 ? 'text-red-600' : 'text-green-600'}`}>
                        {change > 0 ? '+' : ''}{change}%
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1">
                          <TrendIcon trend={m.trend}/>
                          <span className="text-forest-500 capitalize">{m.trend === 'up' ? 'Rising' : 'Falling'}</span>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-3 bg-forest-50 text-forest-500 text-xs flex items-center gap-2">
            <Info size={13}/> Q2 estimates based on Q1/Q3 trend interpolation. Full data: KNBS Construction Input Price Indices Q1–Q3 2025.
          </div>
        </div>

        <div className="card p-8 mb-14">
          <h2 className="text-2xl font-bold text-forest-900 mb-6">Overall CIPI — Historical Trend</h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
            {OVERALL_CIPI.map(q => {
              const heightPct = ((q.value - 95) / 30) * 100
              return (
                <div key={q.quarter} className="flex flex-col items-center gap-2">
                  <span className="text-xs font-bold text-forest-700">{q.value.toFixed(0)}</span>
                  <div className="w-full bg-forest-100 rounded-lg overflow-hidden" style={{ height: 80 }}>
                    <div className="w-full bg-gradient-to-t from-forest-700 to-forest-500 rounded-lg"
                      style={{ height: `${heightPct}%`, marginTop: `${100 - heightPct}%` }}/>
                  </div>
                  <span className="text-xs text-forest-500 text-center leading-tight">{q.quarter}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="bg-forest-50 border border-forest-200 rounded-3xl p-8 mb-8">
          <h3 className="font-bold text-forest-900 mb-5 flex items-center gap-2"><Database size={20} className="text-gold-500"/> Data Sources & Methodology</h3>
          <div className="space-y-4">
            {[
              'Kenya National Bureau of Statistics (KNBS) – Official CIPI, released quarterly. Prices collected from representative outlets on 15th day of mid-month.',
              'Q1 2025 Report – Year-on-year inflation 0.18%; steel -2.16%, cement +0.92%, sand +0.61%.',
              'Q2 2025 Report – Materials index rose from 125.90 to 127.39; cement +2.63%, steel +1.52%, fuel -1.62%.',
              'Q3 2025 Report – Overall CIPI 121.27 (+1.27% q/q); steel +5.20%, sand +3.63%, cement -1.39%, timber -2.71%.',
            ].map(s => (
              <div key={s} className="flex items-start gap-3 text-sm text-forest-700">
                <div className="w-2 h-2 rounded-full bg-gold-500 mt-1.5 shrink-0"/>
                {s}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-start gap-3 text-sm text-forest-500 bg-white border border-forest-100 rounded-2xl p-5">
          <Info size={16} className="mt-0.5 shrink-0 text-gold-500"/>
          <p>Disclaimer: Indices are based on KNBS official data and are for informational purposes only. Actual prices may vary by region and supplier. Base year: Q4 2019 = 100.</p>
        </div>
      </div>
    </div>
  )
}
