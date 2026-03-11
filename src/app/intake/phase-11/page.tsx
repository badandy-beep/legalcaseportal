'use client'
import { useState, useEffect, useRef } from 'react'
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
  { key: 'phase10', label: 'Consents & Releases', icon: FileSignature, phase: 10 },
]

export default function Phase11Page() {
  const router = useRouter()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Record<string, any>>({})
  const [completedSections, setCompletedSections] = useState<string[]>([])

  // Signature state
  const [isDrawing, setIsDrawing] = useState(false)
  const [hasSignature, setHasSignature] = useState(false)
  const [signedName, setSignedName] = useState('')

  const canSign = hasSignature || signedName.trim().length > 0

  useEffect(() => {
    const loadedData: Record<string, any> = {}
    const completed: string[] = []
    sections.forEach(section => {
      const saved = localStorage.getItem(`intake_${section.key}`)
      if (saved) {
        loadedData[section.key] = JSON.parse(saved)
        completed.push(section.key)
      }
    })
    setData(loadedData)
    setCompletedSections(completed)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.strokeStyle = '#0a1628'
        ctx.lineWidth = 2
        ctx.lineCap = 'round'
      }
    }
  }, [])

  const getPos = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current!
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    if ('touches' in e) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY,
      }
    }
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    }
  }

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true)
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) return
    const { x, y } = getPos(e)
    ctx.beginPath()
    ctx.moveTo(x, y)
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) return
    const { x, y } = getPos(e)
    ctx.lineTo(x, y)
    ctx.stroke()
    setHasSignature(true)
  }

  const stopDrawing = () => setIsDrawing(false)

  const clearSignature = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    setHasSignature(false)
  }

  const handleSubmit = async () => {
    if (!canSign) return
    setLoading(true)

    try {
      // Save signature data
      const signatureData = canvasRef.current?.toDataURL()
      localStorage.setItem('intake_phase11', JSON.stringify({
        signedName,
        signatureData: hasSignature ? signatureData : null,
        signedAt: new Date().toISOString(),
        ipAddress: 'captured-server-side',
      }))

      await new Promise(resolve => setTimeout(resolve, 2000))

      sections.forEach(section => {
        localStorage.removeItem(`intake_${section.key}`)
      })
      localStorage.removeItem('intake_phase11')

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
          <h1 className="text-2xl font-bold text-alg-navy mb-2">Review &amp; Submit</h1>
          <p className="text-gray-700">Review your information, sign, and submit your case evaluation.</p>
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
                    <span className={`font-medium ${isComplete ? 'text-alg-navy' : 'text-gray-700'}`}>{section.label}</span>
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
                <span className="text-gray-700">Client:</span>
                <p className="font-medium">{data.phase1.fullName}</p>
              </div>
              <div>
                <span className="text-gray-700">Email:</span>
                <p className="font-medium">{data.phase1.email}</p>
              </div>
              {data.phase2?.[0] && (
                <>
                  <div>
                    <span className="text-gray-700">Child:</span>
                    <p className="font-medium">{data.phase2[0].fullName}</p>
                  </div>
                  <div>
                    <span className="text-gray-700">Child DOB:</span>
                    <p className="font-medium">{data.phase2[0].dateOfBirth}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Digital Signature Section */}
        <div className="border-2 border-alg-gray-border rounded-lg p-5 bg-alg-gray-light mb-6">
          <h3 className="font-semibold text-alg-navy mb-1 flex items-center gap-2">
            <FileSignature className="w-5 h-5 text-alg-gold" />
            Digital Signature
          </h3>
          <p className="text-sm text-gray-700 mb-4">
            By signing below, you confirm all information is accurate and authorize Alpha Law Group to proceed with your case evaluation.
          </p>

          {/* Signature Canvas */}
          <div className="mb-3">
            <label className="input-label">Sign in the box below using your mouse or finger</label>
            <div className="relative mt-1">
              <canvas
                ref={canvasRef}
                width={600}
                height={150}
                className="w-full border border-gray-300 rounded-lg bg-white cursor-crosshair touch-none"
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
              />
              {!hasSignature && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-gray-300 text-lg">Sign here</span>
                </div>
              )}
            </div>
            {hasSignature && (
              <button type="button" onClick={clearSignature} className="mt-1 text-sm text-gray-600 underline hover:text-gray-800">
                Clear Signature
              </button>
            )}
          </div>

          {/* Typed Name */}
          <div className="mb-3">
            <label className="input-label">Type your full legal name</label>
            <input
              type="text"
              value={signedName}
              onChange={(e) => setSignedName(e.target.value)}
              className="input-field"
              placeholder="Enter your full legal name exactly as it appears on ID"
            />
          </div>

          {/* Timestamp */}
          <p className="text-gray-600 text-xs">
            Signing date: {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          {canSign && (
            <div className="mt-3 flex items-center gap-2 text-alg-gold">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Signature ready</span>
            </div>
          )}
        </div>

        {/* What Happens Next */}
        <div className="bg-alg-gray-light border border-alg-gray-border rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-alg-navy mb-2">What Happens Next</h3>
          <ul className="text-sm text-alg-navy space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-alg-gold mt-0.5" />
              Your case will be assigned a unique case number
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-alg-gold mt-0.5" />
              You&rsquo;ll receive a confirmation email with login details
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-alg-gold mt-0.5" />
              Alex&rsquo;s team will review your case within 24 hours
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-alg-gold mt-0.5" />
              If eligible, you&rsquo;ll be connected with specialized legal counsel
            </li>
          </ul>
        </div>

        <p className="text-xs text-gray-700 text-center">
          By submitting, you confirm all information is accurate and agree to the terms of service.
        </p>
      </div>

      {/* Sticky Footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 z-10">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={handleSubmit}
            disabled={loading || !canSign}
            className="w-full bg-alg-gold hover:bg-alg-gold-light disabled:bg-gray-400 disabled:cursor-not-allowed text-alg-navy font-bold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-lg"
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
          {!canSign && (
            <p className="text-xs text-gray-600 text-center mt-2">Please sign above or type your name to submit</p>
          )}
        </div>
      </div>

      {/* Closing Message */}
      <div className="text-center mt-8 p-6 bg-alg-navy rounded-xl text-white">
        <h3 className="text-xl font-bold mb-3">What Happens Next</h3>
        <p className="text-white/80 text-sm leading-relaxed mb-4">
          The Kompothecras family has been fighting for families like yours for nearly two decades.
          Alex&rsquo;s team will review your submission within 24 hours and contact you to discuss
          next steps &mdash; at no cost to you.
        </p>
        <p className="text-alg-gold font-bold text-xl mb-2">(941) 304-1500</p>
        <p className="text-white/50 text-sm">alphainjurylaw.com | justiceforautism.org</p>
      </div>
    </>
  )
}
