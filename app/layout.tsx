import type { Metadata } from 'next'
import { Nunito, Outfit, Plus_Jakarta_Sans, Urbanist } from 'next/font/google'
import './globals.css'

const jakarta = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Product Dev and Designer',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jakarta.className}>{children}</body>
    </html>
  )
}
