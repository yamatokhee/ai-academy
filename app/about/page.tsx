import React from 'react'

export default function AboutPage() {
  return (
    <main className="relative">
      <div className="absolute inset-0 z-0">
        <div className="grid-background"></div>
      </div>

      {/* Mission Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="cyberpunk-text main-title mb-8">Our Mission</h1>
            <div className="cyberpunk-card p-8 mb-16 bg-gradient-glow">
              <p className="text-xl md:text-2xl leading-relaxed">
                At AI Academy, we believe in making artificial intelligence education accessible, fun,
                and engaging for young minds. Our mission is to prepare the next generation for a
                future where AI plays an increasingly important role in our daily lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <h2 className="cyberpunk-text text-4xl md:text-5xl font-bold text-center mb-16">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="cyberpunk-card group p-8">
              <div className="mb-6">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Hands-on Learning</h3>
              <p>Children learn best by doing. Our courses involve practical projects and interactive exercises that make learning both fun and effective.</p>
            </div>

            <div className="cyberpunk-card group p-8">
              <div className="mb-6">
                <span className="text-4xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Safe Learning Environment</h3>
              <p>We provide a secure, monitored environment where children can explore and learn about AI safely and confidently.</p>
            </div>

            <div className="cyberpunk-card group p-8">
              <div className="mb-6">
                <span className="text-4xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Regular Feedback</h3>
              <p>We maintain open communication with parents about their child's progress and achievements throughout the course.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 relative bg-primary-dark/50 backdrop-blur-lg">
        <div className="container mx-auto px-6">
          <h2 className="cyberpunk-text text-4xl md:text-5xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="cyberpunk-card group p-8">
              <div className="mb-6">
                <span className="text-4xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p>We stay at the forefront of AI education, constantly updating our curriculum with the latest developments and best practices.</p>
            </div>

            <div className="cyberpunk-card group p-8">
              <div className="mb-6">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Inclusivity</h3>
              <p>We believe every child should have the opportunity to learn about AI, regardless of their background or prior experience.</p>
            </div>

            <div className="cyberpunk-card group p-8">
              <div className="mb-6">
                <span className="text-4xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p>We maintain high standards in our teaching methods and materials, ensuring quality education for all our students.</p>
            </div>

            <div className="cyberpunk-card group p-8">
              <div className="mb-6">
                <span className="text-4xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Growth</h3>
              <p>We foster a growth mindset, encouraging students to learn from challenges and celebrate their progress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="cyberpunk-card p-12 bg-gradient-glow max-w-4xl mx-auto">
            <h2 className="cyberpunk-text text-4xl md:text-5xl font-bold mb-8">Ready to Join Us?</h2>
            <p className="text-xl mb-12">
              Join us in preparing your child for the future of technology!
            </p>
            <a href="/contact" className="neon-button inline-block">
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 