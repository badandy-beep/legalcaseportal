'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import QuestionScreen from '../components/QuestionScreen'
import MultiCard from '../components/inputs/MultiCard'
import OptionCard from '../components/inputs/OptionCard'

const symptomOptions = [
  'Stopped talking or lost words they had',
  'High fever (over 104°F)',
  'Seizure or convulsion',
  'Became unresponsive, limp, or staring',
  'Stopped making eye contact',
  'Screaming or inconsolable crying for hours',
  'Stopped eating or lost appetite',
  'Major personality or behavior change',
  'Developed a rash or swelling',
  "Other (I'll describe it)",
]

const timingOptions = [
  'Within 24 hours',
  '24–72 hours',
  '3–7 days',
  '1–2 weeks',
  '2–4 weeks',
  'More than a month later',
  "I'm not sure of the exact timing",
]

const documentedOptions = [
  'Yes — we went to the ER or urgent care',
  'Yes — our pediatrician documented it',
  'Yes — a specialist noted the change',
  'Somewhat — mentioned it but not formally documented',
  "No — we didn't see a doctor at the time",
  "I'm not sure",
]

export default function Phase3Page() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [symptoms, setSymptoms] = useState<string[]>([])
  const [timing, setTiming] = useState('')
  const [documented, setDocumented] = useState('')

  function toggleSymptom(s: string) {
    setSymptoms((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    )
  }

  function handleContinue() {
    if (step === 0 && symptoms.length === 0) return
    if (step === 1 && !timing) return
    if (step === 2 && !documented) return

    if (step < 2) {
      setStep(step + 1)
    } else {
      localStorage.setItem(
        'intake_phase3',
        JSON.stringify({ symptoms, timing, documented })
      )
      router.push('/intake/phase-4')
    }
  }

  function handleBack() {
    if (step > 0) setStep(step - 1)
    else router.push('/intake/phase-2')
  }

  if (step === 0) {
    return (
      <QuestionScreen
        phase="3 of 11"
        phaseTitle="What happened next."
        question="What changes did you notice after the vaccine?"
        tipText="Select everything that applies — even things that seemed minor at the time. Many families don't realize these early signs are legally significant. You're not alone in this."
        onContinue={handleContinue}
        onBack={handleBack}
        showBack={true}
      >
        <div className="space-y-3">
          {symptomOptions.map((option) => (
            <MultiCard
              key={option}
              label={option}
              selected={symptoms.includes(option)}
              onToggle={() => toggleSymptom(option)}
            />
          ))}
        </div>
      </QuestionScreen>
    )
  }

  if (step === 1) {
    return (
      <QuestionScreen
        phase="3 of 11"
        phaseTitle="What happened next."
        question="How soon after the vaccine did these changes begin?"
        tipText="The timing is critical. Changes within 72 hours of vaccination carry the strongest legal weight — they may qualify as a 'Table Injury' which shifts the burden of proof to the government."
        onContinue={handleContinue}
        onBack={handleBack}
        showBack={true}
      >
        <div className="space-y-3">
          {timingOptions.map((option) => (
            <OptionCard
              key={option}
              label={option}
              selected={timing === option}
              onSelect={() => setTiming(option)}
            />
          ))}
        </div>
      </QuestionScreen>
    )
  }

  return (
    <QuestionScreen
      phase="3 of 11"
      phaseTitle="What happened next."
      question="Were these changes documented by a doctor?"
      tipText="Medical records from the days and weeks following vaccination are some of the most powerful evidence in a VICP case. Even an ER visit or a note from your pediatrician can make a significant difference."
      onContinue={handleContinue}
      onBack={handleBack}
      showBack={true}
    >
      <div className="space-y-3">
        {documentedOptions.map((option) => (
          <OptionCard
            key={option}
            label={option}
            selected={documented === option}
            onSelect={() => setDocumented(option)}
          />
        ))}
      </div>
    </QuestionScreen>
  )
}
