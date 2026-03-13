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
                  <span className="inline-flex items-center gap-2 bg-[#0a1628] text-[#d4a843] border border-[#d4a843]/60 px-3 py-1.5 rounded-full text-xs font-bold">
                    <img src="/chase-elite-lawyer-2026.png" alt="Elite Lawyer 2026" className="h-5 w-auto" />
                    Elite Lawyer&reg; 2026 — Personal Injury
                  </span>
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

          <div className="text-center mb-14">
            <div className="inline-block bg-[#0a1628] text-[#d4a843] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              Co-Founders &amp; Board of Directors
            </div>
            <h2 className="text-3xl font-bold text-[#0a1628]" style={{fontFamily:'Georgia,serif'}}>
              The People Behind the Mission
            </h2>
            <p className="mt-3 text-[#475569] max-w-2xl mx-auto text-base">
              The Autism Justice Foundation was built by a family that lived it — and fought for it for over two decades.
            </p>
          </div>

          {/* ROW 1 — Gary & Beth, full page width */}
          <div className="mb-10">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#E2E8F0]">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5 flex-shrink-0">
                  <div className="relative">
                    <img
                      src="/gary-beth-gala.webp"
                      alt="Dr. Gary and Beth Kompothecras, Co-Founders of the Autism Justice Foundation"
                      className="w-full h-72 lg:h-80 object-cover object-top"
                    />
                    <div className="absolute top-3 left-3 bg-[#0a1628]/90 text-[#d4a843] text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                      Co-Founders
                    </div>
                  </div>
                  <div className="border-t-2 border-[#d4a843]">
                    <img
                      src="/gary-beth-family.webp"
                      alt="The Kompothecras family — Gary, Beth, Alex in the tree, Sarah Alice center, Bronson right"
                      className="w-full h-52 object-cover object-top"
                    />
                    <p className="text-xs text-[#475569] italic text-center px-4 py-2 bg-[#F8F9FA] border-t border-[#E2E8F0]">
                      The Kompothecras family — Alex (in the tree), Sarah Alice (center), and Bronson (right, in blue). Two of the six children were diagnosed with severe autism as toddlers.
                    </p>
                  </div>
                </div>
                <div className="lg:w-3/5 p-7 lg:p-10 flex flex-col justify-start">
                  <h3 className="text-2xl font-bold text-[#0a1628] mb-1" style={{fontFamily:'Georgia,serif'}}>
                    Dr. Gary &amp; Beth Kompothecras
                  </h3>
                  <p className="text-[#d4a843] font-semibold text-base mb-1">Co-Founders — Autism Justice Foundation</p>
                  <p className="text-xs text-[#475569] italic mb-5">Siesta Key, Florida — 40 Years a Sarasota Family</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">FL Governor&apos;s Autism Task Force</span>
                    <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">1-800-ASK-GARY Founder</span>
                    <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">DeSantis Appointee 2026</span>
                    <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">Federal VICP Petitioners</span>
                    <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">Congressional Autism Hearing</span>
                    <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">Medical Freedom Champion</span>
                  </div>
                  <div className="space-y-4 text-base text-[#475569] leading-relaxed">
                    <p>
                      Dr. Gary and Beth Kompothecras have called Siesta Key home for over forty years. They raised six children in one of the island&apos;s most storied homes — and two of them, Bronson and Sarah Alice, were diagnosed with severe autism as toddlers. Bronson spent years in intensive daily therapy learning to say the name of his favorite toy. Sarah Alice developed echolalia. For Gary and Beth, autism is not a cause they discovered. It is Tuesday morning — and every morning since.
                    </p>
                    <p>
                      When the system refused to give them answers, Dr. Gary turned the same engine that built 1-800-ASK-GARY — launched from his first chiropractic clinic in 1995 and grown into a $100 million referral network across 28 offices and three states — into a twenty-year policy fight. In 2008, Governor Charlie Crist appointed him to the <strong className="text-[#0a1628]">Florida Governor&apos;s Task Force on Autism Spectrum Disorders</strong>, where he served alongside Dan Marino. He championed what would have been the <strong className="text-[#0a1628]">nation&apos;s strictest thimerosal restriction law</strong>. He produced a 46-minute documentary of the 2008 Florida legislative hearing. He commissioned research using Florida&apos;s Medicaid database. He traveled to Washington for the <strong className="text-[#0a1628]">U.S. Congressional Committee on Government Oversight and Reform</strong> autism hearing. He funded screenings of the documentary <em>Vaxxed</em> across Sarasota. He and Beth filed both Bronson and Sarah Alice as <strong className="text-[#0a1628]">petitioners in the federal Vaccine Injury Compensation Program</strong>.
                    </p>
                    <p>
                      Beth was never a bystander. She made her own independent political contributions to the Congressional members advancing autism accountability legislation, including Congressmen Posey and Buchanan. As the mother present at every therapy session, every institutional wall, and every hard-won inch of progress for Bronson and Sarah Alice, Beth is the moral anchor of everything this family built. Together, they hosted autism fundraising galas at their Siesta Key estate and were longtime supporters of the Autism Society of Florida.
                    </p>
                    <p>
                      In January 2026, Governor DeSantis — whose fundraiser Gary hosted at his Siesta Key home — appointed Dr. Gary to the <strong className="text-[#0a1628]">Florida Board of Chiropractic Medicine</strong>. That same month, the Florida Legislature began advancing the Medical Freedom Act (SB 1756), the very type of parental vaccine choice legislation Gary had championed fifteen years earlier — now a DeSantis administration priority. In September 2025, Gary and Beth co-founded the <strong className="text-[#0a1628]">Autism Justice Foundation</strong>. The moment the country finally caught up to them, they were ready.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 2 — 2-per-row grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* ALEX KOMPOTHECRAS */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#E2E8F0] flex flex-col">
              <div className="relative">
                <img
                  src="/Alex-Kompothecras.webp"
                  alt="Alex J. Kompothecras, Managing Attorney, Alpha Law Group"
                  className="w-full h-64 object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#d4a843]" />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#0a1628] mb-0.5" style={{fontFamily:'Georgia,serif'}}>
                  Alex J. Kompothecras
                </h3>
                <p className="text-[#d4a843] font-semibold text-sm mb-1">Board of Directors — Autism Justice Foundation</p>
                <p className="text-xs text-[#475569] italic mb-5">Managing Attorney &amp; Co-Founder, Alpha Law Group | Sarasota, FL</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">Honorary Board Member, ASF</span>
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">Founder — Alpha Law 5K Run</span>
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">Super Lawyers&reg; Rated</span>
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">Big Brother to Autism Families</span>
                </div>
                <div className="space-y-3 text-base text-[#475569] leading-relaxed">
                  <p>
                    Alex J. Kompothecras grew up watching his younger siblings Bronson and Sarah Alice navigate a world that was not built for them. That experience shaped everything. He became an attorney. He founded Alpha Law Group. And he carried the family&apos;s decades-long autism advocacy into his professional life — not as an obligation, but as a calling.
                  </p>
                  <p>
                    Alex is the founder of the <strong className="text-[#0a1628]">annual Alpha Law Group Autism 5K Run</strong>, which benefits the Autism Society of Florida and The Haven, funding first responder training, drowning prevention programs, and community education. He serves as an <strong className="text-[#0a1628]">Honorary Board Member of the Autism Society of Florida</strong>. He describes himself not just as an advocate, but as a &ldquo;big brother&rdquo; to individuals with autism and the families who love them — an approach grounded in compassion and the assurance that no family stands alone.
                  </p>
                  <p>
                    As managing attorney and AJF Board member, Alex brings the legal firepower to match the family&apos;s advocacy. The federal VICP system is complicated. He makes it navigable.
                  </p>
                </div>
              </div>
            </div>


          </div>

          {/* WILLIAM R. COLLIER JR. — Full-width horizontal card */}
          <div className="mt-10 bg-white rounded-2xl overflow-hidden shadow-md border border-[#E2E8F0]">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 flex-shrink-0">
                <div className="relative h-full" style={{minHeight:'320px'}}>
                  <img
                    src="/william-collier-jr.jpg"
                    alt="William R. Collier Jr., Board of Directors, Autism Justice Foundation"
                    className="w-full h-full object-cover object-top"
                    style={{minHeight:'320px'}}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#d4a843]" />
                </div>
              </div>
              <div className="lg:w-2/3 p-8 lg:p-10 flex flex-col justify-start">
                <h3 className="text-2xl font-bold text-[#0a1628] mb-0.5" style={{fontFamily:'Georgia,serif'}}>
                  William R. Collier Jr.
                </h3>
                <p className="text-[#d4a843] font-semibold text-base mb-1">Board of Directors — Autism Justice Foundation</p>
                <p className="text-xs text-[#475569] italic mb-5">Digital Strategy &amp; Platform Architecture · Co-Founder, Vaccine Veritas</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">U.S. Navy Veteran — Intelligence Analysis</span>
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">RNC · NRCC · NRSC</span>
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">Endorsed: Steve Forbes · Sen. Rand Paul</span>
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">Co-Author, The Capitalist Manifesto (2020)</span>
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">30+ Years · 20+ Congressional Clients</span>
                </div>
                <div className="space-y-4 text-base text-[#475569] leading-relaxed">
                  <p>William R. Collier Jr. is a U.S. Navy veteran who served during the Cold War with a specialty in intelligence analysis. That discipline — systematic research, pattern identification, and targeted communication — has defined three decades of work in political consulting, digital strategy, and opposition research.</p>
                  <p>In 1992, Collier founded Kross Publishing and launched a community newspaper in New Mexico. In 2008, he served as Community Governance Adviser for Team Sarah — at the time the largest conservative online platform supporting a national campaign — and applied intelligence-methodology research to expose a coordinated smear operation, resulting in a public apology from David Letterman to Sarah Palin. He was among the earliest organizers of the Tea Party movement, and served as associate producer on <em>The Undefeated</em> (2011).</p>
                  <p>In 2015, he founded Regal Blue Media LLC (Pennsylvania), specializing in web strategy, digital communications, and censorship navigation for advocacy organizations. He is a principal in Intellz, an opposition research firm whose partner managed Glenn Youngkin&apos;s 2021 Virginia gubernatorial campaign. He operates Freedomist LLC, a center-right issue advocacy platform, and Mindful Intelligence, a private intelligence service. In 2020, he co-authored <em>The Capitalist Manifesto</em> with Ralph Benko — endorsed by Dr. Art Laffer and Steve Forbes. Forbes has publicly described Collier as a <strong className="text-[#0a1628]">&ldquo;web genius.&rdquo;</strong> Senator Rand Paul has offered similar recognition.</p>
                  <p>His client record spans the <strong className="text-[#0a1628]">RNC, NRCC, NRSC, International Republican Institute, and the Conservative Party of Great Britain</strong>. Presidential campaigns include Bush-Cheney, Bush-Quayle, Giuliani for President, and Ted Cruz for President. Gubernatorial campaigns include Glenn Youngkin (Virginia), Doug Burgum (North Dakota), and Tommy Thompson (Wisconsin). He has served more than 20 congressional members across 15 states. As President of the Samaritan Medal Foundation, he secured a <strong className="text-[#0a1628]">$1.5 million grant</strong> through direct diplomatic advocacy for the Samaritan community in Israel.</p>
                  <p>Collier co-founded <strong className="text-[#0a1628]">Vaccine Veritas</strong> alongside Dr. Gary Kompothecras and serves on its Board of Directors. At the Autism Justice Foundation, he oversees the digital strategy and platform infrastructure powering this portal.</p>
                </div>
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
              <img src="/nino-red-carpet-hd.webp" alt='David "Nino" Rodriguez' className="w-full h-64 object-cover object-top" />
              <div className="p-6">
                <h4 className="text-lg font-bold text-[#111827]" style={{ fontFamily: 'Georgia, serif' }}>David &ldquo;Nino&rdquo; Rodriguez</h4>
                <p className="text-[#0a1628] font-semibold text-sm mb-1">Advisory Board Member</p>
                <p className="text-xs text-[#475569] italic mb-3">Former WBC/WBA Ranked Heavyweight Champion · Anti-Bullying Advocate · Host, Nino&rsquo;s Corner TV</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">36-0 · 34 KOs</span>
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">WBC #10 / WBA #12</span>
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">50M+ Monthly Reach</span>
                  <span className="text-xs bg-[#fdf8ee] text-[#0a1628] border border-[#d4a843]/40 px-2 py-1 rounded-full font-medium">KO Bullying Founder</span>
                </div>
                <p className="text-base text-[#475569] leading-relaxed">
                  David &ldquo;Nino&rdquo; Rodriguez is a former professional heavyweight boxer, bestselling author, and media founder whose life story is one of the most documented comeback narratives in American sports. Born and raised in El Paso, Texas, Nino turned professional in 1998 and went 36&ndash;0 with 34 knockouts &mdash; 24 of them in the first round &mdash; a first-round KO ratio that surpassed every heavyweight in history, including Mike Tyson. He was ranked #10 in the world by the WBC and #12 by the WBA, widely projected to become the first Mexican Heavyweight Champion of the World. On December 30, 2011, a knife attack outside a restaurant in Scottsdale, Arizona left him with 369 stitches and a scar from ear to chin. He returned to boxing, lost, and back surgery ended his career. What followed was a period of alcohol dependency and darkness that led him, ultimately, to schools and juvenile detention facilities across the country &mdash; telling the truth about bullying, survival, and redemption to the kids who needed it most. His bestselling book, <em>When The Lights Go Out: From Survivor to Champion</em>, documents the full journey. Today, as founder and CEO of Nino&rsquo;s Corner TV, he reaches upwards of 50 million people per month across all platforms. He is a practicing Christian who credits his faith with his sobriety and his renewed sense of mission.{' '}
                  <a href="/in-the-fight#david-nino-rodriguez-never-give-up" className="text-[#0a1628] underline hover:text-[#d4a843] font-medium">Read the full story &rarr;</a>
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
