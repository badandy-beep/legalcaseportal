import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://legalcaseportal.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Alpha Law Group — Vaccine Injury Compensation for Autism Families',
    template: '%s | Alpha Law Group'
  },
  description: 'Alpha Law Group helps autism families file for federal compensation through the Vaccine Injury Compensation Program. Free case review. No fees unless we win. Attorney fees paid by the program.',
  keywords: 'vaccine injury compensation, autism VICP, vaccine court, autism legal help, VICP attorney, vaccine injury lawyer Florida, autism compensation federal',
  authors: [{ name: 'Alpha Law Group' }],
  creator: 'Alpha Law Group',
  publisher: 'Alpha Law Group',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Alpha Law Group — Justice for Autism',
    title: 'Your Child May Be Entitled to Federal Compensation',
    description: 'The federal government has paid $5.4 billion to vaccine-injured families. Thousands of autism families qualify — and most never know it exists. Free case review. No fees unless we win.',
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'The Autism Justice Foundation team at the CHD Moment of Truth Conference',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Child May Be Entitled to Federal Compensation',
    description: 'The federal government has paid $5.4 billion to vaccine-injured families. Free case review. No fees unless we win.',
    images: ['/og-default.jpg'],
    creator: '@alphalawgroup',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
}
