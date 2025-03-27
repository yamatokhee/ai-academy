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
  metadataBase: new URL('https://robomonkeyai.com'),
  title: {
    default: 'Robo-Monkey AI Academy | Fun AI Learning for Kids 7-12',
    template: '%s | Robo-Monkey AI Academy'
  },
  description: 'Discover fun AI learning at Robo-Monkey Academy. Interactive courses designed for kids aged 7-12. Start their tech journey today!',
  keywords: ['AI for kids', 'kids coding 7-12', 'AI academy', 'robotics for children', 'STEM education', 'kids technology', 'AI learning'],
  authors: [{ name: 'Robo-Monkey AI Academy' }],
  creator: 'Robo-Monkey AI Academy',
  publisher: 'Robo-Monkey AI Academy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://robomonkeyai.com',
    siteName: 'Robo-Monkey AI Academy',
    title: 'Fun AI Learning for Kids 7-12 | Robo-Monkey Academy',
    description: 'Interactive AI courses designed for kids aged 7-12. Join Robo-Monkey Academy and start their tech journey today!',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Robo-Monkey AI Academy - Fun AI Learning for Kids',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fun AI Learning for Kids 7-12 | Robo-Monkey Academy',
    description: 'Interactive AI courses designed for kids aged 7-12. Join Robo-Monkey Academy and start their tech journey today!',
    images: ['/og-image.jpg'],
    creator: '@robomonkeyai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
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
        <link rel="canonical" href="https://robomonkeyai.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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