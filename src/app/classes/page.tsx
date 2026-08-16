import Image from 'next/image'
import Link from 'next/link'
import { AcademicCapIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { chess67, chess67Embed } from '@/lib/chess67'

/**
 * Flip to `true` once class sessions are published on Chess67. Until then the
 * embed would render the weekly social games rather than classes, which would
 * be misleading on this page.
 */
const SHOW_CLASS_EMBED = false

const courses = [
  {
    title: 'Kids Chess Classes',
    audience: 'For young players who already know how the pieces move',
    schedule: 'Tuesday afternoons',
    cost: 'Paid per session',
    icon: UserGroupIcon,
    learn: [
      'Basic tactics and strategy',
      'Opening principles',
      'Endgame fundamentals',
      'Game analysis and improvement',
    ],
  },
  {
    title: 'Adult Chess Classes',
    audience: 'Structured learning for adult players at every level',
    schedule: 'Tuesday evenings',
    cost: 'Free with club membership',
    icon: AcademicCapIcon,
    learn: [
      'Strategic thinking and planning',
      'Advanced tactics and combinations',
      'Opening theory and repertoire',
      'Practical endgame knowledge',
    ],
  },
]

const photos = [
  { src: '/images/thinking-kid.jpeg', alt: 'Young student working through a position' },
  { src: '/images/onlooker-kid.jpeg', alt: 'Student observing a game in progress' },
  { src: '/images/image1.jpg', alt: 'A chess instruction session under way' },
]

export default function ClassesPage() {
  return (
    <div className="bg-gradient-to-br from-amber-50 via-cream to-burgundy-50 paper-texture">
      <div className="px-6 pt-20 pb-10 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1
            className="text-4xl font-bold tracking-tight text-burgundy-800 sm:text-5xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Chess Classes
          </h1>
          <p
            className="mt-5 text-lg leading-8 text-forest-700"
            style={{ fontFamily: 'var(--font-baskerville)' }}
          >
            Structured five-week sessions for kids and adults, taught in Nyack by
            experienced club members.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {photos.map((photo) => (
            <div key={photo.src} className="elegant-card overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={400}
                height={300}
                className="h-48 w-full object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Course descriptions — deliberately free of dates and prices, which
            change every session and live on Chess67. */}
        <section className="mt-20">
          <h2
            className="mb-10 text-center text-3xl font-bold text-burgundy-800 sm:text-4xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            What We Teach
          </h2>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
            {courses.map((course) => {
              const Icon = course.icon
              return (
                <div key={course.title} className="elegant-card flex flex-col p-8">
                  <h3
                    className="text-2xl font-bold text-burgundy-800"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {course.title}
                  </h3>
                  <p
                    className="mt-2 text-forest-700"
                    style={{ fontFamily: 'var(--font-baskerville)' }}
                  >
                    {course.audience}
                  </p>

                  <dl className="mt-6 space-y-3">
                    <div className="flex items-center text-forest-700">
                      <ClockIcon className="mr-3 h-5 w-5 flex-shrink-0 text-amber-600" />
                      <dt className="sr-only">Schedule</dt>
                      <dd style={{ fontFamily: 'var(--font-baskerville)' }}>
                        {course.schedule}
                      </dd>
                    </div>
                    <div className="flex items-center text-forest-700">
                      <Icon className="mr-3 h-5 w-5 flex-shrink-0 text-amber-600" />
                      <dt className="sr-only">Cost</dt>
                      <dd style={{ fontFamily: 'var(--font-baskerville)' }}>
                        {course.cost}
                      </dd>
                    </div>
                  </dl>

                  <h4
                    className="mt-7 mb-3 font-semibold text-burgundy-800"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    What you&rsquo;ll cover
                  </h4>
                  <ul
                    className="flex-1 space-y-2 text-forest-700"
                    style={{ fontFamily: 'var(--font-baskerville)' }}
                  >
                    {course.learn.map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="mr-2 text-amber-600" aria-hidden="true">
                          ♦
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>

        {/* Live session schedule and registration */}
        <section className="mt-20">
          <div className="classical-divider mb-14"></div>
          <h2
            className="mb-4 text-center text-3xl font-bold text-burgundy-800 sm:text-4xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Current Sessions
          </h2>
          <p
            className="mx-auto mb-10 max-w-2xl text-center text-lg text-forest-700"
            style={{ fontFamily: 'var(--font-baskerville)' }}
          >
            Session dates, pricing, and registration are managed on Chess67, so what you
            see there is always current.
          </p>

          {SHOW_CLASS_EMBED ? (
            <div className="elegant-card overflow-hidden p-2 sm:p-4">
              <iframe
                src={chess67Embed.list(10, 12)}
                title="Upcoming Rockland County Chess Club classes"
                loading="lazy"
                className="block h-[700px] w-full rounded-lg border border-amber-600/40 bg-white"
              />
            </div>
          ) : (
            <div className="elegant-card mx-auto max-w-2xl p-10 text-center">
              <p
                className="text-lg text-forest-700"
                style={{ fontFamily: 'var(--font-baskerville)' }}
              >
                The next session hasn&rsquo;t been announced yet. Class dates are posted on
                our Chess67 page as soon as they&rsquo;re set — check there, or ask us and
                we&rsquo;ll let you know when registration opens.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={chess67.calendar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-classical px-8 py-4"
                >
                  Check the calendar
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-amber-500 px-8 py-4 font-semibold text-burgundy-700 transition-colors duration-300 hover:bg-amber-100"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Ask about classes
                </Link>
              </div>
            </div>
          )}
        </section>

        {/* Instructors — awaiting real names, photos, and credentials. */}
        <section className="mt-20">
          <div className="classical-divider mb-14"></div>
          <h2
            className="mb-10 text-center text-3xl font-bold text-burgundy-800 sm:text-4xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Who Teaches
          </h2>
          <div className="elegant-card mx-auto max-w-3xl p-8">
            <p
              className="text-lg leading-relaxed text-forest-700"
              style={{ fontFamily: 'var(--font-baskerville)' }}
            >
              Our classes are taught by experienced club members — tournament players and
              patient educators who tailor their teaching to each student&rsquo;s level.
              Every instructor is a familiar face on Thursday nights, so students meet
              people they&rsquo;ll keep seeing across the board.
            </p>
          </div>
        </section>

        <section className="mt-20 text-center">
          <div className="classical-divider mb-14"></div>
          <h2
            className="mb-4 text-3xl font-bold text-burgundy-800"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Ready to Improve Your Chess?
          </h2>
          <p
            className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-forest-700"
            style={{ fontFamily: 'var(--font-baskerville)' }}
          >
            Whether you&rsquo;re learning the rules or sharpening a competitive edge,
            you&rsquo;ll find the support you need here.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/join" className="btn-classical px-9 py-4 text-lg">
              Become a member
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
