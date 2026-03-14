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
