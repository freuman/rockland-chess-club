'use client'

import Chess67Calendar from '@/components/events/Chess67Calendar'
import { motion } from 'framer-motion'

export default function EventsPageContent() {
  return (
    <div className="bg-gradient-to-br from-amber-50 via-cream to-burgundy-50 paper-texture">
      {/* Hero Section */}
      <div className="px-6 pt-24 pb-12 sm:pt-32 sm:pb-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tight text-burgundy-800 sm:text-6xl" 
            style={{fontFamily: 'var(--font-playfair)'}}
          >
            Chess Events & Calendar
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-forest-700" 
            style={{fontFamily: 'var(--font-baskerville)'}}
          >
            Join us for tournaments, casual play, classes, and special chess events throughout the month.
          </motion.p>
        </div>
      </div>

      {/* Calendar and Events */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Classical decorative divider */}
        <div className="classical-divider mb-16"></div>
        
        <Chess67Calendar />
        
        {/* Event Information */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-4xl font-bold text-burgundy-800 mb-12 text-center" style={{fontFamily: 'var(--font-playfair)'}}>Event Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="elegant-card p-8 hover:shadow-elegant transition-all duration-300 group text-center">
              <h3 className="text-xl font-bold text-burgundy-800 mb-3" style={{fontFamily: 'var(--font-playfair)'}}>Thursday Night Chess</h3>
              <p className="text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                Our weekly casual chess nights. Relaxed atmosphere for games, analysis, and socializing. Perfect for all skill levels.
              </p>
            </div>
            
            <div className="elegant-card p-8 hover:shadow-elegant transition-all duration-300 group text-center">
              <h3 className="text-xl font-bold text-burgundy-800 mb-3" style={{fontFamily: 'var(--font-playfair)'}}>Monthly Board Game Nights</h3>
              <p className="text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                Not just chess! Enjoy Scrabble, Settlers of Catan, and other strategy games in a fun, social setting.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Regular Schedule */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="classical-divider mb-16"></div>
          <div className="elegant-card p-12 bg-gradient-to-br from-amber-100 to-cream">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-burgundy-800 mb-6" style={{fontFamily: 'var(--font-playfair)'}}>Regular Schedule</h2>
            </div>
            <div className="text-center max-w-lg mx-auto">
              <h3 className="text-2xl font-bold text-burgundy-800 mb-3" style={{fontFamily: 'var(--font-playfair)'}}>Thursday Nights</h3>
              <p className="text-xl text-forest-700 mb-2 font-semibold" style={{fontFamily: 'var(--font-baskerville)'}}>7:00 PM - 9:00 PM</p>
              <p className="text-forest-700" style={{fontFamily: 'var(--font-baskerville)'}}>
                Casual games, instruction for beginners, puzzle solving, and friendly competition
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}