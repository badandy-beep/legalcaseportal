import Link from 'next/link'

export default function OurStoryPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4">
        {/* Page Title */}
        <section className="bg-white border-b border-[#E2E8F0] py-14 -mt-16 -mx-4 px-6 mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold tracking-widest uppercase text-[#0a1628] mb-3">Our Foundation</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4" style={{fontFamily:'Georgia,serif'}}>
              Our Story
            </h1>
            <p className="text-lg text-[#475569] max-w-2xl mx-auto">
              A family mission two decades in the making — from personal heartbreak to national advocacy.
            </p>
          </div>
        </section>

        {/* Section 1 — The Family */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-[#111827] mb-4">The Family</h2>
          <div className="text-gray-700 leading-relaxed">
            <div className="mb-6 overflow-hidden rounded-xl shadow-md border border-[#E2E8F0]">
              <img
                src="/gary-beth-family.webp"
                alt="Dr. Gary and Beth Kompothecras with their children including Bronson and Sarah Alice"
                className="w-full object-cover object-top max-h-72"
              />
              <p className="text-xs text-[#475569] italic text-center px-4 py-2 bg-[#F8F9FA] border-t border-[#E2E8F0]">
                Dr. Gary and Beth Kompothecras with their children — including Bronson (right, in blue) and Sarah Alice (center) — whose autism diagnoses set the entire Kompothecras family on a two-decade mission for answers and accountability.
              </p>
            </div>
            <p className="text-[#475569] leading-relaxed">
              Dr. Gary and Beth Kompothecras raised six children together on Siesta Key in Sarasota, Florida. Two of them — Bronson and Sarah Alice — were diagnosed with severe autism as toddlers. Bronson spent years in intensive therapy simply learning to say the name of his favorite toy: bottles. Sarah Alice still repeats back what people say to her. For this family, autism is not a policy position. It is Tuesday morning.
            </p>
            <p className="text-[#475569] leading-relaxed mt-4">
              Dr. Gary — founder of 1-800-ASK-GARY, a $100M+ accident referral network spanning three states — turned his business network and political influence into an autism policy weapon. In 2008, Governor Charlie Crist appointed him to the <strong className="text-[#0a1628]">Florida Governor&apos;s Task Force on Autism Spectrum Disorders</strong>, where he served alongside former NFL quarterback Dan Marino. He lobbied the Florida legislature for the nation&apos;s strictest thimerosal vaccine restriction law. He commissioned research using Florida&apos;s Medicaid database. He personally funded screenings of the documentary <em>Vaxxed</em> across Sarasota. Both Bronson and Sarah Alice were petitioners in the federal Vaccine Court. In January 2026, Governor DeSantis appointed Dr. Gary to the <strong className="text-[#0a1628]">Florida Board of Chiropractic Medicine</strong>.
            </p>
            <p className="text-[#475569] leading-relaxed mt-4">
              Beth has been there for all of it — as the mother who has lived every appointment, every therapy session, every institutional failure, and every small victory. Together, Gary and Beth have hosted autism fundraising galas, supported the Autism Society of Florida, and advocated alongside their congressional delegation for accountability and transparency. In September 2025, they co-founded the <strong className="text-[#0a1628]">Autism Justice Foundation</strong>. After more than twenty years of fighting, they knew precisely where the system was failing families — and they built something to fix it.
            </p>
          </div>
        </section>

        <hr className="border-[#d4a843]/30 my-10" />

        {/* Section 2 — The Son */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-[#111827] mb-4">The Son</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Alex Kompothecras, 28, grew up watching his father wage this battle. He pursued law,
              founded Alpha Law Group in Sarasota, and wove autism advocacy into the firm&rsquo;s
              DNA from day one.
            </p>
            <blockquote className="border-l-4 border-[#d4a843] pl-6 my-6 italic text-[#111827]">
              &ldquo;Watching what my parents went through — what Bronson and Sarah Alice go through
              every day — that&rsquo;s what drives everything I do in this space. I didn&rsquo;t
              choose this cause. It chose me.&rdquo;
              <span className="block mt-2 text-sm font-semibold not-italic text-[#0a1628]">
                — Alex Kompothecras
              </span>
            </blockquote>
          </div>
        </section>

        <hr className="border-[#d4a843]/30 my-10" />

        {/* Section 3 — Justice in Action */}
        <section className="space-y-6 mb-10">
          <h2 id="francisco" className="text-2xl font-bold text-[#111827]">Justice in Action: The Francisco Diaz-Burgos Case</h2>

          <p className="text-[#475569] leading-relaxed">
            On September 10, 2024, a Holmes Beach police officer pulled over a car on Anna Maria Island after a license plate recognition system flagged the vehicle. Inside were Orlando Diaz — who had been driving without a valid license for more than 20 years — and his 30-year-old son, Francisco Diaz-Burgos, who has severe autism. When the officer moved to arrest Orlando, Francisco did what he always did: he stepped in to help. He reached for his father&rsquo;s arm, trying to keep the situation calm. He did not understand what he had done wrong. He never does.
          </p>

          <p className="text-[#475569] leading-relaxed">
            The officer used a taser. Francisco was arrested and charged with two counts of battery on a law enforcement officer, two counts of resisting arrest with violence, and additional obstruction charges. He was held in Manatee County Jail — in the general population — for three weeks, with no bond hearing scheduled. His attorney begged the court&rsquo;s judicial assistant to move the hearing up. The request was ignored. Francisco sat in a cell he could not understand, surrounded by people he could not communicate with, asking the same question over and over: <em>&ldquo;Am I going to prison? Am I going to get deported?&rdquo;</em>
          </p>

          {/* Francisco Family Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <figure className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/francisco-and-dad.avif"
                alt="Francisco Diaz-Burgos and his father Orlando"
                className="w-full h-auto object-cover"
              />
              <figcaption className="text-xs text-[#475569] italic px-3 py-2 bg-[#F8F9FA]">
                Francisco Diaz-Burgos and his father Orlando — the family at the center of a case that
                changed how Sarasota prosecutors and law enforcement approach autism.
              </figcaption>
            </figure>
            <figure className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/francisco-family.avif"
                alt="The Diaz-Burgos family"
                className="w-full h-auto object-cover"
              />
              <figcaption className="text-xs text-[#475569] italic px-3 py-2 bg-[#F8F9FA]">
                The Diaz-Burgos family — Francisco&rsquo;s case became a catalyst for autism awareness reform
                across Sarasota County.
              </figcaption>
            </figure>
          </div>

          <p className="text-[#475569] leading-relaxed">
            When Alex Kompothecras read about the case, he did not call a press conference. He wrote a check. He paid Francisco&rsquo;s bail out of his own pocket, drove to Nathan Benderson Park, and met Francisco face to face after his release. What he saw stayed with him. He later wrote in a formal letter to{' '}
            <a
              href="https://www.heraldtribune.com/story/news/courts/2025/01/23/florida-advocates-seek-better-autism-awareness-training-for-police/77690997007/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0a1628] underline hover:text-[#d4a843]"
            >
              State Attorney Ed Brodsky
            </a>
            : <em>&ldquo;The amount of PTSD that Mr. Diaz is struggling with is heartbreaking. He repeatedly asked me &lsquo;Am I going to prison?&rsquo; and &lsquo;Am I going to get deported?&rsquo; over and over again.&rdquo;</em>
          </p>

          <p className="text-[#475569] leading-relaxed">
            Working alongside Francisco&rsquo;s attorney CJ Czaia, Alex met directly with State Attorney Brodsky and Assistant State Attorney Jose Miguel Herrero. The prosecution had been seeking serious penalties. By the time the meeting was over, they had changed course. In late December 2024, Francisco&rsquo;s case was closed with an administrative dismissal after he completed a pretrial intervention program — no conviction, no record, no deportation. His DACA status was protected.{' '}
            <a
              href="https://www.yahoo.com/news/holmes-beach-police-tased-autistic-100611110.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0a1628] underline hover:text-[#d4a843]"
            >
              The Sarasota Herald-Tribune covered the case in January 2025
            </a>
            , bringing national attention to the systemic failure of law enforcement training around autism spectrum disorder.
          </p>

          <p className="text-[#475569] leading-relaxed">
            The case did not end there. State Attorney Brodsky invited Alex to develop ASD sensitivity training for his prosecutorial staff and local defense attorneys — training that Alex is now building in consultation with the therapists who have worked with his own siblings, Bronson and Sarah Alice. His long-term goal: mandatory ASD interaction time at the Florida law enforcement academy, requiring recruits to spend structured time with schools&rsquo; special needs departments before they ever put on a badge. Alex also organized a free autism awareness 5K at Nathan Benderson Park, with proceeds benefiting The Haven in Sarasota and the Autism Society of Florida.
          </p>

          <p className="text-[#475569] leading-relaxed">
            Francisco Diaz-Burgos is a legal U.S. resident. He did nothing wrong. He spent three weeks in jail because the system he encountered had never been trained to recognize what autism looks like under stress. That is the gap the Autism Justice Foundation and Alpha Law Group exist to close — in courtrooms, in jails, in prosecutors&rsquo; offices, and now in the federal Vaccine Injury Compensation Program, where thousands of autism families have never been told their rights.
          </p>
        </section>

        <hr className="border-[#d4a843]/30 my-10" />

        {/* Section — The 5K */}
        <section className="space-y-6 mb-10">
          <h2 className="text-2xl font-bold text-[#111827]">The 5K: Community in Action</h2>

          <p className="text-[#475569] leading-relaxed">
            Advocacy that stays inside a courtroom only goes so far. In 2025, Alex and the Alpha Law Group team took it to the streets — literally. The first{' '}
            <a
              href="https://runsignup.com/Race/FL/Sarasota/AlphaLawGroupAutism5K"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0a1628] underline hover:text-[#d4a843] font-medium"
            >
              Alpha Law Group Autism 5K
            </a>
            {' '}was born out of the same conviction that drove Alex to pay Francisco Diaz-Burgos&apos;s bail: that autism families in Sarasota deserve a community that shows up for them.
          </p>

          <p className="text-[#475569] leading-relaxed">
            The event — held at Nathan Benderson Park — came back for its second year on March 7, 2026, and grew into something far bigger than a race. Families, runners, and community members gathered for a 5K, an Autism Mile walk, three bouncy houses, food trucks, pony rides, and a free festival environment designed specifically with children and young adults with autism in mind. The tagline says it plainly: <em>&ldquo;1 in 36 — The Connection Is You.&rdquo;</em>
          </p>

          <p className="text-[#475569] leading-relaxed">
            Proceeds benefit the{' '}
            <a
              href="https://www.autismsocietyfl.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0a1628] underline hover:text-[#d4a843]"
            >
              Autism Society of Florida
            </a>
            {' '}and{' '}
            <a
              href="https://www.havenofRRC.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0a1628] underline hover:text-[#d4a843]"
            >
              The Haven of Sarasota
            </a>
            {' '}&mdash; two organizations providing direct support services to individuals and families living with autism and developmental disabilities in the region. This is not a marketing event. It is a public declaration, made every year, that this fight is personal.
          </p>

          {/* 5K Reel — Landscape Phone Frame */}
          <div className="my-10 flex justify-center items-center">
            <div
              style={{
                transform: 'rotate(-1deg)',
                background: '#111827',
                borderRadius: '20px',
                padding: '10px',
                boxShadow: '0 25px 60px rgba(0,0,0,0.3), 0 8px 20px rgba(0,0,0,0.15)',
                width: '480px',
                maxWidth: '100%',
              }}
            >
              <video
                src="/5k-reel-web.mp4"
                controls
                playsInline
                preload="metadata"
                poster=""
                className="w-full rounded-[12px]"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
          <p className="text-center text-xs text-[#475569] italic -mt-4 mb-6">
            The 2026 Alpha Law Group Autism 5K at Nathan Benderson Park
          </p>

          <div className="bg-[#fdf8ee] border border-[#d4a843]/40 rounded-lg p-5">
            <p className="text-sm font-semibold text-[#0a1628] mb-1">Want to get involved?</p>
            <p className="text-sm text-[#475569]">
              Follow the event, donate, or register for next year at{' '}
              <a
                href="https://runsignup.com/Race/FL/Sarasota/AlphaLawGroupAutism5K"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0a1628] underline hover:text-[#d4a843] font-medium"
              >
                runsignup.com/Race/FL/Sarasota/AlphaLawGroupAutism5K
              </a>
            </p>
          </div>
        </section>

        <hr className="border-[#d4a843]/30 my-10" />

        {/* Section 4 — The Foundation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-[#111827] mb-4">The Foundation</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The Autism Justice Foundation, founded September 2025, is a 501(c)(4) nonprofit. It
              works alongside Children&rsquo;s Health Defense (led by Mary Holland) and the Autism
              Society of Florida to push for transparency, accountability, and reform.
            </p>
            <p>
              Justice for Autism is the legal arm — connecting families to VICP resources and
              representation.
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-[#111827] mb-4">Ready to take the first step?</h3>
          <Link
            href="/intake/phase-1"
            className="inline-block bg-[#d4a843] text-[#0a1628] font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#b8902e] transition"
          >
            Start My Claim &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
