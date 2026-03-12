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
]

const allLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Our Team', href: '/our-team' },
  { label: 'How VICP Works', href: '/how-vicp-works' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Deadline Calculator', href: '/deadline-calculator' },
  { label: 'Start My Claim', href: '/intake/phase-1', isCta: true },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
]

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Our Team', href: '/our-team' },
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E2E8F0]" aria-label="Main navigation">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center no-underline flex-shrink-0">
              <img
                src="/alg-logo.png"
                alt="Alpha Law Group — Justice for Autism"
                className="h-14 md:h-16 w-auto object-contain object-left"
                style={{ maxWidth: '320px' }}
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {/* About dropdown */}
              <div className="relative group">
                <button className="text-[#111827] hover:text-[#1E40AF] transition px-2 py-1.5 text-sm font-medium flex items-center gap-1" style={{ fontFamily: 'system-ui', fontSize: '14px', fontWeight: 500, letterSpacing: '0.01em' }}>
                  About
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white border border-[#E2E8F0] rounded shadow-lg z-50 min-w-[160px]">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-[#111827] hover:text-[#1E40AF] hover:bg-[#EFF6FF] transition"
                      style={{ fontFamily: 'system-ui', fontSize: '14px', fontWeight: 500 }}
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
                  className="text-[#111827] hover:text-[#1E40AF] transition px-2 py-1.5 text-sm font-medium"
                  style={{ fontFamily: 'system-ui', fontSize: '14px', fontWeight: 500, letterSpacing: '0.01em' }}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/intake/phase-1"
                className="bg-[#1E40AF] text-white px-4 py-2 rounded font-semibold text-sm hover:bg-[#1E3A8A] transition ml-2"
              >
                Start My Claim
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-[#111827] text-2xl p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-[#E2E8F0] z-50 flex flex-col shadow-lg">
            <div className="px-4 py-3 border-b border-[#E2E8F0]">
              <a href="/" className="flex items-center no-underline">
                <img
                  src="/alg-logo.png"
                  alt="Alpha Law Group — Justice for Autism"
                  className="h-10 w-auto object-contain object-left"
                  style={{ maxWidth: '220px' }}
                />
              </a>
            </div>
            {allLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={
                  link.isCta
                    ? 'block px-6 py-4 bg-[#1E40AF] text-white font-bold text-base border-b border-[#E2E8F0]'
                    : 'block px-6 py-4 text-[#111827] text-base font-medium border-b border-[#E2E8F0] hover:bg-[#EFF6FF]'
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Content offset for fixed nav */}
      <div className="pt-20">
        {children}

        {/* Footer */}
        <footer className="bg-[#F8F9FA] border-t border-[#E2E8F0] py-8 px-4">
          {/* Footer Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-[#475569] mb-6">
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-[#1E40AF] transition">
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="text-sm text-[#475569] text-center">
            Alpha Law Group, PLLC | Justice for Autism Initiative | Sarasota, Florida | (941) 304-1500
          </p>
          <p className="text-xs text-[#475569] text-center max-w-4xl mx-auto mt-2">
            ATTORNEY ADVERTISING: Completion of this intake form does not create an attorney-client relationship. No legal advice is provided herein. Alpha Law Group represents clients on a contingency fee basis — no fees charged unless a recovery is obtained. VICP NOTICE: Strict filing deadlines apply. Contact an attorney immediately to protect your rights. PRIVACY: All information submitted is confidential and subject to attorney-client privilege.
          </p>
          <p className="text-xs text-gray-400 text-center mt-2">
            &copy; 2026 Alpha Law Group, PLLC. All Rights Reserved. | Powered by LegalCasePortal&trade; &mdash; A Noetic Dharma Group Technology
          </p>
        </footer>
      </div>
    </div>
  )
}
