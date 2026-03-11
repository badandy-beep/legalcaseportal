'use client'

import { useState } from 'react'
import Link from 'next/link'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSection {
  title: string
  items: FAQItem[]
}

const sections: FAQSection[] = [
  {
    title: 'VICP Basics',
    items: [
      {
        question: 'What is the Vaccine Injury Compensation Program (VICP)?',
        answer:
          'The VICP is a federal no-fault compensation program created in 1988 under the National Childhood Vaccine Injury Act. It was designed to provide a faster, less adversarial alternative to lawsuits for families whose children suffer serious reactions to covered vaccines. The program is administered by the U.S. Department of Health and Human Services (HHS), the Department of Justice (DOJ), and the U.S. Court of Federal Claims — also known as the "Vaccine Court." Since 1988, it has paid over $5.4 billion to more than 12,000 families.',
      },
      {
        question: 'Is this a lawsuit against a vaccine manufacturer?',
        answer:
          'No. The VICP is a no-fault federal program — you are filing a petition against the U.S. government\'s vaccine injury fund, not against a drug company. This is intentional: the 1986 law that created the VICP largely shields vaccine manufacturers from direct lawsuits. The fund is financed by a $0.75 excise tax on every vaccine dose administered in the United States.',
      },
      {
        question: 'How much money is in the VICP trust fund?',
        answer:
          'As of 2025, the VICP trust fund holds approximately $4.8 billion. The fund collects roughly $300–400 million per year from the excise tax. It is solvent and actively paying claims.',
      },
      {
        question: 'What vaccines are covered by the VICP?',
        answer:
          'The VICP covers all vaccines recommended by the CDC for routine administration to children and pregnant women — including DTaP, MMR, flu, hepatitis B, hepatitis A, HPV, polio, varicella, pneumococcal, and many others. The complete list is found on the VICP Vaccine Injury Table published by HHS.',
      },
      {
        question: 'What is the Vaccine Injury Table?',
        answer:
          'The Vaccine Injury Table is an official government list of specific injuries that are presumed to be caused by specific vaccines if they occur within a defined time window after vaccination. If your child\'s injury appears on the Table and occurred within the timeframe, you have a "Table Injury" — the government is presumed liable and must disprove the connection rather than you proving it. This is the strongest legal position. Examples include encephalopathy within 72 hours of DTaP, anaphylaxis within 4 hours, and Guillain-Barré Syndrome (GBS) within 3–42 days of flu vaccine.',
      },
    ],
  },
  {
    title: 'Autism & the VICP',
    items: [
      {
        question: 'Is autism covered by the VICP?',
        answer:
          'Not directly — autism spectrum disorder (ASD) as a primary diagnosis does not appear on the Vaccine Injury Table and has historically not been compensated by the VICP. Between 2002 and 2010, the government litigated over 5,000 autism claims in what was called the Omnibus Autism Proceeding. All test cases were dismissed. However, the legal landscape is changing significantly — see the next several questions.',
      },
      {
        question: 'Have any children with autism ever been compensated?',
        answer:
          'Yes. At least 83 children who carry an autism diagnosis have been compensated by the VICP — but through an indirect pathway. These families successfully claimed "vaccine-induced encephalopathy" (brain injury) rather than autism directly. Autism symptoms were secondary to the brain injury finding. This "encephalopathy pathway" remains the most viable legal route today. The most prominent example is Hannah Poling, whose family received over $1.5 million in 2008 after the government conceded that vaccines aggravated an underlying mitochondrial disorder that resulted in autism.',
      },
      {
        question: 'What is encephalopathy and why does it matter for autism families?',
        answer:
          'Encephalopathy is a medical term for significant brain dysfunction or injury. It is a Table Injury for several vaccines — meaning if documented within 72 hours of vaccination, causation is presumed. Many children who later received an autism diagnosis experienced early symptoms that could be characterized as encephalopathy — sudden regression, loss of language, seizures, altered consciousness. If your child experienced these symptoms shortly after vaccination, an encephalopathy claim may be viable even if the current diagnosis is autism.',
      },
      {
        question: 'What is the Hannah Poling case and why is it important?',
        answer:
          'Hannah Poling was vaccinated at 19 months and received nine vaccines in one visit. Within days she developed a high fever and stopped speaking. She was later diagnosed with autism. In 2008, the U.S. government conceded her case — agreeing that vaccines had aggravated an underlying mitochondrial disorder that resulted in autism-like symptoms. Her family received over $1.5 million. The case established that even if autism itself is not on the Table, vaccine-aggravated conditions that produce autism symptoms can be compensated. Between 5–20% of children with autism may have mitochondrial dysfunction — making this precedent highly relevant.',
      },
      {
        question: 'Is RFK Jr. changing the rules for autism families?',
        answer:
          'Potentially, yes. HHS Secretary Robert F. Kennedy Jr. has publicly stated his intent to reform the VICP to better compensate families affected by autism. The most likely reform path — which requires only HHS administrative action, not Congress — would be broadening the definition of encephalopathy to explicitly include "developmental regression," which would capture many autism presentations. A more ambitious but less likely path would add autism directly to the Vaccine Injury Table. Either change could open compensation to thousands of families currently ineligible. This is why filing deadlines matter so much: if reforms pass, families with preserved evidence and documented timelines will be first in line.',
      },
      {
        question: 'What about children with epilepsy or seizure disorders alongside autism?',
        answer:
          'This is an important and often overlooked pathway. Between 25–40% of children with autism also have epilepsy or seizure disorders. Seizure disorders caused by certain vaccines ARE covered by the VICP. If your child has both an autism diagnosis and a seizure disorder, you may have a viable claim for the seizure disorder — with potential compensation extending to the full impact of your child\'s condition. Alpha Law Group\'s team evaluates all comorbid conditions as part of its intake process.',
      },
      {
        question: 'My child was diagnosed years ago. Is it too late?',
        answer:
          'The VICP statute of limitations is 3 years from the date of the first symptom — not the date of diagnosis. Many autism families are technically outside this window based on current law. However: (1) some families may have had a triggering event more recently than they realize, (2) some cases can be reopened under certain circumstances, and (3) proposed Kennedy reforms could include a statute of limitations reset for autism families. We strongly encourage families to complete an intake evaluation even if you believe you may be outside the deadline — our team will assess your specific timeline.',
      },
    ],
  },
  {
    title: 'Filing a Claim',
    items: [
      {
        question: 'How long does the VICP process take?',
        answer:
          'The average VICP case takes 2–3 years from filing to resolution. Simple Table injury cases with strong documentation can resolve faster. Complex off-table cases, especially autism-related claims, have historically taken longer. Do not let the timeline discourage you — the process is ongoing and your attorney handles the heavy lifting.',
      },
      {
        question: 'What does it cost to file a VICP claim?',
        answer:
          'Nothing out of pocket. Alpha Law Group represents clients on a contingency fee basis — you pay no legal fees unless compensation is recovered. Even better: the VICP pays reasonable attorney fees separately from your compensation award, even in cases that are ultimately denied. You will never receive a bill from Alpha Law Group for pursuing a VICP claim.',
      },
      {
        question: 'What documentation do I need?',
        answer:
          'The most important documents are: (1) your child\'s complete vaccination records showing dates, vaccine brands, and lot numbers; (2) medical records showing any adverse reactions, symptoms, or changes after vaccination; (3) records from the physician who diagnosed your child with autism; (4) any emergency room, hospital, or specialist records from the period following vaccination; and (5) a parent timeline — your own written account of what you observed and when. Our intake system is designed to help you organize and document all of this.',
      },
      {
        question: 'What compensation can we receive if our claim succeeds?',
        answer:
          'VICP compensation can include: all past and future medical expenses related to the vaccine injury; lost future earning capacity (for children who will require lifelong care); pain and suffering up to $250,000; and in death cases, up to $250,000 plus funeral expenses. For children with severe autism requiring lifetime care, future care costs alone can represent millions of dollars in compensation.',
      },
      {
        question: 'Can I still file a civil lawsuit against a vaccine manufacturer?',
        answer:
          'In most cases, no — the 1986 law (and the 2011 Supreme Court decision in Bruesewitz v. Wyeth) largely shields vaccine manufacturers from design defect lawsuits. However, there is a narrow but important exception: thimerosal, the mercury-based preservative used in some vaccines, was ruled in 2006 by the Fifth Circuit Court of Appeals to be a separate product from the vaccine itself — meaning thimerosal-specific claims may be pursued outside of VICP. Alpha Law Group evaluates civil litigation pathways as part of its comprehensive case review.',
      },
    ],
  },
  {
    title: 'Our Process',
    items: [
      {
        question: 'What happens after I submit the intake form?',
        answer:
          'Alex or Chase will review your submission within 24 hours. You will receive a personal call to discuss your case, explain your options, and answer your questions. There is no commitment required and no cost. If your case has merit, we will explain the next steps. If your case is outside our scope, we will refer you to the most appropriate resources.',
      },
      {
        question: 'How is Alpha Law Group different from other firms handling VICP cases?',
        answer:
          'Alpha Law Group is the only Florida personal injury firm founded by a family with two siblings severely affected by autism. Alex Kompothecras grew up with brother Bronson and sister Sarah Alice — this is not a business strategy for us, it is a family mission. We are also founding members of the Autism Justice Foundation and work directly with Children\'s Health Defense, the McCullough Foundation, and the Autism Society of Florida. We track RFK Jr.\'s reform efforts in real time and will immediately notify our enrolled families of any changes that affect their eligibility.',
      },
      {
        question: 'Is my information confidential?',
        answer:
          'Yes. All information submitted through this portal is protected by attorney-client privilege and HIPAA. Your intake data is encrypted, never sold to third parties, and accessible only to the Alpha Law Group legal team. We are fully compliant with applicable privacy laws.',
      },
      {
        question: 'Do I need to live in Florida to work with Alpha Law Group?',
        answer:
          'VICP cases are federal cases filed in the U.S. Court of Federal Claims in Washington, D.C. — not in state court. This means Alpha Law Group can represent families nationwide, regardless of which state you live in.',
      },
    ],
  },
  {
    title: 'Reform Watch',
    items: [
      {
        question: 'What is RFK Jr. planning to change about the VICP?',
        answer:
          'Secretary Kennedy has outlined several potential reforms: (1) broadening the definition of encephalopathy to include developmental regression — which would help many autism families; (2) potentially adding autism spectrum disorder directly to the Vaccine Injury Table; (3) expanding the types of injuries eligible for compensation; and (4) improving the process for families who have been denied. HHS adviser Drew Downing confirmed in September 2025 that the agency is actively working on these changes. Some reforms can be made administratively by HHS without Congressional approval — making them more likely in the near term.',
      },
      {
        question: 'How will we know if the rules change?',
        answer:
          'Sign up for our Reform Watch updates when you complete your intake. Alpha Law Group monitors HHS rulemaking, Federal Register publications, and VICP policy changes in real time. We will contact every enrolled family immediately when any change occurs that may affect their eligibility or claim status.',
      },
      {
        question: 'Should I wait for the reforms before filing?',
        answer:
          'No — for two reasons. First, filing deadlines are based on when symptoms first appeared, not when you file. Waiting does not preserve your rights; it risks losing them. Second, having a completed intake on file with documented evidence positions you to act immediately when reforms pass. Think of it as getting in line now so you are first when the door opens.',
      },
    ],
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  function toggle(key: string) {
    setOpenIndex(openIndex === key ? null : key)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-alg-navy text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Answers for autism families navigating the vaccine injury compensation system.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        {sections.map((section, sIdx) => (
          <div key={section.title} className={sIdx > 0 ? 'mt-12' : ''}>
            {/* Section Eyebrow */}
            <p className="text-xs font-bold uppercase tracking-widest text-alg-gold mb-6">
              {section.title}
            </p>

            <div>
              {section.items.map((item, qIdx) => {
                const key = `${sIdx}-${qIdx}`
                const isOpen = openIndex === key

                return (
                  <div key={key} className="border-b border-gray-100">
                    <button
                      onClick={() => toggle(key)}
                      className="w-full flex items-start justify-between gap-4 py-4 text-left cursor-pointer"
                    >
                      <span className="font-semibold text-alg-navy">
                        {item.question}
                      </span>
                      <span className="text-alg-gold text-xl font-bold shrink-0 mt-0.5">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="pb-4 text-gray-700 text-sm leading-relaxed">
                        {item.answer}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/intake/phase-1"
            className="inline-block bg-alg-gold text-alg-navy font-bold px-8 py-3 rounded hover:bg-alg-gold-light transition"
          >
            Start My Free Case Evaluation
          </Link>
        </div>

        {/* Footer Note */}
        <p className="mt-12 text-xs text-gray-600 text-center leading-relaxed">
          This FAQ is provided for general informational purposes only and does not constitute legal
          advice. Every family&apos;s situation is unique. Contact Alpha Law Group for a free case
          evaluation specific to your circumstances. &copy; 2026 Alpha Law Group, PLLC.
        </p>
      </section>
    </main>
  )
}
