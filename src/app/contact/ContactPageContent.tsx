'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { MapPinIcon, ClockIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import type { ContactForm } from '@/types'

const contactInfo = [
  {
    icon: MapPinIcon,
    title: 'Location',
    details: [
      '70 Main St., 3rd Floor',
      'Nyack, NY 10960',
      'Accessible venue with parking available'
    ]
  },
  {
    icon: ClockIcon,
    title: 'Meeting Hours',
    details: [
      'Thursdays: 7:00 PM - 9:00 PM',
      'Drop in anytime during our hours',
      'All skill levels welcome'
    ]
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    details: [
      'info@rocklandchessclub.org',
      'We respond within 24 hours',
      'Questions always welcome'
    ]
  }
]

export function ContactPageContent() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactForm>()

  const onSubmit = async (data: ContactForm) => {
    setError(null)
    
    try {
      // Submit to both Netlify and Airtable concurrently
      const [netlifyResponse, airtableResponse] = await Promise.allSettled([
        // Submit to Netlify
        (async () => {
          const formData = new URLSearchParams()
          formData.append('form-name', 'contact-form')
          formData.append('name', data.name)
          formData.append('email', data.email)
          formData.append('message', data.message)

          const response = await fetch('/__forms.html', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formData.toString(),
          })

          if (!response.ok) {
            throw new Error('Netlify form submission failed')
          }
          return response
        })(),
        
        // Submit to Airtable
        (async () => {
          const response = await fetch('/api/contact-form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: data.name,
              email: data.email,
              message: data.message
            }),
          })

          if (!response.ok) {
            throw new Error('Airtable submission failed')
          }
          return response.json()
        })()
      ])

      // Check results
      const netlifySuccess = netlifyResponse.status === 'fulfilled'
      const airtableSuccess = airtableResponse.status === 'fulfilled'

      if (netlifySuccess || airtableSuccess) {
        setIsSubmitted(true)
        reset()
        
        // Log any partial failures
        if (!netlifySuccess) {
          console.warn('Netlify submission failed:', netlifyResponse.reason)
        }
        if (!airtableSuccess) {
          console.warn('Airtable submission failed:', airtableResponse.reason)
        }
      } else {
        throw new Error('Both submissions failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setError('There was an error submitting the form. Please try again.')
    }
  }

  return (
    <div className="bg-gradient-to-br from-amber-50 via-cream to-burgundy-50 paper-texture">
      {/* Hero Section */}
      <div className="px-6 pt-24 pb-12 sm:pt-32 sm:pb-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-burgundy-800 sm:text-6xl" style={{fontFamily: 'var(--font-playfair)'}}>
            Get in Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
            Questions about membership, meetings, or chess in general? We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Info & Form */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Classical decorative divider */}
        <div className="classical-divider mb-16"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-bold text-burgundy-800 mb-8" style={{fontFamily: 'var(--font-playfair)'}}>Contact Information</h2>
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="elegant-card p-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <item.icon className="h-8 w-8 text-amber-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-burgundy-800 mb-2" style={{fontFamily: 'var(--font-playfair)'}}>{item.title}</h3>
                      <div className="mt-2 space-y-1">
                        {item.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-12 elegant-card p-8 bg-gradient-to-br from-amber-100 to-cream">
              <h3 className="text-xl font-bold text-burgundy-800 mb-3" style={{fontFamily: 'var(--font-playfair)'}}>
                Exciting News!
              </h3>
              <p className="text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                We&apos;re expanding to a new, larger space in September 2025! This will allow us to host more events, 
                accommodate more members, and offer enhanced facilities for our chess community.
              </p>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-burgundy-800 mb-4" style={{fontFamily: 'var(--font-playfair)'}}>Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/RocklandChess/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="elegant-card p-3 text-burgundy-600 hover:text-amber-600 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-4xl font-bold text-burgundy-800 mb-8" style={{fontFamily: 'var(--font-playfair)'}}>
              Send us a Message
            </h2>
            
{isSubmitted ? (
              <div className="elegant-card p-8 text-center">
                <h3 className="text-2xl font-bold text-burgundy-800 mb-4" style={{fontFamily: 'var(--font-playfair)'}}>
                  Message Sent Successfully!
                </h3>
                <p className="text-forest-700 text-lg" style={{fontFamily: 'var(--font-baskerville)'}}>
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit(onSubmit)}
                className="elegant-card p-8 space-y-6"
                name="contact-form"
                method="POST"
                data-netlify="true"
              >
                {/* Hidden form name for Netlify */}
                <input type="hidden" name="form-name" value="contact-form" />
                
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold text-burgundy-800 mb-3" 
                         style={{fontFamily: 'var(--font-playfair)'}}>
                    Your Name *
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 text-burgundy-800 bg-cream border-2 border-amber-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all duration-300 text-lg"
                    style={{fontFamily: 'var(--font-baskerville)'}}
                  />
                  {errors.name && (
                    <p className="mt-2 text-burgundy-600 text-sm" style={{fontFamily: 'var(--font-baskerville)'}}>
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-semibold text-burgundy-800 mb-3" 
                         style={{fontFamily: 'var(--font-playfair)'}}>
                    Email Address *
                  </label>
                  <input
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 text-burgundy-800 bg-cream border-2 border-amber-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all duration-300 text-lg"
                    style={{fontFamily: 'var(--font-baskerville)'}}
                  />
                  {errors.email && (
                    <p className="mt-2 text-burgundy-600 text-sm" style={{fontFamily: 'var(--font-baskerville)'}}>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-semibold text-burgundy-800 mb-3" 
                         style={{fontFamily: 'var(--font-playfair)'}}>
                    Your Message *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    name="message"
                    id="message"
                    rows={6}
                    placeholder="Tell us about your chess experience, questions about the club, or anything else you'd like to know..."
                    className="w-full px-4 py-3 text-burgundy-800 bg-cream border-2 border-amber-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all duration-300 text-lg resize-vertical"
                    style={{fontFamily: 'var(--font-baskerville)'}}
                  />
                  {errors.message && (
                    <p className="mt-2 text-burgundy-600 text-sm" style={{fontFamily: 'var(--font-baskerville)'}}>
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-classical w-full text-lg px-8 py-4 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                    <span className="chess-piece-decoration text-base ml-2 group-hover:rotate-12 transition-transform duration-300">
                      {isSubmitting ? '⧗' : '♔'}
                    </span>
                  </button>
                </div>
              </form>
            )}
            
            {/* Error message */}
            {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm" style={{fontFamily: 'var(--font-baskerville)'}}>
                  {error}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-burgundy-800 mb-8 text-center" style={{fontFamily: 'var(--font-playfair)'}}>Find Us</h2>
          <div className="elegant-card overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.6!2d-73.9177!3d41.0905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e9a9a9a9a9a9%3A0x0!2s70%20Main%20St%2C%20Nyack%2C%20NY%2010960!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rockland County Chess Club Location"
              className="w-full"
            />
            <div className="p-6 bg-gradient-to-br from-amber-50 to-cream text-center">
              <p className="text-forest-700 text-lg" style={{fontFamily: 'var(--font-baskerville)'}}>
                <strong>70 Main St., 3rd Floor, Nyack, NY 10960</strong>
                <br />
                Parking available nearby. Enter through the main entrance and take the elevator to the 3rd floor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}