'use client'

import { useState } from 'react'
import Link from 'next/link'

const desktopLinks = [
  { label: 'Home', href: '/' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Deadline Calculator', href: '/deadline-calculator' },
  { label: 'Start My Claim', href: '/intake/phase-1', isCta: true },
  { label: 'Resources', href: '/resources' },
]

const mobileLinks = [
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

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div id="top">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-alg-navy border-b-2 border-alg-gold" aria-label="Main navigation">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="text-white font-extrabold tracking-widest text-sm hover:text-alg-gold transition">
              ALPHA LAW GROUP
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {desktopLinks.map((link) =>
                link.isCta ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="bg-alg-gold text-alg-navy font-bold px-4 py-1.5 rounded hover:bg-alg-gold-light transition ml-2"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-white hover:text-alg-gold transition px-3 py-2 text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                )
              )}
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
          <div className="md:hidden absolute top-full left-0 w-full bg-alg-navy z-50 flex flex-col">
            {mobileLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={
                  link.isCta
                    ? 'block px-6 py-4 bg-alg-gold text-alg-navy font-bold text-base border-b border-white/10'
                    : 'block px-6 py-4 text-white text-base font-medium border-b border-white/10 hover:bg-white/10'
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Content offset for fixed nav */}
      <div className="pt-16">
        {children}

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-200 py-8 px-4">
          <p className="text-sm text-gray-700 text-center">
            Alpha Law Group, PLLC | Justice for Autism Initiative | Sarasota, Florida | (941) 304-1500
          </p>
          <p className="text-xs text-gray-600 text-center max-w-4xl mx-auto mt-2">
            ATTORNEY ADVERTISING: Completion of this intake form does not create an attorney-client relationship. No legal advice is provided herein. Alpha Law Group represents clients on a contingency fee basis — no fees charged unless a recovery is obtained. VICP NOTICE: Strict filing deadlines apply. Contact an attorney immediately to protect your rights. PRIVACY: All information submitted is confidential and subject to attorney-client privilege.
          </p>
          <p className="text-xs text-gray-300 text-center mt-2">
            &copy; 2026 Alpha Law Group, PLLC. All Rights Reserved. | Powered by LegalCasePortal&trade; &mdash; A Noetic Dharma Group Technology
          </p>
        </footer>
      </div>
    </div>
  )
}
