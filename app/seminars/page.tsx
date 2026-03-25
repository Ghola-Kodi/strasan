import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, GraduationCap, MapPin, Calendar, Clock, Users, CreditCard, Download, ShoppingCart, Award, Video, MapPin as MapPinIcon } from 'lucide-react'
import { SEMINARS } from '@/lib/data'

// Helper function to format price
const formatPrice = (price: string | number) => {
  if (typeof price === 'number') return `KSh ${price.toLocaleString()}`
  return price
}

// Seminar card component with buy option
const SeminarCard = ({ seminar, featured = false }: { seminar: any; featured?: boolean }) => (
  <div className={`card overflow-hidden group hover:shadow-xl transition-all duration-300 ${featured ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
    <div className="relative h-56 overflow-hidden">
      <Image 
        src={seminar.image} 
        alt={seminar.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-transparent to-transparent" />
      
      {/* Badges */}
      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
        <span className="bg-gold-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
          {seminar.badge || 'Professional Training'}
        </span>
        {seminar.type === 'online' && (
          <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
            <Video size={12} /> Online
          </span>
        )}
        {seminar.type === 'in-person' && (
          <span className="bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
            <MapPinIcon size={12} /> In-Person
          </span>
        )}
      </div>

      {/* Price tag */}
      {seminar.price && (
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg">
          <p className="font-bold text-forest-900 text-sm">
            {formatPrice(seminar.price)}
          </p>
        </div>
      )}
    </div>
    
    <div className="p-6">
      <h3 className="font-bold text-xl text-forest-900 mb-2 group-hover:text-gold-600 transition-colors">
        {seminar.title}
      </h3>
      <p className="text-forest-600 text-sm mb-4 line-clamp-2">
        {seminar.desc || seminar.description || 'Professional engineering training designed for Kenyan standards and practices.'}
      </p>
      
      {/* Seminar details */}
      <div className="space-y-2 mb-6">
        {seminar.date && (
          <div className="flex items-center gap-2 text-sm text-forest-600">
            <Calendar size={16} className="text-gold-500 shrink-0" />
            <span>{new Date(seminar.date).toLocaleDateString('en-KE', { 
              weekday: 'long', 
              day: 'numeric', 
              month: 'long', 
              year: 'numeric' 
            })}</span>
          </div>
        )}
        
        {seminar.duration && (
          <div className="flex items-center gap-2 text-sm text-forest-600">
            <Clock size={16} className="text-gold-500 shrink-0" />
            <span>{seminar.duration}</span>
          </div>
        )}
        
        {seminar.location && (
          <div className="flex items-center gap-2 text-sm text-forest-600">
            <MapPin size={16} className="text-gold-500 shrink-0" />
            <span>{seminar.location}</span>
          </div>
        )}
        
        {seminar.seats && (
          <div className="flex items-center gap-2 text-sm text-forest-600">
            <Users size={16} className="text-gold-500 shrink-0" />
            <span>{seminar.seats} seats available</span>
          </div>
        )}
        
        {seminar.cpd && (
          <div className="flex items-center gap-2 text-sm text-forest-600">
            <Award size={16} className="text-gold-500 shrink-0" />
            <span>{seminar.cpd} CPD Points</span>
          </div>
        )}
      </div>
      
      {/* Action buttons */}
      <div className="flex gap-3">
        <Link 
          href={`/seminars/${seminar.id}`}
          className="flex-1 btn-outline text-sm py-2.5 inline-flex items-center justify-center gap-2"
        >
          Learn More <ArrowRight size={14} />
        </Link>
        
        {seminar.price && seminar.price !== 'Free' && (
          <Link 
            href={`/checkout?product=${encodeURIComponent(seminar.title)}&type=seminar&price=${seminar.price}&id=${seminar.id}`}
            className="btn-primary text-sm py-2.5 inline-flex items-center justify-center gap-2"
            aria-label={`Register for ${seminar.title}`}
          >
            <CreditCard size={16} /> Register
          </Link>
        )}
        
        {seminar.price === 'Free' && (
          <Link 
            href={`/checkout?product=${encodeURIComponent(seminar.title)}&type=seminar&price=0&id=${seminar.id}`}
            className="btn-primary text-sm py-2.5 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700"
            aria-label={`Register for ${seminar.title}`}
          >
            Register Free
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default function SeminarsPage() {
  // Split seminars into upcoming and past
  const now = new Date()
  const upcomingSeminars = SEMINARS.filter(s => !s.date || new Date(s.date) >= now)
  const pastSeminars = SEMINARS.filter(s => s.date && new Date(s.date) < now)
  
  // Featured seminar (first upcoming one)
  const featuredSeminar = upcomingSeminars[0]
  const otherSeminars = upcomingSeminars.slice(1)

  return (
    <div>
      {/* ══════════════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.1.0&auto=format&fit=crop&w=2000&q=80"
            alt="Training background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 py-20 relative">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 border border-white/20 text-gold-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Professional Development
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Engineering Training &amp; <span className="text-gold-400">Seminars</span>
            </h1>
            <p className="text-forest-200 text-lg leading-relaxed mb-8 max-w-2xl">
              Enhance your skills with our industry-leading training programs, workshops, and seminars designed for Kenyan engineering professionals.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <Users size={24} className="text-gold-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-xs text-forest-300">Engineers Trained</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <Award size={24} className="text-gold-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">20+</p>
                  <p className="text-xs text-forest-300">CPD Accredited</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <Calendar size={24} className="text-gold-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">15+</p>
                  <p className="text-xs text-forest-300">Annual Events</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          UPCOMING SEMINARS
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <GraduationCap className="text-gold-500" size={32} />
            <h2 className="text-3xl font-bold text-forest-900">Upcoming Seminars</h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-forest-100 text-forest-700 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
              <MapPin size={11} /> Nairobi · Mombasa · Online
            </span>
          </div>
        </div>

        {upcomingSeminars.length === 0 ? (
          <div className="text-center py-16 bg-forest-50 rounded-2xl">
            <GraduationCap size={48} className="text-forest-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-forest-800 mb-2">No Upcoming Seminars</h3>
            <p className="text-forest-600">Check back soon for our next training events!</p>
          </div>
        ) : (
          <>
            {/* Featured Seminar */}
            {featuredSeminar && (
              <div className="mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <SeminarCard seminar={featuredSeminar} featured={true} />
                  
                  {/* Additional info card */}
                  <div className="bg-gradient-to-br from-gold-50 to-amber-50 rounded-2xl p-8 border border-gold-200">
                    <h3 className="text-2xl font-bold text-forest-900 mb-4">Why Train With Us?</h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center shrink-0 mt-1">
                          <Award size={16} className="text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-forest-900">CPD Accredited Programs</p>
                          <p className="text-sm text-forest-600">Earn continuing professional development points recognized by EBK</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center shrink-0 mt-1">
                          <Users size={16} className="text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-forest-900">Expert Instructors</p>
                          <p className="text-sm text-forest-600">Learn from industry leaders with decades of practical experience</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center shrink-0 mt-1">
                          <Download size={16} className="text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-forest-900">Comprehensive Materials</p>
                          <p className="text-sm text-forest-600">Get digital resources, templates, and certificates upon completion</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gold-200">
                      <Link href="/contact" className="inline-flex items-center gap-2 text-gold-600 font-semibold hover:gap-3 transition-all">
                        Need custom training for your team? <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Other Seminars Grid */}
            {otherSeminars.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherSeminars.map(seminar => (
                  <SeminarCard key={seminar.id} seminar={seminar} />
                ))}
              </div>
            )}
          </>
        )}
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SEMINAR CATEGORIES
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-forest-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-900 mb-4">Training Categories</h2>
            <p className="text-forest-600 max-w-2xl mx-auto">
              Choose from our diverse range of specialized engineering training programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Structural Engineering",
                icon: "🏗️",
                description: "Advanced analysis, design, and safety protocols",
                programs: 8
              },
              {
                title: "Project Management",
                icon: "📊",
                description: "PMBOK, risk management, and contract administration",
                programs: 6
              },
              {
                title: "Infrastructure",
                icon: "🛣️",
                description: "Roads, bridges, and urban infrastructure",
                programs: 5
              },
              {
                title: "Digital Tools",
                icon: "💻",
                description: "AutoCAD, Revit, BIM, and civil software",
                programs: 7
              }
            ].map(category => (
              <div key={category.title} className="card text-center p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-bold text-forest-900 mb-2">{category.title}</h3>
                <p className="text-forest-500 text-sm mb-3">{category.description}</p>
                <p className="text-xs text-gold-600 font-semibold">{category.programs} programs available</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PAST SEMINARS (ARCHIVE)
      ══════════════════════════════════════════════════════════════ */}
      {pastSeminars.length > 0 && (
        <section className="py-20 max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <Calendar className="text-forest-400" size={24} />
            <h2 className="text-2xl font-bold text-forest-900">Past Seminars & Resources</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastSeminars.slice(0, 3).map(seminar => (
              <div key={seminar.id} className="card opacity-75 hover:opacity-100 transition-opacity">
                <div className="relative h-40 overflow-hidden">
                  <Image 
                    src={seminar.image} 
                    alt={seminar.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-forest-900/40" />
                  <span className="absolute bottom-3 left-3 bg-forest-900/80 text-white text-xs px-3 py-1 rounded-full">
                    Archived
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-forest-900 mb-2">{seminar.title}</h3>
                  <p className="text-forest-500 text-sm mb-4 line-clamp-2">{seminar.desc}</p>
                  <Link 
                    href={`/seminars/${seminar.id}`}
                    className="inline-flex items-center gap-2 text-gold-600 text-sm font-semibold hover:gap-3 transition-all"
                  >
                    View Materials <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {pastSeminars.length > 3 && (
            <div className="text-center mt-8">
              <Link href="/seminars/archive" className="btn-outline inline-flex items-center gap-2">
                View All Past Seminars <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════════
          CTA - CUSTOM TRAINING
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-r from-gold-600 to-gold-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Custom Training for Your Team?</h2>
          <p className="text-gold-100 text-lg mb-8 max-w-2xl mx-auto">
            We offer tailored training programs designed specifically for your organization's needs
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-white text-gold-700 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow inline-flex items-center gap-2">
              Request a Quote <ArrowRight size={18} />
            </Link>
            <Link href="/shop" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gold-700 transition-colors inline-flex items-center gap-2">
              Browse Digital Resources <ShoppingCart size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
