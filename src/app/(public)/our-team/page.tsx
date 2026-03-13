import Link from 'next/link'

const badge = "inline-block text-xs bg-[#0a1628]/5 text-[#0a1628] border border-[#0a1628]/10 rounded-full px-2 py-0.5 mr-1 mb-1"

export default function OurTeamPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          TIER 1 — LEGAL TEAM
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a1628] py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-[#d4a843] mb-2">Legal Representation</p>
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Alpha Law Group
            </h2>
            <p className="text-base text-slate-400 max-w-2xl mx-auto">
              Our legal team fights exclusively for vaccine-injured families through the federal VICP process — on a contingency basis, with zero upfront cost to your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Alex J. Kompothecras */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">
              <div className="w-full aspect-square overflow-hidden">
                <img src="/Alex-Kompothecras.webp" alt="Alex J. Kompothecras" className="w-full h-full object-cover" style={{ objectPosition: 'center 10%' }} />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#0a1628] mb-0.5" style={{ fontFamily: 'Georgia, serif' }}>Alex J. Kompothecras</h3>
                <p className="text-[#d4a843] font-semibold text-sm mb-3">Managing Attorney — Alpha Law Group</p>
                <div className="mb-4">
                  <span className={badge}>Florida Bar Licensed</span>
                  <span className={badge}>VICP Specialist</span>
                  <span className={badge}>No Fee Unless We Win</span>
                </div>
                <div className="space-y-3 text-sm text-[#475569] leading-relaxed flex-1">
                  <p>
                    Alex J. Kompothecras is the Managing Attorney of Alpha Law Group, a personal injury and civil litigation firm headquartered in Sarasota, Florida. Licensed in Florida&apos;s 12th Judicial Circuit, Alex handles automobile and truck accidents, catastrophic injury, wrongful death, medical malpractice, and product liability cases.
                  </p>
                  <p>
                    Alex grew up alongside his two siblings, Bronson and Sarah Alice, both diagnosed with severe autism as toddlers. That experience shaped everything. He did not choose autism advocacy. It chose him.
                  </p>
                  <p>
                    In September 2024, Alex learned about Francisco Diaz-Burgos — a 30-year-old man with autism who was tased and jailed for three weeks after trying to help his father during a police stop. Alex paid his bail out of his own pocket, wrote a letter to the State Attorney, and helped secure a full dismissal of all charges. He is now building ASD sensitivity training for Florida law enforcement and prosecutors.{' '}
                    <a href="/our-story#francisco" className="text-[#0a1628] underline hover:text-[#d4a843] font-medium">Read the full story &rarr;</a>
                  </p>
                  <p>
                    In September 2025, Alex co-founded the <strong className="text-[#111827]">Autism Justice Foundation</strong> alongside his father, Dr. Gary Kompothecras, and now leads VICP filings for autism families across Florida on a pure contingency basis — no fees unless compensation is recovered.
                  </p>
                </div>
                <div className="mt-6 pt-5 border-t border-gray-200 flex items-center justify-between">
                  <a href="tel:9413041500" className="text-sm text-[#0a1628] font-bold hover:text-[#d4a843] transition">(941) 304-1500</a>
                  <a href="/intake/phase-1" className="bg-[#d4a843] hover:bg-[#b8902e] text-white text-xs font-semibold px-4 py-2 rounded-lg transition">Start My Claim &rarr;</a>
                </div>
              </div>
            </div>

            {/* Chase J. Engelbrecht */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">
              <div className="w-full aspect-square overflow-hidden">
                <img src="/Chase-Engelbrecht.webp" alt="Chase J. Engelbrecht" className="w-full h-full object-cover" style={{ objectPosition: 'center 10%' }} />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#0a1628] mb-0.5" style={{ fontFamily: 'Georgia, serif' }}>Chase J. Engelbrecht</h3>
                <p className="text-[#d4a843] font-semibold text-sm mb-3">Attorney — Alpha Law Group</p>
                <div className="mb-2">
                  <img src="/chase-elite-lawyer-2026.png" alt="Elite Lawyer 2026" className="h-8 object-contain mb-2" />
                </div>
                <div className="mb-4">
                  <span className={badge}>Super Lawyers&reg; Rated</span>
                  <span className={badge}>Florida Bar</span>
                  <span className={badge}>VICP Advocate</span>
                  <span className={badge}>No Fee Unless We Win</span>
                </div>
                <div className="space-y-3 text-sm text-[#475569] leading-relaxed flex-1">
                  <p>
                    Chase J. Engelbrecht is an attorney at Alpha Law Group, practicing personal injury and civil litigation in Sarasota, Florida&apos;s 12th Judicial Circuit. Recognized by Super Lawyers&reg; as a Rising Star, Chase handles automobile accidents, catastrophic injury, wrongful death, and premises liability matters.
                  </p>
                  <p>
                    Chase came to Alpha Law Group because he shares Alex&apos;s conviction that injured families deserve a lawyer who actually fights for them. He has become a core part of the firm&apos;s autism advocacy work — supporting VICP families through the intake and filing process and helping build the case that the federal compensation system has left too many families behind.
                  </p>
                  <p>
                    Chase participates in the firm&apos;s ASD community outreach, including the{' '}
                    <a href="https://runsignup.com/Race/FL/Sarasota/AlphaLawGroupAutism5K" target="_blank" rel="noopener noreferrer" className="text-[#0a1628] underline hover:text-[#d4a843] font-medium">Alpha Law Group Autism 5K</a>
                    {' '}at Nathan Benderson Park — now in its second year — benefiting the Autism Society of Florida and The Haven of Sarasota. He represents every VICP family on pure contingency — no fees unless compensation is recovered.
                  </p>
                </div>
                <div className="mt-6 pt-5 border-t border-gray-200 flex items-center justify-between">
                  <a href="tel:9413041500" className="text-sm text-[#0a1628] font-bold hover:text-[#d4a843] transition">(941) 304-1500</a>
                  <a href="/intake/phase-1" className="bg-[#d4a843] hover:bg-[#b8902e] text-white text-xs font-semibold px-4 py-2 rounded-lg transition">Start My Claim &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
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

      {/* ══════════════════════════════════════════════════════════
          TIER 2 — AJF CO-FOUNDERS & BOARD
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <img src="/ajf-logo.png" alt="Autism Justice Foundation" className="h-14 w-auto object-contain mb-4 mx-auto" />
            <p className="text-xs font-bold tracking-widest uppercase text-[#d4a843] mb-2">Co-Founders &amp; Board of Directors</p>
            <h2 className="text-3xl font-bold text-[#0a1628] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Autism Justice Foundation
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto mb-8">
              The Autism Justice Foundation was built by a family that lived it — and fought for it for over two decades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Gary & Beth */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">
              <div className="w-full aspect-square overflow-hidden">
                <img src="/gary-beth-gala.webp" alt="Dr. Gary and Beth Kompothecras" className="w-full h-full object-cover" style={{ objectPosition: 'center 15%' }} />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#0a1628] mb-0.5" style={{ fontFamily: 'Georgia, serif' }}>Dr. Gary &amp; Beth Kompothecras</h3>
                <p className="text-[#d4a843] font-semibold text-sm mb-3">Co-Founders — Autism Justice Foundation</p>
                <div className="mb-4">
                  <span className={badge}>FL Governor&apos;s Task Force</span>
                  <span className={badge}>DeSantis Appointee 2026</span>
                  <span className={badge}>VICP Petitioners</span>
                  <span className={badge}>1-800-ASK-GARY Founder</span>
                </div>
                <div className="space-y-3 text-sm text-[#475569] leading-relaxed flex-1">
                  <p>
                    Dr. Gary and Beth Kompothecras have called Siesta Key home for over forty years. They raised six children — and two of them, Bronson and Sarah Alice, were diagnosed with severe autism as toddlers. For Gary and Beth, autism is not a cause they discovered. It is Tuesday morning — and every morning since.
                  </p>
                  <p>
                    When the system refused to give them answers, Dr. Gary turned the same engine that built 1-800-ASK-GARY into a twenty-year policy fight. In 2008, Governor Charlie Crist appointed him to the <strong className="text-[#0a1628]">Florida Governor&apos;s Task Force on Autism Spectrum Disorders</strong>, where he served alongside Dan Marino. He championed what would have been the nation&apos;s strictest thimerosal restriction law. He traveled to Washington for the <strong className="text-[#0a1628]">U.S. Congressional Committee on Government Oversight and Reform</strong> autism hearing. He and Beth filed both Bronson and Sarah Alice as <strong className="text-[#0a1628]">petitioners in the federal Vaccine Injury Compensation Program</strong>.
                  </p>
                  <p>
                    Beth was never a bystander. She made her own independent political contributions to the Congressional members advancing autism accountability legislation. As the mother present at every therapy session and every hard-won inch of progress, Beth is the moral anchor of everything this family built.
                  </p>
                  <p>
                    In January 2026, Governor DeSantis appointed Dr. Gary to the <strong className="text-[#0a1628]">Florida Board of Chiropractic Medicine</strong>. In September 2025, Gary and Beth co-founded the <strong className="text-[#0a1628]">Autism Justice Foundation</strong>. The moment the country finally caught up to them, they were ready.
                  </p>
                </div>
              </div>
            </div>

            {/* Alex — AJF Board */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">
              <div className="w-full aspect-square overflow-hidden">
                <img src="/Alex-Kompothecras.webp" alt="Alex J. Kompothecras" className="w-full h-full object-cover" style={{ objectPosition: 'center 10%' }} />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#0a1628] mb-0.5" style={{ fontFamily: 'Georgia, serif' }}>Alex J. Kompothecras</h3>
                <p className="text-[#d4a843] font-semibold text-sm mb-3">Board of Directors — Autism Justice Foundation</p>
                <div className="mb-4">
                  <span className={badge}>Honorary Board Member, ASF</span>
                  <span className={badge}>Founder — Alpha Law 5K</span>
                  <span className={badge}>Big Brother to Autism Families</span>
                </div>
                <div className="space-y-3 text-sm text-[#475569] leading-relaxed flex-1">
                  <p>
                    Alex J. Kompothecras grew up watching his younger siblings Bronson and Sarah Alice navigate a world that was not built for them. That experience shaped everything. He became an attorney. He founded Alpha Law Group. And he carried the family&apos;s decades-long autism advocacy into his professional life — not as an obligation, but as a calling.
                  </p>
                  <p>
                    Alex is the founder of the <strong className="text-[#0a1628]">annual Alpha Law Group Autism 5K Run</strong>, which benefits the Autism Society of Florida and The Haven. He serves as an <strong className="text-[#0a1628]">Honorary Board Member of the Autism Society of Florida</strong>. He describes himself not just as an advocate, but as a &ldquo;big brother&rdquo; to individuals with autism and the families who love them.
                  </p>
                  <p>
                    As managing attorney and AJF Board member, Alex brings the legal firepower to match the family&apos;s advocacy. The federal VICP system is complicated. He makes it navigable.
                  </p>
                </div>
              </div>
            </div>

            {/* William Collier Jr. */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">
              <div className="w-full aspect-square overflow-hidden">
                <img src="/william-collier-jr.jpg" alt="William R. Collier Jr." className="w-full h-full object-cover" style={{ objectPosition: 'center 10%' }} />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#0a1628] mb-0.5" style={{ fontFamily: 'Georgia, serif' }}>William R. Collier Jr.</h3>
                <p className="text-[#d4a843] font-semibold text-sm mb-3">Board of Directors — Autism Justice Foundation</p>
                <div className="mb-4">
                  <span className={badge}>U.S. Navy Veteran</span>
                  <span className={badge}>Co-Founder Vaccine Veritas</span>
                  <span className={badge}>Digital Strategy</span>
                  <span className={badge}>30+ Years Political Consulting</span>
                </div>
                <div className="space-y-3 text-sm text-[#475569] leading-relaxed flex-1">
                  <p>William R. Collier Jr. is a U.S. Navy veteran who served during the Cold War with a specialty in intelligence analysis. That discipline — systematic research, pattern identification, and targeted communication — has defined three decades of work in political consulting, digital strategy, and opposition research.</p>
                  <p>In 2015, he founded Regal Blue Media LLC, specializing in web strategy, digital communications, and censorship navigation for advocacy organizations. In 2020, he co-authored <em>The Capitalist Manifesto</em> with Ralph Benko — endorsed by Dr. Art Laffer and Steve Forbes. Forbes has publicly described Collier as a <strong className="text-[#0a1628]">&ldquo;web genius.&rdquo;</strong></p>
                  <p>His client record spans the <strong className="text-[#0a1628]">RNC, NRCC, NRSC, International Republican Institute, and the Conservative Party of Great Britain</strong>. He has served more than 20 congressional members across 15 states.</p>
                  <p>Collier co-founded <strong className="text-[#0a1628]">Vaccine Veritas</strong> alongside Dr. Gary Kompothecras and serves on its Board of Directors. At the Autism Justice Foundation, he oversees the digital strategy and platform infrastructure powering this portal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          TIER 3 — ADVISORY BOARD
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#F8F9FA] py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-[#d4a843] mb-2">Scientific &amp; Medical Advisory Board</p>
            <h2 className="text-3xl font-bold text-[#0a1628] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Advisory Board &amp; Speakers Panel
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {/* Dr. Andrew Wakefield */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              <div className="p-4 pb-0">
                <div className="w-full aspect-square overflow-hidden rounded-full ring-2 ring-[#d4a843]/20">
                  <img src="/andrew-wakefield-portrait.webp" alt="Dr. Andrew Wakefield" className="w-full h-full object-cover object-top" />
                </div>
              </div>
              <div className="px-4 pb-4 pt-3 text-center flex-1 flex flex-col">
                <h4 className="text-sm font-bold text-[#0a1628]" style={{ fontFamily: 'Georgia, serif' }}>Dr. Andrew Wakefield</h4>
                <p className="text-[#d4a843] font-semibold text-xs mb-2">Medical Advisory Board Chairman</p>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Published over 140 peer-reviewed papers. Director of <em>Vaxxed: From Cover-Up to Catastrophe</em>. Leading voice in vaccine safety research.
                </p>
              </div>
            </div>

            {/* Mary Holland */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              <div className="p-4 pb-0">
                <div className="w-full aspect-square overflow-hidden rounded-full ring-2 ring-[#d4a843]/20">
                  <img src="/mary-holland.webp" alt="Mary Holland, J.D." className="w-full h-full object-cover object-top" />
                </div>
              </div>
              <div className="px-4 pb-4 pt-3 text-center flex-1 flex flex-col">
                <h4 className="text-sm font-bold text-[#0a1628]" style={{ fontFamily: 'Georgia, serif' }}>Mary Holland, J.D.</h4>
                <p className="text-[#d4a843] font-semibold text-xs mb-2">Advisory Board · CEO, Children&rsquo;s Health Defense</p>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Harvard &amp; Columbia Law. Former NYU Law faculty. CEO of Children&rsquo;s Health Defense. Co-author of <em>Vaccine Epidemic</em> and <em>Turtles All the Way Down</em>.
                </p>
              </div>
            </div>

            {/* Dr. David Weldon */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              <div className="p-4 pb-0">
                <div className="w-full aspect-square overflow-hidden rounded-full ring-2 ring-[#d4a843]/20">
                  <img src="https://autismjusticefoundation.org/wp-content/uploads/2021/05/David_Weldon.jpg" alt="Dr. David J. Weldon" className="w-full h-full object-cover" style={{ objectPosition: 'center 10%' }} />
                </div>
              </div>
              <div className="px-4 pb-4 pt-3 text-center flex-1 flex flex-col">
                <h4 className="text-sm font-bold text-[#0a1628]" style={{ fontFamily: 'Georgia, serif' }}>Dr. David J. Weldon</h4>
                <p className="text-[#d4a843] font-semibold text-xs mb-2">Advisory Board · Former U.S. Congressman</p>
                <p className="text-xs text-[#475569] leading-relaxed">
                  U.S. Representative (FL-15, 1995–2009). Founded the Congressional Autism Caucus. Trump CDC Director nominee. Mercury-Free Vaccines Act author.
                </p>
              </div>
            </div>

            {/* Dr. Anthony R. Mawson */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              <div className="p-4 pb-0">
                <div className="w-full aspect-square overflow-hidden rounded-full ring-2 ring-[#d4a843]/20">
                  <img src="https://autismjusticefoundation.org/wp-content/uploads/2025/09/signal-2025-09-25-082454_002.jpg.png" alt="Dr. Anthony R. Mawson" className="w-full h-full object-cover object-top" />
                </div>
              </div>
              <div className="px-4 pb-4 pt-3 text-center flex-1 flex flex-col">
                <h4 className="text-sm font-bold text-[#0a1628]" style={{ fontFamily: 'Georgia, serif' }}>Dr. Anthony R. Mawson</h4>
                <p className="text-[#d4a843] font-semibold text-xs mb-2">Scientific Advisory Board · Epidemiologist</p>
                <p className="text-xs text-[#475569] leading-relaxed">
                  DrPH Epidemiology, Tulane. Landmark 2017–2025 studies linking vaccination schedules and autism. Visiting Professor, Jackson State University.
                </p>
              </div>
            </div>

            {/* J.B. Handley */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              <div className="p-4 pb-0">
                <div className="w-full aspect-square overflow-hidden rounded-full ring-2 ring-[#d4a843]/20">
                  <img src="https://autismjusticefoundation.org/wp-content/uploads/2025/09/EC1EB0E0-2713-4419-A3CB-F142868593AD.jpg.png" alt="J.B. Handley" className="w-full h-full object-cover object-top" />
                </div>
              </div>
              <div className="px-4 pb-4 pt-3 text-center flex-1 flex flex-col">
                <h4 className="text-sm font-bold text-[#0a1628]" style={{ fontFamily: 'Georgia, serif' }}>J.B. Handley</h4>
                <p className="text-[#d4a843] font-semibold text-xs mb-2">Scientific Advisory Board · Founder, Generation Rescue</p>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Stanford graduate. Author of <em>How to End the Autism Epidemic</em>. Co-founder of Generation Rescue. MAHA movement pioneer.
                </p>
              </div>
            </div>

            {/* Nicolas Hulscher */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              <div className="p-4 pb-0">
                <div className="w-full aspect-square overflow-hidden rounded-full ring-2 ring-[#d4a843]/20">
                  <img src="/nicolas-hulscher.webp" alt="Nicolas Hulscher, MPH" className="w-full h-full object-cover object-top" />
                </div>
              </div>
              <div className="px-4 pb-4 pt-3 text-center flex-1 flex flex-col">
                <h4 className="text-sm font-bold text-[#0a1628]" style={{ fontFamily: 'Georgia, serif' }}>Nicolas Hulscher, MPH</h4>
                <p className="text-[#d4a843] font-semibold text-xs mb-2">Advisory Board · Epidemiologist, McCullough Foundation</p>
                <p className="text-xs text-[#475569] leading-relaxed">
                  MPH Epidemiology, University of Michigan. 20+ peer-reviewed publications on vaccine injury and autism spectrum disorder.
                </p>
              </div>
            </div>

            {/* Dan Fleuette */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              <div className="p-4 pb-0">
                <div className="w-full aspect-square overflow-hidden rounded-full ring-2 ring-[#d4a843]/20">
                  <img src="/dan-fleuette-home.webp" alt="Dan Fleuette" className="w-full h-full object-cover object-top" />
                </div>
              </div>
              <div className="px-4 pb-4 pt-3 text-center flex-1 flex flex-col">
                <h4 className="text-sm font-bold text-[#0a1628]" style={{ fontFamily: 'Georgia, serif' }}>Dan Fleuette</h4>
                <p className="text-[#d4a843] font-semibold text-xs mb-2">Media Advisor &amp; Documentary Filmmaker</p>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Inaugural producer of Bannon&rsquo;s War Room. Producer of Clinton Cash, Government Gangsters, and The Sleeping Giant. Author of <em>Rebels, Rogues &amp; Outlaws</em>.
                </p>
              </div>
            </div>

            {/* David "Nino" Rodriguez */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              <div className="p-4 pb-0">
                <div className="w-full aspect-square overflow-hidden rounded-full ring-2 ring-[#d4a843]/20">
                  <img src="/nino-red-carpet-hd.webp" alt='David "Nino" Rodriguez' className="w-full h-full object-cover" style={{ objectPosition: 'center 15%' }} />
                </div>
              </div>
              <div className="px-4 pb-4 pt-3 text-center flex-1 flex flex-col">
                <h4 className="text-sm font-bold text-[#0a1628]" style={{ fontFamily: 'Georgia, serif' }}>David &ldquo;Nino&rdquo; Rodriguez</h4>
                <p className="text-[#d4a843] font-semibold text-xs mb-2">Advisory Board · Former WBC Ranked Heavyweight Champion</p>
                <p className="text-xs text-[#475569] leading-relaxed">
                  36-0 with 34 KOs. Host of Nino&rsquo;s Corner TV (50M+ monthly reach). Anti-bullying advocate. Bestselling author.{' '}
                  <a href="/in-the-fight#david-nino-rodriguez-never-give-up" className="text-[#0a1628] underline hover:text-[#d4a843] font-medium">Read more &rarr;</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* AJF Disclaimer Footer */}
      <section className="bg-white py-8 border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <img src="/ajf-logo.png" alt="Autism Justice Foundation" className="h-12 w-auto object-contain mb-4 mx-auto" />
          <p className="text-base text-[#475569] leading-relaxed mb-4 max-w-2xl mx-auto">
            The Autism Justice Foundation is a DBA of Justice for Autism, a registered 501(c)(4) nonprofit advocacy organization. All Foundation activities, staff, and advisory board members operate independently of Alpha Law Group&rsquo;s legal practice.
          </p>
          <a href="https://autismjusticefoundation.org" target="_blank" rel="noopener noreferrer" className="text-[#0a1628] font-semibold text-sm hover:underline">
            Visit autismjusticefoundation.org &rarr;
          </a>
        </div>
      </section>
    </>
  )
}
