import React from 'react'
import Link from 'next/link'

export default function CoursesPage() {
  return (
    <main className="relative">
      <div className="absolute inset-0 z-0">
        <div className="grid-background"></div>
      </div>

      {/* Hero Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="cyberpunk-text main-title mb-8">Our Courses</h1>
            <div className="cyberpunk-card p-8 mb-16 bg-gradient-glow">
              <p className="text-xl md:text-2xl leading-relaxed">
                Discover our innovative AI courses designed specifically for young minds.
                Each course is crafted to make learning both fun and effective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Cards Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* AI Explorers */}
            <div className="cyberpunk-card group">
              <div className="h-48 bg-gradient-to-br from-electric-blue to-hot-pink flex items-center justify-center relative overflow-hidden">
                <span className="text-6xl transform group-hover:scale-110 transition-transform duration-500">🎮</span>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4">AI Explorers</h3>
                <p className="mb-6">Start your AI journey with fun, block-based coding! Learn how computers think and make decisions.</p>
                <ul className="space-y-2 mb-6 text-pale-silver">
                  <li className="flex items-center">
                    <span className="text-bright-yellow mr-2">→</span>
                    Introduction to sequences and algorithms
                  </li>
                  <li className="flex items-center">
                    <span className="text-bright-yellow mr-2">→</span>
                    Basic pattern recognition
                  </li>
                  <li className="flex items-center">
                    <span className="text-bright-yellow mr-2">→</span>
                    Simple decision-making games
                  </li>
                  <li className="flex items-center">
                    <span className="text-bright-yellow mr-2">→</span>
                    Visual block programming
                  </li>
                </ul>
                <Link 
                  href="/courses/ai-explorers"
                  className="neon-button inline-block"
                >
                  Start Course
                </Link>
              </div>
            </div>

            {/* AI & Games */}
            <div className="cyberpunk-card group">
              <div className="h-48 bg-gradient-to-br from-bright-yellow to-electric-blue flex items-center justify-center relative overflow-hidden">
                <span className="text-6xl transform group-hover:scale-110 transition-transform duration-500">🤖</span>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4">AI & Games</h3>
                <p className="mb-6">Create your own AI-powered games while learning about machine learning concepts!</p>
                <ul className="space-y-2 mb-6 text-pale-silver">
                  <li className="flex items-center">
                    <span className="text-bright-yellow mr-2">→</span>
                    Game design with AI elements
                  </li>
                  <li className="flex items-center">
                    <span className="text-bright-yellow mr-2">→</span>
                    Teaching computers to play
                  </li>
                  <li className="flex items-center">
                    <span className="text-bright-yellow mr-2">→</span>
                    Simple neural networks
                  </li>
                  <li className="flex items-center">
                    <span className="text-bright-yellow mr-2">→</span>
                    Interactive storytelling
                  </li>
                </ul>
                <Link 
                  href="/courses/ai-games"
                  className="neon-button inline-block"
                >
                  Start Course
                </Link>
              </div>
            </div>

            {/* Creative AI */}
            <div className="cyberpunk-card group">
              <div className="h-48 bg-gradient-to-br from-hot-pink to-bright-yellow flex items-center justify-center relative overflow-hidden">
                <span className="text-6xl transform group-hover:scale-110 transition-transform duration-500">🎨</span>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4">Creative AI</h3>
                <p className="mb-6">Explore how AI can help create art, music, and stories! Perfect for creative minds.</p>
                <ul className="space-y-2 mb-6 text-pale-silver">
                  <li className="flex items-center">
                    <span className="text-bright-yellow mr-2">→</span>
                    AI-assisted drawing tools
                  </li>
                  <li className="flex items-center">
                    <span className="text-bright-yellow mr-2">→</span>
                    Music generation basics
                  </li>
                  <li className="flex items-center">
                    <span className="text-bright-yellow mr-2">→</span>
                    Story creation with AI
                  </li>
                  <li className="flex items-center">
                    <span className="text-bright-yellow mr-2">→</span>
                    Image recognition projects
                  </li>
                </ul>
                <Link 
                  href="/courses/creative-ai"
                  className="neon-button inline-block"
                >
                  Start Course
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Approach Section */}
      <section className="py-32 relative bg-primary-dark/50 backdrop-blur-lg">
        <div className="container mx-auto px-6">
          <h2 className="cyberpunk-text text-4xl md:text-5xl font-bold text-center mb-16">Our Learning Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="cyberpunk-card group p-8">
              <div className="mb-6">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Unplugged Activities</h3>
              <p>Start with fun, physical activities that teach AI concepts without a computer. Just like Code.org, we believe in building fundamental understanding through play!</p>
            </div>

            <div className="cyberpunk-card group p-8">
              <div className="mb-6">
                <span className="text-4xl">🧩</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Block-Based Learning</h3>
              <p>Use visual programming blocks to create AI projects. No typing required - drag and drop to build amazing things!</p>
            </div>

            <div className="cyberpunk-card group p-8">
              <div className="mb-6">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Project-Based</h3>
              <p>Learn by creating real projects that matter to you. Every lesson ends with a fun, interactive project to share!</p>
            </div>

            <div className="cyberpunk-card group p-8">
              <div className="mb-6">
                <span className="text-4xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Self-Paced</h3>
              <p>Move at your own speed with our guided tutorials. Each concept builds on the last, just like solving a puzzle!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="cyberpunk-card p-12 bg-gradient-glow max-w-4xl mx-auto">
            <h2 className="cyberpunk-text text-4xl md:text-5xl font-bold mb-8">Ready to Start Learning?</h2>
            <p className="text-xl mb-12">
              Choose your course and begin your AI journey today!
            </p>
            <Link 
              href="/contact"
              className="neon-button inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 