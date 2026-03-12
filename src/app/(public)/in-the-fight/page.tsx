import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'In The Fight Before You Called | Autism Justice Foundation',
  description: 'A documented record of the Kompothecras family and AJF legal team advocacy — decades of fighting for autism families before they ever opened a law firm.',
}

const articles = [
  {
    slug: 'medical-freedom-act-2026',
    category: 'Legislative Record',
    date: 'March 12, 2026',
    title: 'Florida Just Passed What Dr. Gary Fought For in 2008. He Was Right All Along.',
    deck: 'Fifteen years ago, a Sarasota father spent millions, leveraged every political connection he had, and got called a bully for it. On March 10, 2026, the Florida Senate proved him right.',
    image: '/gary-senate-sb1756-feb2026.jpg',
    imageCaption: 'Dr. Gary Kompothecras (left, blue suit) at the Florida Senate Appropriations Committee hearing on SB 1756, February 24, 2026, Tallahassee. Photo: Florida Phoenix.',
    author: 'AJF Editorial Staff',
    body: [
      {
        type: 'p',
        text: 'There is a specific kind of vindication that only comes after a very long time. It does not arrive with fanfare or an apology from the people who called you wrong. It arrives quietly — in the form of a Senate roll call vote in Tallahassee, on a Tuesday, fifteen years after everyone told you to sit down.',
      },
      {
        type: 'p',
        text: 'That is where Dr. Gary Kompothecras stands today.',
      },
      {
        type: 'p',
        text: 'On March 10, 2026, the Florida Senate passed SB 1756 — the Medical Freedom Act — a Governor DeSantis priority bill that gives Florida parents a conscience-based right to opt their children out of school vaccine mandates, and requires health care practitioners to provide full CDC disclosure before vaccinating a child. This is, in its essential form, what Dr. Gary Kompothecras has been fighting for since 2008.',
      },
      {
        type: 'h2',
        text: 'The Fight Nobody Wanted to Cover',
      },
      {
        type: 'p',
        text: "In 2008, Governor Charlie Crist appointed Gary Kompothecras to the Florida Governor's Task Force on Autism Spectrum Disorders, where he served alongside former NFL quarterback Dan Marino. His two children — Bronson and Sarah Alice — had been diagnosed with severe autism as toddlers. He championed what would have been the nation's strictest thimerosal vaccine restriction law. He produced a 46-minute documentary of the September 2008 legislative hearing and distributed it to every legislator who would watch.",
      },
      {
        type: 'p',
        text: 'He traveled to Washington for the Congressional autism oversight hearing. He funded Vaxxed screenings across Sarasota. He and his wife Beth filed both Bronson and Sarah Alice as petitioners in the federal Vaccine Injury Compensation Program. Beth made her own political contributions to legislators who supported autism accountability. This was never a solo mission — it was a family operation, funded out of pocket, sustained by conviction.',
      },
      {
        type: 'p',
        text: 'The political establishment pushed back. The medical establishment pushed back. The media either ignored the story or framed Gary as a fringe figure with too much money and not enough credibility. None of that stopped him.',
      },
      {
        type: 'h2',
        text: 'What SB 1756 Actually Does',
      },
      {
        type: 'p',
        text: "The Medical Freedom Act establishes a conscience-based exemption for childhood vaccine mandates in Florida's public and private schools. It requires that before any vaccine is administered to a child, the health care practitioner must provide written disclosure of the CDC's full list of known side effects and adverse reactions. It codifies the right of Florida parents to make informed medical decisions for their children — the same right Gary Kompothecras has been demanding for nearly two decades.",
      },
      {
        type: 'p',
        text: "Governor DeSantis made the bill an administration priority. The Senate Appropriations Committee heard testimony on February 24, 2026 — and Dr. Gary Kompothecras was there, seated at the committee table, the same man who had been shouting into the void since his children's diagnoses.",
      },
      {
        type: 'h2',
        text: 'From 1-800-ASK-GARY to the Governor\'s Board',
      },
      {
        type: 'p',
        text: "Gary built 1-800-ASK-GARY from his first chiropractic clinic in 1995 into one of the most recognized attorney referral services in Florida. That same entrepreneurial intensity fueled his advocacy. He spent millions of his own money. He leveraged every political connection. He didn't wait for permission.",
      },
      {
        type: 'p',
        text: "In January 2026, Governor DeSantis appointed Dr. Gary to the Florida Board of Chiropractic Medicine — a recognition of both his professional standing and his years of health freedom advocacy. That same legislative session, SB 1756 advanced through committee. The timing was not a coincidence. Gary had spent years building the relationships and the record that made this moment possible.",
      },
      {
        type: 'h2',
        text: 'The Foundation',
      },
      {
        type: 'p',
        text: "In September 2025, Gary and Beth co-founded the Autism Justice Foundation — a 501(c)(4) nonprofit working alongside Children's Health Defense and the Autism Society of Florida to push for transparency, accountability, and reform. Their son Alex, a Sarasota attorney, launched Justice for Autism as the legal arm — connecting families to VICP resources and representation.",
      },
      {
        type: 'p',
        text: "The moment the country finally caught up to what the Kompothecras family had been saying for fifteen years, they were ready. Not with talking points — with infrastructure. A foundation. A legal team. A national intake system. And a twenty-year record that no one can dispute.",
      },
      {
        type: 'h2',
        text: 'What This Means for You',
      },
      {
        type: 'p',
        text: 'If your child was injured by a vaccine, you may be entitled to compensation through the federal Vaccine Injury Compensation Program. The VICP has paid out over $5 billion to families since 1988 — but most eligible families have never been told their rights. Filing deadlines are strict. The statute of limitations can be as short as three years.',
      },
      {
        type: 'p',
        text: "The Kompothecras family did not start this fight last year. They started it when Bronson couldn't say the name of his favorite toy. Everything since then — the task force, the legislation, the documentary, the foundation, the legal team — has been building toward this moment. The question is whether you'll let them fight for your family too.",
      },
    ],
  },
]

