import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl font-bold mb-6">Welcome to AI Academy for Kids</h1>
            <p className="text-xl mb-8">Discover the exciting world of Artificial Intelligence through fun and interactive learning!</p>
            <Link 
              href="/courses" 
              className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our AI Academy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Fun Learning Experience</h3>
              <p className="text-gray-600">Interactive lessons designed specifically for children under 9 years old.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Expert Instructors</h3>
              <p className="text-gray-600">Learn from passionate teachers who make AI concepts easy to understand.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Hands-on Projects</h3>
              <p className="text-gray-600">Create exciting projects while learning the basics of AI and programming.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Preview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-blue-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Introduction to AI</h3>
                <p className="text-gray-600 mb-4">Perfect for beginners! Learn the basics of AI through fun activities.</p>
                <Link 
                  href="/courses/intro-to-ai"
                  className="text-blue-500 font-semibold hover:text-blue-600"
                >
                  Learn More →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-green-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Robot Friends</h3>
                <p className="text-gray-600 mb-4">Create and program your own virtual robot companion!</p>
                <Link 
                  href="/courses/robot-friends"
                  className="text-blue-500 font-semibold hover:text-blue-600"
                >
                  Learn More →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-purple-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Creative AI Art</h3>
                <p className="text-gray-600 mb-4">Make amazing artwork using AI tools and techniques!</p>
                <Link 
                  href="/courses/ai-art"
                  className="text-blue-500 font-semibold hover:text-blue-600"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-xl mb-8">Join our AI Academy today and begin an amazing journey into the world of technology!</p>
          <Link 
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
} 