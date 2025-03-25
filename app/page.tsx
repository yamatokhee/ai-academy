import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="grid-background"></div>
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="cyberpunk-text text-6xl font-bold mb-6 glitch-effect" data-text="Welcome to AI Academy">
              Welcome to AI Academy
            </h1>
            <p className="text-white text-xl mb-8 max-w-2xl">
              Discover the exciting world of Artificial Intelligence through fun and interactive learning!
              Join the next generation of tech innovators.
            </p>
            <Link 
              href="/courses" 
              className="neon-button"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="cyberpunk-text text-3xl font-bold text-center mb-12">Why Choose Our AI Academy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyberpunk-card p-6">
              <h3 className="text-xl font-semibold mb-4 text-accent-2">Fun Learning Experience</h3>
              <p className="text-gray-300">
                Interactive lessons designed specifically for children under 9 years old.
              </p>
            </div>
            <div className="cyberpunk-card p-6">
              <h3 className="text-xl font-semibold mb-4 text-accent-1">Expert Instructors</h3>
              <p className="text-gray-300">
                Learn from passionate teachers who make AI concepts easy to understand.
              </p>
            </div>
            <div className="cyberpunk-card p-6">
              <h3 className="text-xl font-semibold mb-4 text-accent-3">Hands-on Projects</h3>
              <p className="text-gray-300">
                Create exciting projects while learning the basics of AI and programming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Preview Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="cyberpunk-text text-3xl font-bold text-center mb-12">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyberpunk-card overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-accent-1 to-accent-2 flex items-center justify-center">
                <span className="text-4xl">🎮</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-accent-2">AI Explorers</h3>
                <p className="text-gray-300 mb-4">Perfect for beginners! Learn the basics of AI through fun activities.</p>
                <Link 
                  href="/courses/intro-to-ai"
                  className="text-accent-2 font-semibold hover:text-accent-1 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="cyberpunk-card overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-accent-2 to-accent-3 flex items-center justify-center">
                <span className="text-4xl">🤖</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-accent-1">AI & Games</h3>
                <p className="text-gray-300 mb-4">Create your own AI-powered games and learn machine learning!</p>
                <Link 
                  href="/courses/ai-games"
                  className="text-accent-1 font-semibold hover:text-accent-2 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="cyberpunk-card overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-accent-3 to-accent-1 flex items-center justify-center">
                <span className="text-4xl">🎨</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-accent-3">Creative AI</h3>
                <p className="text-gray-300 mb-4">Explore how AI can help create amazing artwork and music!</p>
                <Link 
                  href="/courses/creative-ai"
                  className="text-accent-3 font-semibold hover:text-accent-1 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="cyberpunk-text text-3xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-white text-xl mb-8">
            Join our AI Academy today and begin an amazing journey into the world of technology!
          </p>
          <Link 
            href="/contact"
            className="neon-button"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
} 