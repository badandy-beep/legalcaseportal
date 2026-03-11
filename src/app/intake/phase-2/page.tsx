'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import QuestionScreen from '../components/QuestionScreen'
import OptionCard from '../components/inputs/OptionCard'

const vaccineOptions = [
  'DTaP (diphtheria, tetanus, whooping cough)',
  'MMR (measles, mumps, rubella)',
  'Flu vaccine',
  'Hepatitis B',
  'HPV',
  'Varicella (chickenpox)',
  'Multiple vaccines at the same visit',
  "I'm not sure",
]

const ageOptions = [
  'Under 6 months',
  '6–12 months',
  '12–18 months',
  '18–24 months',
  '2–3 years',
  '3–5 years',
  'Older than 5',
]

export default function Phase2Page() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [vaccine, setVaccine] = useState('')
  const [vaccineDate, setVaccineDate] = useState('')
  const [ageAtVaccine, setAgeAtVaccine] = useState('')

  function handleContinue() {
    if (step === 0 && !vaccine) return
    if (step === 1 && !vaccineDate) return
    if (step === 2 && !ageAtVaccine) return

    if (step < 2) {
      setStep(step + 1)
    } else {
      localStorage.setItem(
        'intake_phase2',
        JSON.stringify({ vaccine, vaccineDate, ageAtVaccine })
      )
      router.push('/intake/phase-3')
    }
  }

  function handleBack() {
    if (step > 0) setStep(step - 1)
    else router.push('/intake/phase-1')
  }

  if (step === 0) {
    return (
      <QuestionScreen
        phase="2 of 11"
        phaseTitle="The vaccine visit."
        question="Which vaccine do you believe caused the reaction?"
        tipText="Not sure? That's okay. Pick your best guess — we'll pull the records together. DTaP and MMR are the most common ones we see in autism cases."
        onContinue={handleContinue}
        onBack={handleBack}
        showBack={true}
      >
        <div className="space-y-3">
          {vaccineOptions.map((option) => (
            <OptionCard
              key={option}
              label={option}
              selected={vaccine === option}
              onSelect={() => setVaccine(option)}
            />
          ))}
        </div>
      </QuestionScreen>
    )
  }

  if (step === 1) {
    return (
      <QuestionScreen
        phase="2 of 11"
        phaseTitle="The vaccine visit."
        question="When did your child receive this vaccine?"
        tipText="Check your child's immunization card or call your pediatrician's office. This date starts the legal clock — it's the most important date in your case."
        onContinue={handleContinue}
        onBack={handleBack}
        showBack={true}
      >
        <input
          type="date"
          value={vaccineDate}
          onChange={(e) => setVaccineDate(e.target.value)}
          className="w-full text-base p-4 border-2 rounded-2xl outline-none font-sans text-[#111827] focus:border-[#1E40AF] transition"
          style={{ fontSize: '16px' }}
        />
      </QuestionScreen>
    )
  }

  return (
    <QuestionScreen
      phase="2 of 11"
      phaseTitle="The vaccine visit."
      question="How old was your child at the time of vaccination?"
      tipText="This helps us understand the developmental stage at the time of the reaction — which matters legally."
      onContinue={handleContinue}
      onBack={handleBack}
      showBack={true}
    >
      <div className="space-y-3">
        {ageOptions.map((option) => (
          <OptionCard
            key={option}
            label={option}
            selected={ageAtVaccine === option}
            onSelect={() => setAgeAtVaccine(option)}
          />
        ))}
      </div>
    </QuestionScreen>
  )
}
