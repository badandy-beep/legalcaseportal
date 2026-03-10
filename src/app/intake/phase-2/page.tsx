'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Baby, Building2, ArrowRight, Plus, Trash2 } from 'lucide-react'

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

const DELIVERY_TYPES = [
  'Vaginal - Spontaneous',
  'Vaginal - Induced',
  'Vaginal - Assisted (Forceps)',
  'Vaginal - Assisted (Vacuum)',
  'Cesarean - Scheduled',
  'Cesarean - Emergency'
]

const CUSTODY_STATUS = [
  'Biological Parent - Full Custody',
  'Biological Parent - Shared Custody',
  'Legal Guardian',
  'Foster Parent',
  'Adoptive Parent'
]

interface ChildData {
  fullName: string
  formerNames: string
  dateOfBirth: string
  timeOfBirth: string
  sexAtBirth: string
  currentGender: string
  hospitalName: string
  birthCity: string
  birthState: string
  birthSetting: string
  birthWeight: string
  birthLength: string
  gestationalAge: string
  deliveryType: string
  apgar1: string
  apgar5: string
  apgar10: string
  currentHeight: string
  currentWeight: string
  custodyStatus: string
}

const emptyChild: ChildData = {
  fullName: '',
  formerNames: '',
  dateOfBirth: '',
  timeOfBirth: '',
  sexAtBirth: '',
  currentGender: '',
  hospitalName: '',
  birthCity: '',
  birthState: '',
  birthSetting: '',
  birthWeight: '',
  birthLength: '',
  gestationalAge: '',
  deliveryType: '',
  apgar1: '',
  apgar5: '',
  apgar10: '',
  currentHeight: '',
  currentWeight: '',
  custodyStatus: ''
}

