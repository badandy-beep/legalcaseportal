'use client'

import { useState } from 'react'

export default function ReferPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    yourName: '',
    yourEmail: '',
    yourPhone: '',
    familyName: '',
    familyEmail: '',
    familyPhone: '',
    note: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1628] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ background: '#d4a843' }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#d4a843' }}>
              Referral Program
            </span>
            <div className="w-8 h-px" style={{ background: '#d4a843' }} />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
            Refer a Family
          </h1>
          <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto">
            Know a family with a vaccine-injured child? Enter their information below and we&rsquo;ll reach out with a free case review.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-2xl mx-auto px-6">
          {submitted ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#111827] mb-3">Thank you!</h2>
              <p className="text-[#475569] text-lg leading-relaxed max-w-md mx-auto">
                We&rsquo;ll reach out to the family you referred within 1 business day.
              </p>
              <a
                href="/"
                className="inline-block mt-8 bg-[#d4a843] text-[#0a1628] font-bold px-8 py-3 rounded hover:bg-[#b8902e] transition text-sm uppercase tracking-wide"
              >
                Back to Home
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Your Info */}
              <div>
                <h2 className="text-xs font-bold tracking-widest uppercase text-[#0a1628] mb-4">Your Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#475569] uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="yourName"
                      required
                      value={form.yourName}
                      onChange={handleChange}
                      className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#d4a843] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#475569] uppercase tracking-wider mb-1.5">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="yourEmail"
                      required
                      value={form.yourEmail}
                      onChange={handleChange}
                      className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#d4a843] focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-xs font-semibold text-[#475569] uppercase tracking-wider mb-1.5">
                    Your Phone
                  </label>
                  <input
                    type="tel"
                    name="yourPhone"
                    value={form.yourPhone}
                    onChange={handleChange}
                    className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#d4a843] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Family Info */}
              <div>
                <h2 className="text-xs font-bold tracking-widest uppercase text-[#0a1628] mb-4">Referred Family&rsquo;s Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#475569] uppercase tracking-wider mb-1.5">
                      Family&rsquo;s Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="familyName"
                      required
                      value={form.familyName}
                      onChange={handleChange}
                      className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#d4a843] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#475569] uppercase tracking-wider mb-1.5">
                      Family&rsquo;s Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="familyEmail"
                      required
                      value={form.familyEmail}
                      onChange={handleChange}
                      className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#d4a843] focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-xs font-semibold text-[#475569] uppercase tracking-wider mb-1.5">
                    Family&rsquo;s Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="familyPhone"
                    required
                    value={form.familyPhone}
                    onChange={handleChange}
                    className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#d4a843] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Note */}
              <div>
                <label className="block text-xs font-semibold text-[#475569] uppercase tracking-wider mb-1.5">
                  Brief Note
                </label>
                <textarea
                  name="note"
                  rows={4}
                  value={form.note}
                  onChange={handleChange}
                  placeholder="Anything helpful we should know before reaching out?"
                  className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#d4a843] focus:border-transparent resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full font-bold uppercase tracking-widest text-sm py-4 rounded transition-all hover:opacity-90"
                style={{ background: '#d4a843', color: '#0a1628' }}
              >
                Send Referral &rarr;
              </button>

              <p className="text-[#475569] text-xs text-center">
                There is no cost, no obligation, and no risk. We&rsquo;ll handle the rest.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
