import { User, Mail, Phone, MapPin, Calendar, Award, Briefcase, FileText, MessageSquare, Send, CheckCircle, Clock, Linkedin, Twitter, Facebook, Shield, HardHat, Droplet, Building2, Ruler, Wrench, ArrowRight, Star, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Request BOQ Customization | Strasan Group – Eng. Paul Methu',
  description: 'Get personalized BOQ templates tailored to your specific construction project. Work directly with Eng. Paul Methu, our 32+ year expert, to get accurate cost estimates and detailed bills of quantities.',
}

// Team members data
const TEAM_MEMBERS = [
  {
    name: "Eng. Paul Methu",
    role: "Founder & Technical Director",
    qualifications: "BSc Civil Engineering | EBK Consulting Engineer | NEMA Lead Expert | 32+ years experience",
    expertise: ["Highway Engineering", "Contract Management", "Environmental Impact Assessment", "Structural Engineering"],
    image: "/images/team/paul-methu.jpg",
    bio: "Eng. Paul Methu is a practicing Consulting Engineer with over 32 years of experience across East Africa. He specializes in highway engineering, contract management, and environmental impact assessment. He has led major infrastructure projects including the Pagak–Maiwut–Mathiang–Paloich Road Project (360 km) in South Sudan and numerous road networks across Kenya.",
    achievements: ["Lead Engineer: Pagak–Maiwut–Mathiang–Paloich Road (360km)", "Roads 2000 Program: 5 Counties", "Northern Corridor Rehabilitation Programme", "NEMA Lead Expert & Environmental Auditor"],
    linkedin: "#",
  },
  {
    name: "Eng. Dr. Paul Gacheru Macharia",
    role: "Founder & Managing Director",
    qualifications: "Ph.D. Civil Engineering | MSc Transportation | EBK Consulting Engineer | Lecturer, University of Nairobi",
    expertise: ["Transportation Engineering", "Highway Materials", "Pavement Design", "Geotechnical Engineering"],
    image: "/images/team/paul-macharia.jpg",
    bio: "Eng. Dr. Paul Macharia holds a Ph.D. in Civil Engineering and brings deep academic and practical expertise to complex infrastructure projects. He serves as lead engineer on major road projects across East Africa and lectures at the University of Nairobi, shaping the next generation of engineers.",
    achievements: ["Lead Engineer: South Sudan Road Projects", "World Bank Infrastructure Programs", "University of Nairobi Lecturer", "Published Research in Pavement Design"],
    linkedin: "#",
  },
  {
    name: "Grace Njeri, MRICS",
    role: "Quantity Surveyor & Cost Manager",
    qualifications: "BSc Quantity Surveying (KCA University) | MRICS | Certified Cost Professional",
    expertise: ["Cost Planning", "Bills of Quantities", "FIDIC/NEC Contracts", "Contract Administration"],
    image: "/images/team/grace-njeri.jpg",
    bio: "Grace Njeri is a Chartered Quantity Surveyor with expertise in construction cost planning and contract administration. She has delivered accurate BOQs for residential, commercial, and infrastructure projects across Kenya.",
    achievements: ["Member of Royal Institution of Chartered Surveyors (MRICS)", "NEC4 Accredited Project Manager", "Expert in FIDIC Contract Administration"],
    linkedin: "#",
  },
  {
    name: "Eng. Gerald Kamau",
    role: "Professional Engineer",
    qualifications: "Registered Engineer (EBK) | Infrastructure & Quality Assurance Expert",
    expertise: ["Project Supervision", "Quality Assurance", "Road Engineering", "Site Management"],
    image: "/images/team/gerald-kamau.jpg",
    bio: "Eng. Gerald Kamau brings extensive experience in infrastructure engineering and project supervision, ensuring quality standards are met across all projects.",
    achievements: ["Quality Assurance Lead: Multiple Road Projects", "Construction Supervision Expert", "Site Safety Specialist"],
    linkedin: "#",
  },
]

// BOQ customization options
const BOQ_OPTIONS = [
  { id: "residential", title: "Residential Villa / House", icon: Building2, price: "From KSh 8,500" },
  { id: "commercial", title: "Commercial Building / Office", icon: Briefcase, price: "From KSh 12,900" },
  { id: "multi-storey", title: "Multi-Storey Apartment", icon: Ruler, price: "From KSh 14,500" },
  { id: "road", title: "Road & Highway Works", icon: HardHat, price: "From KSh 15,500" },
  { id: "water", title: "Water Supply Network", icon: Droplet, price: "From KSh 9,800" },
  { id: "industrial", title: "Industrial / Warehouse", icon: Wrench, price: "From KSh 11,900" },
]

