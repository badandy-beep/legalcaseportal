import Link from 'next/link'

function IconBox({ bg, text, textColor = 'text-white' }: { bg: string; text: string; textColor?: string }) {
  return (
    <div className={`${bg} rounded-lg w-12 h-12 flex-shrink-0 flex items-center justify-center`}>
      <span className={`${textColor} text-xs font-bold`}>{text}</span>
    </div>
  )
}

function ResourceCard({ icon, name, description, link }: { icon: React.ReactNode; name: string; description: string; link: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col gap-3">
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="text-alg-navy font-bold text-base">{name}</h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed flex-1">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="self-start text-alg-gold hover:underline font-semibold text-sm">
        Visit Website &rarr;
      </a>
    </div>
  )
}

export default function ResourcesPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-alg-navy mb-2">Resources</h1>
          <p className="text-gray-500 text-lg">
            Organizations, legal resources, and information to help autism families navigate the path to justice.
          </p>
        </div>

        {/* SECTION 1 — Coalition Partners */}
        <div className="bg-alg-navy/5 rounded-2xl p-8 mb-10">
          <p className="text-alg-gold text-xs font-bold tracking-widest uppercase mb-1">COALITION PARTNERS</p>
          <h2 className="text-2xl font-bold tracking-tight text-alg-navy">Our Coalition Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <ResourceCard
              icon={<IconBox bg="bg-blue-900" text="CHD" />}
              name="Children's Health Defense"
              description="Founded by Robert F. Kennedy Jr., Children's Health Defense is the nation's leading nonprofit fighting to end childhood health epidemics. CHD exposes government corruption, industry wrongdoing, and scientific fraud — and funds the legal battles that hold them accountable. The Autism Justice Foundation works in direct partnership with CHD and its President, Mary Holland."
              link="https://childrenshealthdefense.org"
            />
            <ResourceCard
              icon={<IconBox bg="bg-red-900" text="MCF" />}
              name="The McCullough Foundation"
              description="Founded by Dr. Peter McCullough — one of the most cited cardiologists in medical history — the McCullough Foundation advances truthful science and advocates for those harmed by COVID-era medical policies. Nick Holscher of the McCullough Foundation serves on the Justice for Autism Advisory Board."
              link="https://mcculloughfoundation.org"
            />
            <ResourceCard
              icon={<IconBox bg="bg-orange-700" text="HW" />}
              name="The HighWire with Del Bigtree"
              description="Del Bigtree is the producer of VAXXED: From Cover-Up to Catastrophe — the documentary that changed the conversation on vaccine safety. His weekly broadcast, The HighWire, reaches millions with uncensored investigative health journalism. Del is a Justice for Autism Advisory Board member and spoke at the CHD 'Moment of Truth' conference in Austin, November 2025."
              link="https://thehighwire.com"
            />
            <ResourceCard
              icon={<IconBox bg="bg-alg-navy" text="AJF" textColor="text-alg-gold" />}
              name="Autism Justice Foundation"
              description="Founded in September 2025 by Dr. Gary Kompothecras and Alex Kompothecras, the Autism Justice Foundation is a Florida-based 501(c)(4) nonprofit dedicated to advancing autism prevention, supporting affected families, and pushing for accountability in public health policy. The Foundation works alongside Children's Health Defense, the McCullough Foundation, and the Autism Society of Florida."
              link="https://alphainjurylaw.com"
            />
          </div>
        </div>

        {/* SECTION 2 — VICP Resources */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-10">
          <p className="text-alg-gold text-xs font-bold tracking-widest uppercase mb-1">VACCINE INJURY COMPENSATION</p>
          <h2 className="text-2xl font-bold tracking-tight text-alg-navy">VICP — Vaccine Court Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <ResourceCard
              icon={<IconBox bg="bg-blue-700" text="VICP" />}
              name="VICP Official Program (HHS)"
              description="The official U.S. government portal for the National Vaccine Injury Compensation Program, administered by the Health Resources and Services Administration (HRSA). File a petition, check claim status, review the Vaccine Injury Table, and access compensation data. VICP has paid over $5 billion in compensation since 1988."
              link="https://www.hrsa.gov/vaccine-compensation"
            />
            <ResourceCard
              icon={<IconBox bg="bg-gray-700" text="USCFC" />}
              name="U.S. Court of Federal Claims"
              description="The Vaccine Injury Compensation Program is adjudicated by the U.S. Court of Federal Claims in Washington, D.C. — also known as the 'Vaccine Court.' This is where VICP petitions are filed and heard before Special Masters. Strict filing deadlines apply — contact Alpha Law Group immediately to protect your rights."
              link="https://www.uscfc.uscourts.gov/vaccine-program"
            />
            <ResourceCard
              icon={<IconBox bg="bg-green-700" text="DATA" />}
              name="VICP Data & Statistics"
              description="HHS publishes monthly reports on all VICP claims filed, compensated, and dismissed. As of 2025, over 10,000 claims have been compensated totaling more than $5 billion. Review the data by vaccine type, injury, and year to understand the scope of vaccine injury recognition in America."
              link="https://www.hrsa.gov/vaccine-compensation/data"
            />
            <ResourceCard
              icon={<IconBox bg="bg-yellow-700" text="VAERS" />}
              name="Vaccine Adverse Event Reporting System (VAERS)"
              description="VAERS is the national early warning system for vaccine safety, co-managed by the CDC and FDA. Parents and physicians can submit reports of adverse events following vaccination. VAERS data is publicly searchable and has been central to research on vaccine-autism connections. Submitting a VAERS report is free and can support a VICP claim."
              link="https://vaers.hhs.gov"
            />
          </div>
        </div>

        {/* SECTION 3 — Autism Support */}
        <div className="bg-alg-navy/5 rounded-2xl p-8 mb-10">
          <p className="text-alg-gold text-xs font-bold tracking-widest uppercase mb-1">AUTISM SUPPORT</p>
          <h2 className="text-2xl font-bold tracking-tight text-alg-navy">Autism Support Organizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <ResourceCard
              icon={<IconBox bg="bg-blue-500" text="ASF" />}
              name="Autism Society of Florida"
              description="The Autism Society of Florida is the state's leading advocacy organization for individuals with autism and their families. ASF advocates for law enforcement training, legislative reform, and community inclusion — and is a key partner of the Autism Justice Foundation. Alex Kompothecras works directly with ASF President Stacey Hoaglund on training programs for Florida law enforcement."
              link="https://autismsocietyoffl.com"
            />
            <ResourceCard
              icon={<IconBox bg="bg-teal-600" text="THE HAVEN" />}
              name="The Haven (Sarasota)"
              description="The Haven is a Sarasota-based nonprofit providing support, education, and community for individuals with developmental disabilities and their families. The Haven is one of two direct beneficiaries of the Alpha Law Group Annual Autism 5K at Nathan Benderson Park."
              link="https://havenofrcma.org"
            />
            <ResourceCard
              icon={<IconBox bg="bg-green-600" text="TACA" />}
              name="TACA (Talk About Curing Autism)"
              description="TACA provides education, support, and hope to families affected by autism. Their peer mentorship network connects newly diagnosed families with experienced autism parents, and their resource library covers biomedical treatments, IEP guidance, and financial assistance programs."
              link="https://tacanow.org"
            />
          </div>
        </div>

        {/* SECTION 4 — Legal Rights */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-10">
          <p className="text-alg-gold text-xs font-bold tracking-widest uppercase mb-1">KNOW YOUR RIGHTS</p>
          <h2 className="text-2xl font-bold tracking-tight text-alg-navy">Legal Rights &amp; Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <ResourceCard
              icon={<IconBox bg="bg-indigo-700" text="IDEA" />}
              name="IDEA — Individuals with Disabilities Education Act"
              description="IDEA is the federal law guaranteeing children with disabilities, including autism, the right to a free and appropriate public education (FAPE) in the least restrictive environment. If your child's school is not following their IEP or denying services, you have federally protected legal rights. Alpha Law Group can help families understand and enforce these rights."
              link="https://sites.ed.gov/idea"
            />
            <ResourceCard
              icon={<IconBox bg="bg-purple-700" text="ADA" />}
              name="ADA — Americans with Disabilities Act"
              description="The ADA prohibits discrimination against individuals with disabilities in employment, public accommodations, transportation, and government services. Individuals with autism are protected under the ADA. If your family member has faced discrimination in the workplace, a school, or a public space, legal remedies are available."
              link="https://www.ada.gov"
            />
            <ResourceCard
              icon={<IconBox bg="bg-orange-600" text="APD" />}
              name="Florida Agency for Persons with Disabilities (APD)"
              description="Florida's APD oversees the delivery of services to Floridians with developmental disabilities, including autism. The agency administers the iBudget Waiver — a Medicaid waiver providing community-based services — and maintains a network of support coordinators and service providers statewide."
              link="https://apd.myflorida.com"
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-alg-navy text-white py-12 px-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Ready to take the first step?</h2>
          <p className="text-white/80 mb-6">Free consultation. No fees unless we win.</p>
          <Link
            href="/intake/phase-1"
            className="inline-block bg-alg-gold text-alg-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-alg-gold-light transition"
          >
            Begin Your Free Intake &rarr;
          </Link>
          <p className="mt-4 text-white/60 text-sm">
            (941) 304-1500 | alphainjurylaw.com
          </p>
        </div>
      </div>
    </div>
  )
}
