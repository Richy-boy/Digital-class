import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Digital Class',
  description: 'Student Management System 2025',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
