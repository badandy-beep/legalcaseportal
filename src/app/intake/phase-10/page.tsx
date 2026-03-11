'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import QuestionScreen from '../components/QuestionScreen'

const hipaaFullText = `Notice of Privacy Practices

This notice describes how medical information about your child may be used and disclosed and how you can get access to this information. Please review it carefully.

Your Rights: You have the right to request restrictions on certain uses and disclosures of protected health information (PHI). You have the right to receive confidential communications. You have the right to inspect and obtain a copy of your child's PHI. You have the right to request amendments to PHI. You have the right to receive an accounting of disclosures of PHI.

How We Use Your Information: Alpha Law Group, PLLC will use your child's PHI solely for the purpose of evaluating, preparing, and pursuing a legal claim under the National Vaccine Injury Compensation Program (VICP). Information may be shared with medical experts, co-counsel, and the U.S. Court of Federal Claims as necessary to advance your case.

Revocation: You may revoke this authorization at any time by submitting a written request to Alpha Law Group, PLLC. Revocation will not affect any actions already taken in reliance on this authorization. This authorization expires upon resolution of any claim or 10 years from the date of signing, whichever occurs first.

No Conditioning: Treatment, payment, enrollment, or eligibility for benefits will not be conditioned on whether you sign this authorization.

Re-disclosure: Information disclosed pursuant to this authorization may be subject to re-disclosure by the recipient and may no longer be protected by HIPAA.`

export default function Phase10Page() {
  const router = useRouter()
  const [showFullText, setShowFullText] = useState(false)

  function handleContinue() {
    localStorage.setItem(
      'intake_phase10',
      JSON.stringify({
        consentsAcknowledged: true,
        signedAt: new Date().toISOString(),
      })
    )
    router.push('/intake/phase-11')
  }

  function handleBack() {
    router.push('/intake/phase-9')
  }

  return (
    <QuestionScreen
      phase="10 of 11"
      phaseTitle="Almost done."
      question="Before you sign, here's exactly what you're agreeing to."
      tipText="I wrote this summary myself so you don't have to read legal boilerplate. Nothing here is a surprise. You're in control."
      onContinue={handleContinue}
      onBack={handleBack}
      showBack={true}
      continueLabel="I Understand — Continue to Sign →"
    >
      {/* Plain English Summary */}
      <div className="bg-green-50 border border-green-200 rounded-2xl p-4 space-y-3">
        {[
          'Alpha Law Group may review your submitted case information',
          'We may request your child\'s medical and vaccination records',
          'Your information is HIPAA-protected and never sold or shared',
          'This does NOT create an attorney-client relationship yet',
          'There are zero fees of any kind — ever',
        ].map((item) => (
          <div key={item} className="flex items-start gap-2.5">
            <span className="text-green-600 text-base mt-0.5">&#10003;</span>
            <p className="text-sm text-green-900">{item}</p>
          </div>
        ))}
      </div>

      {/* Full legal text toggle */}
      <button
        onClick={() => setShowFullText(!showFullText)}
        className="mt-4 text-sm text-gray-500 underline cursor-pointer"
      >
        {showFullText ? 'Hide full legal text' : 'Read full legal text'}
      </button>
      {showFullText && (
        <div className="mt-2 max-h-40 overflow-y-auto border border-gray-200 rounded-xl p-3 bg-gray-50">
          <p className="text-xs text-gray-500 whitespace-pre-line leading-relaxed">
            {hipaaFullText}
          </p>
        </div>
      )}
    </QuestionScreen>
  )
}
