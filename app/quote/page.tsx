'use client'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { SERVICES } from '@/lib/data'

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    projectDescription: '',
    budget: '',
    timeline: '',
    newsletter: false
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Quote request:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-forest-50">
        <div className="max-w-md mx-auto px-6 text-center">
          <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-forest-900 mb-4">Thank You!</h1>
          <p className="text-forest-600 mb-8">
            We've received your quote request and will get back to you within 24 hours.
            Our team will review your project requirements and provide a detailed proposal.
          </p>
          <a href="/" className="btn-primary inline-block">Return Home</a>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-forest-900 to-forest-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gold-400 font-semibold uppercase tracking-wider text-sm mb-3">Get Started</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Request a Quote</h1>
          <p className="text-forest-200 text-lg max-w-2xl">
            Tell us about your project and our engineering team will provide a comprehensive
            proposal tailored to your specific needs and budget.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-forest-900 mb-6">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-forest-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-forest-900 mb-1">Phone</h3>
                  <p className="text-forest-600">+254 700 000 000</p>
                  <p className="text-sm text-forest-500">Mon-Fri, 8AM-6PM EAT</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-forest-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-forest-900 mb-1">Email</h3>
                  <p className="text-forest-600">info@strasangroup.co.ke</p>
                  <p className="text-sm text-forest-500">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-forest-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-forest-900 mb-1">Office</h3>
                  <p className="text-forest-600">Mugumo, along Kirigiti-Kamiti Road,<br />Next to Rubis Petrol Station,</p>
                  <p className="text-forest-600">Kiambu County,</p>
                  <p className="text-forest-600">P.O. Box 9618-0200
</p>
<p className="text-forest-600">Nairobi, Kenya.</p>
                  <p className="text-sm text-forest-500">By appointment</p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-12 p-6 bg-forest-50 rounded-2xl">
              <h3 className="font-bold text-forest-900 mb-3">Stay Updated</h3>
              <p className="text-forest-600 text-sm mb-4">
                Subscribe to our newsletter for engineering insights, project updates, and industry news.
              </p>
              <NewsletterForm />
            </div>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-forest-900 mb-6">Project Details</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-forest-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-forest-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-forest-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-forest-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-forest-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-forest-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="+254 XXX XXX XXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-forest-900 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-forest-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-forest-900 mb-2">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-forest-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  >
                    <option value="">Select project type</option>
                    {SERVICES.map(service => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                    <option value="other">Other - please specify below</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-forest-900 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    name="projectDescription"
                    required
                    value={formData.projectDescription}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-forest-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="Please describe your project, location, scope, and any specific requirements..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-forest-900 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-forest-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10m">Under KSh 10M</option>
                      <option value="10-50m">KSh 10M - 50M</option>
                      <option value="50-200m">KSh 50M - 200M</option>
                      <option value="200m-1b">KSh 200M - 1B</option>
                      <option value="over-1b">Over KSh 1B</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-forest-900 mb-2">
                      Project Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-forest-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="planning">Still planning</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="w-4 h-4 text-gold-500 border-forest-300 rounded focus:ring-gold-500"
                  />
                  <label htmlFor="newsletter" className="text-sm text-forest-700">
                    Subscribe to our newsletter for engineering insights and project updates
                  </label>
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-4">
                  <Send size={18} />
                  Submit Quote Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Newsletter Form Component
function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would send the email to your newsletter service
    console.log('Newsletter signup:', email)
    setSubscribed(true)
  }

  if (subscribed) {
    return (
      <div className="text-center">
        <CheckCircle size={24} className="text-green-500 mx-auto mb-2" />
        <p className="text-sm text-forest-600">Successfully subscribed!</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleNewsletterSubmit} className="space-y-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="w-full px-3 py-2 text-sm border border-forest-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="w-full bg-gold-500 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-gold-600 transition-colors"
      >
        Subscribe
      </button>
    </form>
  )
}