export default function CustomizationRequestPage() {
  return (
    <div>
      {/* Hero Section with Eng. Methu Spotlight */}
      <section className="bg-gradient-to-br from-forest-900 to-forest-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gold-500 text-forest-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star size={14}/> Meet Your Expert
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Get Your BOQ Customized by{' '}
                <span className="text-gold-400">Eng. Paul Methu</span>
              </h1>
              <p className="text-forest-200 text-lg mb-6">
                32+ years of engineering expertise • EBK Consulting Engineer • NEMA Lead Expert
              </p>
              <p className="text-forest-100 mb-8 max-w-xl">
                Every project is unique. Let our experts tailor professional Bills of Quantities 
                to your exact specifications, ensuring accuracy and cost efficiency.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#request-form" className="bg-gold-500 text-forest-900 px-6 py-3 rounded-lg font-semibold hover:bg-gold-400 transition inline-flex items-center gap-2">
                  Request Customization <ArrowRight size={18}/>
                </a>
                <a href="#team" className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                  Meet the Team
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-forest-700 rounded-2xl p-1 shadow-2xl">
                <div className="bg-forest-800 rounded-xl p-6 text-center min-w-[260px]">
                  <div className="w-28 h-28 bg-gold-100 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                    <User className="w-12 h-12 text-gold-600" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Eng. Paul Methu</h3>
                  <p className="text-gold-400 text-sm mb-3">Founder & Technical Director</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    <span className="bg-forest-700 text-forest-200 text-xs px-2 py-1 rounded-full">EBK Registered</span>
                    <span className="bg-forest-700 text-forest-200 text-xs px-2 py-1 rounded-full">NEMA Lead Expert</span>
                    <span className="bg-forest-700 text-forest-200 text-xs px-2 py-1 rounded-full">32+ Years</span>
                  </div>
                  <div className="border-t border-forest-600 pt-3 text-left">
                    <p className="text-forest-300 text-xs flex items-center gap-2">
                      <CheckCircle size={12} className="text-gold-400"/> Pagak–Maiwut Road (360km)
                    </p>
                    <p className="text-forest-300 text-xs flex items-center gap-2 mt-1">
                      <CheckCircle size={12} className="text-gold-400"/> Roads 2000 Program (5 Counties)
                    </p>
                    <p className="text-forest-300 text-xs flex items-center gap-2 mt-1">
                      <CheckCircle size={12} className="text-gold-400"/> Northern Corridor Rehabilitation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* What We Customize Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-forest-900 mb-3">What We Can Customize For You</h2>
            <p className="text-forest-600 max-w-2xl mx-auto">
              Choose from our professional BOQ templates, and our experts will tailor them to your project's specific requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BOQ_OPTIONS.map((option) => {
              const IconComponent = option.icon
              return (
                <div key={option.id} className="card p-6 border border-gray-100 hover:shadow-lg transition">
                  <div className="bg-gold-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-gold-600" />
                  </div>
                  <h3 className="font-bold text-lg text-forest-900 mb-1">{option.title}</h3>
                  <p className="text-gold-600 font-semibold mb-3">{option.price}</p>
                  <p className="text-forest-500 text-sm">Customizable with your specific dimensions, materials, finishes, and site conditions.</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Team Section */}
        <div id="team" className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-forest-900 mb-3">Meet Our Experts</h2>
            <p className="text-forest-600 max-w-2xl mx-auto">
              Work directly with registered engineers and quantity surveyors who bring decades of experience to your project
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <div key={member.name} className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition ${index === 0 ? 'ring-2 ring-gold-200' : ''}`}>
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-forest-50 p-6 flex flex-col items-center justify-center">
                    <div className="w-32 h-32 bg-forest-200 rounded-full flex items-center justify-center overflow-hidden mb-3">
                      <User className="w-12 h-12 text-forest-500" />
                    </div>
                    <h3 className="font-bold text-forest-900 text-center">{member.name}</h3>
                    <p className="text-gold-600 text-sm text-center font-medium">{member.role}</p>
                    {index === 0 && (
                      <span className="bg-gold-100 text-gold-700 text-xs px-2 py-0.5 rounded-full mt-2">Your BOQ Expert</span>
                    )}
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="mb-3">
                      <p className="text-forest-600 text-sm font-mono">{member.qualifications}</p>
                    </div>
                    <p className="text-forest-700 text-sm mb-4">{member.bio}</p>
                    <div className="mb-4">
                      <p className="font-semibold text-forest-800 text-sm mb-2">Key Expertise:</p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map(exp => (
                          <span key={exp} className="bg-forest-50 text-forest-600 text-xs px-2 py-1 rounded-full">{exp}</span>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold text-forest-800 text-sm mb-2">Select Achievements:</p>
                      <ul className="space-y-1">
                        {member.achievements.slice(0, 2).map(ach => (
                          <li key={ach} className="text-forest-500 text-xs flex items-start gap-2">
                            <ChevronRight size={12} className="text-gold-500 mt-0.5 shrink-0"/> {ach}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a href="#" className="text-gold-600 text-sm hover:text-gold-700 inline-flex items-center gap-1">
                      View full profile <ArrowRight size={12}/>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-forest-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-forest-900 mb-2">How BOQ Customization Works</h2>
            <p className="text-forest-600">Simple, transparent process from request to delivery</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Tell Us Your Project", desc: "Fill out the form with project details, type, and size" },
              { step: 2, title: "Expert Review", desc: "Eng. Methu reviews requirements and suggests scope" },
              { step: 3, title: "Customization", desc: "Our team tailors the BOQ to your specifications" },
              { step: 4, title: "Delivery & Support", desc: "Receive your BOQ with 7 days of free revisions" },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 bg-gold-500 text-forest-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  {step.step}
                </div>
                <h3 className="font-semibold text-forest-800 mb-1">{step.title}</h3>
                <p className="text-forest-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Request Form Section */}
        <div id="request-form" className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-forest-900 mb-2">Request BOQ Customization</h2>
              <p className="text-forest-600">Fill out the form below and Eng. Paul Methu will get back to you within 24 hours</p>
            </div>
            
            <form action="/api/contact" method="POST" className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-forest-700 font-medium mb-1 text-sm">Full Name *</label>
                  <input type="text" name="name" required className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-gold-400 outline-none transition" placeholder="John Mwangi" />
                </div>
                <div>
                  <label className="block text-forest-700 font-medium mb-1 text-sm">Email Address *</label>
                  <input type="email" name="email" required className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-gold-400 outline-none transition" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-forest-700 font-medium mb-1 text-sm">Phone Number</label>
                  <input type="tel" name="phone" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-gold-400 outline-none transition" placeholder="+254 700 000 000" />
                </div>
                <div>
                  <label className="block text-forest-700 font-medium mb-1 text-sm">Project Location</label>
                  <input type="text" name="location" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-gold-400 outline-none transition" placeholder="Nairobi, Kiambu, etc." />
                </div>
              </div>
              
              <div>
                <label className="block text-forest-700 font-medium mb-1 text-sm">BOQ Template Type *</label>
                <select name="boq_type" required className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-gold-400 outline-none transition">
                  <option value="">Select a template...</option>
                  <option value="residential">Residential Villa / House (from KSh 8,500)</option>
                  <option value="commercial">Commercial Building / Office (from KSh 12,900)</option>
                  <option value="multi-storey">Multi-Storey Apartment (from KSh 14,500)</option>
                  <option value="road">Road & Highway Works (from KSh 15,500)</option>
                  <option value="water">Water Supply Network (from KSh 9,800)</option>
                  <option value="industrial">Industrial / Warehouse (from KSh 11,900)</option>
                  <option value="custom">Custom / Other (please specify)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-forest-700 font-medium mb-1 text-sm">Project Size / Scope *</label>
                <input type="text" name="project_scope" required className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-gold-400 outline-none transition" placeholder="e.g., 200m² residential, 1km road, etc." />
              </div>
              
              <div>
                <label className="block text-forest-700 font-medium mb-1 text-sm">Specific Customization Requirements</label>
                <textarea name="requirements" rows={4} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-gold-400 outline-none transition" placeholder="Tell us what you need customized (materials, finishes, specific rates, special conditions, etc.)"></textarea>
              </div>
              
              <div>
                <label className="block text-forest-700 font-medium mb-1 text-sm">Budget Range (Optional)</label>
                <select name="budget" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-gold-400 outline-none transition">
                  <option value="">Select budget range...</option>
                  <option value="under-50k">Under KSh 50,000</option>
                  <option value="50k-100k">KSh 50,000 - KSh 100,000</option>
                  <option value="100k-200k">KSh 100,000 - KSh 200,000</option>
                  <option value="200k+">Above KSh 200,000</option>
                </select>
              </div>
              
              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" name="call_me" className="w-4 h-4 text-gold-500 rounded" />
                  <span className="text-forest-600 text-sm">I'd prefer to discuss over a call</span>
                </label>
              </div>
              
              <div className="pt-4">
                <button type="submit" className="w-full bg-gold-500 text-forest-900 py-3 rounded-lg font-semibold hover:bg-gold-400 transition flex items-center justify-center gap-2">
                  <Send size={18}/> Send Customization Request
                </button>
                <p className="text-center text-forest-400 text-xs mt-3">
                  We'll respond within 24 hours. Your information is kept confidential.
                </p>
              </div>
            </form>
            
            {/* Trust Signals */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex flex-wrap justify-center gap-6 text-sm text-forest-500">
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-gold-500"/> 32+ years experience</div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-gold-500"/> EBK Registered Engineers</div>
                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-gold-500"/> Free revisions included</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
