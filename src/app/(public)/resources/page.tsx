import Link from 'next/link'

const partners = [
  {
    name: "Children's Health Defense",
    mission: 'Nonprofit organization working to end childhood health epidemics by eliminating harmful exposures and holding corporations accountable.',
    link: 'https://childrenshealthdefense.org',
    logo: null,
  },
  {
    name: 'The HighWire with Del Bigtree',
    mission: 'Independent investigative news program covering vaccine safety, medical freedom, and health policy.',
    link: 'https://thehighwire.com',
    logo: null,
  },
  {
    name: 'McCullough Foundation',
    mission: 'Advancing evidence-based medicine and defending medical freedom through scientific research and public education.',
    link: 'https://mcculloughfoundation.com',
    logo: null,
  },
  {
    name: 'Autism Justice Foundation',
    mission: 'Advocating for autism families through legal action, public awareness, and coalition building to secure justice and accountability.',
    link: 'https://autismjusticefoundation.org',
    logo: 'ajf',
  },
  {
    name: 'HRSA Vaccine Injury Compensation Program',
    mission: 'Federal program providing compensation for vaccine-related injuries — the pathway for autism families with encephalopathy claims.',
    link: 'https://www.hrsa.gov/vaccine-compensation',
    logo: <span className="font-bold text-[#0a1628] text-lg">HRSA</span>,
  },
  {
    name: 'Autism Science Foundation',
    mission: 'Funding and accelerating autism research to improve diagnosis, treatment, and quality of life.',
    link: 'https://autismsciencefoundation.org',
    logo: <span className="font-bold text-[#111827] text-sm">Autism Science Foundation</span>,
  },
  {
    name: 'SafeMinds',
    mission: 'Research and education organization focused on the environmental causes of autism and related neurological disorders.',
    link: 'https://safeminds.org',
    logo: <span className="font-bold text-[#111827] text-sm">SafeMinds</span>,
  },
]

const legalResources = [
  {
    name: 'VICP Official Program (HHS)',
    description: 'The official U.S. government portal for the National Vaccine Injury Compensation Program. File a petition, check claim status, and review the Vaccine Injury Table.',
    link: 'https://www.hrsa.gov/vaccine-compensation',
  },
  {
    name: 'U.S. Court of Federal Claims',
    description: 'The Vaccine Court where VICP petitions are filed and heard before Special Masters. Strict filing deadlines apply.',
    link: 'https://www.uscfc.uscourts.gov/vaccine-program',
  },
  {
    name: 'VICP Data & Statistics',
    description: 'Monthly reports on all VICP claims filed, compensated, and dismissed. Over $5 billion paid since 1988.',
    link: 'https://www.hrsa.gov/vaccine-compensation/data',
  },
  {
    name: 'VAERS — Vaccine Adverse Event Reporting System',
    description: 'The national early warning system for vaccine safety, co-managed by CDC and FDA. Publicly searchable database.',
    link: 'https://vaers.hhs.gov',
  },
]

export default function ResourcesPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Page Title */}
        <section className="bg-white border-b border-[#E2E8F0] py-14 -mt-16 -mx-4 px-6 mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold tracking-widest uppercase text-[#0a1628] mb-3">Partner Network</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4" style={{fontFamily:'Georgia,serif'}}>
              Resources &amp; Partners
            </h1>
            <p className="text-lg text-[#475569] max-w-2xl mx-auto">
              Organizations, legal resources, and advocacy partners supporting autism families.
            </p>
          </div>
        </section>

        {/* Partner Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {partners.map((partner) =>
            partner.logo === 'ajf' ? (
              <a key={partner.name} href="https://autismjusticefoundation.org" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                <img
                  src="/ajf-logo.png"
                  alt="Autism Justice Foundation"
                  className="w-64 h-auto object-contain hover:opacity-90 transition"
                />
                <span className="text-xs font-medium text-[#475569] group-hover:text-[#d4a843] transition text-center">Autism Justice Foundation</span>
              </a>
            ) : (
              <div key={partner.name} className="bg-white border border-[#E2E8F0] rounded-lg p-6 hover:border-[#0a1628] hover:shadow-md transition group">
                {partner.logo && (
                  <div className="h-16 flex items-center mb-4">
                    {partner.logo}
                  </div>
                )}
                <h3 className="font-semibold text-[#111827] mb-2">{partner.name}</h3>
                <p className="text-sm text-[#475569] mb-4">{partner.mission}</p>
                <a href={partner.link} target="_blank" rel="noopener noreferrer" className="text-sm text-[#0a1628] hover:text-[#d4a843] font-medium">
                  Visit Site &rarr;
                </a>
              </div>
            )
          )}
        </div>

        {/* Legal Resources Section */}
        <div className="border-t border-[#E2E8F0] pt-12">
          <h2 className="text-2xl font-bold text-[#111827] mb-6">Legal Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legalResources.map((resource) => (
              <div key={resource.name} className="bg-white border border-[#E2E8F0] rounded-lg p-6 hover:border-[#0a1628] hover:shadow-md transition group">
                <div className="h-16 flex items-center mb-4">
                  <div className="w-10 h-10 rounded bg-[#fdf8ee] flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0a1628]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-[#111827] mb-2">{resource.name}</h3>
                <p className="text-sm text-[#475569] mb-4">{resource.description}</p>
                <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-sm text-[#0a1628] hover:text-[#d4a843] font-medium">
                  Visit Site &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#0a1628] text-white py-12 px-8 rounded-2xl text-center mt-16">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Ready to take the first step?</h2>
          <p className="text-white/80 mb-6">Free consultation. No fees unless we win.</p>
          <Link
            href="/intake/phase-1"
            className="inline-block bg-[#d4a843] text-[#0a1628] font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#b8902e] transition"
          >
            Begin Your Free Intake &rarr;
          </Link>
          <p className="mt-4 text-white/60 text-sm">
            (941) 304-1500 | gethelpforautism.com
          </p>
        </div>
      </div>
    </div>
  )
}
