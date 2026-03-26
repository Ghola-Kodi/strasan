import { TrendingUp, TrendingDown, Minus, Database, Info, Calculator, Building2, AlertCircle, Percent, ArrowRight, FileText, Download, ShoppingCart, FileSpreadsheet } from 'lucide-react'
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
const VAT_RATE = 0.16 // 16% as per Kenya Revenue Authority

// 2026 projected material prices with 8% annual inflation
const MATERIALS_2026 = [
  { name: "Cement (50kg bag)", current: 790, unit: "bag", projected: 853, vatInclusive: 990 },
  { name: "Steel Reinforcement (per ton)", current: 107500, unit: "ton", projected: 116100, vatInclusive: 134676 },
  { name: "Sand (per ton)", current: 1800, unit: "ton", projected: 1944, vatInclusive: 2255 },
  { name: "Ballast (per ton)", current: 2200, unit: "ton", projected: 2376, vatInclusive: 2756 },
  { name: "Timber (per foot)", current: 85, unit: "ft", projected: 92, vatInclusive: 107 },
  { name: "Roofing Sheets (per m²)", current: 850, unit: "m²", projected: 918, vatInclusive: 1065 },
]

// Construction cost per m² by region (2026)
const REGIONAL_COSTS = [
  { region: "Nairobi", basic: 65000, standard: 80000, premium: 100000 },
  { region: "Mombasa", basic: 60000, standard: 75000, premium: 90000 },
  { region: "Kisumu", basic: 50000, standard: 65000, premium: 80000 },
  { region: "Eldoret", basic: 55000, standard: 70000, premium: 85000 },
  { region: "Rural Areas", basic: 45000, standard: 55000, premium: 70000 },
]

