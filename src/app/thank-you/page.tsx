import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

export default function ThankYouPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-gradient-to-br from-amber-50 via-cream to-burgundy-50 px-6 py-20 paper-texture">
      <div className="elegant-card w-full max-w-md p-10 text-center">
        <CheckCircleIcon
          className="mx-auto mb-6 h-16 w-16 text-forest-600"
          aria-hidden="true"
        />

        <h1
          className="mb-4 text-3xl font-bold text-burgundy-800"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Thank You
        </h1>

        <p
          className="mb-8 text-forest-700"
          style={{ fontFamily: 'var(--font-baskerville)' }}
        >
          Your message has been sent. We&rsquo;ll get back to you within 24 hours.
        </p>

        <Link href="/" className="btn-classical px-8 py-3">
          Return home
        </Link>
      </div>
    </div>
  )
}
