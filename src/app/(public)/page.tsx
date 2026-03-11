import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#111827] mb-6">This Fight Is Personal To Us.</h1>
          <p className="text-lg text-[#475569] mb-8 max-w-2xl mx-auto leading-relaxed">
            Alex Kompothecras grew up with two siblings — Bronson and Sarah Alice — severely
            affected by autism. His father Dr. Gary spent 19 years fighting in Tallahassee for
            families like yours. Now Alex has built a legal practice with one mission: getting
            autism families the justice they deserve.
          </p>
          <Link
            href="/intake/phase-1"
            className="inline-block bg-[#1E40AF] text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#1E3A8A] transition"
          >
            Start My Claim &rarr;
          </Link>
          <p className="mt-4 text-[#475569] text-sm">
            Free consultation. No fees unless we win. Reviewed within 24 hours.
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border border-[#E2E8F0] py-4">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center font-semibold text-sm text-[#111827]">
          <div>Contingency Fee — No Win, No Fee</div>
          <div>Florida Statewide Representation</div>
          <div>Family-Founded. Mission-Driven.</div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold tracking-tight text-[#111827] mb-8 text-center">Why We Do This</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pull quote card */}
            <div className="bg-gray-900 text-white p-8 rounded-xl">
              <p className="text-lg leading-relaxed italic mb-4">
                &ldquo;For years, I&rsquo;ve witnessed the irreversible damage inflicted on our
                nation&rsquo;s children. My son and I founded the Autism Justice Foundation because
                families deserve a voice and a path to justice.&rdquo;
              </p>
              <p className="text-[#1E40AF] font-semibold">&mdash; Dr. Gary Kompothecras</p>
            </div>

            {/* Stats column */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="flex items-start gap-3">
                <span className="text-[#1E40AF] font-bold text-2xl leading-none">1 in 36</span>
                <p className="text-[#475569] text-sm">children in the US diagnosed with autism</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#1E40AF] font-bold text-2xl leading-none">$5B+</span>
                <p className="text-[#475569] text-sm">in the VICP trust fund available for families</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#1E40AF] font-bold text-2xl leading-none">Act Now</span>
                <p className="text-[#475569] text-sm">Strict filing deadlines apply — don&rsquo;t wait</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coalition Partners Logo Grid */}
      <section className="bg-white border-t border-b border-[#E2E8F0] py-12">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#475569] text-center mb-8">
            Coalition &amp; Advisory Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex flex-col items-center gap-3 group">
              <img src="/chd-logo.png" alt="Children's Health Defense" className="h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition" />
              <span className="text-xs text-[#475569]">Children&rsquo;s Health Defense</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <img src="/del-bigtree-highwire.jpg" alt="The HighWire with Del Bigtree" className="h-16 w-auto object-contain rounded grayscale group-hover:grayscale-0 transition" />
              <span className="text-xs text-[#475569]">The HighWire</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <div className="bg-gray-900 rounded p-3 grayscale group-hover:grayscale-0 transition">
                <img src="/mccullough-foundation-logo.jpg" alt="McCullough Foundation" className="h-10 w-auto object-contain" />
              </div>
              <span className="text-xs text-[#475569]">McCullough Foundation</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <div className="border border-[#E2E8F0] rounded px-6 py-3 text-center">
                <span className="font-bold text-[#111827] text-sm">Autism Justice Foundation</span>
              </div>
              <span className="text-xs text-[#475569]">Founded 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board Photo Grid */}
      <section className="bg-white border-b border-[#E2E8F0] py-16 px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-[#1E40AF] text-xs font-bold tracking-widest uppercase mb-2">
            JUSTICE FOR AUTISM ADVISORY BOARD
          </p>
          <h2 className="text-[#111827] text-3xl font-bold tracking-tight mb-3">At the Front Lines of the Movement</h2>
          <p className="text-[#475569] text-sm">
            The Autism Justice Foundation at the CHD &ldquo;Moment of Truth&rdquo; Conference &mdash; JW Marriott, Austin, Texas | November 7&ndash;9, 2025
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl overflow-hidden border border-[#E2E8F0] shadow-sm">
            <img src="/ajf-group.jpg" alt="The Autism Justice Foundation Team" className="w-full h-56 object-cover object-top" />
            <div className="p-4">
              <p className="text-[#1E40AF] font-semibold text-sm mb-1">The Autism Justice Foundation Team</p>
              <p className="text-[#475569] text-xs leading-relaxed">
                Left to right: Chase Engelbrecht (Alpha Law Group), Alex Kompothecras (Managing Attorney, Alpha Law Group), Nick Holscher (McCullough Foundation), Dr. Gary Kompothecras (Autism Justice Foundation), Dan Fluette (documentary filmmaker), and Beth Kompothecras.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden border border-[#E2E8F0] shadow-sm">
            <img src="/ajf-weldon-bigtree.jpg" alt="Dr. David Weldon & Del Bigtree" className="w-full h-56 object-cover object-top" />
            <div className="p-4">
              <p className="text-[#1E40AF] font-semibold text-sm mb-1">Dr. David Weldon &amp; Del Bigtree</p>
              <p className="text-[#475569] text-xs leading-relaxed">
                Dr. David Weldon &mdash; President Trump&rsquo;s nominee for CDC Director &mdash; with Del Bigtree, producer of the landmark VAXXED documentary series. Interviewed by Dan Fluette at the Vaccine Veritas table.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden border border-[#E2E8F0] shadow-sm">
            <img src="/ajf-mary-holland.jpg" alt="With Mary Holland & Dr. Gary" className="w-full h-56 object-cover object-top" />
            <div className="p-4">
              <p className="text-[#1E40AF] font-semibold text-sm mb-1">With Mary Holland &amp; Dr. Gary</p>
              <p className="text-[#475569] text-xs leading-relaxed">
                Dan Fluette with Mary Holland, President of Children&rsquo;s Health Defense, and Dr. Gary Kompothecras &mdash; coordinating national strategy for autism justice and vaccine accountability.
              </p>
            </div>
          </div>
        </div>

        <p className="text-[#475569] text-xs text-center mt-8 max-w-2xl mx-auto">
          The Justice for Autism Advisory Board includes the nation&rsquo;s foremost voices in vaccine safety, medical freedom, and children&rsquo;s health advocacy.
        </p>
      </section>

      {/* Voices & Impact Video Row */}
      <section className="bg-[#F8F9FA] border-t border-[#E2E8F0] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#111827] text-center mb-4">Voices &amp; Impact</h2>
          <p className="text-[#475569] text-center mb-10">
            Soundbites from the Children&rsquo;s Health Defense Conference, Austin TX — November 2025
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Dr. Gary Kompothecras — CHD Conference 2025',
              'Del Bigtree — CHD Conference 2025',
              'Mary Holland — CHD Conference 2025',
            ].map((speaker) => (
              <div key={speaker} className="bg-white border border-[#E2E8F0] rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-video bg-[#F8F9FA] flex items-center justify-center border-b border-[#E2E8F0]">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-[#1E40AF] flex items-center justify-center mx-auto mb-2">
                      <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                    <p className="text-xs text-[#475569]">Video coming soon</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-[#111827]">{speaker}</p>
                  <p className="text-xs text-[#475569] mt-1">Children&rsquo;s Health Defense &middot; Austin, TX</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VICP Stats Section */}
      <section className="bg-[#F8F9FA] border-t border-b border-[#E2E8F0] py-16">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-[#1E40AF] text-xs font-bold uppercase tracking-widest text-center mb-3">
            VICP BY THE NUMBERS
          </p>
          <h2 className="text-[#111827] text-2xl font-bold text-center mb-2">
            The Fund Is Solvent. Your Deadline Isn&rsquo;t.
          </h2>
          <p className="text-[#475569] text-sm text-center mb-10">
            Source: HRSA/HHS &middot; Updated June 2025
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="rounded-lg bg-white border border-[#E2E8F0] p-6 text-center shadow-sm">
              <p className="text-[#1E40AF] text-4xl font-black">$5.4B+</p>
              <p className="text-[#111827] text-sm mt-1">Paid to injured families</p>
              <p className="text-[#475569] text-xs mt-1">since 1988</p>
            </div>
            <div className="rounded-lg bg-white border border-[#E2E8F0] p-6 text-center shadow-sm">
              <p className="text-[#1E40AF] text-4xl font-black">28,673</p>
              <p className="text-[#111827] text-sm mt-1">Petitions filed</p>
              <p className="text-[#475569] text-xs mt-1">since program began</p>
            </div>
            <div className="rounded-lg bg-white border border-[#E2E8F0] p-6 text-center shadow-sm">
              <p className="text-[#1E40AF] text-4xl font-black">12,019</p>
              <p className="text-[#111827] text-sm mt-1">Families compensated</p>
              <p className="text-[#475569] text-xs mt-1">48% success rate</p>
            </div>
            <div className="rounded-lg bg-white border border-[#E2E8F0] p-6 text-center shadow-sm">
              <p className="text-[#1E40AF] text-4xl font-black">$4.8B</p>
              <p className="text-[#111827] text-sm mt-1">In trust fund today</p>
              <p className="text-[#475569] text-xs mt-1">actively paying claims</p>
            </div>
          </div>

          <div className="bg-red-600 text-white rounded-lg p-4 mt-8 text-center">
            <p className="text-sm font-medium">
              &#9888;&#65039;  Statute of limitations: 3 years from your child&rsquo;s FIRST symptom — not diagnosis date. Every day you wait is a day closer to losing your rights permanently.
            </p>
          </div>

          <div className="text-center mt-4">
            <Link
              href="/deadline-calculator"
              className="text-[#1E40AF] text-sm font-semibold hover:underline inline-block"
            >
              &rarr; Check Your Deadline Now
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA Strip */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Ready to be heard?</h2>
          <Link
            href="/intake/phase-1"
            className="inline-block bg-[#1E40AF] text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#1E3A8A] transition"
          >
            Begin Your Free Intake &rarr;
          </Link>
          <p className="mt-4 text-white/80 text-sm">
            <a href="tel:9413041500" className="hover:text-[#1E40AF] transition">(941) 304-1500</a> | alphainjurylaw.com
          </p>
        </div>
      </section>
    </>
  )
}
