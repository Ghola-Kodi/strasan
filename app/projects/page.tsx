import { MapPin, Calendar, DollarSign, Building2 } from 'lucide-react'
import { PROJECTS } from '@/lib/data'

export const metadata = {
  title: 'Our Projects – Strasan Group Limited',
  description: 'Showcase of completed and ongoing civil engineering projects across Kenya and East Africa.',
}

export default function ProjectsPage() {
  const featuredProjects = PROJECTS.filter(p => p.featured)
  const otherProjects = PROJECTS.filter(p => !p.featured)

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-forest-900 to-forest-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gold-400 font-semibold uppercase tracking-wider text-sm mb-3">Our Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Engineering Projects</h1>
          <p className="text-forest-200 text-lg max-w-2xl">
            Delivering world-class infrastructure solutions across Kenya and East Africa.
            From major highways to sustainable water systems, our projects demonstrate
            our commitment to engineering excellence.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-12">
          <Building2 className="text-gold-500" size={28} />
          <h2 className="text-3xl font-bold text-forest-900">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map(project => (
            <div key={project.id} className="card overflow-hidden group">
              <div className="aspect-video bg-gradient-to-br from-forest-100 to-forest-200 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {project.year}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-forest-500 text-sm mb-2">
                  <MapPin size={14} />
                  {project.location}
                </div>

                <h3 className="text-xl font-bold text-forest-900 mb-3">{project.title}</h3>
                <p className="text-forest-600 text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-forest-700">
                    <DollarSign size={14} className="text-gold-500" />
                    <span className="font-semibold">{project.value}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-forest-700">
                    <Building2 size={14} className="text-gold-500" />
                    <span>{project.category}</span>
                  </div>
                </div>

                <div className="border-t border-forest-100 pt-4">
                  <p className="text-xs text-forest-500 mb-2">Services Provided:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.services.slice(0, 2).map(service => (
                      <span key={service} className="bg-forest-50 text-forest-700 text-xs px-2 py-1 rounded">
                        {service}
                      </span>
                    ))}
                    {project.services.length > 2 && (
                      <span className="text-forest-500 text-xs">+{project.services.length - 2} more</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-2xl font-bold text-forest-900 mb-8">Additional Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map(project => (
            <div key={project.id} className="card p-6 group">
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-forest-100 to-forest-200 rounded-lg flex-shrink-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-forest-500 text-sm mb-1">
                    <MapPin size={12} />
                    {project.location}
                    <span className="text-gold-500">•</span>
                    <span>{project.year}</span>
                  </div>

                  <h4 className="font-bold text-forest-900 mb-2">{project.title}</h4>
                  <p className="text-forest-600 text-sm leading-relaxed mb-3 line-clamp-2">{project.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-forest-700">
                      <DollarSign size={12} className="text-gold-500" />
                      <span className="font-semibold">{project.value}</span>
                    </div>
                    <span className="text-xs bg-forest-50 text-forest-700 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-900 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-forest-300 mb-8">
            Our team of registered engineers is ready to discuss your infrastructure needs
            and provide expert guidance from concept to completion.
          </p>
          <a href="/quote" className="btn-primary inline-flex items-center gap-2">
            Get a Quote
          </a>
        </div>
      </section>
    </div>
  )
}
