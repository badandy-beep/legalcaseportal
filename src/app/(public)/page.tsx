'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* Split Hero — Full Viewport Height */}
      <section
        className="relative w-full flex flex-col md:flex-row"
        style={{ minHeight: '100vh', background: '#0a1628' }}
      >

        {/* ══ LEFT — CONTENT PANEL ══ */}
        <div className="relative z-10 flex flex-col justify-center px-8 md:px-14 py-16 md:py-0 w-full md:w-[42%]"
          style={{ background: '#0a1628' }}>

          {/* Top label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ background: '#d4a843' }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#d4a843' }}>
              Vaccine Injury Compensation Program
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-black leading-tight mb-5 text-white"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3.25rem)', lineHeight: 1.1 }}>
            Your Child May Be<br />
            <span style={{ color: '#d4a843' }}>Entitled to Federal<br />Compensation.</span>
          </h1>

          {/* Subtext */}
          <p className="mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: '380px' }}>
            Congress created the VICP to compensate families of vaccine-injured children.
            Thousands of autism families qualify — and most never know it exists.
            Alpha Law Group fights for you at <strong style={{ color: 'white' }}>no cost unless we win.</strong>
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a href="/intake/phase-1"
              className="inline-flex items-center justify-center px-8 py-4 font-black uppercase tracking-widest text-sm transition-all hover:scale-105 hover:shadow-lg rounded-sm"
              style={{ background: '#d4a843', color: '#0a1628', boxShadow: '0 4px 24px rgba(212,168,67,0.35)' }}>
              Check Your Eligibility — Free →
            </a>
            <a href="/intake/phase-1"
              className="inline-flex items-center justify-center px-6 py-4 font-bold uppercase tracking-widest text-xs rounded-sm transition-opacity hover:opacity-80"
              style={{ background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.25)' }}>
              Refer Someone You Know
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {[
              '✓ No Cost Unless We Win',
              '✓ Florida Bar Licensed',
              '✓ HIPAA Compliant',
              '✓ Free Case Review',
            ].map((badge) => (
              <span key={badge} className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {badge}
              </span>
            ))}
          </div>

          {/* Bottom — AJF logo mark */}
          <div className="mt-8 md:mt-12 pt-8 hidden md:flex items-center gap-3"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <img src="/ajf-logo.png" alt="Autism Justice Foundation" className="h-8 opacity-70" />
            <div>
              <p className="text-xs font-bold text-white opacity-60">Autism Justice Foundation</p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>Alpha Law Group · Sarasota, FL</p>
            </div>
          </div>

        </div>

        {/* ══ RIGHT — VIDEO PANEL ══ */}
        <div className="relative w-full md:w-[58%]" style={{ minHeight: '0' }}>

          {/* Gold accent border on left edge — connects the two panels */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 z-10"
            style={{ background: 'linear-gradient(to bottom, transparent, #d4a843 20%, #d4a843 80%, transparent)' }} />

          {/* Vimeo background autoplay — desktop & mobile */}
          <div style={{ padding: '56.25% 0 0 0', position: 'relative', width: '100%' }}>
            <iframe
              src="https://player.vimeo.com/video/1173327689?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              title="The 3-Minute Call That Changed Everything"
            />
          </div>

        </div>

      </section>

      {/* Trust Bar */}
      <section className="bg-[#0a1628] py-4">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center font-semibold text-sm text-white">
          <div><span className="text-[#d4a843] mr-1">&#10003;</span>Contingency Fee — No Win, No Fee</div>
          <div><span className="text-[#d4a843] mr-1">&#10003;</span>Florida Statewide Representation</div>
          <div><span className="text-[#d4a843] mr-1">&#10003;</span>Family-Founded. Mission-Driven.</div>
        </div>
      </section>

      {/* Orange CTA Strip 1 */}
      <div className="bg-white py-4 border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <p className="text-sm font-semibold text-[#111827]">Attorney fees paid by the program — even in losing cases.</p>
          <a href="/intake/phase-1" className="flex-shrink-0 font-bold px-5 py-2 rounded-full text-sm transition whitespace-nowrap hover:opacity-90" style={{ background: '#d4a843', color: '#0a1628' }}>
            See If You Qualify →
          </a>
        </div>
      </div>

      {/* Slogan Block 1 */}
      <section className="bg-[#0a1628] py-10">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-2xl md:text-3xl font-bold text-white text-center md:text-left" style={{fontFamily:'Georgia,serif'}}>
            Federal Compensation Exists.<br />
            <span className="text-[#d4a843]">Your Family Deserves It.</span>
          </p>
          <a href="/intake/phase-1" className="flex-shrink-0 bg-[#d4a843] text-[#0a1628] font-bold px-6 py-3 rounded hover:bg-[#b8902e] transition text-sm tracking-wide uppercase whitespace-nowrap">
            Apply Now →
          </a>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold tracking-tight text-[#111827] mb-8 text-center">Why We Do This</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* Pull quote card */}
            <div className="bg-white border-l-4 border-[#d4a843] p-8 rounded-xl shadow-sm">
              <p className="text-lg leading-relaxed italic mb-4 text-[#111827]">
                &ldquo;For years, I&rsquo;ve witnessed the irreversible damage inflicted on our
                nation&rsquo;s children. My son and I founded the Autism Justice Foundation because
                families deserve a voice and a path to justice.&rdquo;
              </p>
              <p className="text-[#0a1628] font-semibold">&mdash; Dr. Gary Kompothecras</p>
            </div>

            {/* Stats column */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="flex items-start gap-3">
                <span className="text-[#0a1628] font-bold text-2xl leading-none">1 in 36</span>
                <p className="text-[#475569] text-sm">children in the US diagnosed with autism</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#0a1628] font-bold text-2xl leading-none">$5.4B+</span>
                <p className="text-[#475569] text-sm">in the VICP trust fund available for families</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#0a1628] font-bold text-2xl leading-none">Act Now</span>
                <p className="text-[#475569] text-sm">Strict filing deadlines apply — don&rsquo;t wait</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board Photo Grid */}
      <section className="bg-white border-b border-[#E2E8F0] py-8 md:py-16 px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-[#0a1628] text-xs font-bold tracking-widest uppercase mb-2">
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
              <p className="text-[#0a1628] font-semibold text-sm mb-1">The Autism Justice Foundation Team</p>
              <p className="text-[#475569] text-xs leading-relaxed">
                Left to right: Chase Engelbrecht (Alpha Law Group), Alex Kompothecras (Managing Attorney, Alpha Law Group), Nick Holscher (McCullough Foundation), Dr. Gary Kompothecras (Autism Justice Foundation), Dan Fluette (documentary filmmaker), and Beth Kompothecras.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden border border-[#E2E8F0] shadow-sm">
            <img src="/ajf-weldon-bigtree.jpg" alt="Dr. David Weldon & Del Bigtree" className="w-full h-56 object-cover object-top" />
            <div className="p-4">
              <p className="text-[#0a1628] font-semibold text-sm mb-1">Dr. David Weldon &amp; Del Bigtree</p>
              <p className="text-[#475569] text-xs leading-relaxed">
                Dr. David Weldon &mdash; Champion of vaccine safety accountability and President Trump&rsquo;s pick for CDC Director &mdash; with Del Bigtree, producer of the landmark VAXXED documentary series. Interviewed by Dan Fluette at the Vaccine Veritas table.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden border border-[#E2E8F0] shadow-sm">
            <img src="/ajf-mary-holland.jpg" alt="With Mary Holland & Dr. Gary" className="w-full h-56 object-cover object-top" />
            <div className="p-4">
              <p className="text-[#0a1628] font-semibold text-sm mb-1">With Mary Holland &amp; Dr. Gary</p>
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

      {/* Slogan Block 2 */}
      <section className="bg-white border-t border-b border-[#E2E8F0] py-10">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#0a1628] mb-2">Zero Cost To You</p>
            <p className="text-2xl md:text-3xl font-bold text-[#111827]" style={{fontFamily:'Georgia,serif'}}>
              Justice for Your Child. Compensation for Your Family. Zero Upfront.
            </p>
          </div>
          <a href="/intake/phase-1" className="flex-shrink-0 bg-[#d4a843] text-[#0a1628] font-bold px-6 py-3 rounded hover:bg-[#b8902e] transition text-sm tracking-wide uppercase whitespace-nowrap">
            Apply Now →
          </a>
        </div>
      </section>

      {/* Green CTA Strip 1 */}
      <div className="bg-[#F0FDF4] border-t border-b border-green-100 py-4">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <p className="text-sm font-semibold text-[#111827]">Know a family with an autistic child? They may have benefits they don&rsquo;t know about.</p>
          <a href="/intake/phase-1" className="flex-shrink-0 bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-2 rounded-full text-sm transition whitespace-nowrap">
            Help a Family Today →
          </a>
        </div>
      </div>

      {/* Voices & Impact Video Row */}
      <section className="bg-[#F8F9FA] border-t border-[#E2E8F0] py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0a1628] text-center mb-3">
            Voices &amp; Impact
          </p>
          <h2 className="text-3xl font-bold text-[#111827] text-center mb-3" style={{fontFamily:'Georgia,serif'}}>
            The Fight for Truth &amp; Justice
          </h2>
          <p className="text-[#475569] text-center mb-6 md:mb-12 max-w-2xl mx-auto">
            Soundbites from the Children&rsquo;s Health Defense Conference — Austin, TX &middot; November 2025
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start justify-items-center">

            {/* Video 1 */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow mx-auto w-full" style={{maxWidth:'320px'}}>
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
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow mx-auto w-full" style={{maxWidth:'320px'}}>
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
          <div className="text-center mt-6 md:mt-12">
            <p className="text-[#475569] mb-4 text-base">Ready to start your family&rsquo;s claim?</p>
            <a
              href="/intake/phase-1"
              className="inline-block bg-[#d4a843] text-[#0a1628] font-semibold px-8 py-3 rounded hover:bg-[#b8902e] transition-colors"
            >
              Start Your Free Claim Review →
            </a>
          </div>
        </div>
      </section>

      {/* VICP Stats Section */}
      <section className="bg-[#0a1628] py-8 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-[#d4a843] text-xs font-bold uppercase tracking-widest text-center mb-3">
            VICP BY THE NUMBERS
          </p>
          <h2 className="text-white text-2xl font-bold text-center mb-2">
            The Fund Is Solvent. Your Deadline Isn&rsquo;t.
          </h2>
          <p className="text-[#94a3b8] text-sm text-center mb-10">
            Source: HRSA &middot; Updated March 2026
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="rounded-lg bg-[#0a1628] border border-[#d4a843]/30 p-6 text-center">
              <p className="text-[#d4a843] text-4xl font-black">$5.4B+</p>
              <p className="text-white text-sm mt-1">Paid to injured families</p>
              <p className="text-[#94a3b8] text-xs mt-1">since 1988</p>
            </div>
            <div className="rounded-lg bg-[#0a1628] border border-[#d4a843]/30 p-6 text-center">
              <p className="text-[#d4a843] text-4xl font-black">28,673</p>
              <p className="text-white text-sm mt-1">Petitions filed</p>
              <p className="text-[#94a3b8] text-xs mt-1">since program began</p>
            </div>
            <div className="rounded-lg bg-[#0a1628] border border-[#d4a843]/30 p-6 text-center">
              <p className="text-[#d4a843] text-4xl font-black">12,019</p>
              <p className="text-white text-sm mt-1">Families compensated</p>
              <p className="text-[#94a3b8] text-xs mt-1">48% success rate</p>
            </div>
            <div className="rounded-lg bg-[#0a1628] border border-[#d4a843]/30 p-6 text-center">
              <p className="text-[#d4a843] text-4xl font-black">$5.4B</p>
              <p className="text-white text-sm mt-1">Paid to families since 1988</p>
              <p className="text-[#94a3b8] text-xs mt-1">and growing</p>
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
              className="text-[#d4a843] text-sm font-semibold hover:underline inline-block"
            >
              &rarr; Check Your Deadline Now
            </Link>
          </div>
        </div>
      </section>

      {/* Orange CTA Strip 2 */}
      <div className="bg-white border-t border-[#E2E8F0] py-4">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <p className="text-sm font-semibold text-[#111827]">$5.4 billion paid out. <span className="text-[#0a1628]">Is your family&rsquo;s share waiting?</span></p>
          <a href="/intake/phase-1" className="flex-shrink-0 font-bold px-5 py-2 rounded-full text-sm transition whitespace-nowrap hover:opacity-90" style={{ background: '#d4a843', color: '#0a1628' }}>
            Start Free Review →
          </a>
        </div>
      </div>

      {/* Slogan Block 3 */}
      <section className="bg-[#F8F9FA] border-t border-[#E2E8F0] py-10">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-2xl md:text-3xl font-bold text-[#111827] text-center md:text-left" style={{fontFamily:'Georgia,serif'}}>
            They Were Injured. The System Owes Them.{' '}
            <span className="text-[#d4a843]">We Collect.</span>
          </p>
          <a href="/intake/phase-1" className="flex-shrink-0 bg-[#d4a843] text-[#0a1628] font-bold px-6 py-3 rounded hover:bg-[#b8902e] transition text-sm tracking-wide uppercase whitespace-nowrap">
            Apply Now →
          </a>
        </div>
      </section>

      {/* Green CTA Strip 2 */}
      <div className="bg-[#F0FDF4] border-t border-b border-green-100 py-4">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <p className="text-sm font-semibold text-[#111827]">Refer someone you know — <span className="text-green-700">sharing this page could change a family&rsquo;s life.</span></p>
          <a href={`https://wa.me/?text=${encodeURIComponent('This law firm helps autism families get federal compensation — free review, no cost unless they win: https://gethelpforautism.com')}`} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-2 rounded-full text-sm transition whitespace-nowrap">
            Share With a Family →
          </a>
        </div>
      </div>

      {/* Bottom CTA Strip */}
      <section className="bg-[#0a1628] text-white py-6 md:py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Ready to be heard?</h2>
          <Link
            href="/intake/phase-1"
            className="inline-block bg-[#d4a843] text-[#0a1628] font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#b8902e] transition"
          >
            Begin Your Free Intake &rarr;
          </Link>
          <p className="mt-4 text-white/80 text-sm">
            <a href="tel:9413041500" className="hover:text-[#d4a843] transition">(941) 304-1500</a> | gethelpforautism.com
          </p>
        </div>
      </section>

      {/* Referral Section */}
      <section className="bg-white border-t-4 border-[#0a1628] py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">

          {/* Icon */}
          <div className="w-14 h-14 rounded-full bg-[#fdf8ee] flex items-center justify-center mx-auto mb-6">
            <svg className="w-7 h-7 text-[#0a1628]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>

          {/* Headline */}
          <p className="text-xs font-bold tracking-widest uppercase text-[#0a1628] mb-3">Spread the Word</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4" style={{fontFamily:'Georgia,serif'}}>
            Know a Family With an Autistic Child?
          </h2>

          {/* Body */}
          <p className="text-lg text-[#475569] max-w-2xl mx-auto mb-4 leading-relaxed">
            Most families don&rsquo;t know the federal government has already paid out <strong className="text-[#111827]">$5.4 billion</strong> to vaccine-injured children — and thousands of autism families may qualify right now.
          </p>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto mb-8 leading-relaxed">
            If you know a parent raising an autistic child, share this page with them. A 3-minute intake form could be the most important thing their family does this year. <strong className="text-[#111827]">There is no cost, no obligation, and no risk.</strong>
          </p>

          {/* Two CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/intake/phase-1"
              className="bg-[#d4a843] text-[#0a1628] font-bold px-8 py-4 rounded hover:bg-[#b8902e] transition text-base tracking-wide uppercase"
            >
              Start My Family&rsquo;s Claim →
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent('I found a free legal resource for autism families — they may qualify for federal compensation. Takes 3 minutes: https://gethelpforautism.com')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#0a1628] text-[#0a1628] font-bold px-8 py-4 rounded hover:bg-[#0a1628] hover:text-[#d4a843] transition text-base tracking-wide uppercase"
            >
              Share With a Family
            </a>
          </div>
        </div>
      </section>

      {/* Coalition & Advisory Partners — text only */}
      <section className="bg-white border-t border-[#E2E8F0] py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-[#475569] mb-6">
            Coalition &amp; Advisory Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            <span className="text-base font-semibold text-[#111827]">Children&rsquo;s Health Defense</span>
            <span className="text-[#E2E8F0]">|</span>
            <span className="text-base font-semibold text-[#111827]">The HighWire with Del Bigtree</span>
            <span className="text-[#E2E8F0]">|</span>
            <span className="text-base font-semibold text-[#111827]">McCullough Foundation</span>
            <span className="text-[#E2E8F0]">|</span>
            <a href="https://autismjusticefoundation.org" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
              <img
                src="/ajf-logo.png"
                alt="Autism Justice Foundation"
                className="w-64 h-auto object-contain hover:opacity-90 transition"
              />
              <span className="text-xs font-medium text-[#475569] group-hover:text-[#d4a843] transition text-center">Autism Justice Foundation</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
