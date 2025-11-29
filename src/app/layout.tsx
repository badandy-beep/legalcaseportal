import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LegalCasePortal - Autism & Vaccine Injury Case Evaluation',
  description: 'Free case evaluation for families affected by vaccine injuries. Connect with experienced legal representation through the National Vaccine Injury Compensation Program.',
  keywords: 'vaccine injury, autism, NVICP, legal help, case evaluation, vaccine compensation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
}
