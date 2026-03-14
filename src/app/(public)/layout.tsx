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
        <footer className="bg-[#060e1a] py-8 px-4">
          {/* Footer Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs mb-6">
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-white hover:text-[#d4a843] transition" style={{fontFamily:'Roboto, sans-serif'}}>
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="text-sm text-white text-center" style={{fontFamily:'Roboto, sans-serif'}}>
            Alpha Law Group, PLLC | Justice for Autism Initiative | Sarasota, Florida | <span className="font-bold">(941) 304-1500</span>
          </p>
          <p className="text-xs text-[#94a3b8] text-center max-w-4xl mx-auto mt-2" style={{fontFamily:'Roboto, sans-serif'}}>
            ATTORNEY ADVERTISING: Completion of this intake form does not create an attorney-client relationship. No legal advice is provided herein. Alpha Law Group represents clients on a contingency fee basis — no fees charged unless a recovery is obtained. VICP NOTICE: Strict filing deadlines apply. Contact an attorney immediately to protect your rights. PRIVACY: All information submitted is confidential and subject to attorney-client privilege.
          </p>
          <p className="text-xs text-[#94a3b8] text-center mt-2" style={{fontFamily:'Roboto, sans-serif'}}>
            &copy; 2026 Alpha Law Group, PLLC. All Rights Reserved. | Powered by LegalCasePortal&trade; &mdash; A Noetic Dharma Group Technology
          </p>
          <div className="border-t border-[#d4a843]/20 mt-8 pt-4 text-center">
            <a href="/admin" className="text-xs text-[#d4a843]/60 hover:text-[#d4a843] transition" style={{fontFamily:'Roboto, sans-serif'}}>Staff Login</a>
          </div>
        </footer>
      </div>
    </div>
  )
}
