import { TrendingUp, TrendingDown, Minus, Database, Info, Calculator, Building2, AlertCircle, Percent, ArrowRight } from 'lucide-react'
import { PRICE_MATERIALS, OVERALL_CIPI } from '@/lib/data'

export const metadata = {
  title: 'Construction Material Price Tracker 2026 – Strasan Group',
  description: 'Kenya Construction Input Price Indices (CIPI) with VAT analysis, cost projection tools, and expert project management insights for 2026.',
}

function pct(a: number, b: number) {
  return (((b - a) / a) * 100).toFixed(2)
}

function TrendIcon({ trend }: { trend: string }) {
  if (trend === 'up')   return <TrendingUp  className="text-red-500"   size={16}/>
  if (trend === 'down') return <TrendingDown className="text-green-600" size={16}/>
  return <Minus className="text-amber-500" size={16}/>
}

// Current VAT rate for construction materials (standard rate)
const VAT_RATE = 0.16 // 16% as per Kenya Revenue Authority [citation:1]

// 2026 projected material prices with 8% annual inflation [citation:5][citation:10]
const MATERIALS_2026 = [
  { name: "Cement (50kg bag)", current: 790, unit: "bag", projected: 853, vatInclusive: 990 },
  { name: "Steel Reinforcement (per ton)", current: 107500, unit: "ton", projected: 116100, vatInclusive: 134676 },
  { name: "Sand (per ton)", current: 1800, unit: "ton", projected: 1944, vatInclusive: 2255 },
  { name: "Ballast (per ton)", current: 2200, unit: "ton", projected: 2376, vatInclusive: 2756 },
  { name: "Timber (per foot)", current: 85, unit: "ft", projected: 92, vatInclusive: 107 },
  { name: "Roofing Sheets (per m²)", current: 850, unit: "m²", projected: 918, vatInclusive: 1065 },
]

// Construction cost per m² by region (2026) [citation:2][citation:5]
const REGIONAL_COSTS = [
  { region: "Nairobi", basic: 65000, standard: 80000, premium: 100000 },
  { region: "Mombasa", basic: 60000, standard: 75000, premium: 90000 },
  { region: "Kisumu", basic: 50000, standard: 65000, premium: 80000 },
  { region: "Eldoret", basic: 55000, standard: 70000, premium: 85000 },
  { region: "Rural Areas", basic: 45000, standard: 55000, premium: 70000 },
]

