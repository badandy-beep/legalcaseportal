import Link from 'next/link'

const team = [
  {
    name: 'Alex J. Kompothecras',
    title: 'Managing Attorney, Alpha Law Group',
    badge: 'Justice for Autism — Lead Counsel',
    image: '/Alex-Kompothecras.webp',
    bio: 'Alex is the 28-year-old Managing Attorney of Alpha Law Group and the driving force behind the Justice for Autism initiative. A licensed attorney in Florida\u2019s 12th Judicial Circuit, Alex built Alpha Law Group with a client-first philosophy and a singular focus on fighting for the marginalized. His personal connection to autism \u2014 growing up with siblings Bronson and Sarah Alice \u2014 has shaped every aspect of his legal advocacy. Alex personally intervened in the Francisco Diaz-Burgos case, paying bail out of pocket and securing dismissal. He is now building autism sensitivity training programs for Florida law enforcement and prosecutors.',
    contact: '(941) 304-1500',
  },
  {
    name: 'Chase Engelbrecht',
    title: 'Attorney, Alpha Law Group',
    badge: 'Autism 5K Co-Organizer',
    image: '/Chase-Engelbrecht.webp',
    bio: 'Chase is an attorney at Alpha Law Group and Alex\u2019s partner in organizing the Annual Alpha Law Group Autism 5K at Nathan Benderson Park \u2014 a free, sensory-friendly event that has become a cornerstone of the Sarasota autism community. \u201cFamilies navigating autism often face real financial and logistical hurdles,\u201d Chase has said. \u201cWe remove those barriers.\u201d',
    contact: '(941) 304-1500',
  },
  {
    name: 'Dr. Gary Kompothecras',
    title: 'Founder, Autism Justice Foundation',
    badge: 'Advisor & Advocate',
    image: null as string | null,
    bio: 'Dr. Gary is a chiropractor, entrepreneur, and founder of 1-800-ASK-GARY, a nationally recognized medical and legal referral service. A member of the Florida Governor\u2019s Task Force on Autism Spectrum Disorders and appointed by Governor DeSantis to the Florida Board of Chiropractic Medicine (January 2026), Dr. Gary has spent 19 years lobbying in Tallahassee for autism families. In September 2025, he co-founded the Autism Justice Foundation with Alex. He works closely with Children\u2019s Health Defense and the Autism Society of Florida.',
  },
  {
    name: 'Beth Kompothecras',
    title: 'Co-Founder, Autism Justice Foundation',
    badge: 'Family Advocate',
    image: null as string | null,
    bio: 'Beth Kompothecras is a businesswoman, event planner, and the backbone of the Kompothecras family. Raising six children \u2014 including Bronson and Sarah Alice, both severely affected by autism \u2014 Beth has been the quiet force behind two decades of advocacy. Her strength and dedication inspired both Dr. Gary\u2019s legislative work and Alex\u2019s legal career.',
  },
]

export default function OurTeamPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-alg-navy mb-2">Our Team</h1>
          <p className="text-lg text-gray-700">The people behind the mission</p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-alg-gray-border rounded-xl p-6 shadow-sm flex flex-col items-center text-center"
            >
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover object-top mb-4 border-2 border-alg-gold"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-alg-navy/10 border-2 border-alg-gold mb-4 flex items-center justify-center">
                  <span className="text-alg-navy/40 text-xs">Photo</span>
                </div>
              )}
              <h3 className="text-lg font-bold text-alg-navy">{member.name}</h3>
              <p className="text-sm text-gray-600 mt-0.5">{member.title}</p>
              <span className="inline-block mt-2 bg-alg-gold text-alg-navy text-xs font-semibold px-2 py-0.5 rounded-full">
                {member.badge}
              </span>
              <p className="text-gray-700 text-sm leading-relaxed mt-4">{member.bio}</p>
              {member.contact && (
                <p className="mt-4 text-alg-gold font-semibold text-sm">
                  <a href={`tel:${member.contact.replace(/\D/g, '')}`}>{member.contact}</a>
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
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
