'use client'

import { useState } from 'react'

const HEAR_ABOUT_OPTIONS = [
  'Google',
  'Referral',
  'Social Media',
  "Children's Health Defense",
  'The HighWire',
  'Other',
]

const CALL_TIMES = ['Morning', 'Afternoon', 'Evening']

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bestTime: '',
    hearAbout: '',
    description: '',
    agreeDisclaimer: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submission:', formData)
    setSubmitted(true)
  }

  return (
    <div className="bg-white py-16">
      <div className="max-w-2xl mx-auto px-4">
        {/* Page Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-alg-navy mb-2">Contact Alpha Law Group</h1>
          <p className="text-gray-500 text-lg">
            Free consultation. No fees unless we win. We respond within 24 hours.
          </p>
        </div>

        {submitted ? (
          /* Success State */
          <div className="text-center bg-alg-navy rounded-xl p-10 text-white">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Thank you.</h2>
            <p className="text-white/90 mb-6">
              Alex or Chase will contact you within 24 hours.
            </p>
            <a href="tel:9413041500" className="text-alg-gold font-bold text-xl block mb-2">(941) 304-1500</a>
            <p className="text-white/60 text-sm">alphainjurylaw.com</p>
          </div>
        ) : (
          /* Contact Form */
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="input-label">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="First name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="input-label">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="input-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="input-label">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="bestTime" className="input-label">Best Time to Call</label>
                <select
                  id="bestTime"
                  name="bestTime"
                  value={formData.bestTime}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Select...</option>
                  {CALL_TIMES.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="hearAbout" className="input-label">How Did You Hear About Us?</label>
              <select
                id="hearAbout"
                name="hearAbout"
                value={formData.hearAbout}
                onChange={handleChange}
                className="input-field"
              >
                <option value="">Select...</option>
                {HEAR_ABOUT_OPTIONS.map(o => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="description" className="input-label">Brief Description of Your Situation</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="input-field"
                rows={4}
                placeholder="Tell us about your situation..."
              />
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="agreeDisclaimer"
                checked={formData.agreeDisclaimer}
                onChange={handleChange}
                className="checkbox-custom mt-1"
              />
              <span className="text-sm text-gray-600">
                I agree that submitting this form does not create an attorney-client relationship
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-alg-gold text-alg-navy font-bold py-4 px-6 rounded-lg hover:bg-alg-gold-light transition text-lg"
            >
              Send Message &mdash; We&rsquo;ll Be In Touch
            </button>
          </form>
        )}

        {/* Contact Info Strip */}
        <div className="mt-12 border-t border-gray-200 pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-semibold text-alg-navy mb-1">Phone</p>
            <a href="tel:9413041500" className="text-alg-gold font-bold text-lg">(941) 304-1500</a>
          </div>
          <div>
            <p className="font-semibold text-alg-navy mb-1">Email</p>
            <p className="text-gray-600">info@alphainjurylaw.com</p>
          </div>
          <div>
            <p className="font-semibold text-alg-navy mb-1">Address</p>
            <p className="text-gray-600">Sarasota County, Florida</p>
          </div>
          <div>
            <p className="font-semibold text-alg-navy mb-1">Hours</p>
            <p className="text-gray-600">Monday&ndash;Friday 9AM&ndash;6PM EST</p>
            <p className="text-gray-600">24/7 Emergency Line: <a href="tel:9413041500" className="text-alg-gold font-semibold">(941) 304-1500</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
