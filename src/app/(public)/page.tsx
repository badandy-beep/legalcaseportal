import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-alg-navy text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">This Fight Is Personal To Us.</h1>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Alex Kompothecras grew up with two siblings — Bronson and Sarah Alice — severely
            affected by autism. His father Dr. Gary spent 19 years fighting in Tallahassee for
            families like yours. Now Alex has built a legal practice with one mission: getting
            autism families the justice they deserve.
          </p>
          <Link
            href="/intake/phase-1"
            className="inline-block bg-alg-gold text-alg-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-alg-gold-light transition"
          >
            Start My Claim &rarr;
          </Link>
          <p className="mt-4 text-white/60 text-sm">
            Free consultation. No fees unless we win. Reviewed within 24 hours.
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-alg-gold text-alg-navy py-4">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center font-semibold text-sm">
          <div>Contingency Fee — No Win, No Fee</div>
          <div>Florida Statewide Representation</div>
          <div>Family-Founded. Mission-Driven.</div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-alg-navy mb-8 text-center">Why We Do This</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pull quote card */}
            <div className="bg-alg-navy text-white p-8 rounded-xl">
              <p className="text-lg leading-relaxed italic mb-4">
                &ldquo;For years, I&rsquo;ve witnessed the irreversible damage inflicted on our
                nation&rsquo;s children. My son and I founded the Autism Justice Foundation because
                families deserve a voice and a path to justice.&rdquo;
              </p>
              <p className="text-alg-gold font-semibold">&mdash; Dr. Gary Kompothecras</p>
            </div>

            {/* Stats column */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="flex items-start gap-3">
                <span className="text-alg-gold font-bold text-2xl leading-none">1 in 36</span>
                <p className="text-gray-700 text-sm">children in the US diagnosed with autism</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-alg-gold font-bold text-2xl leading-none">$5B+</span>
                <p className="text-gray-700 text-sm">in the VICP trust fund available for families</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-alg-gold font-bold text-2xl leading-none">Act Now</span>
                <p className="text-gray-700 text-sm">Strict filing deadlines apply — don&rsquo;t wait</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Strip */}
      <section className="bg-alg-navy text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to be heard?</h2>
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
      </section>
    </>
  )
}
