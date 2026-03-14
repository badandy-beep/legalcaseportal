'use client'
// OG metadata handled by root layout — client component cannot export metadata

import { useState } from 'react'
import Link from 'next/link'

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function DeadlineCalculatorPage() {
  const [symptomDate, setSymptomDate] = useState('')
  const [result, setResult] = useState<null | 'green' | 'yellow' | 'expired'>(null)
  const [daysRemaining, setDaysRemaining] = useState(0)
  const [deadlineDate, setDeadlineDate] = useState<Date | null>(null)

  function calculate() {
    if (!symptomDate) return
    const parsed = new Date(symptomDate + 'T00:00:00')
    const deadline = new Date(parsed)
    deadline.setFullYear(deadline.getFullYear() + 3)
    const today = new Date()
    const days = Math.floor((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    setDeadlineDate(deadline)
    setDaysRemaining(days)
    if (days > 180) setResult('green')
    else if (days > 0) setResult('yellow')
    else setResult('expired')
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-[#E2E8F0] py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-[#0a1628] mb-3">Free Deadline Assessment</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4" style={{fontFamily:'Georgia,serif'}}>
            Has Your Family&rsquo;s Window Closed?
          </h1>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            Enter your child&rsquo;s first symptom date below. We&rsquo;ll calculate your VICP filing window instantly.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 bg-gray-50 min-h-screen px-4">
        <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-8">
          <label className="block text-[#111827] font-semibold mb-1">
            When did your child first show symptoms after vaccination?
          </label>
          <p className="text-gray-700 text-xs mb-4">
            This should be the date of the first notable change — regression, fever, seizure, loss of speech — NOT the autism diagnosis date.
          </p>
          <input
            type="date"
            value={symptomDate}
            onChange={(e) => setSymptomDate(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3 text-[#111827]"
          />
          <button
            onClick={calculate}
            className="w-full mt-4 bg-[#d4a843] text-[#0a1628] font-bold py-3 rounded-lg hover:opacity-90 transition cursor-pointer"
          >
            Calculate My Deadline
          </button>
        </div>

        {/* Green Result */}
        {result === 'green' && deadlineDate && (
          <div className="max-w-lg mx-auto mt-6 bg-green-50 border border-green-200 rounded-xl p-6">
            <p className="text-green-800 font-bold text-xl">&#9989; Your Window Is Open</p>
            <p className="text-green-700 text-sm mt-2">
              Based on the date you entered, you have approximately <strong>{daysRemaining} days</strong> remaining — until <strong>{formatDate(deadlineDate)}</strong> — before your VICP filing deadline.
            </p>
            <p className="text-green-700 text-sm mt-2">
              This is enough time to build a strong case. But waiting reduces your options. The documentation process takes months, and your attorney needs time to prepare.
            </p>
            <p className="text-green-700 text-sm mt-2 font-semibold">
              The right move is to start your intake today.
            </p>
            <Link
              href="/intake/phase-1"
              className="block mt-4 bg-[#d4a843] text-[#0a1628] font-bold py-3 rounded-lg text-center hover:opacity-90 transition"
            >
              Start My Free Case Evaluation &rarr;
            </Link>
            <div className="text-center mt-3">
              <Link href="/faq" className="text-[#111827] text-sm hover:underline">
                Have questions first? Read our FAQ &rarr;
              </Link>
            </div>
          </div>
        )}

        {/* Yellow Result */}
        {result === 'yellow' && deadlineDate && (
          <div className="max-w-lg mx-auto mt-6 bg-yellow-50 border border-yellow-300 rounded-xl p-6">
            <p className="text-yellow-800 font-bold text-xl">&#9888;&#65039; Your Window Is Closing — Act Now</p>
            <p className="text-yellow-700 text-sm mt-2">
              Based on the date you entered, you have approximately <strong>{daysRemaining} days</strong> remaining — until <strong>{formatDate(deadlineDate)}</strong>.
            </p>
            <p className="text-yellow-700 text-sm mt-2">
              This is a critical window. At this stage, your attorney needs to begin work immediately. Documentation, medical records retrieval, and petition preparation all take time you may not have.
            </p>
            <p className="text-yellow-700 text-sm mt-2 font-semibold">
              Do not wait. Contact Alpha Law Group today.
            </p>
            <p className="text-2xl font-black text-[#111827] mt-4 text-center">
              <a href="tel:9413041500">(941) 304-1500</a>
            </p>
            <Link
              href="/intake/phase-1"
              className="block mt-4 bg-[#d4a843] text-[#0a1628] font-bold py-3 rounded-lg text-center hover:opacity-90 transition"
            >
              Start My Intake Now — Time Is Critical &rarr;
            </Link>
          </div>
        )}

        {/* Expired Result */}
        {result === 'expired' && (
          <div className="max-w-lg mx-auto mt-6 bg-red-50 border border-red-200 rounded-xl p-6">
            <p className="text-red-800 font-bold text-xl">Your Standard Deadline Has Passed — But Don&rsquo;t Stop Here</p>
            <p className="text-red-700 text-sm mt-2">
              Based on the date you entered, the standard 3-year VICP filing window has passed. Under current law, this would prevent a new petition from being filed.
            </p>
            <p className="text-red-700 text-sm mt-2 font-semibold">
              However — do not give up. Here is why you should still contact us:
            </p>
            <ol className="text-red-700 text-sm mt-3 space-y-3 list-decimal list-inside">
              <li>
                <strong>Reform Reset:</strong> RFK Jr.&rsquo;s proposed VICP reforms may include a statute of limitations reset specifically for autism families. Families with documented cases on file will be first in line.
              </li>
              <li>
                <strong>Your Timeline May Be Different:</strong> The 3-year clock starts from the FIRST symptom — which may be more recent than you think. Our team will review your specific timeline.
              </li>
              <li>
                <strong>Civil Litigation:</strong> Separate pathways outside VICP may still be available, including thimerosal-specific claims.
              </li>
              <li>
                <strong>Preserve Your Evidence:</strong> Even if you cannot file today, documenting your case now protects your rights when the rules change.
              </li>
            </ol>
            <p className="text-red-700 text-sm mt-3 font-semibold">
              Fill out our intake — it is free, confidential, and creates the record you will need when reforms pass.
            </p>
            <Link
              href="/intake/phase-1"
              className="block mt-4 bg-[#d4a843] text-[#0a1628] font-bold py-3 rounded-lg text-center hover:opacity-90 transition"
            >
              Document My Case Now — It&rsquo;s Free &rarr;
            </Link>
            <p className="text-[#111827] font-semibold mt-3 text-center">
              <a href="tel:9413041500">(941) 304-1500</a> &middot; Free Consultation
            </p>
          </div>
        )}

        {/* Disclaimer */}
        <p className="max-w-lg mx-auto mt-8 text-center text-gray-600 text-xs">
          This calculator provides a general estimate only and does not constitute legal advice. Filing deadlines depend on specific facts unique to your case. Contact Alpha Law Group for a free evaluation of your actual deadline.
        </p>
      </section>
    </main>
  )
}
