'use client'
import { useState } from 'react'
import { CreditCard, Smartphone, Building2, CheckCircle, ArrowLeft, ShoppingCart, FileText, Calculator, Download } from 'lucide-react'
import Link from 'next/link'

// Mock cart data - in a real app this would come from context/state management
const mockCartItems = [
  {
    id: 'handbook',
    type: 'product',
    title: 'Construction Cost Guide 2025',
    price: 'KSh 8,500',
    priceValue: 8500,
    period: '/year',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'structural-engineering',
    type: 'service',
    title: 'Structural Engineering Services',
    price: 'Quote Required',
    priceValue: 0,
    description: 'Design and analysis of residential, commercial and industrial structures'
  },
  {
    id: 'multi-storey',
    type: 'whitepaper',
    title: 'Multi-storey structures',
    price: 'KSh 2,900',
    priceValue: 2900,
    format: 'PDF',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
]

const paymentMethods = [
  {
    id: 'mpesa',
    name: 'M-Pesa',
    icon: Smartphone,
    description: 'Pay with your M-Pesa mobile money',
    color: 'text-green-600'
  },
  {
    id: 'card',
    name: 'Credit/Debit Card',
    icon: CreditCard,
    description: 'Visa, Mastercard, American Express',
    color: 'text-blue-600'
  },
  {
    id: 'bank',
    name: 'Bank Transfer',
    icon: Building2,
    description: 'Direct bank transfer (EFT)',
    color: 'text-purple-600'
  }
]

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    city: '',
    paymentMethod: 'mpesa',
    newsletter: false,
    terms: false
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const totalAmount = mockCartItems.reduce((sum, item) => sum + item.priceValue, 0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log('Checkout data:', { ...formData, items: mockCartItems, total: totalAmount })
    setSubmitted(true)
    setLoading(false)
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
      <div className="min-h-screen flex items-center justify-center bg-forest-50 py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-forest-900 mb-4">Order Confirmed!</h1>
          <p className="text-forest-600 mb-6">
            Thank you for your order. You'll receive a confirmation email shortly with your order details and payment instructions.
          </p>
          <div className="space-y-3">
            <p className="text-sm text-forest-500">Order Total: KSh {totalAmount.toLocaleString()}</p>
            <div className="flex gap-3 justify-center">
              <Link href="/" className="btn-primary">Return Home</Link>
              <Link href="/shop" className="btn-outline">Continue Shopping</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-forest-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-forest-900 to-forest-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/shop" className="inline-flex items-center gap-2 text-forest-200 hover:text-white mb-4">
            <ArrowLeft size={16} /> Back to Shop
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Checkout</h1>
          <p className="text-forest-200 text-lg">
            Complete your order for engineering products and services
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main Form */}
          <div className="lg:col-span-2 space-y-8">

            {/* Customer Information */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-forest-900 mb-6">Customer Information</h2>
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-forest-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-forest-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {/* Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">Email Address *</label>
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
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-forest-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="+254 XXX XXX XXX"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-2">Company/Organization</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-forest-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="Company name (optional)"
                  />
                </div>

                {/* Address */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-forest-700 mb-2">Address *</label>
                    <textarea
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-forest-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="Street address, building, etc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">City *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-forest-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="Nairobi"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <h3 className="text-lg font-semibold text-forest-900 mb-4">Payment Method</h3>
                  <div className="space-y-3">
                    {paymentMethods.map(method => {
                      const IconComponent = method.icon
                      return (
                        <label key={method.id} className="flex items-center gap-4 p-4 border border-forest-200 rounded-lg cursor-pointer hover:border-gold-300 transition-colors">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value={method.id}
                            checked={formData.paymentMethod === method.id}
                            onChange={handleChange}
                            className="text-gold-500 focus:ring-gold-500"
                          />
                          <IconComponent size={24} className={method.color} />
                          <div>
                            <div className="font-medium text-forest-900">{method.name}</div>
                            <div className="text-sm text-forest-600">{method.description}</div>
                          </div>
                        </label>
                      )
                    })}
                  </div>
                </div>

                {/* Additional Options */}
                <div className="space-y-4">
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="text-gold-500 focus:ring-gold-500 rounded"
                    />
                    <span className="text-sm text-forest-700">Subscribe to our newsletter for engineering insights</span>
                  </label>
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="terms"
                      required
                      checked={formData.terms}
                      onChange={handleChange}
                      className="text-gold-500 focus:ring-gold-500 rounded mt-1"
                    />
                    <span className="text-sm text-forest-700">
                      I agree to the <Link href="/terms" className="text-gold-600 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-gold-600 hover:underline">Privacy Policy</Link> *
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing Order...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <ShoppingCart size={20} />
                      Complete Order - KSh {totalAmount.toLocaleString()}
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="card p-6 sticky top-6">
              <h3 className="text-xl font-bold text-forest-900 mb-6">Order Summary</h3>

              <div className="space-y-4 mb-6">
                {mockCartItems.map(item => (
                  <div key={item.id} className="flex gap-4 pb-4 border-b border-forest-100 last:border-b-0 last:pb-0">
                    {item.image && (
                      <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    {!item.image && (
                      <div className="w-16 h-16 rounded-lg bg-gold-50 flex items-center justify-center shrink-0">
                        {item.type === 'service' && <Building2 size={24} className="text-gold-600" />}
                        {item.type === 'whitepaper' && <FileText size={24} className="text-gold-600" />}
                        {item.type === 'product' && <Calculator size={24} className="text-gold-600" />}
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-forest-900 text-sm">{item.title}</h4>
                      {item.description && (
                        <p className="text-xs text-forest-600 mt-1">{item.description}</p>
                      )}
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm font-medium text-forest-900">{item.price}</span>
                        {item.period && <span className="text-xs text-forest-500">{item.period}</span>}
                        {item.format && <span className="text-xs text-forest-500">{item.format}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-forest-200 pt-4">
                <div className="flex justify-between items-center text-lg font-bold text-forest-900">
                  <span>Total</span>
                  <span>KSh {totalAmount.toLocaleString()}</span>
                </div>
                <p className="text-xs text-forest-600 mt-2">
                  Prices include VAT. Digital products are delivered instantly via email.
                </p>
              </div>
            </div>

            {/* Security Notice */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-green-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-medium text-green-800 mb-1">Secure Checkout</h4>
                  <p className="text-sm text-green-700">
                    Your payment information is encrypted and secure. We accept M-Pesa, cards, and bank transfers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
