import Link from 'next/link'
import { Clock, Shield, FileText, CheckCircle, ArrowRight, Lock } from 'lucide-react'

export default function IntakeStartPage() {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Welcome Card */}
      <div className="card mb-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-alg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-alg-gold" />
          </div>
          <h1 className="text-3xl font-bold text-alg-navy mb-2">
            Free Case Evaluation
          </h1>
          <p className="text-gray-600">
            Begin your confidential intake. This information helps us evaluate your potential case.
          </p>
        </div>

        {/* What to Expect */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="font-semibold text-alg-navy mb-4">What to Expect</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-alg-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">15-20 minutes to complete</p>
                <p className="text-sm text-gray-600">You can save and continue later</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-alg-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">100% Confidential & Secure</p>
                <p className="text-sm text-gray-600">HIPAA compliant, encrypted data</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-alg-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Gather these if available</p>
                <p className="text-sm text-gray-600">Birth certificate, vaccination records, diagnosis reports</p>
              </div>
            </div>
          </div>
        </div>

        {/* 11 Phases Overview */}
        <div className="mb-8">
          <h2 className="font-semibold text-alg-navy mb-4">Intake Phases</h2>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {[
              '1. Account Setup',
              '2. Child Information',
              '3. Parents/Guardians',
              '4. Pregnancy & Prenatal',
              '5. Labor & Delivery',
              '6. Pediatric Care',
              '7. Diagnoses',
              '8. Autism Assessment',
              '9. Document Upload',
              '10. Legal Agreements',
              '11. Review & Submit'
            ].map((phase, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 rounded-full bg-alg-gold" />
                {phase}
              </div>
            ))}
          </div>
        </div>

        {/* Start Button */}
        <Link 
          href="/intake/phase-1"
          className="w-full btn-primary flex items-center justify-center gap-2 text-lg py-4"
        >
          Begin Case Evaluation
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Trust Indicators */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <Lock className="w-6 h-6 text-alg-gold mx-auto mb-2" />
          <p className="text-xs text-gray-600">256-bit SSL</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <Shield className="w-6 h-6 text-alg-gold mx-auto mb-2" />
          <p className="text-xs text-gray-600">HIPAA Compliant</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <CheckCircle className="w-6 h-6 text-alg-gold mx-auto mb-2" />
          <p className="text-xs text-gray-600">No Obligation</p>
        </div>
      </div>
    </div>
  )
}
