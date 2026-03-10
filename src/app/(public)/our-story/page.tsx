import Link from 'next/link'

export default function OurStoryPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-alg-navy mb-2">Our Story</h1>
          <p className="text-lg text-gray-500">A Family Mission Two Decades in the Making</p>
        </div>

        {/* Section 1 — The Family */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-alg-navy mb-4">The Family</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Dr. Gary and Beth Kompothecras raised six children in Sarasota. Two of them —
              Bronson and Sarah Alice — are severely affected by autism spectrum disorder. What
              began as a private family struggle became a very public mission.
            </p>
            <p>
              Dr. Gary joined the Florida Governor&rsquo;s Task Force on Autism Spectrum Disorders,
              lobbied legislators, pushed for stricter vaccine ingredient standards in Florida, and
              financed research. In January 2026, Governor DeSantis appointed Dr. Gary to the
              Florida Board of Chiropractic Medicine.
            </p>
            <p>
              In September 2025, he formally launched the Autism Justice Foundation, a 501(c)(4)
              nonprofit working alongside Children&rsquo;s Health Defense.
            </p>
          </div>
        </section>

        <hr className="border-alg-gold/30 my-10" />

        {/* Section 2 — The Son */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-alg-navy mb-4">The Son</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Alex Kompothecras, 28, grew up watching his father wage this battle. He pursued law,
              founded Alpha Law Group in Sarasota, and wove autism advocacy into the firm&rsquo;s
              DNA from day one.
            </p>
            <blockquote className="border-l-4 border-alg-gold pl-6 my-6 italic text-alg-navy">
              &ldquo;Watching what my parents went through — what Bronson and Sarah Alice go through
              every day — that&rsquo;s what drives everything I do in this space. I didn&rsquo;t
              choose this cause. It chose me.&rdquo;
              <span className="block mt-2 text-sm font-semibold not-italic text-alg-gold">
                — Alex Kompothecras
              </span>
            </blockquote>
          </div>
        </section>

        <hr className="border-alg-gold/30 my-10" />

        {/* Section 3 — Justice in Action */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-alg-navy mb-4">
            Justice in Action: The Francisco Diaz-Burgos Case
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              In September 2024, Francisco Diaz-Burgos, a 30-year-old man with autism, was tased
              and jailed for three weeks after a police stop in which he tried to protect his
              non-English-speaking father.
            </p>
            <p>
              Alex personally paid his bail, met with the State Attorney, and helped secure
              dismissal of all charges. Alex is now building autism sensitivity training programs
              for law enforcement and prosecutors across Florida&rsquo;s 12th Judicial Circuit.
            </p>
          </div>
        </section>

        <hr className="border-alg-gold/30 my-10" />

        {/* Section 4 — The Foundation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-alg-navy mb-4">The Foundation</h2>
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
          <h3 className="text-xl font-bold text-alg-navy mb-4">Ready to take the first step?</h3>
          <Link
            href="/intake/phase-1"
            className="inline-block bg-alg-gold text-alg-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-alg-gold-light transition"
          >
            Start My Claim &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
