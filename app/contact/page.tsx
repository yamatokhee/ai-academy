'use client'

import React from 'react'

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-primary-dark text-pale-silver">
      <div className="absolute inset-0 z-0">
        <div className="grid-background"></div>
      </div>

      {/* Contact Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="cyberpunk-text main-title mb-8">Contact Us</h1>
            <div className="cyberpunk-card p-8 mb-16">
              <p className="text-xl md:text-2xl leading-relaxed text-pale-silver">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="cyberpunk-card p-8">
                <h2 className="text-2xl font-bold mb-6 text-bright-yellow">Get in Touch</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-bright-yellow mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-primary-dark border border-electric-blue p-3 text-pale-silver placeholder-pale-silver/50 focus:border-bright-yellow focus:ring-1 focus:ring-bright-yellow transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-bright-yellow mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-primary-dark border border-electric-blue p-3 text-pale-silver placeholder-pale-silver/50 focus:border-bright-yellow focus:ring-1 focus:ring-bright-yellow transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-bright-yellow mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full bg-primary-dark border border-electric-blue p-3 text-pale-silver placeholder-pale-silver/50 focus:border-bright-yellow focus:ring-1 focus:ring-bright-yellow transition-colors"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="neon-button w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="cyberpunk-card p-8">
                  <h2 className="text-2xl font-bold mb-6 text-bright-yellow">Visit Us</h2>
                  <div className="space-y-4">
                    <p className="flex items-center text-pale-silver">
                      <span className="text-2xl mr-4">📍</span>
                      41, Jalan Kenari 21, Bandar Puchong Jaya, 47100 Puchong, Selangor
                    </p>
                    <p className="flex items-center text-pale-silver">
                      <span className="text-2xl mr-4">📞</span>
                      011-16387871
                    </p>
                    <p className="flex items-center text-pale-silver">
                      <span className="text-2xl mr-4">📧</span>
                      yamatokhee@gmail.com
                    </p>
                  </div>
                </div>

                <div className="cyberpunk-card p-8">
                  <h2 className="text-2xl font-bold mb-6 text-bright-yellow">Office Hours</h2>
                  <div className="space-y-4">
                    <p className="flex items-center text-pale-silver">
                      <span className="text-2xl mr-4">📅</span>
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="flex items-center text-pale-silver">
                      <span className="text-2xl mr-4">🌟</span>
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                    <p className="flex items-center text-pale-silver">
                      <span className="text-2xl mr-4">🌙</span>
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 