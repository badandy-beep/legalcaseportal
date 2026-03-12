import Link from 'next/link'

export default function OurTeamPage() {
  return (
    <>
      {/* ── SECTION 1: ALPHA LAW GROUP LEGAL TEAM ── */}
      <section className="bg-white py-16 border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-[#1E40AF] mb-3">Legal Representation</p>
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
                <p className="text-[#1E40AF] font-semibold text-sm mb-1">Managing Attorney — Alpha Law Group</p>
                <p className="text-xs text-[#475569] italic mb-5">Board of Directors — Autism Justice Foundation</p>

                {/* Credential badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-xs bg-[#EFF6FF] text-[#1E40AF] border border-[#BFDBFE] px-2 py-1 rounded-full font-medium">Florida Bar Certified</span>
                  <span className="text-xs bg-[#EFF6FF] text-[#1E40AF] border border-[#BFDBFE] px-2 py-1 rounded-full font-medium">12th Judicial Circuit</span>
                  <span className="text-xs bg-[#EFF6FF] text-[#1E40AF] border border-[#BFDBFE] px-2 py-1 rounded-full font-medium">VICP Specialist</span>
                  <span className="text-xs bg-[#EFF6FF] text-[#1E40AF] border border-[#BFDBFE] px-2 py-1 rounded-full font-medium">No Fee Unless We Win</span>
                </div>

                <div className="space-y-4 text-sm text-[#475569] leading-relaxed">
                  <p>
                    Alex J. Kompothecras is the Managing Attorney of Alpha Law Group, a personal injury and civil litigation firm headquartered in Sarasota, Florida, with offices in Miami and Minnesota. Licensed to practice in Florida&rsquo;s 12th Judicial Circuit, Alex has built a reputation for aggressive, results-driven advocacy on behalf of injury victims — combining sharp legal strategy with the kind of genuine compassion that only comes from having lived through the experience himself.
                  </p>
                  <p>
                    Alex grew up alongside his two siblings, Bronson and Sarah Alice, both of whom were diagnosed with severe autism as toddlers. Watching his family navigate an overwhelmed system — fighting for answers, for resources, and for accountability — shaped everything about how Alex approaches the law. He did not choose personal injury work by accident. He chose it because he understands, at a visceral level, what it means when a family is injured by a system that was supposed to protect them and has no roadmap for what comes next.
                  </p>
                  <p>
                    At Alpha Law Group, Alex handles the full spectrum of personal injury matters: automobile and truck accidents, catastrophic injury, wrongful death, medical malpractice, product liability, and slip-and-fall cases. He is known for breaking down complex legal issues in plain language, keeping clients informed and confident at every stage — and for refusing to let insurance companies lowball families who deserve full and fair compensation for medical expenses, lost wages, and long-term recovery.
                  </p>
                  <p>
                    In September 2025, Alex co-founded the <strong className="text-[#111827]">Autism Justice Foundation</strong> alongside his father, Dr. Gary Kompothecras, channeling the family&rsquo;s decades of advocacy into a formal 501(c)(4) nonprofit organization. He serves on the Foundation&rsquo;s Board of Directors, working to expose the federal Vaccine Injury Compensation Program to the millions of autism families who qualify for compensation but have never been told it exists.
                  </p>
                  <p>
                    That mission directly informs Alex&rsquo;s legal practice at the Case Portal. Through Alpha Law Group, Alex leads VICP claims for autism families across Florida — filing on their behalf in the U.S. Court of Federal Claims at zero upfront cost, on a pure contingency basis. The VICP has paid out over <strong className="text-[#111827]">$5.4 billion</strong> in compensation since its inception. Alex&rsquo;s goal is simple: make sure affected families collect every dollar they are owed.
                  </p>
                  <p>
                    Beyond the courtroom, Alex is an active community advocate. He co-organized the <strong className="text-[#111827]">Alpha Law Group Autism 5K Run/Walk</strong> in Sarasota, bringing together hundreds of families, advocates, and community members in support of autism awareness and research. He maintains a client-first philosophy across every case he touches — treating each family&rsquo;s fight as if it were his own, because in many ways, it is.
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#E2E8F0] flex items-center justify-between">
                  <a href="tel:9413041500" className="text-sm text-[#1E40AF] font-bold hover:text-[#1E3A8A] transition">(941) 304-1500</a>
                  <a href="/intake/phase-1" className="bg-[#1E40AF] hover:bg-[#1E3A8A] text-white text-xs font-semibold px-4 py-2 rounded-lg transition">Start My Claim &rarr;</a>
                </div>
              </div>
            </div>

            {/* Chase J. Engelbrecht */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm">
              <img src="/Chase-Engelbrecht.webp" alt="Chase J. Engelbrecht" className="w-full h-80 object-cover object-top" />
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#111827] mb-1" style={{fontFamily:'Georgia,serif'}}>Chase J. Engelbrecht</h2>
                <p className="text-[#1E40AF] font-semibold text-sm mb-5">Attorney — Alpha Law Group</p>

                {/* Credential badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-xs bg-[#EFF6FF] text-[#1E40AF] border border-[#BFDBFE] px-2 py-1 rounded-full font-medium">Super Lawyers&reg; Rated</span>
                  <span className="text-xs bg-[#EFF6FF] text-[#1E40AF] border border-[#BFDBFE] px-2 py-1 rounded-full font-medium">Florida Bar Certified</span>
                  <span className="text-xs bg-[#EFF6FF] text-[#1E40AF] border border-[#BFDBFE] px-2 py-1 rounded-full font-medium">12th Judicial Circuit</span>
                  <span className="text-xs bg-[#EFF6FF] text-[#1E40AF] border border-[#BFDBFE] px-2 py-1 rounded-full font-medium">VICP Advocate</span>
                  <span className="text-xs bg-[#EFF6FF] text-[#1E40AF] border border-[#BFDBFE] px-2 py-1 rounded-full font-medium">No Fee Unless We Win</span>
                </div>

                <div className="space-y-4 text-sm text-[#475569] leading-relaxed">
                  <p>
                    Chase J. Engelbrecht is an attorney at Alpha Law Group and one of the Sarasota area&rsquo;s most dedicated advocates for injury victims and their families. Recognized by <strong className="text-[#111827]">Super Lawyers&reg;</strong> — an honor reserved for attorneys who have attained a high degree of peer recognition and professional achievement — Chase brings both courtroom rigor and genuine human compassion to every case he handles.
                  </p>
                  <p>
                    Chase&rsquo;s practice spans the full range of personal injury law: car, truck, and motorcycle accidents; catastrophic and traumatic brain injuries; wrongful death; medical malpractice; product liability; slip-and-fall; and workers&rsquo; compensation. Practicing throughout Florida&rsquo;s 12th Judicial Circuit, Chase is known for building meticulously tailored legal strategies designed to protect his clients&rsquo; rights while maximizing recovery — whether at the negotiating table or in front of a jury.
                  </p>
                  <p>
                    What sets Chase apart is that his professional commitment to justice extends well beyond the office. Chase has become a visible and passionate advocate in the autism community — co-organizing the <strong className="text-[#111827]">Alpha Law Group Autism 5K Run/Walk</strong> in Sarasota, an annual event that brings together hundreds of families, healthcare professionals, and community members to raise awareness and funds for autism research. For Chase, the 5K is not a marketing event — it is a personal expression of the firm&rsquo;s belief that advocacy must happen in the community, not just in court.
                  </p>
                  <p>
                    That community commitment translates directly into Chase&rsquo;s work on VICP cases through the Legal Case Portal. Chase works alongside Alex to represent autism families in the federal Vaccine Injury Compensation Program — a no-fault, congressionally established system that has paid over <strong className="text-[#111827]">$5.4 billion</strong> in compensation to vaccine-injured individuals and their families. The vast majority of eligible families never file, either because they don&rsquo;t know the program exists or because they believe they cannot afford an attorney. Chase&rsquo;s role is to remove both barriers: he educates families on their rights, and he represents them on a pure contingency basis — no fees, no costs, unless compensation is recovered.
                  </p>
                  <p>
                    Chase&rsquo;s approach to client service is rooted in the belief that families navigating a child&rsquo;s autism diagnosis are already carrying an enormous burden. His job is to lighten it — to handle every legal detail with diligence and care, so that parents can focus on what matters most: their child. He treats every family that walks through Alpha Law Group&rsquo;s doors with the same personal attention he would want for his own family, and he remains accessible, responsive, and transparent at every stage of the process.
                  </p>
                  <p>
                    At Alpha Law Group, Chase upholds the firm&rsquo;s core promise: every client receives the personalized attention their case demands, and every fight is pursued with the full force of the firm&rsquo;s legal resources — because when a family has been harmed, half-measures are not an option.
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#E2E8F0] flex items-center justify-between">
                  <a href="tel:9413041500" className="text-sm text-[#1E40AF] font-bold hover:text-[#1E3A8A] transition">(941) 304-1500</a>
                  <a href="/intake/phase-1" className="bg-[#1E40AF] hover:bg-[#1E3A8A] text-white text-xs font-semibold px-4 py-2 rounded-lg transition">Start My Claim &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: ENTITY SEPARATION NOTICE ── */}
      <section className="bg-[#F8F9FA] border-b border-[#E2E8F0] py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="border-l-4 border-[#1E40AF] pl-6">
            <p className="text-xs font-bold tracking-widest uppercase text-[#1E40AF] mb-2">Important Legal Distinction</p>
            <p className="text-sm text-[#475569] leading-relaxed">
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
      <section className="bg-white pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-lg font-bold text-[#111827] pb-3 border-b border-[#E2E8F0] mb-8">Co-Founders &amp; Board of Directors</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Dr. Gary Kompothecras */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm">
              <img src="https://autismjusticefoundation.org/wp-content/uploads/2021/05/DrGAry.jpg" alt="Dr. Gary Kompothecras" className="w-full h-64 object-cover object-top" />
              <div className="p-5">
                <h4 className="text-lg font-bold text-[#111827]" style={{ fontFamily: 'Georgia, serif' }}>Dr. Gary Kompothecras</h4>
                <p className="text-[#1E40AF] font-semibold text-sm mb-3">Co-Founder &amp; Chairman</p>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Widely known as &lsquo;Dr. Gary,&rsquo; he is a pioneering medical industry entrepreneur and decades-long autism advocate. Founder of 1-800-ASK-GARY and Physician&rsquo;s Group LLC, a nationwide medical clinic network based in Sarasota, Florida. Dr. Gary&rsquo;s professional success extends to media production, including producing the MTV reality series &lsquo;Siesta Key,&rsquo; which ran for five seasons. His deepest commitment lies in combating autism — a cause profoundly personal due to his two children, Bronson and Sarah Alice, who live with the condition. Dr. Gary has funded screenings of &lsquo;VAXXED: From Cover-Up to Catastrophe,&rsquo; lobbied for legislation to limit thimerosal in vaccines, and channeled his resources into building a unified advocacy platform for autism families.
                </p>
              </div>
            </div>

            {/* William Collier Jr. */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm">
              <img src="https://autismjusticefoundation.org/wp-content/uploads/2021/05/Screenshot-2025-09-12-130448.png" alt="William Collier Jr." className="w-full h-64 object-cover object-top" />
              <div className="p-5">
                <h4 className="text-lg font-bold text-[#111827]" style={{ fontFamily: 'Georgia, serif' }}>William Collier Jr.</h4>
                <p className="text-[#1E40AF] font-semibold text-sm mb-3">Board of Directors · Co-Founder · Digital Media &amp; Marketing</p>
                <p className="text-sm text-[#475569] leading-relaxed">
                  William R. Collier Jr. is a distinguished political consultant, researcher, and digital strategist with over three decades of experience in intelligence gathering, media, and conservative activism. A U.S. Navy veteran specializing in intelligence analysis, Collier founded Kross Publishing in 1992, was a key early organizer of the Tea Party movement, and is a principal in Intellz (opposition research), Freedomist LLC (center-right activism platform), and Mindful Intelligence (private intelligence). He co-authored The Capitalist Manifesto (2020) with Ralph Benko, endorsed by Dr. Art Laffer and Steve Forbes. As co-founder of the Autism Justice Foundation, Collier serves on its Board of Directors, overseeing digital and marketing strategy and driving the Foundation&rsquo;s public advocacy campaigns. His clients have included the RNC, NRCC, NRSC, Conservative Party of Great Britain, and numerous PACs.
                </p>
              </div>
            </div>

            {/* Alex J. Kompothecras — Board rep */}
            <div className="bg-[#F8F9FA] border border-[#E2E8F0] rounded-xl p-6 flex flex-col justify-center">
              <h4 className="text-lg font-bold text-[#111827]" style={{ fontFamily: 'Georgia, serif' }}>Alex J. Kompothecras</h4>
              <p className="text-[#1E40AF] font-semibold text-sm mb-4">Board of Directors</p>
              <p className="text-sm text-[#475569] leading-relaxed mb-4">
                Alex J. Kompothecras serves on the Autism Justice Foundation Board of Directors in a personal advocacy capacity. As the son of Dr. Gary Kompothecras and brother of Bronson and Sarah Alice, Alex brings firsthand family experience to the Foundation&rsquo;s mission. His Board role is entirely separate from his position as Managing Attorney of Alpha Law Group.
              </p>
              <p className="text-xs text-[#94A3B8] italic">For legal representation, see Alpha Law Group above.</p>
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
                <p className="text-[#1E40AF] font-semibold text-xs mb-2">Medical Advisory Board Chairman</p>
                <p className="text-xs text-[#475569] leading-relaxed">
                  A graduate of St. Mary&rsquo;s Hospital Medical School in London, Dr. Wakefield served as a consultant in experimental gastroenterology at the Royal Free Hospital, publishing over 140 peer-reviewed papers on inflammatory bowel disease. His 1998 research highlighted potential associations between the MMR vaccine, gastrointestinal issues, and autism spectrum disorders. Despite retraction of his paper in 2010 and removal from the UK medical register — which he has consistently disputed — Dr. Wakefield continued his global advocacy through the documentary &lsquo;Vaxxed: From Cover-Up to Catastrophe&rsquo; and public engagements. Recent whistleblower testimonies and the CDC&rsquo;s planned vaccine-autism study under HHS Secretary Robert F. Kennedy Jr. have renewed attention to his findings.
                </p>
              </div>
            </div>

            {/* Mary Holland, J.D. */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm">
              <img src="https://autismjusticefoundation.org/wp-content/uploads/2025/09/B1-nE0WDyS-768x1137.jpg" alt="Mary Holland, J.D." className="w-full h-52 object-cover object-top" />
              <div className="p-4">
                <h4 className="text-base font-bold text-[#111827]" style={{ fontFamily: 'Georgia, serif' }}>Mary Holland, J.D.</h4>
                <p className="text-[#1E40AF] font-semibold text-xs mb-2">Advisory Board · Speakers Panel</p>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Educated at Harvard University (undergraduate) and Columbia University (J.D.), Mary Holland served on the faculty of NYU School of Law from 2002–2019 as Director of the Graduate Lawyering Program and Research Scholar. She co-founded the Elizabeth Birt Center for Autism Law and Advocacy. As CEO and General Counsel of Children&rsquo;s Health Defense, Holland has led federal and state lawsuits challenging vaccine mandates, testified before state legislatures on vaccine exemptions, and co-authored influential books including &lsquo;Vaccine Epidemic&rsquo; (2011), &lsquo;The HPV Vaccine on Trial&rsquo; (2018), and &lsquo;Turtles All the Way Down&rsquo; (2022). She contributed as a strategist and director of volunteers for RFK Jr.&rsquo;s 2023 presidential campaign and is a recognized leader in the Make America Healthy Again movement.
                </p>
              </div>
            </div>

            {/* Dr. David J. Weldon */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm">
              <img src="https://autismjusticefoundation.org/wp-content/uploads/2021/05/David_Weldon.jpg" alt="Dr. David J. Weldon" className="w-full h-52 object-cover object-top" />
              <div className="p-4">
                <h4 className="text-base font-bold text-[#111827]" style={{ fontFamily: 'Georgia, serif' }}>Dr. David J. Weldon</h4>
                <p className="text-[#1E40AF] font-semibold text-xs mb-2">Advisory Board · Speakers Panel</p>
                <p className="text-xs text-[#475569] leading-relaxed">
                  A graduate of Stony Brook University (B.S. Biochemistry, 1978) and University at Buffalo School of Medicine (M.D., 1981), Dr. Weldon served as a U.S. Army physician from 1981–1987. He represented Florida&rsquo;s 15th congressional district from 1995–2009, founding the Congressional Autism Caucus and introducing the Mercury-Free Vaccines Act in 2004 to ban thimerosal. In 2007 he co-sponsored the Vaccine Safety and Public Confidence Assurance Act. In November 2024, President Trump nominated Dr. Weldon to serve as CDC Director; the nomination was withdrawn in March 2025. He continues to advocate for rigorous, independent vaccine safety evaluations and serves on the Autism Justice Foundation Scientific Panel.
                </p>
              </div>
            </div>

            {/* Dr. Anthony R. Mawson */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm">
              <img src="https://autismjusticefoundation.org/wp-content/uploads/2025/09/signal-2025-09-25-082454_002.jpg.png" alt="Dr. Anthony R. Mawson" className="w-full h-52 object-cover object-top" />
              <div className="p-4">
                <h4 className="text-base font-bold text-[#111827]" style={{ fontFamily: 'Georgia, serif' }}>Dr. Anthony R. Mawson</h4>
                <p className="text-[#1E40AF] font-semibold text-xs mb-2">Scientific Advisory Board</p>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Dr. Mawson holds a B.A. in Sociology and Psychology from McGill University (1971), an M.A. in Sociology from University of Essex (1972), and both an MPH and DrPH in Epidemiology from Tulane University. His career spans academia and public health, including positions at Louisiana State University Medical Center, Des Moines University, and Jackson State University, where he secured multimillion-dollar NIH and USDA grants. Since 2011, he has been Visiting Professor at Jackson State and President of the Chalfont Research Institute. His landmark 2017, 2020, and 2025 studies — including a Medicaid-based study in Florida — suggest links between vaccination schedules and autism. He has served as Special Issue Editor for the International Journal of Environmental Research and Public Health.
                </p>
              </div>
            </div>

            {/* J.B. Handley */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm">
              <img src="https://autismjusticefoundation.org/wp-content/uploads/2025/09/EC1EB0E0-2713-4419-A3CB-F142868593AD.jpg.png" alt="J.B. Handley" className="w-full h-52 object-cover object-top" />
              <div className="p-4">
                <h4 className="text-base font-bold text-[#111827]" style={{ fontFamily: 'Georgia, serif' }}>J.B. Handley</h4>
                <p className="text-[#1E40AF] font-semibold text-xs mb-2">Scientific Advisory Board</p>
                <p className="text-xs text-[#475569] leading-relaxed">
                  A graduate of Stanford University (B.A. Economics &amp; East Asian Studies, 1987, with honors), Handley co-founded Swander Pace Capital in 1996, overseeing multimillion-dollar consumer product investments. Following his son&rsquo;s autism diagnosis in 2004, he shifted to advocacy — co-founding Generation Rescue in 2005, a nonprofit dedicated to autism recovery and vaccine safety. His seminal 2018 book &lsquo;How to End the Autism Epidemic&rsquo; argues that aluminum adjuvants in the childhood vaccine schedule trigger autism. In 2021, he co-authored &lsquo;Underestimated: An Autism Miracle&rsquo; with his son Jamison and co-produced the documentary &lsquo;Spellers.&rsquo; A pioneer in the MAHA movement, Handley continues to demand accountability in public health.
                </p>
              </div>
            </div>

            {/* Nicolas Hulscher, MPH */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm">
              <img src="/nicolas-hulscher.webp" alt="Nicolas Hulscher, MPH" className="w-full h-52 object-cover object-top" />
              <div className="p-4">
                <h4 className="text-base font-bold text-[#111827]" style={{ fontFamily: 'Georgia, serif' }}>Nicolas Hulscher, MPH</h4>
                <p className="text-[#1E40AF] font-semibold text-xs mb-2">Advisory Board · Epidemiologist</p>
                <p className="text-xs text-[#475569] leading-relaxed">
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
                <p className="text-[#1E40AF] font-semibold text-sm mb-3">Speakers Panel &amp; Advisory Board</p>
                <p className="text-sm text-[#475569] leading-relaxed">
                  A former undefeated heavyweight boxing contender from El Paso, Texas, David compiled a professional record of 37-2 with 35 knockouts — including 24 first-round knockouts, surpassing Mike Tyson&rsquo;s career total. His titles include the Texas, New Mexico, and NABO Heavyweight Championships. In his post-boxing career, David hosts the &lsquo;Nino&rsquo;s Corner Podcast,&rsquo; consistently ranking among the top-rated shows on Apple Podcasts with a 4.9-star rating. An anti-bullying keynote speaker, founder of the KO Bullying project, and author of &lsquo;When the Lights Go Out: From Survivor to Champion,&rsquo; David has spoken at schools nationwide. Having recently become a father, he is fully committed to the Autism Justice Foundation&rsquo;s mission — leveraging his massive platform to expose vaccine-related harms and protect children&rsquo;s neurological health.
                </p>
              </div>
            </div>

            {/* AJF Info Card */}
            <div className="bg-[#F8F9FA] border border-[#E2E8F0] rounded-xl p-8 flex flex-col justify-center">
              <img src="/ajf-logo.png" alt="Autism Justice Foundation" className="h-12 w-auto object-contain mb-4" />
              <p className="text-sm text-[#475569] leading-relaxed mb-4">
                The Autism Justice Foundation is a DBA of Justice for Autism, a registered 501(c)(4) nonprofit advocacy organization. All Foundation activities, staff, and advisory board members operate independently of Alpha Law Group&rsquo;s legal practice. To learn more or support the Foundation&rsquo;s mission, visit autismjusticefoundation.org.
              </p>
              <a href="https://autismjusticefoundation.org" target="_blank" rel="noopener noreferrer" className="text-[#1E40AF] font-semibold text-sm hover:underline">
                Visit autismjusticefoundation.org &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
