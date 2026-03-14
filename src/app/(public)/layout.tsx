'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'How VICP Works', href: '/how-vicp-works' },
  { label: 'Resources', href: '/resources' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Deadline Calculator', href: '/deadline-calculator' },
  { label: 'Contact', href: '/contact' },
]

const aboutLinks = [
  { label: 'Our Story', href: '/our-story' },
  { label: 'Our Team', href: '/our-team' },
  { label: 'In The Fight', href: '/in-the-fight' },
]

const allLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Our Team', href: '/our-team' },
  { label: 'In The Fight', href: '/in-the-fight' },
  { label: 'How VICP Works', href: '/how-vicp-works' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Deadline Calculator', href: '/deadline-calculator' },
  { label: 'Check Your Eligibility →', href: '/intake/phase-1', isCta: true },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
]

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Our Team', href: '/our-team' },
  { label: 'In The Fight', href: '/in-the-fight' },
  { label: 'How VICP Works', href: '/how-vicp-works' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Deadline Calculator', href: '/deadline-calculator' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
  { label: 'Start My Claim', href: '/intake/phase-1' },
]

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div id="top">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]" aria-label="Main navigation">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo — shield + text */}
            <a href="/" className="flex items-center gap-2 no-underline flex-shrink-0">
              <img
                src="/alg-shield.png"
                alt="Alpha Law Group"
                className="h-10 w-10 object-contain"
              />
              <div>
                <div style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '15px',
                  fontWeight: '700',
                  letterSpacing: '0.1em',
                  color: 'white',
                  textTransform: 'uppercase' as const,
                  whiteSpace: 'nowrap' as const,
                  lineHeight: 1.2,
                }}>
                  Alpha Law Group
                </div>
                <div style={{
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '8px',
                  fontWeight: '600',
                  letterSpacing: '0.3em',
                  color: '#d4a843',
                  textTransform: 'uppercase' as const,
                  whiteSpace: 'nowrap' as const,
                }}>
                  Vaccine · Autism Justice
                </div>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {/* About dropdown */}
              <div className="relative group">
                <button className="text-white hover:text-[#d4a843] transition-colors px-2 py-1.5 text-sm font-medium flex items-center gap-1" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.01em' }}>
                  About
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute left-0 top-full mt-0 hidden group-hover:block bg-[#0a1628] border border-[#d4a843]/20 rounded shadow-lg z-50 min-w-[160px]">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-white hover:text-[#d4a843] hover:bg-[#0a1628]/80 transition"
                      style={{ fontFamily: 'Roboto, sans-serif', fontSize: '13px', fontWeight: 500 }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white hover:text-[#d4a843] transition-colors px-1.5 py-1.5 text-sm font-medium"
                  style={{ fontFamily: 'Roboto, sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.01em' }}
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="/intake/phase-1"
                className="inline-block px-5 py-2 text-xs font-black uppercase tracking-widest rounded-sm transition-opacity hover:opacity-90 ml-2"
                style={{ background: '#d4a843', color: '#0a1628', fontFamily: 'Montserrat, sans-serif' }}
              >
                Check Your Eligibility →
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-white text-2xl p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0a1628] border-t border-[#d4a843]/20 z-50 flex flex-col shadow-lg">
            <div className="px-4 py-3 border-b border-[#d4a843]/20">
              <a href="/" className="flex items-center gap-2.5 no-underline">
                <img
                  src="/alg-shield.png"
                  alt="Alpha Law Group"
                  className="h-9 w-9 object-contain"
                />
                <div className="leading-tight">
                  <span className="text-white font-bold text-sm tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>ALPHA LAW GROUP</span>
                </div>
              </a>
            </div>
            {allLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={
                  link.isCta
                    ? 'block w-full text-center px-6 py-4 font-black text-sm uppercase tracking-widest border-b border-[#d4a843]/20'
                    : 'block px-6 py-4 text-white text-base font-medium border-b border-[#d4a843]/20 hover:text-[#d4a843]'
                }
                style={link.isCta ? { background: '#d4a843', color: '#0a1628', fontFamily: 'Montserrat, sans-serif' } : { fontFamily: 'Roboto, sans-serif' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Content offset for fixed nav */}
      <div className="pt-14">
        {children}

        {/* Footer */}
        <footer className="bg-[#0a1628] pt-16 pb-8">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
              <div className="md:col-span-2">
                <p className="text-xl font-black text-white mb-1" style={{fontFamily:'Montserrat, sans-serif'}}>Alpha Law Group</p>
                <p className="text-sm tracking-widest uppercase text-[#d4a843] mb-4" style={{fontFamily:'Montserrat, sans-serif'}}>Vaccine · Autism Justice</p>
                <p className="text-base text-[#94a3b8] leading-relaxed mb-4" style={{fontFamily:'Roboto, sans-serif'}}>Representing families in VICP claims statewide. No fees unless we win. Attorney fees paid by the program even in losing cases.</p>
                <p className="text-lg font-black text-white mb-1" style={{fontFamily:'Montserrat, sans-serif'}}>(941) 304-1500</p>
                <p className="text-sm text-[#94a3b8]" style={{fontFamily:'Roboto, sans-serif'}}>Sarasota, Florida · Statewide Representation</p>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-[#475569] mb-4" style={{fontFamily:'Montserrat, sans-serif'}}>Quick Links</p>
                <div className="space-y-2">
                  {footerLinks.map((link) => (
                    <Link key={link.label} href={link.href} className="block text-base text-white hover:text-[#d4a843] transition" style={{fontFamily:'Roboto, sans-serif'}}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-[#475569] mb-4" style={{fontFamily:'Montserrat, sans-serif'}}>Coalition Partners</p>
                <div className="space-y-2">
                  {["Children's Health Defense", "The HighWire with Del Bigtree", "McCullough Foundation", "Autism Justice Foundation"].map(p => (
                    <p key={p} className="text-base text-white" style={{fontFamily:'Roboto, sans-serif'}}>{p}</p>
                  ))}
                </div>
                <div className="mt-6">
                  <p className="text-sm font-bold uppercase tracking-widest text-[#475569] mb-4" style={{fontFamily:'Montserrat, sans-serif'}}>Contact</p>
                  <p className="text-base text-white" style={{fontFamily:'Roboto, sans-serif'}}>(941) 304-1500</p>
                  <p className="text-sm text-[#94a3b8]" style={{fontFamily:'Roboto, sans-serif'}}>Sarasota, Florida</p>
                  <p className="text-sm text-[#94a3b8]" style={{fontFamily:'Roboto, sans-serif'}}>Florida Statewide Representation</p>
                  <a href="/admin" className="block text-sm text-[#475569] hover:text-white transition mt-2" style={{fontFamily:'Roboto, sans-serif'}}>Staff Login</a>
                </div>
              </div>
            </div>
            <div className="border-t border-white/5 pt-6">
              <p className="text-sm text-[#475569] leading-relaxed mb-3" style={{fontFamily:'Roboto, sans-serif'}}>
                ATTORNEY ADVERTISING: Completion of this intake form does not create an attorney-client relationship. No legal advice is provided herein. Alpha Law Group represents clients on a contingency fee basis — no fees charged unless a recovery is obtained. VICP NOTICE: Strict filing deadlines apply. Contact an attorney immediately to protect your rights. PRIVACY: All information submitted is confidential and subject to attorney-client privilege.
              </p>
              <p className="text-sm text-[#94a3b8]" style={{fontFamily:'Roboto, sans-serif'}}>
                &copy; 2026 Alpha Law Group, PLLC. All Rights Reserved. | Powered by LegalCasePortal&trade; &mdash; A Noetic Dharma Group Technology
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
