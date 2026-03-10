'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Users, ArrowRight } from 'lucide-react'

export default function Phase3Page() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    motherName: '', motherMaidenName: '', motherDob: '', motherPhone: '', motherEmail: '', motherAddress: '', motherIsClient: false,
    fatherName: '', fatherDob: '', fatherPhone: '', fatherEmail: '', fatherAddress: '', fatherIsClient: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    localStorage.setItem('intake_phase3', JSON.stringify(formData))
    router.push('/intake/phase-4')
  }

  return (
    <>
      <div className="card">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-alg-navy mb-2">Parents/Guardians</h1>
          <p className="text-gray-600">Provide information about the child's parents or guardians.</p>
        </div>

        <form id="phase-3-form" onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-alg-navy flex items-center gap-2">
              <Users className="w-5 h-5 text-alg-gold" /> Mother's Information
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="input-label">Full Name</label><input type="text" name="motherName" value={formData.motherName} onChange={handleChange} className="input-field" /></div>
              <div><label className="input-label">Maiden Name</label><input type="text" name="motherMaidenName" value={formData.motherMaidenName} onChange={handleChange} className="input-field" /></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="input-label">Date of Birth</label><input type="date" name="motherDob" value={formData.motherDob} onChange={handleChange} className="input-field" /></div>
              <div><label className="input-label">Phone</label><input type="tel" name="motherPhone" value={formData.motherPhone} onChange={handleChange} className="input-field" /></div>
            </div>
            <div><label className="input-label">Email</label><input type="email" name="motherEmail" value={formData.motherEmail} onChange={handleChange} className="input-field" /></div>
            <label className="flex items-center gap-2"><input type="checkbox" name="motherIsClient" checked={formData.motherIsClient} onChange={handleChange} className="checkbox-custom" /><span className="text-sm">Mother is the client</span></label>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-alg-navy flex items-center gap-2">
              <Users className="w-5 h-5 text-alg-gold" /> Father's Information
            </h2>
            <div><label className="input-label">Full Name</label><input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} className="input-field" /></div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="input-label">Date of Birth</label><input type="date" name="fatherDob" value={formData.fatherDob} onChange={handleChange} className="input-field" /></div>
              <div><label className="input-label">Phone</label><input type="tel" name="fatherPhone" value={formData.fatherPhone} onChange={handleChange} className="input-field" /></div>
            </div>
            <div><label className="input-label">Email</label><input type="email" name="fatherEmail" value={formData.fatherEmail} onChange={handleChange} className="input-field" /></div>
            <label className="flex items-center gap-2"><input type="checkbox" name="fatherIsClient" checked={formData.fatherIsClient} onChange={handleChange} className="checkbox-custom" /><span className="text-sm">Father is the client</span></label>
          </div>
        </form>
      </div>

      {/* Sticky Footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 z-10">
        <div className="max-w-2xl mx-auto">
          <button type="submit" form="phase-3-form" disabled={loading} className="w-full btn-primary flex items-center justify-center gap-2">
            {loading ? 'Saving...' : <>Continue to Pregnancy & Prenatal <ArrowRight className="w-5 h-5" /></>}
          </button>
        </div>
      </div>
    </>
  )
}
