'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { User, Mail, Phone, MapPin, Upload, Eye, EyeOff, ArrowRight } from 'lucide-react'

// US States for select dropdown
const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming', 'District of Columbia'
]

const RELATIONSHIPS = [
  'Mother',
  'Father',
  'Legal Guardian',
  'Grandparent',
  'Foster Parent',
  'Other Family Member',
  'Other'
]

export default function Phase1Page() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    relationship: '',
    dateOfBirth: '',
    addressStreet: '',
    addressCity: '',
    addressState: '',
    addressZip: '',
    password: '',
    confirmPassword: '',
    ssnLast4: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)

    try {
      console.log('Submitting phase 1:', formData)
      localStorage.setItem('intake_phase1', JSON.stringify(formData))
      router.push('/intake/phase-2')
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="card">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-navy-900 mb-2">Account Setup</h1>
          <p className="text-gray-600">
            Create your secure account to begin the intake process.
          </p>
        </div>

        <form id="phase-1-form" onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-navy-900 flex items-center gap-2">
              <User className="w-5 h-5 text-teal-600" />
              Personal Information
            </h2>

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="input-label">
                Full Legal Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter your full legal name"
                maxLength={100}
              />
            </div>

            {/* Relationship to Child */}
            <div>
              <label htmlFor="relationship" className="input-label">
                Relationship to Child
              </label>
              <select
                id="relationship"
                name="relationship"
                value={formData.relationship}
                onChange={handleChange}
                className="input-field"
              >
                <option value="">Select relationship...</option>
                {RELATIONSHIPS.map(rel => (
                  <option key={rel} value={rel}>{rel}</option>
                ))}
              </select>
            </div>

            {/* Date of Birth */}
            <div>
              <label htmlFor="dateOfBirth" className="input-label">
                Your Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="input-field"
              />
              <p className="text-xs text-gray-500 mt-1">You must be 18 or older</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-navy-900 flex items-center gap-2">
              <Mail className="w-5 h-5 text-teal-600" />
              Contact Information
            </h2>

            {/* Email */}
            <div>
              <label htmlFor="email" className="input-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
                placeholder="your.email@example.com"
                maxLength={254}
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="input-label">
                Mobile Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input-field"
                placeholder="(555) 123-4567"
                maxLength={15}
              />
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-navy-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-teal-600" />
              Address
            </h2>

            {/* Street */}
            <div>
              <label htmlFor="addressStreet" className="input-label">
                Street Address
              </label>
              <input
                type="text"
                id="addressStreet"
                name="addressStreet"
                value={formData.addressStreet}
                onChange={handleChange}
                className="input-field"
                placeholder="123 Main Street, Apt 4B"
                maxLength={200}
              />
            </div>

            {/* City, State, ZIP */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="col-span-2">
                <label htmlFor="addressCity" className="input-label">
                  City
                </label>
                <input
                  type="text"
                  id="addressCity"
                  name="addressCity"
                  value={formData.addressCity}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="City"
                  maxLength={100}
                />
              </div>
              <div>
                <label htmlFor="addressState" className="input-label">
                  State
                </label>
                <select
                  id="addressState"
                  name="addressState"
                  value={formData.addressState}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">State</option>
                  {US_STATES.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="addressZip" className="input-label">
                  ZIP
                </label>
                <input
                  type="text"
                  id="addressZip"
                  name="addressZip"
                  value={formData.addressZip}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="12345"
                  maxLength={10}
                />
              </div>
            </div>
          </div>

          {/* Password */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-navy-900 flex items-center gap-2">
              Create Password
            </h2>

            <div>
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="input-field pr-12"
                  placeholder="Minimum 8 characters"
                  maxLength={128}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="input-label">
                Confirm Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="input-field"
                placeholder="Re-enter your password"
                maxLength={128}
              />
            </div>
          </div>

          {/* SSN Last 4 (Optional) */}
          <div>
            <label htmlFor="ssnLast4" className="input-label">
              Last 4 of SSN <span className="text-gray-400">(Optional)</span>
            </label>
            <input
              type="text"
              id="ssnLast4"
              name="ssnLast4"
              value={formData.ssnLast4}
              onChange={handleChange}
              className="input-field w-32"
              placeholder="XXXX"
              maxLength={4}
              pattern="[0-9]*"
            />
            <p className="text-xs text-gray-500 mt-1">Used for identity verification only</p>
          </div>
        </form>
      </div>

      {/* Sticky Footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 z-10">
        <div className="max-w-2xl mx-auto">
          <button
            type="submit"
            form="phase-1-form"
            disabled={loading}
            className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Saving...
              </>
            ) : (
              <>
                Continue to Child Information
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </>
  )
}
