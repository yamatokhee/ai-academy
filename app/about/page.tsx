import React from 'react'

export default function AboutPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About AI Academy</h1>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg mb-8">
              At AI Academy, we believe in making artificial intelligence education accessible,
              fun, and engaging for young minds. Our mission is to prepare the next generation
              for a future where AI plays an increasingly important role in our daily lives.
            </p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-gray-50 py-12 rounded-lg mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">Why Choose AI Academy?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👨‍🏫</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Expert Teachers</h3>
                <p className="text-gray-600">
                  Our instructors are passionate about both AI and teaching children,
                  making complex concepts easy to understand.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎮</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Learning Through Play</h3>
                <p className="text-gray-600">
                  We believe in making learning fun! Our curriculum is designed to teach
                  through interactive games and activities.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌟</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Age-Appropriate Content</h3>
                <p className="text-gray-600">
                  All our courses are specifically designed for children under 9,
                  ensuring the perfect learning pace and complexity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Our Approach</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Hands-on Learning</h3>
                <p className="text-gray-600">
                  Children learn best by doing. Our courses involve practical projects
                  and interactive exercises that make learning both fun and effective.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Safe Learning Environment</h3>
                <p className="text-gray-600">
                  We provide a secure, monitored environment where children can explore
                  and learn about AI safely and confidently.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Regular Feedback</h3>
                <p className="text-gray-600">
                  We maintain open communication with parents about their child's progress
                  and achievements throughout the course.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Start?</h2>
          <p className="text-gray-600 mb-8">
            Join us in preparing your child for the future of technology!
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Contact Us Today
          </a>
        </section>
      </div>
    </main>
  )
} 