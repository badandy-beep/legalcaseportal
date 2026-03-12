'use client'

import { useState } from 'react'
import Link from 'next/link'

interface QuestionScreenProps {
  phase: string
  phaseTitle: string
  question: string
  tipText: string
  children: React.ReactNode
  onContinue: () => void
  onBack?: () => void
  showBack: boolean
  continueLabel?: string
  continueStyle?: string
  stepIndex?: number
}

export default function QuestionScreen({
  phase,
  phaseTitle,
  question,
  tipText,
  children,
  onContinue,
  onBack,
  showBack,
  continueLabel,
  continueStyle,
  stepIndex = 0,
}: QuestionScreenProps) {
  const [tipOpen, setTipOpen] = useState(false)

  const phaseNum = parseInt(phase.split(' ')[0]) || 1
  const progressPct = Math.round((phaseNum / 11) * 100)

  const isAlex = (phaseNum + stepIndex) % 2 === 0
  const advisorName = isAlex ? 'ALEX' : 'CHASE'
  const advisorPhoto = isAlex ? '/Alex-Kompothecras.webp' : '/Chase-Engelbrecht.webp'

  return (
    <div className="fixed inset-0 flex flex-col bg-white">
      {/* Nav bar */}
      <nav className="bg-white h-14 flex items-center justify-between px-4 shrink-0 border-b border-[#E2E8F0]">
        <Link href="/">
          <img src="/alg-logo.png" alt="Alpha Law Group" className="h-8 w-auto" />
        </Link>
        <span className="inline-flex items-center gap-1.5 bg-[#fdf8ee] text-[#0a1628] text-xs font-bold px-3 py-1 rounded-full">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          FREE &amp; CONFIDENTIAL
        </span>
      </nav>

      {/* Progress bar strip */}
      <div className="bg-gray-50 border-b border-gray-100 px-4 py-2.5 shrink-0">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
            Phase {phase}
          </span>
          <span className="text-xs text-[#0a1628] font-semibold cursor-pointer">
            Save &amp; Continue Later
          </span>
        </div>
        <div className="h-[5px] bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${progressPct}%`,
              background: 'linear-gradient(to right, #0a1628, #d4a843)',
            }}
          />
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 pt-6 pb-32">
        <p className="text-xs font-bold uppercase tracking-widest text-[#0a1628] mb-1">
          {phaseTitle}
        </p>
        <h1 className="text-xl font-black text-[#111827] leading-tight mb-5">
          {question}
        </h1>

        {/* Expert Tip */}
        <div className="mb-5">
          <div className="flex items-center gap-3">
            <img
              src={advisorPhoto}
              alt={advisorName}
              className="w-[38px] h-[38px] rounded-full border-2 border-[#0a1628] object-cover shrink-0"
            />
            <div>
              <p className="text-xs font-bold text-gray-500">{advisorName} — Alpha Law Group</p>
              <button
                onClick={() => setTipOpen(!tipOpen)}
                className="text-xs font-semibold text-[#0a1628] underline cursor-pointer"
              >
                {tipOpen ? 'Hide tip ↑' : `Tap for ${advisorName === 'ALEX' ? "Alex's" : "Chase's"} tip on this ↓`}
              </button>
            </div>
          </div>
          {tipOpen && (
            <div className="bg-[#fdf8ee] border border-[#d4a843]/40 rounded-xl rounded-tl-sm p-3 ml-12 mt-2">
              <p className="text-sm text-blue-900 leading-relaxed">{tipText}</p>
            </div>
          )}
        </div>

        {/* Input content */}
        {children}
      </div>

      {/* Fixed bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 pt-3 pb-6">
        <button
          onClick={onContinue}
          className={
            continueStyle ||
            'w-full py-4 bg-[#d4a843] text-[#0a1628] font-black text-base rounded-2xl cursor-pointer'
          }
        >
          {continueLabel || 'Continue'}
        </button>
        {showBack && onBack && (
          <button
            onClick={onBack}
            className="w-full py-2.5 text-center text-gray-400 text-sm font-medium cursor-pointer"
          >
            &larr; Go back
          </button>
        )}
        <p className="text-xs text-gray-400 mt-2 text-center">
          🔒 Encrypted · No obligation · No fees ever
        </p>
      </div>
    </div>
  )
}
