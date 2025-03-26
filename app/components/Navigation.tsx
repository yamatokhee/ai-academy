'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center h-32">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="relative w-[280px] h-[70px] md:w-[480px] md:h-[120px] bg-transparent">
              <Image
                src="/robo-monkey-logo.png"
                alt="Robo-Monkey AI Academy Logo"
                fill
                className="object-contain"
                style={{ 
                  objectFit: 'contain',
                  filter: 'brightness(1.2) contrast(1.1)'
                }}
                priority
              />
            </div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 cyberpunk-nav">
          <Link href="/" className="text-bright-yellow hover:text-electric-blue transition-colors">
            Home
          </Link>
          <Link href="/courses" className="text-bright-yellow hover:text-electric-blue transition-colors">
            Courses
          </Link>
          <Link href="/about" className="text-bright-yellow hover:text-electric-blue transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-bright-yellow hover:text-electric-blue transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-bright-yellow hover:text-electric-blue transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg 
            className="w-8 h-8" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary-dark/95 backdrop-blur-lg border-t border-electric-blue">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className="block px-3 py-2 text-bright-yellow hover:text-electric-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/courses" 
              className="block px-3 py-2 text-bright-yellow hover:text-electric-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Courses
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 text-bright-yellow hover:text-electric-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-2 text-bright-yellow hover:text-electric-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
} 