'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'Classes', href: '/classes' },
  { name: 'Join', href: '/join' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative z-50 border-b-2 border-amber-500 bg-cream shadow-elegant">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/android-chrome-192x192.png"
              alt=""
              width={192}
              height={192}
              priority
              aria-hidden="true"
              className="h-12 w-12 object-contain"
              sizes="48px"
            />
            <span
              className="text-xl font-bold leading-tight text-burgundy-800 sm:text-2xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Rockland County Chess Club
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-3 text-burgundy-600 transition-colors duration-200 hover:bg-amber-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden items-center lg:flex lg:gap-x-7">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative py-2 text-lg font-medium text-burgundy-800 transition-colors duration-300 hover:text-amber-700"
              style={{ fontFamily: 'var(--font-playfair)' }}
              prefetch={true}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/join" className="btn-classical">
            Join the Club
          </Link>
        </div>
      </nav>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 z-50 bg-burgundy-900/30 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto border-l-4 border-amber-500 bg-cream px-6 py-6 shadow-elegant sm:max-w-sm">
            <div className="mb-6 flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image
                  src="/android-chrome-192x192.png"
                  alt=""
                  width={192}
                  height={192}
                  aria-hidden="true"
                  className="h-10 w-10 object-contain"
                  sizes="40px"
                />
                <span
                  className="text-lg font-bold text-burgundy-800"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Rockland County Chess Club
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-burgundy-600 transition-colors hover:bg-amber-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-7 w-7" aria-hidden="true" />
              </button>
            </div>

            <div className="classical-divider mb-6"></div>

            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-4 py-3.5 text-lg font-medium text-burgundy-800 transition-all duration-200 hover:bg-amber-100"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                  onClick={() => setMobileMenuOpen(false)}
                  prefetch={true}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mt-8 px-4">
              <Link
                href="/join"
                className="btn-classical block w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join the Club
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