export default function InTheFightPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-white border-b border-[#E2E8F0] py-14">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-xs font-bold tracking-widest uppercase text-[#0a1628] mb-3">Advocacy Record</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            In The Fight
          </h1>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            Before the foundation. Before the law firm. Before the phone rang. The Kompothecras family was already in the fight.
          </p>
        </div>
      </section>

      {/* Articles */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        {articles.map((article) => (
          <article key={article.slug} className="mb-16">
            {/* Category + Date */}
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#0a1628] text-[#d4a843] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                {article.category}
              </span>
              <span className="text-sm text-[#475569]">{article.date}</span>
            </div>

            {/* Title + Deck */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              {article.title}
            </h2>
            <p className="text-lg text-[#475569] mb-6 leading-relaxed italic">
              {article.deck}
            </p>

            {/* Author */}
            <p className="text-sm text-[#94a3b8] mb-8">By {article.author}</p>

            {/* Hero Image */}
            {article.image && (
              <figure className="mb-10 rounded-xl overflow-hidden shadow-md border border-[#E2E8F0]">
                <img
                  src={article.image}
                  alt={article.imageCaption}
                  className="w-full object-cover max-h-[480px]"
                />
                <figcaption className="text-xs text-[#475569] italic text-center px-4 py-3 bg-[#F8F9FA] border-t border-[#E2E8F0]">
                  {article.imageCaption}
                </figcaption>
              </figure>
            )}

            {/* Body */}
            <div className="space-y-5">
              {article.body.map((block, i) => {
                if (block.type === 'h2') {
                  return (
                    <h3
                      key={i}
                      className="text-2xl font-bold text-[#111827] mt-10 mb-2"
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      {block.text}
                    </h3>
                  )
                }
                return (
                  <p key={i} className="text-[#475569] leading-relaxed text-base">
                    {block.text}
                  </p>
                )
              })}
            </div>

            {/* Bottom Divider */}
            <hr className="border-[#d4a843]/30 mt-12" />
          </article>
        ))}

        {/* Bottom CTA */}
        <div className="text-center pt-8">
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
