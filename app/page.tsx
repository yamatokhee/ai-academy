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
              Unlock your child's potential with our fun and engaging AI courses designed for kids aged 7-12! Join Robo-Monkey AI Academy today and embark on an exciting tech journey where they'll learn the fundamentals of artificial intelligence, coding, and robotics.
            </p>
            <Link
              href="/courses"
              className="neon-button"
              aria-label="Explore our AI Courses"
            >
              Explore AI Courses
            </Link>
            <p className="mt-4">
              Learn more <Link href="/about" className="text-electric-blue underline">about us</Link> and our mission to provide quality AI education for kids.
            </p>
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
                Our interactive lessons are designed to make learning AI fun and accessible for children aged 7-12. We use gamified techniques and engaging activities to teach complex concepts in a way that's easy to understand and enjoyable.
                <Link href="/courses" className="text-electric-blue underline">Explore our courses</Link> to see how we make learning fun!
              </p>
            </article>
            <article className="cyberpunk-card p-8">
              <div className="mb-6">
                <span className="text-5xl" aria-hidden="true">🤖</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Expert Instructors</h3>
              <p>
                Our passionate and experienced instructors are experts in AI and education. They're dedicated to making AI concepts easy to understand and fun to explore for young learners. They provide personalized guidance and support to help each child succeed.
                <Link href="/contact" className="text-electric-blue underline">Contact us</Link> to learn more about our instructors.
              </p>
            </article>
            <article className="cyberpunk-card p-8">
              <div className="mb-6">
                <span className="text-5xl" aria-hidden="true">🎨</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Hands-on Projects</h3>
              <p>
                We believe in learning by doing. That's why our courses are packed with hands-on projects that allow children to apply their knowledge and build real-world skills. From creating AI-powered games to designing intelligent robots, our projects are designed to be both fun and educational.
                See some examples of <Link href="/courses" className="text-electric-blue underline">projects in our courses</Link>.
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
                <p className="mb-6">Embark on your AI adventure! This course is perfect for beginners aged 7-9. Learn the basics of AI through fun, interactive activities and games. Discover how AI is used in everyday life and build your first AI-powered project!</p>
                <Link
                  href="/contact"
                  className="neon-button inline-block"
                  aria-label="Contact us about AI Explorers course"
                >
                  START COURSE
                </Link>
                <p className="mt-2"><Link href="/courses" className="text-electric-blue underline">View Course Details</Link></p>
              </div>
            </article>

            <article className="cyberpunk-card group">
              <div className="h-64 bg-gradient-to-br from-bright-yellow via-electric-blue to-hot-pink flex items-center justify-center relative overflow-hidden">
                <span className="text-6xl transform group-hover:scale-110 transition-transform duration-500" aria-hidden="true">🤖</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">AI & Games</h3>
                <p className="mb-6">Unleash your inner game developer! This course is designed for kids aged 9-12 who want to learn how to create their own AI-powered games. Dive into the world of machine learning and discover how to build intelligent characters and challenging gameplay experiences.</p>
                <Link
                  href="/contact"
                  className="neon-button inline-block"
                  aria-label="Contact us about AI & Games course"
                >
                  START COURSE
                </Link>
                 <p className="mt-2"><Link href="/courses" className="text-electric-blue underline">View Course Details</Link></p>
              </div>
            </article>

            <article className="cyberpunk-card group">
              <div className="h-64 bg-gradient-to-br from-hot-pink via-bright-yellow to-electric-blue flex items-center justify-center relative overflow-hidden">
                <span className="text-6xl transform group-hover:scale-110 transition-transform duration-500" aria-hidden="true">🎨</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Creative AI</h3>
                <p className="mb-6">Express yourself with AI! This course is perfect for creative kids aged 10-12 who want to explore the intersection of AI and art. Learn how to use AI to generate amazing artwork, compose music, and create interactive installations.</p>
                <Link
                  href="/contact"
                  className="neon-button inline-block"
                  aria-label="Contact us about Creative AI course"
                >
                  START COURSE
                </Link>
                 <p className="mt-2"><Link href="/courses" className="text-electric-blue underline">View Course Details</Link></p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 relative" aria-label="Call to Action">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="cyberpunk-text text-4xl md:text-5xl font-bold mb-8">Unlock Your Child's AI Potential!</h2>
          <p className="text-xl md:text-2xl mb-12 mx-auto">
            Ready to inspire the next generation of AI innovators? <Link href="/contact" className="text-electric-blue underline">Contact us</Link> today to learn more about our courses and enroll your child in Robo-Monkey AI Academy!
          </p>
          <Link
            href="/contact"
            className="neon-button"
            aria-label="Contact us to get started"
          >
            Get Started Now!
          </Link>
        </div>
      </section>
    </main>
  )
}
