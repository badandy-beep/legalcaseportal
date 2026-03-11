'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import QuestionScreen from '../components/QuestionScreen'
import OptionCard from '../components/inputs/OptionCard'

const diagnosisOptions = [
  'Autism Spectrum Disorder (ASD)',
  'Autism with epilepsy / seizure disorder',
  'Developmental delay / regression',
  'Encephalopathy',
  'Other neurological condition',
  'Not yet diagnosed / still evaluating',
]

export default function Phase1Page() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [dob, setDob] = useState('')
  const [firstName, setFirstName] = useState('')
  const [diagnosis, setDiagnosis] = useState('')

  function handleContinue() {
    if (step === 0 && !dob) return
    if (step === 1 && !firstName.trim()) return
    if (step === 2 && !diagnosis) return

    if (step < 2) {
      setStep(step + 1)
    } else {
      localStorage.setItem(
        'intake_phase1',
        JSON.stringify({ dob, firstName, diagnosis })
      )
      router.push('/intake/phase-2')
    }
  }

  function handleBack() {
    if (step > 0) setStep(step - 1)
  }

  if (step === 0) {
    return (
      <QuestionScreen
        phase="1 of 11"
        phaseTitle="Let's start with your child."
        question="What is your child's date of birth?"
        tipText="This helps us check if you're still within the 3-year filing window. Don't worry — even if you think you're too late, we may still be able to help."
        onContinue={handleContinue}
        onBack={handleBack}
        showBack={false}
      >
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full text-base p-4 border-2 rounded-2xl outline-none font-sans text-alg-navy focus:border-alg-gold transition"
          style={{ fontSize: '16px' }}
        />
      </QuestionScreen>
    )
  }

  if (step === 1) {
    return (
      <QuestionScreen
        phase="1 of 11"
        phaseTitle="Let's start with your child."
        question="What is your child's first name?"
        tipText="First name is fine for now. We just want to make sure your case file feels personal — not like a number in a system."
        onContinue={handleContinue}
        onBack={handleBack}
        showBack={true}
      >
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name only is fine"
          className="w-full text-base p-4 border-2 rounded-2xl outline-none font-sans text-alg-navy placeholder:text-gray-400 focus:border-alg-gold transition"
          style={{ fontSize: '16px' }}
        />
      </QuestionScreen>
    )
  }

  return (
    <QuestionScreen
      phase="1 of 11"
      phaseTitle="Let's start with your child."
      question="What is your child's current diagnosis?"
      tipText="Select the option that best describes your child's primary diagnosis. Don't worry if it's not a perfect fit — we'll review everything together."
      onContinue={handleContinue}
      onBack={handleBack}
      showBack={true}
    >
      <div className="space-y-3">
        {diagnosisOptions.map((option) => (
          <OptionCard
            key={option}
            label={option}
            selected={diagnosis === option}
            onSelect={() => setDiagnosis(option)}
          />
        ))}
      </div>
    </QuestionScreen>
  )
}
