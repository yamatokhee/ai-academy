import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import './globals.css'
import './styles/cyberpunk.css'
import Navigation from './components/Navigation'

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

        {/* Footer */}
        <footer className="bg-primary-dark py-8 border-t-2 border-neon-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center sm:text-left">
                <h3 className="text-bright-yellow text-xl font-semibold mb-4">Robo-Monkey AI Academy</h3>
                <p className="text-pale-silver">Making AI learning fun and accessible for kids.</p>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-bright-yellow text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/courses" 
                      className="text-pale-silver hover:text-bright-yellow transition-colors inline-block py-1 hover:translate-x-2 transform duration-200"
                    >
                      Our Courses
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/about" 
                      className="text-pale-silver hover:text-bright-yellow transition-colors inline-block py-1 hover:translate-x-2 transform duration-200"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/contact" 
                      className="text-pale-silver hover:text-bright-yellow transition-colors inline-block py-1 hover:translate-x-2 transform duration-200"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-bright-yellow text-xl font-semibold mb-4">Contact Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-center justify-center sm:justify-start text-pale-silver">
                    <svg className="w-5 h-5 mr-2 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span>41, Jalan Kenari 21, Bandar Puchong Jaya, 47100 Puchong, Selangor</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start text-pale-silver">
                    <svg className="w-5 h-5 mr-2 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <span>011-16387871</span>
                  </li>
                  <li className="flex items-center justify-center sm:justify-start text-pale-silver">
                    <svg className="w-5 h-5 mr-2 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <span>yamatokhee@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-pale-silver">&copy; {new Date().getFullYear()} Robo-Monkey AI Academy. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 