'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { User, Mail, Phone, MapPin, Upload, Eye, EyeOff, ArrowRight, AlertCircle } from 'lucide-react'

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
  const [errors, setErrors] = useState<Record<string, string>>({})
  
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
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.relationship) newErrors.relationship = 'Please select your relationship to the child'
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required'
    if (!formData.addressStreet.trim()) newErrors.addressStreet = 'Street address is required'
    if (!formData.addressCity.trim()) newErrors.addressCity = 'City is required'
    if (!formData.addressState) newErrors.addressState = 'State is required'
    if (!formData.addressZip.trim()) newErrors.addressZip = 'ZIP code is required'
    if (!formData.password) newErrors.password = 'Password is required'
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters'
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setLoading(true)
    
    try {
      // In production, this would call Supabase auth.signUp()
      // and create the client record
      console.log('Submitting phase 1:', formData)
      
      // Store in localStorage for demo (in production: Supabase)
      localStorage.setItem('intake_phase1', JSON.stringify(formData))
      
      // Navigate to next phase
      router.push('/intake/phase-2')
    } catch (error) {
      console.error('Error:', error)
      setErrors({ submit: 'An error occurred. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-navy-900 mb-2">Account Setup</h1>
        <p className="text-gray-600">
          Create your secure account to begin the intake process.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-navy-900 flex items-center gap-2">
            <User className="w-5 h-5 text-teal-600" />
            Personal Information
          </h2>
          
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="input-label">
              Full Legal Name <span className="text-coral-600">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`input-field ${errors.fullName ? 'input-invalid' : ''}`}
              placeholder="Enter your full legal name"
              maxLength={100}
            />
            {errors.fullName && <p className="input-error">{errors.fullName}</p>}
          </div>

          {/* Relationship to Child */}
          <div>
            <label htmlFor="relationship" className="input-label">
              Relationship to Child <span className="text-coral-600">*</span>
            </label>
            <select
              id="relationship"
              name="relationship"
              value={formData.relationship}
              onChange={handleChange}
              className={`input-field ${errors.relationship ? 'input-invalid' : ''}`}
            >
              <option value="">Select relationship...</option>
              {RELATIONSHIPS.map(rel => (
                <option key={rel} value={rel}>{rel}</option>
              ))}
            </select>
            {errors.relationship && <p className="input-error">{errors.relationship}</p>}
          </div>

          {/* Date of Birth */}
          <div>
            <label htmlFor="dateOfBirth" className="input-label">
              Your Date of Birth <span className="text-coral-600">*</span>
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className={`input-field ${errors.dateOfBirth ? 'input-invalid' : ''}`}
            />
            {errors.dateOfBirth && <p className="input-error">{errors.dateOfBirth}</p>}
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
              Email Address <span className="text-coral-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`input-field ${errors.email ? 'input-invalid' : ''}`}
              placeholder="your.email@example.com"
              maxLength={254}
            />
            {errors.email && <p className="input-error">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="input-label">
              Mobile Phone <span className="text-coral-600">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`input-field ${errors.phone ? 'input-invalid' : ''}`}
              placeholder="(555) 123-4567"
              maxLength={15}
            />
            {errors.phone && <p className="input-error">{errors.phone}</p>}
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
              Street Address <span className="text-coral-600">*</span>
            </label>
            <input
              type="text"
              id="addressStreet"
              name="addressStreet"
              value={formData.addressStreet}
              onChange={handleChange}
              className={`input-field ${errors.addressStreet ? 'input-invalid' : ''}`}
              placeholder="123 Main Street, Apt 4B"
              maxLength={200}
            />
            {errors.addressStreet && <p className="input-error">{errors.addressStreet}</p>}
          </div>

          {/* City, State, ZIP */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2">
              <label htmlFor="addressCity" className="input-label">
                City <span className="text-coral-600">*</span>
              </label>
              <input
                type="text"
                id="addressCity"
                name="addressCity"
                value={formData.addressCity}
                onChange={handleChange}
                className={`input-field ${errors.addressCity ? 'input-invalid' : ''}`}
                placeholder="City"
                maxLength={100}
              />
              {errors.addressCity && <p className="input-error">{errors.addressCity}</p>}
            </div>
            <div>
              <label htmlFor="addressState" className="input-label">
                State <span className="text-coral-600">*</span>
              </label>
              <select
                id="addressState"
                name="addressState"
                value={formData.addressState}
                onChange={handleChange}
                className={`input-field ${errors.addressState ? 'input-invalid' : ''}`}
              >
                <option value="">State</option>
                {US_STATES.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              {errors.addressState && <p className="input-error">{errors.addressState}</p>}
            </div>
            <div>
              <label htmlFor="addressZip" className="input-label">
                ZIP <span className="text-coral-600">*</span>
              </label>
              <input
                type="text"
                id="addressZip"
                name="addressZip"
                value={formData.addressZip}
                onChange={handleChange}
                className={`input-field ${errors.addressZip ? 'input-invalid' : ''}`}
                placeholder="12345"
                maxLength={10}
              />
              {errors.addressZip && <p className="input-error">{errors.addressZip}</p>}
            </div>
          </div>
        </div>

        {/* Password */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-navy-900 flex items-center gap-2">
            🔒 Create Password
          </h2>
          
          <div>
            <label htmlFor="password" className="input-label">
              Password <span className="text-coral-600">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`input-field pr-12 ${errors.password ? 'input-invalid' : ''}`}
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
            {errors.password && <p className="input-error">{errors.password}</p>}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="input-label">
              Confirm Password <span className="text-coral-600">*</span>
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`input-field ${errors.confirmPassword ? 'input-invalid' : ''}`}
              placeholder="Re-enter your password"
              maxLength={128}
            />
            {errors.confirmPassword && <p className="input-error">{errors.confirmPassword}</p>}
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

        {/* Submit Error */}
        {errors.submit && (
          <div className="bg-coral-50 border border-coral-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-coral-600 flex-shrink-0 mt-0.5" />
            <p className="text-coral-700">{errors.submit}</p>
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
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
          <p className="text-xs text-gray-500 text-center mt-3">
            Your information is encrypted and secure
          </p>
        </div>
      </form>
    </div>
  )
}
