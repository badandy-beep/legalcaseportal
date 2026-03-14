import type { Metadata } from 'next'
import Link from 'next/link'
import { articles } from '@/data/articles'

export const metadata: Metadata = {
  title: 'In The Fight',
  description: 'Before the foundation. Before the law firm. Before the phone rang. The Kompothecras family and their allies were already fighting for autism families.',
  openGraph: {
    title: 'In The Fight Before You Called | Autism Justice Foundation',
    description: 'From the Florida Legislature to the CHD Conference — read the stories of the people fighting for vaccine-injured families before you ever picked up the phone.',
    images: [{ url: '/gary-beth-family-group.webp', width: 1200, height: 630, alt: 'The Autism Justice Foundation team in the fight' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/gary-beth-family-group.webp'],
  },
}

export default function InTheFightPage() {
  const sorted = [...articles].sort((a, b) => b.dateSort - a.dateSort)

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-[#0a1628] py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-xs font-bold tracking-widest uppercase text-[#d4a843] mb-3">Advocacy Record</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            In The Fight
          </h1>
          <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
            Before the foundation. Before the law firm. Before the phone rang. The Kompothecras family was already in the fight.
          </p>
        </div>
      </section>

      {/* Article Listing */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-10">
          {sorted.map((article) => (
            <Link
              key={article.slug}
              href={`/in-the-fight/${article.slug}`}
              className="group block rounded-xl overflow-hidden border border-[#E2E8F0] hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                {/* Thumbnail */}
                {article.image && (
                  <div className="md:w-72 flex-shrink-0">
                    <img
                      src={article.image}
                      alt={article.imageCaption}
                      className="w-full h-48 md:h-full object-cover"
                      style={article.image === '/nino-red-carpet-hd.webp' ? { objectPosition: 'center 15%' } : undefined}
                    />
                  </div>
                )}
                {/* Content */}
                <div className="flex-1 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-[#0a1628] text-[#d4a843] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-[#475569]">{article.date}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#111827] mb-2 leading-tight group-hover:text-[#d4a843] transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
                    {article.title}
                  </h2>
                  <p className="text-sm text-[#475569] leading-relaxed mb-3 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <p className="text-xs text-[#94a3b8]">By {article.byline}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-16">
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
