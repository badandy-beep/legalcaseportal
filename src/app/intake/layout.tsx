'use client'

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
    <div className="flex flex-col h-screen overflow-hidden bg-gray-50">
      {/* Header */}
      <header className="bg-alg-navy z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <div className="font-extrabold text-white tracking-widest">ALPHA LAW GROUP</div>
              <div className="text-alg-gold text-xs font-medium">Justice for Autism Initiative</div>
            </div>
            <div className="text-right">
              <div className="text-white/50 text-xs italic">Powered by LegalCasePortal™</div>
              <a href="tel:9413041500" className="text-alg-gold text-xs font-semibold">(941) 304-1500</a>
            </div>
          </div>
        </div>
      </header>
      {/* Gold accent stripe */}
      <div className="h-[2px] bg-alg-gold" />

      {/* Progress Bar (only show during phases) */}
      {currentPhase > 0 && (
        <div className="sticky top-[66px] z-10 bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Phase {currentPhase} of 11: {phases[currentPhase - 1]?.name}
              </span>
              <span className="text-sm font-medium text-alg-gold">{progress}% Complete</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>

            {/* Phase dots (desktop) */}
            <div className="hidden md:flex justify-between mt-3">
              {phases.map((phase) => (
                <div
                  key={phase.number}
                  className="flex flex-col items-center"
                >
                  <div
                    className={`w-3 h-3 rounded-full ${
                      phase.number < currentPhase
                        ? 'bg-alg-gold'
                        : phase.number === currentPhase
                          ? 'bg-alg-gold ring-4 ring-alg-gold-light/30'
                          : 'bg-gray-300'
                    }`}
                  />
                  <span className={`text-xs mt-1 ${
                    phase.number <= currentPhase ? 'text-alg-gold font-medium' : 'text-gray-400'
                  }`}>
                    {phase.number}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto px-4 py-6 pb-24">
        <div className="max-w-2xl mx-auto w-full">
          {children}
        </div>

        {/* Footer */}
        <footer className="mt-16 pb-8 px-4">
          <p className="text-sm text-gray-500 text-center">
            Alpha Law Group, PLLC | Justice for Autism Initiative | Sarasota, Florida | (941) 304-1500
          </p>
          <p className="text-xs text-gray-400 text-center max-w-4xl mx-auto mt-2">
            ATTORNEY ADVERTISING: Completion of this intake form does not create an attorney-client relationship. No legal advice is provided herein. Alpha Law Group represents clients on a contingency fee basis — no fees charged unless a recovery is obtained. VICP NOTICE: Strict filing deadlines apply. Contact an attorney immediately to protect your rights. PRIVACY: All information submitted is confidential and subject to attorney-client privilege.
          </p>
          <p className="text-xs text-gray-300 text-center mt-2">
            &copy; 2026 Alpha Law Group, PLLC. All Rights Reserved. | Powered by LegalCasePortal&trade; &mdash; A Noetic Dharma Group Technology
          </p>
        </footer>
      </main>
    </div>
  )
}