export default function PricesPage() {
  return (
    <div>
      {/* Hero Section with 2026 Update */}
      <section className="bg-gradient-to-br from-forest-900 to-forest-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="bg-gold-500 text-forest-900 px-3 py-1 rounded-full text-sm font-semibold">2026 Edition</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Updated March 2026</span>
          </div>
          <p className="text-gold-400 font-semibold uppercase tracking-wider text-sm mb-3">Market Intelligence</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Construction Material Price Tracker 2026</h1>
          <p className="text-forest-200 text-lg max-w-2xl">
            Quarterly Construction Input Price Indices (CIPI) with real-time VAT analysis. 
            Data sourced from KNBS official reports and industry updates for 2026.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-gold-500 bg-opacity-20 border border-gold-400 text-gold-300 px-4 py-2 rounded-full text-sm">
            <Database size={14}/> Official Government Data · Base: Q4 2019 = 100 · VAT: 16% [citation:1]
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Key Stats Cards - Updated 2026 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          {[
            { label: 'Overall CIPI (Q1 2026 est.)',  value: '124.80', sub: '+2.9% vs Q3 2025', trend: 'up', note: 'Projected increase' },
            { label: 'Year-on-Year Inflation',   value: '4.3%',  sub: 'Feb 2026 [citation:9]', trend: 'up' },
            { label: 'Cement Price (50kg)',      value: 'KES 790', sub: '+12% vs 2025 [citation:8]', trend: 'up' },
            { label: 'Steel Price (per ton)',    value: 'KES 107,500', sub: '+5.2% last quarter [citation:10]', trend: 'up' },
          ].map(c => (
            <div key={c.label} className="card p-6">
              <p className="text-forest-500 text-sm mb-2">{c.label}</p>
              <p className="text-3xl font-bold text-forest-900 mb-1">{c.value}</p>
              <div className="flex items-center gap-1 text-sm">
                <TrendIcon trend={c.trend}/>
                <span className="text-forest-600">{c.sub}</span>
              </div>
              {c.note && <p className="text-xs text-forest-400 mt-1">{c.note}</p>}
            </div>
          ))}
        </div>

        {/* VAT Analysis Table */}
        <div className="card overflow-hidden mb-14">
          <div className="bg-forest-800 text-white px-6 py-4 font-semibold text-lg flex items-center justify-between flex-wrap gap-3">
            <span className="flex items-center gap-2"><Percent size={18}/> Material Price Analysis with VAT (2026)</span>
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Standard VAT Rate: 16% [citation:1]</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-forest-50 text-forest-700 font-semibold border-b border-forest-200">
                  <th className="text-left px-6 py-4">Material</th>
                  <th className="text-right px-4 py-4">Unit</th>
                  <th className="text-right px-4 py-4">Current Price (Excl. VAT)</th>
                  <th className="text-right px-4 py-4">VAT (16%)</th>
                  <th className="text-right px-6 py-4 bg-forest-100">Total (Incl. VAT)</th>
                  <th className="text-right px-6 py-4">2026 Projected</th>
                  <th className="px-6 py-4">Trend</th>
                </tr>
              </thead>
              <tbody>
                {MATERIALS_2026.map((m, i) => {
                  const vatAmount = m.current * VAT_RATE
                  const totalWithVAT = m.current + vatAmount
                  const projectedIncrease = ((m.projected - m.current) / m.current * 100).toFixed(1)
                  return (
                    <tr key={m.name} className={`border-b border-forest-100 ${i % 2 === 0 ? '' : 'bg-forest-50/40'}`}>
                      <td className="px-6 py-4 font-semibold text-forest-900">{m.name}</td>
                      <td className="px-4 py-4 text-right text-forest-500">{m.unit}</td>
                      <td className="px-4 py-4 text-right text-forest-600">KES {m.current.toLocaleString()}</td>
                      <td className="px-4 py-4 text-right text-amber-600">KES {vatAmount.toLocaleString()}</td>
                      <td className="px-6 py-4 text-right font-bold text-forest-900 bg-forest-50">KES {totalWithVAT.toLocaleString()}</td>
                      <td className="px-6 py-4 text-right text-forest-600">KES {m.projected.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1">
                          <TrendingUp className="text-red-500" size={14}/>
                          <span className="text-red-600 text-xs">+{projectedIncrease}%</span>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-3 bg-forest-50 text-forest-500 text-xs flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2"><Info size={13}/> VAT calculated at 16% as per Kenya Revenue Authority guidelines for construction materials [citation:1]</div>
            <div className="flex items-center gap-2"><AlertCircle size={13}/> Imported materials may incur additional customs duties [citation:1][citation:4]</div>
          </div>
        </div>

        {/* Cost Projection Calculator - Interactive */}
        <div className="card p-8 mb-14 bg-gradient-to-r from-forest-50 to-white">
          <div className="flex items-start gap-4 flex-wrap md:flex-nowrap">
            <div className="bg-gold-100 p-4 rounded-2xl">
              <Calculator className="w-8 h-8 text-gold-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-forest-900 mb-2">📊 See How Your Project Costs Change</h2>
              <p className="text-forest-600 mb-4">Adjust the price increase slider to see the impact on your construction budget</p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-2">Project Size (m²)</label>
                  <input type="range" id="projectArea" min="50" max="1000" step="50" defaultValue="200" 
                    className="w-full accent-gold-600" />
                  <div className="flex justify-between text-xs text-forest-500 mt-1">
                    <span>50 m² (Bedsitter)</span>
                    <span id="areaValue" className="font-semibold text-forest-800">200 m²</span>
                    <span>1000 m² (Large Building)</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-2">Cement Price Increase (%)</label>
                  <input type="range" id="cementIncrease" min="0" max="20" step="1" defaultValue="8" 
                    className="w-full accent-gold-600" />
                  <div className="flex justify-between text-xs text-forest-500 mt-1">
                    <span>0% (No change)</span>
                    <span id="cementValue" className="font-semibold text-forest-800">8%</span>
                    <span>20% (High inflation)</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-5 bg-forest-800 rounded-xl text-white">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-forest-300 text-sm">Current Estimated Cost</p>
                    <p id="currentCost" className="text-2xl font-bold">KES 13,200,000</p>
                  </div>
                  <div>
                    <p className="text-forest-300 text-sm">With Price Increase</p>
                    <p id="projectedCost" className="text-2xl font-bold text-gold-300">KES 14,256,000</p>
                  </div>
                  <div>
                    <p className="text-forest-300 text-sm">Additional Cost</p>
                    <p id="additionalCost" className="text-2xl font-bold text-red-300">+ KES 1,056,000</p>
                  </div>
                </div>
                <p className="text-forest-300 text-xs text-center mt-3 flex items-center justify-center gap-1">
                  <Info size={12}/> Based on standard construction cost of KES 66,000/m² for mid-range quality [citation:2]
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Construction Cost Table */}
        <div className="card overflow-hidden mb-14">
          <div className="bg-forest-800 text-white px-6 py-4 font-semibold text-lg flex items-center gap-2">
            <Building2 size={18}/> Construction Costs by Region (2026) – KES per m²
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-forest-50 text-forest-700 font-semibold border-b border-forest-200">
                  <th className="text-left px-6 py-4">Region</th>
                  <th className="text-right px-4 py-4">Basic Finish</th>
                  <th className="text-right px-4 py-4">Standard Finish</th>
                  <th className="text-right px-6 py-4">Premium/Luxury</th>
                  <th className="px-6 py-4">VAT Impact (Standard)</th>
                 </tr>
              </thead>
              <tbody>
                {REGIONAL_COSTS.map((r, i) => (
                  <tr key={r.region} className={`border-b border-forest-100 ${i % 2 === 0 ? '' : 'bg-forest-50/40'}`}>
                    <td className="px-6 py-4 font-semibold text-forest-900">{r.region}</td>
                    <td className="px-4 py-4 text-right text-forest-600">KES {r.basic.toLocaleString()}</td>
                    <td className="px-4 py-4 text-right text-forest-600">KES {r.standard.toLocaleString()}</td>
                    <td className="px-6 py-4 text-right font-bold text-forest-900">KES {r.premium.toLocaleString()}</td>
                    <td className="px-6 py-4 text-forest-500 text-sm">
                      +{(r.standard * VAT_RATE).toLocaleString()} per m²
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-3 bg-forest-50 text-forest-500 text-xs">
            Regional variations account for labor costs, material transport, and local market conditions [citation:2][citation:5]
          </div>
        </div>

        {/* CIPI Historical Trend with 2026 Projection */}
        <div className="card p-8 mb-14">
          <h2 className="text-2xl font-bold text-forest-900 mb-6">Overall CIPI — Historical Trend & 2026 Outlook</h2>
          <div className="grid grid-cols-5 md:grid-cols-9 gap-3">
            {[...OVERALL_CIPI, { quarter: "Q1 2026*", value: 124.8 }].map((q, idx) => {
              const heightPct = ((q.value - 95) / 35) * 100
              const isProjection = q.quarter.includes('*')
              return (
                <div key={q.quarter} className="flex flex-col items-center gap-2">
                  <span className={`text-xs font-bold ${isProjection ? 'text-gold-600' : 'text-forest-700'}`}>
                    {q.value.toFixed(0)}
                  </span>
                  <div className="w-full bg-forest-100 rounded-lg overflow-hidden" style={{ height: 80 }}>
                    <div className={`w-full rounded-lg ${isProjection ? 'bg-gradient-to-t from-gold-500 to-gold-400' : 'bg-gradient-to-t from-forest-700 to-forest-500'}`}
                      style={{ height: `${Math.min(heightPct, 100)}%`, marginTop: `${100 - Math.min(heightPct, 100)}%` }}/>
                  </div>
                  <span className="text-xs text-forest-500 text-center leading-tight">{q.quarter}</span>
                </div>
              )
            })}
          </div>
          <p className="text-forest-500 text-xs mt-4 text-center">*Q1 2026 is projected based on current inflation trends [citation:3][citation:9]</p>
        </div>

        {/* Expert CTA - Project Cost Management */}
        <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-forest-900 mb-2">We Can Manage Your Project to Control Costs</h3>
              <p className="text-forest-800 text-lg mb-3">Don't let material price fluctuations derail your budget.</p>
              <p className="text-forest-800/90 mb-4">Our expert project managers and quantity surveyors help you:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-forest-800"><span className="text-forest-900 font-bold">✓</span> Lock in material prices through strategic procurement</li>
                <li className="flex items-center gap-2 text-forest-800"><span className="text-forest-900 font-bold">✓</span> Optimize design to reduce material waste by 15-20%</li>
                <li className="flex items-center gap-2 text-forest-800"><span className="text-forest-900 font-bold">✓</span> Navigate VAT and tax implications for maximum savings [citation:1][citation:7]</li>
                <li className="flex items-center gap-2 text-forest-800"><span className="text-forest-900 font-bold">✓</span> Real-time cost monitoring with 10-15% contingency planning [citation:2]</li>
              </ul>
              <button className="bg-forest-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-forest-800 transition inline-flex items-center gap-2">
                Request a Free Cost Assessment <ArrowRight size={18}/>
              </button>
            </div>
            <div className="bg-white/20 p-6 rounded-xl text-center min-w-[200px]">
              <p className="text-forest-900 font-bold text-lg">Meet Our Experts</p>
              <div className="mt-3 space-y-3">
                <div>
                  <p className="font-semibold text-forest-900">Eng. Dr. Paul Macharia</p>
                  <p className="text-xs text-forest-800">PhD Civil Engineering | 15+ years experience</p>
                </div>
                <div>
                  <p className="font-semibold text-forest-900">Eng. Paul Methu</p>
                  <p className="text-xs text-forest-800">32+ years | EBK Consulting Engineer</p>
                </div>
                <div>
                  <p className="font-semibold text-forest-900">Grace Njeri, MRICS</p>
                  <p className="text-xs text-forest-800">Quantity Surveyor | Cost Management Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Sources & Methodology */}
        <div className="bg-forest-50 border border-forest-200 rounded-3xl p-8 mb-8">
          <h3 className="font-bold text-forest-900 mb-5 flex items-center gap-2"><Database size={20} className="text-gold-500"/> Data Sources & Methodology (2026 Update)</h3>
          <div className="space-y-4">
            {[
              'Kenya National Bureau of Statistics (KNBS) – Official CPI at 4.3% (February 2026) [citation:3][citation:9]',
              'Construction Input Price Index (CIPI) – Steel +5.2% quarterly, Sand +3.6% (Q3 2025) [citation:10]',
              'VAT Rate: 16% standard for construction materials per KRA guidelines [citation:1]',
              'Material Prices: Cement at KES 790-900 per 50kg bag (2026) [citation:8], Steel at KES 95,000-120,000 per ton [citation:5]',
              'Regional construction costs: Nairobi KES 60,000-90,000/m², Rural KES 40,000-55,000/m² [citation:2][citation:5]',
              '2026 Projections: Industry experts forecast 5-8% annual cost increases [citation:5][citation:10]',
            ].map(s => (
              <div key={s} className="flex items-start gap-3 text-sm text-forest-700">
                <div className="w-2 h-2 rounded-full bg-gold-500 mt-1.5 shrink-0"/>
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="flex items-start gap-3 text-sm text-forest-500 bg-white border border-forest-100 rounded-2xl p-5">
          <Info size={16} className="mt-0.5 shrink-0 text-gold-500"/>
          <p>Disclaimer: Indices are based on KNBS official data and industry sources for 2026. Actual prices may vary by region, supplier, and project scale. VAT calculations assume standard rate applicability; consult your tax advisor for specific project requirements. [citation:1][citation:3][citation:5]</p>
        </div>
      </div>

      {/* Interactive Calculator Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          const areaSlider = document.getElementById('projectArea');
          const cementSlider = document.getElementById('cementIncrease');
          const areaValue = document.getElementById('areaValue');
          const cementValue = document.getElementById('cementValue');
          const currentCostSpan = document.getElementById('currentCost');
          const projectedCostSpan = document.getElementById('projectedCost');
          const additionalCostSpan = document.getElementById('additionalCost');
          
          const BASE_COST_PER_M2 = 66000; // Mid-range standard construction cost [citation:2]
          
          function updateCalculator() {
            const area = parseInt(areaSlider.value);
            const increasePct = parseInt(cementSlider.value);
            
            areaValue.textContent = area + ' m²';
            cementValue.textContent = increasePct + '%';
            
            const currentCost = area * BASE_COST_PER_M2;
            const projectedCost = currentCost * (1 + (increasePct / 100) * 0.35); // Cement is ~35% of total cost
            const additional = projectedCost - currentCost;
            
            currentCostSpan.textContent = 'KES ' + Math.round(currentCost).toLocaleString();
            projectedCostSpan.textContent = 'KES ' + Math.round(projectedCost).toLocaleString();
            additionalCostSpan.innerHTML = '+ KES ' + Math.round(additional).toLocaleString();
          }
          
          areaSlider.addEventListener('input', updateCalculator);
          cementSlider.addEventListener('input', updateCalculator);
          updateCalculator();
        `
      }} />
    </div>
  )
}
