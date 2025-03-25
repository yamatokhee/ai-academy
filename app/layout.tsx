import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './styles/cyberpunk.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Academy for Kids',
  description: 'Learn AI concepts through fun and interactive lessons designed for children under 9 years old.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} cyberpunk-container`}>
        <div className="grid-background"></div>
        {/* Navigation */}
        <nav className="cyberpunk-header">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="cyberpunk-text text-2xl font-bold">
                AI Academy
              </Link>
              <div className="hidden md:flex space-x-8 cyberpunk-nav">
                <Link href="/" className="text-white hover:text-accent-2 transition-colors">
                  Home
                </Link>
                <Link href="/courses" className="text-white hover:text-accent-2 transition-colors">
                  Courses
                </Link>
                <Link href="/about" className="text-white hover:text-accent-2 transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-white hover:text-accent-2 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="bg-primary-dark text-white py-8 border-t-2 border-neon-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="cyberpunk-text text-xl font-semibold mb-4">AI Academy</h3>
                <p className="text-gray-400">Making AI learning fun and accessible for kids.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent-2">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/courses" className="text-gray-400 hover:text-accent-2 transition-colors">
                      Our Courses
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-accent-2 transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-accent-2 transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent-1">Contact Us</h3>
                <p className="text-gray-400">Email: info@aiacademy.com</p>
                <p className="text-gray-400">Phone: (123) 456-7890</p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">&copy; {new Date().getFullYear()} AI Academy. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 