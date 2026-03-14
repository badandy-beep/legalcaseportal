'use client'

import { useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import EligibilityCapture from '@/components/EligibilityCapture'

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      q: 'Does my child qualify for VICP compensation?',
      a: 'If your child received a covered vaccine and developed autism or related neurological symptoms afterward, you may qualify. The VICP covers most standard childhood vaccines including MMR, DTaP, and flu shots. Eligibility depends on the timing of symptoms relative to vaccination and your filing deadline. The only way to know for certain is a free case review — which costs you nothing.',
    },
    {
      q: 'How much does it cost to file a VICP claim?',
      a: 'Nothing. Zero. The VICP is specifically designed so that attorney fees are paid by the program — not by you — whether you win or lose. Alpha Law Group represents all VICP clients on a contingency basis. You pay absolutely nothing unless we recover compensation for your family.',
    },
    {
      q: 'What is the filing deadline?',
      a: "You have 3 years from the date of your child\u2019s first symptom \u2014 not the diagnosis date. This is a critical distinction. Many families wait until they have an official autism diagnosis before consulting an attorney, and by then their window has closed. If your child showed any signs of regression, developmental changes, fever, or behavioral shifts after vaccination, that is when your clock started. Contact us immediately for a free deadline assessment.",
    },
    {
      q: 'How long does the process take?',
      a: 'VICP cases typically take 2\u20135 years from filing to resolution. While this sounds long, the process moves forward while your family continues life as normal \u2014 there are no court appearances required from you. Our team handles all filings, medical record collection, and government correspondence. Many families receive interim compensation payments during the process.',
    },
    {
      q: 'Why choose Alpha Law Group over other VICP attorneys?',
      a: "Most VICP attorneys treat this as a volume practice. Alex Kompothecras and the Alpha Law Group team treat it as a personal mission. Dr. Gary Kompothecras filed his own children in vaccine court. Alex testified before the Florida House to pass stronger protections for vaccine-injured families. When you call Alpha Law Group, you\u2019re calling a family that has lived exactly what you\u2019re going through \u2014 and built a legal practice specifically to fight for families like yours.",
    },
  ]

  const testimonials = [
    {
      initial: 'M',
      quote: 'I had no idea this program even existed. Within three minutes of filling out the form, someone from Alpha Law Group called me back \u2014 no pressure, no confusing legal language, just real answers. We are now in the process of filing our claim. I only wish I had found this sooner.',
      name: 'Mary H.',
      detail: 'Mother of vaccine-injured child \u00b7 Age 38 \u00b7 Florida',
    },
    {
      initial: 'Z',
      quote: "Our son Jacob is seven now. We missed the filing window for him \u2014 and that is something we will live with forever. But when we learned our daughter Emily, who is four and requires around-the-clock care, still had time \u2014 we called Alpha Law Group the same day. My wife Leslie had to leave her career to care for Emily full time. The compensation we received has been a lifeline. It has not fixed what happened to our children, but it has kept our family standing.",
      name: 'Michael & Leslie Z.',
      detail: 'Parents of two vaccine-injured children \u00b7 Tampa, Florida',
      badge: 'Filed in time for youngest child',
    },
    {
      initial: 'M',
      quote: "What struck us immediately was that this was not just a law firm \u2014 it was a family who had lived this. Dr. Gary and Alex did not just take our case, they made us feel like we were part of something bigger. Choosing Alpha Law Group was the easiest decision we made through the hardest time of our lives. For any family still on the fence \u2014 these are your people.",
      name: 'Michael & Allison M.',
      detail: 'Parents of a vaccine-injured child \u00b7 Sarasota, Florida',
    },
  ]

  return (
    <>
      {/* ═══ SECTION 1 — HERO ═══ */}
      <section
        className="relative w-full"
        style={{ background: '#0a1628' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: '600px' }}>
          <div className="flex flex-col justify-center py-10 px-6 md:pl-12 md:pr-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: '#d4a843' }} />
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: '#d4a843', fontFamily: 'Montserrat,sans-serif' }}>
                Vaccine Injury Compensation Program
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-5 text-white"
              style={{ lineHeight: 1.1, fontFamily: 'Montserrat,sans-serif' }}>
              Your Child May Be<br />
              <span style={{ color: '#d4a843' }}>Entitled to Federal<br />Compensation.</span>
            </h1>
            <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, maxWidth: '440px', fontFamily: 'Roboto,sans-serif' }}>
              Congress created the VICP to compensate families of vaccine-injured children.
              Thousands of autism families qualify — and most never know it exists.
              Alpha Law Group fights for you at <strong style={{ color: 'white' }}>no cost unless we win.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a href="/intake/phase-1"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-black uppercase tracking-widest text-sm transition-all hover:scale-105 hover:shadow-lg rounded-sm"
                style={{ background: '#d4a843', color: '#0a1628', boxShadow: '0 4px 24px rgba(212,168,67,0.35)', fontFamily: 'Montserrat,sans-serif' }}>
                Check Your Eligibility — Free →
              </a>
              <a href="/refer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 font-black uppercase tracking-widest text-sm rounded-sm transition-opacity hover:opacity-80"
                style={{ background: '#16a34a', color: '#ffffff', fontFamily: 'Montserrat,sans-serif' }}>
                Refer Someone You Know
              </a>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {['✓ No Cost Unless We Win', '✓ Florida Bar Licensed', '✓ HIPAA Compliant', '✓ Free Case Review'].map((badge) => (
                <span key={badge} className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Roboto,sans-serif' }}>
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden" style={{ minHeight: '300px', borderRadius: '0 0 0 0', margin: '0' }}>
            <div className="hidden md:block" style={{ margin: '24px 32px 24px 0', borderRadius: '12px', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '16px', left: '16px', zIndex: 20, display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(0,0,0,0.5)', borderRadius: '20px', padding: '6px 12px 6px 6px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#d4a843', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '9px solid #0a1628', marginLeft: '2px' }} />
                </div>
                <span style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '11px', fontWeight: 700, color: '#ffffff', letterSpacing: '.1em', textTransform: 'uppercase' as const }}>Watch Our Story</span>
              </div>
            </div>
            <div className="relative w-full h-full" style={{ minHeight: '300px' }}>
              <iframe
                src="https://player.vimeo.com/video/1173327689?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="The 3-Minute Call That Changed Everything"
              />
            </div>
            <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 — TRUST BAR ═══ */}
      <section className="py-5" style={{ background: '#112240' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-base font-semibold text-white" style={{ fontFamily: 'Roboto,sans-serif' }}>
          <div><span className="text-[#d4a843] mr-1">✓</span>Contingency Fee — No Win, No Fee</div>
          <div><span className="text-[#d4a843] mr-1">✓</span>Florida Statewide Representation</div>
          <div><span className="text-[#d4a843] mr-1">✓</span>Family-Founded. Mission-Driven.</div>
        </div>
      </section>

      {/* ═══ SECTION 3 — THE MISSION ═══ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-black text-[#111827] mb-12 text-center" style={{ fontFamily: 'Montserrat,sans-serif' }}>Why We Do This</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white border-l-4 border-[#d4a843] p-8 md:p-10 rounded-xl shadow-sm">
              <p className="text-lg md:text-xl leading-relaxed italic mb-4 text-[#1e293b]" style={{ fontFamily: 'Roboto,sans-serif' }}>
                &ldquo;For years, I&rsquo;ve witnessed the irreversible damage inflicted on our
                nation&rsquo;s children. My son and I founded the Autism Justice Foundation because
                families deserve a voice and a path to justice.&rdquo;
              </p>
              <p className="text-[#0a1628] font-black text-lg" style={{ fontFamily: 'Montserrat,sans-serif' }}>&mdash; Dr. Gary Kompothecras</p>
            </div>
            <div className="flex flex-col justify-center space-y-8">
              <div className="flex items-start gap-4">
                <span className="text-4xl md:text-5xl font-black text-[#0a1628] leading-none" style={{ fontFamily: 'Montserrat,sans-serif' }}>1 in 36</span>
                <p className="text-base text-[#475569] pt-2" style={{ fontFamily: 'Roboto,sans-serif' }}>children in the US diagnosed with autism</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-4xl md:text-5xl font-black text-[#0a1628] leading-none" style={{ fontFamily: 'Montserrat,sans-serif' }}>$5.4B+</span>
                <p className="text-base text-[#475569] pt-2" style={{ fontFamily: 'Roboto,sans-serif' }}>paid to vaccine-injured families since 1988</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl font-black leading-none" style={{ color: '#ea580c', fontFamily: 'Montserrat,sans-serif', whiteSpace: 'nowrap' }}>Act Now</span>
                <p className="text-base text-[#475569] pt-2" style={{ fontFamily: 'Roboto,sans-serif' }}>Strict filing deadlines apply — don&rsquo;t wait</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — HOW VICP WORKS ═══ */}
      <section className="bg-[#F8F9FA] py-16 md:py-24 border-t border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <p className="text-sm font-bold tracking-widest uppercase text-[#475569] text-center mb-3" style={{ fontFamily: 'Montserrat,sans-serif' }}>How It Works</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0a1628] text-center mb-16" style={{ fontFamily: 'Montserrat,sans-serif' }}>The Path From Injury to Compensation</h2>
          <div className="relative">
            <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-[#E2E8F0]" style={{ zIndex: 0 }} />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 relative" style={{ zIndex: 1 }}>
              {[
                { num: '01', title: 'Vaccination', desc: 'Child receives a covered vaccine', color: '#0a1628' },
                { num: '02', title: 'Symptoms Appear', desc: 'First signs of regression, fever, or developmental changes', color: '#0a1628' },
                { num: '03', title: 'File Claim', desc: 'Must file within 3 years of first symptom — NOT diagnosis date', color: '#ea580c' },
                { num: '04', title: 'HHS Review', desc: 'Government medical review of your petition at no cost', color: '#0a1628' },
                { num: '05', title: 'Compensation', desc: 'Award paid. Attorney fees covered by the program.', color: '#0a1628' },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5 border-4 border-white shadow-md" style={{ background: step.color }}>
                    <span className="text-white font-black text-base" style={{ fontFamily: 'Montserrat,sans-serif' }}>{step.num}</span>
                  </div>
                  <h3 className="font-bold text-xl text-[#0a1628] mb-2" style={{ fontFamily: 'Montserrat,sans-serif' }}>{step.title}</h3>
                  <p className="text-base text-[#475569] leading-relaxed" style={{ fontFamily: 'Roboto,sans-serif', color: step.num === '03' ? '#ea580c' : '#475569' }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 rounded-xl p-6 text-center max-w-3xl mx-auto" style={{ background: '#ea580c' }}>
            <p className="text-lg font-black text-white" style={{ fontFamily: 'Montserrat,sans-serif' }}>
              ⚠ The 3-year clock starts at first symptom — not diagnosis. Many families lose their window waiting for an official diagnosis.
            </p>
          </div>
          <div className="text-center mt-6">
            <Link href="/deadline-calculator" className="inline-block font-black text-sm uppercase tracking-widest px-8 py-4 rounded-lg transition hover:opacity-90" style={{ background: '#ea580c', color: '#ffffff', fontFamily: 'Montserrat,sans-serif' }}>
              Check My Deadline →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 — IN THE FIGHT PREVIEW ═══ */}
      <section className="bg-[#0a1628] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <p className="text-sm font-bold tracking-widest uppercase text-[#d4a843] text-center mb-3" style={{ fontFamily: 'Montserrat,sans-serif' }}>In The Fight</p>
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-16" style={{ fontFamily: 'Montserrat,sans-serif' }}>
            Before the Foundation. Before the Law Firm. They Were Already Fighting.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: '/nino-red-carpet-hd.webp',
                badge: 'Advisory Board',
                headline: "He Beat Mike Tyson's Record. Now He's Fighting for Your Child.",
                desc: "Undefeated boxer David 'Nino' Rodriguez survived everything the world threw at him. Now he\u2019s standing with autism families who deserve federal compensation and won\u2019t stop until they get it.",
                link: '/in-the-fight/david-nino-rodriguez-never-give-up',
              },
              {
                img: '/gary-beth-family.webp',
                badge: "Founders' Story",
                headline: 'Before They Built This Foundation, They Filed Their Own Children in Vaccine Court.',
                desc: "Gary and Beth Kompothecras didn\u2019t just start the Autism Justice Foundation \u2014 they lived it. Two of their six children were diagnosed with severe autism. Their fight became yours.",
                link: '/in-the-fight/bronson-sarah-alice-vicp-petitioners',
              },
              {
                img: '/Alex-Kompothecras.webp',
                badge: 'Legal Victory',
                headline: 'He Took the Fight to the Florida House. It Passed Unanimously.',
                desc: "Alpha Law Group\u2019s managing attorney Alex Kompothecras testified before the Florida House on HB 365, calling for stronger protections for vaccine-injured families. The bill passed without a single dissenting vote.",
                link: '/in-the-fight/alex-kompothecras-hb365-florida-house-testimony',
              },
            ].map((card, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-[#112240] flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img src={card.img} alt={card.headline} className="w-full h-full object-cover object-top" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-sm font-bold px-4 py-1.5 rounded-full" style={{ background: '#d4a843', color: '#0a1628', fontFamily: 'Montserrat,sans-serif' }}>{card.badge}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-xl text-white mb-3" style={{ fontFamily: 'Montserrat,sans-serif' }}>{card.headline}</h3>
                  <p className="text-base text-[#94a3b8] leading-relaxed mb-4 flex-1" style={{ fontFamily: 'Roboto,sans-serif' }}>{card.desc}</p>
                  <Link href={card.link} className="text-[#d4a843] font-bold text-base hover:underline" style={{ fontFamily: 'Montserrat,sans-serif' }}>Read Their Story →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — OUR TEAM ═══ */}
      <section className="bg-white py-16 md:py-24 border-t border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <p className="text-sm font-bold tracking-widest uppercase text-[#475569] text-center mb-3" style={{ fontFamily: 'Montserrat,sans-serif' }}>Your Legal Team</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0a1628] text-center mb-16" style={{ fontFamily: 'Montserrat,sans-serif' }}>The Attorneys Fighting for Your Family</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                img: '/Alex-Kompothecras.webp',
                name: 'Alex Kompothecras',
                title: 'Managing Attorney, Alpha Law Group',
                bio: 'Alex has dedicated his legal career to representing vaccine-injured families in federal compensation proceedings. As an Honorary Board Member of the Autism Society of Florida and son of Dr. Gary Kompothecras, this fight is both professional and deeply personal. He testified before the Florida House on HB 365, which passed unanimously.',
              },
              {
                img: '/Chase-Engelbrecht.webp',
                name: 'Chase Engelbrecht',
                title: 'Attorney, Alpha Law Group',
                bio: 'Chase works alongside Alex on VICP petitions, guiding families through every phase of the federal claims process. His approachable style and thorough preparation have made him a trusted advocate for autism families across Florida.',
              },
            ].map((person, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 bg-white rounded-2xl p-6 border border-[#E2E8F0]">
                <div className="w-full md:w-48 flex-shrink-0 mb-4 md:mb-0">
                  <img src={person.img} alt={person.name} className="w-full md:w-48 h-64 object-cover object-top rounded-xl" />
                </div>
                <div>
                  <h3 className="font-black text-2xl text-[#0a1628] mb-1" style={{ fontFamily: 'Montserrat,sans-serif' }}>{person.name}</h3>
                  <p className="text-base font-semibold text-[#d4a843] mb-3" style={{ fontFamily: 'Roboto,sans-serif' }}>{person.title}</p>
                  <p className="text-base text-[#475569] leading-relaxed" style={{ fontFamily: 'Roboto,sans-serif' }}>{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7 — TESTIMONIALS ═══ */}
      <section className="bg-[#0a1628] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <p className="text-sm font-bold tracking-widest uppercase text-[#d4a843] text-center mb-3" style={{ fontFamily: 'Montserrat,sans-serif' }}>Voices From Families We Have Helped</p>
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-16" style={{ fontFamily: 'Montserrat,sans-serif' }}>Real Families. Real Outcomes.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl p-8 flex flex-col relative" style={{ background: '#112240', border: '1px solid rgba(255,255,255,0.08)' }}>
                {t.badge && (
                  <div className="absolute -top-3 left-6">
                    <span className="text-sm font-bold px-3 py-1 rounded-full text-white" style={{ background: '#16a34a', fontFamily: 'Montserrat,sans-serif' }}>{t.badge}</span>
                  </div>
                )}
                <div className="text-5xl leading-none font-serif text-[#d4a843] mb-4">&ldquo;</div>
                <p className="text-lg text-white leading-relaxed italic flex-1 mb-6" style={{ fontFamily: 'Roboto,sans-serif' }}>{t.quote}</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-[#d4a843] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#0a1628] font-black text-sm" style={{ fontFamily: 'Montserrat,sans-serif' }}>{t.initial}</span>
                  </div>
                  <div>
                    <p className="font-black text-base text-white" style={{ fontFamily: 'Montserrat,sans-serif' }}>{t.name}</p>
                    <p className="text-sm text-[#94a3b8]" style={{ fontFamily: 'Roboto,sans-serif' }}>{t.detail}</p>
                    <p className="text-[#d4a843] text-lg mt-1">★★★★★</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#475569] text-center mt-10" style={{ fontFamily: 'Roboto,sans-serif' }}>
            * Names and identifying details changed to protect client privacy.
          </p>
        </div>
      </section>

      {/* ═══ SECTION 8 — ELIGIBILITY CAPTURE ═══ */}
      <EligibilityCapture />

      {/* ═══ SECTION 9 — VICP BY THE NUMBERS ═══ */}
      <section className="bg-[#F8F9FA] py-16 md:py-24 border-t border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <p className="text-sm font-bold tracking-widest uppercase text-[#475569] text-center mb-3" style={{ fontFamily: 'Montserrat,sans-serif' }}>VICP By The Numbers</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0a1628] text-center mb-2" style={{ fontFamily: 'Montserrat,sans-serif' }}>The Fund Is Solvent. Your Deadline Isn&rsquo;t.</h2>
          <p className="text-sm text-[#475569] text-center mb-12" style={{ fontFamily: 'Roboto,sans-serif' }}>Source: HRSA/HHS · Updated March 2026</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: '$5.4B+', label: 'Paid to injured families', sub: 'since 1988' },
              { num: '28,673', label: 'Petitions filed', sub: 'since program began' },
              { num: '12,019', label: 'Families compensated', sub: '48% success rate' },
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-[#E2E8F0] rounded-xl p-8 text-center">
                <p className="text-5xl font-black text-[#0a1628] mb-2" style={{ fontFamily: 'Montserrat,sans-serif' }}>{stat.num}</p>
                <p className="text-base text-[#475569]" style={{ fontFamily: 'Roboto,sans-serif' }}>{stat.label}</p>
                <p className="text-sm text-[#94a3b8] mt-1" style={{ fontFamily: 'Roboto,sans-serif' }}>{stat.sub}</p>
              </div>
            ))}
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 text-center">
              <p className="text-5xl font-black text-[#0a1628] mb-2" style={{ fontFamily: 'Montserrat,sans-serif' }}>3</p>
              <p className="text-xl font-bold text-[#0a1628]" style={{ fontFamily: 'Montserrat,sans-serif' }}>Years</p>
              <p className="text-base text-[#475569]" style={{ fontFamily: 'Roboto,sans-serif' }}>Your filing window</p>
              <p className="text-sm text-[#475569] mt-1" style={{ fontFamily: 'Roboto,sans-serif' }}>from first symptom</p>
            </div>
          </div>
          <div className="mt-10 rounded-xl p-6 text-center max-w-3xl mx-auto" style={{ background: '#ea580c' }}>
            <p className="text-lg font-black text-white" style={{ fontFamily: 'Montserrat,sans-serif' }}>
              ⚠ The 3-year clock starts at first symptom — not diagnosis date. Every day you wait is a day closer to losing your rights permanently.
            </p>
          </div>
          <div className="text-center mt-6">
            <Link href="/deadline-calculator" className="inline-block font-black text-sm uppercase tracking-widest px-8 py-4 rounded-lg transition hover:opacity-90" style={{ background: '#ea580c', color: '#ffffff', fontFamily: 'Montserrat,sans-serif' }}>
              → Check Your Deadline Now
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 10 — FAQ ACCORDION ═══ */}
      <section className="bg-white py-16 md:py-24 border-t border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-16">
          <p className="text-sm font-bold tracking-widest uppercase text-[#475569] text-center mb-3" style={{ fontFamily: 'Montserrat,sans-serif' }}>Frequently Asked Questions</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0a1628] text-center mb-12" style={{ fontFamily: 'Montserrat,sans-serif' }}>Everything Families Ask Us</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-[#E2E8F0] rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F8F9FA] transition"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-bold text-lg text-[#0a1628] pr-4" style={{ fontFamily: 'Montserrat,sans-serif' }}>{faq.q}</span>
                  <span className="text-2xl font-black text-[#d4a843] flex-shrink-0" style={{ fontFamily: 'Montserrat,sans-serif' }}>
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-base text-[#475569] leading-relaxed" style={{ fontFamily: 'Roboto,sans-serif' }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 11 — REFERRAL ═══ */}
      <section className="bg-[#F8F9FA] py-16 md:py-24 border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <p className="text-sm font-bold tracking-widest uppercase text-[#475569] mb-3" style={{ fontFamily: 'Montserrat,sans-serif' }}>Spread the Word</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0a1628] mb-6" style={{ fontFamily: 'Montserrat,sans-serif' }}>Know a Family With an Autistic Child?</h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: 'Roboto,sans-serif' }}>
            Most families don&rsquo;t know the federal government has already paid out <strong className="text-[#111827]">$5.4 billion</strong> to vaccine-injured children — and thousands of autism families may qualify right now.
            If you know a parent raising an autistic child, sharing this page could be the most important thing you do for them this year. There is no cost, no obligation, and no risk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/intake/phase-1" className="font-black px-8 py-4 rounded-lg hover:opacity-90 transition text-sm tracking-widest uppercase" style={{ background: '#d4a843', color: '#0a1628', fontFamily: 'Montserrat,sans-serif' }}>
              Start My Family&rsquo;s Claim →
            </a>
            <a href="/refer" className="font-black px-8 py-4 rounded-lg hover:opacity-90 transition text-sm tracking-widest uppercase" style={{ background: '#16a34a', color: '#ffffff', fontFamily: 'Montserrat,sans-serif' }}>
              Share With a Family →
            </a>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 12 — FINAL CTA ═══ */}
      <section className="bg-[#0a1628] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Montserrat,sans-serif' }}>Ready to Be Heard?</h2>
          <p className="text-xl text-[#94a3b8] mb-6" style={{ fontFamily: 'Roboto,sans-serif' }}>Begin your free intake today. No cost, no obligation, no risk.</p>
          <p className="text-3xl font-black text-white mb-8" style={{ fontFamily: 'Montserrat,sans-serif' }}>
            <a href="tel:9413041500" className="hover:text-[#d4a843] transition">(941) 304-1500</a>
          </p>
          <Link href="/intake/phase-1" className="inline-block font-black text-sm tracking-widest uppercase px-10 py-5 rounded-lg hover:opacity-90 transition" style={{ background: '#d4a843', color: '#0a1628', fontFamily: 'Montserrat,sans-serif' }}>
            Begin Your Free Intake →
          </Link>
          <p className="text-sm text-[#475569] mt-6" style={{ fontFamily: 'Roboto,sans-serif' }}>Encrypted · HIPAA Compliant · Attorney-Client Privilege</p>
        </div>
      </section>
    </>
  )
}
