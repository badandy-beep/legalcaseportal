'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FileHeart, ArrowRight } from 'lucide-react'

const DIAGNOSES = [
  { id: 'autism', label: 'Autism Spectrum Disorder (F84.0)', icd: 'F84.0' },
  { id: 'hie', label: 'Hypoxic-Ischemic Encephalopathy (P91.60)', icd: 'P91.60' },
  { id: 'cerebralPalsy', label: 'Cerebral Palsy (G80.x)', icd: 'G80' },
  { id: 'intracranialHemorrhage', label: 'Intracranial Hemorrhage (P52.x)', icd: 'P52' },
  { id: 'brachialPlexus', label: "Brachial Plexus Injury / Erb's Palsy (P14.0)", icd: 'P14.0' },
  { id: 'shoulderDystocia', label: 'Shoulder Dystocia (O66.0)', icd: 'O66.0' },
  { id: 'developmentalDelay', label: 'Developmental Delay (F88)', icd: 'F88' },
  { id: 'seizureDisorder', label: 'Seizure Disorder (G40.x)', icd: 'G40' },
  { id: 'coolingTherapy', label: 'Cooling Therapy Received', icd: '' },
  { id: 'intellectualDisability', label: 'Intellectual Disability (F70-F79)', icd: 'F70-F79' },
  { id: 'hearingLoss', label: 'Hearing Loss (H90.x)', icd: 'H90' },
  { id: 'visionImpairment', label: 'Vision Impairment (H54.x)', icd: 'H54' },
  { id: 'speechLanguage', label: 'Speech/Language Disorder (F80.x)', icd: 'F80' },
  { id: 'sensoryProcessing', label: 'Sensory Processing Disorder (F88)', icd: 'F88' },
  { id: 'feedingSwallowing', label: 'Feeding/Swallowing Disorder (R13.x)', icd: 'R13' },
  { id: 'motorDisorders', label: 'Motor Disorders (F82)', icd: 'F82' },
]

export default function Phase7Page() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [diagnoses, setDiagnoses] = useState<Record<string, boolean>>({})
  const [otherDiagnoses, setOtherDiagnoses] = useState('')

  const toggleDiagnosis = (id: string) => {
    setDiagnoses(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    localStorage.setItem('intake_phase7', JSON.stringify({ diagnoses, otherDiagnoses }))
    router.push('/intake/phase-8')
  }

  return (
    <>
      <div className="card">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-alg-navy mb-2">Diagnoses & Injuries</h1>
          <p className="text-gray-700">Select all diagnoses that apply to your child.</p>
        </div>
        <form id="phase-7-form" onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-alg-navy flex items-center gap-2">
              <FileHeart className="w-5 h-5 text-alg-gold" /> Primary Diagnoses
            </h2>
            <p className="text-sm text-gray-700">Check all that apply:</p>
            <div className="grid gap-3">
              {DIAGNOSES.map(dx => (
                <label key={dx.id} className={`flex items-start gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${diagnoses[dx.id] ? 'border-alg-gold bg-alg-gold/10' : 'border-gray-200 hover:border-gray-300'}`}>
                  <input type="checkbox" checked={diagnoses[dx.id] || false} onChange={() => toggleDiagnosis(dx.id)} className="checkbox-custom mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-900">{dx.label}</span>
                    {dx.icd && <span className="text-xs text-gray-700 ml-2">ICD: {dx.icd}</span>}
                  </div>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="input-label">Other Diagnoses</label>
            <textarea value={otherDiagnoses} onChange={(e) => setOtherDiagnoses(e.target.value)} className="input-field" rows={3} placeholder="List any other diagnoses not mentioned above" />
          </div>
        </form>
      </div>

      {/* Sticky Footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 z-10">
        <div className="max-w-2xl mx-auto">
          <button type="submit" form="phase-7-form" disabled={loading} className="w-full btn-primary flex items-center justify-center gap-2">
            {loading ? 'Saving...' : <>Continue to Autism Assessment <ArrowRight className="w-5 h-5" /></>}
          </button>
        </div>
      </div>
    </>
  )
}
