import Link from 'next/link'

const steps = [
  {
    number: 1,
    title: 'Understand Your Rights',
    body: 'The National Vaccine Injury Compensation Program (VICP) is a federal no-fault program administered by the U.S. Court of Federal Claims. It was created in 1986 to provide a fair, efficient path to compensation for families affected by vaccine injuries \u2014 without requiring them to sue vaccine manufacturers directly.',
  },
  {
    number: 2,
    title: 'Check the VICP Injury Table',
    body: 'The VICP maintains an official \u201cInjury Table\u201d \u2014 a list of specific injuries presumed to be vaccine-related if they occur within a defined timeframe. If your child\u2019s diagnosis appears on the table, you may have a simpler path to compensation. Autism and related conditions are subject to evolving policy. Contact our team to assess your specific situation.',
  },
  {
    number: 3,
    title: 'File a Petition \u2014 Deadlines Matter',
    body: 'Claims must be filed within strict deadlines \u2014 typically 3 years from the first symptom or 2 years from death. Missing these deadlines can permanently bar your family from compensation. Do not wait. Contact Alpha Law Group today for a free case evaluation.',
  },
  {
    number: 4,
    title: 'Work With Our Legal Team',
    body: 'Alpha Law Group will gather your child\u2019s medical records, vaccine history, and supporting documentation. We work with leading medical experts in vaccine injury cases, including advisors to the Autism Justice Foundation. We handle every aspect of your petition.',
  },
  {
    number: 5,
    title: 'Resolution',
    body: 'If your petition succeeds, compensation can include medical expenses, lost future income, pain and suffering (up to $250,000), and attorney fees paid separately by the program \u2014 meaning our fees never come out of your recovery. If the VICP denies your claim, you retain the right to pursue civil litigation.',
  },
]

export default function HowVicpWorksPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4">
        {/* Page Title */}
        <section className="bg-white border-b border-[#E2E8F0] py-14 -mt-16 -mx-4 px-6 mb-14">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold tracking-widest uppercase text-[#1E40AF] mb-3">Federal Program</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4" style={{fontFamily:'Georgia,serif'}}>
              How the VICP Works
            </h1>
            <p className="text-lg text-[#475569] max-w-2xl mx-auto">
              A federal program created to compensate families whose children suffer serious vaccine-related injuries. Here&rsquo;s what you need to know.
            </p>
          </div>
        </section>

        {/* Timeline Steps */}
        <div className="relative">
          {/* Gold connector line */}
          <div className="absolute left-[23px] top-4 bottom-4 w-[2px] bg-[#1E40AF]/30" />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex gap-6">
                {/* Step number circle */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-[#EFF6FF] border-2 border-[#1E40AF] flex items-center justify-center">
                  <span className="text-[#1E40AF] font-bold text-lg">{step.number}</span>
                </div>

                {/* Content */}
                <div className="pt-1.5">
                  <h2 className="text-xl font-bold tracking-tight text-[#111827] mb-2">{step.title}</h2>
                  <p className="text-gray-700 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Callout Box */}
        <div className="bg-gray-900 text-white p-8 rounded-xl mt-16">
          <p className="text-lg leading-relaxed mb-6">
            <span className="font-bold">Important:</span> VICP filing deadlines are strict and
            unforgiving. If you believe your child may have been injured by a vaccine, contact
            Alpha Law Group today &mdash; even if you&rsquo;re unsure. A free consultation costs
            nothing. Missing a deadline costs everything.
          </p>
          <div className="text-center">
            <Link
              href="/intake/phase-1"
              className="inline-block bg-[#1E40AF] text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#1E3A8A] transition"
            >
              Get a Free Case Review &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
