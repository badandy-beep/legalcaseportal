import TestimonialBlock from '@/components/TestimonialBlock'
import EligibilityCapture from '@/components/EligibilityCapture'

export default function StyleTestPage() {
  return (
    <main>

      {/* Typography Test — Current vs Proposed */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#475569] mb-8" style={{fontFamily:'Montserrat,sans-serif'}}>Typography Comparison</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border border-[#E2E8F0] rounded-xl p-8">
              <p className="text-xs uppercase tracking-widest text-[#475569] mb-4" style={{fontFamily:'Roboto,sans-serif'}}>Current — System/Tailwind Default</p>
              <h1 className="text-4xl font-black text-[#0a1628] mb-3">Your Child May Be Entitled to Federal Compensation.</h1>
              <p className="text-base text-[#475569] leading-relaxed">Congress created the VICP to compensate families of vaccine-injured children. Thousands of autism families qualify — and most never know it exists.</p>
            </div>
            <div className="border border-[#d4a843] rounded-xl p-8">
              <p className="text-xs uppercase tracking-widest text-[#475569] mb-4" style={{fontFamily:'Roboto,sans-serif'}}>Proposed — Roboto + Montserrat</p>
              <h1 className="text-4xl font-black text-[#0a1628] mb-3" style={{fontFamily:'Montserrat, sans-serif'}}>Your Child May Be Entitled to Federal Compensation.</h1>
              <p className="text-base text-[#475569] leading-relaxed" style={{fontFamily:'Roboto, sans-serif', lineHeight:'1.7'}}>Congress created the VICP to compensate families of vaccine-injured children. Thousands of autism families qualify — and most never know it exists.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette Test */}
      <section className="bg-[#F8F9FA] py-16 border-t border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#475569] mb-8" style={{fontFamily:'Montserrat,sans-serif'}}>Color Palette</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl overflow-hidden border border-[#E2E8F0]">
              <div className="h-20" style={{background:'#0a1628'}} />
              <div className="p-3 bg-white">
                <p className="font-bold text-xs text-[#0a1628]" style={{fontFamily:'Montserrat,sans-serif'}}>Primary Navy</p>
                <p className="text-xs text-[#475569]" style={{fontFamily:'Roboto,sans-serif'}}>#0a1628</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-[#E2E8F0]">
              <div className="h-20" style={{background:'#d4a843'}} />
              <div className="p-3 bg-white">
                <p className="font-bold text-xs text-[#0a1628]" style={{fontFamily:'Montserrat,sans-serif'}}>Gold Accent</p>
                <p className="text-xs text-[#475569]" style={{fontFamily:'Roboto,sans-serif'}}>#d4a843</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-[#E2E8F0]">
              <div className="h-20" style={{background:'#F8F9FA'}} />
              <div className="p-3 bg-white">
                <p className="font-bold text-xs text-[#0a1628]" style={{fontFamily:'Montserrat,sans-serif'}}>Section Gray</p>
                <p className="text-xs text-[#475569]" style={{fontFamily:'Roboto,sans-serif'}}>#F8F9FA</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-[#E2E8F0]">
              <div className="h-20" style={{background:'#475569'}} />
              <div className="p-3 bg-white">
                <p className="font-bold text-xs text-[#0a1628]" style={{fontFamily:'Montserrat,sans-serif'}}>Body Text</p>
                <p className="text-xs text-[#475569]" style={{fontFamily:'Roboto,sans-serif'}}>#475569</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VICP Process Timeline */}
      <section className="bg-white py-16 border-t border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#475569] text-center mb-3" style={{fontFamily:'Montserrat,sans-serif'}}>How It Works</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] text-center mb-12" style={{fontFamily:'Montserrat,sans-serif'}}>The Path From Injury to Compensation</h2>
          <div className="relative">
            {/* Desktop timeline line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-[#E2E8F0]" style={{zIndex:0}} />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative" style={{zIndex:1}}>
              {[
                { num: '01', title: 'Vaccination', desc: 'Child receives covered vaccine', color: '#0a1628' },
                { num: '02', title: 'Symptoms Appear', desc: 'First signs of regression or injury', color: '#0a1628' },
                { num: '03', title: 'File Claim', desc: 'Must file within 3 years of first symptom', color: '#d4a843' },
                { num: '04', title: 'HHS Review', desc: 'Government medical review of your petition', color: '#0a1628' },
                { num: '05', title: 'Compensation', desc: 'Award paid — attorney fees covered by program', color: '#0a1628' },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-md" style={{background: step.color}}>
                    <span className="text-white font-black text-sm" style={{fontFamily:'Montserrat,sans-serif'}}>{step.num}</span>
                  </div>
                  <h3 className="font-bold text-[#0a1628] text-sm mb-2" style={{fontFamily:'Montserrat,sans-serif'}}>{step.title}</h3>
                  <p className="text-[#475569] text-xs leading-relaxed" style={{fontFamily:'Roboto,sans-serif'}}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 border rounded-xl p-5 text-center max-w-2xl mx-auto" style={{background:'#ea580c', borderColor:'#ea580c'}}>
            <p className="text-white text-sm font-bold" style={{fontFamily:'Montserrat,sans-serif'}}>⚠️ The 3-year clock starts at first symptom — not diagnosis date.</p>
            <p className="text-white/80 text-xs mt-1" style={{fontFamily:'Roboto,sans-serif'}}>Many families miss their window waiting for an official diagnosis. Don't wait.</p>
          </div>
        </div>
      </section>

      {/* Testimonial Block */}
      <TestimonialBlock />

      {/* Eligibility Capture Form */}
      <EligibilityCapture />

      {/* Footer Enhancement Preview */}
      <footer className="bg-[#0a1628] border-t border-white/10 pt-12 pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-2">
              <p className="text-white font-black text-lg mb-2" style={{fontFamily:'Montserrat,sans-serif'}}>Alpha Law Group</p>
              <p className="text-xs uppercase tracking-widest text-[#d4a843] mb-4" style={{fontFamily:'Montserrat,sans-serif'}}>Vaccine · Autism Justice</p>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-4" style={{fontFamily:'Roboto,sans-serif'}}>Representing families in VICP claims statewide. No fees unless we win. Attorney fees paid by the program even in losing cases.</p>
              <p className="text-white font-bold text-sm" style={{fontFamily:'Roboto,sans-serif'}}>(941) 304-1500</p>
              <p className="text-[#94a3b8] text-xs" style={{fontFamily:'Roboto,sans-serif'}}>Sarasota, Florida · Statewide Representation</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#475569] mb-4" style={{fontFamily:'Montserrat,sans-serif'}}>Quick Links</p>
              <div className="space-y-2">
                {['How VICP Works','Our Team','FAQ','Deadline Calculator','Start My Claim'].map(link => (
                  <p key={link} className="text-white text-sm hover:text-[#d4a843] cursor-pointer transition-colors" style={{fontFamily:'Roboto,sans-serif'}}>{link}</p>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#475569] mb-4" style={{fontFamily:'Montserrat,sans-serif'}}>Coalition Partners</p>
              <div className="space-y-2">
                {["Children's Health Defense","The HighWire","McCullough Foundation","Autism Justice Foundation"].map(p => (
                  <p key={p} className="text-white text-sm" style={{fontFamily:'Roboto,sans-serif'}}>{p}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6">
            <p className="text-[#94a3b8] text-xs leading-relaxed mb-3" style={{fontFamily:'Roboto,sans-serif'}}>ATTORNEY ADVERTISING: Completion of this intake form does not create an attorney-client relationship. No legal advice is provided herein. Alpha Law Group represents clients on a contingency fee basis — no fees charged unless a recovery is obtained. VICP NOTICE: Strict filing deadlines apply. Contact an attorney immediately to protect your rights.</p>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <p className="text-[#94a3b8] text-xs" style={{fontFamily:'Roboto,sans-serif'}}>© 2026 Alpha Law Group, PLLC. All Rights Reserved. | Powered by LegalCasePortal™ — A Noetic Dharma Group Technology</p>
              <a href="/admin" className="text-[#475569] text-xs hover:text-white transition-colors" style={{fontFamily:'Roboto,sans-serif'}}>Staff Login</a>
            </div>
          </div>
        </div>
      </footer>

    </main>
  )
}
