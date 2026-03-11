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
}: QuestionScreenProps) {
  const [tipOpen, setTipOpen] = useState(false)

  const phaseNum = parseInt(phase.split(' ')[0]) || 1
  const progressPct = Math.round((phaseNum / 11) * 100)

  return (
    <div className="fixed inset-0 flex flex-col bg-white">
      {/* Nav bar */}
      <nav className="bg-gray-900 h-14 flex items-center justify-between px-4 shrink-0 border-b-2 border-[#1E40AF]">
        <Link href="/" className="text-white font-black tracking-widest text-sm">
          ALPHA LAW GROUP
        </Link>
        <span className="text-[#1E40AF] text-xs font-bold">FREE &amp; CONFIDENTIAL</span>
      </nav>

      {/* Progress bar strip */}
      <div className="bg-gray-50 border-b border-gray-100 px-4 py-2.5 shrink-0">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
            Phase {phase}
          </span>
          <span className="text-xs text-[#1E40AF] font-semibold cursor-pointer">
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
        <p className="text-xs font-bold uppercase tracking-widest text-[#1E40AF] mb-1">
          {phaseTitle}
        </p>
        <h1 className="text-xl font-black text-[#111827] leading-tight mb-5">
          {question}
        </h1>

        {/* Expert Tip */}
        <div className="mb-5">
          <div className="flex items-center gap-3">
            <div className="w-[38px] h-[38px] rounded-full bg-gray-900 border-2 border-[#1E40AF] flex items-center justify-center text-lg shrink-0">
              👨‍⚖️
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500">ALEX — Alpha Law Group</p>
              <button
                onClick={() => setTipOpen(!tipOpen)}
                className="text-xs font-semibold text-[#1E40AF] underline cursor-pointer"
              >
                {tipOpen ? 'Hide tip ↑' : "Tap for Alex's tip on this ↓"}
              </button>
            </div>
          </div>
          {tipOpen && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl rounded-tl-sm p-3 ml-12 mt-2">
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
            'w-full py-4 bg-[#1E40AF] text-white font-black text-base rounded-2xl cursor-pointer'
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
