import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-[#EFF6FF] text-[#1E40AF] text-xs font-bold tracking-wide uppercase px-4 py-1.5 rounded-full mb-6">
            GetHelpForAutism.com
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-[#111827] mb-6">
            Your Child Deserves Justice.<br />We&rsquo;ll Fight to Get It.
          </h1>
          <p className="text-lg text-[#475569] mb-8 max-w-2xl mx-auto leading-relaxed">
            If your child was diagnosed with autism after a vaccine injury, you may be entitled
            to compensation through the federal Vaccine Injury Compensation Program. Our
            family-founded firm has one mission: getting autism families the justice they deserve.
          </p>
          <Link
            href="/intake/phase-1"
            className="inline-block bg-[#1E40AF] text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#1E3A8A] transition"
          >
            Start My Free Case Review &rarr;
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
            <div className="bg-white border-l-4 border-[#1E40AF] p-8 rounded-xl shadow-sm">
              <p className="text-lg leading-relaxed italic mb-4 text-[#111827]">
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
          <div className="flex flex-wrap justify-center items-start gap-8 md:gap-10">
            <a href="https://childrenshealthdefense.org" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 h-32 w-64 flex items-center justify-center shadow-sm hover:shadow-md hover:border-[#1E40AF] transition-all">
                <img src="/chd-logo.png" alt="Children's Health Defense" className="h-20 w-auto object-contain" />
              </div>
              <span className="text-xs font-medium text-[#475569] group-hover:text-[#1E40AF] transition text-center">Children&rsquo;s Health Defense</span>
            </a>
            <a href="https://thehighwire.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
              <div className="bg-[#0a1628] border border-[#0a1628] rounded-xl p-5 h-32 w-64 flex items-center justify-center shadow-sm hover:shadow-md hover:border-[#1E40AF] transition-all">
                <img src="/highwire-logo.png" alt="The HighWire with Del Bigtree" className="h-20 w-auto object-contain" />
              </div>
              <span className="text-xs font-medium text-[#475569] group-hover:text-[#1E40AF] transition text-center">The HighWire with Del Bigtree</span>
            </a>
            <a href="https://mcculloughfoundation.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
              <div className="bg-black border border-gray-800 rounded-xl p-5 h-32 w-64 flex items-center justify-center shadow-sm hover:shadow-md hover:border-[#1E40AF] transition-all">
                <img src="/mccullough-foundation-logo.jpg" alt="McCullough Foundation" className="h-20 w-auto object-contain" />
              </div>
              <span className="text-xs font-medium text-[#475569] group-hover:text-[#1E40AF] transition text-center">McCullough Foundation</span>
            </a>
            <a href="https://autismjusticefoundation.org" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 h-32 w-64 flex items-center justify-center shadow-sm hover:shadow-md hover:border-[#1E40AF] transition-all">
                <img src="/ajf-logo.png" alt="Autism Justice Foundation" className="h-20 w-auto object-contain" />
              </div>
              <span className="text-xs font-medium text-[#475569] group-hover:text-[#1E40AF] transition text-center">Autism Justice Foundation</span>
            </a>
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
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#1E40AF] text-center mb-3">
            Voices &amp; Impact
          </p>
          <h2 className="text-3xl font-bold text-[#111827] text-center mb-3" style={{fontFamily:'Georgia,serif'}}>
            The Fight for Truth &amp; Justice
          </h2>
          <p className="text-[#475569] text-center mb-12 max-w-2xl mx-auto">
            Soundbites from the Children&rsquo;s Health Defense Conference — Austin, TX &middot; November 2025
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

            {/* Video 1 */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative bg-black" style={{aspectRatio:'9/16', maxHeight:'480px'}}>
                <video
                  className="w-full h-full object-contain"
                  controls
                  preload="metadata"
                  poster="/poster-moment-of-truth.jpg"
                >
                  <source src="/video-moment-of-truth.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-5 border-t border-[#E2E8F0]">
                <p className="font-bold text-[#111827] text-base mb-1" style={{fontFamily:'Georgia,serif'}}>
                  The Moment of Truth: Why Everything Is Changing Now
                </p>
                <p className="text-xs text-[#475569]">Children&rsquo;s Health Defense Conference &middot; Austin, TX &middot; November 2025</p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative bg-black" style={{aspectRatio:'9/16', maxHeight:'480px'}}>
                <video
                  className="w-full h-full object-contain"
                  controls
                  preload="metadata"
                  poster="/poster-fight-for-justice.jpg"
                >
                  <source src="/video-fight-for-justice.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-5 border-t border-[#E2E8F0]">
                <p className="font-bold text-[#111827] text-base mb-1" style={{fontFamily:'Georgia,serif'}}>
                  What Happens to the Children? The Fight for True Justice
                </p>
                <p className="text-xs text-[#475569]">Children&rsquo;s Health Defense Conference &middot; Austin, TX &middot; November 2025</p>
              </div>
            </div>

            {/* Video 3 */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative bg-black" style={{aspectRatio:'16/9'}}>
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster="/poster-fathers-journey.jpg"
                >
                  <source src="/video-fathers-journey.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-5 border-t border-[#E2E8F0]">
                <p className="font-bold text-[#111827] text-base mb-1" style={{fontFamily:'Georgia,serif'}}>
                  A Father&rsquo;s Heartbreaking 25-Year Journey: The Moment Everything Changed
                </p>
                <p className="text-xs text-[#475569]">Dr. Gary &amp; Beth Kompothecras &middot; Autism Justice Foundation</p>
              </div>
            </div>

          </div>

          {/* Bottom CTA under videos */}
          <div className="text-center mt-12">
            <p className="text-[#475569] mb-4 text-base">Ready to start your family&rsquo;s claim?</p>
            <a
              href="/intake/phase-1"
              className="inline-block bg-[#1E40AF] text-white font-semibold px-8 py-3 rounded hover:bg-[#1E3A8A] transition-colors"
            >
              Start Your Free Claim Review →
            </a>
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
            <a href="tel:9413041500" className="hover:text-[#1E40AF] transition">(941) 304-1500</a> | gethelpforautism.com
          </p>
        </div>
      </section>
    </>
  )
}
