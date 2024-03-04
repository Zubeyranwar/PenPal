import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
   subsets: ['latin'], 
  })

export const metadata: Metadata = {
  title: 'PenPal',
  description: 'PenPal makes it easy to jot down ideas, create to-do lists, and keep track of important information.',
  icons:{
    icon:[
      {
        media:"(prefers-color-scheme:light)",
        url:"/logo.svg",
        href:"/logo.svg",
      },
      {
        media:"(prefers-color-scheme:dark)",
        url:"/logo-dark.png",
        href:"/logo-dark.png",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}