'use client'
import { useState } from 'react'

export default function EligibilityCapture() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    parentName: '',
    email: '',
    phone: '',
    childDob: '',
    vaccineDate: '',
    symptomDate: '',
    diagnosisType: '',
    state: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }))

  const inputClass = "w-full border border-[#CBD5E1] rounded-lg px-4 py-3 text-base text-[#0a1628] focus:outline-none focus:ring-2 focus:ring-[#d4a843] bg-white"
  const labelClass = "block text-sm font-bold uppercase tracking-wider text-[#475569] mb-2"

  if (submitted) return (
    <section className="bg-[#0a1628] py-16">
      <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-16 text-center py-12">
        <div className="w-16 h-16 rounded-full bg-[#d4a843] flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-2xl">✓</span>
        </div>
        <h3 className="text-2xl font-black text-white mb-3" style={{fontFamily:'Montserrat,sans-serif'}}>We Have Your Information</h3>
        <p className="text-lg text-[#94a3b8] max-w-md mx-auto" style={{fontFamily:'Roboto,sans-serif'}}>A member of the Alpha Law Group team will review your eligibility and contact you within 1 business day. There is no cost and no obligation.</p>
      </div>
    </section>
  )

  return (
    <section className="bg-[#0a1628] py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-16">
        <p className="text-sm font-bold tracking-widest uppercase text-[#d4a843] text-center mb-3" style={{fontFamily:'Montserrat,sans-serif'}}>Free Eligibility Review</p>
        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-3" style={{fontFamily:'Montserrat,sans-serif'}}>Could Your Family Qualify?</h2>
        <p className="text-lg text-[#94a3b8] text-center mb-12" style={{fontFamily:'Roboto,sans-serif'}}>Answer 4 quick questions. We&rsquo;ll tell you if your child may be eligible for federal compensation.</p>

        <div className="bg-white rounded-2xl p-8 md:p-12">
          <div className="flex gap-2 mb-8">
            {[1,2,3,4].map(i => (
              <div key={i} className="flex-1 h-2 rounded-full" style={{background: i <= step ? '#d4a843' : '#E2E8F0'}} />
            ))}
          </div>

          {step === 1 && (
            <div className="space-y-6">
              <h3 className="font-bold text-xl text-[#0a1628] mb-6" style={{fontFamily:'Montserrat,sans-serif'}}>About You</h3>
              <div>
                <label className={labelClass} style={{fontFamily:'Roboto,sans-serif'}}>Your Full Name *</label>
                <input className={inputClass} style={{fontFamily:'Roboto,sans-serif'}} type="text" placeholder="Jane Smith" value={form.parentName} onChange={e => update('parentName', e.target.value)} />
              </div>
              <div>
                <label className={labelClass} style={{fontFamily:'Roboto,sans-serif'}}>Your Email *</label>
                <input className={inputClass} style={{fontFamily:'Roboto,sans-serif'}} type="email" placeholder="jane@email.com" value={form.email} onChange={e => update('email', e.target.value)} />
              </div>
              <div>
                <label className={labelClass} style={{fontFamily:'Roboto,sans-serif'}}>Your Phone *</label>
                <input className={inputClass} style={{fontFamily:'Roboto,sans-serif'}} type="tel" placeholder="(941) 000-0000" value={form.phone} onChange={e => update('phone', e.target.value)} />
              </div>
              <div>
                <label className={labelClass} style={{fontFamily:'Roboto,sans-serif'}}>Your State *</label>
                <select className={inputClass} style={{fontFamily:'Roboto,sans-serif'}} value={form.state} onChange={e => update('state', e.target.value)}>
                  <option value="">Select state...</option>
                  {['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'].map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <button onClick={() => setStep(2)} disabled={!form.parentName || !form.email || !form.phone || !form.state}
                className="w-full py-4 rounded-lg font-black text-sm uppercase tracking-widest transition-opacity hover:opacity-90 disabled:opacity-40"
                style={{background:'#d4a843', color:'#0a1628', fontFamily:'Montserrat,sans-serif'}}>
                Continue →
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="font-bold text-xl text-[#0a1628] mb-6" style={{fontFamily:'Montserrat,sans-serif'}}>About Your Child</h3>
              <div>
                <label className={labelClass} style={{fontFamily:'Roboto,sans-serif'}}>Child&rsquo;s Date of Birth *</label>
                <input className={inputClass} style={{fontFamily:'Roboto,sans-serif'}} type="date" value={form.childDob} onChange={e => update('childDob', e.target.value)} />
              </div>
              <div>
                <label className={labelClass} style={{fontFamily:'Roboto,sans-serif'}}>Diagnosis *</label>
                <select className={inputClass} style={{fontFamily:'Roboto,sans-serif'}} value={form.diagnosisType} onChange={e => update('diagnosisType', e.target.value)}>
                  <option value="">Select diagnosis...</option>
                  <option value="autism">Autism Spectrum Disorder (ASD)</option>
                  <option value="pdd">Pervasive Developmental Disorder (PDD)</option>
                  <option value="aspergers">Asperger Syndrome</option>
                  <option value="regression">Developmental Regression</option>
                  <option value="other">Other neurological condition</option>
                  <option value="unsure">Not sure / pending diagnosis</option>
                </select>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(1)} className="flex-1 py-4 rounded-lg font-bold text-sm border border-[#E2E8F0] text-[#475569] hover:bg-[#F8F9FA]" style={{fontFamily:'Montserrat,sans-serif'}}>← Back</button>
                <button onClick={() => setStep(3)} disabled={!form.childDob || !form.diagnosisType}
                  className="flex-1 py-4 rounded-lg font-black text-sm uppercase tracking-widest transition-opacity hover:opacity-90 disabled:opacity-40"
                  style={{background:'#d4a843', color:'#0a1628', fontFamily:'Montserrat,sans-serif'}}>
                  Continue →
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h3 className="font-bold text-xl text-[#0a1628] mb-2" style={{fontFamily:'Montserrat,sans-serif'}}>Vaccine & Symptom Dates</h3>
              <p className="text-base text-[#475569] mb-6" style={{fontFamily:'Roboto,sans-serif'}}>These dates determine your filing deadline. Approximate dates are fine — our team will help you confirm.</p>
              <div>
                <label className={labelClass} style={{fontFamily:'Roboto,sans-serif'}}>Approximate Date of Last Vaccination *</label>
                <input className={inputClass} style={{fontFamily:'Roboto,sans-serif'}} type="date" value={form.vaccineDate} onChange={e => update('vaccineDate', e.target.value)} />
              </div>
              <div>
                <label className={labelClass} style={{fontFamily:'Roboto,sans-serif'}}>Approximate Date First Symptoms Appeared *</label>
                <input className={inputClass} style={{fontFamily:'Roboto,sans-serif'}} type="date" value={form.symptomDate} onChange={e => update('symptomDate', e.target.value)} />
                <p className="text-sm text-[#475569] mt-1" style={{fontFamily:'Roboto,sans-serif'}}>Use the date you first noticed regression, loss of speech, fever, or behavioral changes — NOT the diagnosis date.</p>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(2)} className="flex-1 py-4 rounded-lg font-bold text-sm border border-[#E2E8F0] text-[#475569] hover:bg-[#F8F9FA]" style={{fontFamily:'Montserrat,sans-serif'}}>← Back</button>
                <button onClick={() => setStep(4)} disabled={!form.vaccineDate || !form.symptomDate}
                  className="flex-1 py-4 rounded-lg font-black text-sm uppercase tracking-widest transition-opacity hover:opacity-90 disabled:opacity-40"
                  style={{background:'#d4a843', color:'#0a1628', fontFamily:'Montserrat,sans-serif'}}>
                  Continue →
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h3 className="font-bold text-xl text-[#0a1628] mb-2" style={{fontFamily:'Montserrat,sans-serif'}}>Review & Submit</h3>
              <div className="bg-[#F8F9FA] rounded-xl p-6 space-y-3 text-base" style={{fontFamily:'Roboto,sans-serif'}}>
                <div className="flex justify-between"><span className="text-[#475569]">Name</span><span className="font-medium text-[#0a1628]">{form.parentName}</span></div>
                <div className="flex justify-between"><span className="text-[#475569]">Email</span><span className="font-medium text-[#0a1628]">{form.email}</span></div>
                <div className="flex justify-between"><span className="text-[#475569]">State</span><span className="font-medium text-[#0a1628]">{form.state}</span></div>
                <div className="flex justify-between"><span className="text-[#475569]">Diagnosis</span><span className="font-medium text-[#0a1628]">{form.diagnosisType}</span></div>
                <div className="flex justify-between"><span className="text-[#475569]">Symptom date</span><span className="font-medium text-[#0a1628]">{form.symptomDate}</span></div>
              </div>
              <div className="bg-[#fdf8ee] border border-[#d4a843] rounded-xl p-5">
                <p className="text-[#0a1628] text-base font-bold mb-1" style={{fontFamily:'Montserrat,sans-serif'}}>⚡ Deadline Alert</p>
                <p className="text-base text-[#475569]" style={{fontFamily:'Roboto,sans-serif'}}>Based on your symptom date, you may have a filing window. Our team will calculate your exact deadline at no cost.</p>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(3)} className="flex-1 py-4 rounded-lg font-bold text-sm border border-[#E2E8F0] text-[#475569] hover:bg-[#F8F9FA]" style={{fontFamily:'Montserrat,sans-serif'}}>← Back</button>
                <button onClick={() => setSubmitted(true)}
                  className="flex-1 py-4 rounded-lg font-black text-sm uppercase tracking-widest transition-opacity hover:opacity-90"
                  style={{background:'#0a1628', color:'#d4a843', fontFamily:'Montserrat,sans-serif'}}>
                  Submit Free Review →
                </button>
              </div>
              <p className="text-sm text-[#475569] text-center" style={{fontFamily:'Roboto,sans-serif'}}>No cost. No obligation. HIPAA compliant. Attorney-client privilege applies.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
