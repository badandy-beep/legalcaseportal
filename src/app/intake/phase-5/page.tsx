'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Building2, ArrowRight } from 'lucide-react'

export default function Phase5Page() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    hospitalName: '', hospitalAddress: '', isTeachingHospital: false, deliveringPhysician: '',
    attendingOB: '', anesthesiologist: '', neonatologist: '', nursingStaff: '', complications: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    localStorage.setItem('intake_phase5', JSON.stringify(formData))
    router.push('/intake/phase-6')
  }

  return (
    <div className="card">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-navy-900 mb-2">Labor & Delivery</h1>
        <p className="text-gray-600">Details about the labor and delivery.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div><label className="input-label">Hospital Full Name</label>
          <input type="text" name="hospitalName" value={formData.hospitalName} onChange={handleChange} className="input-field" /></div>
        <div><label className="input-label">Hospital Address</label>
          <input type="text" name="hospitalAddress" value={formData.hospitalAddress} onChange={handleChange} className="input-field" /></div>
        <label className="flex items-center gap-2"><input type="checkbox" name="isTeachingHospital" checked={formData.isTeachingHospital} onChange={handleChange} className="checkbox-custom" /><span className="text-sm">Teaching Hospital</span></label>
        <div><label className="input-label">Delivering Physician</label>
          <input type="text" name="deliveringPhysician" value={formData.deliveringPhysician} onChange={handleChange} className="input-field" /></div>
        <div><label className="input-label">Attending OB</label>
          <input type="text" name="attendingOB" value={formData.attendingOB} onChange={handleChange} className="input-field" /></div>
        <div><label className="input-label">Anesthesiologist</label>
          <input type="text" name="anesthesiologist" value={formData.anesthesiologist} onChange={handleChange} className="input-field" /></div>
        <div><label className="input-label">Neonatologist</label>
          <input type="text" name="neonatologist" value={formData.neonatologist} onChange={handleChange} className="input-field" /></div>
        <div><label className="input-label">L&D Complications</label>
          <textarea name="complications" value={formData.complications} onChange={handleChange} className="input-field" rows={4} placeholder="Describe any complications during labor and delivery" /></div>
        <button type="submit" disabled={loading} className="w-full btn-primary flex items-center justify-center gap-2">
          {loading ? 'Saving...' : <>Continue to Pediatric Care <ArrowRight className="w-5 h-5" /></>}
        </button>
      </form>
    </div>
  )
}
