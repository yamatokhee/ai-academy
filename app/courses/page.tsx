import React from 'react'

export default function CoursesPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our AI Learning Paths</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Course 1: AI Explorers */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 bg-blue-200 flex items-center justify-center">
              <span className="text-4xl">🎮</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">AI Explorers</h2>
              <p className="text-gray-600 mb-4">
                Start your AI journey with fun, block-based coding! Learn how computers think and make decisions.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>• Introduction to sequences and algorithms</li>
                <li>• Basic pattern recognition</li>
                <li>• Simple decision-making games</li>
                <li>• Visual block programming</li>
              </ul>
              <div className="text-sm text-gray-500">
                <p>Age: 6-7 years</p>
                <p>No prior experience needed</p>
                <p>20 fun activities</p>
              </div>
            </div>
          </div>

          {/* Course 2: AI & Games */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 bg-green-200 flex items-center justify-center">
              <span className="text-4xl">🤖</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">AI & Games</h2>
              <p className="text-gray-600 mb-4">
                Create your own AI-powered games while learning about machine learning concepts!
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>• Game design with AI elements</li>
                <li>• Teaching computers to play</li>
                <li>• Simple neural networks</li>
                <li>• Interactive storytelling</li>
              </ul>
              <div className="text-sm text-gray-500">
                <p>Age: 7-8 years</p>
                <p>Basic block coding helpful</p>
                <p>25 hands-on projects</p>
              </div>
            </div>
          </div>

          {/* Course 3: Creative AI */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 bg-purple-200 flex items-center justify-center">
              <span className="text-4xl">🎨</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Creative AI</h2>
              <p className="text-gray-600 mb-4">
                Explore how AI can help create art, music, and stories! Perfect for creative minds.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>• AI-assisted drawing tools</li>
                <li>• Music generation basics</li>
                <li>• Story creation with AI</li>
                <li>• Image recognition projects</li>
              </ul>
              <div className="text-sm text-gray-500">
                <p>Age: 8-9 years</p>
                <p>Some coding experience helpful</p>
                <p>15 creative projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Approach Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Learning Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Unplugged Activities</h3>
              <p className="text-gray-600">
                Start with fun, physical activities that teach AI concepts without a computer.
                Just like Code.org, we believe in building fundamental understanding through play!
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-green-600">Block-Based Learning</h3>
              <p className="text-gray-600">
                Use visual programming blocks to create AI projects.
                No typing required - drag and drop to build amazing things!
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-purple-600">Project-Based</h3>
              <p className="text-gray-600">
                Learn by creating real projects that matter to you.
                Every lesson ends with a fun, interactive project to share!
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-orange-600">Self-Paced</h3>
              <p className="text-gray-600">
                Move at your own speed with our guided tutorials.
                Each concept builds on the last, just like solving a puzzle!
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of young learners discovering the exciting world of AI through fun,
            interactive projects and games!
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </main>
  )
} 