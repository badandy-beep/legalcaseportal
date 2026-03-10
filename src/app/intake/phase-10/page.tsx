'use client'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FileSignature, ArrowRight, CheckCircle } from 'lucide-react'

export default function Phase10Page() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [hasSignature, setHasSignature] = useState(false)
  const [agreements, setAgreements] = useState({
    hipaaConsent: false,
    retainerAgreement: false,
    accuracyAttestation: false,
    electronicSignature: false,
  })
  const [signedName, setSignedName] = useState('')

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.strokeStyle = '#1D3557'
        ctx.lineWidth = 2
        ctx.lineCap = 'round'
      }
    }
  }, [])

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true)
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const rect = canvas.getBoundingClientRect()
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top
    ctx.beginPath()
    ctx.moveTo(x, y)
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const rect = canvas.getBoundingClientRect()
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top
    ctx.lineTo(x, y)
    ctx.stroke()
    setHasSignature(true)
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  const clearSignature = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    setHasSignature(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const signatureData = canvasRef.current?.toDataURL()
    localStorage.setItem('intake_phase10', JSON.stringify({
      agreements,
      signedName,
      signatureData,
      signedAt: new Date().toISOString(),
      ipAddress: 'captured-server-side'
    }))
    router.push('/intake/phase-11')
  }

  return (
    <div className="card">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-navy-900 mb-2">Legal Agreements</h1>
        <p className="text-gray-600">Please review and sign the required legal documents.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* HIPAA Authorization */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-navy-900 mb-2">HIPAA Authorization</h3>
          <div className="bg-gray-50 rounded p-3 mb-3 max-h-40 overflow-y-auto text-sm text-gray-700">
            <p className="mb-2">I hereby authorize the release of my child's protected health information (PHI) to LegalCasePortal and affiliated legal counsel for the purpose of evaluating and pursuing a potential claim under the National Vaccine Injury Compensation Program (NVICP).</p>
            <p className="mb-2">This authorization includes: Medical records, vaccination records, diagnostic evaluations, therapy notes, hospital records, and any other health information relevant to evaluating the potential claim.</p>
            <p>I understand that I may revoke this authorization at any time by submitting a written request. This authorization expires upon resolution of any claim or 10 years from signing, whichever occurs first.</p>
          </div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" checked={agreements.hipaaConsent} onChange={(e) => setAgreements(p => ({...p, hipaaConsent: e.target.checked}))} className="checkbox-custom mt-1" />
            <span className="text-sm">I have read and agree to the HIPAA Authorization</span>
          </label>
        </div>

        {/* Retainer Agreement */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-navy-900 mb-2">Retainer Agreement Understanding</h3>
          <div className="bg-gray-50 rounded p-3 mb-3 max-h-40 overflow-y-auto text-sm text-gray-700">
            <p className="mb-2">I understand that by completing this intake form, I am seeking legal representation for a potential NVICP claim. If my case is accepted, I will enter into a formal retainer agreement with the assigned attorney.</p>
            <p className="mb-2">I understand that attorney fees in NVICP cases are typically paid by the Vaccine Injury Compensation Trust Fund, separate from any compensation I may receive.</p>
            <p>The standard contingency arrangement is one-third (1/3) of any recovery. However, in NVICP cases, attorney fees are often paid directly by the fund and do not reduce my award.</p>
          </div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" checked={agreements.retainerAgreement} onChange={(e) => setAgreements(p => ({...p, retainerAgreement: e.target.checked}))} className="checkbox-custom mt-1" />
            <span className="text-sm">I understand the retainer agreement terms</span>
          </label>
        </div>

        {/* Accuracy Attestation */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-navy-900 mb-2">Accuracy Attestation</h3>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" checked={agreements.accuracyAttestation} onChange={(e) => setAgreements(p => ({...p, accuracyAttestation: e.target.checked}))} className="checkbox-custom mt-1" />
            <span className="text-sm">I attest that all information provided in this intake form is true and accurate to the best of my knowledge. I understand that providing false information may impact my case.</span>
          </label>
        </div>

        {/* Electronic Signature Consent */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-navy-900 mb-2">Electronic Signature Consent</h3>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" checked={agreements.electronicSignature} onChange={(e) => setAgreements(p => ({...p, electronicSignature: e.target.checked}))} className="checkbox-custom mt-1" />
            <span className="text-sm">I consent to using electronic signatures pursuant to the E-SIGN Act (15 U.S.C. § 7001 et seq.) and agree that my electronic signature below has the same legal effect as a handwritten signature.</span>
          </label>
        </div>

        {/* Digital Signature Capture */}
        <div className="border-2 border-navy-200 rounded-lg p-4 bg-navy-50">
          <h3 className="font-semibold text-navy-900 mb-3 flex items-center gap-2">
            <FileSignature className="w-5 h-5 text-teal-600" />
            Digital Signature
          </h3>
          
          <div className="mb-4">
            <label className="input-label">Type Your Full Legal Name</label>
            <input
              type="text"
              value={signedName}
              onChange={(e) => setSignedName(e.target.value)}
              className="input-field"
              placeholder="Enter your full legal name exactly as it appears on ID"
            />
          </div>

          <div className="mb-2">
            <label className="input-label">Sign Below</label>
            <p className="text-xs text-gray-500 mb-2">Use your mouse or finger to sign</p>
          </div>
          
          <div className="relative">
            <canvas
              ref={canvasRef}
              width={500}
              height={150}
              className="w-full border-2 border-dashed border-gray-300 rounded-lg bg-white cursor-crosshair touch-none"
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
                <span className="text-gray-400">Sign here</span>
              </div>
            )}
          </div>
          
          <button type="button" onClick={clearSignature} className="mt-2 text-sm text-coral-600 hover:text-coral-700">
            Clear Signature
          </button>

          {hasSignature && signedName && (
            <div className="mt-3 flex items-center gap-2 text-teal-600">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">Signature captured</span>
            </div>
          )}
        </div>

        {/* Timestamp Notice */}
        <div className="bg-gray-100 rounded-lg p-3 text-xs text-gray-600">
          <p>Your signature will be recorded with timestamp and IP address for legal verification purposes.</p>
          <p className="mt-1">Date: {new Date().toLocaleDateString()} | Time: {new Date().toLocaleTimeString()}</p>
        </div>

        <button type="submit" disabled={loading} className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
          {loading ? 'Saving...' : <>Continue to Review & Submit <ArrowRight className="w-5 h-5" /></>}
        </button>
      </form>
    </div>
  )
}
