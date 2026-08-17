'use client'

import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { chess67, membershipTiers } from '@/lib/chess67'

const faqs = [
  {
    question: 'Can I just show up without registering?',
    answer:
      "Yes. No reservation needed — drop in any Thursday between 7 and 9 PM. Pay $10 at the door and you're ready to play. We'll introduce you around and find you a game.",
  },
  {
    question: "I've never played chess before. Is that okay?",
    answer:
      "Absolutely. Complete beginners are welcome. We have patient members who enjoy teaching newcomers — we'll show you how the pieces move and get you playing your first game.",
  },
  {
    question: 'How do I actually become a member?',
    answer:
      'Membership is handled on Chess67, where our club keeps its roster and calendar. Choose a tier above, create a free Chess67 account if you do not have one, and join the group. Your membership is active immediately.',
  },
  {
    question: 'Do I need to bring my own chess set?',
    answer:
      'No. We provide all equipment including sets, boards, and clocks. Just bring yourself.',
  },
  {
    question: 'What should I expect on my first visit?',
    answer:
      "Arrive anytime during our hours. We'll greet you, explain how things work, and pair you with someone at your level. Expect friendly games, helpful tips, and a welcoming atmosphere.",
  },
  {
    question: 'Is parking available?',
    answer:
      'Yes — street parking on Main St. and nearby municipal lots. Please note the venue is on the 3rd floor and is reached by stairs only; there is no elevator. Get in touch if that is a problem and we will do what we can.',
  },
  {
    question: 'What age groups participate?',
    answer:
      'All ages. We have members from 8 to 80+, which makes for a genuinely enriching mix of people across the boards.',
  },
  {
    question: 'Are there opportunities for competitive play?',
    answer:
      "Yes — we host monthly tournaments and many members play rated chess. But there's no pressure; most of our time is casual, friendly games.",
  },
]

export default function JoinPage() {
  return (
    <div className="bg-gradient-to-br from-amber-50 via-cream to-burgundy-50 paper-texture">
      <div className="px-6 pt-20 pb-10 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1
            className="text-4xl font-bold tracking-tight text-burgundy-800 sm:text-5xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Join the Club
          </h1>
          <p
            className="mt-5 text-lg leading-8 text-forest-700"
            style={{ fontFamily: 'var(--font-baskerville)' }}
          >
            Come for a night or join for the year. Either way, you&rsquo;re welcome at the board.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <section id="pricing" className="scroll-mt-24">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2
              className="text-3xl font-bold text-burgundy-800 sm:text-4xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Membership Options
            </h2>
            <p
              className="mt-4 text-lg leading-8 text-forest-700"
              style={{ fontFamily: 'var(--font-baskerville)' }}
            >
              Memberships are managed on Chess67, where we keep our roster, calendar, and
              registrations.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
            {membershipTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`elegant-card relative flex h-full flex-col p-8 ${
                  tier.recommended
                    ? 'border-2 border-burgundy-600 shadow-xl lg:-mt-3'
                    : ''
                }`}
              >
                {tier.recommended && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-burgundy-600 px-4 py-1 text-sm font-bold"
                    style={{ fontFamily: 'var(--font-playfair)', color: 'var(--cream)' }}
                  >
                    Best value
                  </span>
                )}

                <div className="text-center">
                  <h3
                    className="text-2xl font-bold text-burgundy-800"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className="mt-2 text-forest-700"
                    style={{ fontFamily: 'var(--font-baskerville)' }}
                  >
                    {tier.description}
                  </p>
                  <p className="mt-5">
                    <span
                      className="text-5xl font-bold text-burgundy-800"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span
                        className="ml-1 text-lg font-medium text-forest-600"
                        style={{ fontFamily: 'var(--font-baskerville)' }}
                      >
                        {tier.period}
                      </span>
                    )}
                  </p>
                  {'saving' in tier && tier.saving && (
                    <p
                      className="mt-2 text-sm font-semibold text-amber-700"
                      style={{ fontFamily: 'var(--font-baskerville)' }}
                    >
                      {tier.saving}
                    </p>
                  )}
                </div>

                <ul className="mt-8 mb-8 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckIcon className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-amber-600" />
                      <span
                        className="text-forest-700"
                        style={{ fontFamily: 'var(--font-baskerville)' }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={chess67.membership}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full rounded-lg px-8 py-4 text-center text-lg font-semibold transition-all duration-300 ${
                    tier.recommended
                      ? 'btn-classical'
                      : 'border-2 border-amber-500 text-burgundy-700 hover:bg-amber-100'
                  }`}
                  style={
                    tier.recommended ? undefined : { fontFamily: 'var(--font-playfair)' }
                  }
                >
                  {tier.price === 'Free' ? 'Join for free' : `Join — ${tier.price}`}
                </a>
              </motion.div>
            ))}
          </div>

          <p
            className="mt-8 text-center text-forest-600"
            style={{ fontFamily: 'var(--font-baskerville)' }}
          >
            Prefer to pay at the door? Drop-in is $10 per visit, cash or card. No sign-up needed.
          </p>
        </section>

        <section className="mt-20">
          <div className="classical-divider mb-14"></div>
          <h2
            className="mb-10 text-center text-3xl font-bold text-burgundy-800 sm:text-4xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="elegant-card p-6">
                <h3
                  className="mb-2 text-xl font-bold text-burgundy-800"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {faq.question}
                </h3>
                <p
                  className="text-forest-700"
                  style={{ fontFamily: 'var(--font-baskerville)' }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 text-center">
          <div className="classical-divider mb-14"></div>
          <h2
            className="mb-4 text-3xl font-bold text-burgundy-800"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Still deciding?
          </h2>
          <p
            className="mx-auto mb-8 max-w-2xl text-lg text-forest-700"
            style={{ fontFamily: 'var(--font-baskerville)' }}
          >
            Come to a Thursday night first. Play a few games, meet people, and join later
            if it feels right.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/events" className="btn-classical px-9 py-4 text-lg">
              See upcoming events
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-amber-500 px-9 py-4 text-lg font-semibold text-burgundy-700 transition-colors duration-300 hover:bg-amber-100"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Ask a question
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
