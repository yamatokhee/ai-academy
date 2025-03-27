import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import './globals.css'
import './styles/cyberpunk.css'
import Navigation from './components/Navigation'

const Footer = dynamic(() => import('./components/Footer'), {
  ssr: false,
  loading: () => <div className="h-32 bg-primary-dark" />
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Robo-Monkey AI Academy',
  description: 'AI Academy for children under 9 years old',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Robo-Monkey AI Academy</title>
        <meta name="description" content="AI Academy for children under 9 years old" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} cyberpunk-container`}>
        <div className="grid-background"></div>
        <header className="fixed top-0 left-0 right-0 z-50 bg-primary-dark/80 backdrop-blur-lg border-b border-electric-blue">
          <div className="container mx-auto px-4">
            <Navigation />
          </div>
        </header>
        <main className="pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 