// BOQ Sheets available for purchase
const BOQ_SHEETS = [
  { id: "residential-boq", title: "Residential House (200m²)", price: "KSh 2,500", format: "Excel", pages: 12, image: "/images/shop/residential-boq.jpg" },
  { id: "commercial-boq", title: "Commercial Building (500m²)", price: "KSh 4,500", format: "Excel", pages: 18, image: "/images/shop/commercial-boq.jpg" },
  { id: "road-works-boq", title: "Road Works (per km)", price: "KSh 3,900", format: "Excel", pages: 15, image: "/images/shop/road-boq.jpg" },
  { id: "water-supply-boq", title: "Water Supply System", price: "KSh 3,200", format: "Excel", pages: 10, image: "/images/shop/water-boq.jpg" },
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
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="inline-flex items-center gap-2 bg-gold-500 bg-opacity-20 border border-gold-400 text-gold-300 px-4 py-2 rounded-full text-sm">
              <Database size={14}/> Official Government Data · Base: Q4 2019 = 100 · VAT: 16%
            </div>
            <a href="/downloads/monthly-price-indicator-march-2026.pdf" download 
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-4 py-2 rounded-full text-sm transition">
              <Download size={14}/> Download Monthly Price Indicator (PDF)
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Key Stats Cards - Updated 2026 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          {[
            { label: 'Overall CIPI (Q1 2026 est.)',  value: '124.80', sub: '+2.9% vs Q3 2025', trend: 'up', note: 'Projected increase' },
            { label: 'Year-on-Year Inflation',   value: '4.3%',  sub: 'Feb 2026', trend: 'up' },
            { label: 'Cement Price (50kg)',      value: 'KES 790', sub: '+12% vs 2025', trend: 'up' },
            { label: 'Steel Price (per ton)',    value: 'KES 107,500', sub: '+5.2% last quarter', trend: 'up' },
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
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Standard VAT Rate: 16%</span>
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
            <div className="flex items-center gap-2"><Info size={13}/> VAT calculated at 16% as per Kenya Revenue Authority guidelines for construction materials</div>
            <div className="flex items-center gap-2"><AlertCircle size={13}/> Imported materials may incur additional customs duties</div>
          </div>
        </div>

        {/* Cost Projection Calculator - Interactive (Fixed) */}
        <div className="card p-8 mb-14 bg-gradient-to-r from-forest-50 to-white" id="calculator">
          <div className="flex items-start gap-4 flex-wrap md:flex-nowrap">
            <div className="bg-gold-100 p-4 rounded-2xl">
              <Calculator className="w-8 h-8 text-gold-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-forest-900 mb-2">📊 See How Your Project Costs Change</h2>
              <p className="text-forest-600 mb-4">Adjust the sliders below to see the impact on your construction budget</p>
              
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
                  <Info size={12}/> Based on standard construction cost of KES 66,000/m² for mid-range quality
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOQ Sheets & Downloads Section */}
        <div className="mb-14">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <h2 className="text-2xl font-bold text-forest-900 flex items-center gap-2">
              <FileSpreadsheet className="text-gold-600" size={28}/>
              Professional BOQ Sheets & Templates
            </h2>
            <a href="/shop" className="text-gold-600 hover:text-gold-700 font-medium flex items-center gap-1">
              View all in Shop <ArrowRight size={16}/>
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BOQ_SHEETS.map((sheet) => (
              <div key={sheet.id} className="card p-5 hover:shadow-lg transition">
                <div className="bg-forest-100 w-full h-32 rounded-lg mb-4 flex items-center justify-center">
                  <FileText className="w-12 h-12 text-forest-600" />
                </div>
                <h3 className="font-bold text-forest-900 mb-1">{sheet.title}</h3>
                <p className="text-sm text-forest-500 mb-2">{sheet.format} · {sheet.pages} pages</p>
                <p className="text-xl font-bold text-gold-600 mb-3">{sheet.price}</p>
                <button className="w-full bg-forest-800 text-white py-2 rounded-lg hover:bg-forest-700 transition flex items-center justify-center gap-2">
                  <ShoppingCart size={16}/> Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Free Downloads Section */}
        <div className="bg-forest-50 rounded-2xl p-6 mb-14">
          <div className="flex items-center gap-3 mb-4">
            <Download className="text-gold-600" size={24}/>
            <h2 className="text-xl font-bold text-forest-900">Free Resources</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="/downloads/monthly-price-indicator-march-2026.pdf" download 
              className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition group">
              <FileText className="text-gold-600 group-hover:text-gold-700" size={20}/>
              <div>
                <p className="font-semibold text-forest-800">Monthly Price Indicator</p>
                <p className="text-xs text-forest-500">March 2026 · PDF</p>
              </div>
              <Download size={16} className="ml-auto text-forest-400"/>
            </a>
            <a href="/downloads/boq-template-residential.xlsx" download 
              className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition group">
              <FileSpreadsheet className="text-gold-600 group-hover:text-gold-700" size={20}/>
              <div>
                <p className="font-semibold text-forest-800">BOQ Template (Residential)</p>
                <p className="text-xs text-forest-500">Excel · Free Sample</p>
              </div>
              <Download size={16} className="ml-auto text-forest-400"/>
            </a>
            <a href="/downloads/material-cost-tracker.xlsx" download 
              className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition group">
              <Calculator className="text-gold-600 group-hover:text-gold-700" size={20}/>
              <div>
                <p className="font-semibold text-forest-800">Material Cost Tracker</p>
                <p className="text-xs text-forest-500">Excel · Automated</p>
              </div>
              <Download size={16} className="ml-auto text-forest-400"/>
            </a>
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
        </div>

        {/* Expert CTA - Project Cost Management (Inverted Colors) */}
        <div className="bg-forest-900 rounded-2xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gold-400 mb-2">We Can Manage Your Project to Control Costs</h3>
              <p className="text-forest-200 text-lg mb-3">Don't let material price fluctuations derail your budget.</p>
              <p className="text-forest-300 mb-4">Our expert project managers and quantity surveyors help you:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-forest-200"><span className="text-gold-400 font-bold">✓</span> Lock in material prices through strategic procurement</li>
                <li className="flex items-center gap-2 text-forest-200"><span className="text-gold-400 font-bold">✓</span> Optimize design to reduce material waste by 15-20%</li>
                <li className="flex items-center gap-2 text-forest-200"><span className="text-gold-400 font-bold">✓</span> Navigate VAT and tax implications for maximum savings</li>
                <li className="flex items-center gap-2 text-forest-200"><span className="text-gold-400 font-bold">✓</span> Real-time cost monitoring with 10-15% contingency planning</li>
              </ul>
              <button className="bg-gold-500 text-forest-900 px-6 py-3 rounded-lg font-semibold hover:bg-gold-400 transition inline-flex items-center gap-2">
                Request a Free Cost Assessment <ArrowRight size={18}/>
              </button>
            </div>
            <div className="bg-forest-800/50 p-6 rounded-xl text-center min-w-[200px] border border-forest-700">
              <p className="text-gold-400 font-bold text-lg">Meet Our Experts</p>
              <div className="mt-3 space-y-3">
                <div>
                  <p className="font-semibold text-white">Eng. Dr. Paul Macharia</p>
                  <p className="text-xs text-forest-300">PhD Civil Engineering | 15+ years experience</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Eng. Paul Methu</p>
                  <p className="text-xs text-forest-300">32+ years | EBK Consulting Engineer</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Grace Njeri, MRICS</p>
                  <p className="text-xs text-forest-300">Quantity Surveyor | Cost Management Expert</p>
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
              'Kenya National Bureau of Statistics (KNBS) – Official CPI at 4.3% (February 2026)',
              'Construction Input Price Index (CIPI) – Steel +5.2% quarterly, Sand +3.6% (Q3 2025)',
              'VAT Rate: 16% standard for construction materials per KRA guidelines',
              'Material Prices: Cement at KES 790-900 per 50kg bag (2026), Steel at KES 95,000-120,000 per ton',
              'Regional construction costs: Nairobi KES 60,000-90,000/m², Rural KES 40,000-55,000/m²',
              '2026 Projections: Industry experts forecast 5-8% annual cost increases',
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
          <p>Disclaimer: Indices are based on KNBS official data and industry sources for 2026. Actual prices may vary by region, supplier, and project scale. VAT calculations assume standard rate applicability; consult your tax advisor for specific project requirements.</p>
        </div>
      </div>

      {/* Interactive Calculator Script - Fixed with proper DOM ready */}
      <script dangerouslySetInnerHTML={{
        __html: `
          function initCalculator() {
            const areaSlider = document.getElementById('projectArea');
            const cementSlider = document.getElementById('cementIncrease');
            const areaValue = document.getElementById('areaValue');
            const cementValue = document.getElementById('cementValue');
            const currentCostSpan = document.getElementById('currentCost');
            const projectedCostSpan = document.getElementById('projectedCost');
            const additionalCostSpan = document.getElementById('additionalCost');
            
            if (!areaSlider || !cementSlider) {
              console.log('Calculator elements not found yet, retrying...');
              setTimeout(initCalculator, 100);
              return;
            }
            
            const BASE_COST_PER_M2 = 66000;
            
            function updateCalculator() {
              const area = parseInt(areaSlider.value, 10);
              const increasePct = parseInt(cementSlider.value, 10);
              
              if (areaValue) areaValue.textContent = area + ' m²';
              if (cementValue) cementValue.textContent = increasePct + '%';
              
              const currentCost = area * BASE_COST_PER_M2;
              const projectedCost = currentCost * (1 + (increasePct / 100) * 0.35);
              const additional = projectedCost - currentCost;
              
              if (currentCostSpan) currentCostSpan.textContent = 'KES ' + Math.round(currentCost).toLocaleString();
              if (projectedCostSpan) projectedCostSpan.textContent = 'KES ' + Math.round(projectedCost).toLocaleString();
              if (additionalCostSpan) additionalCostSpan.innerHTML = '+ KES ' + Math.round(additional).toLocaleString();
            }
            
            areaSlider.addEventListener('input', updateCalculator);
            cementSlider.addEventListener('input', updateCalculator);
            updateCalculator();
          }
          
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initCalculator);
          } else {
            initCalculator();
          }
        `
      }} />
    </div>
  )
}
