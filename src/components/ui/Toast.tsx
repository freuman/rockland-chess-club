'use client'

import { useState, useEffect } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import type { Announcement } from '@/types'

interface ToastProps {
  announcements: Announcement[]
}

const TOAST_DISMISSED_KEY = 'rccc_toast_dismissed'

export default function Toast({ announcements }: ToastProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(true) // Start as true to prevent flash

  // Filter active announcements - the status should be 'active' (lowercase)
  const activeAnnouncements = announcements.filter(announcement => announcement.status === 'active')

  // Check sessionStorage on mount and show toast after delay
  useEffect(() => {
    // Check if already dismissed this session
    const wasDismissed = sessionStorage.getItem(TOAST_DISMISSED_KEY) === 'true'

    if (wasDismissed) {
      setIsDismissed(true)
      return
    }

    setIsDismissed(false)

    if (activeAnnouncements.length === 0) return

    // Hold the toast until the visitor has scrolled past the hero. On a phone it
    // is full width, so showing it on load would cover the "first visit" callout
    // and the primary calls to action — the most important content on the page.
    const HERO_SCROLL_THRESHOLD = 320
    const FALLBACK_DELAY_MS = 10000

    function cleanup() {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(fallback)
    }

    function reveal() {
      setIsVisible(true)
      cleanup()
    }

    function handleScroll() {
      if (window.scrollY > HERO_SCROLL_THRESHOLD) reveal()
    }

    // Belt and braces: the scroll listener is the intended trigger, but a timer
    // guarantees the announcement is still reachable for a visitor who never
    // scrolls, rather than being suppressed forever.
    const fallback = setTimeout(reveal, FALLBACK_DELAY_MS)

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // covers a restored scroll position on reload

    return cleanup
  }, [activeAnnouncements.length])

  // Auto-rotate announcements
  useEffect(() => {
    if (activeAnnouncements.length > 1 && isVisible && !isDismissed) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % activeAnnouncements.length)
      }, 5000) // Change every 5 seconds

      return () => clearInterval(interval)
    }
  }, [activeAnnouncements.length, isVisible, isDismissed])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
    // Remember dismissal for this session
    sessionStorage.setItem(TOAST_DISMISSED_KEY, 'true')
  }

  if (activeAnnouncements.length === 0 || isDismissed) {
    return null
  }

  const currentAnnouncement = activeAnnouncements[currentIndex]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-sm"
        >
          <div className="elegant-card p-4 bg-gradient-to-r from-amber-50 to-cream border-l-4 border-amber-500 shadow-elegant">
            <div className="flex items-start justify-between">
              <div className="flex-1 mr-3">
                <div className="flex items-center mb-2">
                  <div className="chess-piece-decoration text-amber-600 mr-2">♔</div>
                  <h3 className="text-lg font-semibold text-burgundy-800" style={{fontFamily: 'var(--font-playfair)'}}>
                    {currentAnnouncement.title}
                  </h3>
                </div>
                <p className="text-forest-700 text-sm leading-relaxed mb-3" style={{fontFamily: 'var(--font-baskerville)'}}>
                  {currentAnnouncement.description}
                </p>
                
                {/* Link button if linkUrl is provided */}
                {currentAnnouncement.linkUrl && (
                  <a
                    href={currentAnnouncement.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-medium rounded-md transition-colors duration-200"
                    style={{fontFamily: 'var(--font-baskerville)'}}
                  >
                    {currentAnnouncement.linkText || 'Learn More'}
                    <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                
                {/* Progress dots for multiple announcements */}
                {activeAnnouncements.length > 1 && (
                  <div className="flex items-center mt-3 space-x-2">
                    {activeAnnouncements.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex ? 'bg-amber-500' : 'bg-amber-200'
                        }`}
                        aria-label={`Go to announcement ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
              
              <button
                onClick={handleDismiss}
                className="text-forest-600 hover:text-forest-800 transition-colors duration-200 p-1"
                aria-label="Dismiss announcement"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}