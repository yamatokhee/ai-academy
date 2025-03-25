import React from 'react'

export default function CoursesPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Courses</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Introduction to AI */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 bg-blue-200 flex items-center justify-center">
              <span className="text-4xl">🤖</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Introduction to AI</h2>
              <p className="text-gray-600 mb-4">
                A fun and engaging introduction to artificial intelligence for young minds.
                Learn through interactive games and activities!
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>• Understanding what AI is</li>
                <li>• How computers learn</li>
                <li>• Fun AI games</li>
                <li>• Basic coding concepts</li>
              </ul>
              <div className="text-sm text-gray-500">
                <p>Age: 7-9 years</p>
                <p>Duration: 8 weeks</p>
              </div>
            </div>
          </div>

          {/* Robot Friends */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 bg-green-200 flex items-center justify-center">
              <span className="text-4xl">🦾</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Robot Friends</h2>
              <p className="text-gray-600 mb-4">
                Create your own virtual robot friend and learn how robots think and make decisions!
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>• Basic robotics concepts</li>
                <li>• Simple programming</li>
                <li>• Problem-solving skills</li>
                <li>• Robot animations</li>
              </ul>
              <div className="text-sm text-gray-500">
                <p>Age: 8-9 years</p>
                <p>Duration: 10 weeks</p>
              </div>
            </div>
          </div>

          {/* Creative AI Art */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 bg-purple-200 flex items-center justify-center">
              <span className="text-4xl">🎨</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Creative AI Art</h2>
              <p className="text-gray-600 mb-4">
                Discover how AI can help create amazing artwork! Learn to make your own AI-powered masterpieces.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>• Digital art basics</li>
                <li>• AI drawing tools</li>
                <li>• Color and patterns</li>
                <li>• Creative projects</li>
              </ul>
              <div className="text-sm text-gray-500">
                <p>Age: 6-9 years</p>
                <p>Duration: 6 weeks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 