'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ShieldCheck, ArrowRight } from 'lucide-react'

export default function Phase10Page() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [consents, setConsents] = useState({
    hipaa: false,
    medicalRecords: false,
    contactAuth: false,
    noRelationship: false,
    accuracy: false,
  })

  const allChecked = Object.values(consents).every(Boolean)

  const toggle = (key: keyof typeof consents) => {
    setConsents(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!allChecked) return
    setLoading(true)
    localStorage.setItem('intake_phase10', JSON.stringify({
      consents,
      signedAt: new Date().toISOString(),
      ipAddress: 'captured-server-side',
    }))
    router.push('/intake/phase-11')
  }

  return (
    <>
      <div className="card">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-alg-navy mb-2">Consents &amp; Releases</h1>
          <p className="text-gray-600">Please review and authorize each section below to proceed.</p>
        </div>

        <form id="phase-10-form" onSubmit={handleSubmit} className="space-y-6">
          {/* Section A — HIPAA */}
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-alg-navy mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-alg-gold" />
              HIPAA Authorization for Release of Health Information
            </h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              By checking this box, you authorize Alpha Law Group, PLLC to obtain, review, and use
              your child&rsquo;s protected health information &mdash; including medical records, vaccine
              records, and diagnostic reports &mdash; solely for the purpose of evaluating and pursuing
              your legal claim under the National Vaccine Injury Compensation Program.
            </p>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={consents.hipaa} onChange={() => toggle('hipaa')} className="checkbox-custom mt-1" />
              <span className="text-sm font-medium">I authorize Alpha Law Group to obtain my child&rsquo;s protected health information</span>
            </label>
          </div>

          {/* Section B — Medical Records */}
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-alg-navy mb-2">Medical Records Release Authorization</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              You authorize treating physicians, hospitals, laboratories, and healthcare providers to
              release records pertaining to your child&rsquo;s care, treatment, and diagnosis to Alpha
              Law Group, PLLC and its authorized agents.
            </p>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={consents.medicalRecords} onChange={() => toggle('medicalRecords')} className="checkbox-custom mt-1" />
              <span className="text-sm font-medium">I authorize release of all relevant medical records</span>
            </label>
          </div>

          {/* Section C — Contact Authorization */}
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-alg-navy mb-2">Authorization to Contact</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              You authorize Alpha Law Group, PLLC to contact you via phone, email, and text message
              regarding your case evaluation. Standard message rates may apply.
            </p>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={consents.contactAuth} onChange={() => toggle('contactAuth')} className="checkbox-custom mt-1" />
              <span className="text-sm font-medium">I authorize Alpha Law Group to contact me regarding my case</span>
            </label>
          </div>

          {/* Section D — Terms Acknowledgment */}
          <div className="border border-gray-200 rounded-lg p-5 space-y-4">
            <h3 className="font-semibold text-alg-navy mb-2">Terms Acknowledgment</h3>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={consents.noRelationship} onChange={() => toggle('noRelationship')} className="checkbox-custom mt-1" />
              <span className="text-sm">I understand that submitting this form does not create an attorney-client relationship and that Alpha Law Group will review my information to determine eligibility</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={consents.accuracy} onChange={() => toggle('accuracy')} className="checkbox-custom mt-1" />
              <span className="text-sm">I confirm all information provided is truthful and accurate to the best of my knowledge</span>
            </label>
          </div>

          {/* Legal Notices (expandable) */}
          <details className="border border-gray-200 rounded-lg">
            <summary className="cursor-pointer px-5 py-3 text-sm font-medium text-alg-navy hover:bg-gray-50 rounded-lg">
              View Full HIPAA Notice &amp; Privacy Practices
            </summary>
            <div className="px-5 pb-5 text-xs text-gray-600 leading-relaxed space-y-3 border-t border-gray-100 pt-4">
              <p><strong>Notice of Privacy Practices</strong></p>
              <p>
                This notice describes how medical information about your child may be used and disclosed
                and how you can get access to this information. Please review it carefully.
              </p>
              <p><strong>Your Rights:</strong> You have the right to request restrictions on certain uses
                and disclosures of protected health information (PHI). You have the right to receive
                confidential communications. You have the right to inspect and obtain a copy of your
                child&rsquo;s PHI. You have the right to request amendments to PHI. You have the right
                to receive an accounting of disclosures of PHI.</p>
              <p><strong>How We Use Your Information:</strong> Alpha Law Group, PLLC will use your
                child&rsquo;s PHI solely for the purpose of evaluating, preparing, and pursuing a legal
                claim under the National Vaccine Injury Compensation Program (VICP). Information may be
                shared with medical experts, co-counsel, and the U.S. Court of Federal Claims as
                necessary to advance your case.</p>
              <p><strong>Revocation:</strong> You may revoke this authorization at any time by submitting
                a written request to Alpha Law Group, PLLC. Revocation will not affect any actions
                already taken in reliance on this authorization. This authorization expires upon
                resolution of any claim or 10 years from the date of signing, whichever occurs first.</p>
              <p><strong>No Conditioning:</strong> Treatment, payment, enrollment, or eligibility for
                benefits will not be conditioned on whether you sign this authorization.</p>
              <p><strong>Re-disclosure:</strong> Information disclosed pursuant to this authorization may
                be subject to re-disclosure by the recipient and may no longer be protected by HIPAA.</p>
            </div>
          </details>
        </form>
      </div>

      {/* Sticky Footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 z-10">
        <div className="max-w-2xl mx-auto">
          <button
            type="submit"
            form="phase-10-form"
            disabled={loading || !allChecked}
            className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Saving...' : (
              <>
                Continue to Review &amp; Submit
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
          {!allChecked && (
            <p className="text-xs text-gray-400 text-center mt-2">All authorizations must be checked to continue</p>
          )}
        </div>
      </div>
    </>
  )
}