export default function Phase2Page() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [children, setChildren] = useState<ChildData[]>([{ ...emptyChild }])
  const handleChildChange = (index: number, field: keyof ChildData, value: string) => {
    setChildren(prev => {
      const updated = [...prev]
      updated[index] = { ...updated[index], [field]: value }
      return updated
    })
  }

  const addChild = () => {
    if (children.length < 3) {
      setChildren(prev => [...prev, { ...emptyChild }])
    }
  }

  const removeChild = (index: number) => {
    if (children.length > 1) {
      setChildren(prev => prev.filter((_, i) => i !== index))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      localStorage.setItem('intake_phase2', JSON.stringify(children))
      router.push('/intake/phase-3')
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
          <h1 className="text-2xl font-bold text-navy-900 mb-2">Child Information</h1>
          <p className="text-gray-600">
            Please provide detailed information about the affected child.
          </p>
        </div>

        <form id="phase-2-form" onSubmit={handleSubmit}>
          {children.map((child, index) => (
            <div key={index} className="mb-8 pb-8 border-b border-gray-200 last:border-0">
              {children.length > 1 && (
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-navy-900">
                    Child {index + 1} {index === 1 ? '(Twin)' : ''}
                  </h2>
                  <button
                    type="button"
                    onClick={() => removeChild(index)}
                    className="text-coral-600 hover:text-coral-700 flex items-center gap-1 text-sm"
                  >
                    <Trash2 className="w-4 h-4" />
                    Remove
                  </button>
                </div>
              )}

              {/* Basic Information */}
              <div className="space-y-4 mb-6">
                <h3 className="text-md font-semibold text-navy-900 flex items-center gap-2">
                  <Baby className="w-5 h-5 text-teal-600" />
                  Basic Information
                </h3>

                <div>
                  <label className="input-label">
                    Child's Full Legal Name
                  </label>
                  <input
                    type="text"
                    value={child.fullName}
                    onChange={(e) => handleChildChange(index, 'fullName', e.target.value)}
                    className="input-field"
                    placeholder="First Middle Last"
                    maxLength={100}
                  />
                </div>

                <div>
                  <label className="input-label">Former/Maiden Names</label>
                  <input
                    type="text"
                    value={child.formerNames}
                    onChange={(e) => handleChildChange(index, 'formerNames', e.target.value)}
                    className="input-field"
                    placeholder="If applicable"
                    maxLength={200}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="input-label">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      value={child.dateOfBirth}
                      onChange={(e) => handleChildChange(index, 'dateOfBirth', e.target.value)}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="input-label">Time of Birth</label>
                    <input
                      type="time"
                      value={child.timeOfBirth}
                      onChange={(e) => handleChildChange(index, 'timeOfBirth', e.target.value)}
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="input-label">
                      Sex Assigned at Birth
                    </label>
                    <select
                      value={child.sexAtBirth}
                      onChange={(e) => handleChildChange(index, 'sexAtBirth', e.target.value)}
                      className="input-field"
                    >
                      <option value="">Select...</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Intersex">Intersex</option>
                    </select>
                  </div>
                  <div>
                    <label className="input-label">Current Gender Identity</label>
                    <select
                      value={child.currentGender}
                      onChange={(e) => handleChildChange(index, 'currentGender', e.target.value)}
                      className="input-field"
                    >
                      <option value="">Select...</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Non-binary">Non-binary</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Birth Information */}
              <div className="space-y-4 mb-6">
                <h3 className="text-md font-semibold text-navy-900 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-teal-600" />
                  Birth Information
                </h3>

                <div>
                  <label className="input-label">
                    Hospital/Birth Facility Name
                  </label>
                  <input
                    type="text"
                    value={child.hospitalName}
                    onChange={(e) => handleChildChange(index, 'hospitalName', e.target.value)}
                    className="input-field"
                    placeholder="Full hospital or facility name"
                    maxLength={200}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="input-label">
                      Birth City
                    </label>
                    <input
                      type="text"
                      value={child.birthCity}
                      onChange={(e) => handleChildChange(index, 'birthCity', e.target.value)}
                      className="input-field"
                      placeholder="City"
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="input-label">
                      Birth State
                    </label>
                    <select
                      value={child.birthState}
                      onChange={(e) => handleChildChange(index, 'birthState', e.target.value)}
                      className="input-field"
                    >
                      <option value="">Select...</option>
                      {US_STATES.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="input-label">Birth Setting</label>
                  <select
                    value={child.birthSetting}
                    onChange={(e) => handleChildChange(index, 'birthSetting', e.target.value)}
                    className="input-field"
                  >
                    <option value="">Select...</option>
                    <option value="Hospital">Hospital</option>
                    <option value="Birthing Center">Birthing Center</option>
                    <option value="Home Birth">Home Birth</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="input-label">
                      Birth Weight
                    </label>
                    <input
                      type="text"
                      value={child.birthWeight}
                      onChange={(e) => handleChildChange(index, 'birthWeight', e.target.value)}
                      className="input-field"
                      placeholder="e.g., 7 lbs 8 oz"
                      maxLength={20}
                    />
                  </div>
                  <div>
                    <label className="input-label">Birth Length</label>
                    <input
                      type="text"
                      value={child.birthLength}
                      onChange={(e) => handleChildChange(index, 'birthLength', e.target.value)}
                      className="input-field"
                      placeholder="e.g., 20.5 inches"
                      maxLength={10}
                    />
                  </div>
                  <div>
                    <label className="input-label">
                      Gestational Age
                    </label>
                    <input
                      type="text"
                      value={child.gestationalAge}
                      onChange={(e) => handleChildChange(index, 'gestationalAge', e.target.value)}
                      className="input-field"
                      placeholder="e.g., 39 weeks"
                      maxLength={20}
                    />
                  </div>
                </div>

                <div>
                  <label className="input-label">
                    Delivery Type
                  </label>
                  <select
                    value={child.deliveryType}
                    onChange={(e) => handleChildChange(index, 'deliveryType', e.target.value)}
                    className="input-field"
                  >
                    <option value="">Select...</option>
                    {DELIVERY_TYPES.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Apgar Scores */}
                <div>
                  <label className="input-label">Apgar Scores (if known)</label>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <input
                        type="number"
                        min="0"
                        max="10"
                        value={child.apgar1}
                        onChange={(e) => handleChildChange(index, 'apgar1', e.target.value)}
                        className="input-field"
                        placeholder="1 min"
                      />
                      <p className="text-xs text-gray-500 mt-1">1 minute</p>
                    </div>
                    <div>
                      <input
                        type="number"
                        min="0"
                        max="10"
                        value={child.apgar5}
                        onChange={(e) => handleChildChange(index, 'apgar5', e.target.value)}
                        className="input-field"
                        placeholder="5 min"
                      />
                      <p className="text-xs text-gray-500 mt-1">5 minutes</p>
                    </div>
                    <div>
                      <input
                        type="number"
                        min="0"
                        max="10"
                        value={child.apgar10}
                        onChange={(e) => handleChildChange(index, 'apgar10', e.target.value)}
                        className="input-field"
                        placeholder="10 min"
                      />
                      <p className="text-xs text-gray-500 mt-1">10 minutes</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Information */}
              <div className="space-y-4">
                <h3 className="text-md font-semibold text-navy-900">Current Information</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="input-label">Current Height</label>
                    <input
                      type="text"
                      value={child.currentHeight}
                      onChange={(e) => handleChildChange(index, 'currentHeight', e.target.value)}
                      className="input-field"
                      placeholder="e.g., 4'2&quot;"
                      maxLength={10}
                    />
                  </div>
                  <div>
                    <label className="input-label">Current Weight</label>
                    <input
                      type="text"
                      value={child.currentWeight}
                      onChange={(e) => handleChildChange(index, 'currentWeight', e.target.value)}
                      className="input-field"
                      placeholder="e.g., 65 lbs"
                      maxLength={10}
                    />
                  </div>
                </div>

                <div>
                  <label className="input-label">
                    Legal Custody Status
                  </label>
                  <select
                    value={child.custodyStatus}
                    onChange={(e) => handleChildChange(index, 'custodyStatus', e.target.value)}
                    className="input-field"
                  >
                    <option value="">Select...</option>
                    {CUSTODY_STATUS.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))}

          {/* Add Twin Button */}
          {children.length < 3 && (
            <button
              type="button"
              onClick={addChild}
              className="mb-6 w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-teal-500 hover:text-teal-600 transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add Twin/Multiple
            </button>
          )}
        </form>
      </div>

      {/* Sticky Footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 z-10">
        <div className="max-w-2xl mx-auto">
          <button
            type="submit"
            form="phase-2-form"
            disabled={loading}
            className="w-full btn-primary flex items-center justify-center gap-2"
          >
            {loading ? 'Saving...' : (
              <>
                Continue to Parents/Guardians
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </>
  )
}
