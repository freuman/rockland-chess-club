import Link from 'next/link'
import { chess67 } from '@/lib/chess67'

const rhythm = [
  {
    when: 'Every Thursday',
    what: 'Social Chess Games',
    detail: 'Casual games, instruction for beginners, and friendly competition. 7:00–9:00 PM.',
  },
  {
    when: 'Monthly',
    what: 'Tournaments',
    detail: 'Rated and unrated events for players who want a bit more on the line.',
  },
  {
    when: 'Seasonally',
    what: 'Chess Classes',
    detail: 'Structured five-week sessions for kids and adults, taught by club members.',
  },
]

export default function UpcomingEvents() {
  return (
    <section className="bg-gradient-to-br from-amber-50 via-cream to-burgundy-50 py-20 paper-texture">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          <h2
            className="text-3xl font-bold text-burgundy-800 sm:text-4xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            What&rsquo;s On
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-lg text-forest-700"
            style={{ fontFamily: 'var(--font-baskerville)' }}
          >
            Our week has a steady rhythm. The full calendar, with dates and registration,
            lives on Chess67.
          </p>
        </div>

        <dl className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {rhythm.map((item) => (
            <div key={item.what} className="elegant-card p-7">
              <dt>
                <span
                  className="block text-xs font-bold uppercase tracking-widest text-amber-700"
                  style={{ fontFamily: 'var(--font-baskerville)' }}
                >
                  {item.when}
                </span>
                <span
                  className="mt-2 block text-xl font-bold text-burgundy-800"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {item.what}
                </span>
              </dt>
              <dd
                className="mt-3 text-forest-700"
                style={{ fontFamily: 'var(--font-baskerville)' }}
              >
                {item.detail}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/events" className="btn-classical px-9 py-4 text-lg">
            View the calendar
          </Link>
          <a
            href={chess67.club}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border-2 border-amber-500 px-9 py-4 text-lg font-semibold text-burgundy-700 transition-colors duration-300 hover:bg-amber-100"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Our club on Chess67
          </a>
        </div>
      </div>
    </section>
  )
}
