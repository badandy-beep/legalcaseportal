'use client'

export default function TestimonialBlock() {
  return (
    <section className="bg-[#F8F9FA] border-t border-b border-[#E2E8F0] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold tracking-widest uppercase text-[#475569] text-center mb-10" style={{fontFamily:'Montserrat,sans-serif'}}>
          Voices From Families We've Helped
        </p>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 md:p-12 shadow-sm relative">
            <div className="absolute -top-4 left-10 text-6xl text-[#d4a843] leading-none font-serif">"</div>
            <blockquote className="text-[#1e293b] text-lg md:text-xl leading-relaxed italic mb-8" style={{fontFamily:'Roboto,sans-serif'}}>
              I had no idea this program even existed. My son was diagnosed at two and a half, and for years I thought we were completely on our own. A friend sent me this link and within three minutes of filling out the form, someone from Alpha Law Group called me back. They walked me through everything — no pressure, no confusing legal language, just real answers. We are now in the process of filing our claim. I only wish I had found this sooner.
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0a1628] flex items-center justify-center flex-shrink-0">
                <span className="text-[#d4a843] font-bold text-lg" style={{fontFamily:'Montserrat,sans-serif'}}>M</span>
              </div>
              <div>
                <p className="font-bold text-[#0a1628] text-sm" style={{fontFamily:'Montserrat,sans-serif'}}>Mary H.</p>
                <p className="text-[#475569] text-xs" style={{fontFamily:'Roboto,sans-serif'}}>Mother of a vaccine-injured child · Age 38 · Florida</p>
                <p className="text-[#d4a843] text-xs mt-1">★★★★★</p>
              </div>
            </div>
            <p className="text-[#94a3b8] text-xs mt-6 italic" style={{fontFamily:'Roboto,sans-serif'}}>* Name and identifying details changed to protect client privacy. Quote reflects a composite of client experiences.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
