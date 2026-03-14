'use client'

export default function TestimonialBlock() {
  const testimonials = [
    {
      initial: 'M',
      quote: 'I had no idea this program even existed. Within three minutes of filling out the form, someone from Alpha Law Group called me back — no pressure, no confusing legal language, just real answers. We are now in the process of filing our claim. I only wish I had found this sooner.',
      name: 'Mary H.',
      detail: 'Mother of vaccine-injured child · Age 38 · Florida',
    },
    {
      initial: 'Z',
      quote: 'Our son Jacob is seven now. We missed the filing window for him — and that is something we will live with forever. But when we learned our daughter Emily, who is four and requires around-the-clock care, still had time — we called Alpha Law Group the same day. My wife Leslie had to leave her career to care for Emily full time. The compensation we received has been a lifeline. It has not fixed what happened to our children, but it has kept our family standing.',
      name: 'Michael & Leslie Z.',
      detail: 'Parents of two vaccine-injured children · Tampa, Florida',
      badge: 'Filed in time for youngest child',
      badgeColor: '#16a34a',
    },
    {
      initial: 'M',
      quote: 'What struck us immediately was that this was not just a law firm — it was a family who had lived this. Dr. Gary and Alex did not just take our case, they made us feel like we were part of something bigger. Choosing Alpha Law Group was the easiest decision we made through the hardest time of our lives. For any family still on the fence — these are your people.',
      name: 'Michael & Allison M.',
      detail: 'Parents of a vaccine-injured child · Sarasota, Florida',
    },
  ]

  return (
    <section className="bg-[#F8F9FA] border-t border-b border-[#E2E8F0] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold tracking-widest uppercase text-[#475569] text-center mb-2" style={{fontFamily:'Montserrat,sans-serif'}}>
          Voices From Families We Have Helped
        </p>
        <p className="text-center text-[#475569] text-base mb-12" style={{fontFamily:'Roboto,sans-serif'}}>
          Real families. Real outcomes. Names changed to protect privacy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border border-[#E2E8F0] rounded-2xl p-8 flex flex-col shadow-sm relative">
              {t.badge && (
                <div className="absolute -top-3 left-6">
                  <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{background: t.badgeColor, fontFamily:'Montserrat,sans-serif'}}>
                    {t.badge}
                  </span>
                </div>
              )}
              <div className="text-5xl leading-none font-serif text-[#d4a843] mb-4">"</div>
              <p className="text-[#1e293b] text-base leading-relaxed italic flex-1 mb-6" style={{fontFamily:'Georgia,serif'}}>
                {t.quote}
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-[#0a1628] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#d4a843] font-bold text-sm" style={{fontFamily:'Montserrat,sans-serif'}}>{t.initial}</span>
                </div>
                <div>
                  <p className="font-bold text-[#0a1628] text-base" style={{fontFamily:'Montserrat,sans-serif'}}>{t.name}</p>
                  <p className="text-[#475569] text-sm" style={{fontFamily:'Roboto,sans-serif'}}>{t.detail}</p>
                  <p className="text-[#d4a843] text-xs mt-1">★★★★★</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[#94a3b8] text-sm text-center mt-8" style={{fontFamily:'Roboto,sans-serif'}}>
          * Names and identifying details changed to protect client privacy. Results reflect individual experiences and are not a guarantee of outcome.
        </p>
      </div>
    </section>
  )
}
