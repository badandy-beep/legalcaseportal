import Link from 'next/link'
import { CheckCircle, Mail, Phone, FileText, ArrowRight } from 'lucide-react'

export default function IntakeCompletePage() {
  // In production, case number would come from the database
  const caseNumber = `AJF-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 999999)).padStart(6, '0')}`

  return (
    <div className="max-w-2xl mx-auto text-center">
      {/* Success Animation */}
      <div className="mb-8">
        <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
          <CheckCircle className="w-14 h-14 text-teal-600" />
        </div>
        <h1 className="text-3xl font-bold text-navy-900 mb-3">
          Case Submitted Successfully!
        </h1>
        <p className="text-xl text-gray-600">
          Thank you for completing your case evaluation.
        </p>
      </div>

      {/* Case Number Card */}
      <div className="card mb-8">
        <div className="bg-navy-50 rounded-lg p-6 mb-6">
          <p className="text-sm text-navy-600 mb-1">Your Case Number</p>
          <p className="text-3xl font-bold text-navy-900 font-mono">{caseNumber}</p>
          <p className="text-sm text-navy-600 mt-2">Save this number for your records</p>
        </div>

        <div className="space-y-4 text-left">
          <h3 className="font-semibold text-navy-900">What Happens Next</h3>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-teal-600 font-bold text-sm">1</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">Confirmation Email</p>
              <p className="text-sm text-gray-600">You'll receive an email with your case details and login credentials within the next few minutes.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-teal-600 font-bold text-sm">2</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">Case Review (48 Hours)</p>
              <p className="text-sm text-gray-600">Our team will carefully review your case and all submitted documentation.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-teal-600 font-bold text-sm">3</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">Legal Match</p>
              <p className="text-sm text-gray-600">If your case qualifies, we'll connect you with an experienced vaccine injury attorney.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-teal-600 font-bold text-sm">4</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">File Your Claim</p>
              <p className="text-sm text-gray-600">Your attorney will guide you through filing your NVICP claim at no upfront cost.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Actions */}
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <div className="card">
          <Mail className="w-8 h-8 text-teal-600 mx-auto mb-2" />
          <p className="text-sm text-gray-600">Check your email for confirmation</p>
        </div>
        <div className="card">
          <FileText className="w-8 h-8 text-teal-600 mx-auto mb-2" />
          <p className="text-sm text-gray-600">Login to upload additional documents</p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-gray-100 rounded-lg p-6 mb-8">
        <h3 className="font-semibold text-navy-900 mb-3">Questions?</h3>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:1-800-XXX-XXXX" className="flex items-center justify-center gap-2 text-teal-600 hover:text-teal-700">
            <Phone className="w-4 h-4" />
            1-800-XXX-XXXX
          </a>
          <a href="mailto:support@legalcaseportal.com" className="flex items-center justify-center gap-2 text-teal-600 hover:text-teal-700">
            <Mail className="w-4 h-4" />
            support@legalcaseportal.com
          </a>
        </div>
      </div>

      <Link href="/" className="btn-secondary inline-flex items-center gap-2">
        Return to Home
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}
