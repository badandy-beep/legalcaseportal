'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle, Edit, Send, User, Baby, Users, Heart, Building2, Stethoscope, FileHeart, Brain, Upload, FileSignature } from 'lucide-react'

const sections = [
  { key: 'phase1', label: 'Account Setup', icon: User, phase: 1 },
  { key: 'phase2', label: 'Child Information', icon: Baby, phase: 2 },
  { key: 'phase3', label: 'Parents/Guardians', icon: Users, phase: 3 },
  { key: 'phase4', label: 'Pregnancy & Prenatal', icon: Heart, phase: 4 },
  { key: 'phase5', label: 'Labor & Delivery', icon: Building2, phase: 5 },
  { key: 'phase6', label: 'Pediatric Care', icon: Stethoscope, phase: 6 },
  { key: 'phase7', label: 'Diagnoses', icon: FileHeart, phase: 7 },
  { key: 'phase8', label: 'Autism Assessment', icon: Brain, phase: 8 },
  { key: 'phase9', label: 'Documents', icon: Upload, phase: 9 },
  { key: 'phase10', label: 'Legal Agreements', icon: FileSignature, phase: 10 },
]

export default function Phase11Page() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [data, setData] = useState<Record<string, any>>({})
  const [completedSections, setCompletedSections] = useState<string[]>([])

  useEffect(() => {
    const loadedData: Record<string, any> = {}
    const completed: string[] = []

    sections.forEach(section => {
      const key = `intake_${section.key}`
      const saved = localStorage.getItem(key)
      if (saved) {
        loadedData[section.key] = JSON.parse(saved)
        completed.push(section.key)
      }
    })

    setData(loadedData)
    setCompletedSections(completed)
  }, [])

  const handleSubmit = async () => {
    setLoading(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))

      sections.forEach(section => {
        localStorage.removeItem(`intake_${section.key}`)
      })

      router.push('/intake/complete')
    } catch (error) {
      console.error('Submit error:', error)
      setLoading(false)
    }
  }

  return (
    <>
      <div className="card">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-alg-navy mb-2">Review & Submit</h1>
          <p className="text-gray-600">Review your information before submitting your case evaluation.</p>
        </div>

        {/* Section Summary */}
        <div className="space-y-3 mb-8">
          {sections.map(section => {
            const isComplete = completedSections.includes(section.key)
            const Icon = section.icon

            return (
              <div key={section.key} className={`flex items-center justify-between p-4 rounded-lg border-2 ${isComplete ? 'border-alg-gold/30 bg-alg-gold/10' : 'border-gray-200 bg-gray-50'}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isComplete ? 'bg-alg-gold text-white' : 'bg-gray-300 text-gray-600'}`}>
                    {isComplete ? <CheckCircle className="w-5 h-5" /> : <Icon className="w-4 h-4" />}
                  </div>
                  <div>
                    <span className={`font-medium ${isComplete ? 'text-alg-navy' : 'text-gray-600'}`}>{section.label}</span>
                    {isComplete && data[section.key] && (
                      <p className="text-xs text-alg-gold">
                        {section.key === 'phase1' && data.phase1?.fullName && `${data.phase1.fullName}`}
                        {section.key === 'phase2' && data.phase2?.[0]?.fullName && `${data.phase2[0].fullName}`}
                        {section.key === 'phase7' && data.phase7?.diagnoses && `${Object.values(data.phase7.diagnoses).filter(Boolean).length} diagnoses selected`}
                        {section.key === 'phase9' && `${Object.values(data.phase9 || {}).flat().length} documents uploaded`}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => router.push(`/intake/phase-${section.phase}`)}
                  className="text-alg-gold hover:text-alg-gold flex items-center gap-1 text-sm"
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
              </div>
            )
          })}
        </div>

        {/* Data Summary Preview */}
        {data.phase1 && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-alg-navy mb-3">Case Summary</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Client:</span>
                <p className="font-medium">{data.phase1.fullName}</p>
              </div>
              <div>
                <span className="text-gray-500">Email:</span>
                <p className="font-medium">{data.phase1.email}</p>
              </div>
              {data.phase2?.[0] && (
                <>
                  <div>
                    <span className="text-gray-500">Child:</span>
                    <p className="font-medium">{data.phase2[0].fullName}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Child DOB:</span>
                    <p className="font-medium">{data.phase2[0].dateOfBirth}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Important Notice */}
        <div className="bg-alg-gray-light border border-alg-gray-border rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-alg-navy mb-2">What Happens Next</h3>
          <ul className="text-sm text-alg-navy space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-alg-gold mt-0.5" />
              Your case will be assigned a unique case number
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-alg-gold mt-0.5" />
              You'll receive a confirmation email with login details
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-alg-gold mt-0.5" />
              Our team will review your case within 48 hours
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-alg-gold mt-0.5" />
              If eligible, you'll be connected with specialized legal counsel
            </li>
          </ul>
        </div>

        <p className="text-xs text-gray-500 text-center">
          By submitting, you confirm all information is accurate and agree to the terms of service.
        </p>
      </div>

      {/* Sticky Footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 z-10">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-alg-gold hover:bg-alg-gold-light disabled:bg-gray-400 text-alg-navy font-bold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-lg"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-alg-navy border-t-transparent rounded-full animate-spin" />
                Submitting Your Case...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Submit Case Evaluation
              </>
            )}
          </button>
        </div>
      </div>
    </>
  )
}
