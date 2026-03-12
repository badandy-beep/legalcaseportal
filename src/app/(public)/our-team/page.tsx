import Link from 'next/link'

export default function OurTeamPage() {
  return (
    <>
      {/* ── SECTION 1: ALPHA LAW GROUP LEGAL TEAM ── */}
      <section className="bg-white py-16 border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-[#0a1628] mb-3">Legal Representation</p>
            <h1 className="text-4xl font-bold text-[#111827] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Alpha Law Group
            </h1>
            <p className="text-lg text-[#475569] max-w-3xl mx-auto">
              Our legal team fights exclusively for vaccine-injured families through the federal VICP process — on a contingency basis, with zero upfront cost to your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Alex J. Kompothecras */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm">
              <img src="/Alex-Kompothecras.webp" alt="Alex J. Kompothecras" className="w-full h-80 object-cover object-top" />
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#111827] mb-1" style={{fontFamily:'Georgia,serif'}}>Alex J. Kompothecras</h2>
                <p className="text-[#0a1628] font-semibold text-sm mb-1">Managing Attorney — Alpha Law Group</p>
                <p className="text-xs text-[#475569] italic mb-5">Board of Directors — Autism Justice Foundation</p>

                {/* Credential badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">Florida Bar Certified</span>
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">12th Judicial Circuit</span>
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">VICP Specialist</span>
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">No Fee Unless We Win</span>
                </div>

                <div className="space-y-4 text-base text-[#475569] leading-relaxed">
                  <p>
                    Alex J. Kompothecras is the Managing Attorney of Alpha Law Group, a personal injury and civil litigation firm headquartered in Sarasota, Florida. Licensed in Florida&apos;s 12th Judicial Circuit, Alex handles automobile and truck accidents, catastrophic injury, wrongful death, medical malpractice, and product liability cases.
                  </p>
                  <p>
                    Alex grew up alongside his two siblings, Bronson and Sarah Alice, both diagnosed with severe autism as toddlers. That experience shaped everything. He did not choose autism advocacy. It chose him.
                  </p>
                  <p>
                    In September 2024, Alex learned about Francisco Diaz-Burgos — a 30-year-old man with autism who was tased and jailed for three weeks after trying to help his father during a police stop. Alex paid his bail out of his own pocket, wrote a letter to the State Attorney, and helped secure a full dismissal of all charges. He is now building ASD sensitivity training for Florida law enforcement and prosecutors.{' '}
                    <a
                      href="/our-story#francisco"
                      className="text-[#0a1628] underline hover:text-[#d4a843] font-medium"
                    >
                      Read the full story &rarr;
                    </a>
                  </p>
                  <p>
                    In September 2025, Alex co-founded the <strong className="text-[#111827]">Autism Justice Foundation</strong> alongside his father, Dr. Gary Kompothecras, and now leads VICP filings for autism families across Florida on a pure contingency basis — no fees unless compensation is recovered.
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#E2E8F0] flex items-center justify-between">
                  <a href="tel:9413041500" className="text-sm text-[#0a1628] font-bold hover:text-[#d4a843] transition">(941) 304-1500</a>
                  <a href="/intake/phase-1" className="bg-[#d4a843] hover:bg-[#b8902e] text-white text-xs font-semibold px-4 py-2 rounded-lg transition">Start My Claim &rarr;</a>
                </div>
              </div>
            </div>

            {/* Chase J. Engelbrecht */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm">
              <img src="/Chase-Engelbrecht.webp" alt="Chase J. Engelbrecht" className="w-full h-80 object-cover object-top" />
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#111827] mb-1" style={{fontFamily:'Georgia,serif'}}>Chase J. Engelbrecht</h2>
                <p className="text-[#0a1628] font-semibold text-sm mb-5">Attorney — Alpha Law Group</p>

                {/* Credential badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">Super Lawyers&reg; Rated</span>
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">Florida Bar Certified</span>
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">12th Judicial Circuit</span>
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">VICP Advocate</span>
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">No Fee Unless We Win</span>
                </div>

                <div className="space-y-4 text-base text-[#475569] leading-relaxed">
                  <p>
                    Chase J. Engelbrecht is an attorney at Alpha Law Group, practicing personal injury and civil litigation in Sarasota, Florida&apos;s 12th Judicial Circuit. Recognized by Super Lawyers&reg; as a Rising Star, Chase handles automobile accidents, catastrophic injury, wrongful death, and premises liability matters.
                  </p>
                  <p>
                    Chase came to Alpha Law Group because he shares Alex&apos;s conviction that injured families deserve a lawyer who actually fights for them. He has become a core part of the firm&apos;s autism advocacy work — supporting VICP families through the intake and filing process and helping build the case that the federal compensation system has left too many families behind.
                  </p>
                  <p>
                    Chase participates in the firm&apos;s ASD community outreach, including the{' '}
                    <a
                      href="https://runsignup.com/Race/FL/Sarasota/AlphaLawGroupAutism5K"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0a1628] underline hover:text-[#d4a843] font-medium"
                    >
                      Alpha Law Group Autism 5K
                    </a>
                    {' '}at Nathan Benderson Park — now in its second year — benefiting the Autism Society of Florida and The Haven of Sarasota. He represents every VICP family on pure contingency — no fees unless compensation is recovered.
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#E2E8F0] flex items-center justify-between">
                  <a href="tel:9413041500" className="text-sm text-[#0a1628] font-bold hover:text-[#d4a843] transition">(941) 304-1500</a>
                  <a href="/intake/phase-1" className="bg-[#d4a843] hover:bg-[#b8902e] text-white text-xs font-semibold px-4 py-2 rounded-lg transition">Start My Claim &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: ENTITY SEPARATION NOTICE ── */}
      <section className="bg-[#F8F9FA] border-b border-[#E2E8F0] py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="border-l-4 border-[#d4a843] pl-6">
            <p className="text-xs font-bold tracking-widest uppercase text-[#0a1628] mb-2">Important Legal Distinction</p>
            <p className="text-base text-[#475569] leading-relaxed">
              Alpha Law Group is a private law firm providing legal representation for VICP claims. The Autism Justice Foundation is a separate and distinct 501(c)(4) nonprofit advocacy organization. While our founders share a common mission, the two entities operate independently. Alex J. Kompothecras serves on the Autism Justice Foundation Board of Directors in a personal advocacy capacity, entirely separate from his role as Managing Attorney of Alpha Law Group.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: AJF TEAM HEADER ── */}
      <section className="bg-white pt-16 pb-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <img src="/ajf-logo.png" alt="Autism Justice Foundation" className="h-16 w-auto object-contain mb-4 mx-auto" />
          <p className="text-xs font-bold tracking-widest uppercase text-[#475569] mb-3">
            501(c)(4) Nonprofit Advocacy Organization — autismjusticefoundation.org
          </p>
          <h2 className="text-3xl font-bold text-[#111827] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Autism Justice Foundation Team
          </h2>
          <p className="text-lg text-[#475569] max-w-3xl mx-auto">
            The Autism Justice Foundation is an independent 501(c)(4) nonprofit organization. Its team, leadership, and advisory board operate separately from Alpha Law Group. The Foundation is dedicated to exposing vaccine risks, advocating for children&rsquo;s health, and supporting autism families nationwide.
          </p>
        </div>
      </section>

      {/* ── SECTION 4: AJF CO-FOUNDERS & BOARD ── */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-block bg-[#0a1628] text-[#d4a843] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              Co-Founders &amp; Board of Directors
            </div>
            <h2 className="text-3xl font-bold text-[#0a1628]" style={{fontFamily:'Georgia,serif'}}>
              The People Behind the Mission
            </h2>
            <p className="mt-3 text-[#475569] max-w-2xl mx-auto text-base">
              The Autism Justice Foundation was built by a family that lived it — and the professionals who answered the call.
            </p>
          </div>

          {/* Board Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* GARY & BETH KOMPOTHECRAS — JOINT CARD */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#E2E8F0] flex flex-col">
              <div className="relative">
                <img
                  src="/gary-and-beth-kompothecras.webp"
                  alt="Dr. Gary and Beth Kompothecras, Co-Founders of the Autism Justice Foundation"
                  className="w-full h-72 object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#d4a843]" />
                <div className="absolute top-3 left-3 bg-[#0a1628]/85 text-[#d4a843] text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm tracking-wide">
                  Co-Founders
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#0a1628] mb-0.5" style={{fontFamily:'Georgia,serif'}}>
                  Dr. Gary &amp; Beth Kompothecras
                </h3>
                <p className="text-[#d4a843] font-semibold text-sm mb-1">Co-Founders — Autism Justice Foundation</p>
                <p className="text-xs text-[#475569] italic mb-4">Siesta Key, Florida</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">FL Governor&apos;s Autism Task Force</span>
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">1-800-ASK-GARY Founder</span>
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">DeSantis Appointee 2026</span>
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">20+ Years of Autism Advocacy</span>
                </div>
                <div className="space-y-3 text-base text-[#475569] leading-relaxed">
                  <p>
                    Dr. Gary and Beth Kompothecras raised six children on Siesta Key in Sarasota, Florida. Two of them — Bronson and Sarah Alice — were diagnosed with severe autism as toddlers. Bronson spent years in intensive therapy simply learning to say the name of his favorite toy. Sarah Alice still repeats back what people say to her, a form of echolalia common in nonverbal autism. For Gary and Beth, autism is not a cause they discovered. It is the daily reality of their family.
                  </p>
                  <p>
                    Dr. Gary — who built 1-800-ASK-GARY from a single Sarasota clinic in 1996 into a $100M+ referral network spanning 28 offices across three states — channeled that same relentless drive into the autism policy arena. In 2008, Governor Charlie Crist appointed him to the <strong className="text-[#0a1628]">Florida Governor&apos;s Task Force on Autism Spectrum Disorders</strong>, where he served alongside former NFL quarterback Dan Marino. He personally lobbied the Florida legislature for what would have been the nation&apos;s strictest thimerosal restriction law, pledging every political relationship and dollar he had to get it passed. He commissioned independent research using Florida&apos;s Medicaid database to study vaccine-autism connections. He brought the documentary <em>Vaxxed</em> to Sarasota at his own expense. Both Bronson and Sarah Alice were petitioners in the federal Vaccine Court.
                  </p>
                  <p>
                    Beth has been beside him for all of it — and in many ways ahead of it. As the mother who has navigated the daily weight of raising two severely autistic adults through a system that was never designed for families like theirs, Beth is the emotional backbone of everything the Kompothecras family has built. She and Gary have hosted autism fundraising galas at their Siesta Key estate for years, and she has worked alongside him in advocating to Florida&apos;s congressional delegation and supporting the Autism Society of Florida. In January 2026, Governor DeSantis appointed Dr. Gary to the <strong className="text-[#0a1628]">Florida Board of Chiropractic Medicine</strong>. In September 2025, Gary and Beth co-founded the <strong className="text-[#0a1628]">Autism Justice Foundation</strong> — because after twenty years of fighting the system, they knew exactly where families were being left behind.
                  </p>
                </div>
              </div>
            </div>

            {/* WILLIAM COLLIER JR. */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#E2E8F0] flex flex-col">
              <div className="relative">
                <div className="w-full h-72 bg-[#0a1628] flex items-center justify-center">
                  <span className="text-[#d4a843] text-5xl font-bold" style={{fontFamily:'Georgia,serif'}}>WC</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#d4a843]" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#0a1628] mb-0.5" style={{fontFamily:'Georgia,serif'}}>
                  William Collier Jr.
                </h3>
                <p className="text-[#d4a843] font-semibold text-sm mb-1">Board of Directors — Autism Justice Foundation</p>
                <p className="text-xs text-[#475569] italic mb-4">Digital Media &amp; Technology | Noetic Dharma Group</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">U.S. Navy Veteran</span>
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">Publisher &amp; Media Strategist</span>
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">Freedomist Network</span>
                </div>
                <p className="text-base text-[#475569] leading-relaxed">
                  William Collier Jr. is a U.S. Navy veteran, publisher, and digital media strategist with over two decades building advocacy platforms and independent media networks. As publisher of the Freedomist Network and founder of Regal Blue Media, Bill has spent his career amplifying voices that institutional media ignores. At Noetic Dharma Group, he leads digital strategy and technology development for the MAHA reform ecosystem — including this portal. He joined the Autism Justice Foundation Board because the mission is exactly what he has always built toward: technology and media in the direct service of justice for families the system forgot.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 5: SCIENTIFIC & MEDICAL ADVISORY BOARD ── */}
      <section className="bg-[#F8F9FA] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-lg font-bold text-[#111827] pb-3 border-b border-[#E2E8F0] mb-8">Scientific &amp; Medical Advisory Board</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Dr. Andrew Wakefield */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm">
              <img src="https://autismjusticefoundation.org/wp-content/uploads/2021/05/wakefield.jpg" alt="Dr. Andrew Wakefield" className="w-full h-52 object-cover object-top" />
              <div className="p-4">
                <h4 className="text-base font-bold text-[#111827]" style={{ fontFamily: 'Georgia, serif' }}>Dr. Andrew Wakefield</h4>
                <p className="text-[#0a1628] font-semibold text-xs mb-2">Medical Advisory Board Chairman</p>
                <p className="text-base text-[#475569] leading-relaxed">
                  A graduate of St. Mary&rsquo;s Hospital Medical School in London, Dr. Wakefield served as a consultant in experimental gastroenterology at the Royal Free Hospital, publishing over 140 peer-reviewed papers on inflammatory bowel disease. His 1998 research highlighted potential associations between the MMR vaccine, gastrointestinal issues, and autism spectrum disorders. Despite retraction of his paper in 2010 and removal from the UK medical register — which he has consistently disputed — Dr. Wakefield continued his global advocacy through the documentary &lsquo;Vaxxed: From Cover-Up to Catastrophe&rsquo; and public engagements. Recent whistleblower testimonies and the CDC&rsquo;s planned vaccine-autism study under HHS Secretary Robert F. Kennedy Jr. have renewed attention to his findings.
                </p>
              </div>
            </div>

            {/* Mary Holland, J.D. */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm">
              <img src="https://autismjusticefoundation.org/wp-content/uploads/2025/09/B1-nE0WDyS-768x1137.jpg" alt="Mary Holland, J.D." className="w-full h-52 object-cover object-top" />
              <div className="p-4">
                <h4 className="text-base font-bold text-[#111827]" style={{ fontFamily: 'Georgia, serif' }}>Mary Holland, J.D.</h4>
                <p className="text-[#0a1628] font-semibold text-xs mb-2">Advisory Board · Speakers Panel</p>
                <p className="text-base text-[#475569] leading-relaxed">
                  Educated at Harvard University (undergraduate) and Columbia University (J.D.), Mary Holland served on the faculty of NYU School of Law from 2002–2019 as Director of the Graduate Lawyering Program and Research Scholar. She co-founded the Elizabeth Birt Center for Autism Law and Advocacy. As CEO and General Counsel of Children&rsquo;s Health Defense, Holland has led federal and state lawsuits challenging vaccine mandates, testified before state legislatures on vaccine exemptions, and co-authored influential books including &lsquo;Vaccine Epidemic&rsquo; (2011), &lsquo;The HPV Vaccine on Trial&rsquo; (2018), and &lsquo;Turtles All the Way Down&rsquo; (2022). She contributed as a strategist and director of volunteers for RFK Jr.&rsquo;s 2023 presidential campaign and is a recognized leader in the Make America Healthy Again movement.
                </p>
              </div>
            </div>

            {/* Dr. David J. Weldon */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm">
              <img src="https://autismjusticefoundation.org/wp-content/uploads/2021/05/David_Weldon.jpg" alt="Dr. David J. Weldon" className="w-full h-52 object-cover object-top" />
              <div className="p-4">
                <h4 className="text-base font-bold text-[#111827]" style={{ fontFamily: 'Georgia, serif' }}>Dr. David J. Weldon</h4>
                <p className="text-[#0a1628] font-semibold text-xs mb-2">Advisory Board · Speakers Panel</p>
                <p className="text-base text-[#475569] leading-relaxed">
                  A graduate of Stony Brook University (B.S. Biochemistry, 1978) and University at Buffalo School of Medicine (M.D., 1981), Dr. Weldon served as a U.S. Army physician from 1981–1987. He represented Florida&rsquo;s 15th congressional district from 1995–2009, founding the Congressional Autism Caucus and introducing the Mercury-Free Vaccines Act in 2004 to ban thimerosal. In 2007 he co-sponsored the Vaccine Safety and Public Confidence Assurance Act. In November 2024, President Trump nominated Dr. Weldon to serve as CDC Director; the nomination was withdrawn in March 2025. He continues to advocate for rigorous, independent vaccine safety evaluations and serves on the Autism Justice Foundation Scientific Panel.
                </p>
              </div>
            </div>

            {/* Dr. Anthony R. Mawson */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm">
              <img src="https://autismjusticefoundation.org/wp-content/uploads/2025/09/signal-2025-09-25-082454_002.jpg.png" alt="Dr. Anthony R. Mawson" className="w-full h-52 object-cover object-top" />
              <div className="p-4">
                <h4 className="text-base font-bold text-[#111827]" style={{ fontFamily: 'Georgia, serif' }}>Dr. Anthony R. Mawson</h4>
                <p className="text-[#0a1628] font-semibold text-xs mb-2">Scientific Advisory Board</p>
                <p className="text-base text-[#475569] leading-relaxed">
                  Dr. Mawson holds a B.A. in Sociology and Psychology from McGill University (1971), an M.A. in Sociology from University of Essex (1972), and both an MPH and DrPH in Epidemiology from Tulane University. His career spans academia and public health, including positions at Louisiana State University Medical Center, Des Moines University, and Jackson State University, where he secured multimillion-dollar NIH and USDA grants. Since 2011, he has been Visiting Professor at Jackson State and President of the Chalfont Research Institute. His landmark 2017, 2020, and 2025 studies — including a Medicaid-based study in Florida — suggest links between vaccination schedules and autism. He has served as Special Issue Editor for the International Journal of Environmental Research and Public Health.
                </p>
              </div>
            </div>

            {/* J.B. Handley */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm">
              <img src="https://autismjusticefoundation.org/wp-content/uploads/2025/09/EC1EB0E0-2713-4419-A3CB-F142868593AD.jpg.png" alt="J.B. Handley" className="w-full h-52 object-cover object-top" />
              <div className="p-4">
                <h4 className="text-base font-bold text-[#111827]" style={{ fontFamily: 'Georgia, serif' }}>J.B. Handley</h4>
                <p className="text-[#0a1628] font-semibold text-xs mb-2">Scientific Advisory Board</p>
                <p className="text-base text-[#475569] leading-relaxed">
                  A graduate of Stanford University (B.A. Economics &amp; East Asian Studies, 1987, with honors), Handley co-founded Swander Pace Capital in 1996, overseeing multimillion-dollar consumer product investments. Following his son&rsquo;s autism diagnosis in 2004, he shifted to advocacy — co-founding Generation Rescue in 2005, a nonprofit dedicated to autism recovery and vaccine safety. His seminal 2018 book &lsquo;How to End the Autism Epidemic&rsquo; argues that aluminum adjuvants in the childhood vaccine schedule trigger autism. In 2021, he co-authored &lsquo;Underestimated: An Autism Miracle&rsquo; with his son Jamison and co-produced the documentary &lsquo;Spellers.&rsquo; A pioneer in the MAHA movement, Handley continues to demand accountability in public health.
                </p>
              </div>
            </div>

            {/* Nicolas Hulscher, MPH */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm">
              <img src="/nicolas-hulscher.webp" alt="Nicolas Hulscher, MPH" className="w-full h-52 object-cover object-top" />
              <div className="p-4">
                <h4 className="text-base font-bold text-[#111827]" style={{ fontFamily: 'Georgia, serif' }}>Nicolas Hulscher, MPH</h4>
                <p className="text-[#0a1628] font-semibold text-xs mb-2">Advisory Board · Epidemiologist</p>
                <p className="text-base text-[#475569] leading-relaxed">
                  Epidemiologist and Administrator at the McCullough Foundation. Holds an MPH in Epidemiology from the University of Michigan School of Public Health (2024). Author of more than 20 peer-reviewed scientific publications on vaccine injury syndromes, SARS-CoV-2 pathophysiology, and the determinants of autism spectrum disorder. A rising voice in the MAHA movement, Hulscher&rsquo;s research has been cited by prominent public health reform advocates and contributes foundational evidence to the Autism Justice Foundation&rsquo;s scientific framework.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: SPEAKERS PANEL ── */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-lg font-bold text-[#111827] pb-3 border-b border-[#E2E8F0] mb-8">Speakers Panel &amp; Advocates</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* David "Nino" Rodriguez */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm">
              <img src="https://autismjusticefoundation.org/wp-content/uploads/2025/09/1384805716.jpg" alt='David "Nino" Rodriguez' className="w-full h-64 object-cover object-top" />
              <div className="p-6">
                <h4 className="text-lg font-bold text-[#111827]" style={{ fontFamily: 'Georgia, serif' }}>David &ldquo;Nino&rdquo; Rodriguez</h4>
                <p className="text-[#0a1628] font-semibold text-sm mb-3">Speakers Panel &amp; Advisory Board</p>
                <p className="text-base text-[#475569] leading-relaxed">
                  A former undefeated heavyweight boxing contender from El Paso, Texas, David compiled a professional record of 37-2 with 35 knockouts — including 24 first-round knockouts, surpassing Mike Tyson&rsquo;s career total. His titles include the Texas, New Mexico, and NABO Heavyweight Championships. In his post-boxing career, David hosts the &lsquo;Nino&rsquo;s Corner Podcast,&rsquo; consistently ranking among the top-rated shows on Apple Podcasts with a 4.9-star rating. An anti-bullying keynote speaker, founder of the KO Bullying project, and author of &lsquo;When the Lights Go Out: From Survivor to Champion,&rsquo; David has spoken at schools nationwide. Having recently become a father, he is fully committed to the Autism Justice Foundation&rsquo;s mission — leveraging his massive platform to expose vaccine-related harms and protect children&rsquo;s neurological health.
                </p>
              </div>
            </div>

            {/* AJF Info Card */}
            <div className="bg-[#F8F9FA] border border-[#E2E8F0] rounded-xl p-8 flex flex-col justify-center">
              <img src="/ajf-logo.png" alt="Autism Justice Foundation" className="h-12 w-auto object-contain mb-4" />
              <p className="text-base text-[#475569] leading-relaxed mb-4">
                The Autism Justice Foundation is a DBA of Justice for Autism, a registered 501(c)(4) nonprofit advocacy organization. All Foundation activities, staff, and advisory board members operate independently of Alpha Law Group&rsquo;s legal practice. To learn more or support the Foundation&rsquo;s mission, visit autismjusticefoundation.org.
              </p>
              <a href="https://autismjusticefoundation.org" target="_blank" rel="noopener noreferrer" className="text-[#0a1628] font-semibold text-sm hover:underline">
                Visit autismjusticefoundation.org &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
