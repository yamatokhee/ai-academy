import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="hero-section" aria-label="Hero">
        <div className="absolute inset-0 z-0">
          <div className="grid-background"></div>
        </div>
        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="cyberpunk-text main-title mb-8" data-text="Ready to Start Learning?">
              Ready to Start Learning?
            </h1>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed">
              Join our AI Academy today and begin an amazing tech journey designed for kids aged 7-12!
            </p>
            <Link 
              href="/courses" 
              className="neon-button"
              aria-label="Start Your Learning Journey"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative" aria-label="Features">
        <div className="container mx-auto px-6">
          <h2 className="cyberpunk-text text-4xl md:text-5xl font-bold text-center mb-16">Why Choose Our AI Academy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <article className="cyberpunk-card p-8">
              <div className="mb-6">
                <span className="text-5xl" aria-hidden="true">🎮</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Fun Learning Experience</h3>
              <p>
                Interactive lessons designed specifically for children aged 7-12, making AI learning engaging and enjoyable.
              </p>
            </article>
            <article className="cyberpunk-card p-8">
              <div className="mb-6">
                <span className="text-5xl" aria-hidden="true">🤖</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Expert Instructors</h3>
              <p>
                Learn from passionate teachers who make AI concepts easy to understand and fun to explore.
              </p>
            </article>
            <article className="cyberpunk-card p-8">
              <div className="mb-6">
                <span className="text-5xl" aria-hidden="true">🎨</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Hands-on Projects</h3>
              <p>
                Create exciting projects while learning the basics of AI and programming, building real-world skills.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Courses Preview Section */}
      <section className="py-32 relative" aria-label="Featured Courses">
        <div className="container mx-auto px-6">
          <h2 className="cyberpunk-text text-4xl md:text-5xl font-bold text-center mb-16">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <article className="cyberpunk-card group">
              <div className="h-64 bg-gradient-to-br from-electric-blue via-hot-pink to-bright-yellow flex items-center justify-center relative overflow-hidden">
                <span className="text-6xl transform group-hover:scale-110 transition-transform duration-500" aria-hidden="true">🎮</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">AI Explorers</h3>
                <p className="mb-6">Perfect for beginners! Learn the basics of AI through fun activities and interactive games.</p>
                <Link 
                  href="/courses/intro-to-ai"
                  className="inline-flex items-center text-electric-blue hover:text-bright-yellow transition-colors"
                  aria-label="Learn more about AI Explorers course"
                >
                  <span className="mr-2">Learn More</span>
                  <span className="text-xl" aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            <article className="cyberpunk-card group">
              <div className="h-64 bg-gradient-to-br from-bright-yellow via-electric-blue to-hot-pink flex items-center justify-center relative overflow-hidden">
                <span className="text-6xl transform group-hover:scale-110 transition-transform duration-500" aria-hidden="true">🤖</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">AI & Games</h3>
                <p className="mb-6">Create your own AI-powered games and learn machine learning through interactive projects!</p>
                <Link 
                  href="/courses/ai-games"
                  className="inline-flex items-center text-electric-blue hover:text-bright-yellow transition-colors"
                  aria-label="Learn more about AI & Games course"
                >
                  <span className="mr-2">Learn More</span>
                  <span className="text-xl" aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            <article className="cyberpunk-card group">
              <div className="h-64 bg-gradient-to-br from-hot-pink via-bright-yellow to-electric-blue flex items-center justify-center relative overflow-hidden">
                <span className="text-6xl transform group-hover:scale-110 transition-transform duration-500" aria-hidden="true">🎨</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Creative AI</h3>
                <p className="mb-6">Explore how AI can help create amazing artwork and music through hands-on creative projects!</p>
                <Link 
                  href="/courses/creative-ai"
                  className="inline-flex items-center text-electric-blue hover:text-bright-yellow transition-colors"
                  aria-label="Learn more about Creative AI course"
                >
                  <span className="mr-2">Learn More</span>
                  <span className="text-xl" aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 relative" aria-label="Call to Action">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="cyberpunk-text text-4xl md:text-5xl font-bold mb-8">Ready to Join?</h2>
          <p className="text-xl md:text-2xl mb-12 mx-auto">
            Take the first step into the exciting world of AI. Start your journey today!
          </p>
          <Link 
            href="/contact"
            className="neon-button"
            aria-label="Contact us to get started"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
} 