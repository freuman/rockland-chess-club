'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import type { CommunityCard } from '@/types'

interface HeroProps {
  communityCards: CommunityCard[]
}

export default function Hero({ communityCards }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-cream to-burgundy-50 py-8 sm:py-16 paper-texture">
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/new-logo.png"
              alt=""
              width={352}
              height={352}
              priority
              aria-hidden="true"
              className="mx-auto h-24 w-24 object-contain sm:h-44 sm:w-44"
              sizes="(max-width: 640px) 96px, 176px"
            />

            <h1
              className="mt-4 text-3xl font-bold tracking-tight text-burgundy-800 sm:mt-6 sm:text-5xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Rockland County Chess Club
            </h1>

            <p
              className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-burgundy-700 sm:mt-5 sm:text-xl"
              style={{ fontFamily: 'var(--font-baskerville)' }}
            >
              Play chess, make friends, all skill levels welcome. We meet every Thursday
              from 7&ndash;9&nbsp;PM in Nyack, and beginners play side by side with experts.
            </p>
          </motion.div>

          {/* First-visit callout — deliberately above the fold */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 inline-flex items-center gap-3 rounded-lg border-2 border-amber-400 bg-amber-100 px-5 py-3 sm:mt-8 sm:px-6"
          >
            <span className="text-2xl" aria-hidden="true">
              👋
            </span>
            <span
              className="text-burgundy-800"
              style={{ fontFamily: 'var(--font-baskerville)' }}
            >
              <strong>First visit?</strong> Just drop in any Thursday — $10 at the door,
              no reservation needed.
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-7 flex flex-col items-center justify-center gap-4 sm:mt-9 sm:flex-row"
          >
            <Link href="/events" className="btn-classical px-9 py-4 text-lg">
              See what&rsquo;s on
            </Link>

            <Link
              href="/join"
              className="inline-flex items-center rounded-lg border-2 border-amber-500 px-9 py-4 text-lg font-semibold text-burgundy-700 transition-colors duration-300 hover:bg-amber-100"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Become a member
            </Link>
          </motion.div>

          <div className="classical-divider my-14"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {communityCards.map((card) => (
              <div key={card.id} className="elegant-card p-7 text-center">
                <h2
                  className="mb-3 text-xl font-bold text-burgundy-800"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {card.title}
                </h2>
                <p
                  className="text-forest-700"
                  style={{ fontFamily: 'var(--font-baskerville)' }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
