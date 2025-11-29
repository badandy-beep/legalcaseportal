'use client'

import { Shield, ArrowLeft, Phone } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const phases = [
  { number: 1, name: 'Account Setup' },
  { number: 2, name: 'Child Information' },
  { number: 3, name: 'Parents/Guardians' },
  { number: 4, name: 'Pregnancy & Prenatal' },
  { number: 5, name: 'Labor & Delivery' },
  { number: 6, name: 'Pediatric Care' },
  { number: 7, name: 'Diagnoses' },
  { number: 8, name: 'Autism Assessment' },
  { number: 9, name: 'Document Upload' },
  { number: 10, name: 'Legal Agreements' },
  { number: 11, name: 'Review & Submit' },
]

export default function IntakeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  
  // Extract current phase from pathname
  const currentPhaseMatch = pathname.match(/phase-(\d+)/)
  const currentPhase = currentPhaseMatch ? parseInt(currentPhaseMatch[1]) : 0
  const progress = currentPhase > 0 ? Math.round((currentPhase / 11) * 100) : 0

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="w-7 h-7 text-teal-600" />
              <span className="text-lg font-bold text-navy-900">LegalCasePortal</span>
            </Link>
            <div className="flex items-center gap-4">
              <a href="tel:1-800-XXX-XXXX" className="hidden sm:flex items-center gap-2 text-gray-600 hover:text-navy-900">
                <Phone className="w-4 h-4" />
                <span className="text-sm">Need Help?</span>
              </a>
              {currentPhase > 1 && (
                <Link 
                  href={`/intake/phase-${currentPhase - 1}`}
                  className="flex items-center gap-1 text-gray-600 hover:text-navy-900"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="text-sm">Back</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar (only show during phases) */}
      {currentPhase > 0 && (
        <div className="bg-white border-b">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Phase {currentPhase} of 11: {phases[currentPhase - 1]?.name}
              </span>
              <span className="text-sm font-medium text-teal-600">{progress}% Complete</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            
            {/* Phase dots (desktop) */}
            <div className="hidden md:flex justify-between mt-4">
              {phases.map((phase) => (
                <div 
                  key={phase.number}
                  className="flex flex-col items-center"
                >
                  <div 
                    className={`w-3 h-3 rounded-full ${
                      phase.number < currentPhase 
                        ? 'bg-teal-600' 
                        : phase.number === currentPhase 
                          ? 'bg-teal-600 ring-4 ring-teal-100' 
                          : 'bg-gray-300'
                    }`}
                  />
                  <span className={`text-xs mt-1 ${
                    phase.number <= currentPhase ? 'text-teal-600 font-medium' : 'text-gray-400'
                  }`}>
                    {phase.number}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t mt-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-teal-600" />
                HIPAA Compliant
              </span>
              <span>•</span>
              <span>256-bit SSL Encryption</span>
            </div>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} LegalCasePortal
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
