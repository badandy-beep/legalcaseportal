import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles } from '@/data/articles'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}

  return {
    metadataBase: new URL('https://gethelpforautism.com'),
    title: `${article.title} | Autism Justice Foundation`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | Autism Justice Foundation`,
      description: article.excerpt,
      url: `https://gethelpforautism.com/in-the-fight/${article.slug}`,
      siteName: 'Autism Justice Foundation',
      images: article.image
        ? [
            {
              url: `https://gethelpforautism.com${article.image}`,
              width: 1200,
              height: 630,
              alt: article.imageCaption,
            },
          ]
        : [],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | Autism Justice Foundation`,
      description: article.excerpt,
      images: article.image ? [`https://gethelpforautism.com${article.image}`] : [],
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="bg-white">
      {/* Navy Header */}
      <section className="bg-[#0a1628] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="bg-[#d4a843] text-[#0a1628] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-sm text-[#94a3b8]">{article.date}</span>
          </div>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {article.title}
          </h1>
          <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto italic leading-relaxed">
            {article.deck}
          </p>
          <p className="text-sm text-[#d4a843] mt-4">By {article.byline}</p>
        </div>
      </section>

      {/* Hero Image */}
      {article.image && (
        <figure className="max-w-4xl mx-auto -mt-2">
          <img
            src={article.image}
            alt={article.imageCaption}
            className="w-full object-cover max-h-[520px]"
            style={article.image === '/nino-red-carpet-hd.webp' ? { objectPosition: 'center 15%' } : undefined}
          />
          <figcaption className="text-xs text-[#475569] italic text-center px-4 py-3 bg-[#F8F9FA] border-b border-[#E2E8F0]">
            {article.imageCaption}
          </figcaption>
        </figure>
      )}

      {/* Article Body */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="space-y-5">
          {article.body.map((block: { type: string; text?: string; cite?: string; videoId?: string; title?: string; photos?: { src: string; caption: string }[]; posterSrc?: string; tysonSrc?: string; shortcode?: string; caption?: string; personName?: string; linkText?: string; label?: string; stat?: string; statLabel?: string; quote?: string; attribution?: string }, i: number) => {
            if (block.type === 'youtube' && block.videoId) {
              return (
                <div key={i} className="my-8">
                  <a
                    href={`https://www.youtube.com/watch?v=${block.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="bg-[#0a1628] px-4 py-3 flex items-center justify-between">
                      <p className="text-[#d4a843] text-xs font-bold tracking-widest uppercase font-sans">
                        &#9654; Watch: {block.title || 'Video'}
                      </p>
                      <span className="text-[#94a3b8] text-xs font-sans">Opens on YouTube &rarr;</span>
                    </div>
                    <div className="relative bg-black">
                      <img
                        src={`https://img.youtube.com/vi/${block.videoId}/hqdefault.jpg`}
                        alt={block.title || 'Watch video'}
                        className="w-full object-cover"
                        style={{ maxHeight: '400px' }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                          <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              )
            }
            if (block.type === 'vimeo' && block.videoId) {
              return (
                <div key={i} className="my-8 rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-md">
                  <div className="bg-[#0a1628] px-4 py-3 flex items-center justify-between">
                    <p className="text-[#d4a843] text-xs font-bold tracking-widest uppercase font-sans">
                      &#9654; {block.title || 'Watch Documentary'}
                    </p>
                    <span className="text-[#94a3b8] text-xs font-sans italic">Producer Version</span>
                  </div>
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://player.vimeo.com/video/${block.videoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=0`}
                      title={block.title || 'Documentary'}
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                      allowFullScreen
                    />
                  </div>
                </div>
              )
            }
            if (block.type === 'photogallery' && block.photos) {
              return (
                <div key={i} className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {block.photos.map((photo, j) => (
                    <figure key={j} className="rounded-xl overflow-hidden border border-[#E2E8F0]">
                      <img src={photo.src} alt={photo.caption} className="w-full object-cover" style={{ maxHeight: '320px' }} />
                      <figcaption className="bg-[#F8F9FA] px-3 py-2 text-xs text-[#475569] font-sans italic">{photo.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              )
            }
            if (block.type === 'h2') {
              return (
                <h2
                  key={i}
                  className="text-2xl font-bold text-[#111827] mt-10 mb-2"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {block.text}
                </h2>
              )
            }
            if (block.type === 'warning') {
              return (
                <div key={i} className="bg-[#fdf8ee] border border-[#d4a843]/40 rounded-lg p-5 mt-6">
                  <p className="text-sm font-semibold text-[#0a1628] mb-1">Important Deadline Notice</p>
                  <p className="text-sm text-[#475569]">{block.text}</p>
                  <a
                    href="/intake/phase-1"
                    className="inline-block mt-3 bg-[#d4a843] text-[#0a1628] font-bold text-xs tracking-widest uppercase px-5 py-2.5 rounded-lg hover:bg-[#b8902e] transition-colors"
                  >
                    Free Case Review &rarr;
                  </a>
                </div>
              )
            }
            if (block.type === 'quote') {
              return (
                <blockquote key={i} className="border-l-4 border-[#d4a843] pl-6 my-8 italic text-[#111827]">
                  <p className="leading-relaxed">{block.text}</p>
                  {block.cite && (
                    <span className="block mt-2 text-sm font-semibold not-italic text-[#0a1628]">
                      {block.cite}
                    </span>
                  )}
                </blockquote>
              )
            }
            if (block.type === 'instagram') {
              return (
                <div key={i} className="my-8 flex justify-center">
                  <div className="w-full max-w-xl">
                    {block.caption && (
                      <p className="text-sm font-semibold text-[#0a1628] font-sans mb-3 text-center italic">
                        {block.caption}
                      </p>
                    )}
                    <div className="rounded-xl overflow-hidden border border-[#E2E8F0] shadow-sm bg-white p-4 text-center">
                      <p className="text-[#475569] text-sm mb-3">Watch on Instagram</p>
                      <a
                        href={`https://www.instagram.com/reel/${block.shortcode}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#0a1628] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#d4a843] hover:text-[#0a1628] transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                        Watch Video on Instagram
                      </a>
                    </div>
                  </div>
                </div>
              )
            }
            if (block.type === 'knockout') {
              return (
                <div key={i} className="my-10 rounded-2xl overflow-hidden border-2 border-[#d4a843] shadow-xl">
                  <div className="bg-[#0a1628] px-8 py-6 text-center">
                    <p className="text-[#d4a843] text-xs font-bold tracking-widest uppercase font-sans mb-2">
                      Advisory Board &middot; Autism Justice Foundation
                    </p>
                    <h3 className="text-white text-3xl md:text-4xl font-bold leading-tight" style={{fontFamily:'Georgia,serif'}}>
                      Nino Joins the Fight to<br />
                      <span className="text-[#d4a843]">Knock Out Autism.</span>
                    </h3>
                    <p className="text-[#94a3b8] text-sm font-sans mt-3 max-w-xl mx-auto">
                      36&ndash;0. 34 KOs. WBC &amp; WBA Ranked. Now fighting the most important battle of his life &mdash; for autism families who need a champion in their corner.
                    </p>
                  </div>
                  <div className="relative">
                    <img
                      src={block.tysonSrc}
                      alt="David &lsquo;Nino&rsquo; Rodriguez with Mike Tyson — two heavyweight legends"
                      className="w-full object-cover"
                      style={{maxHeight:'480px', objectPosition:'center top'}}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-[#0a1628]/85 px-6 py-3">
                      <p className="text-[#d4a843] text-xs font-bold font-sans tracking-wide">
                        David &ldquo;Nino&rdquo; Rodriguez with Mike Tyson &mdash; two champions who know what it means to fight through the impossible.
                      </p>
                    </div>
                  </div>
                  <div className="h-1 bg-[#d4a843]" />
                </div>
              )
            }
            if (block.type === 'vaxxedpromo') {
              return (
                <div key={i} className="my-10 rounded-2xl overflow-hidden border-2 border-[#d4a843] shadow-xl">
                  <div className="bg-black px-8 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-1">
                      <p className="text-[#d4a843] text-xs font-bold tracking-widest uppercase font-sans mb-1">
                        The Film That Started It All
                      </p>
                      <h3 className="text-white text-2xl font-bold leading-tight" style={{fontFamily:'Georgia,serif'}}>
                        VAXXED: From Cover-Up to Catastrophe
                      </h3>
                      <p className="text-[#94a3b8] text-sm font-sans mt-1">
                        Award-Winning Documentary &middot; Directed by Dr. Andrew Wakefield &middot; 2016
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#0a1628] flex flex-col sm:flex-row items-stretch">
                    <div className="sm:w-48 flex-shrink-0">
                      <img
                        src={block.posterSrc}
                        alt="VAXXED: From Cover-Up to Catastrophe — Official Movie Poster"
                        className="w-full h-full object-cover"
                        style={{minHeight:'200px', maxHeight:'300px'}}
                      />
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-center">
                      <p className="text-white font-sans text-lg font-bold mb-3 leading-snug">
                        &ldquo;The film they don&rsquo;t want you to see.&rdquo;
                      </p>
                      <p className="text-[#94a3b8] font-sans text-sm leading-relaxed mb-5">
                        When CDC whistleblower Dr. William Thompson came forward with evidence that the agency had concealed data linking the MMR vaccine to autism in African American boys, filmmaker Del Bigtree and Dr. Wakefield documented it. The result was VAXXED &mdash; banned from film festivals, attacked by the press, and seen by millions. Watch the full-length documentary below, presented in the producer version made possible by Dr. Gary Kompothecras.
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#d4a843] flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-[#0a1628] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <p className="text-[#d4a843] font-bold font-sans text-sm tracking-wide uppercase">
                          Full Documentary &mdash; Streaming Below &darr;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="h-1 bg-[#d4a843]" />
                </div>
              )
            }
            if (block.type === 'vicp_banner') {
              return (
                <div key={i} className="my-6 flex items-center justify-between gap-4 px-5 py-4 rounded-sm"
                  style={{ background: '#0a1628', borderLeft: '4px solid #d4a843' }}>
                  <p className="text-sm text-white opacity-90 leading-snug">
                    Alpha Law Group represents VICP autism compensation claims &mdash; <strong className="text-white">at no upfront cost.</strong>
                  </p>
                  <a href="/intake/phase-1"
                    className="flex-shrink-0 px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-sm transition-opacity hover:opacity-90"
                    style={{ background: '#d4a843', color: '#0a1628', whiteSpace: 'nowrap' }}>
                    See If You Qualify &rarr;
                  </a>
                </div>
              )
            }
            if (block.type === 'vicp_mid') {
              return (
                <div key={i} className="my-10 mx-auto max-w-2xl rounded-sm overflow-hidden"
                  style={{ border: '2px solid #d4a843' }}>
                  <div className="px-8 py-6" style={{ background: '#fdf8ee' }}>
                    <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#d4a843' }}>
                      Did You Know?
                    </p>
                    <p className="text-lg font-semibold leading-snug mb-4" style={{ color: '#0a1628' }}>
                      If your child was diagnosed with autism after receiving childhood vaccines, you may have a federal compensation claim. Most families don&rsquo;t know they qualify.
                    </p>
                    <p className="text-sm mb-5" style={{ color: '#475569' }}>
                      The Vaccine Injury Compensation Program (VICP) is a federal fund created by Congress. Thousands of families may be eligible &mdash; and the process costs you nothing unless we win.
                    </p>
                    <a href="/intake/phase-1"
                      className="inline-block px-6 py-3 text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-90 rounded-sm"
                      style={{ background: '#0a1628', color: '#d4a843' }}>
                      Check Eligibility &mdash; It&rsquo;s Free &rarr;
                    </a>
                  </div>
                </div>
              )
            }
            if (block.type === 'vicp_close') {
              return (
                <div key={i} className="mt-12 rounded-sm overflow-hidden"
                  style={{ background: '#0a1628' }}>
                  <div className="px-8 py-10 text-center">
                    <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#d4a843' }}>
                      Autism Justice Foundation &middot; Alpha Law Group
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
                      {block.personName ? `${block.personName} joined the fight.` : 'They joined the fight.'} <br />
                      <span style={{ color: '#d4a843' }}>Now it&rsquo;s your turn.</span>
                    </h3>
                    <p className="text-sm text-white opacity-70 mb-6 max-w-lg mx-auto leading-relaxed">
                      Alpha Law Group handles VICP autism compensation claims exclusively on contingency &mdash; no cost unless we win. Start your free case review today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a href="/intake/phase-1"
                        className="px-8 py-4 font-bold uppercase tracking-widest text-sm transition-opacity hover:opacity-90 rounded-sm"
                        style={{ background: '#d4a843', color: '#0a1628' }}>
                        Begin Your VICP Application &rarr;
                      </a>
                      <a href="/intake/phase-1"
                        className="px-8 py-4 font-bold uppercase tracking-widest text-sm rounded-sm transition-opacity hover:opacity-80"
                        style={{ background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>
                        Refer Someone You Know &rarr;
                      </a>
                    </div>
                    <p className="mt-4 text-xs opacity-40 text-white">
                      No cost unless we win &middot; Florida Bar licensed &middot; HIPAA compliant
                    </p>
                  </div>
                </div>
              )
            }
            if (block.type === 'vicp_whisper') {
              return (
                <div key={i} className="my-6 px-5 py-4 rounded-sm bg-[#f8f9fa] border-l-4 border-[#d4a843]">
                  <p className="text-sm text-[#475569] leading-snug">
                    {block.text}{' '}
                    <a href="/intake/phase-1" className="text-[#d4a843] font-bold hover:underline">
                      {block.linkText}
                    </a>
                  </p>
                </div>
              )
            }
            if (block.type === 'vicp_pill') {
              return (
                <div key={i} className="my-6 text-center">
                  <a
                    href="/intake/phase-1"
                    className="inline-block px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-opacity hover:opacity-90"
                    style={{ background: '#0a1628', color: '#d4a843' }}
                  >
                    {block.label}
                  </a>
                </div>
              )
            }
            if (block.type === 'vicp_stat') {
              return (
                <div key={i} className="my-10 mx-auto max-w-2xl rounded-sm overflow-hidden text-center"
                  style={{ border: '2px solid #d4a843' }}>
                  <div className="px-8 py-8" style={{ background: '#fdf8ee' }}>
                    <p className="text-5xl font-bold mb-2" style={{ color: '#0a1628', fontFamily: 'Georgia, serif' }}>
                      {block.stat}
                    </p>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: '#475569' }}>
                      {block.statLabel}
                    </p>
                    <a href="/intake/phase-1"
                      className="inline-block px-6 py-3 text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-90 rounded-sm"
                      style={{ background: '#0a1628', color: '#d4a843' }}>
                      {block.linkText}
                    </a>
                  </div>
                </div>
              )
            }
            if (block.type === 'vicp_pullquote') {
              return (
                <div key={i} className="my-10 mx-auto max-w-2xl px-8 py-8 rounded-sm"
                  style={{ background: '#0a1628' }}>
                  <blockquote className="text-lg text-white italic leading-relaxed mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                    &ldquo;{block.quote}&rdquo;
                  </blockquote>
                  {block.attribution && (
                    <p className="text-sm font-bold not-italic mb-4" style={{ color: '#d4a843' }}>
                      &mdash; {block.attribution}
                    </p>
                  )}
                  <a href="/intake/phase-1"
                    className="inline-block px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-90 rounded-sm"
                    style={{ background: '#d4a843', color: '#0a1628' }}>
                    {block.linkText}
                  </a>
                </div>
              )
            }
            return (
              <p key={i} className="text-[#475569] leading-relaxed text-base">
                {block.text}
              </p>
            )
          })}
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-[#E2E8F0]">
          <Link
            href="/in-the-fight"
            className="text-sm font-bold text-[#d4a843] hover:underline"
          >
            &larr; Back to In The Fight
          </Link>
        </div>
      </div>
    </div>
  )
}
