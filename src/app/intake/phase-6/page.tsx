'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Stethoscope, ArrowRight } from 'lucide-react'

export default function Phase6Page() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    pediatricianAtBirth: '', nicuAttending: '', nicuHospital: '', nicuLengthOfStay: '',
    developmentalPediatrician: '', therapists: '', earlyIntervention: '', behavioralProviders: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    localStorage.setItem('intake_phase6', JSON.stringify(formData))
    router.push('/intake/phase-7')
  }

  return (
    <div className="card">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-navy-900 mb-2">Pediatric Care</h1>
        <p className="text-gray-600">Information about the child's pediatric care providers.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div><label className="input-label">Pediatrician at Birth <span className="text-coral-600">*</span></label>
          <input type="text" name="pediatricianAtBirth" value={formData.pediatricianAtBirth} onChange={handleChange} className="input-field" required placeholder="Name and practice" /></div>
        <div className="bg-gray-50 p-4 rounded-lg space-y-4">
          <h3 className="font-semibold text-navy-900">NICU Stay (if applicable)</h3>
          <div><label className="input-label">NICU Attending Physician</label>
            <input type="text" name="nicuAttending" value={formData.nicuAttending} onChange={handleChange} className="input-field" /></div>
          <div><label className="input-label">NICU Hospital (if different)</label>
            <input type="text" name="nicuHospital" value={formData.nicuHospital} onChange={handleChange} className="input-field" /></div>
          <div><label className="input-label">Length of Stay</label>
            <input type="text" name="nicuLengthOfStay" value={formData.nicuLengthOfStay} onChange={handleChange} className="input-field" placeholder="e.g., 3 days, 2 weeks" /></div>
        </div>
        <div><label className="input-label">Developmental Pediatrician</label>
          <input type="text" name="developmentalPediatrician" value={formData.developmentalPediatrician} onChange={handleChange} className="input-field" /></div>
        <div><label className="input-label">Therapists (OT, PT, Speech)</label>
          <textarea name="therapists" value={formData.therapists} onChange={handleChange} className="input-field" rows={2} placeholder="List all therapists and practices" /></div>
        <div><label className="input-label">Early Intervention Programs</label>
          <input type="text" name="earlyIntervention" value={formData.earlyIntervention} onChange={handleChange} className="input-field" placeholder="Program name and dates" /></div>
        <div><label className="input-label">Behavioral/Autism Providers</label>
          <textarea name="behavioralProviders" value={formData.behavioralProviders} onChange={handleChange} className="input-field" rows={2} placeholder="ABA therapists, behavioral specialists, etc." /></div>
        <button type="submit" disabled={loading} className="w-full btn-primary flex items-center justify-center gap-2">
          {loading ? 'Saving...' : <>Continue to Diagnoses <ArrowRight className="w-5 h-5" /></>}
        </button>
      </form>
    </div>
  )
}
