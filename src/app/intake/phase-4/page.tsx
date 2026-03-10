// Phase 4: Pregnancy & Prenatal
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Heart, ArrowRight } from 'lucide-react'

export default function Phase4Page() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    maternalAge: '', gravidaPara: '', obPracticeName: '', obPracticeAddress: '', obPracticePhone: '',
    prenatalCareDates: '', mfmSpecialist: '', geneticTesting: '', prenatalImaging: '', complications: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    localStorage.setItem('intake_phase4', JSON.stringify(formData))
    router.push('/intake/phase-5')
  }

  return (
    <div className="card">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-navy-900 mb-2">Pregnancy & Prenatal Care</h1>
        <p className="text-gray-600">Information about the pregnancy and prenatal care.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div><label className="input-label">Maternal Age at Birth</label>
            <input type="number" name="maternalAge" value={formData.maternalAge} onChange={handleChange} className="input-field" min="14" max="60" /></div>
          <div><label className="input-label">Gravida/Para Status</label>
            <input type="text" name="gravidaPara" value={formData.gravidaPara} onChange={handleChange} className="input-field" placeholder="e.g., G2P1" /></div>
        </div>
        <div><label className="input-label">OB/GYN Practice Name</label>
          <input type="text" name="obPracticeName" value={formData.obPracticeName} onChange={handleChange} className="input-field" /></div>
        <div><label className="input-label">Practice Address</label>
          <input type="text" name="obPracticeAddress" value={formData.obPracticeAddress} onChange={handleChange} className="input-field" /></div>
        <div><label className="input-label">Practice Phone</label>
          <input type="tel" name="obPracticePhone" value={formData.obPracticePhone} onChange={handleChange} className="input-field" /></div>
        <div><label className="input-label">MFM Specialist (if any)</label>
          <input type="text" name="mfmSpecialist" value={formData.mfmSpecialist} onChange={handleChange} className="input-field" placeholder="Maternal-Fetal Medicine specialist" /></div>
        <div><label className="input-label">Genetic Testing Performed</label>
          <textarea name="geneticTesting" value={formData.geneticTesting} onChange={handleChange} className="input-field" rows={2} placeholder="List any genetic testing and results" /></div>
        <div><label className="input-label">Prenatal Imaging</label>
          <textarea name="prenatalImaging" value={formData.prenatalImaging} onChange={handleChange} className="input-field" rows={2} placeholder="Ultrasounds, MRIs, etc." /></div>
        <div><label className="input-label">Pregnancy Complications</label>
          <textarea name="complications" value={formData.complications} onChange={handleChange} className="input-field" rows={3} placeholder="Describe any complications during pregnancy" /></div>
        <button type="submit" disabled={loading} className="w-full btn-primary flex items-center justify-center gap-2">
          {loading ? 'Saving...' : <>Continue to Labor & Delivery <ArrowRight className="w-5 h-5" /></>}
        </button>
      </form>
    </div>
  )
}
